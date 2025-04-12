import Nav from "./_components/Navbar/Nav";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Nav role="user" />
      <div className="mt-30">
        <Footer />
      </div>
    </>
  );
}
