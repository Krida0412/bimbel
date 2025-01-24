import Header from "../components/Header";
import Audience from "../components/Audience";
import Features from "../components/Features";
import Functions from "../components/Functions";
import Product from "../components/Product";
import Pricing from "../components/Pricing";
import About from "../components/About";
import Testimoni from "../components/Testimoni";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Features />
      <Pricing />
      {/* <Product /> */}
      <Testimoni />
      <Functions />
      {/* <Audience /> */}
    </main>
  );
}
