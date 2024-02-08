import React from "react";
import "../App.css";


const CreationIndex = ({ creations }) => {
  return (
    <main>
      {creations.map((creation, index) => {
        return (
          <>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={creation.image} alt="picture of creation" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{creation.name}</h2>
                <p>{creation.description}</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </main>
  );
};
export default CreationIndex;
