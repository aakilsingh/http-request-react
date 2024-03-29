function App() {

    return (
        <main>
            <div className={"endpoint-container"}>
                <p className={"endpoint-method"}>Get</p>
                <h3 className={"endpoint-link"}>https://endpoint.com</h3>
                <button>Execute</button>
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
            <div className={"endpoint-container"}>
                <p className={"endpoint-method"}>Get</p>
                <h3 className={"endpoint-link"}>https://endpoint.com</h3>
                <button>Execute</button>
                <p>Status Code: <span className={"code bad-code"}>400</span></p>
                <div className={"response-container"}>
                    <h4>Response</h4>
                    <div className={"response-data"}>data: Id name, jnjib nlknbnnn Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Consequuntur culpa cupiditate deserunt dolorem doloremque eos
                        error esse excepturi expedita explicabo fugiat incidunt minus natus nulla quod, quos, similique,
                        voluptate voluptates?
                    </div>

                </div>
            </div>
        </main>
    )
}

export default App
