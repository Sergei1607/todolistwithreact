import React, { useState } from "react";

export function List() {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);
	const [number, setNumber] = useState(0);
	const [icon, setIcon] = useState("false");
	const [notodo, setNotodo] = useState(
		<li className="list-group-item">No todos, add a todo.</li>
	);

	function DisplayIcon() {
		setIcon("fas fa-times-circle fa-sm");
	}

	function HideIcon() {
		setIcon("false");
	}

	function addtodo() {
		if (todo == "") {
			alert("¡Your todo is empty! Please add a valid todo.");
		} else {
			setTodos([...todos, todo]);
			setTodo("");
			setNumber(number + 1);
			setNotodo();
		}
	}

	return (
		<div id="main">
			<div className="container d-flex justify-content-center">
				<div className="row">
					<div className="col">
						<input
							className="p-1"
							value={todo}
							onChange={e => setTodo(e.target.value)}
							placeholder="What's need to be done?"
						/>
						<button
							id="addtodo"
							className="btn p-1"
							onClick={addtodo}>
							<i className="fas fa-check-circle fa-2x"></i>
						</button>
					</div>
				</div>
			</div>
			<div className="container d-flex justify-content-center ">
				<div className="row">
					<div className="col-12">
						<ul className="list-group list-group-flush">
							{notodo}
							{todos.map((item, index) => {
								return (
									<li
										key={index}
										className="list-group-item"
										onMouseEnter={DisplayIcon}
										onMouseLeave={HideIcon}>
										{item}
										<i
											id="delete"
											className={icon}
											onClick={function() {
												todos.splice(index, 1);
												setNumber(number - 1);
												if (number === 1) {
													setNotodo(
														<li className="list-group-item">
															No tasks, add a task
														</li>
													);
												}
											}}></i>
									</li>
								);
							})}
							<li id="counter" className="list-group-item">
								{" "}
								{number} Items left.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
