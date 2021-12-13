import TitreH1 from "../components/Titres/TitreH1/TitreH1";
import {NavLink} from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <TitreH1>API listant tous les pays du monde ...</TitreH1>
      <NavLink to="/countries" className="nav-link btn btn-info w-25">
        Continuer ...
      </NavLink>
    </div>
  );
};

export default HomePage;
