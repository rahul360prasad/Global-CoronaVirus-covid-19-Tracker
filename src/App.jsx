import React from 'react';
import styles from './App.module.css';

// import Cards from './components/Cards/Cards';
// import Charts from './components/Charts/Charts';
// import CountryPickers from './components/CountryPickers/CountryPickers';
// we write all above 3 import lines in single line as follows

import { Cards, Charts, CountryPickers } from './components';
import { fetchData } from './api';
import coronaImg from './img/img1.png';
import Footerbar from './components/Footerbar/Footerbar';

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  // below  is the best place to fetch the data from api under class based components
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state

    return (
      <div className={styles.container}>
        <Footerbar />
        <img className={styles.image} src={coronaImg} alt="COVID-19" />
        <Cards data={data} />
        <CountryPickers handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />        
      </div>
    )
  }
}

export default App;
