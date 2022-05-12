import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from 'react';
import App from '../App';

function Footer () {
    const [value, setValue] = useState(null);
  
    function handleItems (event) {
        localStorage.setItem('Items', true);
        localStorage.setItem('Login', false);
        localStorage.setItem('Details', false);
    }
  
    function handleLoginForm (event) {
        localStorage.setItem('Items', false);
        localStorage.setItem('Login', true);
        localStorage.setItem('Details', false);
    }
  
    function handleItemDetails (event) {
        localStorage.setItem('Items', false);
        localStorage.setItem('Login', false);
        localStorage.setItem('Details', true);
    }

    return (
        <footer>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                >
                <BottomNavigationAction label="Home"></BottomNavigationAction>
                <BottomNavigationAction label="Items" onClick={handleItems}></BottomNavigationAction>
                <BottomNavigationAction label="Login" onClick={handleLoginForm}></BottomNavigationAction>
                <BottomNavigationAction label="Item Details" onClick={handleItemDetails}></BottomNavigationAction>
            </BottomNavigation>
            <h3>{localStorage.getItem('Items')}</h3>
        </footer>
    )
}

export default Footer;