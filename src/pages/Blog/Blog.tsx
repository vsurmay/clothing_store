import React, { useEffect } from "react";
import classes from "./Blog.module.scss";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import ProductSlider from "../../components/Sliders/ProductSlider/ProductSlider";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getArticleItem } from "../../redux/slices/articles";
import { Slider } from "antd";
import Spiner from "../../components/Spiner/Spiner";

const Blog = () => {
  const dispatch = useAppDispatch();
  const { articleId } = useParams();

  const { articleItem, articleItemStatus: status } = useAppSelector(
    (state) => state.articles
  );
  const clotherProducts = useAppSelector((state) => state.clothes.data);

  useEffect(() => {
    articleId && dispatch(getArticleItem(articleId));
  }, []);

  console.log(articleItem.firstDescribtion.split("\\n"));

  if (status === "pending") {
    return <Spiner />;
  }

  return (
    <>
      {status === "fulfilled" && (
        <div className={classes.page}>
          <div
            className={classes.hero}
            style={{
              backgroundImage: `url(${articleItem.bgBanner})`,
            }}
          >
            <h2 className={classes.mainTitle}>
              {articleItem.mainTitle.toUpperCase()}
            </h2>
          </div>
          <Container>
            <div className={classes.info}>
              <div className={classes.infoWrapper}>
                <h3 className={classes.subtitle}>
                  {articleItem.firstSubtitle}
                </h3>
                {articleItem.firstDescribtion
                  .split("\\n")
                  .map((text, index) => (
                    <p key={index} className={classes.text}>
                      {text}
                    </p>
                  ))}
                <img
                  className={classes.image}
                  src={articleItem.image}
                  alt="article"
                />
                <h3 className={classes.subtitle}>
                  {articleItem.secondlySubtitle}
                </h3>
                {articleItem.firstDescribtion
                  .split("\\n")
                  .map((text, index) => (
                    <p key={index} className={classes.text}>
                      {text}
                    </p>
                  ))}
              </div>
              <div className={classes.banners}></div>
            </div>
          </Container>
          <ProductSlider
            products={clotherProducts}
            title={"You May Also Like"}
          />
        </div>
      )}
    </>
  );
};

export default Blog;
