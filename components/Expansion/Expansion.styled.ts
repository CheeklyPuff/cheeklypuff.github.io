import styled from 'styled-components';
import { Checkbox } from "@mui/material"

export const StyledHeading = styled.h2`
  font-size: 1.4rem;
`;

export const Container = styled.div`
  margin-top: 15px;
`;

export const CheckboxContainer = styled.div`
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
`;

export const CheckboxWrapper = styled.div`
  margin-right: 15px;
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  color: #000;
`

export const StyledCheckbox = styled(Checkbox)`
  color: #000;
`
