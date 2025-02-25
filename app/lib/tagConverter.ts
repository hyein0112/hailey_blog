export default function tagConverter(tag: string, isSimple?: boolean) {
  if (isSimple) {
    switch (tag) {
      case "":
        return "Etc";
      case "all":
        return "Etc";
      case "front":
        return "FE";
      case "back":
        return "BE";
      default:
        return "Etc";
    }
  } else {
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
}
