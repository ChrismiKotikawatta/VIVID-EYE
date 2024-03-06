import './Registration.css';
function Registration(){
    return(
        <form>
            <div  className="registering">
                <input type="checkbox" name="checkbox"/>
                <label htmlFor="checkbox">By Registering you are agreeing to our terms of use and privacy policy</label>
            </div>
            <div className="registerButton">
                <input type="submit" value="Register"/>
            </div>
        </form>
    );
}
export default Registration;