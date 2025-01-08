import React, { useState } from "react";
import {
  Container,
  Header,
  Body,
  DateText,
  Warning,
  BinTypeWrapper,
  BinType,
  TooltipText
} from './Calendar.styled.js';
import holidays  from '../../json/publicholidays.json';
import getWeekPattern from "../../utils/getWeekPattern.js";

const Calendar = ({collectingDay}) => {
  const [visible, setVisible] = useState(false);
  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  const getDate = new Date();
  const currentMonth = getDate.getMonth() + 1;
  const currentDate = getDate.getDate();
  const currentDay = getDate.getDay();
  const dayNames = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = dayNames[currentDay];

  let isHoliday = false;
  const binType = getWeekPattern(getDate);
  for(const holiday of holidays.records) {
    const dateText = holiday.date;
    const getHoliday = dateText.split('-');
    const holidayMonth = getHoliday[1];
    const holidayDate = getHoliday[2];

    if(currentMonth.toString().padStart(2, '0') === holidayMonth && holidayDate === currentDate.toString().padStart(2, '0')) {
      isHoliday = true;
    }
  }

  const collectNextDay = (isHoliday && today === collectingDay) ? true : false;

  return (
    <Container>
      <Header>
        {today}
      </Header>
      <Body>
        <DateText isHoliday={isHoliday}>{currentDate}</DateText>
        {collectNextDay && <Warning>Bins will be collected tomorrow.</Warning>}
        <BinTypeWrapper>
          <BinType onMouseEnter={showTooltip} onMouseLeave={hideTooltip} binType={binType}></BinType>
          <TooltipText visible={visible}>{binType}</TooltipText>
        </BinTypeWrapper>
      </Body>
    </Container>
  );
}

export default Calendar;