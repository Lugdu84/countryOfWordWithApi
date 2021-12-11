import './App.scss';
import CountriesManager from './containers/CountriesManager/CountriesManager';
import {Routes,Route} from "react-router-dom";
import HomePage from './routes/HomePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/countries" element={<CountriesManager />} />
    </Routes>
  );
}

export default App;
