export default function Divider({ color, width, height, margin }: { color?: string; width?: string; height?: string; margin?: string }) {
  const defaultColor = "border-border2";
  const defaultWidth = "w-full";
  const defaultHeight = "border-[1px]";
  const defaultMargin = "";

  const dividerClasses = `
    ${width || defaultWidth}
    ${height ? `border-[${height}]` : defaultHeight}
    ${color ? `border-[${color}]` : defaultColor}
    ${margin ? `m-[${margin}]` : defaultMargin}
  `;

  return <div className={`border border-solid ${dividerClasses.trim()}`} />;
}
