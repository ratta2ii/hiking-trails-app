import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 10,
        textAlign:'center',
    },
    text: {
        color: '#6aff1e',
        fontSize: '1rem',
        fontFamily: 'monospace'
    }
}));


export default useStyles;