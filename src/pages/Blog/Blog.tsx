import React, { useEffect } from "react";
import classes from "./Blog.module.scss";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import ProductSlider from "../../components/Sliders/ProductSlider/ProductSlider";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getArticleItem } from "../../redux/slices/articles";

import useFireBaseStorage from "../../hooks/useFireBaseStorage";
import SpinerPage from "../../components/Spiners/SpinerPage/SpinerPage";
import { FadeLoader } from "react-spinners";

const Blog: React.FC = () => {
  const dispatch = useAppDispatch();
  const { articleId } = useParams();

  const { articleItem, articleItemStatus: status } = useAppSelector(
    (state) => state.articles
  );

  const clotherProducts = useAppSelector((state) => state.clothes.data);

  useEffect(() => {
    window.scrollTo(0, 0);
    articleId && dispatch(getArticleItem(articleId));
  }, []);

  const { url: bgUrl, loading: bgLoading } = useFireBaseStorage(
    "articles/" + articleItem.bgBanner
  );

  const { url: imageUrl, loading: imageLoading } = useFireBaseStorage(
    "articles/" + articleItem.image
  );

  if (status === "pending") {
    return <SpinerPage />;
  }

  return (
    <>
      {status === "fulfilled" && (
        <div className={classes.page}>
          <div
            className={classes.hero}
            style={{
              backgroundColor: "#eee",
              backgroundImage: `url(${bgLoading ? null : bgUrl})`,
            }}
          >
            {bgLoading ? (
              <FadeLoader className={classes.bgSpinner} color="#000000" />
            ) : (
              <h2 className={classes.mainTitle}>
                {articleItem.mainTitle.toUpperCase()}
              </h2>
            )}
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
                {!imageLoading && (
                  <img className={classes.image} src={imageUrl} alt="article" />
                )}

                <h3 className={classes.subtitle}>
                  {articleItem.secondlySubtitle}
                </h3>
                {articleItem.secondlyDescribtion
                  .split("\\n")
                  .map((text, index) => (
                    <p key={index} className={classes.text}>
                      {text}
                    </p>
                  ))}
              </div>
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
