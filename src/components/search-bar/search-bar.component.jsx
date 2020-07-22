import React, { useState, useEffect } from 'react';
import './search-bar.styles.scss';

const SearchBar = () => {

    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleClick = () => {
        setValue('');
    }

    const search = () => {
        setValue('');
    }

    useEffect(() => {
        if(value !== '') {
            const timeOut = setTimeout(search, 1500);

            return () => {
                clearTimeout(timeOut);
            }
        }
    }, [value]);

    const handleIcon = () => {
        document.getElementById('cancel-button').classList.toggle('focus')
    }

    return (
        <div className="search-container">
            <div className="search-bar">
                    <input
                        id = 'search'
                        name = 'search'
                        type = 'search'
                        placeholder = 'Type in a git username....'
                        onFocus = { handleIcon }
                        onBlur = { handleIcon }
                        onChange = { handleChange }
                        value = { value }
                        autoComplete = 'off'
                        autoFocus
                    >
                    </input>
                <div className="cancel-button" id='cancel-button' onClick = {handleClick}>
                    <i className="fa fa-trash"></i>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;