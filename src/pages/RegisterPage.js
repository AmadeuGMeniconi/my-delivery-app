import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//App components
import Throbber from '../components/Throbber';

//Styles
import './styles/registerPage.css'

const RegisterPage = ({setIsNavDisabled}) => {

    const [clientName, setClientName] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [date, setDate] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    useEffect(() => {
        setIsFilled(checkIsDeliveryDataComplete());
        console.log('isLoading? ', isLoading)
        console.log('isFilled? ', isFilled)
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
            case 'DELIVERY_REGISTERED':
                toast.success('Delivery Registered!', {
                    position: toast.POSITION.BOTTOM_LEFT,
                });
                break;
            case 'DELIVERY_REGISTER_FAILED':
                toast.warning('Oops. Something happened... Delivery Registration Refused.', {
                    position: toast.POSITION.BOTTOM_LEFT,
                });
            case 'EMPTY_FIELDS':
                toast.warning('Check for empty fields.', {
                    position: toast.POSITION.BOTTOM_LEFT,
                });
        }
    }

    function formSubmition(isFilled) {
        if (isFilled) {
            setIsLoading(true)
            setIsNavDisabled(true)
            try {
                setTimeout(() => {
                    //TODO: GoogleMaps validade From and To eher or directly on input before sending object to database
                    showToast('DELIVERY_REGISTERED')
                    clearFormData()
                    setIsLoading(false)
                    setIsNavDisabled(false)
                }, 6000);
            } catch (error) {
                showToast('DELIVERY_REGISTER_FAILED')
                setIsLoading(false)
                setIsNavDisabled(false)
            }
        } else {
            showToast('EMPTY_FIELDS')
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
                
                {isLoading && <Throbber/>}
                    
                <input 
                    className='submitButton'
                    type='submit' 
                    value='Register'
                    onClick={() => formSubmition(isFilled)}  
                    disabled={isLoading}
                />
            </form>
        </div>
    );
}
  
export default RegisterPage;