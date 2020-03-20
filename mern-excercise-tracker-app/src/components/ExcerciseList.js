import React, {Component} from "react";
import axios from "axios";
import Excercise from "./Excercise";


class ExcerciseList extends Component {
	constructor(props) {
		super(props);

		this.state = { excercises: [] };

		this.deleteExcercise = this.deleteExcercise.bind(this);
		this.excerciseList = this.excerciseList.bind(this);
	}

	componentDidMount() {
		axios.get("http://localhost:5000/excercises/")
			.then(response => {
				this.setState({excercises: response.data});
			})
			.catch(err => console.error(err));
	}

	deleteExcercise(id) {
		axios.delete("http://localhost:5000/excercises/" + id)
			.then(res => console.log(res.data));

		this.setState({excercises: this.state.excercises.filter(ele => ele._id !== id)});
	}

	excerciseList() {
		return(
			this.state.excercises.map(currentexcercise => <Excercise excercise={currentexcercise} deleteExcercise={this.deleteExcercise} key={currentexcercise._id} />)
		);
	}
	
	

	render() {
		return(
			<div>
				<h2>Logged Excercises</h2>
				<table className="table table-striped table-borderless table-hover">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Username</th>
							<th scope="col">Description</th>
							<th scope="col">Duration (in minutes)</th>
							<th scope="col">Date</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>
						{ this.excerciseList() }
					</tbody>
				</table>
			</div>
		);
	}
}

export default ExcerciseList;