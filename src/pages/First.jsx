import { Link } from "react-router-dom";

const First = () => {
	return (
		<div className="flex h-screen">
			<div className="m-auto flex flex-col">
				<img
					className="mx-auto h-64"
					src="https://github.com/Aceship/Arknight-Images/blob/main/factions/logo_rhodes.png?raw=true"
					alt="logo_rhodes"
				/>
				<p className="mx-20 mt-4 text-center text-2xl lg:text-4xl">
					Generator Personalitas pada Karakter Originalmu
				</p>
				<div className="m-auto flex flex-col items-center justify-center object-center px-10 py-4">
					<Link to="select-generator">
						<p className="mt-10 rounded-xl border-2 border-[#D9D9D9] bg-[#010440] py-2 px-5 text-center text-2xl hover:border-[#010440] hover:bg-[#D9D9D9] hover:text-[#010440]">
							Mulai!
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default First;
