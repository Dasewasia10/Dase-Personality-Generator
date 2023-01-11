import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as htmlToImage from "html-to-image";
import ProgressBar from "@ramonak/react-progress-bar";

import Slider from "./slider";
import AddPP from "./addPP";

const Generator = ({ titlePage }) => {
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
		const dataUrl = await htmlToImage.toPng(generator.current, {
			skipAutoScale: true,
			pixelRatio: 3,
		}); // download image
		const link = document.createElement("a");
		link.download = `CharCard_of_${nameInput}.png`;
		link.href = dataUrl;
		link.click();
	};

	const url =
		"https://dase-oc-persona.netlify.app/relationshipSliderValue.json";

	const url2 = "../relationshipSliderValue.json";

	useEffect(() => {
		axios
			.get(url)
			.then((res) => setSlideValue(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="flex flex-col">
			<div className="absolute right-10 z-40 mt-5 flex w-96 items-center justify-end gap-5">
				<Link to="/select-generator">
					<p
						className="rounded-l-3xl border-2 border-lightone bg-darkone px-4 py-1 text-center text-lightone duration-150 hover:border-darkone hover:bg-lightone hover:text-darkone"
						title="Kembali"
						id="kembali">
						{"< Back"}
					</p>
				</Link>
				<p className="text-center text-xl lg:text-2xl">{titlePage}</p>
			</div>
			<div className="mt-28"></div>
			<div className="absolute top-20 left-1/2 flex -translate-x-4 gap-2 opacity-60 transition delay-75 duration-300 hover:opacity-90">
				<button
					className="flex cursor-pointer flex-row items-center gap-2 rounded-xl bg-darkone px-4 py-1 text-center text-sm text-lightone hover:border-darkone hover:bg-lightone hover:text-darkone"
					onClick={downloadImage}
					title="Generate">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-cloud-download-fill"
						viewBox="0 0 16 16">
						{" "}
						<path
							fill-rule="evenodd"
							d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
						/>{" "}
					</svg>
					Generate!
				</button>
			</div>
			<div className="mx-auto flex flex-row items-start gap-10">
				<div className="flex h-auto flex-col items-end justify-center gap-5">
					<div
						id="generator"
						ref={generator}
						className="relative flex h-[30rem] w-[45rem] flex-row gap-10 rounded-2xl bg-gradient-to-r from-temp1 to-temp4 font-courgette text-lightone">
						<div className="flex flex-col">
							<AddPP />

							<div className="absolute top-72 left-12 z-40 flex h-fit max-h-16 w-48 justify-center overflow-hidden rounded-lg border-4 border-lightone bg-darkone bg-opacity-60 p-2">
								<p className="flex items-center text-center text-lg">
									{nameInput}
								</p>
							</div>
							<div>
								<p className="absolute bottom-2 left-2 flex flex-row gap-1 rounded-xl bg-white bg-opacity-90 p-2 text-xs text-darkone">
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
						</div>

						<div className="absolute left-[24rem] top-8 flex h-1/2 w-auto flex-col gap-7 text-[10px]">
							{slideValue.map((slider, index) => (
								<div className="flex flex-row items-center" key={index}>
									<p className="absolute -left-28 flex w-20 justify-center rounded-sm bg-white bg-opacity-75 px-1 text-center text-darkone">
										{slider.sliderTitle}
									</p>
									<ProgressBar
										completed={slider.fungsiValue}
										bgColor="#0A2647"
										height="5px"
										width="300px"
										labelAlignment="outside"
										isLabelVisible={false}
									/>
									<div className="absolute flex -translate-x-4 translate-y-4 flex-row">
										<p className="w-28 text-left">{slider.lowerState}</p>
										<p className="w-28 text-center">{slider.middleState}</p>
										<p className="w-28 text-right">{slider.upperState}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="flex h-[30rem] -translate-y-4 flex-col gap-5 overflow-y-auto">
					<p className="flex justify-center text-center text-2xl underline">
						What's Your OC's Name?
					</p>
					<div className="flex h-auto flex-col items-center justify-center gap-5 rounded-xl border-4 border-darkone p-5 text-center">
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
					<div className="flex h-96 flex-col gap-10 overflow-y-auto rounded-xl border-4 border-darkone p-5">
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
