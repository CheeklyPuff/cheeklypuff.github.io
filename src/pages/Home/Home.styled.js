import styled from 'styled-components';
import colors from '../../theme/colors';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 30px 15px;
`
export const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Heading = styled.h1`
  color: ${colors.white};
  display: block;
  text-align: center;
`;

export const Text = styled.p`
  margin-top: 10px;
  color: ${colors.white};
  display: block;
  text-align: center;

  span {
    color: ${colors.red};
  }
`;