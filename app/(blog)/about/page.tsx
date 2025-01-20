import { getMetadata } from "@/lib/metaData";
import AboutPage from "./AboutPage";

export async function generateMetadata() {
  return getMetadata();
}

export default function Page() {
  return <AboutPage />;
}
