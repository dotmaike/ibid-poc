import React from 'react';
import renderer from 'react-test-renderer';
import Login from './../../src/components/Login/Login.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/*
  Test to check if Login component exists.
*/

describe('Login (Snapshot)', () => {
    it('Login', () => {
        const component = renderer.create(<MuiThemeProvider><Login/></MuiThemeProvider>);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
