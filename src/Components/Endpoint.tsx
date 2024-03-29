import {useEffect, useState} from "react";

type EndpointProps = {
    method: string;
    link: string;
}
// make function to do the fetch



// think of how the component should work, made 3 different states
type EndpointStates = 'Initial' | 'Loading' | 'Completed';


export default function Endpoint({method, link}: EndpointProps) {
    // Keep track of the state using useState, made the html match the initial state.
    const [endpointState, setEndpointState] = useState<EndpointStates>('Initial');
    const [status, setStatus] = useState<number>(0);
    const [data, setData] = useState<string>("");

    useEffect(() => {
        QueryApi(link);
        // when the state changes from initial to loading then the useEffect runs.
    },[endpointState,link])
    
    
    // Thought about the loading state and how we get there. OnClick,
    // HandleExecute by setting state to loading, (after button clicked)
    // fetch would run on the click of the button

    function handleExecute(){
        setEndpointState('Loading');

    }

    async function QueryApi (link: string){
        // awaiting for promise to resolve, so we just get object response, thats why you use await
        const response = await fetch(link);
        const status:number = response.status;
        setStatus(status);

        const data = await response.json();
        setData(JSON.stringify(data,null,4));

        setEndpointState('Completed');

    }

    // variable for button text, this is the initial text
    let buttonText: string = 'Execute';

    // if endpoint state is loading, button text will change.
    if(endpointState === 'Loading'){
        buttonText = 'Loading...';
    }
    // declare variable for class name, initial state is hidden
    let responseCssClass: string = "hidden";
    // assign this if state is completed, dont forget to set it in html
    if (endpointState === 'Completed'){
        responseCssClass = "";
    }

    return (


        <>
            <p className={"endpoint-method"}>{method}</p>
            <h3 className={"endpoint-link"}>{link}</h3>
            <button onClick={() => handleExecute()}>{buttonText}</button>
            <div className={responseCssClass}>
                <p>Status Code: <span className={"code good-code"}>{status}</span></p>
                <div className={"response-container"}>
                    <h4>Response</h4>
                    <div className={"response-data"}>{data}</div>
                </div>
            </div>
        </>

    )
}