import './TaskItem.css';

function TaskItem(props) {
    const modifyDate = (oldDate) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const ordinalSuffixOf = (i) => {
            let j = i % 10,
                k = i % 100;
            if (j === 1 && k !== 11) {
                return i + "st";
            }
            if (j === 2 && k !== 12) {
                return i + "nd";
            }
            if (j === 3 && k !== 13) {
                return i + "rd";
            }
            return i + "th";
        }

        let [year, month, day] = oldDate.split("-");
        return `${monthNames[parseInt(month) - 1]} ${ordinalSuffixOf(parseInt(day))} ${year}`;
    }
    modifyDate(props.date);
    return (
        <div className="TaskItem">
            <div>
                <h2>{props.title}</h2>
                <p>{modifyDate(props.date)}</p>
            </div>
            <button onClick={() => props.removeTaskHandler(props.id)}>
                <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.3333 5.33334V3.66668C23.3333 1.82573 21.8409 0.333344 20 0.333344H10C8.15905 0.333344 6.66667 1.82573 6.66667 3.66668V5.33334H1.66667C0.746193 5.33334 0 6.07954 0 7.00001C0 7.92048 0.746193 8.66668 1.66667 8.66668H3.33333V27C3.33333 29.7614 5.57191 32 8.33333 32H21.6667C24.4281 32 26.6667 29.7614 26.6667 27V8.66668H28.3333C29.2538 8.66668 30 7.92048 30 7.00001C30 6.07954 29.2538 5.33334 28.3333 5.33334H23.3333ZM20 3.66668H10V5.33334H20V3.66668ZM23.3333 8.66668H6.66667V27C6.66667 27.9205 7.41286 28.6667 8.33333 28.6667H21.6667C22.5871 28.6667 23.3333 27.9205 23.3333 27V8.66668Z" fill="#414141" />
                    <path d="M10 12H13.3333V25.3333H10V12Z" fill="#414141" />
                    <path d="M16.6667 12H20V25.3333H16.6667V12Z" fill="#414141" />
                </svg>
            </button>
        </div>
    )
}

export default TaskItem;
