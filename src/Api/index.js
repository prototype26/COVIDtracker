//functions to fetch data from api
import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async(country)=>{
    let changabeleUrl = url;
    if(country)
    {
        changabeleUrl = `${url}/countries/${country}`;
    }
    try {
        const {data:{recovered,confirmed,deaths,lastUpdate}} = await axios.get(changabeleUrl);//destructuring to core values which are inside data
        return {recovered,confirmed,deaths,lastUpdate};    
    } catch (error) {
        console.log(error);
    }
    
}
const dailyUrl = 'https://covid19.mathdro.id/api/daily';
//calling this function from chartsJS
export const fetchDailyData = async()=>{
    try {
        const {data} = await axios.get(dailyUrl)
        const modifiedData = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

const countryUrl = 'https://covid19.mathdro.id/api/countries';
export const fetchCountryDetails = async()=>{
    try {
        const {data} = await axios.get(countryUrl);
        const countryArray = data.countries.map((countryObj)=>{
            return countryObj.name;
        });
        return countryArray;
        // console.log(countryArray);
    } catch (error) {
        console.log(error);
    }
}