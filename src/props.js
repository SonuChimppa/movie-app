import { Component, useEffect, useState } from "react";

function Asd(Pp) {
    // const [data, setName] = useState()
    useEffect(() => {
        alert = ("ok this is done")
    }, [])
    return (
        <div>

            <table border={1}>


                <tr>
                    <td> name-{Pp.name}</td>
                    <td> email-{Pp.email}</td>
                    <td> mobile-{Pp.phone}</td>
                </tr>
            </table>
        </div>

    )
}
export default Asd;

// class Name extends Component {
//     render() {
//         return (
//             <div style={{ backgroundColor: "green" }}>
//                 <h1> Name-{this.props.first} {this.props.last} </h1>
//                 <h2>Mobile number={this.props.Number}</h2>
//                 <h2>Emali={this.props.Email}</h2>

//             </div>
//         )
//     }
// }
// export default Name