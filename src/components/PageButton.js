import './styles/pageButton.css'

const PageButton = ({onClick, isLoading}) => {

  
    
    return (
      <button 
        onClick={onClick}
        disabled={isLoading}
        className="pageButton"
        > Icon </button>
    );
  }
  
  export default PageButton;