import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";

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