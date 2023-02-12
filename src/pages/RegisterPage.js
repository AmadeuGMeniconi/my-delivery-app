import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//App components
import Throbber from '../components/Throbber';

//Styles
import './styles/registerPage.css'

const RegisterPage = (props) => {

    const [clientName, setClientName] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [date, setDate] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    useEffect(() => {
        setIsFilled(checkIsDeliveryDataComplete());
    }, [clientName, from, to, date] )

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
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
                break;
            case 'DELIVERY_REGISTER_FAILED':
                toast.warning('Oops. Something happened... Delivery Registration Refused.', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            case 'EMPTY_FIELDS':
                toast.warning('Check for empty fields.', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
        }
    }

    function formSubmition(isFilled) {
        if (isFilled) {
            setIsLoading(true)
            props.setIsNavDisabled(true)
            try {
                setTimeout(() => {
                    //Temporary
                    props.pushToDeliveryList({ 'clientName': clientName, 'from': from, 'to': to, 'date': date})
                    //Temporary
                    
                    //TODO: GoogleMaps validade From and To here, on input or on backend before sending data to database throgh this try catch
                    showToast('DELIVERY_REGISTERED')
                    // clearFormData()
                    setIsLoading(false)
                    props.setIsNavDisabled(false)
                }, 0);
            } catch (error) {
                showToast('DELIVERY_REGISTER_FAILED')
                setIsLoading(false)
                props.setIsNavDisabled(false)
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