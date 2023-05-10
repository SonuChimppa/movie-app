import React from 'react'

function Maps() {
    const sonu = [{ name: "sonu", email: "sonu@gamil", mobile: "9876654223" },
    { name: "monu", email: "monu@gamil", mobile: "5432254633" },
    { name: "raja", email: "raja@gamil", mobile: "0987654323" }]

    return (
        < > <h1>Maps</h1>
            <table border={1} bgcolor="skyblue">
                <td bgcolor="yellow">name</td>
                <td bgcolor="yellow">email</td>
                <td bgcolor="yellow">mobile</td>
                {
                    sonu.map((item) =>
                        <tr bgcolor="geen" border={1}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                        </tr>
                    )
                }


            </table>
        </>

    )
}

export default Maps