import { Link } from "react-router-dom";
import Slider from "../components/slider";
import React, { useState } from "react";
import AddPP from "../components/addPP";

const GeneratorRelationship = () => {
	const [nameInput, setNameInput] = useState("No Name");

	const [replyChat, setReplyChat] = useState(0);
	const [persVert, setPersVert] = useState(0);
	const [persColor, setPersColor] = useState(0);
	const [insecureLv, setInsecureLv] = useState(0);
	const [dealingEx, setDealingEx] = useState(0);
	const [someoneCalling, setSomeoneCalling] = useState(0);
	const [dealingOppSex, setDealingOppSex] = useState(0);
	const [wakingUp, setWakingUp] = useState(0);
	const [socialMedia, setSocialMedia] = useState(0);
	const [innerPersonality, setInnerPersonality] = useState(0);
	const [hobbyMock, setHobbyMock] = useState(0);
	const [sayingSomething, setSayingSomething] = useState(0);
	const [romanLv, setRomanLv] = useState(0);
	const [generalActivity, setGeneralActivity] = useState(0);
	const [hangsOut, setHangsOut] = useState(0);

	const handleChange = (event) => {
		setNameInput(event.target.value);
	};

	return (
		<div className="m-10 flex flex-col gap-20">
			<div className="absolute top-10 left-10 flex">
				<Link to="/select-generator">
					<p
						className="rounded-xl border-2 border-[#D9D9D9] bg-[#010440] p-2 text-center text-2xl hover:border-[#010440] hover:bg-[#D9D9D9] hover:text-[#010440]"
						title="Kembali"
						id="kembali">
						{"< Back"}
					</p>
				</Link>
			</div>

			<div className="mx-auto flex">
				<p className="mt-4 text-center text-2xl lg:text-4xl">
					Testing the Generator
				</p>
			</div>
			<div className="flex flex-row gap-10">
				<div className="flex w-1/2 flex-col gap-5">
					<p className="flex justify-center text-center text-2xl underline">
						What's Your OC's Name?
					</p>
					<div className="flex h-auto flex-col items-center justify-center gap-5 border-4 border-cyan-400 p-5 text-center">
						<input
							type="text"
							className="form-control m-0 block w-full rounded border border-solid 
							border-gray-300 bg-white bg-clip-padding 
							px-3 py-1.5 text-base font-normal 
							text-gray-700 transition ease-in-out 
							focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
							placeholder="Name"
							onChange={handleChange}
						/>
					</div>
					<p className="flex justify-center text-center text-2xl underline">
						Upload Your OC PP
					</p>
					<div className="flex h-auto flex-col items-center justify-center gap-5 border-4 border-cyan-400 p-5 text-center">
						<p className="text-center">
							*Please upload 1x1 image & with PNG, JPEG or JPG format only
						</p>
						<AddPP dataURLKey="data_url" />
					</div>
					<p className="flex justify-center text-center text-2xl underline">
						Set Your OC's
					</p>
					<div className="flex h-96 flex-col gap-10 overflow-y-auto border-4 border-cyan-400 p-5">
						<Slider
							id="replyChat"
							fungsi={setReplyChat}
							sliderName={"How Long to Reply Chat : "}
							lowerState={"Just in 1s"}
							upperState={"Took Forever"}
						/>
						<Slider
							id="persVert"
							fungsi={setPersVert}
							sliderName={"Personality Vert : "}
							lowerState={"Introverted"}
							upperState={"Extroverted"}
						/>
						<Slider
							id="persColor"
							fungsi={setPersColor}
							sliderName={"Personality Color : "}
							lowerState={"Monochrome"}
							upperState={"Colorful"}
						/>
						<Slider
							id="insecureLv"
							fungsi={setInsecureLv}
							sliderName={"Insecurity Level : "}
							lowerState={"Insecure"}
							upperState={"Confident"}
						/>
						<Slider
							id="dealingEx"
							fungsi={setDealingEx}
							sliderName={"Dealing with His/Her Ex : "}
							lowerState={"Can't move on"}
							middleState={"Single AF"}
							upperState={"Changing Partner Easily"}
						/>
						<Slider
							id="someoneCalling"
							fungsi={setSomeoneCalling}
							sliderName={"When Someone Calling : "}
							lowerState={"Ignore"}
							upperState={"Fast Respondes"}
						/>
						<Slider
							id="dealingOppSex"
							fungsi={setDealingOppSex}
							sliderName={"Dealing with the Opposite Sex : "}
							lowerState={"I'm Gonna Die!"}
							upperState={"Easy Peasy"}
						/>
						<Slider
							id="wakingUp"
							fungsi={setWakingUp}
							sliderName={"Start Your Day : "}
							lowerState={"Early Bird"}
							upperState={"Night Owl"}
						/>
						<Slider
							id="socialMedia"
							fungsi={setSocialMedia}
							sliderName={"Social Media : "}
							lowerState={"Not Interested"}
							middleState={"Doesn't Care"}
							upperState={"Actively"}
						/>
						<Slider
							id="innerPersonality"
							fungsi={setInnerPersonality}
							sliderName={"Inner Personality : "}
							lowerState={"Childish"}
							middleState={"Average"}
							upperState={"Mature"}
						/>
						<Slider
							id="hobbyMock"
							fungsi={setHobbyMock}
							sliderName={"Someone Mock Your Hobby : "}
							lowerState={"Keep Calm"}
							middleState={"Stay Cool, Heating Inside"}
							upperState={"Angry AF"}
						/>
						<Slider
							id="sayingSomething"
							fungsi={setSayingSomething}
							sliderName={"Saying Something to Someone : "}
							lowerState={"StraightForward"}
							upperState={"Complex"}
						/>
						<Slider
							id="romanLv"
							fungsi={setRomanLv}
							sliderName={"Roman Level : "}
							lowerState={"Romance"}
							upperState={"Humorous"}
						/>
						<Slider
							id="generalActivity"
							fungsi={setGeneralActivity}
							sliderName={"General Activity : "}
							lowerState={"Lock in Room All Day"}
							upperState={"Love to Meet People"}
						/>
						<Slider
							id="hangsOut"
							fungsi={setHangsOut}
							sliderName={"Hangs Out : "}
							lowerState={"With Boys"}
							upperState={"With Girls"}
						/>
					</div>
				</div>
				<div className="flex w-1/2 flex-col gap-5">
					<p className="flex justify-center text-center text-2xl underline">
						Temporary Result
					</p>
					<div className="flex flex-col items-center justify-center gap-10 border-4 border-cyan-400 p-5">
						<ul className="flex flex-col text-center">
							<li className="mb-5">Name : {nameInput}</li>
							<li>PP Image : <img src="data_url" alt="" /></li>
							<li>Reply Chat : {replyChat}</li>
							<li>Persona Vert : {persVert}</li>
							<li>Persona Color : {persColor}</li>
							<li>Insecure Lv : {insecureLv}</li>
							<li>Deal w/ Ex : {dealingEx}</li>
							<li>Calling : {someoneCalling}</li>
							<li>Deal w/ Opposite Sex : {dealingOppSex}</li>
							<li>Waking Up : {wakingUp}</li>
							<li>Social Media : {socialMedia}</li>
							<li>Inner Persona : {innerPersonality}</li>
							<li>Hobby Mock ? : {hobbyMock}</li>
							<li>Saying Something : {sayingSomething}</li>
							<li>Romance/Humorous ? : {romanLv}</li>
							<li>General Activity : {generalActivity}</li>
							<li>HangsOut : {hangsOut}</li>
						</ul>
					</div>
					<p className="flex justify-center text-center text-2xl underline">
						Result
					</p>
					<div className="flex max-h-64 flex-col items-center justify-center gap-10 border-4 border-cyan-400 p-5">
						<button className="cursor-pointer rounded-xl border-2 border-[#D9D9D9] bg-[#010440] py-2 px-5 text-center text-2xl hover:border-[#010440] hover:bg-[#D9D9D9] hover:text-[#010440]">
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
		</div>
	);
};

export default GeneratorRelationship;
