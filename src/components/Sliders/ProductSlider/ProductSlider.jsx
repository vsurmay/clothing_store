import React from "react";
import "./ProductSlider.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../Container/Container";
import ProductCard from "../../ProductCard/ProductCard";
import BlogCard from "../../BlogCard/BlogCard";

const ProductSlider = ({ products, title, articles }) => {
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
                  <BlogCard article={article} />
                </SwiperSlide>
              ))
            : products.map((product) => (
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
