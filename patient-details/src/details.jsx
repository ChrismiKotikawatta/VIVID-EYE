import {useEffect, useState } from 'react';
import './details.css';

const detailImg = new URL("/image/medical-records.png",import.meta.url)
function Detail() {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleSearchButtonClick = () => {
    setIsCardVisible(true);
  };

  const[data,setData] = useState([])
  useEffect(()=> {
    fetch('http://localhost:8081/details ')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  },[])

  return (
    <div className="scroll">
      <h1>VIVID EYE</h1>

      <div className="form-container">
        <form className="form">
          <div className='pngline'><p className="form-title">Patient Details</p>
          <img className='img1' src={detailImg} alt="patient details" />
          </div>
          
          <p className="form-sub-title">
            Search to see patient records here
          </p>
          <div className="login-card">
            <div className="field-container">
              <input placeholder="" className="input" type='text' />
              <span className="placeholder">Enter NIC number</span>
            </div>
            <button className="btn" type="button" onClick={handleSearchButtonClick}>
              <label className="btn-label" htmlFor="toggle-checkbox">Search</label>
            </button>
          </div>
        </form>
        <br /><br />
      </div>
      <br />
      {isCardVisible && <div className="card">
        <div className='table'>
        <table><thead>
        <th>NIC</th>
          <th>Name</th>
          <th>D.O.B</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Patient Details</th>
        </thead>
        <tbody>
          {data.map((d,i)=>(
            <tr key={i}>
              <td>{d.NIC}</td>
              <td>{d.Name}</td>
              <td>{d.DateOfBirth}</td>
              <td>{d.Address}</td>
              <td>{d.ContactNo}</td>
              <td>{d.conditionDescription}</td>
            </tr>

          ))}
        </tbody>
          

        </table></div>
        
        </div>}

    </div>
  );
}

export default Detail;
