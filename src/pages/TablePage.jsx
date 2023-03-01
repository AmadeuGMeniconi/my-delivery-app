import { useState } from 'react';
import './styles/tablePage.css'

import { MapPinIcon } from '@heroicons/react/24/solid'

const TablePage = ({deliveryList, goToPage}) => {


    
    return (
        <div className='tablePageContainer'>
            {deliveryList.length === 0 ? 
            <h1 className='message'>&lt;no data&gt;</h1> 
            : 
            <div className='scrollContainer'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CLIENT NAME</th>
                            <th>FROM</th>
                            <th>TO</th>
                            <th>DATE</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        {deliveryList.map((delivery, index) => {
                            return (
                                <tr key={index} >
                                    <td>{index}</td>
                                    <td>{delivery.clientName}</td>
                                    <td>{delivery.origin.formatted_address}</td>
                                    <td>{delivery.destination.formatted_address}</td>
                                    <td>{delivery.date}</td>
                                    <td className='trackDelivery'>
                                        <MapPinIcon 
                                            height={25} 
                                            fill={'red'} 
                                            onClick={() => goToPage('MAP', delivery)} 
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>}

        </div>
    );
}
  
export default TablePage;