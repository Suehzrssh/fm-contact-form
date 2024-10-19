import { toast } from "react-toastify";
import Notification from "./Notification";
import "./scss/App.scss";
import { useState } from "react";

function App() {
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [chck, setChck] = useState();
  const [rad, setRad] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thanks for completing form, We will be in touch soon!!!')
  }
  
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>contact us</h2>
        <div className="names">
          <div className="left">
            <label htmlFor="fName">first name</label>
            <input required value={fName} type="text" id="fName" name="fName" onChange={(e) => setFname(e.target.value)}/>
            <div className="error">this field is required</div>
          </div>
          <div className="right">
            <label htmlFor="lName">last name</label>
            <input required value={lName} type="text" id="lName" name="lName" onChange={(e) => setLname(e.target.value)}/>
            <div className="error">this field is required</div>
          </div>
        </div>
        <div className="email">
          <label htmlFor="email">email address</label>
          <input required value={email} type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
          <div className="error">this field is required</div>
        </div>
        <div className="types">
          <div className="item">
            <input required id="gen" type="radio" value='gen' name="radd" onClick={(e) => setRad('gen')}/>
            <label htmlFor="gen">general enquiry</label>
          </div>
          <div className="item">
            <input required id="ser" type="radio" value='ser' name="radd" onClick={(e) => setRad('ser')}/>
            <label htmlFor="ser">support request</label>
          </div>
          <div className="error">chose one of these options</div>
        </div>
        <div className="msg">
          <label htmlFor="msg">message</label>
          <textarea required value={msg} className="mssg" id="msg" name="msg" onChange={(e) => setMsg(e.target.value)}/>
          <div className="error">message is required</div>
        </div>
        <div className="sign">
          <input required id="sign" name="sign" value='sign' type="checkbox" onChange={(e) => setChck(e.target.checked)}/>
          <label htmlFor="sign">I consent to being contacted by the team</label>
          <div className="error">to consent to being contacted by the team</div>
        </div>
        <button type="submit">submit</button>
      </form>
      <Notification />
    </div>
  );
}

export default App;
