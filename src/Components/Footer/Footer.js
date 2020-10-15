import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './FooterStyles';


const Footer = (props) => {


    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <Typography variant="h6" className={classes.text}>
                Hiking Trails App by Trevor Mackin
            </Typography>
        </Box>
    );
}


export default Footer;