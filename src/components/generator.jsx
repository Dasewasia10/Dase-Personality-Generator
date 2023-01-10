import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as htmlToImage from "html-to-image";
import ProgressBar from "@ramonak/react-progress-bar";

import Slider from "./slider";
import AddPP from "./addPP";
import Charts from "./charts";

import bgImage from "../assets/bg-image.jpg";

const Generator = ({ titlePage }) => {
	const [nameInput, setNameInput] = useState("No Name");
	const [slideValue, setSlideValue] = useState([]);

	const half_length = Math.ceil(slideValue.length / 2);

	const leftSide = slideValue.slice(0, half_length);
	const rightSide = slideValue.slice(half_length, slideValue.length);

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
		const dataUrl = await htmlToImage.toPng(generator.current, {
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
		<div className="flex flex-col gap-10">
			<div className="mx-auto mt-10 flex items-center gap-10">
				<p className="text-center text-2xl lg:text-4xl">{titlePage}</p>
			</div>
			<div className="absolute bottom-10 left-10">
				<Link to="/select-generator">
					<p
						className="rounded-xl border-2 border-[#D9D9D9] bg-[#010440] p-2 text-center text-[#D9D9D9] duration-150 hover:border-[#010440] hover:bg-[#D9D9D9] hover:text-[#010440]"
						title="Kembali"
						id="kembali">
						{"< Back"}
					</p>
				</Link>
			</div>
			<div className="mx-auto flex flex-row items-start gap-10">
				<div className="flex h-auto flex-col items-end justify-center gap-5">
					<div
						id="generator"
						ref={generator}
						className="relative flex h-96 w-[50rem] rounded-2xl bg-transparent font-courgette">
						<img
							className="absolute flex h-96 w-[50rem] rounded-2xl object-fill"
							src={bgImage}
							alt="bg-image"
						/>
						<div className="absolute top-4 left-[28rem] z-40 flex h-fit w-48 overflow-hidden rounded-2xl border-4 border-nearblue bg-[#CED0BA] p-2">
							<p className="flex text-left text-2xl text-black">{nameInput}</p>
						</div>

						<AddPP />

						<Charts />

						<div>
							<p className="absolute bottom-2 left-[31rem] flex flex-row gap-1 rounded-xl bg-white bg-opacity-90 p-2 text-xs text-black">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-facebook"
									viewBox="0 0 16 16">
									{" "}
									<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />{" "}
								</svg>
								<a href="https://twitter.com/dasewasia" target="_blank">
									Dasewasia10
								</a>
							</p>
						</div>

						<div className="absolute m-3 flex h-[22rem] w-[30rem] flex-col gap-2 rounded-2xl bg-cyan-900 bg-opacity-60 text-black">
							<div className="absolute left-8 top-8 flex h-1/2 w-3/4 flex-col gap-10">
								{leftSide.map((slider, index) => (
									<div className="flex" key={index}>
										<p className="absolute -translate-y-3 translate-x-1 rounded-sm bg-white bg-opacity-75 px-1 text-center text-[8px]">
											{slider.sliderTitle}
										</p>
										<ProgressBar
											completed={slider.fungsiValue}
											bgColor="#0A2647"
											height="5px"
											width="150px"
											labelAlignment="outside"
											isLabelVisible={false}
										/>
										<div className="absolute flex -translate-x-4 translate-y-2 flex-row text-center">
											<p className="littleLabel justify-start">
												{slider.lowerState}
											</p>
											<p className="littleLabel justify-center">
												{slider.middleState}
											</p>
											<p className="littleLabel justify-end">
												{slider.upperState}
											</p>
										</div>
									</div>
								))}
							</div>
							<div className="absolute left-64 top-8 flex h-1/2 w-3/4 flex-col gap-10">
								{rightSide.map((slider, index) => (
									<div className="flex" key={index}>
										<p className="absolute -translate-y-3 translate-x-1 rounded-sm bg-white bg-opacity-75 px-1 text-center text-[8px]">
											{slider.sliderTitle}
										</p>
										<ProgressBar
											completed={slider.fungsiValue}
											bgColor="#0A2647"
											height="5px"
											width="150px"
											labelAlignment="outside"
											isLabelVisible={false}
										/>
										<div className="absolute flex -translate-x-4 translate-y-2 flex-row text-center">
											<p className="littleLabel justify-start">
												{slider.lowerState}
											</p>
											<p className="littleLabel justify-center">
												{slider.middleState}
											</p>
											<p className="littleLabel justify-end">
												{slider.upperState}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<button
						onClick={downloadImage}
						className="flex cursor-pointer rounded-xl border-2 border-[#D9D9D9] bg-[#010440] py-2 px-5 text-2xl hover:border-[#010440] hover:bg-[#D9D9D9] hover:text-[#010440]">
						Generate!
					</button>
				</div>
				<div className="flex h-[30rem] -translate-y-4 flex-col gap-5 overflow-y-auto">
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
								middleState={slider.middleState}
								upperState={slider.upperState}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Generator;
