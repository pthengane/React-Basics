import { useState } from "react";

function ConditionalRendering()
{
   
    let [isVisible,setIsVisible]=useState(true);
    let update=()=>
    {
        setIsVisible(!isVisible);
    }
   
    return(
        <div>
            {
                isVisible?<h1>Welcome User!!!!!</h1>:<h1>Welcome Guest!!!!</h1>
            }
            <button onClick={()=>{update()}}>Click Here To Update</button>

        </div>

    )
}
export default ConditionalRendering;