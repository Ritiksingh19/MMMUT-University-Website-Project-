import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dcfb5f7d-e447-465e-a7b2-111bff5e3529");

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



  return (
    <div className='contact'>
            <div className="contact-col">
                <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
                <p>Reach out to us for inquiries, support, or collaboration.
                     We're here to assist you with any questions about admissions, courses, or campus life. 
                     Connect with us today.</p>
                     <ul>
                        <li><img src={mail_icon} alt="" />Contact@mmmut.ac.in</li>
                        <li><img src={phone_icon} alt="" />+91-890909890</li>
                        <li><img src={location_icon} alt="" />Madan Mohan Malaviya University of Technology, Gorakhpur Road,
                           <br /> Gorakhpur, Uttar Pradesh, India - 273010.</li>
                     </ul>

            </div>
            <div className="contact-col">
              <form onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label htmlFor="">Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
              </form>
              <span>{result}</span>
            </div>
    </div>
  )
}

export default Contact