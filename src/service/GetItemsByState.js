import axios from 'axios';
import React, { useState, useEffect} from 'react';
import ItemTable from '../components/ItemTable';

export default function GetItemsByState(props) {
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems=async()=>{
        const response=await axios('http://localhost:8080/Item/State/'+props.itemState);
        setItems(response.data);
    }

    return (
        <ItemTable items={items}></ItemTable>
    );
}