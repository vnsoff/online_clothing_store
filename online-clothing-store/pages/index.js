// pages/index.js

import Header from "../components/Header";
import Banner from "../components/Banner";
import "../config/fontAwesome"; // Import the Font Awesome configuration

function Home() {
  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
}

export default Home;