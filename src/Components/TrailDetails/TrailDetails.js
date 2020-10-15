import React from 'react';
import useStyles from './TrailDetailsStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const TrailDetails = (props) => {


    const {
        trailLength,
        ascent,
        descent,
        high,
        low,
        longitude,
        latitude,
    } = props;
    const classes = useStyles();


    return (
        <Box>
            <Box className={classes.infoBox}>
                <Typography variant="title" className={classes.title}>
                    Length:
            </Typography>
                <Typography variant="span" className={classes.infoValue}>
                    {trailLength} miles
                </Typography>
            </Box>
            <Box className={classes.infoBox}>
                <Typography variant="title" className={classes.title}>
                    Ascent:
            </Typography>
                <Typography variant="span" className={classes.infoValue}>
                    {ascent}
                </Typography>
            </Box>
            <Box className={classes.infoBox}>
                <Typography variant="title" className={classes.title}>
                    Descent:
            </Typography>
                <Typography variant="span" className={classes.infoValue}>
                    {descent}
                </Typography>
            </Box>
            <Box className={classes.infoBox}>
                <Typography variant="title" className={classes.title}>
                    High:
            </Typography>
                <Typography variant="span" className={classes.infoValue}>
                    {high}
                </Typography>
            </Box>
            <Box className={classes.infoBox}>
                <Typography variant="title" className={classes.title}>
                    Low:
            </Typography>
                <Typography variant="span" className={classes.infoValue}>
                    {low}
                </Typography>
            </Box>
            <Box className={classes.infoBox}>
                <Typography variant="title" className={classes.title}>
                    Longitude:
            </Typography>
                <Typography variant="span" className={classes.infoValue}>
                    {longitude}
                </Typography>
            </Box>
            <Box className={classes.infoBox}>
                <Typography variant="title" className={classes.title}>
                    Latitude:
            </Typography>
                <Typography variant="span" className={classes.infoValue}>
                    {latitude}
                </Typography>
            </Box>       
        </Box>
    );
}


export default TrailDetails;