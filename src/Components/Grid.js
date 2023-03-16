import React from 'react'

const Grid = ({value, addValue}) => {
    return (
        <div className="grid">
            <button className={value[0]==='X'? 'grid-item user-X' : 'grid-item user-O'} onClick={()=>addValue(0)} disabled={value[0]}>{value[0]}</button>
            <button className={value[1]==='X'? 'grid-item user-X' : 'grid-item user-O'} onClick={()=>addValue(1)} disabled={value[1]}>{value[1]}</button>
            <button className={value[2]==='X'? 'grid-item user-X' : 'grid-item user-O'} onClick={()=>addValue(2)} disabled={value[2]}>{value[2]}</button>
            <button className={value[3]==='X'? 'grid-item user-X' : 'grid-item user-O'} onClick={()=>addValue(3)} disabled={value[3]}>{value[3]}</button>
            <button className={value[4]==='X'? 'grid-item user-X' : 'grid-item user-O'} onClick={()=>addValue(4)} disabled={value[4]}>{value[4]}</button>
            <button className={value[5]==='X'? 'grid-item user-X' : 'grid-item user-O'} onClick={()=>addValue(5)} disabled={value[5]}>{value[5]}</button>
            <button className={value[6]==='X'? 'grid-item user-X' : 'grid-item user-O'} onClick={()=>addValue(6)} disabled={value[6]}>{value[6]}</button>
            <button className={value[7]==='X'? 'grid-item user-X' : 'grid-item user-O'} onClick={()=>addValue(7)} disabled={value[7]}>{value[7]}</button>
            <button className={value[8]==='X'? 'grid-item user-X' : 'grid-item user-O'} onClick={()=>addValue(8)} disabled={value[8]}>{value[8]}</button>
        </div>
    )
}

export default Grid
