import { FaInstagram } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";


const contactArray = [
  {
    contactTitle: 'Resume',
    contactImg: <IoDocumentTextOutline />,
  },
  {
    contactTitle: 'Email',
    contactImg: <AiOutlineMail />,
  },
  {
    contactTitle: 'Instagram',
    contactImg: <FaInstagram />,
  }
]

const ContactCard = ({ contactTitle, contactImg }) => (
  <div className="contactContainer-wrap" >
    <div className="contactImg" > {contactImg}</div>
    <h3 className="contactTitle" > {contactTitle} </h3>
  </div>
)

const ContactContainer = () => {
  return <div className="section-wrap">

    <h2 className="section-title">Contact</h2>
    <div className="contactContainer">

      {contactArray.map((contact, idx) =>
        <ContactCard key={idx}{...contact} />)}
    </div>
  </div>
}


export default ContactContainer