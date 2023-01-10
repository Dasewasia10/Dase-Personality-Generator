import React from "react";
import { Routes, Route } from "react-router-dom";

import First from "./pages/First";
import GeneratorRelationship from "./pages/GeneratorRelationship";
import SelectGenerator from "./pages/SelectGen";

import Header from "./components/header";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<First />} />
				<Route path="/select-generator" element={<SelectGenerator />} />
				<Route
					path="/generator-relationship"
					element={<GeneratorRelationship />}
				/>
			</Routes>
		</div>
	);
}

export default App;
