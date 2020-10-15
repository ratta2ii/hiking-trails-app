import { makeStyles } from '@material-ui/core/styles';
// import { Autocomplete } from '@material-ui/lab';


export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1025,
        // margin: '150px auto',
        backgroundColor: '#3e5a5dd6',
        outline: '1px solid #476163',
        padding: '35px 35px 15px',
        
        margin: '16vh auto',
        height: '62vh',
        overflowY: 'scroll',
        overflowX: 'hidden',
        [theme.breakpoints.down('md')]: {
            maxWidth: 925,
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: 500,
        },
        [theme.breakpoints.down('xs')]: {
            padding: 10,

        },
    },
    headerContainer: {
        backgroundColor: 'cornflowerblue',
        padding: 100,
        marginTop: 200,
        textAlign: 'center',
        [theme.breakpoints.down('lg')]: {

        },
        [theme.breakpoints.down('md')]: {

        },
        [theme.breakpoints.down('sm')]: {
    
        },
        [theme.breakpoints.down('xs')]: {

        },
    },
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 2,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    modalCloseX: {
        position: 'fixed',
        top: 50,
        right: 80,
        color: 'white',
        fontSize: 35,
        cursor: 'pointer',
    },
}));


export default useStyles;