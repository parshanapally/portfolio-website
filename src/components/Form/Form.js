import React from 'react'
import './Form.css'


class ContactForm extends React.Component {
    render() {
        return (
         <form method="POST"  name="contact" data-netlify="true" enctype="application/x-www-form-urlencoded">
            <div className="field" >
                <label>First Name</label>
                <input type="text" name="firstName" id="firstName" required />
            </div>
            <div className="field">
                <label>Last Name</label>
                <input type="text" name="lastName" id="lastName"  required />
            </div>
            <div className="field">
                <label>Email Address</label>
                <input type="email" name="email" id="email"   />
          </div>
          <div className="field">
             <label>Message</label>
            <textarea type="message" name="message" id="message"/>
         </div>
            <button type="submit">Send</button>
         </form>
        )
    }
   
}

export default ContactForm