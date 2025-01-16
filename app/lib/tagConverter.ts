export default function tagConverter(tag: string) {
  switch (tag) {
    case "":
      return "All";
    case "all":
      return "All";
    case "front":
      return "FrontEnd";
    case "back":
      return "BackEnd";
    default:
      return "기타";
  }
}
