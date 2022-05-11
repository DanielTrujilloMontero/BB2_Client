import React, { useState, useEffect } from 'react';
import ItemTableRow from './ItemTableRow';

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
        <div className='Items'>
            <table>
                <thead>
                    <tr className='ItemTableRow'>
                        <th>Code</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>State</th>
                        <th>Creation Date</th>
                        <th>Creator</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayItems}
                </tbody>
            </table>
        </div>
    );
}

export default ItemTable;
