import React, { useState } from "react";
import Container from "../Container/Container";
import classes from "./FilterProduct.module.scss";
import CheckBoxBlack from "../UI/CheckBoxes/CheckBoxBlack";
import ProductsWrapper from "../ProductsWrapper/ProductsWrapper";
import { useAppSelector } from "../../redux/hooks";
import GrayButton from "../UI/Buttons/GrayButton";
import { BeatLoader } from "react-spinners";

const FilterProducts: React.FC = () => {
  const { data: allClothes, status } = useAppSelector((state) => state.clothes);

  const [activeCheckBox, setActiveCheckBox] = useState<string[]>([]);
  const [productsCount, setProductsCount] = useState<number>(8);
  const [loader, setLoader] = useState<boolean>(false);

  const fakeLoader = async () => {
    await new Promise<void>((resolve) => {
      return setTimeout(() => {
        resolve();
      }, 500);
    });
    setLoader(false);
    setProductsCount(productsCount + 4);
  };

  const allCategory: string[] = [
    "Best sellers",
    "Top women",
    "New arivals",
    "Collection: summer",
    "Collection: spring",
    "Trending",
  ];

  const filterProducts =
    !activeCheckBox.length && allClothes
      ? allClothes.filter((_, index) => index < productsCount)
      : allClothes
          .filter((product) => activeCheckBox.includes(product.category))
          .filter((_, index) => index < productsCount);

  return (
    <Container>
      <div className={classes.filterSection}>
        <div className={classes.filter}>
          <h3 className={classes.filterTitle}>Shop Some Wear:</h3>
          <ul className={classes.filterList}>
            {allCategory.map((el) => (
              <li key={el} className={classes.filterItem}>
                <CheckBoxBlack
                  labeltext={el}
                  setProductsCount={setProductsCount}
                  setActiveCheckBox={setActiveCheckBox}
                  activeCheckBox={activeCheckBox}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.filtersProducts}>
          {status === "fulfilled" ? (
            <>
              <ProductsWrapper products={filterProducts} skeleton={false} />
              {loader && (
                <BeatLoader
                  className={classes.loader}
                  size={20}
                  color="#000000"
                />
              )}

              {filterProducts.length >= 8 && !loader && (
                <GrayButton
                  className={classes.loadMore}
                  onClick={() => {
                    setLoader(true);
                    fakeLoader();
                  }}
                >
                  load more
                </GrayButton>
              )}
            </>
          ) : (
            <ProductsWrapper skeleton={true} products={[...new Array(8)]} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default FilterProducts;
