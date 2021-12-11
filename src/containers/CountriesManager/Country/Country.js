import React from "react";
import classes from "./Country.module.scss";
import Image from "react-bootstrap/Image";
import {NavLink} from "react-router-dom";

const Country = (props) => {
  return (
    <div className={`row no-gutters ${classes.card}`}>
      <div className="col-4">
        <Image src={props.flag} alt={`drapeau de ${props.nameFr}`}/>
      </div>
      <div className={`col-8 ${classes.infos}`}>
        <h3>{props.nameFr}</h3>
        <p>Capitale : {props.capital}</p>
        <p>Continent : {props.continent}</p>
        {props.name && <NavLink to={`/countries/${props.name}`}>Voir la fiche du pays</NavLink>}
      </div>
    </div>
  );

};

export default Country;
