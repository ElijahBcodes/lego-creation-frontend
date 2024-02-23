import React from "react";
import { useParams, NavLink } from "react-router-dom";
import "../App.css";

const CreationShow = ({ creations }) => {
  const { id } = useParams();
  let currentCreation = creations.find((creation) => creation.id === +id);

  console.log(currentCreation);

  return (
    <div className="card w-96 bg-base-100 shadow-xl flex" key={id}>
      <figure>
        <img src={currentCreation.image} alt="lego creation" />
      </figure>
      <div className="card-body flex-wrap">
        <h2 className="card-title">{currentCreation.name}</h2>
        <p>{currentCreation.description}</p>
        <NavLink
          to={`/creationedit/${currentCreation.id}`}
          className="nav-link"
        >
          Edit Creation
        </NavLink>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default CreationShow;
