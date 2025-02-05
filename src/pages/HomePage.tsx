import CardList from "../components/CardList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <Navbar />
      <div className="overflow-scroll h-[73%] no-scrollbar">
        <CardList />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
