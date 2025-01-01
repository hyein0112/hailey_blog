import styled from "@emotion/styled";

export default function Divider({ color, width, margin }: { color?: string; width?: string; margin?: string }) {
  return <StyleHr color={color} width={width} margin={margin} />;
}

const StyleHr = styled("div")<{ color?: string; width?: string; margin?: string }>`
  border: 0.5px solid black;
  ${({ color, width, margin, theme }) =>
    `
      border-color: ${color || theme.colors.border2}; 
      width: ${width || "100%"}; 
      margin: ${margin || ""}
    `};
`;
