import "./App.css"
import Access from "./components/access/Access"
import Bank from "./components/bank/Bank"
import Card from "./components/navbar/card/Card"
import Create from "./components/navbar/hero/Create"
import Hero from "./components/navbar/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Plant from "./components/plant/Plant"
import Power from "./components/power/Power"
import Footer from "./components/footer/Footer"
import LoanCalculator from "./components/Calculator/LoanCalculator"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aster from "./components/aster/Aster"
import LC from "./components/aster/LC/LC"
import Form from "./components/aster/LC/Form"
import Details from "./components/aster/LC/Details"
import Chatbox from "./components/chatbox/chatbox"
import Registeropening from "./components/navbar/openaccount/Registeropening"
import Learnmore from "./components/navbar/openaccount/Learnmore"
import ReForm from "./components/navbar/openaccount/ReForm"


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Create />
            <Card />
            <Access />
            <Plant />
            <Power />
            <Bank />
            <Footer />
          </>} />
          <Route path="/loan-calculator" element={<LoanCalculator />} />
          <Route path="/aster" element={<Aster />}></Route>
          <Route path="/lc" element={<LC />} />
          <Route path="/details" element={<Details />} />
          <Route path="/form" element={<Form />} />
          <Route path="/registeropening" element={<Registeropening />} />
          <Route path="/learnmore" element={<Learnmore />} />
          <Route path="/registerform/:accountType" element={<ReForm />} />
        </Routes>

      </Router>
      <Chatbox />
    </>
  );
};
export default App;
