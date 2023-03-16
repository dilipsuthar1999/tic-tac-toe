import React from 'react'

const Resetbtn = ({resetValue}) => {
    return (
        <button className="reset-btn" onClick={() => resetValue()}>Restart</button>
    )
}

export default Resetbtn
