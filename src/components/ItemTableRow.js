import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';

function ItemTableRow (props){
    const [value, setValue] = useState(false);
  
    function handleDetails (event) {
        if(value === false) {
            setValue(true);
        } else {
            setValue(false);
        }
    }

    if(value === true) {
        return (
            <TableRow
                key={props.item.itemCode}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {props.item.itemCodee}
                </TableCell>
                <TableCell align="right">{props.item.description}</TableCell>
                <TableCell align="right">{props.item.price}</TableCell>
                <TableCell align="right">{props.item.state}</TableCell>
                <TableCell align="right">{props.item.creationDate}</TableCell>
                <TableCell align="right">{props.item.creator.name}</TableCell>
            </TableRow>
        );
    } else {
        return (
            <TableRow
                key={props.item.itemCode}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {props.item.itemCodee}
                </TableCell>
                <TableCell align="right">{props.item.description}</TableCell>
                <TableCell align="right">{props.item.price}</TableCell>
                <TableCell align="right">{props.item.state}</TableCell>
                <TableCell align="right">{props.item.creationDate}</TableCell>
                <TableCell align="right">{props.item.creator.name}</TableCell>
            </TableRow>
        );
    }
}

export default ItemTableRow;