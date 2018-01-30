import React from 'react';
import renderer from 'react-test-renderer';
import Home from './../../src/scenes/Home/Home.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/*
  Test to check if Home component exists.
*/

describe('Home (Snapshot)', () => {
    it('Home', () => {
        const component = renderer.create(<MuiThemeProvider><Home/></MuiThemeProvider>);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
