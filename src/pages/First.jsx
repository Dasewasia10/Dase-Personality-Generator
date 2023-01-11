import { Link } from "react-router-dom";
import mainLogo from "../assets/mainLogo.png";

const First = () => {
	return (
		<div className="flex h-screen">
			<div className="m-auto flex flex-col">
				<img className="mx-auto h-64" src={mainLogo} alt="mainLogo" />
				<p className="mx-20 mt-4 text-center text-2xl lg:text-4xl">
					Generator Personalitas pada Karakter Originalmu
				</p>
				<div className="m-auto flex flex-col items-center justify-center object-center px-10 py-4">
					<Link to="select-generator">
						<p className="mt-10 rounded-xl border-2 border-lightone bg-darkone py-2 px-5 text-center text-2xl hover:border-darkone text-lightone hover:bg-lightone hover:text-darkone">
							Mulai!
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default First;
