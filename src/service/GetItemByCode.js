import axios from 'axios';
import React, { useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail';

export default function GetItemsByState(props) {
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetchItems();
    });

    const fetchItems=async()=>{
        const response=await axios('http://localhost:8080/Item/Code/'+props.itemCode);
        setItem(response.data);
    }

    return (
        <ItemDetail item={item}></ItemDetail>
    );
}