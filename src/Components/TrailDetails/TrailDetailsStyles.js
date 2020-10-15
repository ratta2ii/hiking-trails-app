import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    infoValue: {
        marginLeft: 7,
        color: '#4c4c4c',
        fontSize: '1.1rem',
        fontFamily: 'Raleway',
        paddingBottom: 4,
        fontWeight: '600',
    },
    title: {
        fontSize: '.9rem',
        color: '#766535',
        fontFamily: 'Raleway',
    },
    infoBox: {
        padding: '1.9px 0',
        display: 'flex',
        alignItems: 'center',
    },
}));


export default useStyles;