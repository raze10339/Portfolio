
import axios from 'axios';
import { useState } from 'react';

const accessKey = '9284ed9d-db15-439d-bb83-177a206c92f1';
const url = 'https://api.web3forms.com/submit';
const initialState = {
    access_key: accessKey,
    subject: 'New Submission from Portfolio contact form',
    full_name: '',
    email: '',
    message: ''
}

function ContactForm() {

    const [formData, setFormData] = useState(initialState);
    const [alertMessage, setAlertMessage] = useState(' ');
    const [errorMessage, setErrorMessage] = useState(' ');

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateEmail(formData.email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        setErrorMessage('');

        console.log(formData);
        try {

            await axios.post(url, formData);
            setAlertMessage('YOUR MESSAGE HAS BEEN RECIEVED!');
           
            setTimeout(() => {
                setAlertMessage('');
            }, 4500);


        } catch (error) {
            setErrorMessage('Something went wrong. Please try again later.');
        }
        setFormData({ ...initialState });
    }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if ((event.target as HTMLInputElement | HTMLTextAreaElement).name === 'email') {
            const is_valid = validateEmail((event.target as HTMLInputElement | HTMLTextAreaElement).value)
            if (!is_valid){
                setAlertMessage('Please type a valid email');
                return;
            }
        }
        setFormData({
            ...formData,
            [(event.target as HTMLInputElement | HTMLTextAreaElement).name]: (event.target as HTMLInputElement | HTMLTextAreaElement).value
        });

    };


    return (
        <form onSubmit={handleSubmit} id="contact">

            <h3 className="text-center">Contact Me</h3>

            {alertMessage && <p className="message text-center">{alertMessage}</p>}
            {errorMessage && <p style={{ color: 'red', textAlign: 'center' }} className="message text-center">{errorMessage}</p>}


            <input type="hidden" name="access_key" value={accessKey} />
            <input type="hidden" name="subject" value="New Submission from Portfolio contact form" />

            <input onChange={handleInputChange} value={formData.full_name} name="full_name" type="text" placeholder="Enter your full name" required />
            <input onChange={handleInputChange} value={formData.email} name="email" type="email" placeholder="Enter your email address" required />
            <textarea onChange={handleInputChange} value={formData.message} name="message" placeholder="Tell me something" required></textarea>
           
            <button type="submit">send</button>


        </form>

    )

}

export default ContactForm;


console.log(window.location);



// fetch(url, {
//     method: 'POST',
//     headers: {
//         'CONTENT-Type': 'application/json'
//     }
// })