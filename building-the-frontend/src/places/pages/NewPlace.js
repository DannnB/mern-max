import React from 'react'

import Input from '../../shared/components/FormElements/Input';
import './NewPlace.css'

const NewPlace = () => {
    return (
        <form className="place-form">
            {/* <Input type="text" label="Title" validators={[]} onChange={}/> */}
            <Input element="input" type="text" label="Title" placeholder="Please enter your name..."/>
        </form>
    )
}

export default NewPlace