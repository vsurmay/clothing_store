import React, { useState } from "react";
import Container from "../Container/Container";
import classes from "./FilterProduct.module.scss";
import CheckBoxBlack from "../UI/CheckBoxes/CheckBoxBlack";
import ProductsWrapper from "../ProductsWrapper/ProductsWrapper";
import { useAppSelector } from "../../redux/hooks";
import GrayButton from "../UI/Buttons/GrayButton";

const FilterProducts: React.FC = () => {
  const { data: allClothes, status } = useAppSelector((state) => state.clothes);

  const [activeCheckBox, setActiveCheckBox] = useState<string[]>([]);
  const [productsCount, setProductsCount] = useState<number>(8);

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
      ? allClothes
      : allClothes.filter((product) =>
          activeCheckBox.includes(product.category)
        );

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
              {filterProducts.length > 8 && (
                <GrayButton
                  className={classes.loadMore}
                  onClick={() => {
                    setProductsCount(productsCount + 4);
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
