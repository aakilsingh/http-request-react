import {useState} from "react";

type EndpointProps = {
    method: string;
    link: string;
}

// think of how the component should work, made 3 different states
type EndpointStates = 'Initial' | 'Loading' | 'Completed';


export default function Endpoint({method, link}: EndpointProps) {
    // Keep track of the state using useState, made the html match the initial state.
    const [endpointState, setEndpointState] = useState<EndpointStates>('Initial');

    // Thought about the loading state and how we get there. OnClick,
    // HandleExecute by setting state to loading, (after button clicked)
    // fetch would run on the click of the button

    function handleExecute(){
        setEndpointState('Loading');
        // put fetch here
        setTimeout(() =>{
            setEndpointState('Completed');
        },3000)
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
                <p>Status Code: <span className={"code good-code"}>200</span></p>
                <div className={"response-container"}>
                    <h4>Response</h4>
                    <div className={"response-data"}>data: Id name, jnjib nlknbnnn Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Consequuntur culpa cupiditate deserunt dolorem doloremque eos
                        error esse excepturi expedita explicabo fugiat incidunt minus natus nulla quod, quos, similique,
                        voluptate voluptates?
                    </div>
                </div>
            </div>
        </>

    )
}