// pages/index.js

import Header from "../components/Header";
import Banner1 from "../components/Banner1";
import Banner2 from "../components/Banner2";
import Banner3 from "../components/Banner3";
import Banner4 from "../components/Banner4";
import Banner5 from "../components/Banner5";
import Banner6 from "../components/Banner6";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <div>
      <Banner1 />
      </div>
      {/* Main Banner on the center */} 
      <div className="flex mx-10 my-10">
        {/* Secondary Banner on the left */}
        <div className="w-2/3 space-x-4">
          <Banner2 />
        </div>
        {/* Two Banners on the right */}
        <div className="w-1/3 flex flex-col space-y-4">
          <Banner3/>
          <Banner4/>
        </div>
      </div>
      <div className="flex space-x-10 m-10">
        <Banner6/>
      </div>
      <div className="flex space-x-10 m-10">
        <Banner5/>
        <Banner5/>
        <Banner5/>
        <Banner5/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;