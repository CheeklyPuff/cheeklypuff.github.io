import styled from 'styled-components';
import { Button, TextField } from "@mui/material";

interface TableProps {
  isHeader?: boolean;
}

interface QtyButtonProps {
  type: string;
}

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 60vh;
  overflow-y: scroll;
  border: 1px solid #ccc;
`;

export const TableCell = styled.div`
  flex: 1;
  padding: 15px 20px;

  img {
    padding-left: 5px;
  }
`;

export const TableRow = styled.div`
  border-bottom: 1px solid #a9a9a9;
  display: flex;
  justify-content: space-between;
  background-color: ${(props: TableProps) => props.isHeader ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.5)'};
  color: ${(props: TableProps) => props.isHeader && '#000'};

  ${TableCell}:first-child {
    width: 80px;
    flex: initial;
  }
  ${TableCell}:nth-child(3) {
    width: 45%;
    flex: initial;
  }
`;

export const TableHeader = styled(TableRow)`
  font-weight: bold;
`;

export const QtyWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const QtyInput = styled.input`
  width: 30px;
`;

export const ButtonWrapper = styled.div`
  text-align: right;
  margin-bottom: 15px;
`;

export const QtyBuytton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  margin-left: 3px;
  width: 20px;
  height: 10px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  padding: 5px 0;
  background: ${(props: QtyButtonProps) => props.type === 'increase' ? '#DA4167' : '#41beda'};
  color: #fff;
  font-weight: bold;
  user-select: none;
  border-radius: 5px;
`;

export const StyledButton = styled(Button)`
  margin-right: 5px;
  border-color: #33bccf;
  color: #33bccf;
  &:hover {
    border-color: #33bccf;
    color: #33bccf;
    opacity: 0.5;
  }
`;

export const AlertWrapper = styled.div`
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  &>div {
    margin: 0 auto;
    max-width: 700px;
    opacity: 80%;
  }
`;

export const StyledTextField = styled(TextField)`
  background-color: #fff;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;
