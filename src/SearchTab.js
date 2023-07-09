import React from 'react';
import { useGlobalContext } from './context';
import {LuSearch} from 'react-icons/lu'
import {BsFilter,BsFillPlusSquareFill} from 'react-icons/bs'

const SearchTab = () =>{
    const {isToggle} = useGlobalContext();
    return(
        <div className= {`${isToggle?'search-bar shrink':'search-bar'}`}>
            <div className = 'people'>
                <h3>People</h3>
                <BsFillPlusSquareFill className='add-btn'/>
            </div>
            <div>
                <LuSearch className='search-icon'/>
                <input type='text' placeholder='Search' className='search-input'/>
                <button className='filter-btn'><BsFilter/>filter</button>
            </div>
        </div>
    )
}

export default SearchTab;