import React, { useEffect, useState } from 'react'
import './style.css'
import Card from './Card'
import Grid from './Grid'
import Result from './Result'
import Resetbtn from './Resetbtn'

const Game = () => {
    const Avatar = [
        {
            id: 1,
            name: 'X',
            img: 'avatar/avatar01.jpg'
        },
        {
            id: 2,
            name: 'O',
            img: 'avatar/avatar02.jpg'
        }
    ]

    const Tie = {
        id: 1,
        name: 'No Winner',
        img: 'avatar/avatar03.png'
    }

    const [input, setInput] = useState('X')
    const [value, setValue] = useState(Array(9).fill(''))
    const [winner, setWinner] = useState('')

    const addValue = (index) => {
        let dummyArr = [...value]
        dummyArr[index] = input
        setValue(dummyArr)
        setInput(input === 'X' ? 'O' : 'X')
    }

    const resetValue = () => {
        let dummyArr = Array(9).fill('')
        setValue(dummyArr)
        setInput('X')
        setWinner('')
    }

    useEffect(
        () => {
            const checkWin = () => {
                const winIndex = [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]
                ]

                for (let i = 0; i < winIndex.length; i++) {
                    const [a, b, c] = winIndex[i]
                    if (value[a] && value[a] === value[b] && value[b] === value[c]) {
                        return true
                    }
                }
            }

            const checkTie = () => {
                let cell = 0
                value.forEach((value) => {
                    if (value !== '') {
                        cell++
                    }
                })

                return cell === 9
            }

            if (checkWin()) {
                setWinner(input === 'X' ? 'O' : 'X')
            } else {
                if (checkTie()) {
                    setWinner('Tie')
                }
            }
        }
    )

    return (
        <>
            <div className="game">
                <h2>TIC-TAC-TOE</h2>
                {
                    Avatar.map((Avatar) => {
                        return (
                            <Card key={Avatar.id} name={Avatar.name} img={Avatar.img} bg={input} />
                        )
                    })
                }
                <Grid value={value} addValue={addValue} />
                <Resetbtn resetValue={resetValue} />
            </div>
            {
                winner === 'Tie' ?
                    <Result result='Tie !!' resetValue={resetValue} img={Tie.img} name={Tie.name} />
                    : Avatar.map((Avatar) => {
                        return (
                            Avatar.name === winner ? <Result key={Avatar.id} result='Winner !!' resetValue={resetValue} img={Avatar.img} name={Avatar.name} /> : ''
                        )
                    })
            }
        </>
    )
}

export default Game
