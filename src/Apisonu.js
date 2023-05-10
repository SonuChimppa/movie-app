
import React, { useEffect, useState } from 'react'

function Apisonu() {
    const [state, setData] = useState([])
    const [filtervalue, setfilterval] = useState("")
    const [searchapi, setsearchapi] = useState([])
    useEffect(() => {
        fetch("https://reqres.in/api/unknown").then((Sonu) => {
            Sonu.json().then((resp) => {
                setData(resp.data)
                setsearchapi(resp.data)
                // console.log(resp.data)
            })
        })
    }, [])
    console.log(filtervalue)
     function handlefilter(e) {
        console.log(e)
        if (e.target.value == '') {
            setData(setsearchapi)
        }
        else {
            const filterdata = searchapi.filter((item) => item.name.toLoverCase().includes(e.target.value.toLoverCase()))
            setData(filterdata)
        }
        setfilterval(e.target.value)
    }

    return (
        <> <h1>Apisonu</h1>
            <input placeholder='search' onChange={(e) => setfilterval(e.target.value)} ></input>
            <table border={1} bgcolor={"geen"}>
                <tr>
                    <td bgcolor={"yellow"}>serial no.</td>
                    <td bgcolor={"yellow"}>name</td>
                    <td bgcolor={"yellow"}>year</td>
                    <td bgcolor={"yellow"}>color</td>
                    <td bgcolor={"yellow"}>values</td>
                </tr>


                {
                    state?.filter((val) => {
                        if (filtervalue === "") {
                            return val
                        }
                        else if (val.name.toLowerCase().includes(filtervalue.toLowerCase())) {
                            return val
                        }
                    }).map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.year}</td>
                            <td>{item.color}</td>
                            <td>{item.pantone_value}</td>
                        </tr>


                    )
                }


            </table >
        </>
    )
}

export default Apisonu