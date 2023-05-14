import React from "react";
import ArticleForm from "../../components/forms/ArticleForm/ArticleForm";

const AddActicles: React.FC = () => {
  return (
    <div>
      <ArticleForm edit={false} />
    </div>
  );
};

export default AddActicles;
