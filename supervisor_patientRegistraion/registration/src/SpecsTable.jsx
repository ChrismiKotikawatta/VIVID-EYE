import './SpecsTable.css';
import React, { useState } from 'react';

const SpecsTable = () => {
  const [tableData, setTableData] = useState([
    { id: 1, spectaclesType: 'longSightedness', right: '', left: '' },
    { id: 2, spectaclesType: 'shortSightedness', right: '', left: '' },
  ]);

  const handleInputChange = (id, field, value) => {
    setTableData((prevData) =>
      prevData.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const getSpectaclesLabel = (spectaclesType) => {
    switch (spectaclesType) {
      case 'longSightedness':
        return 'Long Sightedness';
      case 'shortSightedness':
        return 'Short Sightedness';
      default:
        return '';
    }
  };

  return (
    <div className="table">
      <h3 className="tableHeading">If the patient wears spectacles</h3>
      <p className="paragraph">Fill the below table</p>
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
              <td>
                <input
                  type="text"
                  value={row.right}
                  onChange={(e) => handleInputChange(row.id, 'right', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.left}
                  onChange={(e) => handleInputChange(row.id, 'left', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecsTable;