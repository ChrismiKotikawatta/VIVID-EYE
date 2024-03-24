import { useEffect, useState } from 'react';
import './PatientDetails.css';
import { useNavigate } from "react-router-dom";

function Detail() {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [matchedData, setMatchedData] = useState([]);
  const [noMatch, setNoMatch] = useState(false);

  const handleSearchButtonClick = () => {
    setIsCardVisible(true);
    // Convert searchValue to a number
    const searchNIC = parseInt(searchValue);
  
    // Filter the data based on the NIC
    const matched = data.filter(item => item.NIC === searchNIC);
    console.log(matched);
  
    // Update state based on search results
    if (matched.length > 0) {
      setMatchedData(matched);
      setNoMatch(false);
    } else {
      setMatchedData([]);
      setNoMatch(true);
    }
  };

  const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:8081/details')
  //     .then(res => res.json())
  //     .then(data => setData(data))
  //     .catch(err => console.log(err));
  // }, []);
  useEffect(() => {
    fetch('http://localhost:8081/details')
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log('Fetched data:', data); // Logging fetched data
      })
      .catch(err => console.log(err));
  }, []);

  const navigate = useNavigate();
  return (
    <div className="scroll">

      {/* <h1 className='vivid'>VIVID EYE</h1> */}

      <div className="form-container">
        <form className="form">
          <div className='heading'>
            <h1 className="form-title">PATIENT DETAILS</h1>
            <img className='img1' src={'./images/medical-records.png'} alt="patient details" />
          </div>

          <h2 className="form-sub-title">
            Search to see patient records here
          </h2>

          <div className="login-card">
            <div className="field-container">
              <input
                placeholder=""
                className="input"
                type='text'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <span className="placeholder">Enter NIC number</span>
            </div>
            <div className='goto'>

            {noMatch && (
                <button
                  className="btn1"
                  type="button"
                  onClick={() => navigate('Details')}
                >
                  <label className="btn-label" htmlFor="toggle-checkbox">Register</label>
                </button>
              )}

            {!noMatch && isCardVisible && (
              <button
                className="btn3"
                type="button"
                onClick={() => navigate('MainQuestionnaire')}
              >
                <label className="btn-label" htmlFor="toggle-checkbox">Start Test</label>
              </button>
            )}

              <button
                className="btn2"
                type="button"
                onClick={handleSearchButtonClick}
              >
                <label className="btn-label" htmlFor="toggle-checkbox">Search</label>
              </button>

              <button
                className="btn4"
                type="button"
                onClick={() => navigate('/')}
              >
                <label className="btn-label" htmlFor="toggle-checkbox">Return Home</label>
              </button>

            </div>
          </div>
        </form>

        {/* <br /><br /> */}
      </div>
      <br />
      {isCardVisible && (
        <div className="card">
          {noMatch ? (
            <div className='messege'><p>No Matching Found</p></div>

          ) : (
            <div className='table'>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>NIC</th>
                    <th>Contact Number</th>
                    <th>Date of Birth</th>
                    <th>Address</th>
                    <th>Right Eye</th>
                    <th>Left Eye</th>
                  </tr>
                </thead>
                <tbody>
                  {matchedData.map((d, i) => (
                    <tr key={i}>
                    <td>{d.Name}</td>
                    <td>{d.NIC}</td>
                    <td>{d.ContactNumber}</td>
                    <td>{d.DateOfBirth}</td>
                    <td>{d.Address}</td>
                    <td>{d.Right_eye}</td>
                    <td>{d.Left_eye}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Detail;
