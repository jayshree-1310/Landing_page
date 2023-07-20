import React from 'react';
import { useState } from 'react';
import './Puzzles.css';
import Menu from './menuApi';
import MenuCard from './MenuCard'

const Puzzles = () => {
    const [menuData,setMenuData] = useState(Menu);
    console.log(menuData)
    return (
        <>
            
            <MenuCard menuData={menuData}/>
        </>
    )
}

export default Puzzles