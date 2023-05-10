import React, { useEffect, useState } from 'react'

function Filter() {
    const [value, setvalue] = useState([])
    const [filter, setfilter] = useState("")
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((result) => {
            result.json().then((resp) => {
                setvalue(resp)
                // console.log(resp.data) 
            })
        })

    }, [])
    return (
        <>
            <div>Filter</div>
            <input placeholder='Enter name' onChange={(e) => { setfilter(e.target.value) }}></input>
            <table border={1} bgcolor="geen">
                <tr bgcolor="yellow">

                    <td>id</td>
                    <td>name</td>
                    <td>email</td>
                    <td>body</td>
                </tr>
                {/* {

                    value?.filter((val) => {
                        if (filter == "") {
                            return val
                        }
                        else if (val.name.toLowerCase().includes(filter.toLowerCase())) {
                            return val
                        }
                    }).map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.body}</td>
                        </tr>

                    )
                } */}

                {
                    value?.filter((val) => {
                        if (filter == "") {
                            return val
                        }
                        else if (val.name.toLowerCase().includes(filter.toLocaleLowerCase())) {
                            return val
                        }
                    }).map((item) => {
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.body}</td>
                        </tr>
                    })
                }

            </table>
        </>
    )
}

export default Filter