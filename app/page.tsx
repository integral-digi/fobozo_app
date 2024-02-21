import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
import Nav from "./components/Nav";

const Home = () => {
  return (
    <main className="px-16 bg-gray-900 space-y-48 lg:px-8 lg:py-12 lg:w-full">
      <section className="hidden lg:block">
        <MobileNav />
      </section>
      <Nav />
      <Hero />
      <Footer />
    </main>
  )
}

export default Home;