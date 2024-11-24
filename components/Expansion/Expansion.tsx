import { SelectChangeEvent } from "@mui/material"
import { useContext } from "react";
import { StyledHeading, Container, CheckboxContainer, CheckboxWrapper, Label, StyledCheckbox } from './Expansion.styled'
import { AppContext, IAppContext } from "../../context/AppContext";

export const Expansion = () => {
  const { expansions, setExpansions, player }: IAppContext = useContext(AppContext);
  const expansionType = ['Nergigante']; //, 'Kuluyaku'
  let savedExpansions = [...expansions];

  const handleChange = (event: SelectChangeEvent) => {
    const selectedVal = event.target.value;
    const isSelected = event.target.checked;

    if(!expansions.includes(selectedVal) && isSelected) {
      savedExpansions.push(selectedVal);
    }

    if(expansions.includes(selectedVal) && !isSelected) {
      var index = savedExpansions.indexOf(selectedVal);
      savedExpansions.splice(index, 1);
    }
      
    setExpansions(savedExpansions);
    localStorage.setItem(`${player}MHExpansions`, JSON.stringify(savedExpansions));
  };

  const isChecked = (type: string) => {
    const getItem = localStorage.getItem(`${player}MHExpansions`);

    if (getItem) {
      return getItem.includes(type);
    }

    return false;
  }

  return (
    <Container>
      <StyledHeading>Eexpansion</StyledHeading>
      <CheckboxContainer>
        {expansionType.map(type => (
          <CheckboxWrapper key={`expansion-${type}`}>
            <Label>{type}</Label>
            <StyledCheckbox onChange={handleChange} value={type} checked={isChecked(type)}/>
          </CheckboxWrapper>
          ))}
      </CheckboxContainer>
    </Container>
  )
}