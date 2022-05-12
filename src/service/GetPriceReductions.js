import axios from 'axios';
import React, { useState, useEffect} from 'react';
import ItemTable from '../components/ItemTable';

export default function GetPriceReductions() {
    const [priceReductions, setPriceReductions] = useState(null);

    useEffect(() => {
        fetchPriceReductions();
    }, []);

    const fetchPriceReductions=async()=>{
        const response=await axios('http://localhost:8080/PriceReduction/PriceReductions');
        setPriceReductions(response.data);
    }

    return (
        <ItemTable priceReductions={priceReductions}></ItemTable>
    );
}