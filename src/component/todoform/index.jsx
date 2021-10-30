import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';

Todofrom.propTypes = {
    onsubmit: PropTypes.func
};

Todofrom.defaultProps = {
    onsubmit: null,
}

function Todofrom(props) {

    const { onsubmit} = props;

    const [value, setValue] = useState("");

    const handleOnchange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formValue = {
            title: value,
        }
        onsubmit(formValue);
        setValue("");
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" onChange = {handleOnchange} value = {value} />
        </form>
    );
}

export default Todofrom;
