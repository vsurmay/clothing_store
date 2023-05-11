import React, { useState, useEffect } from "react";
import Container from "../../components/Container/Container";
import classes from "./Home.module.scss";
import SliderBanner from "../../components/Sliders/SliderBanner/SliderBanner";
import Brands from "../../components/Brands/Brands";
import LittleBanner from "../../components/Baners/LittleBaner/LittleBaner";
import bannerImg01 from "../../assets/img/banners/image01.png";
import bannerImg02 from "../../assets/img/banners/image02.png";
import bannerImg03 from "../../assets/img/banners/image03.png";
import OutLineButton from "../../components/UI/Buttons/OutLineButton";
// import { useSelector } from "react-redux";
// import ProductsWrapper from "../../components/ProductsWrapper/ProductsWrapper";
// import GrayButton from "../../components/UI/Buttons/GrayButton";
// import CheckBoxBlack from "../../components/UI/CheckBoxes/CheckBoxBlack";
import LargeBaner from "../../components/Baners/LargeBaner/LargeBaner";
import bannerImg04 from "../../assets/img/banners/image04.png";
import bannerImg05 from "../../assets/img/banners/image05.png";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getClothes } from "../../redux/slices/clothes";
import CheckBoxBlack from "../../components/UI/CheckBoxes/CheckBoxBlack";
import GrayButton from "../../components/UI/Buttons/GrayButton";
import ProductsWrapper from "../../components/ProductsWrapper/ProductsWrapper";
// import BlogCard from "../../components/BlogCard/BlogCard";
// import ProductSlider from "../../components/Sliders/ProductSlider/ProductSlider";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getClothes());
  }, []);

  const { data: allClothes, status } = useAppSelector((state) => state.clothes);

  console.log(allClothes);

  // const products = useSelector((state) => state.products.data);
  // const articles = useSelector((state) => state.articles.data);

  const [productsCount, setProductsCount] = useState<number>(8);
  const [activeCheckBox, setActiveCheckBox] = useState([]);

  // useEffect(() => {
  //   setProductsCount(8);
  // }, [activeCheckBox]);

  // const filterProducts =
  //   !activeCheckBox.length && allClothes
  //     ? allClothes.filter((el, index) => index < productsCount)
  //     : allClothes
  //         .filter((product) => activeCheckBox.includes(product.category))
  //         .filter((el, index) => index < productsCount);

  const allCategory = [
    "Best sellers",
    "Top women",
    "New arivals",
    "Collection: summer",
    "Collection: spring",
    "Trending",
  ];

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
      {
        <>
          <Container>
            <div className={classes.filterSection}>
              <div className={classes.filter}>
                <h3 className={classes.filterTitle}>Shop Some Wear:</h3>
                <ul className={classes.filterList}>
                  {allCategory.map((el) => (
                    <li key={el} className={classes.filterItem}>
                      {/* <CheckBoxBlack
                        labeltext={el}
                        setActiveCheckBox={setActiveCheckBox}
                        activeCheckBox={activeCheckBox}
                      /> */}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={classes.filtersProducts}>
                {status === "fulfilled" ? (
                  <>
                    <ProductsWrapper products={allClothes} skeleton={false} />
                    <GrayButton
                      className={classes.loadMore}
                      onClick={() => {
                        setProductsCount(productsCount + 4);
                      }}
                    >
                      load more
                    </GrayButton>
                  </>
                ) : (
                  <ProductsWrapper
                    skeleton={true}
                    products={[...new Array(8)]}
                  />
                )}
              </div>
            </div>
          </Container>
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
        </>

        /*
      <ProductSlider products={products} title={"Featured Items"} />
      <ProductSlider products={products} title={"Most Popular"} />
      */
      }
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
