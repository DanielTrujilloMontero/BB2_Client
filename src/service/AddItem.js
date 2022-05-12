import axios from 'axios';
import React, {useEffect} from 'react';

export default function AddItem(props) {
    useEffect(() => {
        axios.post('http://localhost:8080/Item/Add', props.item)
    }, []);
}