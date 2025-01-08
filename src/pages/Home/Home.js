import React from "react";
import {
  Container,
  CalendarWrapper,
  Heading,
  Text
} from './Home.styled.js'
import Calendar from "../../components/Calendar/Calendar.js";

const Home = () => {
  const collectingDay = 'Wednesday';

  return (
    <Container>
      <Heading>Which bin this week?</Heading>
      <Text>Bin collecting day is <span>{collectingDay}</span>.</Text>
      <CalendarWrapper>
        <Calendar collectingDay={collectingDay} />
      </CalendarWrapper>
    </Container>
  );
}

export default Home;