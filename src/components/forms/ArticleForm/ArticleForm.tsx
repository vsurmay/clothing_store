import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import React from "react";
import classes from "./ArticleForm.module.scss";
import { useDispatch } from "react-redux";
// import { adedArticle, editArticle } from "../../redux/actions/articlesAction";
import { useNavigate } from "react-router-dom";
import validateArticleForm from "./validateArticleForm";
import FillButton from "../../UI/Buttons/FillButton";
import { ArticleItem } from "../../../redux/type";
import { useAppDispatch } from "../../../redux/hooks";
import { adedArticles, updateArticle } from "../../../redux/slices/articles";

type ArticleFormProps = {
  edit: boolean;
  currentArticle?: ArticleItem;
  onClose?: () => void;
};

const ArticleForm: React.FC<ArticleFormProps> = ({
  edit,
  currentArticle,
  onClose,
}) => {
  const dispactch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: ArticleItem = {
    mainTitle: "",
    firstSubtitle: "",
    firstDescribtion: "",
    bgBanner: "",
    image: "",
    secondlySubtitle: "",
    secondlyDescribtion: "",
    type: "",
    date: "",
    id: "",
    blogCartDescribtion: "",
  };

  return (
    <div>
      <Formik
        initialValues={edit ? currentArticle || initialValues : initialValues}
        validate={validateArticleForm}
        onSubmit={(values) => {
          if (edit) {
            dispactch(updateArticle(values));
            onClose && onClose();
          } else {
            dispactch(adedArticles(values));
            navigate("/admin/all_articles");
          }
        }}
      >
        <Form>
          <div className={classes.formWrapper}>
            <label className={classes.label}>
              Type
              <Field className={classes.input} name={"type"} type={"text"} />
            </label>
            <p className={classes.error}>
              <ErrorMessage name="type" />
            </p>

            <label className={classes.label}>
              Main Title
              <Field
                className={classes.input}
                name={"mainTitle"}
                type={"text"}
              />
            </label>
            <p className={classes.error}>
              <ErrorMessage name="mainTitle" />
            </p>

            <label className={classes.label}>
              Background image for banner
              <Field
                className={classes.input}
                name={"bgBanner"}
                type={"text"}
              />
            </label>
            <p className={classes.error}>
              <ErrorMessage name="bgBanner" />
            </p>

            <label className={classes.label}>
              First subtitle
              <Field
                className={classes.input}
                name={"firstSubtitle"}
                type={"text"}
              />
            </label>
            <p className={classes.error}>
              <ErrorMessage name="firstSubtitle" />
            </p>

            <label className={classes.label}>
              First describtion
              <Field
                className={classes.input}
                name={"firstDescribtion"}
                as={"textarea"}
              />
            </label>
            <p className={classes.error}>
              <ErrorMessage name="firstDescribtion" />
            </p>

            <label className={classes.label}>
              blogCartDescribtion
              <Field
                className={classes.input}
                name={"blogCartDescribtion"}
                as={"textarea"}
              />
            </label>
            <p className={classes.error}>
              <ErrorMessage name="blogCartDescribtion" />
            </p>

            <label className={classes.label}>
              Image
              <Field className={classes.input} name={"image"} type={"text"} />
            </label>
            <p className={classes.error}>
              <ErrorMessage name="image" />
            </p>

            <label className={classes.label}>
              Secondly subtitle
              <Field
                className={classes.input}
                name={"secondlySubtitle"}
                type={"text"}
              />
            </label>
            <p className={classes.error}>
              <ErrorMessage name="secondlySubtitle" />
            </p>

            <label className={classes.label}>
              Secondly describtion
              <Field
                className={classes.input}
                name={"secondlyDescribtion"}
                as={"textarea"}
              />
            </label>
            <p className={classes.error}>
              <ErrorMessage name="secondlyDescribtion" />
            </p>

            <label className={classes.label}>
              Date
              <Field className={classes.input} name={"date"} type={"text"} />
            </label>
            <p className={classes.error}>
              <ErrorMessage name="date" />
            </p>
            <FillButton className={classes.btn} type="submit" formButton>
              {edit ? "Change Article" : "Aded Arcticle"}
            </FillButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ArticleForm;
