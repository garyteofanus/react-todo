import './Search.css';

function Search(props) {
    return (
        <div className="Search">
            <input onChange={(e) => props.filterTaskHandler(e.target.value)} 
            placeholder="Search activities..."></input>
        </div>
    )
}

export default Search;
