import { makeStyles } from '@material-ui/core/styles';
import { LineWeight } from '@material-ui/icons';


export const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        marginBottom: 20,
    },
    topCenterGridItem: {
        height: 150,
        [theme.breakpoints.down('lg')]: {

        },
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
    
        },
        [theme.breakpoints.down('xs')]: {

        },
    },
    rightMainGridContainer: {
        backgroundColor: '#fffefc',
        padding: 20,
        height: 230, 
        [theme.breakpoints.down('md')]: {
            height: '100%', 
        },
    },
    rightInfoGridItem: {
        height: 180,
        paddingLeft: 40,
        backgroundColor: '#fffefc',
        [theme.breakpoints.down('xs')]: {
            padding: 10, 
        },
    },
    trailImage: {
        height: 230,
        width: 230,
        cursor: 'pointer',
        [theme.breakpoints.down('xs')]: {
            width: '100%', 
        },
    },
    trailName: {
        fontSize: '1.4rem',
        color: 'brown',
        marginLeft: 16,
        fontFamily: 'Raleway',
        fontWeight: '600',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.4rem',
        },
    },
    detailsGridItem: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    expandHidden: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    },
    trailLocation: {
        marginLeft: 16,
        fontSize: 16,
        fontFamily: 'Raleway',
        color: 'black',
    },
    Rating: {
        paddingLeft: 14,
        marginTop: 0,
        marginBottom: -10,
    },
    CardContentDropDown: {
        backgroundColor: '#f7f7f7',
        width: 'auto',
        marginTop: 20,
        paddingBottom: 0,
    },
    imgGridItem: {
        height: 265,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#151515',
        [theme.breakpoints.down('md')]: {
            height: 265,
        }, 
        [theme.breakpoints.down('sm')]: {
            width: 500,
            height: 330,
        }, 
        [theme.breakpoints.down('xs')]: {
            width: 'unset',
            height: 265,
        }, 
    },
    imgContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            width: '90%',
            height: '90%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            height: '90%',
        }, 
    },
    mainImage: {
        width: '200px',
        height: '200px',
        objectFit: 'cover',
        [theme.breakpoints.down('md')]: {
            width: '90%',
            height: 210,
        }, 
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: 278,
        }, 
        [theme.breakpoints.down('xs')]: {
            height: 228,
        }, 
    }
}));




export default useStyles;










// const useStyles = makeStyles((theme) => ({
//     root: {
//         maxWidth: 345,
//     },
//     media: {
//         height: 0,
//         paddingTop: '56.25%', // 16:9
//     },
//     expand: {
//         transform: 'rotate(0deg)',
//         marginLeft: 'auto',
//         transition: theme.transitions.create('transform', {
//             duration: theme.transitions.duration.shortest,
//         }),
//     },
//     expandOpen: {
//         transform: 'rotate(180deg)',
//     },
//     avatar: {
//         backgroundColor: red[500],
//     },
    // infoValue: {
    //     marginLeft: 7,
    //     color: '#414141',
    // },
    // title: {
    //     fontSize: '.8rem',
    //     color: '#766535',
    // },
    // infoBox: {
    //     padding: '5px 0',
    //     display: 'flex',
    //     alignItems: 'center',
    // }
// }));


// export default useStyles;











