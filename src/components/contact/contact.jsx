import React from 'react';
import '/src/components/contact/contact.css'
import msg from '/src/assets/msg-icon.png'
import mail from '/src/assets/mail-icon.png'
import phoneIcon from '/src/assets/phone-icon.png'
import location from '/src/assets/location-icon.png'
import arrow from '/src/assets/white-arrow.png'
function Contact(){

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8d58c73d-ac39-4d97-af6e-6cbacb04838b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


    return (<>
                <div className="contact">
                    <div className="contact-col">
                        <h3>Send us a message <img src={msg} alt="" /></h3>
                        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university
                             community.</p>

                        <ul>
                            <li><img src={mail} alt="" />dasshibsankar94732@gmail.com</li>
                            <li><img src={phoneIcon} alt="" />+91 7384169731</li>
                            <li> <img src={location} alt="" />Panchet, Panchet garh 721438, west Bengal, India</li>
                        </ul>
                    </div>
                    <div className="contact-col">
                        <form onSubmit={onSubmit} >
                            <label > Your name</label>
                            <input type="text" name='name' placeholder='Enter your name' required />
                            <label > Phone Number</label>
                            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                            {/* <label > Your Email</label>
                            <input type="email" name='email' placeholder='Enter your email id' required /> */}
                            <label >Write your messages here</label>
                            <textarea name="message"  rows={'6'} placeholder='Enter your message' required ></textarea>
                            <button type='submit' className='btn darkbtn'>Submit now <img src={arrow} alt="" /></button>
                        </form>
                        <span>{result}</span>
                    </div>
                </div>
    </>);
}
export default Contact;