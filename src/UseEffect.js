import { useEffect, useState } from "react";

function UseEffect() {
    let [count, setcount] = useState(0)
    let [name, setname] = useState("erewrrweerwrwrrweweer")

    useEffect(() => {
        if (count > 0) {
            document.title = `sonu`
        }
        else {
            document.title = `chhimpa`
        }
    })
    return (
        <div>
            <button onClick={() => setname("saafdsfdsfsfds")}>name</button>
            <div>{name}</div>
            <button onClick={() => { setcount(count + 1) }}>count</button>
            <div>{count}</div>
        </div>
    )
}
export default UseEffect;