import { Link } from "react-router-dom";
import Slider from "../components/slider";
import React from "react";

const GeneratorRelationship = () => {
	return (
		<div className="m-10 flex flex-col gap-20">
			<div className="mx-auto flex">
				<p className="mt-4 text-center text-2xl lg:text-4xl">
					Testing the Generator
				</p>
			</div>
			<div className="flex flex-row gap-10">
				<div className="flex h-96 w-1/2 flex-col gap-10 overflow-y-auto border-4 border-cyan-400 p-5">
					<Slider
						id="replyChat"
						angka={hasil1}
						sliderName={"How Long to Reply Chat : "}
						lowerState={"Just in 1s"}
						upperState={"Took Forever"}
					/>
					<Slider
						id="persVert"
						angka={hasil2}
						sliderName={"Personality Vert : "}
						lowerState={"Introverted"}
						upperState={"Extroverted"}
					/>
					<Slider
						id="persColor"
						sliderName={"Personality Color : "}
						lowerState={"Monochrome"}
						upperState={"Colorful"}
					/>
					<Slider
						id="insecureLv"
						sliderName={"Insecurity Level : "}
						lowerState={"Insecure"}
						upperState={"Confident"}
					/>
					<Slider
						id="dealingEx"
						sliderName={"Dealing with His/Her Ex : "}
						lowerState={"Can't move on"}
						middleState={"Single AF"}
						upperState={"Changing Partner Easily"}
					/>
					<Slider
						id="someoneCalling"
						sliderName={"When Someone Calling : "}
						lowerState={"Ignore"}
						upperState={"Fast Respondes"}
					/>
					<Slider
						id="dealingOppSex"
						sliderName={"Dealing with the Opposite Sex : "}
						lowerState={"I'm Gonna Die!"}
						upperState={"Easy Peasy"}
					/>
					<Slider
						id="socialMedia"
						sliderName={"Social Media : "}
						lowerState={"Not Interested"}
						middleState={"Doesn't Care"}
						upperState={"Actively"}
					/>
					<Slider
						id="hobbyMock"
						sliderName={"Someone Mock Your Hobby : "}
						lowerState={"Keep Calm"}
						middleState={"Stay Cool, Heating Inside"}
						upperState={"Angry AF"}
					/>
					<Slider
						id="saying"
						sliderName={"Saying Something to Someone : "}
						lowerState={"StraightForward"}
						upperState={"Complex"}
					/>
					<Slider
						id="romanLv"
						sliderName={"Roman Level : "}
						lowerState={"Romance"}
						upperState={"Humorous"}
					/>
					<Slider
						id="generalActivity"
						sliderName={"General Activity : "}
						lowerState={"Lock in Room All Day"}
						upperState={"Love to Meet People"}
					/>
					<Slider
						id="hangsOut"
						sliderName={"Hangs Out : "}
						lowerState={"With Boys"}
						upperState={"With Girls"}
					/>
				</div>
				<div className="flex max-h-64 w-1/2 flex-col items-center justify-center gap-10 border-4 border-cyan-400 p-5">
					<h2 className="absolute top-32 flex text-center text-2xl underline">
						Hasil
					</h2>
					<button
						onClick={() => console.log(hasil1)}
						className="cursor-pointer rounded-xl border-2 border-[#D9D9D9] bg-[#010440] py-2 px-5 text-center text-2xl hover:border-[#010440] hover:bg-[#D9D9D9] hover:text-[#010440]">
						Generate!
					</button>
					<p className="text-2xl">
						<b>
							Hasil di-<i>generate</i> di sini
						</b>
					</p>
				</div>
			</div>
		</div>
	);
};

export default GeneratorRelationship;
