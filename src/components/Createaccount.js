import React from 'react';



class Createaccount extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                value:''
            }    
    }
    handleChange = (event) =>{
        this.setState ({value:event.target.value});
    }
    render() {
        return (
            <div class="reg-form">
                
                <form>
                <h1 class="form-reg">Register Here!</h1>
                    <label>
                        <h3>First Name</h3>
                        <input type='text' placeholder="First Name" value={this.handleChange.change}
                        onChange={this.state.value} />
                    </label>
                    <label>
                        <h3>Password</h3>
                        <input type='password' placeholder="Password" value={this.handleChange.change}
                        onChange={this.state.value} />
                    </label>
                    <br></br><br></br>
                        <input class="btn-submit" type='Submit' value='Click Here to Submit'/>
                </form>
            </div>
        )
    }
}

export default Createaccount;