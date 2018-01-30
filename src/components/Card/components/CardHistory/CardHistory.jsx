import React, {Component} from 'react';
import {render} from 'react-dom';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import AppBarTitle from './../../../AppBarTitle/AppBarTitle.jsx';
import './styles.scss';

class CardHistory extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardTitle title={<AppBarTitle title="Bid session history" subtitle="Review past bid preferences and line awards" subtitleColor="#D3D3D3" />} style={{padding: 0}}/>
                <CardText style={{padding: 0}}>
                    <Table selectable={false}>
                        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                            <TableRow>
                                <TableHeaderColumn className="medium-3" style={{color: '#000', fontWeight: 700}}>BID SESSION</TableHeaderColumn>
                                <TableHeaderColumn style={{color: '#000', fontWeight: 700}}>DATES</TableHeaderColumn>
                                <TableHeaderColumn style={{color: '#000', fontWeight: 700}}></TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow>
                                <TableRowColumn className="medium-3">August 2017</TableRowColumn>
                                <TableRowColumn className="medium-7">August 1, 2017 - August 31, 2017</TableRowColumn>
                                <TableRowColumn className="medium-2"><a href="#">Open</a></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>July 2017</TableRowColumn>
                                <TableRowColumn>July 1, 2017 - July 31, 2017</TableRowColumn>
                                <TableRowColumn><a href="#">Open</a></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>June 2017</TableRowColumn>
                                <TableRowColumn>June 1, 2017 - June 31, 2017</TableRowColumn>
                                <TableRowColumn><a href="#">Open</a></TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardText>
            </Card>
        );
    };
}

export default CardHistory;
