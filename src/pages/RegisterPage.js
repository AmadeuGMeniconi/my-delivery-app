import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles/registerPage.css'

const RegisterPage = ({setIsNavDisabled}) => {

    const [clientName, setClientName] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [date, setDate] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    console.log(isLoading)

    useEffect(() => {
        setIsFilled(checkIsDeliveryDataComplete());
    } )

    function clearFormData() {
        setClientName('')
        setDate('')
        setFrom('')
        setTo('')
    }

    function checkIsDeliveryDataComplete () {
        if (clientName.length && from.length && to.length && date.length !== 0) {
            return true
        } else {
            return false
        }
    }    

    function showToast(status) {
        switch(status){
            case 'success':
                toast.success('Delivery Registered!', {
                    position: toast.POSITION.BOTTOM_LEFT,
                });
                break;
            case 'warning':
                toast.warning('Check for empty fields.', {
                    position: toast.POSITION.BOTTOM_LEFT,
                });
        }
    }

    function handleFormSubmition(isFilled) {
        setIsLoading(true)
        setIsNavDisabled(true)
        if (isFilled) {
            setTimeout(() => {
                //TODO: Check From and To Adress before sending data to database
                showToast('success')
                // clearFormData()
                setIsLoading(false)
                setIsNavDisabled(false)
            }, 3000);
        } else {
            showToast('warning')
            setIsLoading(false)
            setIsNavDisabled(false)
        }
    }

    return (
        <div className='registerPageContainer'>
            <div className='title'>
                <h1>Welcome</h1>
                <p>Fill the form bellow to register the delivery</p>
            </div>
            <form>
                <label>
                    Client name:
                    <input 
                        type='text' 
                        value={clientName} 
                        name='clientName' 
                        required 
                        onChange={(e) => setClientName(e.target.value)}
                        disabled={isLoading}
                    />
                </label>
                <label>
                    From:
                    <input 
                        type='text' 
                        value={from} 
                        name='from' 
                        required 
                        onChange={(e) => setFrom(e.target.value)}
                        disabled={isLoading}
                    />
                </label>
                <label>
                    To:
                    <input 
                        type='text' 
                        value={to} 
                        name='to' 
                        required 
                        onChange={(e) => setTo(e.target.value)}
                        disabled={isLoading}
                    />
                </label>
                <label>
                    Date:
                    <input 
                    className='date'
                        type='date' 
                        value={date} 
                        name='date' 
                        required 
                        onChange={(e) => setDate(e.target.value)}
                        disabled={isLoading}
                    />
                </label>

                
                {isLoading && <p className='loading'>Loading...</p>}
                    
                    <input 
                        className='submitButton'
                        type='submit' 
                        value='Register'
                        onClick={() => handleFormSubmition(isFilled)}  
                        disabled={isLoading}
                    />
                
            </form>
        </div>
    );
}
  
export default RegisterPage;