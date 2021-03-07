import './TaskForm.css';

import { useState } from 'react';
import { nanoid } from 'nanoid';

function TaskForm(props) {
    const [activity, setActivity] = useState("");
    const [date, setDate] = useState(() => {
        let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
        if (month < 10) month = '0' + month;
        if (date < 10) date = '0' + date;
        return `${year}-${month}-${date}`;
    });

    const addTask = (e) => {
        e.preventDefault();

        const newTask = {
            id: "task-" + nanoid(),
            title: activity,
            date: date
        };
        props.addTaskHandler(newTask);

        setDate('');
        setActivity('');
    }

    return (
        <form onSubmit={(e) => addTask(e)} className="TaskForm">
            <div className="TaskName">
                <div className="title">
                    <p>Task Name</p>
                    <svg width="23" height="23" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M24 3H4C3.30964 3 2.75 3.55964 2.75 4.25V21.75C2.75 22.4404 3.30964 23 4 23H24C24.6904 23 25.25 22.4404 25.25 21.75V4.25C25.25 3.55964 24.6904 3 24 3ZM4 0.5C1.92893 0.5 0.25 2.17893 0.25 4.25V21.75C0.25 23.8211 1.92893 25.5 4 25.5H24C26.0711 25.5 27.75 23.8211 27.75 21.75V4.25C27.75 2.17893 26.0711 0.5 24 0.5H4ZM6.5 6.75H9V9.25H6.5V6.75ZM12.75 6.75C12.0596 6.75 11.5 7.30964 11.5 8C11.5 8.69036 12.0596 9.25 12.75 9.25H20.25C20.9404 9.25 21.5 8.69036 21.5 8C21.5 7.30964 20.9404 6.75 20.25 6.75H12.75ZM9 11.75H6.5V14.25H9V11.75ZM11.5 13C11.5 12.3096 12.0596 11.75 12.75 11.75H20.25C20.9404 11.75 21.5 12.3096 21.5 13C21.5 13.6904 20.9404 14.25 20.25 14.25H12.75C12.0596 14.25 11.5 13.6904 11.5 13ZM9 16.75H6.5V19.25H9V16.75ZM11.5 18C11.5 17.3096 12.0596 16.75 12.75 16.75H20.25C20.9404 16.75 21.5 17.3096 21.5 18C21.5 18.6904 20.9404 19.25 20.25 19.25H12.75C12.0596 19.25 11.5 18.6904 11.5 18Z" fill="#414141" />
                    </svg>
                </div>
                <input value={activity} onChange={e => setActivity(e.target.value)}
                    placeholder="New Activity" required></input>
            </div>
            <div className="DueDate">
                <div className="title">
                    <p>Due Date</p>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.75 18.25C17.1307 18.25 18.25 17.1307 18.25 15.75C18.25 14.3693 17.1307 13.25 15.75 13.25C14.3693 13.25 13.25 14.3693 13.25 15.75C13.25 17.1307 14.3693 18.25 15.75 18.25Z" fill="#414141" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.5 0.75C2.42893 0.75 0.75 2.42893 0.75 4.5V19.5C0.75 21.5711 2.42893 23.25 4.5 23.25H19.5C21.5711 23.25 23.25 21.5711 23.25 19.5V4.5C23.25 2.42893 21.5711 0.75 19.5 0.75H4.5ZM3.25 19.5V7H20.75V19.5C20.75 20.1904 20.1904 20.75 19.5 20.75H4.5C3.80964 20.75 3.25 20.1904 3.25 19.5Z" fill="#414141" />
                    </svg>
                </div>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} required ></input>
            </div>
            <button type="submit">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0.5C7.44772 0.5 7 0.947715 7 1.5V7.5H1C0.447715 7.5 0 7.94772 0 8.5C0 9.05229 0.447715 9.5 1 9.5H7V15.5C7 16.0523 7.44772 16.5 8 16.5C8.55229 16.5 9 16.0523 9 15.5V9.5H15C15.5523 9.5 16 9.05229 16 8.5C16 7.94772 15.5523 7.5 15 7.5H9V1.5C9 0.947715 8.55229 0.5 8 0.5Z" fill="#1672EC" />
                </svg>
                Add Task
            </button>
        </form>
    )
}

export default TaskForm;
