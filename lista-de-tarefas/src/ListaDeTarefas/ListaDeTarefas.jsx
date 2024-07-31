import Tarefa from "../Tarefa/Tarefa";
import "./ListaDeTarefas.css";

function ListaDeTarefas(props) {
    return (
        <>
            <div className="bannerTarefa">
                <h1 className="tituloTarefa">Lista de Tarefas</h1>
                {props.children}
            </div>
        </>
    )
}

export default ListaDeTarefas;