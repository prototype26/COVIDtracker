import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';//for counter--Cap 'c' required increasing animation
import cx from 'classnames';// to apply multiple styles classes to single class 
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) =>{
if(!confirmed){
    return "Loading...";
}
lastUpdate = new Date(lastUpdate).toDateString();
return(
    <div className={styles.container}>
    <Grid container spacing={3} justify="center" >
    <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
            <CountUp start={0} end={confirmed.value} duration={2} />
            </Typography>
            <Typography color="textSecondary">{lastUpdate}</Typography>
            <Typography variant="body2">Number of active cases in COVID-19</Typography>
        </CardContent>
    </Grid>
    <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
            <CountUp start={0} end={recovered.value} duration={2} />    
            </Typography>
            <Typography color="textSecondary">{lastUpdate}</Typography>
            <Typography variant="body2">Number of recovered cases in COVID-19</Typography>
        </CardContent>
    </Grid>
    <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
            <CountUp start={0} end={deaths.value} duration={2} />    
            </Typography>
            <Typography color="textSecondary">{lastUpdate}</Typography>
            <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
        </CardContent>
    </Grid>
    </Grid>
    </div>
)
}
export default Cards;