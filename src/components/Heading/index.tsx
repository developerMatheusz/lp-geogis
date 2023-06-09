import * as S from "./styles";

export type LineColors = "primary" | "secondary" | "green";

export type HeadingProps = {
  children: React.ReactNode;
  color?: "white" | "black" | "green" | "blue" | "secondary";
  lineLeft?: boolean;
  lineBottom?: boolean;
  lineColor?: LineColors;
  size?: "small" | "medium" | "huge";
};

const Heading = ({
  children,
  color = "white",
  lineLeft = false,
  lineBottom = false,
  lineColor = "primary",
  size = "medium"
}: HeadingProps) => {
  return (
    <S.Wrapper
      color={color}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
      lineColor={lineColor}
      size={size}
    >
      {children}
    </S.Wrapper>
  );
};

export default Heading;
