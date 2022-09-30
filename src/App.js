import { dataFetch } from './Components/dataFetch';
import './App.css';

function App() {

    //get all data from the form, generate data object, check all validation and invoke fetch function
    const sendForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        //create data object
        const data = {
            name: formData.get('name'),
            age: formData.get('age'),
            gender: formData.get('gender'),
            username: formData.get('username'),
            password: formData.get('password'),
            repass: formData.get('repass'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            about: formData.get('about'),
        }

        //check empty fields
        if (data.name == "" || data.age == "" || data.gender == "" || data.username == "" || data.password == "" || data.email == "" || data.phone == "" || data.about == "") {
            alert('All fields are required!');
            return;
        }

        //checks that the phone number contains only digits and is of the required length
        if (typeof (data.phone) != Number && data.phone.length < 6) {
            alert('Phone must be valid number!');
            return;
        }

        //check that password and repeat password match
        if (data.password !== data.repass) {
            alert('Password and Repeat password not match!');
            return;
        }

        //invoke fetch function with generated data
        dataFetch(data);
    }

    return (
        <div className="app">
            <h1>Contact Form</h1>
            <h3>This is contact form. We want to know more about you. Please fill gently all fields, then register and enjoy our website :)</h3>

            <form className="form" onSubmit={sendForm}>
                <div className='field1'>
                    
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" id="name" name="name" required /><br />
                    
                    <label htmlFor="age">Age:</label><br />
                    <input type="number" id="age" name="age" /><br />

                    <label htmlFor="gender">Gender:</label><br />
                    <input type="radio" value="Male" name="gender" />Male
                    <input type="radio" value="Female" name="gender" />Female <br />

                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" required /><br />

                    <label htmlFor="phone">Phone:</label><br />
                    <input type="tel" id="phone" name="phone" required /><br />

                    <label htmlFor="about">Something about you</label><br />
                    <textarea type="textarea" id="about" name="about" /><br />
                </div>
                <div className='field2'>
                    <label htmlFor="username">Username:</label><br />
                    <input type="text" id="username" name="username" required /><br />

                    <label htmlFor="password">Password:</label><br />
                    <input type="password" id="password" name="password" required /><br />

                    <label htmlFor="repass">Repeat password:</label><br />
                    <input type="password" id="repass" name="repass" required /><br />

                    <input className="submit" type="submit" value="Send form!" />
                </div>
            </form>
        </div>
    );
}

export default App;
