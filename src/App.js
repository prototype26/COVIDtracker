import React, { Component } from 'react';
// import Cards from './Components/Cards/Cards';
// import Charts from './Components/Charts/Charts';
// import CountryPicker from './Components/CountryPicker/CountryPicker';

import {Cards, Charts, CountryPicker} from './Components';//common replacer for all imports as above
import styles from './App.module.css';
import {fetchData} from './Api/index';
import covidImage from './images/covid_19_2.jpg';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
class App extends Component{
  state={
    data:{},
    country:''
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }

  handleCountryChange= async(country)=>{
    //set the state
    //call the api
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country:country});
  }
  render(){
    
    const {data,country} = this.state;//destructuring from state
    var networks = 
                      <div >
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fa fa-github"></i></a></li>
                      <li><a href="#"><i className="fa fa-skype"></i></a></li>
                      </div>

    return(
      <div className={styles.container}>
        <img src={covidImage}/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country={country}/>
        <footer className={styles.footerClass}>
        <ul className={styles.socialLinks}>
              {networks}
              {/* adding separate icons for social links and respective transition colors  */}
           </ul>

           <ul className={styles.copyright}>
              <li>&copy; Copyright 2020 Mohammad Akbar</li>
           </ul>
        </footer>
      </div>
    )
  }
}

export default App;