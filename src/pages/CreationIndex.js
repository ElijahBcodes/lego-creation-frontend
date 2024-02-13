import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const CreationIndex = ({ creations }) => {
  return (
    <main className="flex flex-wrap justify-around">
      {creations.map((creation, index) => {
        return (
          <>
            <div className="card w-96 bg-base-100 shadow-xl flex" key={index}>
              <figure>
                <img src={creation.image} alt="creation" />
              </figure>
              <div className="card-body flex-wrap">
                <h2 className="card-title">{creation.name}</h2>
                <p>{creation.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-info">
                    <NavLink
                      to={`/creationshow/${creation.id}`}
                      className="text-black"
                    >
                      Click to find out more
                    </NavLink>
                  </button>
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
