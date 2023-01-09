import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as htmlToImage from "html-to-image";

import Slider from "../components/slider";
import AddPP from "../components/addPP";

import bgImage from "../assets/bg-image.jpg";

const GeneratorRelationship = () => {
	const [nameInput, setNameInput] = useState("No Name");
	const [slideValue, setSlideValue] = useState([]);

	const handleChange = (event) => {
		setNameInput(event.target.value);
	};

	const changeFungsiValue = (id, value) => {
		setSlideValue(
			slideValue.map((item) => {
				if (item.sliderName == id) {
					return { ...item, fungsiValue: value };
				}
				return item;
			})
		);
	};

	const generator = useRef(null);

	const downloadImage = async () => {
		const dataUrl = await htmlToImage.toPng(domEl.current, {
			skipAutoScale: true,
			pixelRatio: 3,
		}); // download image
		const link = document.createElement("a");
		link.download = `CharCard_of_${nameInput}.png`;
		link.href = dataUrl;
		link.click();
	};

	const url = "../config/relationshipSliderValue.json";

	useEffect(() => {
		axios
			.get(url)
			.then((res) => setSlideValue(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="m-10 flex flex-col gap-20">
			<div className="top-15 absolute left-20 flex"></div>

			<div className="mx-auto flex items-center gap-10">
				<Link to="/select-generator">
					<p
						className="rounded-xl border-2 border-[#D9D9D9] bg-[#010440] p-2 text-center text-2xl hover:border-[#010440] hover:bg-[#D9D9D9] hover:text-[#010440]"
						title="Kembali"
						id="kembali">
						{"< Back"}
					</p>
				</Link>
				<p className="text-center text-2xl lg:text-4xl">
					Relationship Generator
				</p>
			</div>
			<div className="flex h-auto flex-col items-center justify-center gap-10">
				<div
					id="generator"
					ref={generator}
					className="relative flex h-96 w-[50rem] rounded-2xl bg-transparent font-courgette">
					<img
						className="absolute flex h-96 w-[50rem] rounded-2xl object-fill"
						src={bgImage}
						alt="bg-image"
					/>
					<p className="absolute top-1/2 left-1/2 z-40 flex -translate-x-1/2 -translate-y-1/2 text-right text-4xl text-black">
						{nameInput}
					</p>
					<AddPP />

					<div className="absolute flex flex-col items-center justify-center gap-5 border-4 border-cyan-400 p-5 text-black">
						<label htmlFor="nameInput">{nameInput}</label>
						<ul className="flex flex-col text-center">
							{slideValue.map((slider, index) => (
								<li key={index}>
									{slider.sliderTitle}
									{slider.fungsiValue}
								</li>
							))}
						</ul>
					</div>
				</div>
				<button
					onClick={downloadImage}
					className="mx-auto flex cursor-pointer rounded-xl border-2 border-[#D9D9D9] bg-[#010440] py-2 px-5 text-2xl hover:border-[#010440] hover:bg-[#D9D9D9] hover:text-[#010440]">
					Generate!
				</button>
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
							id="nameInput"
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
						Temporary Result
					</p>
					<div className="flex flex-col items-center justify-center gap-10 border-4 border-cyan-400 p-5">
						<ul className="flex flex-col text-center">
							<li className="mb-5">Name : {nameInput}</li>
							{slideValue.map((slider, index) => (
								<li key={index}>
									{slider.sliderTitle}
									{slider.fungsiValue}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="flex w-1/2 flex-col gap-5">
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
			</div>
		</div>
	);
};

export default GeneratorRelationship;
