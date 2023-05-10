import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'
function Usememo() {
    let [count, setcount] = useState(0)
    let [item, setitem] = useState(1)
    let memo = useMemo(function multicount() {
        console.log("dfsdfs")
        return count * 3
    }, [count])
    return (
        <div>
            <h1>{memo}</h1>
            <button onClick={() => setcount(count + 1)}>count + {count}</button>
            <button onClick={() => setitem(item - 1)}>item {item}</button>
        </div>
    )
}

export default Usememo