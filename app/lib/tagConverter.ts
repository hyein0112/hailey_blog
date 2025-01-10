export default function tagConverter(tag: string) {
  switch (tag) {
    case "front":
      return "FrontEnd";
    case "back":
      return "BackEnd";
    default:
      return "기타";
  }
}
