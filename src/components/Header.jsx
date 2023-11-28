
const Header = ({onAdd,showAdd}) => {
    return (
        <header className='header'>
            <h2>Task Tracker </h2> 
            <button style={{backgroundColor:showAdd?'red':'green'}} className="btn" onClick={onAdd}>{showAdd?'Close':'Add'}</button>
        </header>
    )
}

export default Header 