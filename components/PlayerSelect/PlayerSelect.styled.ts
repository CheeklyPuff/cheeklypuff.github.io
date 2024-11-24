import styled from 'styled-components';
import { Select, InputLabel } from "@mui/material"

export const StyledHeading = styled.h1`
  font-size: 1.5rem;
`;

export const Container = styled.div`
  width: 200px;
  display: inline-block;
  margin-right: 15px;
  margin-top: 15px;
`;

export const StyledSelect = styled(Select)`
  & .MuiInputBase-input {
    background-color: rgba(255, 255, 255, 0.8);
    color: #000;

    &:focus {
      border-color: red;
    }
  }
  &:hover {
    border-color: red;
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  color: #fff;
  top: -10px;
`
