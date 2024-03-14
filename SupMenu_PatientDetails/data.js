import React,{useState, useEffect} from 'react';
import '../App.css'; // Importing CSS file

const Data = () => {
  const [item, setItem] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);




  useEffect(()=>{
    fetch("http://127.0.0.1/VividEye/api/api.php")
    .then(res => res.json())
    .then(
      (result) =>{
        setItem(result);
      }
    )
  },[]);

  // Function to handle search logic
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = item.filter(data => {
      return (
        data.NIC_number.toLowerCase().includes(query) ||
        data.Email.toLowerCase().includes(query) ||
        data.Name.toLowerCase().includes(query)
      );
    });
    setFilteredItems(filtered);
  };


  return (
    <div className='row'> 
     <div className='d_flex my-4 text-uppercase'>
      <p>Patient Detail List </p>
     </div>
     <div className='search-bar my-4 '>
     <input 
          type='text' 
          placeholder='Search by Name, Email, or NIC number' 
          value={searchQuery} 
          onChange={handleSearch} 
          className='form-control' // Added form-control class for Bootstrap styling
        />

     </div>
     <table className='table table-bordered '>
      <thead className='thead-dark'>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact number</th>
          <th>NIC number</th>
        </tr>

      </thead>
      <tbody>
        {
          filteredItems.map(item =>(
            <tr key= {item.id}>
              <td>{item.ID}</td>
              <td>{item.Name}</td>
              <td>{item.Email}</td>
              <td>{item.Contact_number}</td>
              <td>{item.NIC_number}</td>

            </tr>
          ))
        }
      </tbody>

     </table>
    </div>
  );
}

export default Data;