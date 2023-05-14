import React from "react";
import classes from "./BlogCard.module.scss";
import OutLineButton from "../UI/Buttons/OutLineButton";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ArticleItem } from "../../redux/type";
import { useAppDispatch } from "../../redux/hooks";
import { deleteArticle } from "../../redux/slices/articles";

type BlogCardProps = {
  article: ArticleItem;
  admin: boolean;
  showDrawer?: () => void;
  setCurrentArticle?: (param: ArticleItem) => void;
};

const BlogCard: React.FC<BlogCardProps> = ({
  article,
  admin,
  showDrawer,
  setCurrentArticle,
}) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {admin ? (
        <div className={classes.cardWrapper}>
          <div className={classes.card}>
            <div className={classes.describtion}>
              <p className={classes.type}>{article.type}</p>
              <h3 className={classes.title}>{article.mainTitle}</h3>
              <p className={classes.text}>
                {article.firstDescribtion.slice(0, 210)}
              </p>
            </div>
            <p className={classes.date}>{article.date}</p>
          </div>
          <div className={classes.btns}>
            <OutLineButton
              onClick={() => {
                showDrawer && showDrawer();
                setCurrentArticle && setCurrentArticle(article);
              }}
              small={"4px 14px"}
              borderRadius={true}
            >
              <EditOutlined /> Edit
            </OutLineButton>
            <OutLineButton
              small={"4px 14px"}
              borderRadius={true}
              delete
              onClick={() => {
                dispatch(deleteArticle(article.id));
              }}
            >
              <DeleteOutlined /> Delete
            </OutLineButton>
          </div>
        </div>
      ) : (
        <Link to={`/blog/${article.id}`}>
          <div className={`${classes.card} ${classes.cursor}`}>
            <div className={classes.describtion}>
              <p className={classes.type}>{article.type}</p>
              <h3 className={classes.title}>{article.mainTitle}</h3>
              <p className={classes.text}>{article.blogCartDescribtion}</p>
            </div>
            <p className={classes.date}>{article.date}</p>
          </div>
        </Link>
      )}
    </>
  );
};

export default BlogCard;
