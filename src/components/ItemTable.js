import React, { useState, useEffect } from 'react';
import ItemTableRow from './ItemTableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function ItemTable(props) {
    const [items, setItems] = useState(null);

    useEffect(() => {
        setItems(props.items);
    });

    const DisplayItems = items && items.map(item=>{
        return (
                    <ItemTableRow item={item}></ItemTableRow>
                );
            }
        );

    return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Item Code</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">State</TableCell>
                        <TableCell align="right">Creation Date</TableCell>
                        <TableCell align="right">Creator</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {DisplayItems}
                    </TableBody>
                </Table>
            </TableContainer>
    );
}

export default ItemTable;
