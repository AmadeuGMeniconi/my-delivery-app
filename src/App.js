import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

//App components
import PageButton from './components/PageButton';

//App pages
import MapPage from './pages/MapPage';
import RegisterPage from './pages/RegisterPage';
import TablePage from './pages/TablePage';

//Styles
import './App.css';

import { ClipboardDocumentListIcon, ArchiveBoxArrowDownIcon } from '@heroicons/react/24/outline'
import deliveryListIcon from './images/delivery-list.svg'

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
    <>
      <ToastContainer/>
      <div className="appContainer">
        <header className='appHeader'>
            <h1>TITLE</h1>
        </header>
        <nav className='navBar'>
          <PageButton onClick={() => goToPage('REGISTER')} disabled={isNavDisabled} icon={<ArchiveBoxArrowDownIcon stroke='white'/>} />
          <PageButton onClick={() => goToPage('TABLE')} disabled={isNavDisabled} icon={<ClipboardDocumentListIcon stroke='white'/>}/>
          {/* <PageButton onClick={() => goToPage('MAP')} isLoading={isLoading}/> */}
        </nav>
        <div className='pageContainer'>
          {currentPage}
        </div>
      </div>
    </>
  );
}

export default App;
