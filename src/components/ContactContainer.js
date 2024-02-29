import { FaInstagram } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";


const contactArray = [
  {
    contactTitle: 'Resume',
    contactImg: <IoDocumentTextOutline />,
    contactLink: 'https://www.resume.com/',
  },
  {
    contactTitle: 'Email',
    contactImg: <AiOutlineMail />,
    contactLink: 'mailto:gozachisako@gmail.com',
  }
]

const ContactCard = ({ contactTitle, contactImg, contactLink }) => (
  <div className="contactContainerInner">
    <div className="contactContainer-wrap" >
      <a href={contactLink} target="_blank" rel="noopener noreferrer">
        <div className="contactImg" > {contactImg}</div>
      </a>
    </div>
    <a href={contactLink} target="_blank" rel="noopener noreferrer">
    <div className="contactTitle">{contactTitle} </div>
    {/* <span className="arrow"></span> */}
    </a>
  </div>
)

const ContactContainer = () => {
  return <div className="section-wrap contactWrap" >
    <div className="titleWrap">
      <img className="titleSakura" src="../images/sakuraL.png" />
      <h2 className="section-title">Contact</h2>
    </div>
    <div className="contactContainer">
      <div className="contactIcon">
        {contactArray.map((contact, idx) =>
          <ContactCard key={idx}{...contact} />)}
      </div>
    </div>
    <div className="pageTopWrap">
      <a href="#top" className="textTop">Page Top↑</a>
      <img className="treeTop" src="../images/treeTop.png" />
    </div>
  </div>
}


export default ContactContainer