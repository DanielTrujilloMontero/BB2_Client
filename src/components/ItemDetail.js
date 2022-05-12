import React from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

function ItemDetail(props) {
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
                    </TableBody>
                </Table>
            </TableContainer>
    );
}

export default ItemDetail;