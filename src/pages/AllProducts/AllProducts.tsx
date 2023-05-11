import classes from "./AllProducts.module.scss";
import React, { useState } from "react";
import { Table, Image, Drawer, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import OutLineButton from "../../components/UI/Buttons/OutLineButton";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ClothesProduct } from "../../redux/type";
import { deleteClother } from "../../redux/slices/clothes";
import ProductForm from "../../components/forms/ProductForm/ProductForm";

const AllProducts: React.FC = () => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState<boolean>(false);
  const [activeEditProduct, setActiveEditProduct] = useState<ClothesProduct>();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const data = useAppSelector((state) => state.clothes.data);

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
      render: (product: ClothesProduct) => {
        return (
          <div className={classes.active}>
            <OutLineButton
              onClick={() => {
                showDrawer();
                setActiveEditProduct(product);
              }}
              small={"4px 14px"}
              borderRadius
            >
              <EditOutlined /> Edit
            </OutLineButton>
            <OutLineButton
              small={"4px 14px"}
              borderRadius
              delete
              onClick={() => {
                dispatch(deleteClother(product.id));
              }}
            >
              <DeleteOutlined /> Delete
            </OutLineButton>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        rowKey={(value: ClothesProduct) => value.id}
        columns={columns}
        dataSource={data}
      />
      <>
        <Drawer
          width={700}
          title="Basic Drawer"
          placement="right"
          onClose={onClose}
          destroyOnClose={true}
          open={open}
        >
          <ProductForm
            onClose={onClose}
            add={false}
            editProduct={activeEditProduct}
          />
        </Drawer>
      </>
    </>
  );
};

export default AllProducts;
