import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",
            restrictions: [],
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                     />
                     <br />
                    <input 
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input 
                        placeholder="Age"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    /><br />
                    
                    {/* Create radio buttons for gender here */}
                    <br />
                    
                    {/* Create select box for location here */}
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: { this.state.firstName } { this.state.lastName }</p>
                <p>Your age: { this.state.age }</p>
                <p>Your gender: {/* Gender here */}</p>
                <p>Your destination: {/* Destination here */}</p>
                <p>
                    Your dietary restrictions: 
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}

export default App
