import React, {Component} from "react";
import axios from "axios";

class CreateUser extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: ""
		}

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeUsername(event) {
		this.setState({username: event.target.value});
	}

	onSubmit(event) {
		event.preventDefault();

		const user = {username: this.state.username};

		console.log(user);

		axios.post("http://localhost:5000/users/add", user)
			.then(res => console.log(res.data))
			.catch(err => console.log("Error: " + err));

		this.setState({username: ""});

	}

	render() {
		return(
			<div>
				<h1>Create New User</h1>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Username: </label>
						<input
							required
							type="text"
							className="form-control"
							value={this.state.username}
							onChange={this.onChangeUsername}
						/>
					</div>
					<div className="form-group">
						<input
							type="submit"
							value="Create User"
							className="btn btn-primary btn-lg"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default CreateUser;