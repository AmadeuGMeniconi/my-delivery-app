import { useEffect, useState } from 'react';
import './styles/registerPage.css'

const RegisterPage = () => {

    const [clientName, setClientName] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [date, setDate] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

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

    useEffect(() => {
        setIsFilled(checkIsDeliveryDataComplete());
        console.log(clientName, from, to, date)
    } )

    function handleFormSubmition(isFilled) {
        setIsLoading(true)
        if (isFilled) {
            setTimeout(() => {
                //TODO: Check From and To Adress before sending data to database
                alert('Delivery Registered')
                clearFormData()
                setIsLoading(false)
            }, 1000);
        } else {
            alert('Fields left empty')
            setIsLoading(false)
        }
    }

    return (
        <div className='registerPageContainer'>
            <div className='title'>
                <h1>Welcome</h1>
                <h2>Fill the form bellow to register the delivery</h2>
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
                        type='date' 
                        value={date} 
                        name='date' 
                        required 
                        onChange={(e) => setDate(e.target.value)}
                        disabled={isLoading}
                    />
                </label>

                {
                isLoading ? 
                    <h1>Loading...</h1> 
                    :
                    <input 
                        className='submitButton'
                        type='submit' 
                        value='Register'
                        onClick={() => handleFormSubmition(isFilled)}  
                        disabled={isLoading}
                    />
                }
            </form>
        </div>
    );
}
  
export default RegisterPage;