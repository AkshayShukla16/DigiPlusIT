
import React, {useState} from 'react';

function BasicForm(){
    const [UserErr, setUserErr] = useState(false);
    const [NodeName, setNodeName] = useState("");

    function FormHandle(e){
       e.preventDefault();
      console.log("Form Updated");
      setUserErr(true);
    }
   

    function GetValue(e){
    let result1= e.target.value;
    setNodeName(result1);
    console.log(result1);
    
    }

    return(
        <>
            <h1>DigiPlus IT</h1>
            <br />
            {
                UserErr?
                <div>
                    <span>Selected Node </span>
                    <input type='text' placeholder={NodeName}></input>
                    <button>Update</button> <button>Update</button>
                </div>
                :null
            }
            <br />
            <form onSubmit={FormHandle}>

            <span>Node type </span>
            <select onChange={GetValue}>
            <option>Select One</option>
            <option>Main Node</option>
            <option>Parent Node</option>
            <option>Child Node</option>
        </select>
        <br />
        <br />
        <span>Node Value </span>
        <input type='text' placeholder='Write Node Value'/>
        <br />
        <br />
                
            <button type='submit' >Add Node</button>
            </form>
        </>
    )
}

export default BasicForm;