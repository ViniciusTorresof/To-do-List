import style from './Header.module.css';
import toDoLogo from '../assets/Logo.svg';
import iconButton from '../assets/mais.svg';
import { useState } from 'react';

export function Header ({task, handleCreateCard}) {

    const [desafio, setDesafio] = useState("")

    function createNewCardTask (e) {
        e.preventDefault()
        handleCreateCard(desafio)
        setDesafio("")
    }

    function inputValue (e) {
        setDesafio(e.target.value)
    }

    return (
        <header className={style.header}>
            <img src={toDoLogo} alt="Logo" className={style.logo}/>
            <form onSubmit={createNewCardTask}>
                <input 
                     type="text" 
                     className={style.input} 
                     placeholder="Adicione uma nova tarefa" 
                     value={desafio}
                     onChange={inputValue}
                     required
                />
                <button type="submit" className={style.button} disabled={desafio.length === 0}>
                    Criar <img src={iconButton} alt="Criar task"/>
                </button>
            </form>
        </header>
    )
}