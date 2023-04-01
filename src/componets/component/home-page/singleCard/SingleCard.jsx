import React from "react";
import "./SingleCard.css";
import { FaBookmark } from 'react-icons/fa';

import { ToastContainer, toast } from "react-toastify";

const SingleCard = ({ programer, handleCard, handleMinutes }) => {
  const {
    authorName,
    id,
    Time,
    starter,
    title,
    coverImage,
    authorImage,
    publishDate,
  } = programer;

  return (
    <div className="programer-container w-100 shadow-lg bg-body ms-lg-3 mb-5">
      <div className="programer-card p-3">
        <img className=" img-fluid w-100  rounded" src={coverImage} alt="" />
        <div>
          <div
            className="programer-heading d-flex justify-content-between align-items-center
          "
          >
            <div className="author-details d-flex mt-3">
              <div className="author-image me-1">
                <img className="img-fluid" src={authorImage} alt="" />
              </div>
              <div className="nameAndDate">
                <p className="fw-bold mb-0">{authorName}</p>
                <p className="text-secondary">{publishDate}</p>
              </div>
            </div>
            <div className="read-time">
              {Time} <span className="me-1">min read</span>

              <button onClick={() => handleCard(title)}>
                {" "}

                {/* <FontAwesomeIcon icon={faBookmark} />{" "} */}
                <FaBookmark />

                {<ToastContainer position="top-center" />}
              </button>
            </div>
          </div>

          <div className="title text-start">
            <p className="fw-bold fs-3">{title}</p>
            <p className="text-secondary">{starter}</p>

            <button className="mb-5" onClick={() => handleMinutes(Time)}>
              <u>Mark as Read</u>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
