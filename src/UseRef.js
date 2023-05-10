import React, { useRef } from 'react'

function UseRef() {
    let ref = useRef()
    function aa() {
        ref.current.value = "332332333"
        ref.current.focus()
        ref.current.style.color = "green"
    }
    return (
        <div>
            <input ref={ref}></input>
            <button onClick={() => aa()}>button</button>
        </div>
    )
}

export default UseRef