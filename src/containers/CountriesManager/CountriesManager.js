import React, { Component } from "react";
import TitreH1 from "../../components/Titres/TitreH1/TitreH1";
import Bouton from "../../components/Boutons/Bouton";
import Badge from "react-bootstrap/Badge";
import axios from "axios";
import Country from "./Country/Country";

class CountriesManager extends Component{
  state = {
    countries: [],
    loading: false,
    continentSelection: null
  }

  componentDidMount = (continent) => {
    this.handleSelectionPaysParRegion("all");
  }

  handleSelectionPaysParRegion = (continent) => {
    let urlBase = "https://restcountries.com/v3.1/";
    if (continent !== "all") urlBase = "https://restcountries.com/v3.1/region/";
    this.setState({ loading: true });
    axios
      .get(`${urlBase}/${continent}`)
      .then((response) => {
        // const countries = Object.values(response.data);
        const countries = response.data.map((country) => {
          return {
            name: country.name,
            nameFr: country.translations.fra.official,
            flag: country.flags.png,
            capital: country.capital,
            continent: country.region,
          };
        });
        this.setState({
          countries,
          loading: false,
          continentSelection: continent
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });

  }

  render(){
    return (
      <div className="container">
        <TitreH1>Liste des pays du monde</TitreH1>
        <Bouton
          click={() => this.handleSelectionPaysParRegion("all")}
          continentIsSelected={this.state.continentSelection === "all"}
        >
          Tous
        </Bouton>
        <Bouton
          click={() => this.handleSelectionPaysParRegion("europe")}
          continentIsSelected={this.state.continentSelection === "europe"}
        >
          Europe
        </Bouton>
        <Bouton
          click={() => this.handleSelectionPaysParRegion("africa")}
          continentIsSelected={this.state.continentSelection === "africa"}
        >
          Afrique
        </Bouton>
        <Bouton
          click={() => this.handleSelectionPaysParRegion("asia")}
          continentIsSelected={this.state.continentSelection === "asia"}
        >
          Asie
        </Bouton>
        <Bouton
          click={() => this.handleSelectionPaysParRegion("americas")}
          continentIsSelected={this.state.continentSelection === "americas"}
        >
          Amérique
        </Bouton>
        <Bouton
          click={() => this.handleSelectionPaysParRegion("oceania")}
          continentIsSelected={this.state.continentSelection === "oceania"}
        >
          Océanie
        </Bouton>
        <div>
          Nombre de pays : <Badge>{this.state.countries.length}</Badge>
        </div>
        {this.state.loading ? (
          <div>Chargement ...</div>
        ) : (
          <div className="row no-gutters">
            {this.state.countries.map((country, indice) => {
              return (
                <div key={indice} className="col-12 col-md-6">
                  <Country {...country} />
                </div>
              );
            })}
          </div>
        )}
        <div>Pagination</div>
      </div>
    );
  }
}

export default CountriesManager;
