import React from 'react';
import "./Resetbutton.css"
const Resetbutton = ({ setResetBoard }) => {
    return (
        <button className="reset-btn" onClick={setResetBoard}>Reset</button>
    );
};

export default Resetbutton;