import style from './Task.module.css'
import iconTrash from '../assets/trash.svg';
import iconCheck from '../assets/iconCheck.svg'

export function Task({task, content, handleCheckTask, handleDeleteTask}) {
    return (
        <li className={style.iten}>
        <button className={style.button} onClick={()=> handleCheckTask(task.id)}>
        {task.check ? <img src={iconCheck} alt="icon-check" className={style.check}/> : <div className={style.isFalse}></div> }
        </button>
        <p className={style.description}>{content.desafio}</p>
        <button className={style.trash} onClick={() => handleDeleteTask(content)}><img src={iconTrash} alt="Excluir tarefa"/></button>
    </li>
    )
}