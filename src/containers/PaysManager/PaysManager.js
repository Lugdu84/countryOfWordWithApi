import React, { Component } from "react";
import TitreH1 from "../../components/Titres/TitreH1/TitreH1";
import Button from "react-bootstrap/Button";

class PaysManager extends Component{
  render(){
    return (
      <div className="container">
        <TitreH1>Liste des pays du monde</TitreH1>
        <Button variant="info">Tous</Button>
        <Button variant="info">Europe</Button>
        <Button variant="info">Afrique</Button>
        <Button variant="info">Asie</Button>
        <Button variant="info">Amérique</Button>
        <Button variant="info">Océanie</Button>
        <div>Pays</div>
        <div>Pagination</div>
      </div>
    );
  }
}

export default PaysManager;
