import React from 'react';
import { Search } from '../../assets/images'
import './SearchBox.scss';

const SearchBox = ({ onChange }) => {
    return (
        <div className="flex viveonixSearchBox">
            <img src={Search} alt="search" />
            <input onChange={onChange} className="ml-4" name="search" placeholder="Search Here..." />
        </div>
    )
}
export default SearchBox;