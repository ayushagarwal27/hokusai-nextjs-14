import CarouselComponent from "@/components/Carousel";

export default async function Home() {
  const slidesRes = await fetch("http://localhost:3004/carousel");
  const slides = await slidesRes.json();
  return (
    <>
      <CarouselComponent data={slides} />
    </>
  );
}
