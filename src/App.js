import React, { Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home';
import Trails from './Trails/Trails';
import Footer from './Components/Footer/Footer';


function App(props) {

    return (
        <Fragment>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/trails" component={Trails} />
            </Switch>
            <Footer />
        </Fragment>
    );
}

export default withRouter(App);
