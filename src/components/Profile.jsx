import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import geoPoint from "../assets/map.png";
import bc_icon from "../assets/bc_icon.png";

//styling
import "./Profile.css";
import { ApiContext } from "../providers/ApiContextProvider";

const getUserImage = (url) => {
  return url ?? bc_icon;
};

const Profile = () => {
  const navigate = useNavigate();
  const { profile } = useContext(ApiContext);
  if (!profile) return <div styling={{ color: "white" }}> Loading! </div>;
  return (
    <>
      <div className="user_personal_info">
        <img className="avatar" src={getUserImage(profile.avatar)} alt="none" />
        <div className="user_info">
          <h1>{profile.name}</h1>
          <div className="location">
            <img className="geo_icon" src={geoPoint} alt="None" />
            <h4 className="location">Valencia, Spain</h4>
          </div>
        </div>
      </div>
      <hr className="solid" />
      <div className="points_section">
        <div className="point_item">
          <h2>{profile.level}</h2>
          <h3>Nivel</h3>
        </div>
        <div className="point_item">
          <h2>{profile.perseverance}</h2>
          <h3>Constancia</h3>
        </div>
        <div className="point_item">
          <h2>{profile.total_points}</h2>
          <h3>Puntos</h3>
        </div>
      </div>
      <hr className="solid" />
      <div className="skills_section">
        <div className="skill">
          <div className="stamina">{profile.stamina_points}</div>
          <h4>Resistencia</h4>
        </div>
        <div className="skill">
          <div className="strength">{profile.strength_points}</div>
          <h4>Fuerza</h4>
        </div>
        <div className="skill">
          <div className="flexibility">{profile.flexiblity_points}</div>
          <h4>Flexibilidad</h4>
        </div>
        <div className="skill">
          <div className="mind">{profile.mind_points}</div>
          <h4>Mente</h4>
        </div>
      </div>
      <hr className="solid" />
      <div className="last_classes">
        <h2>Últimas Clases</h2>
        <button
          onClick={() => navigate("/all_classes")}
          className="classes_button"
          type="button"
        >
          Ver todas
        </button>
      </div>
      <div></div>
    </>
  );
};

export default Profile;
