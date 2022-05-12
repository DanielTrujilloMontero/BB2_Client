import axios from 'axios';
import React, { useState, useEffect} from 'react';
import ItemTable from '../components/ItemTable';

export default function GetItems() {
    const [suppliers, setSuppliers] = useState(null);

    useEffect(() => {
        fetchSuppliers();
    }, []);

    const fetchSuppliers=async()=>{
        const response=await axios('http://localhost:8080/ItemSupplier/ItemSuppliers');
        setSuppliers(response.data);
    }

    return (
        <ItemTable suppliers={suppliers}></ItemTable>
    );
}