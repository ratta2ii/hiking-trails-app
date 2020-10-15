import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions/trailsActions';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Trail from './../Components/Trail/Trail';
import useStyles from './TrailsStyles';


const Trails = (props) => {


    const { trails, error, isLoading, dispatch } = props;
    const classes = useStyles();
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState(null);


    useEffect(() => {
        console.log("TRAILS PROPS inside useEffect()", props)
        dispatch(makeApiCall());
    }, []);


    //* This is drilled down to the Trail component
    const handleOpenModal = (trailImage) => {
        console.log("Trail Image: ", trailImage);
        setModalImage(trailImage);
        setShowModal(true);
    }


    if (error) {
        return <div>Error: {error.message}</div>
    }
    else if (isLoading) {
        return <div>...still loading</div>
    }


    else {
        return (
            <Box className={classes.root} >
                <Grid container >
                    {trails.map(trail => {
                        console.log("LONG: ", trail.longitude);
                        console.log("LAT: ", trail.latitude);
                        return (
                            <Grid trail xs={12} >
                                <Trail
                                    handleOpenModal={handleOpenModal}
                                    key={trail.key}
                                    trailId={trail.id}
                                    location={trail.location}
                                    name={trail.name}
                                    trailImage={trail.imgMedium}
                                   // trailImage={trail.imgSqSmall}
                                    summary={trail.summary}
                                    trailLength={trail.length}
                                    stars={trail.stars}
                                    ascent={trail.ascent}
                                    descent={trail.descent}
                                    high={trail.high}
                                    low={trail.low}
                                    longitude={trail.longitude}
                                    latitude={trail.latitude}
                                    conditionStatus={trail.conditionStatus}
                                    conditionDetails={trail.conditionDetails}
                                    conditionDate={trail.conditionDate}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
                {/* Modal to show image */}
                <Box
                    className={classes.modal}
                    style={{
                        display: (!showModal) ? 'none' : 'flex',
                    }}>
                        <img src={modalImage} alt="trail modal popup" />
                    <Box
                        className={classes.modalCloseX}
                        onClick={() => setShowModal(false)} >
                        X
                    </Box>
                </Box>
            </Box>
        );
    }
}


const mapStateToProps = state => {
    return {
        trails: state.trailsSlice.trails,
        isLoading: state.trailsSlice.isLoading,
        error: state.error,
    }
}


export default connect(mapStateToProps)(Trails);








