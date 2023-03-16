import React from 'react'

const Result = ({ result, resetValue, img, name }) => {
    return (
        <div className="winner">
            <h2>TIC-TAC-TOE</h2>
            <h3>{result!=='Tie !!' ? result : ''}</h3>
            <img src={img} alt={img} />
            <p className={name === 'X' ? 'user-X' : 'user-O'}>{name}</p>
            <button className="reset-btn" onClick={() => resetValue()}>Restart</button>
        </div>
    )
}

export default Result
