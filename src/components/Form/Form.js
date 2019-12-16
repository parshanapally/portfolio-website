import React from 'react'
import './Form.css'


class ContactForm extends React.Component {
    render() {
        return (
         <form action="POST" data-netlify="true">
            <div className="field" >
                <label>First Name</label>
                <input type="text" name="firstName" required />
            </div>
            <div className="field">
                <label>Last Name</label>
                <input type="text" name="lastName" required />
            </div>
            <div className="field">
                <label>Email Address</label>
                <input type="email" name="email" required />
          </div>
          <div className="field">
             <label>Message</label>
            <textarea type="message" name="message"/>
         </div>
            <button type="submit">Send</button>
         </form>
        )
    }
   
}

export default ContactForm