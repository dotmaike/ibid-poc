import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import CardCalendarHeader from './CardCalendarHeader.jsx';
import CardCalendarTable from './CardCalendarTable.jsx';
import './styles.scss';

const CardCalendar = () => {
  const headStyle = {
    background: 'url("/img/calendar.jpg")',
    borderRadius: '2px',
  };
  const contentStyle = {
    padding: '0px',
  };
  return (
    <Card
      className="Card-Calendar"
    >
      <CardTitle
        style={headStyle}
      >
        <CardCalendarHeader />
      </CardTitle>
      <CardText
        style={contentStyle}
      >
        <CardCalendarTable />
      </CardText>
    </Card>
  );
};

export default CardCalendar;
