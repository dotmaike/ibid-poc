import './styles.scss'
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

class CustomCard extends Component{

    constructor(props){
        super(props);
    }

    render(){
      const textCard = {
        backgroundColor: '#3F51B5',
        borderRadius: '2px',
      };
      const titleStyle = {
          fontSize: '20px',
      }

      return(

          <Card
              className="Card-Normal"
              style={{ height: '295px' }} >
              <CardTitle
                  children={<i className="fa fa-ellipsis-v" />}
                  title="Welcome to you new Crew Interface"
                  titleColor="#fff"
                  titleStyle={titleStyle}
                  style={textCard}
                />
              <CardText
                  style={{ margin: '20px 10px 0 10px' }}>
                  {`You'll be able to enter your preferences for each bid session.
                  But since this is your first visit, let us guide you through
                  the process. You can come back to this tutorial at any time
                  from the help menu.`}
              </CardText>
          </Card>
      );
    };

}

export default CustomCard;
