import { useNavigate } from "react-router-dom";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/new");
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Navbar />
      <div className="overflow-scroll h-[73%] no-scrollbar">
        <CardList />
      </div>
      <Footer actionType="link" onClick={handleNavigate} />
    </div>
  );
};

export default HomePage;
