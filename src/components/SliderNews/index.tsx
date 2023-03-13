import Banner, { BannerProps } from "../Banner";
import Slider, { SliderSettings } from "../Slider";
import * as S from "./styles";

export type BannerSliderProps = {
  items: BannerProps[];
};

const settings: SliderSettings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 8000,
  fade: true,
  arrows: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        dots: false,
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
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
