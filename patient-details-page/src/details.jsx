import { useState } from 'react';
import './details.css';

const detailImg = new URL("/image/medical-records.png",import.meta.url)
function Detail() {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleSearchButtonClick = () => {
    setIsCardVisible(true);
  };

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
      {isCardVisible && <div className="card"></div>}

    </div>
  );
}

export default Detail;
