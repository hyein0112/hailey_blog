import { getPostRecent } from "../getPostList";

export async function GET() {
  return getPostRecent();
}
