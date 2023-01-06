import { Link } from "react-router-dom";
import Slider from "../components/slider";

const GenPer = () => {
	return (
		<div className="m-10 flex flex-col gap-20">
			<div className="mx-auto flex">
				<p className="mt-4 text-center text-2xl lg:text-4xl">Ayo Test!</p>
			</div>
			<div className="flex flex-row gap-10">
				<div className="flex w-1/2 flex-col gap-10 border-4 border-cyan-400 p-5">
					<Slider
						id="replyChat"
						sliderName="How Long to Reply Chat : "
						lowerState="Just in 1s"
						upperState="Took Forever"
					/>
					<Slider
						id="persVert"
						sliderName="Personality Vert : "
						lowerState="Introverted"
						upperState="Extroverted"
					/>
					<Slider
						id="persColor"
						sliderName="Personality Color : "
						lowerState="Monochrome"
						upperState="Colorful"
					/>
				</div>
				<div className="flex w-1/2 flex-col items-center justify-center gap-10 border-4 border-cyan-400 p-5">
					<h2 className="absolute top-32 flex text-center text-2xl underline">
						Hasil
					</h2>
					<p className="rounded-xl border-2 border-[#D9D9D9] bg-[#010440] py-2 px-5 text-center text-2xl hover:border-[#010440] hover:bg-[#D9D9D9] hover:text-[#010440]">
						Generate!
					</p>
					<p className="text-2xl">
						<b>Hasil di-<i>generate</i> di sini</b>
					</p>
				</div>
			</div>
		</div>
	);
};

export default GenPer;
