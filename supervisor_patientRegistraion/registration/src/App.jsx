import Header from './Header.jsx'
import Details from './Details.jsx'
import SpecsTable from './SpecsTable.jsx'
import Registration from './Registration.jsx'
import './App.css';
function App() {
  return(
    <div className = 'form'>
      <Header/>
      <Details/>
      <SpecsTable/>
      <Registration/>
    </div>
    
  )
}

export default App;
