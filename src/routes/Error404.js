import Image from "react-bootstrap/esm/Image";
import imgError from "../assets/error404.png";
import TitreH1 from "../components/Titres/TitreH1/TitreH1";

const Error404 = () => {
  return (
    <div className="container">
      <TitreH1>La page demandée n'existe pas</TitreH1>
      <Image src={imgError} alt="page inexistante"/>
    </div>
  );
};


export default Error404;
