import React, { useState } from "react";

export function List() {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);

	function addtodo() {
		setTodos([...todos, todo]);
		setTodo("");
	}

	return (
		<div>
			<div className="container d-flex justify-content-center">
				<div className="row">
					<div className="col">
						<input
							value={todo}
							onChange={e => setTodo(e.target.value)}
						/>
						<button onClick={addtodo}>Ok</button>
					</div>
				</div>
			</div>
			<div className="container d-flex justify-content-center">
				<div className="row">
					<div className="col">
						<ul className="list-group">
							{todos.map((item, index) => {
								return (
									<li key={index} className="list-group-item">
										{item}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
