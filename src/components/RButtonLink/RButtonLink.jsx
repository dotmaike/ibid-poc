import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import RButton from 'material-ui/RaisedButton';

class RButtonLink extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Link to="home">
                <RButton label="LOGIN" primary={true} backgroundColor="#60c7f8"/>
            </Link>
        );
    }
}
