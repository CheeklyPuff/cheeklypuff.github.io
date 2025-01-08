import styled from "styled-components";
import colors from '../../theme/colors';

export const Container = styled.div`
  width: 300px;
  border-radius: 50px;
`
export const Header = styled.div`
  background-color: ${colors.red};
  -webkit-border-radius: 10px 10px 0px 0px;
  -moz-border-radius: 10px 10px 0px 0px;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 3px solid #e5e5e5;
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${colors.white};
`
export const Body = styled.div`
  background-color: ${colors.white};
  -webkit-border-radius: 0px 0px 10px 10px;
  -moz-border-radius: 0px 0px 10px 10px;
  border-radius: 0px 0px 10px 10px;
  border-bottom: 3px solid #e5e5e5;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 300px;
  height: 200px;
  padding: 30px 15px 15px;
`
export const DateWrapper = styled.div`
  font-size: 2rem;
`
export const DateText = styled.p`
  font-size: 6rem;
  color: ${(props) => (props.isHoliday ? colors.red : colors.black)};
`
export const Warning = styled.p`
  font-size: 0.8rem;
  color: ${colors.red};
  margin-bottom: 5px;
`
export const BinTypeWrapper = styled.div`
  position: relative;
  display: inline-block;
`
export const BinType = styled.div`
  margin: 0 auto;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => (props.binType === 'recycle' ? colors.yellow : colors.green)};
`
export const TooltipText = styled.div`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  background-color: rgba(0,0,0,50%);
  color: white;
  text-align: center;
  padding: 5px 10px;
  border-radius: 4px;
  position: absolute;
  bottom: 110%; /* Position above the target element */
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  white-space: nowrap;
  font-size: 0.8rem;
  font-weight: 400;
  text-transform: capitalize;

  /* Tooltip arrow */
  &:after {
    content: '';
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgba(0,0,0,50%) transparent transparent transparent;
  }
`;