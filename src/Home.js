import react, { useState } from "react";

function Home() {
    const [Name, setName] = useState(0)
    function Hello() {
        setName(Name + 1)
    }
    return (
        <>
            <h1>hello everyone{Name}</h1>
            <button onClick={() => Hello()}> update</button>
        </>
    )
}
export default Home;