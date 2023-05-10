// import React, { useState } from 'react'

// function Input() {
//     const [Data, setData] = useState(null)
//     const [print, setprint] = useState(false)
//     function getdata(val) {
//         setData(val.target.value)
//         setprint(false)
//     }
//     return (
//         <>
//             <div>Input</div>

//             <input onChange={getdata}></input>
//             <button onClick={() => (setprint(true))}>print</button>
//             {
//                 print ?
//                     <h1>{Data}</h1>
//                     : null
//             }
//         </>

//     )
// }

// export default Input


import React, { useState } from 'react'

function Input() {
    const [state, setstate] = useState(null)
    const [sonu, setsonu] = useState(false)

    function getdata(val) {
        setstate(val.target.value)
        setsonu(false)
    }
    return (
        <>
            <h1>hello input in this</h1>

            <input id='ac' onChange={getdata}></input>
            <button onClick={() => { setsonu(true) }}>on click</button>
            
            {
                sonu ?
                <h1>{state}</h1>
                : null
            }
        </>

    )
}

export default Input