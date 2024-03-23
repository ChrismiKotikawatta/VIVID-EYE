import Header from './Header.jsx'
import Details from './Details.jsx'
import WelcomePage from './WelcomePage.jsx';
import Questionnaire_green from './Questionnaire_green.jsx';
import PatientDetails from './PatientDetails.jsx';
import MainPatient from './MainPatient.jsx';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Questionnaire_red from './Questionnaire_red.jsx';
import MainQuestionnaire from './MainQuestionnaire.jsx';

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="MainPatient" element={<MainPatient/>} />
          <Route path="MainPatient/PatientDetails" element={<PatientDetails/>} />
          <Route path="MainPatient/Details" element={<Details/>} />
          <Route path="MainPatient/PatientDetails/Details" element={<Details/>} />
          <Route path="MainPatient/PatientDetails/Details/MainQuestionnaire" element={<MainQuestionnaire/>} />
          <Route path="MainPatient/PatientDetails/Details/MainQuestionnaire/Questionnaire_red" element={<Questionnaire_red/>} />
          <Route path="MainPatient/PatientDetails/Details/MainQuestionnaire/Questionnaire_green" element={<Questionnaire_green/>} />
          <Route path="MainPatient/Details/MainQuestionnaire" element={<MainQuestionnaire/>} />
          <Route path="MainPatient/Details/MainQuestionnaire/Questionnaire_red" element={<Questionnaire_red/>}/>
          <Route path="MainPatient/Details/MainQuestionnaire/Questionnaire_green" element={<Questionnaire_green/>}/>
          <Route path="PatientDetails/Details/MainQuestionnaire/" element={<MainQuestionnaire/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
