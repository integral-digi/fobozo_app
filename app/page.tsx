import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

const Home = () => {
  return (
    <main className="px-16 bg-gray-900 space-y-48">
      <Nav />
      <Hero />
      <Footer />
    </main>
  )
}

export default Home;