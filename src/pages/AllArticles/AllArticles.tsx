import React, { useState } from "react";
import classes from "./AllArticles.module.scss";
import { Drawer, Empty } from "antd";
import BlogCard from "../../components/BlogCard/BlogCard";
import { useAppSelector } from "../../redux/hooks";
import ArticleForm from "../../components/forms/ArticleForm/ArticleForm";
import { ArticleItem } from "../../redux/type";

const AllArticles: React.FC = () => {
  const { status, articles } = useAppSelector((state) => state.articles);
  const [open, setOpen] = useState<boolean>(false);
  const [currentArticle, setCurrentArticle] = useState<ArticleItem>();

  const showDrawer = (): void => {
    setOpen(true);
  };

  const onClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.articlesWrapper}>
        {status === "fulfilled"
          ? articles.map((article) => (
              <BlogCard
                setCurrentArticle={setCurrentArticle}
                article={article}
                key={article.id}
                admin={true}
                showDrawer={showDrawer}
              />
            ))
          : "Empty"}
      </div>
      <Drawer
        title="Update Article"
        placement="right"
        onClose={onClose}
        open={open}
        destroyOnClose={true}
        width={600}
      >
        <ArticleForm
          onClose={onClose}
          edit={true}
          currentArticle={currentArticle}
        />
      </Drawer>
    </>
  );
};

export default AllArticles;
