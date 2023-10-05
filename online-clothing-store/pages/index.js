// pages/index.js

import Header from "../components/Header";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import Footer from "../components/Footer";
import "../config/fontAwesome";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  );
}

export default Home;