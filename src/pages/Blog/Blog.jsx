import React from "react";
import classes from "./Blog.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import Container from "../../components/Container/Container";
import ProductSlider from "../../components/Sliders/ProductSlider/ProductSlider";

const Blog = () => {
  const { articleId } = useParams();
  const loader = useSelector((state) => state.loader.loader);
  const currentArcticle = useSelector((state) => {
    if (articleId === "default") {
      return state.articles.data[0];
    } else {
      return state.articles.data.find((el) => el.id === Number(articleId));
    }
  });
  const products = useSelector((state) => state.products.data);
  console.log(loader);
  console.log(currentArcticle);

  return (
    <>
      {!loader && currentArcticle ? (
        <div className={classes.page}>
          <div
            className={classes.hero}
            style={{
              backgroundImage: `url(${currentArcticle.bgBanner})`,
            }}
          >
            <h2 className={classes.mainTitle}>{currentArcticle.mainTitle}</h2>
          </div>
          <Container>
            <div className={classes.info}>
              <div className={classes.infoWrapper}>
                <h3 className={classes.subtitle}>
                  {currentArcticle.firstSubtitle}
                </h3>
                <p className={classes.text}>
                  {currentArcticle.firstDescribtion}
                </p>
                <img
                  className={classes.image}
                  src={currentArcticle.image}
                  alt="article"
                />
                <h3 className={classes.subtitle}>
                  {currentArcticle.secondlySubtitle}
                </h3>
                <p className={classes.text}>
                  {currentArcticle.secondlyDescribtion}
                </p>
              </div>
              <div className={classes.banners}></div>
            </div>
          </Container>
          <ProductSlider products={products} title={"You May Also Like"} />
        </div>
      ) : null}
    </>
  );
};

export default Blog;
