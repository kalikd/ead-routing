import React from 'react'
class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { firstname: '', lastname: '', isHuman: false, gender: '', comment: '', country: [] }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        debugger;
        let { name, value, type, checked } = e.target

        value = type === 'checkbox' ? checked : value
        if (type == 'select-multiple') {
            let countries = Array.from(e.target.selectedOptions, option => option.value)
            this.setState({ country: [...countries] })
        } else
            this.setState({ [name]: value })

        // switch (name) {
        //     case 'firstname': {
        //         return this.setState({ firstname: value })
        //     }
        //     case 'lastname': {
        //         return this.setState({ lastname: value })
        //     }
        // }

    }

    render() {
        return (<>
            <h1>Register</h1>
            <form>
                <label>First Name: {this.state.firstname}</label>
                <input type='text' name='firstname'
                    placeholder='Enter your first name'
                    onChange={this.handleChange}
                    value={this.state.firstname} />
                <br />
                <label>Last Name: {this.state.lastname}</label>
                <input type='text' name='lastname'
                    placeholder='Enter your last name'
                    onChange={this.handleChange}
                    value={this.state.lastname} />
                <br />

                <label>Are you a Human?: {this.state.isHuman ? 'TRUE' : 'FALSE'}</label>
                <input type='checkbox' name='isHuman'
                    onChange={this.handleChange}
                    checked={this.state.isHuman} />
                <br />
                <h5>Gender: {this.state.gender}</h5>
                <label> <input type='radio' name='gender' value='female' onChange={this.handleChange} checked={this.state.gender === 'female'} /> Female</label>
                <label> <input type='radio' name='gender' value='male' onChange={this.handleChange} checked={this.state.gender === 'male'} /> Male</label>
                <br />
                <label>Comment: {this.state.comment}</label>
                <textarea rows={5} onChange={this.handleChange} name='comment'>{this.state.comment}</textarea>
                <br />
                <label>Country: {this.state.country}</label>
                <select multiple name='country' onChange={this.handleChange}>
                    <option value='Pakistan'>Pakistan</option>
                    <option value='Canada'>Canada</option>
                    <option value='Germany'>Germany</option>
                    <option value='Belgium'>Belgium</option>
                    <option value='Australia'>Australia</option>
                </select>

            </form>
        </>)
    }
}
export default Signup;