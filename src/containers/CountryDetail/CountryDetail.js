import React, { Component } from "react";
import axios from "axios";

class CountryDetail extends Component {
  state = {
    country: null,
    loading: false
  }
  componentDidMount = () => {
    this.setState({loading: true});
    axios.get(`https://restcountries.com/v3.1/name/${this.props.id}`)
      .then(response => {
        console.log(response.data);
        this.setState({loading: false});
      })
      .catch(error => {
        console.log(error);
        this.setState({loading: false});
      })
  };

  render() {
    return (
      <div className="container">
        <div>Detail</div>
      </div>
    );
  }
}

export default CountryDetail;
