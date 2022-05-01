import React, { Fragment } from "react";

import geoPoint from "../assets/map.png";
import bc_icon from "../assets/bc_icon.png";

import { profile } from "../db/db";

//styling
import "./Profile.css";

const getUserImage = () => {
    return profile ? profile.avatar : bc_icon;
  };

const Profile = () => {
  return (
    <>
      <div className="user_personal_info">
        <img className="avatar" src={getUserImage()} alt="none" />
        <div className="user_info">
          <h1>{profile.name}</h1>
          <div className="location">
            <img className="geo_icon" src={geoPoint} alt="None" />
            <h4>Valencia, Spain</h4>
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
        <button onClick={alert("butonCicked")} className="classes_button">
          Ver todas
        </button>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default Profile;
