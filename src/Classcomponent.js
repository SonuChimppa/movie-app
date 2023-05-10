import { Component } from "react";

class Sonu extends Component {

    constructor() {

        super();
        this.state = {
            data: "hlo"
        }
    }
    Apple() {
        this.setState({ data: "ssssssssss   " })
    }
    render() {
        return (
            <div>
                <button onClick={() => this.Apple()}> update</button>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}
export default Sonu;