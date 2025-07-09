import "../assets/css/Contact.css";
import {FaWhatsapp ,FaInstagram} from "react-icons/fa";
 const Contact = () => {
  return (
    <div className="contact">
     CONTACT ME<br/>
     <a className="wa">
        <FaWhatsapp fontSize={"150px"}/> 
        <p className="wa1">085789195571</p> 
     </a><br/>
     <a className="wa" style={{top:"-100px"}}>
       <FaInstagram fontSize={"150px"}/>
       <p className="wa1" >@senjaaprilla</p>
     </a>
       
    </div>
  );
};
export default Contact;
