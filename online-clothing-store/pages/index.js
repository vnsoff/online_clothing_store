// pages/index.js

import Header from "../components/Header";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import Footer from "../components/Footer";
import Banner3 from "../components/Banner3"; // Import Banner3

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      {/* Main Banner on the center */} 
      <div className="flex">
        {/* Secondary Banner on the left */}
        <div className="w-2/3">
          <Banner2 />
        </div>
        {/* Two Banners on the right */}
        <div className="w-1/3 flex flex-col space-y-4">

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
