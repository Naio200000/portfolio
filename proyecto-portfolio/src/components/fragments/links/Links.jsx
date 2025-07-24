import { Link } from "react-router-dom";
import P from "../../labels/P";

const Links = ({ className = '', onLinkClick}) => {
  return (
    <div className={`${className}`}>
      <Link className="py-2" to={'/'} onClick={onLinkClick}>
        <P className="hover:bg-gray-800" >Home</P>
      </Link>
      <Link className="py-2" to={'/about'} onClick={onLinkClick}>
        <P className="hover:bg-gray-800" >About Me</P>
      </Link>
      <Link className="py-2" to={'/portfolio'} onClick={onLinkClick}>
        <P className="hover:bg-gray-800" >Portfolio</P>
      </Link>
      {/* <Link className="py-2" to={'/blog'} onClick={onLinkClick}>
        <P className="hover:bg-gray-800" >Blog</P>
      </Link>
      <Link className="py-2" to={'/contacts'} onClick={onLinkClick}>
        <P className="hover:bg-gray-800" >Contacts</P>
      </Link> */}
    </div>
  );
};

export default Links;
