import './Sort.css';

function Sort(props) {
    return (
        <div className="Sort">
            <p>Sort By</p>
            <select defaultValue={'title'} onChange={(e) => props.sortTaskHandler(e.target.value)}>
                <option value="title">Name</option>
                <option value="date">Date</option>
            </select>
        </div>
    )
}

export default Sort;
