import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Alert } from '@mui/material';
import { 
  Table,
  TableRow,
  TableHeader,
  TableCell,
  QtyWrapper,
  QtyInput,
  ButtonWrapper,
  QtyBuytton,
  StyledButton,
  AlertWrapper,
  StyledTextField
} from './ItemList.styled';
import { Chip } from '../Chip/Chip';
import { ResetDialog } from  '../ResetDialog/ResetDialog'
import { AppContext, IAppContext } from '../../context/AppContext';

export const ItemList = ({ data }) => {
  const { player, dialogOpen, itemResetStatus, setItemResetStatus, setDialogOpen }: IAppContext = useContext(AppContext);
  const [itemData, setItemData] = useState(data);
  const defaultQty = itemData.map((item) => ({ id: item.id, name: item.name, qty: item.qty }));
  const [qty, setQty] = useState(defaultQty);
  const [savingStatus, setSavingStatus] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem(`${player}MHsavedItems`)) {
      //current player
      const existSavedItems = JSON.parse(localStorage.getItem(`${player}MHsavedItems`));
      setSavedQty(existSavedItems, defaultQty);
    } else {
      // for other players
      setQty(defaultQty);
      setItemData(data);
    }

    // reset items
    if(itemResetStatus) {
      if(localStorage.getItem(`${player}MHsavedItems`)) {
        localStorage.removeItem(`${player}MHsavedItems`);
      }
      setQty(defaultQty);
      setItemData(data);
      setItemResetStatus(false);
    }
  },[player, itemResetStatus]);

  const setSavedQty = (existSavedItems: any[], qtyArr: any[]) => {
    let matchingItems = [];
    existSavedItems.forEach(item1 => {
      const matched = qtyArr.find(item2 => item2.id === item1.id);
      if (matched) {
        matchingItems.push({id: item1.id, name: item1.name, qty: item1.qty});
      }
    });
    setQty(matchingItems);
  }

  const qtyCounter = (countType: string, itemId: string, itemName: string, typedQty?: number) => {
    const updatedItemArr = [...qty];
    updatedItemArr.map((qtyItem, index) => {
      if(qtyItem.id === itemId) {
        if(countType === 'inc') {
          updatedItemArr[index].qty += 1;
        } 
        if(countType === 'dec') {
          if(updatedItemArr[index].qty > 0) {
            updatedItemArr[index].qty -= 1;
          }
        }
        if(countType === 'insert') {
          updatedItemArr[index].qty = typedQty;
        }
      } else {
        // new item
        const itemIndex = updatedItemArr.findIndex(x => x.id === itemId);
        if(itemIndex < 0) {
          updatedItemArr.push({
            id: itemId,
            name: itemName,
            qty: typedQty ? typedQty : 1,
          });
        }
      }
    });

    setQty(updatedItemArr);
    setSavingStatus(false);
  }

  const handleQtyInputChange = (e: ChangeEvent<HTMLInputElement>, itemId: string, itemName: string) => {
    const val = e.target.value;
    let newQty = 0;
    if(val !== '') {
      newQty = parseInt(val);
    }
    qtyCounter('insert', itemId, itemName, newQty);
  }

  const saveToStorage = () => {
    const updatedItemArr = [...qty];
    const polishedItems = updatedItemArr.filter(item => item.qty != 0);
    localStorage.setItem(`${player}MHsavedItems`, JSON.stringify(polishedItems));
    setSavingStatus(true);
    setTimeout(() => {
      setSavingStatus(false);
    }, 3000);
  }

  const handleDialog= () => {
    setDialogOpen(true);
  };

  const handleSearchChange = (event) => {
    const searchItem = event.target.value;
    if(searchItem) {
      rearrangeDataBySearchValue(data, searchItem);
    } else {
      setItemData(data);
    }
  }

  const rearrangeDataBySearchValue = (items: any[], searchValue: string) => {
    const matchingItems = [];
    const nonMatchingItems = [];
    items.forEach(item => {
      if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
        matchingItems.push(item);
      } else {
        nonMatchingItems.push(item);
      }
    });
  
    setItemData([...matchingItems, ...nonMatchingItems]);
  }

  const renderMatchedValue = (itemId) => {
    const qtyArray = [...qty];
    const matchedQty = qtyArray.find(item => item.id === itemId);
    return matchedQty ? matchedQty.qty : 0;
  }

  return (
    <>
      {savingStatus &&
        <AlertWrapper>
          <Alert severity="success">Successfully saved your items</Alert>
        </AlertWrapper>
      }
      <ButtonWrapper>
        <StyledButton variant="outlined" onClick={saveToStorage}>Save</StyledButton>
        <StyledButton variant="outlined" color="error" onClick={handleDialog}>Reset</StyledButton>
        {dialogOpen && <ResetDialog />}
      </ButtonWrapper>
      <StyledTextField
        id="filled-search"
        label="Search item"
        type="search"
        variant="filled"
        autoComplete="off"
        fullWidth
        onChange={handleSearchChange}
      />
      <Table>
        <TableHeader isHeader>
          <TableCell>Qty</TableCell>
          <TableCell>Item Name</TableCell>
          <TableCell>Usage</TableCell>
        </TableHeader>
        {itemData.map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              <QtyWrapper>
                <QtyInput
                  type="number"
                  placeholder={'0'}
                  value={renderMatchedValue(item.id)}
                  onChange={(e) => handleQtyInputChange(e, item.id, item.name)} />
                <QtyBuytton type={'decrease'} onClick={() => qtyCounter('dec', item.id, item.name)}>-</QtyBuytton>
                <QtyBuytton type={'increase'} onClick={() => qtyCounter('inc', item.id, item.name)}>+</QtyBuytton>
              </QtyWrapper>
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              {item.flag ?
                <>
                {
                  item.flag.flatMap((element) => element).map((usageItem, index) => (
                    <Chip key={index} usageItem={usageItem} />
                  ))
                }
                </> : '-'
              }
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </>
  );
}