import './styles/pageButton.css'

const PageButton = ({onClick, disabled}) => {

  
    
    return (
        <button 
        onClick={onClick}
        disabled={disabled}
        className="pageButton"
        > Icon </button>
    );
}

export default PageButton;