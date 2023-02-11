import { useState } from 'react';
import './styles/tablePage.css'

import { MapPinIcon } from '@heroicons/react/24/solid'

const TablePage = () => {

    const [deliveryList, setDeliveryList] = useState([
        {id: 1, clientName: 'alberto', from: 'Rua A', to: 'Rua B', date: '21-05-2023'},
        {id: 2, clientName: 'maria', from: 'Rua C', to: 'Avenida A', date: '23-08-2023'},
        {id: 3, clientName: 'joao', from: 'Avenida F', to: 'Rua B', date: '01-01-2023'}
    ]);

    return (
        <div className='tablePageContainer'>
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
                        <tr key={delivery.id} onClick={() => console.log('Idx: ' + index, ' | ', 'Id: ' + delivery.id)}>
                            <td>{delivery.id}</td>
                            <td>{delivery.clientName}</td>
                            <td>{delivery.from}</td>
                            <td>{delivery.to}</td>
                            <td>{delivery.date}</td>
                            <td className='trackDelivery'><MapPinIcon height={25} fill={'red'}/></td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
  
export default TablePage;