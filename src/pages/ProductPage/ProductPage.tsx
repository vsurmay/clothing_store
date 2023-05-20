import React, { useEffect, useState } from "react";
import classes from "./ProductPage.module.scss";
import { InputNumber, Image, message, Collapse } from "antd";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getClotherProduct } from "../../redux/slices/clothes";
import { BasketItem } from "../../redux/type";
import calculationNewPrice from "../../utils/calculationNewPrice";
import { adedBasketItem } from "../../redux/slices/basket";

import PickColor from "../../components/PickColor/PickColor";
import PickSize from "../../components/PickSize/PickSize";
import FillButton from "../../components/UI/Buttons/FillButton";
import OutLineButton from "../../components/UI/Buttons/OutLineButton";
import { HeartOutlined } from "@ant-design/icons";
import SpinerPage from "../../components/Spiners/SpinerPage/SpinerPage";
import useFireBaseStorage from "../../hooks/useFireBaseStorage";
import Container from "../../components/Container/Container";
import ProductSlider from "../../components/Sliders/ProductSlider/ProductSlider";

const ProductPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const {
    clotherProduct: product,
    statusClotherProduct: status,
    data: allProducts,
  } = useAppSelector((state) => state.clothes);
  const allUniqueCodes = useAppSelector((state) => state.basket.allUniqueCodes);
  const [activeColor, setActiveColor] = useState<string>(product.color[0]);
  const [activeSize, setActiveSize] = useState<string>(product.size[0]);
  const [quantityProduct, setQuantityProduct] = useState<number>(1);
  const [messageApi, contextHolder] = message.useMessage();

  const { url, loading } = useFireBaseStorage(
    "clother/" + product.images[activeColor]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if (productId) {
      dispatch(getClotherProduct(productId));
    }
  }, []);

  useEffect(() => {
    if (status === "fulfilled") {
      setActiveSize(product.size[0]);
      setActiveColor(product.color[0]);
    }
  }, [status]);

  const success = () => {
    messageApi.open({
      type: "success",
      content: "The product has been added to the cart",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Sorry but the product is basket",
    });
  };

  function onSubmit() {
    const newUniqueCode = product.name + activeColor + activeSize;
    if (allUniqueCodes.includes(newUniqueCode)) {
      error();
    } else {
      const basketItem: BasketItem = {
        name: product.name,
        price: calculationNewPrice(product.price, product.discount),
        color: activeColor,
        size: activeSize,
        quantity: quantityProduct,
        image: product.images[activeColor],
        productCode: product.productCode,
        uniqueCode: newUniqueCode,
      };
      dispatch(adedBasketItem(basketItem));
      success();
    }
  }

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const { Panel } = Collapse;

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  if (status === "pending") {
    return <SpinerPage />;
  }

  return (
    <>
      {contextHolder}
      <Container>
        <div className={classes.productPage}>
          <div className={classes.wrapper}>
            <div className={classes.images}>
              {loading ? (
                <Image
                  width={624}
                  src={"error"}
                  fallback="data:image/png;base64,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"
                />
              ) : (
                <Image width={624} src={url} />
              )}
            </div>
            <div className={classes.info}>
              <span className={classes.infoBrend}>Fendi</span>
              <h2 className={classes.title}>{product.name}</h2>
              <p className={classes.subtitle}>Select Color</p>
              <PickColor
                setActiveColor={setActiveColor}
                activeColor={activeColor}
                colors={product.color}
              />
              <p className={classes.subtitle}>
                Select size (Inches)<span>Size guide</span>
              </p>
              <PickSize
                availableSizes={product.size}
                setActiveSize={setActiveSize}
                activeSize={activeSize}
              />
              <div className={classes.priceWrapper}>
                <div className={classes.quantity}>
                  <p className={classes.subtitle}>quantity</p>
                  <InputNumber
                    onChange={(value) => {
                      value && setQuantityProduct(value);
                    }}
                    defaultValue={quantityProduct}
                    min={1}
                  />
                </div>
                <div className={classes.price}>
                  <p className={classes.subtitle}>Price total</p>
                  {product.discount ? (
                    <p className={`${classes.priceValue} ${classes.newPrice}`}>
                      {(
                        quantityProduct *
                        calculationNewPrice(product.price, product.discount)
                      ).toFixed(2)}{" "}
                      EUR{" "}
                      <span className={classes.oldPrice}>
                        {(quantityProduct * product.price).toFixed(2)} EUR
                      </span>
                    </p>
                  ) : (
                    <p className={classes.priceValue}>
                      {(
                        quantityProduct *
                        calculationNewPrice(product.price, product.discount)
                      ).toFixed(2)}{" "}
                      EUR
                    </p>
                  )}
                </div>
              </div>
              <div className={classes.btns}>
                <FillButton onClick={onSubmit}>add to bag</FillButton>
                <OutLineButton small={"8px 44px"}>
                  <HeartOutlined /> save
                </OutLineButton>
              </div>
            </div>
          </div>
          <div className={classes.description}>
            <Collapse
              className={classes.acord}
              expandIconPosition={"end"}
              bordered={false}
              expandIcon={({ isActive }) => (
                <div className={classes.iconContainer}>
                  <span className={classes.iconLine1}></span>
                  <span
                    className={`${classes.iconLine2} ${
                      isActive && classes.iconLine2Active
                    }`}
                  ></span>
                </div>
              )}
              onChange={onChange}
            >
              <Panel className={classes.acordItem} header="Details" key="1">
                <div className={classes.acordItemContent}>
                  <div className={classes.acordItemContentColumn}>
                    <h3 className={classes.subtitle}>About Product</h3>
                    <p className={classes.describtionText}>
                      ABOUT PRODUCT Cool off this summer in the Mini Ruffle
                      Smocked Tank Top from our very own LA Hearts.
                      <p className={classes.describtionText}>
                        This tank features a smocked body, adjustable straps,
                        scoop neckline, ruffled hems, and a cropped fit.
                      </p>
                    </p>
                  </div>
                  <div className={classes.acordItemContentColumn}>
                    <h3 className={classes.subtitle}>Shipping</h3>
                    <p className={classes.describtionText}>
                      We offer Free Standard Shipping for all orders over $75 to
                      the 50 states and the District of Columbia. The minimum
                      order value must be $75 before taxes, shipping and
                      handling. Shipping fees are non-refundable.
                    </p>
                    <p className={classes.describtionText}>
                      Please allow up to 2 business days (excluding weekends,
                      holidays, and sale days) to process your order.
                    </p>
                    <p className={classes.describtionText}>
                      Processing Time + Shipping Time = Delivery Time.
                    </p>
                  </div>
                </div>
              </Panel>
              <Panel className={classes.acordItem} header="Advantages" key="2">
                <h3 className={classes.subtitle}> advantages product</h3>
                <ul className={classes.advantagesList}>
                  <li className={classes.advantagesListItem}>TEst</li>
                  <li className={classes.advantagesListItem}>TEst</li>
                  <li className={classes.advantagesListItem}>TEst</li>
                </ul>
              </Panel>
            </Collapse>
          </div>
          <ProductSlider title="You May Also Like" products={allProducts} />
        </div>
      </Container>
    </>
  );
};

export default ProductPage;
