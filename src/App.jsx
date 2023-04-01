import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componets/component/Header";
import Home from "./componets/component/home-page/home/Home";
import SideCard from "./componets/component/home-page/home/sideCard/SideCard";
import Question from "./componets/Questions/Question";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () =>
    toast.error("You Have Already Book Marked This Blog !!!", {
      icon: "👏",
    });
  //  bookmark add title
  const [bookmarkedTitle, setBookmarkedTitle] = useState([]);

  const handleCard = (title) => {
    if (bookmarkedTitle.includes(title)) {
      notify();
    } else {
      const bookMarkes = [...bookmarkedTitle, title];
      setBookmarkedTitle(bookMarkes);
    }
  };

  // timing function
  const [timing, setTiming] = useState(0);
  const handleMinutes = (Time) => {
    let previousReadTime = Time;

    let sum = previousReadTime + timing;
    setTiming(sum);
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="main row">
        <div className="row single-card  outline-0 col-md-8 col-sm-12 p-3 g-2">
          <Home handleCard={handleCard} handleMinutes={handleMinutes}></Home>
        </div>
        <div className="col-md-4  col-sm-12 p-3 g-2 bg-gray mt-4">
          <SideCard
            bookmarkedTitle={bookmarkedTitle}
            timing={timing}
          ></SideCard>
        </div>
      </div>
      <Question></Question>
    </div>
  );
}

export default App;
