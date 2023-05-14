import React from "react";
import "./ProductSlider.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../Container/Container";
import ProductCard from "../../ProductCard/ProductCard";
// import BlogCard from "../../BlogCard/BlogCard";
import { ArticleItem, ClothesProduct } from "../../../redux/type";
import BlogCard from "../../BlogCard/BlogCard";

type ProductSliderProps = {
  products?: ClothesProduct[];
  title: string;
  articles?: ArticleItem[];
};

const ProductSlider: React.FC<ProductSliderProps> = ({
  products,
  title,
  articles,
}) => {
  return (
    <div className={"sliderProduct__section"}>
      <Container>
        <h3 className={"sliderProduct__title"}>{title}</h3>
        <Swiper
          spaceBetween={30}
          slidesPerView={articles ? 4 : 5}
          navigation={true}
          modules={[Navigation]}
        >
          {articles
            ? articles.map((article) => (
                <SwiperSlide key={article.id}>
                  <BlogCard admin={false} article={article} />
                </SwiperSlide>
              ))
            : products &&
              products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard data={product} />
                </SwiperSlide>
              ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default ProductSlider;
