import style from './List.module.css'
import { Task } from './Task'
import iconList from '../assets/Clipboard.svg'

export function List ({task, handleCheckTask, handleDeleteTask}) {

    const taskTotal = task.length;
    const taskCompleted = task.filter(item => item.check).length;
    return (
        <section>
            <header className={style.header}>
                <h3 className={style.tarefas}>Tarefas criadas <span className={style.resultado}>{taskTotal}</span></h3>
                <h4 className={style.concluidas}>Concluidas <span className={style.resultado}>{taskCompleted} de {taskTotal}</span></h4>
            </header>
            <ul className={style.list}>
                {task.map(item => {
                    return (
                    <Task 
                        content={item} 
                        task={item}
                        handleCheckTask={handleCheckTask}
                        handleDeleteTask={handleDeleteTask}
                        key={item.id}
                    />)
                })}
                {task.length <= 0 && (
                    <section className={style.section_apresentacao}>
                        <img src={iconList} alt="Icone Lista de tarefas" className={style.iconLista}/>
                        <h3 className={style.titulo}>Você ainda não tem tarefas cadastradas</h3>
                        <p className={style.descricao}>Crie tarefas e organize seus itens a fazer</p>
                    </section>
                )}
            </ul>
        </section>
)}