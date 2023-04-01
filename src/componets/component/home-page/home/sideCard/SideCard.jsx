import React from "react";
import "./SideCard.css";

const SideCard = ({ bookmarkedTitle, timing }) => {
  return (
    <div className="side-card">
      <div className="timing mb-5 card">
        <h4 className="text-center p-2 border-success">
          <span className="">Spend Time on Read </span>: 
          <span>{timing}</span> min
        </h4>
      </div>
      <div className="bookmark-blog card bg-light mb-5">
        <h3 className="p-2">
          <span className=" fw-bold"> Bookmark blogs </span>
          <span className="text-danger">:</span>
          <span className=""> {bookmarkedTitle.length}</span>
        </h3>

        {bookmarkedTitle.map((bookMark) => (
          <div className="card mb-3">
            <h5 className="p-2">
              <span className="fst-italic">{bookMark}</span>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideCard;
