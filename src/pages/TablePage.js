import { useState } from 'react';
import './styles/tablePage.css'

const TablePage = () => {

    const [deliveryList, setDeliveryList] = useState([])

    return (
        <div className='tablePageContainer'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Client Name</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {deliveryList.map((delivery, index) => {
                        return (
                        <tr key={delivery.id} onClick={() => console.log('Idx: ' + index, 'Id: ' + delivery.id)}>
                            <td>{delivery.id}</td>
                            <td>{delivery.clientName}</td>
                            <td>{delivery.from}</td>
                            <td>{delivery.to}</td>
                            <td>{delivery.date}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
  
export default TablePage;