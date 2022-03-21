import { useFormik } from 'formik';
import React from 'react'
import { useState } from 'react';
import NewComponent from './CenteredComponentHOC';
function Signup() {

    const [firstname, setFirstname] = useState({})
    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: ''
        },
        onSubmit: values => {
            // setFirstname(values.fname)

        },
        validate: values => {
            const errors = {}
            if (!values.fname)
                errors.fname = 'First name is required'

            if (!values.lname)
                errors.lname = 'Last name is required'

            if (!values.email)
                errors.email = 'Email is required'
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                errors.email = 'Invalid Email'

            return errors
        },
    })

    console.log(formik.touched)


    return (<>
        {JSON.stringify(formik.touched)}

        <h1>Register-</h1>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type={'text'} name='fname' value={formik.values.fname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.fname && formik.errors.fname && <span style={{ color: 'red' }}>{formik.errors.fname}</span>}
            </div>
            <div>
                <label>Last Name:</label>
                <input type={'text'} name='lname' value={formik.values.lname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.lname && formik.errors.lname && <span style={{ color: 'red' }}>{formik.errors.lname}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type={'email'} name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email && <span style={{ color: 'red' }}>{formik.errors.email}</span>}
            </div>
            <button type='submit'>Submit</button>
        </form>

    </>)

}

// class Signup extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { firstname: '', lastname: '', isHuman: false, gender: '', comment: '', country: [] }
//         this.handleChange = this.handleChange.bind(this)
//     }
//     handleChange(e) {
//         debugger;
//         let { name, value, type, checked } = e.target

//         value = type === 'checkbox' ? checked : value
//         if (type == 'select-multiple') {
//             let countries = Array.from(e.target.selectedOptions, option => option.value)
//             this.setState({ country: [...countries] })
//         } else
//             this.setState({ [name]: value })

//         // switch (name) {
//         //     case 'firstname': {
//         //         return this.setState({ firstname: value })
//         //     }
//         //     case 'lastname': {
//         //         return this.setState({ lastname: value })
//         //     }
//         // }

//     }

//     render() {
//         return (<>
//             <h1>Register</h1>
//             <form>
//                 <label>First Name: {this.state.firstname}</label>
//                 <input type='text' name='firstname'
//                     placeholder='Enter your first name'
//                     onChange={this.handleChange}
//                     value={this.state.firstname} />
//                 <br />
//                 <label>Last Name: {this.state.lastname}</label>
//                 <input type='text' name='lastname'
//                     placeholder='Enter your last name'
//                     onChange={this.handleChange}
//                     value={this.state.lastname} />
//                 <br />

//                 <label>Are you a Human?: {this.state.isHuman ? 'TRUE' : 'FALSE'}</label>
//                 <input type='checkbox' name='isHuman'
//                     onChange={this.handleChange}
//                     checked={this.state.isHuman} />
//                 <br />
//                 <h5>Gender: {this.state.gender}</h5>
//                 <label> <input type='radio' name='gender' value='female' onChange={this.handleChange} checked={this.state.gender === 'female'} /> Female</label>
//                 <label> <input type='radio' name='gender' value='male' onChange={this.handleChange} checked={this.state.gender === 'male'} /> Male</label>
//                 <br />
//                 <label>Comment: {this.state.comment}</label>
//                 <textarea rows={5} onChange={this.handleChange} name='comment'>{this.state.comment}</textarea>
//                 <br />
//                 <label>Country: {this.state.country}</label>
//                 <select multiple name='country' onChange={this.handleChange}>
//                     <option value='Pakistan'>Pakistan</option>
//                     <option value='Canada'>Canada</option>
//                     <option value='Germany'>Germany</option>
//                     <option value='Belgium'>Belgium</option>
//                     <option value='Australia'>Australia</option>
//                 </select>

//             </form>
//         </>)
//     }
// }
export default NewComponent(Signup);