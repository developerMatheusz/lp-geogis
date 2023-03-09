import { ArrowBackIos as ArrowLeft } from "styled-icons/material-outlined";
import { ArrowForwardIos as ArrowRight } from "styled-icons/material-outlined";
import Banner, { BannerProps } from "../../../components/Banner";
import Slider, { SliderSettings } from "../../../components/Slider";
import * as S from "./styles";

export type BannerSliderProps = {
  items: BannerProps[];
};

const settings: SliderSettings = {
  autoplay: true,
  autoplaySpeed: 8000,
  fade: true,
  arrows: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
};

const SliderNews = ({ items }: BannerSliderProps) => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => (
          <Banner key={item.title} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  );
};

export default SliderNews;
