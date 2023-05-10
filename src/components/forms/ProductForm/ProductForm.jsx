import React, { useEffect, useState } from "react";
import classes from "./ProductForm.module.scss";
import { Checkbox, Form, Input, InputNumber, message, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import {
//   adedProducts,
//   editProducts,
//   getProducts,
// } from "../../redux/actions/productsAction";
import { sizeOptions, colorOptions } from "./productFormData";
import { useNavigate } from "react-router-dom";
import FillButton from "../../UI/Buttons/FillButton";

const ProductForm = ({ add, editProduct }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectColors, setSelectColors] = useState([]);

  // const allProductCodes = useSelector((state) =>
  //   state.products.data.map((product) => product.productCode)
  // );

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (editProduct) {
  //     setSelectColors(editProduct.color);
  //   }
  // }, []);

  const [messageApi, contextHolder] = message.useMessage();

  const success = (message) => {
    messageApi.open({
      type: "success",
      content: message,
    });
  };
  const error = (errorInfo) => {
    messageApi.open({
      type: "error",
      content: errorInfo.errorFields[0].errors[0],
    });
  };

  // const validateUniqueCode = (rules, value, callback) => {
  //   if (add) {
  //     if (allProductCodes.includes(value)) {
  //       callback("Plese enter other value");
  //     } else {
  //       callback();
  //     }
  //   } else {
  //     if (
  //       allProductCodes.includes(value) &&
  //       editProduct.productCode !== value
  //     ) {
  //       callback("Plese enter other value");
  //     } else {
  //       callback();
  //     }
  //   }
  // };

  // const onFinish = (values) => {
  //   console.log(values);
  //   if (add) {
  //     success("The product was added successfully");
  //     dispatch(adedProducts(values));
  //     navigate("/admin/all_products");
  //   } else {
  //     success("The product has been changed successfully");
  //     dispatch(editProducts(values, editProduct.id));
  //     navigate("/admin/all_products");
  //   }
  // };
  // const onFinishFailed = (errorInfo) => {
  //   error(errorInfo);
  // };

  return (
    <>
      {contextHolder}
      <Form
        layout="vertical"
        className={`${add ? classes.formAdd : classes.formEdit}`}
        name={add ? "Add product" : "Edit Product"}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={!add ? editProduct : null}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Code"
          name="productCode"
          rules={[
            {
              required: true,
              message: "Please input unique product code!",
            },
            // {
            //   validator: validateUniqueCode,
            // },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please select category",
            },
          ]}
        >
          <Select
            style={{ width: 120 }}
            options={[
              { value: "Best sellers", label: "Best sellers" },
              { value: "Top women", label: "Top women" },
              { value: "New arivals", label: "New arivals" },
              { value: "Collection: summer", label: "Collection: summer" },
              { value: "Collection: spring", label: "Collection: spring" },
              { value: "Trending", label: "Trending" },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Size"
          name="size"
          rules={[
            {
              required: true,
              message: "Please input size!",
            },
          ]}
        >
          <Checkbox.Group className={classes.group}>
            {sizeOptions.map((el) => (
              <div key={el.key} className={classes.checkbox}>
                <span> {el.label.toUpperCase()}</span>
                <Checkbox value={el.key}></Checkbox>
              </div>
            ))}
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          label="Color"
          name="color"
          rules={[
            {
              required: true,
              message: "Please input size!",
            },
          ]}
        >
          <Checkbox.Group
            onChange={(e) => {
              setSelectColors(e);
            }}
            className={classes.group}
          >
            {colorOptions.map((el) => (
              <div
                style={{ background: el.key, padding: "5px" }}
                key={el.key}
                className={classes.checkbox}
              >
                <span> {el.label}</span>
                <Checkbox value={el.key}></Checkbox>
              </div>
            ))}
          </Checkbox.Group>
        </Form.Item>

        {selectColors
          ? selectColors.map((color) => (
              <Form.Item
                className={classes.test}
                key={color}
                name={["images", color]}
                label={
                  <div
                    style={{
                      background: color,
                      width: "20px",
                      height: "20px",
                      borderRadius: "5px",
                    }}
                  ></div>
                }
              >
                <Input addonBefore={"Url"} />
              </Form.Item>
            ))
          : null}

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input price!",
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="Discount"
          name="discount"
          rules={[
            {
              required: true,
              message: "Please input discount!",
            },
          ]}
        >
          <InputNumber addonBefore={"%"} min={0} max={100} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <FillButton formButton type="submit">
            {add ? "Add Product" : "Edit Product"}
          </FillButton>
        </Form.Item>
      </Form>
    </>
  );
};

export default ProductForm;
