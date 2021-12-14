import './App.scss';
import CountriesManager from './containers/CountriesManager/CountriesManager';
import {Routes, Route, useParams} from "react-router-dom";
import HomePage from './routes/HomePage';
import CountryDetail from "./containers/CountryDetail/CountryDetail";


function App() {
  return (
    <Routes>
      <Route path='*' element={<NotFound />}/>
      <Route path="/" element={<HomePage />} />
      <Route path="/countries" element={<CountriesManager />} />
      <Route path="/countries/:id" element={<Country/>} />
    </Routes>
  );
}
function Country() {
  let params = useParams();
  return <CountryDetail name={params.id}/>
}

const NotFound = () => {
  return (
    <>Page Not Found !</>
  );
}

export default App;
