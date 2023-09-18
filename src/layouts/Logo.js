import { ReactComponent as LogoDark } from "../assets/images/logos/materialpro.svg";
import { Link } from "react-router-dom";
import mapleLogo from "../assets/images/golden.png"

const Logo = () => {
  return (
    <Link to="/">
      <LogoDark />
    </Link>
  );
};

export default Logo;
