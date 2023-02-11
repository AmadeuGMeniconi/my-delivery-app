import './styles/pageButton.css'

const PageButton = ({onClick, disabled}) => {

    return (
        <button 
        onClick={onClick}
        disabled={disabled}
        className="pageButton"
        > </button>
    );
}

export default PageButton;