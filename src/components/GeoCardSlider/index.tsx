import { ArrowBackIos as ArrowLeft } from "styled-icons/material-outlined";
import { ArrowForwardIos as ArrowRight } from "styled-icons/material-outlined";
import GeoCard, { GeoCardProps } from "../GeoCard";
import Slider, { SliderSettings } from "../Slider";
import * as S from "./styles";

export type GeoCardSliderProps = {
  items: GeoCardProps[];
  color?: "white" | "black";
};

const settings: SliderSettings = {
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  slidesToShow: 4,
  infinite: true,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
};

const GeoCardSlider = ({ items, color = "white" }: GeoCardSliderProps) => {
  return (
    <S.Wrapper color={color}>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <GeoCard key={index} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  );
};

export default GeoCardSlider;
