import { useState } from "react";
import "./SpecsTable.css";
import "./Details.css";
import "./Registration.css";
import axios from "axios";
import Lottie from "lottie-react";
import animation from "./assets/Animation - 1710595640031.json";

function Details() {
  const [tableData, setTableData] = useState([
    { id: 1, spectaclesType: "longSightedness", right: "", left: "" },
    { id: 2, spectaclesType: "shortSightedness", right: "", left: "" },
  ]);

  const handleInputChange = (id, field, value) => {
    setTableData((prevData) =>
      prevData.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const getSpectaclesLabel = (spectaclesType) => {
    switch (spectaclesType) {
      case "longSightedness":
        return "Long Sightedness";
      case "shortSightedness":
        return "Short Sightedness";
      default:
        return "";
    }
  };

  const [values, setValues] = useState({
    Name: "",
    NIC: "",
    ContactNumber: "",
    DateOfBirth: "",
    Address: "",
    Right_eye: "",
    Left_eye: "",
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/patients", values)
      .then((res) => console.log("Registration successful."))
      .catch((err) => console.log(err));
  };
  return (
    <div className="detailsContainer">
      <div className="animation">
        <Lottie animationData={animation} />
      </div>
      <div className="registerInfo">
        <header>
          <h1>Add a new patient</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <label htmlFor="name" className="name">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter patient name"
              id="name"
              required
              name="Name"
              onChange={handleChange}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="nic" className="nic">
              NIC
            </label>
            <input
              type="text"
              placeholder="XXXXXXXXXXXXX"
              id="nic"
              required
              name="NIC"
              onChange={handleChange}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="phoneNumber" className="num">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="0XX XXX XXXX"
              id="phoneNumber"
              size="10"
              maxLength={10}
              required
              name="ContactNumber"
              onChange={handleChange}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="dateOfBirth">Date of Birth </label>
            <input
              type="date"
              id="dateOfBirth"
              name="DateOfBirth"
              onChange={handleChange}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="address">Address </label>
            <input
              type="text"
              placeholder="Enter Address"
              id="address"
              maxLength={100}
              name="Address"
              onChange={handleChange}
            />
          </div>
          <div className="table">
            <h3 className="tableHeading">If the patient wears spectacles</h3>
            <p className="paragraph">Fill the table below</p>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Spectacles</th>
                  <th>Right</th>
                  <th>Left</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{getSpectaclesLabel(row.spectaclesType)}</td>
                    <td onChange={handleChange}>
                      <input
                        type="text"
                        value={row.right}
                        name="Right_eye"
                        onChange={(e) =>
                          handleInputChange(row.id, "right", e.target.value)
                        }
                      />
                    </td>
                    <td onChange={handleChange}>
                      <input
                        type="text"
                        value={row.left}
                        name="Left_eye"
                        onChange={(e) =>
                          handleInputChange(row.id, "left", e.target.value)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="registering">
            <input type="checkbox" name="checkbox" required />
            <label htmlFor="checkbox">
              By Registering you are agreeing to our terms of use and privacy
              policy
            </label>
          </div>
          <div className="registerButton">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Details;
