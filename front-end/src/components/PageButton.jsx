import './styles/pageButton.css'

const PageButton = ({title, icon, onClick, disabled}) => {

    return (
        <button 
            title={title}
            onClick={onClick}
            disabled={disabled}
            className="pageButton"
        >{icon}</button>
    );
}

export default PageButton;