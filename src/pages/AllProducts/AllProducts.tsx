import classes from "./AllProducts.module.scss";
import React from "react";
import { Table, Image } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
// import { deleteProducts } from "../../redux/actions/productsAction";
import OutLineButton from "../../components/UI/Buttons/OutLineButton";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { ClothesProduct } from "../../redux/type";
import { ColumnsType } from "antd/es/table";

const AllProducts = () => {
  const data = useAppSelector((state) => state.clothes.data);

  // const dispatch = useDispatch();

  const columns: any = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "images",
      key: "image",
      render: (url: Record<string, string>, product: ClothesProduct) => {
        const firstColor = product.color[0];
        return <Image src={url[firstColor]} width={50} />;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Colors",
      dataIndex: "color",
      key: "color",
      render: (colors: string[]) => (
        <div className={classes.wrapper}>
          {colors.map((el) => (
            <span
              style={{ background: el }}
              key={el}
              className={classes.color}
            ></span>
          ))}
        </div>
      ),
    },
    ,
    {
      title: "Sizes",
      dataIndex: "size",
      key: "size",
      render: (sizes: string[]) => (
        <div className={classes.wrapper}>
          {sizes.map((el) => (
            <span key={el} className={classes.size}>
              {el.toUpperCase()}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "Active",
      key: "active",
      // render: (product) => {
      //   return (
      //     <div className={classes.active}>
      //       <Link to={`edit_product/${product.id}`}>
      //         <OutLineButton small={"4px 14px"} borderRadius={"5px"}>
      //           <EditOutlined /> Edit
      //         </OutLineButton>
      //       </Link>
      //       <OutLineButton
      //         small={"4px 14px"}
      //         borderRadius={"5px"}
      //         delete
      //         onClick={() => {
      //           dispatch(deleteProducts(product));
      //         }}
      //       >
      //         <DeleteOutlined /> Delete
      //       </OutLineButton>
      //     </div>
      //   );
      // },
    },
  ];

  return (
    <>
      <Table
        rowKey={(value: ClothesProduct) => value.id}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};

export default AllProducts;
