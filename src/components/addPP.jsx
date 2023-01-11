import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import Draggable from "react-draggable";

import baseImg from "../assets/baseImg.png";

const AddPP = () => {
	const [images, setImages] = useState([]);

	const onChange = (imageList) => {
		setImages(imageList);
	};

	const onError = (error, files) => {
		console.log(error, files);
	};

	const [pos, setPos] = useState({ x: 0, y: 0, scale: 1 });

	const onScroll = (e) => {
		const delta = e.deltaY * -0.001;
		const newScale = pos.scale + delta;

		const ratio = 1 - newScale / pos.scale;

		setPos({
			scale: newScale,
			x: pos.x + (e.clientX - pos.x) * ratio,
			y: pos.y + (e.clientY - pos.y) * ratio,
		});
	};

	const [mainState, setMainState] = useState({
		activeDrags: 0,
	});

	const onStart = () => {
		setMainState({ activeDrags: ++mainState.activeDrags });
	};

	const onStop = () => {
		setMainState({ activeDrags: --mainState.activeDrags });
	};

	const dragHandlers = { onStart: onStart, onStop: onStop };

	return (
		<div className="">
			<ImageUploading
				multiple
				value={images}
				acceptType={["jpg", "jpeg", "png"]}
				onChange={onChange}
				onError={onError}
				maxNumber={1}
				maxFileSize={2000000}
				dataURLKey={"data_url"}>
				{({ imageList, onImageUpload, onImageUpdate, onImageRemove }) => (
					<div className="flex flex-col text-darkone">
						{imageList[0] ? null : (
							<>
								<div className="absolute left-8 top-10 flex h-56 w-56 overflow-hidden rounded-2xl border-4 border-lightone">
									<Draggable {...dragHandlers}>
										<div
											onWheelCapture={onScroll}
											className="flex cursor-pointer items-center justify-center object-none">
											<img
												src={baseImg}
												className="flex object-cover"
												alt="ocPp"
												title="Upload button are above"
												style={{
													transformOrigin: "0 0",
													transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
												}}
											/>
										</div>
									</Draggable>
								</div>
								<div className="absolute -top-8 flex flex-row items-center gap-2 opacity-60 transition delay-75 duration-300 hover:opacity-90">
									<p className="font-extrabold underline">Image Handler : </p>
									<button
										className="cursor-pointer rounded-xl bg-darkone px-4 py-1 text-center text-sm text-lightone hover:border-darkone hover:bg-lightone hover:text-darkone"
										onClick={onImageUpload}
										title="Upload">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-upload"
											viewBox="0 0 16 16">
											{" "}
											<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />{" "}
											<path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />{" "}
										</svg>
									</button>
								</div>
							</>
						)}
						<div>
							{imageList.map((image, index) => (
								<>
									<div
										key={index}
										className="absolute left-8 top-10 flex h-56 w-56 overflow-hidden rounded-2xl border-4 border-lightone">
										<Draggable {...dragHandlers}>
											<div
												onWheelCapture={onScroll}
												className="flex cursor-pointer items-center justify-center object-none">
												<img
													src={image["data_url"]}
													className="flex object-cover"
													alt="OC PP"
													title="Update & Remove button are above"
													style={{
														transformOrigin: "0 0",
														transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
													}}
												/>
											</div>
										</Draggable>
									</div>
									<div className="absolute -top-8 flex flex-row items-center gap-2 opacity-60 transition delay-75 duration-300 hover:opacity-90">
										<p className="font-extrabold underline">Image Handler : </p>
										<button
											className="cursor-pointer rounded-xl bg-darkone px-4 py-1 text-center text-sm text-lightone hover:border-darkone hover:bg-lightone hover:text-darkone"
											onClick={() => onImageUpdate(index)}
											title="Update">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-upload"
												viewBox="0 0 16 16">
												{" "}
												<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />{" "}
												<path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />{" "}
											</svg>
										</button>
										<button
											className="cursor-pointer rounded-xl bg-darkone px-4 py-1 text-center text-sm text-lightone hover:border-darkone hover:bg-lightone hover:text-darkone"
											onClick={() => onImageRemove(index)}
											title="Remove">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-trash"
												viewBox="0 0 16 16">
												{" "}
												<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
												<path
													fill-rule="evenodd"
													d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
												/>{" "}
											</svg>
										</button>
									</div>
								</>
							))}
						</div>
					</div>
				)}
			</ImageUploading>
		</div>
	);
};

export default AddPP;
