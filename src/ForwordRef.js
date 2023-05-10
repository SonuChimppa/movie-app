import React, { forwardRef } from 'react'

function Sonu(props, ref) {
    return (
        <div>
            <input ref={ref}></input>
        </div>
    )
}

export default forwardRef(Sonu)