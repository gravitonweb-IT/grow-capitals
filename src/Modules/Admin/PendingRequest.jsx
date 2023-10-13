import React, { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import { servieUrl } from "../../env/env";



const PendingRequest = () => {
  const [pendingRequest,setPendingRequest]=useState([])
const [conditiion,seteCondition]=useState(true)
  const updateValue =(value)=>{
    debugger
    
    seteCondition(!conditiion)
    var formdata = new FormData();
    formdata.append("userEmail", value);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(servieUrl.url+"rolebased/pendingRequest/", requestOptions)
      .then(response => response.json())
      .then(result => {
        debugger
       
      })
      .catch(error => console.log('error', error));
      alert("successfully updated ")
  }
useEffect(()=>{
    var formdata = new FormData();
formdata.append("userEmail", "anujweb123@gmail.com");

var requestOptions = {
  method: 'GET',
 
  redirect: 'follow'
};

fetch(servieUrl.url+"rolebased/pendingRequest/", requestOptions)
  .then(response => response.json())
  .then(result => {
    setPendingRequest(result)
  })
  .catch(error => console.log('error', error));
},[conditiion])

  return (
    
 <><div>
 {
    pendingRequest.map(result=><>
    <table>
    <td>
        <tr>{result?.fields?.email} </tr>
        <button onClick={()=>updateValue(result.fields.email)}>Accepted</button>
    </td>
    </table>
    </>)
 }
 </div>
 </>
  );
};

export default PendingRequest;
