import Nav from "./_components/Navbar/Nav";
import Hero from "./HeroSection/Hero";

export default function Home() {
  return (
    <>
      <Nav role="guest" />
      <div className="">
        <Hero />
      </div>
    </>
  );
}
