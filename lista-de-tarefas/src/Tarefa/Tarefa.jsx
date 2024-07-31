import "./Tarefa.css";

function Tarefa(props) {
    return (
        <>
            <div className="divLista">
                <p className="tarefaLista">{props.tarefa}</p>    
            </div>
        </>
    )
}

export default Tarefa;