import React, { Component } from "react";
import axios from "axios";
import TitreH1 from "../../components/Titres/TitreH1/TitreH1";
import Country from "../CountriesManager/Country/Country";

class CountryDetail extends Component {
  state = {
    country: null,
    loading: false
  }
  componentDidMount = () => {

    this.setState({loading: true});
    axios.get(`https://restcountries.com/v3.1/name/${this.props.name}`)
      .then(response => {
        console.log(response.data[0])
        this.setState({
          loading: false,
          country: response.data[0]
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({loading: false});
      })
  };

  render() {
    return (
      <div className="container">
      <TitreH1>Page du pays : {this.props.name}</TitreH1>
        {this.state.loading && <div>Chargement ...</div>}
        {this.state.country && !this.state.loading && (
          <Country
            flag={this.state.country.flags.png}
            nameFr={this.state.country.translations.fra.official}
            capital={this.state.country.capital}
            continent={this.state.country.continents}
          />

        )}
      </div>
    );
  }
}

export default CountryDetail;
