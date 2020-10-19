import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
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
            <React.Fragment>
                <h3>Latittude: {coords.latitude}</h3>
                <h3>Longitude: {coords.longitude}</h3>
                <Button onClick={handleFindTrails} >Find Trails</Button>
                {/* <Link to="/trails">Find Trails</Link> */}
            </React.Fragment>
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