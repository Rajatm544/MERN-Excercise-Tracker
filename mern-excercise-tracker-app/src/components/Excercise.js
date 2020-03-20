import React from "react";
import { Link } from "react-router-dom";


const Excercise = props =>  <tr scope="row">
								<td>{ props.excercise.username }</td>
								<td>{ props.excercise.description }</td>
								<td>{ props.excercise.duration }</td>
								<td>{ props.excercise.date.substring(0, 10) }</td>
								<td>
								<Link to={"/edit/" + props.excercise._id}> Edit </Link> | <a href="#" onClick={() => props.deleteExcercise(props.excercise._id) }> Delete </a>
								</td>
							</tr>

export default Excercise;