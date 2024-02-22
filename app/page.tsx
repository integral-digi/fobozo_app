import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
import Nav from "./components/Nav";

const Home = () => {
  return (
    <main className="px-16 bg-gray-900 lg:px-8 lg:py-12 lg:w-full">
      <MobileNav />
      <section className="space-y-48">
        <Nav />
        <Hero />
        <Footer />
      </section>
    </main>
  )
}

export default Home;