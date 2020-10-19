import React from 'react';
// import{ useState } from 'react';
// import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import useStyles from './TrailStyles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Avatar from '@material-ui/core/Avatar';
// import CardMedia from '@material-ui/core/CardMedia';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import TrailDetails from './../TrailDetails/TrailDetails';


const Trail = (props) => {


    const {
        name,
        location,
        trailId,
        summary,
        stars,
        longitude,
        latitude,
        handleOpenModal
    } = props;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);


    //* props that are defined using destruting are constants, so defining trailImage here
    let trailImage = props.trailImage;
    //* If image is not present for a specific trail, this adds a placeholder
    if (trailImage === "") {
        trailImage = "https://ipsumimage.appspot.com/400x400";
    }


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <Card className={classes.root}>
            <Grid container>
                {/* Left Main Container */}
                <Grid item md={3} className={classes.imgGridItem}>
                    <Box 
                        className={classes.imgContainer}
                        onClick={(e) => handleOpenModal(e.target.src)}>
                        <img
                            className={classes.mainImage}
                            src={trailImage}
                            alt="local hiking trail"
                        />
                    </Box>
                </Grid>
                {/* Center Main Container */}
                <Grid item md={6} style={{ padding: 15 }}>
                    <Grid container>
                        {/* Center top container */}
                        <Grid item xs={12} style={{ minHeight: 185 }}>
                            <Typography className={classes.trailName} >
                                {name}
                            </Typography>
                            <Typography variant="subtitle2" className={classes.trailLocation}>
                                {location}
                            </Typography>
                            <Rating className={classes.Rating} name="half-rating-read" defaultValue={stars} precision={0.1} readOnly />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {summary}
                                </Typography>
                            </CardContent>
                        </Grid>
                        {/* Center bottom container */}
                        <Grid item xs={12} style={{ minHeight: 45 }} >
                            <CardActions disableSpacing>
                                <Grid container>
                                    <Grid item xs={7}>
                                        <a href={`http://maps.google.com/maps?z=12&t=m&q=loc:${latitude}+${longitude}`}
                                            style={{ textDecoration: 'none' }}>
                                            <Button
                                                className={classes.directionsBtn}
                                                color="primary"
                                                variant="contained"
                                                style={{
                                                    fontSize: 'x-small',
                                                    width: 130,
                                                    padding: '8px 0',
                                                    marginLeft: 10,
                                                }}
                                            >
                                                Get Directions
                                    </Button>
                                        </a>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Box className={classes.expandHidden}>
                                            <IconButton
                                                className={clsx(classes.expand, {
                                                    [classes.expandOpen]: expanded,
                                                })}
                                                onClick={handleExpandClick}
                                                aria-expanded={expanded}
                                                aria-label="show more"
                                            >
                                                <Typography style={{ fontSize: 16 }}>
                                                    See {!expanded ? 'More' : 'Less'}
                                                </Typography>
                                                <ExpandMoreIcon />
                                            </IconButton>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent className={classes.CardContentDropDown}>
                                    <TrailDetails {...props} />
                                </CardContent>
                            </Collapse>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Right Main Container */}
                <Grid item xs={false} md={3} className={classes.detailsGridItem}>
                    <CardContent style={{ paddingBottom: 10, paddingTop: 35, }}>
                        <TrailDetails {...props} />
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
}


export default Trail;











// function Trail(props) {


//     const {
//         handleOpenModal,
//         name,
//         location,
//         trailId,
//         trailImage,
//         summary,
//         trailLength,
//         stars,
//         conditionStatus,
//         conditionDetails,
//         conditionDate,
//         ascent,
//         descent,
//         high,
//         low,
//         longitude,
//         latitude,
//     } = props;


//     const classes = useStyles();
//     const [expanded, setExpanded] = React.useState(false);


//     const handleExpandClick = () => {
//         setExpanded(!expanded);
//     };


//     const findCamping = (id) => {
//         console.log("trail id: ", id);
//     }


