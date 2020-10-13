import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getGeoLocation } from './actions/locationActions';


class Home extends React.Component {


    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getGeoLocation());
    }


    render() {

        const { location, locationError } = this.props;

        if (!location) {
            return <React.Fragment>Error: {locationError.message}</React.Fragment>;
        } else {
            return (
                <React.Fragment>
                    <h3>Latittude: {location.latitude}</h3>
                    <h3>Longitude: {location.longitude}</h3>
                    <Link to="/trails">Find Trails</Link>

                </React.Fragment>
            );
        }
    }
}


const mapStateToProps = state => {
    return {
        location: state.location,
        locationError: state.locationError,
    }
}


export default connect(mapStateToProps)(Home);