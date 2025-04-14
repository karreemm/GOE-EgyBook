import Nav from "./_components/Navbar/Nav";
import Hero from "./HeroSection/Hero";
import MostRelevant from "./MostRelevant/MostRelevant";

export default function Home() {
  return (
    <>
      <Nav role="guest" />
      <div className="">
        <Hero />
      </div>
      <div className="w-[80%] mx-auto">
        <MostRelevant />
      </div>
    </>
  );
}
