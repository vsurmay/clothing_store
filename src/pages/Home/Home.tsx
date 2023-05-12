import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getClothes } from "../../redux/slices/clothes";

import classes from "./Home.module.scss";

import bannerImg01 from "../../assets/img/banners/image01.png";
import bannerImg02 from "../../assets/img/banners/image02.png";
import bannerImg03 from "../../assets/img/banners/image03.png";
import bannerImg04 from "../../assets/img/banners/image04.png";
import bannerImg05 from "../../assets/img/banners/image05.png";

import Container from "../../components/Container/Container";
import SliderBanner from "../../components/Sliders/SliderBanner/SliderBanner";
import Brands from "../../components/Brands/Brands";
import LittleBanner from "../../components/Baners/LittleBaner/LittleBaner";
import FilterProducts from "../../components/FilterProduct/FilterProduct";
import ProductSlider from "../../components/Sliders/ProductSlider/ProductSlider";
import LargeBaner from "../../components/Baners/LargeBaner/LargeBaner";
import OutLineButton from "../../components/UI/Buttons/OutLineButton";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getClothes());
  }, []);

  const {
    dataPopular: allClothesRatingSort,
    dataBiggestDiscount: allClotherBiggestDiscount,
  } = useAppSelector((state) => state.clothes);

  const dataBlog = [
    {
      id: 1,
      title: "Exactly What To Wear To Every Type Of Wedding This Summer",
      type: "Article",
      date: "21 January 2018 by guido",
      text: "A large part of the business here is building up the 'experience'. Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money.",
    },
    {
      id: 2,
      title: "Exactly What To Wear To Every Type Of Wedding This Summer",
      type: "tips",
      date: "21 January 2018 by guido",
      text: "When selling 70% fewer shirts, however, there are fewer shirts on the market, making it more exclusive, and therefore worth the money, for those to whom it matters. ",
    },
    {
      id: 3,
      title: "Exactly What To Wear To Every Type Of Wedding This Summer",
      type: "Article",
      date: "21 January 2018 by guido",
      text: "A large part of the business here is building up the 'experience'. Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money.",
    },
    {
      id: 4,
      title: "Exactly What To Wear To Every Type Of Wedding This Summer",
      type: "Article",
      date: "21 January 2018 by guido",
      text: "When selling 70% fewer shirts, however, there are fewer shirts on the market, making it more exclusive, and therefore worth the money, for those to whom it matters. ",
    },
  ];

  return (
    <div className={classes.home}>
      <SliderBanner />

      <Brands />

      <Container>
        <div className={classes.banners}>
          <div className={classes.littleBanners}>
            <LittleBanner
              img={bannerImg01}
              title="choosе your look"
              subtitle="See our clothing collections"
              background="linear-gradient(270deg, rgba(241, 239, 240, 0) 0%, #F1F0F0 10.79%, #F3F0EF 98.67%)"
            />
            <LittleBanner
              img={bannerImg02}
              title="brand new style"
              subtitle="Popular clothing brands"
              background="linear-gradient(90deg, rgb(247, 224, 213) 0%, rgb(241 203 186) 83.85%, rgba(243, 220, 210, 0.14) 100%)"
              reverse={true}
            />
          </div>
          <div className={classes.biggerBaner}>
            <div className={classes.biggerBanerDescribtion}>
              <h2 className={classes.biggerBanerTitle}>Up to 40% off</h2>
              <p className={classes.biggerBanerSubtitle}>
                Special offers and great deals
              </p>
              <OutLineButton>Shop now</OutLineButton>
            </div>
            <img src={bannerImg03} alt="baner" />
          </div>
        </div>
      </Container>

      <FilterProducts />

      <LargeBaner
        background={
          "linear-gradient(90deg, #DDEBF1 0%, #D3E5EE 42.71%, #C8DEEC 69.27%, rgba(255, 255, 255, 0) 100%)"
        }
        title={"shoping without limits."}
        subtitle={
          "You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
        }
        img={bannerImg04}
      />

      <ProductSlider
        products={allClotherBiggestDiscount}
        title={"Biggest Discount"}
      />

      <ProductSlider products={allClothesRatingSort} title={"Most Popular"} />

      <LargeBaner
        reverse={true}
        img={bannerImg05}
        title={"EXPLORE THE BEST OF YOU."}
        subtitle={
          "You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco."
        }
      />

      {/* <ProductSlider articles={articles} title={"Blog"} /> */}
    </div>
  );
};

export default Home;
