import { ArticleItem } from "../../../redux/type";

const validateArticleForm = (values: ArticleItem) => {
  const errors: any = {};

  if (!values.mainTitle) {
    errors.mainTitle = "Required";
  }

  if (!values.blogCartDescribtion) {
    errors.blogCartDescribtion = "Required";
  }

  if (!values.firstSubtitle) {
    errors.firstSubtitle = "Required";
  }

  if (!values.firstDescribtion) {
    errors.firstDescribtion = "Required";
  }

  if (!values.bgBanner) {
    errors.bgBanner = "Required";
  }

  if (!values.image) {
    errors.image = "Required";
  }

  if (!values.secondlySubtitle) {
    errors.secondlySubtitle = "Required";
  }

  if (!values.secondlyDescribtion) {
    errors.secondlyDescribtion = "Required";
  }
  if (!values.date) {
    errors.date = "Required";
  }

  if (!values.type) {
    errors.type = "Required";
  }

  return errors;
};

export default validateArticleForm;
