import React, { useState, useEffect, useRef } from 'react';
import {connect} from 'react-redux';
import {searchUser} from '../../redux/global.actions.js';
import './search-bar.styles.scss';

const SearchBar = ({searchUser}) => {
    const containerRef = useRef(null);
    const ref = useRef(null);
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        containerRef.current.classList.remove('searched');
        setValue(event.target.value);
    }

    const search = () => {
        containerRef.current.classList.add('searched');
        searchUser(value);
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
        containerRef.current.classList.add('searched');
        ref.current.classList.toggle('focus')
    }

    return (
        <div className="search-container" >
            <div className="search-bar" ref={containerRef} >
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
                    >
                    </input>
                <div className="cancel-button" id='cancel-button' ref={ref} onClick = {() => setValue('')}>
                    <i className="fa fa-trash"></i>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    searchUser: id => dispatch(searchUser(id)),
})

export default connect(null, mapDispatchToProps)(SearchBar);