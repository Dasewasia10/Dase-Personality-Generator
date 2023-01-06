import { Link } from "react-router-dom";

const SelectGenerator = () => {
	return (
		<div className="flex h-screen">
			<div className="m-auto flex flex-col">
				<p className="mx-20 mt-4 text-center text-2xl lg:text-4xl">
					Choose Generator You Want
				</p>
				<div className="m-auto grid auto-cols-auto grid-rows-3 items-center justify-center gap-4 object-center px-10 py-4">
					<Link to="/generator-relationship">
						<p className="choosing">Relationship</p>
					</Link>
					<Link to="/generator-personality">
						<p className="choosing">Personality</p>
					</Link>
					<Link to="/dictionary">
						<p className="choosing">: Dictionary</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SelectGenerator;
