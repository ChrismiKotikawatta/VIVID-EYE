import { useEffect, useState } from 'react';
import './details.css';


const detailImg = new URL("/image/medical-records.png", import.meta.url);

function Detail() {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [matchedData, setMatchedData] = useState([]);
  const [noMatch, setNoMatch] = useState(false);

  const handleSearchButtonClick = () => {
    setIsCardVisible(true);
    const matched = data.filter(item => item.NIC === searchValue);
    if (matched.length > 0) {
      setMatchedData(matched);
      setNoMatch(false);
    } else {
      setMatchedData([]);
      setNoMatch(true);
    }
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8081/details')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="scroll">
      <h1 className='vivid'>VIVID EYE</h1>

      <div className="form-container">
        <form className="form">
          <div className='heading'>
            <h1 className="form-title">Patient Details</h1>
            <img className='img1' src={detailImg} alt="patient details" />
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
            <button
              className="btn"
              type="button"
              onClick={handleSearchButtonClick}
            >
              <label className="btn-label" htmlFor="toggle-checkbox">Search</label>
            </button>
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
                    <th>NIC</th>
                    <th>Name</th>
                    <th>D.O.B</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>Patient Details</th>
                  </tr>
                </thead>
                <tbody>
                  {matchedData.map((d, i) => (
                    <tr key={i}>
                      <td>{d.NIC}</td>
                      <td>{d.Name}</td>
                      <td>{d.Date_of_Birth}</td>
                      <td>{d.Address}</td>
                      <td>{d.Contact_No}</td>
                      <td>{d.Condition_Description}</td>
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
