import './Details.css';

function Details() {
    return (
        <form>
            <div className="inputBox">
                <label htmlFor="name" className='name'>Name :</label>
                <input type="text" placeholder="Enter patient name" id="name" required />
            </div>
            <div className="inputBox">
                <label htmlFor="nic" className='nic'>NIC :</label>
                <input type="text" placeholder="XXXXXXXXXXXXX" id="nic" required />
            </div>
            <div className="inputBox">
                <label htmlFor="phoneNumber" className='num'>Contact Number :</label>
                <input type="tel" placeholder="0XX XXX XXXX" id="phoneNumber" size="10" maxLength={10} required />
            </div>
            <div className="inputBox">
                <label htmlFor="dateOfBirth">Date of Birth :</label>
                <input type="date" id="dateOfBirth" />
            </div>
            <div className="inputBox">
                <label htmlFor="address">Address :</label>
                <input type="text" placeholder="Enter Address" id="address" maxLength={100} />
            </div>
        </form>
    );
}

export default Details;
