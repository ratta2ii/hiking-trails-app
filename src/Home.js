import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { getGeoLocation } from './actions/locationActions';
import { makeApiCall } from './actions/trailsActions';
// import { Link } from "react-router-dom";


const Home = (props) => {


    const { dispatch, coords, coordsError } = props;


    useEffect(() => {
        console.log("inside Home mounting");
        dispatch(getGeoLocation());
    }, []);


    const handleFindTrails = () => {
        dispatch(makeApiCall());
        props.history.push('/trails');
    }


    if (coordsError) {
        return <React.Fragment>Error: {coordsError.message}</React.Fragment>;
    }



    else {
        return (
            <Box>
                <Box style={{width: '100%', position: 'fixed', top: 0, left: 0,}}>
                    <ul
                        style={{
                            textDecoration: 'none',
                            float: 'left',
                        }}>
                        <li
                            style={{
                                listStyleType: 'none',
                                float: 'left',
                                fontSize: '1.1rem',
                            }}>
                            HOME
                        </li>
                        <li onClick={handleFindTrails}
                            style={{
                                listStyleType: 'none',
                                float: 'left',
                                marginLeft: 15,
                                fontSize: '1.1rem',
                                clear: 'right',
                            }}>
                            TRAILS
                        </li>
                    </ul>
                </Box>
                <Box style={{
                    textAlign: 'center',
                    marginTop: 330,
                }}>
                    <Typography 
                        variant='h2'
                        style={{
                            fontFamily: 'fantasy',
                            fontSize: '5rem',
                            fontWeight: 500,
                            color: '#f9f92c',
                        }}>
                            PNW HIKING TRAILS
                    </Typography>
                </Box>
                {/* <h3>Latittude: {coords.latitude}</h3>
                <h3>Longitude: {coords.longitude}</h3> */}
            </Box>
        );
    }
}


const mapStateToProps = state => {
    return {
        coords: state.locationSlice.coords,
        coordsError: state.locationSlice.error,
    }
}


export default connect(mapStateToProps)(Home);








//! Same component as a functional component
// class Home extends React.Component {


//     componentDidMount() {
//         const { dispatch } = this.props;
//         console.log("inside Home mounting");
//         dispatch(getGeoLocation());
//     }


//     render() {

//         const { coords, coordsError } = this.props;

//         if (coordsError) {
//             return <React.Fragment>Error: {coordsError.message}</React.Fragment>;
//         } else {
//             return (
//                 <React.Fragment>
//                     <h3>Latittude: {coords.latitude}</h3>
//                     <h3>Longitude: {coords.longitude}</h3>
//                     <Link to="/trails">Find Trails</Link>
//                 </React.Fragment>
//             );
//         }
//     }
// }


// const mapStateToProps = state => {
//     return {
//         coords: state.locationSlice.coords,
//         coordsError: state.locationSlice.error,
//     }
// }


// export default connect(mapStateToProps)(Home);