import styled from "@emotion/styled";

export default function Divider({ color, width, height, margin }: { color?: string; width?: string; height?: string; margin?: string }) {
  return <StyleHr color={color} width={width} margin={margin} height={height} />;
}

const StyleHr = styled("div")<{ color?: string; width?: string; height?: string; margin?: string }>`
  ${({ color, width, height, margin, theme }) =>
    `
      width: ${width || "100%"}; 
      border: ${height || "0.5px"} solid ${color || theme.colors.border2}; 
      margin: ${margin || ""}
    `};
`;
