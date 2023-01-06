import { Link } from "react-router-dom";

const SelectGenerator = () => {
	return (
		<div className="flex h-screen">
			<div className="m-auto flex flex-col">
				<p className="mx-20 mt-4 text-center text-2xl lg:text-4xl">
					Choose Generator You Want
				</p>
				<div className="m-auto flex items-center justify-center gap-10 object-center px-10 py-4">
					<div>
						<Link to="/generator-relationship">
							<p className="choosing">Relationship</p>
						</Link>
					</div>
					<div>
						<Link to="/generator-personality">
							<p className="choosing">Personality</p>
						</Link>
					</div>
					<div>
						<Link to="/dictionary">
							<p className="choosing">
								<b>: Dictionary</b>
							</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SelectGenerator;
