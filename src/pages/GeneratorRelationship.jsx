import { Link } from "react-router-dom";
import Slider from "../components/slider";
import AddPP from "../components/addPP";
import React, { useState, useEffect } from "react";
import axios from "axios";

const GeneratorRelationship = () => {
	const [nameInput, setNameInput] = useState("No Name");
	const [slideValue, setSlideValue] = useState([]);

	const handleChange = (event) => {
		setNameInput(event.target.value);
	};

	const url = "../relationshipSliderValue.json";

	console.log(slideValue);

	const changeFungsiValue = (id) => {
		console.log(id);

		setSlideValue(
			slideValue.map((item) => {
				console.log(item);

				if (item.id == id) {
					return { ...item, fungsiValue: item.fungsiValue };
				}
				return item;
			})
		);
	};

	useEffect(() => {
		axios
			.get(url)
			.then((res) => setSlideValue(res.data))
			.catch((err) => console.log(err));
	}, []);

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
						<p className="text-center">
							*Max Length is 32 characters (with space)
						</p>
						<input
							type="text"
							className="form-control m-0 block w-full rounded border border-solid 
							border-gray-300 bg-white bg-clip-padding 
							px-3 py-1.5 text-base font-normal 
							text-gray-700 transition ease-in-out 
							focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
							placeholder="Name"
							maxLength={32}
							onChange={handleChange}
						/>
					</div>
					<p className="flex justify-center text-center text-2xl underline">
						Upload Your OC PP
					</p>
					<div className="flex h-auto flex-col items-center justify-center gap-5 border-4 border-cyan-400 p-5 text-center">
						<p className="text-center">
							*Please upload with PNG, JPEG or JPG format only
							<br />
							**Recommend to upload image with 1:1 ratio
							<br />
							***Max Size is 2MB
						</p>
						<AddPP />
					</div>
					<p className="flex justify-center text-center text-2xl underline">
						Set Your OC's
					</p>
					<div className="flex h-96 flex-col gap-10 overflow-y-auto border-4 border-cyan-400 p-5">
						{slideValue.map((slider, index) => (
							<Slider
								key={index}
								id={slider.id}
								fungsi={changeFungsiValue}
								sliderName={slider.sliderName}
								lowerState={slider.lowerState}
								upperState={slider.upperState}
							/>
						))}
					</div>
				</div>
				<div className="flex w-1/2 flex-col gap-5">
					<p className="flex justify-center text-center text-2xl underline">
						Temporary Result
					</p>
					<div className="flex flex-col items-center justify-center gap-10 border-4 border-cyan-400 p-5">
						<ul className="flex flex-col text-center">
							<li className="mb-5">Name : {nameInput}</li>
							<li>
								PP Image : <img src={"data_url"} alt="" />
							</li>
							{slideValue.map((slider, index) => (
								<li key={index}>
									{slider.sliderTitle}
									{slider.fungsiValue}
								</li>
							))}
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
