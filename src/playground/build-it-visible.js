
let vizabil = false
let viz = "hide"

const visible = () => {
    (viz == "show") ? viz = "hide" : viz = "show"
    renderJSX()
}

const vizza = () => {
    vizabil = !vizabil
    renderJSX()
}

const renderJSX = () => {
    const template = (
        <div>
            <h1> Visible </h1>
            <button onClick={visible}> {viz} </button>
            <button onClick={vizza}> toggle </button>

            <p hidden={(viz === "show") ?  true : false}> {viz} </p>
            <p hidden= {vizabil}> {(vizabil) ?  "viza show" : "viza hide"} </p>
            {
                vizabil && (
                    <div>
                    <p> hey </p>
                    <p> yo </p>
                    </div>
                )
            }
        </div>
    )

    const appRoot = document.getElementById('app')

    ReactDOM.render(template, appRoot)
}

renderJSX()