import Endpoint from "./Endpoint.tsx";

type EndpointType = {
    method: string,
    link: string,
    id: number
}

export default function EndpointList(){
    const endpointArray: EndpointType[] =[
        {method: 'Get', link: 'https://localhost:7147/api/Client', id: 1},
        {method: 'Post', link: 'https://localhost/createClient', id:2},
        {method: 'Delete', link: 'https://localhost/deleteClient', id:3},
        {method: 'Update', link: 'https://localhost/updateClient', id:4}
    ];

    return(
        <ul>
            {endpointArray.map((endpoint) =>
                <li className={"endpoint-container"} key={endpoint.id}>
                    <Endpoint method={endpoint.method} link={endpoint.link}/>
                </li>
            )}
        </ul>
    )
}