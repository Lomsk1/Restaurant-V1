"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function SliderSpecial() {
  const info = [
    {
      id: 1,
      img: "https://mediacity.co.in/delici/static/media/menu-image-12.d21e54a8cc34de459bc8.jpg",
      title: "Butternut Pumpkin",
      ingredients:
        " Avocado with crab meat, tomato sauce, paper, avocado, avocado...",
      price: "$12.00",
    },
    {
      id: 2,
      img: "https://mediacity.co.in/delici/static/media/menu-image-12.d21e54a8cc34de459bc8.jpg",
      title: "Butternut Pumpkin",
      ingredients:
        " Avocado with crab meat, tomato sauce, paper, avocado, avocado...",
      price: "$22.00",
    },
    {
      id: 3,
      img: "https://mediacity.co.in/delici/static/media/menu-image-12.d21e54a8cc34de459bc8.jpg",
      title: "Butternut Pumpkin",
      ingredients:
        " Avocado with crab meat, tomato sauce, paper, avocado, avocado...",
      price: "$52.00",
    },
    {
      id: 4,
      img: "https://mediacity.co.in/delici/static/media/menu-image-12.d21e54a8cc34de459bc8.jpg",
      title: "Butternut Pumpkin",
      ingredients:
        " Avocado with crab meat, tomato sauce, paper, avocado, avocado...",
      price: "$42.00",
    },
    {
      id: 5,
      img: "https://mediacity.co.in/delici/static/media/menu-image-12.d21e54a8cc34de459bc8.jpg",
      title: "Butternut Pumpkin",
      ingredients:
        " Avocado with crab meat, tomato sauce, paper, avocado, avocado...",
      price: "$14.00",
    },
    {
      id: 6,
      img: "https://mediacity.co.in/delici/static/media/menu-image-12.d21e54a8cc34de459bc8.jpg",
      title: "Butternut Pumpkin",
      ingredients:
        " Avocado with crab meat, tomato sauce, paper, avocado, avocado...",
      price: "$992.00",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    accessibility: true,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    lazyLoad: true,
    dots: false,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2500,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: "30px",
        },
      },
    ],
  };


  return (
    <div className="slider_special">
      {/* <div className="butt" onClick={leftSlide}>
        <p>⨞</p>
      </div>
      <div className="butt" onClick={rightSlide}>
        <p>⨞</p>
      </div> */}
      <Slider {...settings}>
        {info &&
          info.map((char, i) => (
            <div
              key={char.id}
              className="slider_product_box "
              style={{ transform: `translateX(${i != 1 ? i * 50 : 50}%)` }}
            >
              <div className="image">
                <Image src={char.img} alt="" />
              </div>
              <div className="infos">
                <h4>{char.title}</h4>
                <p>{char.ingredients}</p>
                <p>{char.price}</p>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default SliderSpecial;