//     let details = (
//         <Box>
//             <Box className={classes.infoBox}>
//                 <Typography variant="subtitle2" className={classes.title}>
//                     Length:
//                 </Typography>
//                 <Typography variant="span" className={classes.infoValue}>
//                     {trailLength} miles
//                 </Typography>
//             </Box>
//             <Box className={classes.infoBox}>
//                 <Typography variant="subtitle2" className={classes.title}>
//                     Ascent:
//                 </Typography>
//                 <Typography variant="span" className={classes.infoValue}>
//                     {ascent}
//                 </Typography>
//             </Box>
//             <Box className={classes.infoBox}>
//                 <Typography variant="subtitle2" className={classes.title}>
//                     Descent:
//                 </Typography>
//                 <Typography variant="span" className={classes.infoValue}>
//                     {descent}
//                 </Typography>
//             </Box>
//             <Box className={classes.infoBox}>
//                 <Typography variant="subtitle2" className={classes.title}>
//                     High:
//                 </Typography>
//                 <Typography variant="span" className={classes.infoValue}>
//                     {high}
//                 </Typography>
//             </Box>
//             <Box className={classes.infoBox}>
//                 <Typography variant="subtitle2" className={classes.title}>
//                     Low:
//                 </Typography>
//                 <Typography variant="span" className={classes.infoValue}>
//                     {low}
//                 </Typography>
//             </Box>
//             <Box className={classes.infoBox}>
//                 <Typography variant="subtitle2" className={classes.title}>
//                     Longitude:
//                 </Typography>
//                 <Typography variant="span" className={classes.infoValue}>
//                     {longitude}
//                 </Typography>
//             </Box>
//             <Box className={classes.infoBox}>
//                 <Typography variant="subtitle2" className={classes.title}>
//                     Latitude:
//                 </Typography>
//                 <Typography variant="span" className={classes.infoValue}>
//                     {latitude}
//                 </Typography>
//             </Box>
//             <Box className={classes.infoBox}>
//                 <Typography variant="subtitle2" className={classes.title}>
//                     ConditionStatus:
//                 </Typography>
//                 <Typography variant="span" className={classes.infoValue}>
//                     {conditionStatus}
//                 </Typography>
//             </Box>
//         </Box>
//     );


//     return (
//         <Box className={classes.root} onClick={() => findCamping(trailId)} >
//             <Grid container>
//                 <Grid item xs={12} md={3} style={{}}>
//                     <Box>
//                         <img src={trailImage} alt="hiking trail"
//                             onClick={(e) => handleOpenModal(e.target.src)}
//                             className={classes.trailImage} />
//                     </Box>
//                 </Grid>
//                 {/* Right main container */}
//                 <Grid item xs={12} md={9} className={classes.rightMainGridContainer}>
//                     <Grid container >
//                         <Grid item xs={12} md={8}>
//                             <Grid container>
//                                 {/* Top center container */}
//                                 <Grid item xs={12} className={classes.topCenterGridItem} >

//                                     <Typography variant='h6' className={classes.trailTitle}>
//                                         {name}
//                                     </Typography>
//                                     <Rating name="half-rating-read" defaultValue={stars} precision={0.1} readOnly />
//                                     <Box style={{ marginTop: 8 }}>
//                                         <Typography variant='subtitle2'
//                                             style={{
//                                                 fontFamily: 'Raleway',
//                                                 textTransform: 'uppercase',
//                                                 fontSize: '.9rem'
//                                             }}>
//                                             {summary}
//                                         </Typography>
//                                     </Box>
//                                 </Grid>
//                                 <Grid item xs={12} style={{ height: 80 }} >
//                                     <Box className={classes.buttonGroup}>
//                                         <a href={`http://maps.google.com/maps?z=12&t=m&q=loc:${latitude}+${longitude}`}
//                                             style={{ textDecoration: 'none' }}>
//                                             <Button
//                                                 color="primary"
//                                                 variant="contained"
//                                                 style={{
//                                                     padding: '8px 0',
//                                                     fontSize: 'small',
//                                                     width: 150,
//                                                     marginTop: 0,
//                                                 }}>
//                                                 Get Directions
//                                             </Button>
//                                         </a>
//                                     </Box>
//                                     <IconButton
//                                         className={clsx(classes.expand, {
//                                             [classes.expandOpen]: expanded,
//                                         })}
//                                         onClick={handleExpandClick}
//                                         aria-expanded={expanded}
//                                         aria-label="show more"
//                                     >
//                                         <ExpandMoreIcon />
//                                     </IconButton>
//                                     <Collapse in={expanded} timeout="auto" unmountOnExit>
//                                         <CardContent>
//                                             {details}
//                                         </CardContent>
//                                     </Collapse>
//                                 </Grid>
//                             </Grid>
//                         </Grid>
//                         <Grid item xs={false} md={4} className={classes.rightInfoGridItem}>
//                             {/* {details} */}
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </Box>
//     )
// }


