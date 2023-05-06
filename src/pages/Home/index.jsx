import { Link } from "react-router-dom";
import Carrosel from "../../assets/Pascoa.png";
import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="banner">
          <img src={Carrosel} alt="" />
        </div>
      </main>
      <div className="all-cards">
        <div className="cards"></div>
        <div className="cards"></div>
        <div className="cards"></div>
      </div>
    </>
  );
}

export default Home;
