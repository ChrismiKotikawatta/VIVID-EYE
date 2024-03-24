import Header from './Header.jsx'
import Details from './Details.jsx'
import WelcomePage from './WelcomePage.jsx';
import Questionnaire_green from './Questionnaire_green.jsx';
import PatientDetails from './PatientDetails.jsx';
import MainPatient from './MainPatient.jsx';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Questionnaire_red from './Questionnaire_red.jsx';
import MainQuestionnaire from './MainQuestionnaire.jsx';
import Login from './Login';
import Signup from './Signup';

function App() {
  return(
    <div>
      
      <BrowserRouter>
        <Routes>
          {/* Making the welocome page as home */}
          <Route path="/" element={<WelcomePage/>} />
          {/* Routing to Login page*/}
          <Route path='Login' element={<Login />} />
          {/* Routing to Login page to sign up*/}
          <Route path='Signup' element={<Signup />} />
          {/* Routing through login to other pages */}
          <Route path='Login/MainPatient' element = {<MainPatient/>}/>
          <Route path="Login/MainPatient/Details" element={<Details/>} />
          <Route path="Login/MainPatient/PatientDetails" element={<PatientDetails/>} />
          <Route path="Login/MainPatient/Details/MainQuestionnaire" element={<MainQuestionnaire/>} />
          <Route path="Login/MainPatient/Details/MainQuestionnaire/Questionnaire_green" element={<Questionnaire_green/>} />
          <Route path="Login/MainPatient/Details/MainQuestionnaire/Questionnaire_red" element={<Questionnaire_red/>} />
          <Route path="Login/MainPatient/PatientDetails/MainQuestionnaire" element={<MainQuestionnaire/>} />
          <Route path="Login/MainPatient/PatientDetails/MainQuestionnaire/Questionnaire_red" element={<Questionnaire_red/>} />
          <Route path="Login/MainPatient/PatientDetails/MainQuestionnaire/Questionnaire_green" element={<Questionnaire_green/>} />

          <Route path="Login/MainPatient/PatientDetails/Details" element={<Details/>} />
          <Route path="Login/MainPatient/PatientDetails/Details/MainQuestionnaire" element={<MainQuestionnaire/>} />
          <Route path="Login/MainPatient/PatientDetails/Details/MainQuestionnaire/Questionnaire_red" element={<Questionnaire_red/>} />
          <Route path="Login/MainPatient/PatientDetails/Details/MainQuestionnaire/Questionnaire_green" element={<Questionnaire_green/>} />
        </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App;
