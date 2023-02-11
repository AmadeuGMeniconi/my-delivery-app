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

import { ClipboardDocumentListIcon, ArchiveBoxArrowDownIcon, CubeIcon } from '@heroicons/react/24/outline'


function App() {

  const [isNavDisabled, setIsNavDisabled] = useState(false)
  const [currentPage, setCurrentPage] = useState(<RegisterPage setIsNavDisabled={setIsNavDisabled}/>)

  function goToPage(page) {
    switch(page) {
      case 'REGISTER': setCurrentPage(<RegisterPage setIsNavDisabled={setIsNavDisabled}/>)
      break;
      case 'TABLE': setCurrentPage(<TablePage setIsNavDisabled={setIsNavDisabled}/>)
      break;
      case 'MAP': setCurrentPage(<MapPage setIsNavDisabled={setIsNavDisabled}/>)
      break;
    }
  }

  return (
    <>
      <ToastContainer/>
      <div className="appContainer">
        <header className='appHeader'>
          <span><CubeIcon stroke={'#6bffc6'} width={80}/><h1>DELIVERY<br/>APP</h1></span>
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
