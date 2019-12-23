import React from 'react'
import './Form.css'



const ContactForm = () => {
  
        return (
         <form method="POST"  name="contactform" data-netlify="true" enctype="application/x-www-form-urlencoded" >
            <input type="hidden" name="form-name" value="contact" />
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
                <input type="email" name="portfolioemail" id="email"   />
          </div>
          <div className="field">
             <label>Message</label>
            <textarea type="message" name="portfoliomessage" id="message"/>
         </div>
            <button type="submit">Send</button>
         </form>
        )
    }
   


export default ContactForm