import React, {Component} from 'react';
import {render} from 'react-dom';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox'

class CardCheckbox extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const titleStyle = {
            fontSize: '20px',
        }

        return(
            <Card
                className="card-checkbox"
                style={{ height: '295px'}}>
                <CardTitle
                    children={(<i className="fa fa-ellipsis-v" />)}
                    className="card-checkbox-tittle"
                    title="Next Steps"
                    titleColor='#FFF'
                    titleStyle={titleStyle}
                />
                <CardText className="card-checkbox-content">
                    <Checkbox
                        label="Complete your profile information"
                        iconStyle={{fill: '#000'}}
                        style={{ margin: '15px 0' }}
                    />
                    <Checkbox
                        label="Enter your default standing bid"
                        iconStyle={{fill: '#000'}}
                        style={{ margin: '10px 0' }}
                    />
                    <Checkbox
                        label="Setup your notifications"
                        iconStyle={{fill: '#000'}}
                        style={{ margin: '10px 0' }}
                    />
                </CardText>
            </Card>
        );
    };

}

export default CardCheckbox;
