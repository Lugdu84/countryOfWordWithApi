import './App.scss';
import CountriesManager from './containers/CountriesManager/CountriesManager';
import {Routes, Route, useParams} from "react-router-dom";
import HomePage from './routes/HomePage';
import Error404 from './routes/Error404';
import CountryDetail from "./containers/CountryDetail/CountryDetail";


function App() {
  return (
    <Routes>
      <Route path='*' element={<Error404 />}/>
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



export default App;
