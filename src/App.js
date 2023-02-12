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
import {CubeIcon} from '@heroicons/react/24/solid'


function App() {
  
  const [isNavDisabled, setIsNavDisabled] = useState(false)
  const [currentPage, setCurrentPage] = useState(<RegisterPage setIsNavDisabled={setIsNavDisabled} pushToDeliveryList={pushToDeliveryList}/>)
  const [deliveryList, setDeliveryList] = useState([])

  function pushToDeliveryList (delivery)  {
    deliveryList.push(delivery)
    setDeliveryList(deliveryList)
    // console.log(deliveryList)
  }
  
  function goToPage(page) {
    switch(page) {
      case 'REGISTER': setCurrentPage(<RegisterPage setIsNavDisabled={setIsNavDisabled} pushToDeliveryList={pushToDeliveryList}/>)
      break;
      case 'TABLE': setCurrentPage(<TablePage setIsNavDisabled={setIsNavDisabled} deliveryList={deliveryList}/>)
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
          <span><CubeIcon className='icon' fill={'white'} width={80}/><h1>DELIVERIO</h1></span>
        </header>
        <nav className='navBar'>
          <PageButton onClick={() => goToPage('REGISTER')} disabled={isNavDisabled} icon={<ArchiveBoxArrowDownIcon stroke='white'/>} title={'Register Page'}/>
          <PageButton onClick={() => goToPage('TABLE')} disabled={isNavDisabled} icon={<ClipboardDocumentListIcon stroke='white'/>} title={'Delivery List Page'}/>
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
