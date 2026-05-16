import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Portfolio</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg) => (
            <a
              key={socialImg.name}
              href={socialImg.url}
              target="_blank"
              rel="noreferrer"
              className="icon"
              aria-label={socialImg.name}
            >
              <img src={socialImg.imgPath} alt="" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            Copyright {new Date().getFullYear()} Nguyen Anh Khoi. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
