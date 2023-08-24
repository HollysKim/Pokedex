import logo from "../assets/github.png";
const Footer = () => {
  return (
    <div className='footer'>
      <a href='https://github.com/HollysKim' target='_blank'>
        <img className='footer-element' src={logo} />
      </a>
    </div>
  );
};

export default Footer;
