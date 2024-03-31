import CarouselComponent from "@/components/Carousel";
import { getArticles } from "@/utils/actions";
import Masonry from "@/components/Masonry";

export default async function Home() {
  const slidesRes = await fetch("http://localhost:3004/carousel");
  const slides = await slidesRes.json();
  const articles = await getArticles();
  return (
    <>
      <CarouselComponent data={slides} />
      <Masonry data={articles} />
    </>
  );
}
