import Hero from "@/app/componets/hero";
import LocalPlaces from "./componets/hero/local-places";
import Meetups from "./componets/hero/meetups";

export default function Home() {
  return (
    <>
      <Hero />
      <LocalPlaces />
      <Meetups className="min-h-screen px-5 md:px-10 py-4 md:py-8" />
    </>
  );
}
