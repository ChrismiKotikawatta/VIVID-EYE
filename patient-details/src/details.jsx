import  { useEffect, useState } from 'react';
import './details.css';

const detailImg = new URL("/image/medical-records.png", import.meta.url);

function Detail() {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [matchedData, setMatchedData] = useState([]);
  const [noMatch, setNoMatch] = useState(false);

  // const handleSearchButtonClick = () => {
  //   setIsCardVisible(true);
  //   const matched = data.filter(item => item.NIC === searchValue);
  //   console.log(matched)
  //   if (matched.length > 0) {
  //     setMatchedData(matched);
  //     setNoMatch(false);
  //   } else {
  //     setMatchedData([]);
  //     setNoMatch(true);
  //   }
  // };
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

  return (
    <div className="scroll">
      <h1>VIVID EYE</h1>

      <div className="form-container">
        <form className="form">
          <div className='pngline'>
            <p className="form-title">Patient Details</p>
            <img className='img1' src={detailImg} alt="patient details" />
          </div>

          <p className="form-sub-title">
            Search to see patient records here
          </p>
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
        <br /><br />
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