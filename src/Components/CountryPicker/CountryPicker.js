import React, { useState , useEffect } from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountryDetails} from '../../Api/index';
const CountryPicker = ({handleCountryChange}) =>{

const [fetchedCountries, setFetchedCountries] = useState([]);
useEffect(()=>{
    const fetchCountries = async()=>{
        setFetchedCountries(await fetchCountryDetails());
    }
    fetchCountries();
},[setFetchedCountries]);

const formController = (fetchedCountries.length?(
    <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}>
            <option value='global'>Global</option>
          {fetchedCountries.map((country,i)=>{
                return <option key={i} value={country}>{country}</option>
          })}
        </NativeSelect>
    </FormControl>):null
)

return(
    <div>
        {formController}
    </div>
)
}

export default CountryPicker;