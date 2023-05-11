import React from "react";
import ContentLoader from "react-content-loader";

const ProductCardSkeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={344}
    height={467}
    viewBox="0 0 344 467"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="613" y="186" rx="0" ry="0" width="27" height="32" />
    <rect x="459" y="289" rx="0" ry="0" width="109" height="49" />
    <rect x="0" y="0" rx="0" ry="0" width="344" height="344" />
    <rect x="0" y="350" rx="0" ry="0" width="344" height="15" />
    <rect x="0" y="370" rx="0" ry="0" width="351" height="20" />
    <rect x="0" y="395" rx="0" ry="0" width="347" height="30" />
    <rect x="0" y="495" rx="0" ry="0" width="344" height="38" />
    <rect x="0" y="430" rx="0" ry="0" width="347" height="25" />
  </ContentLoader>
);

export default ProductCardSkeleton;