// export default Trail;



















{/* 
<Card>
                        
                        <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                        <Collapse in={expanded} timeout="auto" unmountOnExit> 
                            <CardContent>
                                <Box className={classes.infoBox}>
                                    <Typography variant="title" className={classes.title}>
                                        Length:
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
                                        latitude:
                                    </Typography>
                                    <Typography variant="span" className={classes.infoValue}>
                                        {latitude}
                                    </Typography>
                                </Box>
                                <Box className={classes.infoBox}>
                                    <Typography variant="title" className={classes.title}>
                                        ConditionStatus:
                                    </Typography>
                                    <Typography variant="span" className={classes.infoValue}>
                                        {conditionStatus}
                                    </Typography>
                                </Box>
                                <Box className={classes.infoBox}>
                                    <Typography variant="title" className={classes.title}>
                                        ConditionDetails:
                                    </Typography>
                                    <Typography variant="span" className={classes.infoValue}>
                                        {conditionDetails}
                                    </Typography>
                                </Box>
                                <Box className={classes.infoBox}>
                                    <Typography variant="title" className={classes.title}>
                                        ConditionDate:
                                    </Typography>
                                    <Typography variant="span" className={classes.infoValue}>
                                        {conditionDate}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Collapse>
                        </Card>


 */}












// import React from 'react';
// import useStyles from './TrailStyles';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';


// const Trail = (props) => {

//     const {
//         name,
//         trailId,
//         trailImage,
//         summary, 
//         trailLength,
//     } = props;
//     const classes = useStyles();


//     const findCamping = (id) => {
//         console.log("trail id: ", id);
//     }

//     return (
//         <Box className={classes.root}>
//             <Grid container>
//                 <Grid item xs={12} md={3}>
//                     <Box onClick={() => findCamping(trailId)}>
//                         <img src={trailImage} alt="hiking trail" className={classes.trailImage} />
//                     </Box>
//                 </Grid>
//                 <Grid item xs={12} md={3}>
//                     <Typography variant='h6'>
//                         {name}
//                     </Typography>
//                     <Typography variant='title'>
//                         {summary}
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={12} md={3}>
//                     <Typography variant='title'>
//                         Length: {trailLength}
//                     </Typography>
//                 </Grid>
//             </Grid>

//         </Box>
//     )
// }


// export default Trail;












// import React from 'react';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import Rating from '@material-ui/lab/Rating';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import useStyles from './TrailStyles';
// import Box from '@material-ui/core/Box';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';











//! MOBILE CARD POSSIBILITY
{/* <Card className={classes.root} onClick={() => findCamping(trailId)} >
<img src={trailImage} alt="local hiking trail" width="300" />
<CardHeader
    title={name}
    subheader={location}
/>
<CardHeader
    title={name}
    subheader={location}
/>
<CardMedia
    className={classes.media}
    image={trailImage}
    title="trail"
/>

<CardContent>
    <Typography variant="body2" color="textSecondary" component="p">
        {summary}
    </Typography>
</CardContent>
<CardActions disableSpacing>
    <IconButton
        className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
    >
        <ExpandMoreIcon />
    </IconButton>
    <Rating name="half-rating-read" defaultValue={stars} precision={0.1} readOnly />
</CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
    {trailDetails}
</Collapse>
</Card> */}