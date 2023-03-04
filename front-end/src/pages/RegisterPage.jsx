import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Google APIs
import Autocomplete from "react-google-autocomplete";

//App components
import Throbber from '../components/Throbber';

//Styles
import './styles/registerPage.css';

const RegisterPage = ({setIsNavDisabled, pushToDeliveryList}) => {

    const [clientName, setClientName] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
        setIsFilled(checkIsDeliveryDataComplete());
    }, [clientName, origin, destination, date] );

    function clearFormData() {
        setClientName('');
        setDate('');
        setOrigin('');
        setDestination('');
    };

    function checkIsDeliveryDataComplete () {
        if (clientName && origin && destination && date !== '') {
            return true;
        } else {
            return false;
        };
    };

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
                break;
            case 'EMPTY_FIELDS':
                toast.warning('Check for empty or incorrect fields.', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
                break;
            default:
                break;
        };
    };

    function formSubmition(isFilled) {
        if (isFilled) {
            setIsLoading(true)
            setIsNavDisabled(true)
            try {
                setTimeout(() => {
                //Temporary...
                    pushToDeliveryList({
                        'clientName': clientName, 
                        'origin': origin, 
                        'destination': destination, 
                        'date': date
                    });
                //...Temporary
                    showToast('DELIVERY_REGISTERED');
                    clearFormData();
                    setIsLoading(false);
                    setIsNavDisabled(false);
                }, 1000);
            } catch (error) {
                showToast('DELIVERY_REGISTER_FAILED');
                setIsLoading(false);
                setIsNavDisabled(false);
            }
        } else {
            showToast('EMPTY_FIELDS');
        };
    };

    return (
        <div className='registerPageContainer'>
            <div className='title'>
                <h1>Welcome</h1>
                <p>Fill the form bellow to register the delivery</p>
            </div>
            {isLoading ? 
                <Throbber/> 
                :
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
                        Origin:
                        <Autocomplete
                            apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                            onPlaceSelected={(place) => {
                                setOrigin(place)
                            }}
                            options={{
                                types: [],
                                componentRestrictions: { country: "br" },
                            }}
                            defaultValue={''}
                            placeholder='Type in address'
                        />
                    </label>
                    <label>
                        Destination:
                        <Autocomplete
                            apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                            onPlaceSelected={(place) => {
                                setDestination(place);
                            }}
                            options={{
                                types: [],
                                componentRestrictions: { country: "br" },
                            }}
                            defaultValue={''}
                            placeholder='Type in address'
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
                    <input 
                        className='submitButton'
                        type='submit' 
                        value='Register'
                        onClick={(e) => {
                            e.preventDefault()
                            formSubmition(isFilled)
                        }}
                        disabled={isLoading}
                    />
                </form>
            }
        </div>
    );
};
  
export default RegisterPage;