import React, {Component} from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

class EditExcercise extends Component {

	constructor(props) {
		super(props);

		this.state = {
			username: "",
			description: "",
			duration: 0,
			date: new Date(),
			users: []
		}
		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeDuration = this.onChangeDuration.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		axios.get("http://localhost:5000/excercises/" + this.props.match.params.id)
			.then(response => {
				this.setState({
					username: response.data.username,
					description: response.data.description,
					duration: response.data.duration,
					date: new Date(response.data.date)
				})
			})
			.catch(err => console.error(err));


		axios.get("http://localhost:5000/users/")
			.then(response => {
				if(response.data.length) {
					this.setState({
						users: response.data.map(user => user.username),
					});
				}
			})
	}

	onChangeUsername(event) {
		this.setState({username : event.target.value});
	}
	onChangeDescription(event) {
		this.setState({description : event.target.value});
	}
	onChangeDuration(event) {
		this.setState({duration : event.target.value});
	}
	onChangeDate(date) {
		this.setState({date : date});
	}
	onSubmit(event) {
		event.preventDefault();

		const excercise = {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date
		};

		console.log(excercise);

		axios.post("http://localhost:5000/excercises/update/" + this.props.match.params.id, excercise)
			.then(res => console.log(res.data))
			.catch(err => console.error(err));

		window.location = "/";
	}


	render() {
		return(
			<div>
				<h1>Edit Excercise Log</h1>
				<form onSubmit={this.onSubmit} >
					<div className="form-group">
						<label>Username: </label>
						<select ref="userInput" 
							required
							className = "form-control"
							value = {this.state.username} 
							onChange = {this.onChangeUsername}
						>
							{
								this.state.users.map(user =>
										<option key={user} value={user}>
											{user}
										</option>
									)
							}
						</select>
					</div>
					<div className="form-group">
						<label>Description: </label>
						<input 
							type = "text" 
							className = "form-control"
							value = {this.state.description} 
							onChange = {this.onChangeDescription}
						/>
					</div>
					<div className="form-group">
						<label>Duration (in minutes): </label>
						<input 
							type = "number" 
							className = "form-control"
							value = {this.state.duration} 
							onChange = {this.onChangeDuration}
						/>
					</div>
					<div className="form-group">
						<label>Date: </label>
						<div>
							<DatePicker
								selected = {this.state.date}
								onChange = {this.onChangeDate}
							/>
						</div>
					</div>

					<div className="form-group">
						<input type="submit" value="Edit Excercise Log" className="btn btn-primary btn-lg" />
					</div>

				</form>
			</div>
		);
	}
}

export default EditExcercise;