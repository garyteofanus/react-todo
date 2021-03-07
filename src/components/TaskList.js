import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList(props) {
    return (
        <div className="TaskList">
            {props.data.map(each =>
                <TaskItem key={each.id} id={each.id} title={each.title} date={each.date}
                    removeTaskHandler={props.removeTaskHandler} />
            )}
        </div>
    )
}

export default TaskList;
