import './styles/pageButton.css'

const PageButton = ({icon, onClick, disabled}) => {

    return (
        <button 
        onClick={onClick}
        disabled={disabled}
        className="pageButton"
        >{icon}</button>
    );
}

export default PageButton;