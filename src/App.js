import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

//Styles
import './App.css';

//App components
import PageButton from './components/PageButton';

//App pages
import MapPage from './pages/MapPage';
import RegisterPage from './pages/RegisterPage';
import TablePage from './pages/TablePage';

function App() {

  const [currentPage, setCurrentPage] = useState(<RegisterPage/>)
  const [isNavDisabled, setIsNavDisabled] = useState(false)

  function goToPage(page) {
    switch(page) {
      case 'REGISTER': setCurrentPage(<RegisterPage setIsNavDisabled={setIsNavDisabled}/>)
      break;
      case 'TABLE': setCurrentPage(<TablePage/>)
      break;
      case 'MAP': setCurrentPage(<MapPage/>)
      break;
    }
  }

  return (
    <div>
      <ToastContainer/>
      <div className="appContainer">
        
        <header className='appHeader'>
            <h1>TITLE</h1>
        </header>
        <nav className='navBar'>
          <PageButton onClick={() => goToPage('REGISTER')} disabled={isNavDisabled} />
          <PageButton onClick={() => goToPage('TABLE')} disabled={isNavDisabled}/>
          {/* <PageButton onClick={() => goToPage('MAP')} isLoading={isLoading}/> */}
        </nav>
        <div className='pageContainer'>
          {currentPage}
        </div>
      </div>
    </div>
  );
}

export default App;
