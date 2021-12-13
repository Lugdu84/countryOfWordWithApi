import React from "react";
import classes from "./Country.module.scss";
import Image from "react-bootstrap/Image";
import {NavLink} from "react-router-dom";

const Country = (props) => {
  let content = "";
  if (props.name) {
    content = <NavLink to={`/countries/${props.name}`}>Voir la fiche du pays</NavLink>
  } else {
    content = (
      <>
        <p>Capitale(s) : {props.capital}</p>
        <p>Continent : {props.continent}</p>
        <p>Langue(s) : {props.languages}</p>
        <p>Population : {props.population}</p>
        <p>Monnaie : {props.cash}</p>
      </>
    );
  }
  return (
    <div className={`row no-gutters ${classes.card}`}>
      <div className="col-4">
        <Image src={props.flag} alt={`drapeau de ${props.nameFr}`}/>
      </div>
      <div className={`col-8 ${classes.infos}`}>
        <h3>{props.nameFr}</h3>
        {content}
      </div>
    </div>
  );

};

export default Country;
