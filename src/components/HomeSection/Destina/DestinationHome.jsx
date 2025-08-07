import React from "react";
import AllItem from "../../Destinations/AllItem";
// import "../popular/MostPopular.css";

const DestinationHome = () => {
  return (
    <>
      <section className="popular top">
        <div className="heading">
          <h1>Most Popular Destinations</h1>
          <div className="line"></div>
        </div>

          <div className="content grid">
          <AllItem />
        </div>
      </section>
    </>
  );
};

export default DestinationHome;
