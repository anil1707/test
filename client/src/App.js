
import {  useState } from "react";

function App() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const handleClick = async() =>{
    const response = await fetch("https://test-server-iejg.onrender.com/sign-up",{
      method:"post",
      body:JSON.stringify({email, password, confirmPassword}),
      headers:{
        "Content-Type":"application/json"
      }
    })

    const result = await response.json();
    console.log(result);
  }
  return (
    <div
      style={{
        width: "90vw",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "30vw",
          height: "40vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid gray",
          borderRadius: "8px",
        }}
      >
        <h3>Sign Up Form</h3>
        <div>
          <p>Email</p>
          <input type="text" style={{ padding: "5px", width: "15vw" }}  onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <p>Password</p>
          <input type="text" style={{ padding: "5px", width: "15vw" }} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div>
          <p>Confirm Password</p>
          <input type="text" style={{padding:"5px", width:"15vw"}} onChange={(e)=>setConfirmPassword(e.target.value)}/>
        </div>
        <button style={{ padding: "10px", marginTop: "10px", width:"15vw" }} onClick={handleClick}>Sign up</button>
      </div>
    </div>
  );
}

export default App;
