import React, { useState } from "react";
import ImageUploading from "react-images-uploading";

import baseImg from "../assets/baseImg.png";

const AddPP = () => {
	const [images, setImages] = useState([]);

	const onChange = (imageList) => {
		setImages(imageList);
	};

	const onError = (error, files) => {
		console.log(error, files);
	};

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
					<div className="flex flex-col">
						{imageList[0] ? null : (
							<div className="absolute right-0 flex h-96 w-1/4 overflow-hidden border-l-8 border-l-nearblue">
								<button
									onClick={onImageUpload}
									className="flex cursor-pointer justify-end">
									<img
										src={baseImg}
										className="flex h-full rounded-r-2xl object-cover"
										alt="ocPp"
										title="Click to Insert Image"
									/>
								</button>
							</div>
						)}
						<div>
							{imageList.map((image, index) => (
								<>
									<div
										key={index}
										className="absolute right-0 flex h-96 w-1/4 overflow-hidden border-l-8 border-l-nearblue">
										<button
											onClick={() => onImageUpdate(index)}
											className="flex cursor-pointer justify-end">
											<img
												src={image["data_url"]}
												className="flex h-full rounded-r-2xl object-cover"
												alt="OC PP"
												title="Click for Update; Remove button above"
											/>
										</button>
									</div>
									<div className="absolute top-5 right-7 flex flex-col justify-end gap-5 opacity-0 transition delay-75 duration-300 hover:opacity-90">
										<button
											className="cursor-pointer rounded-xl bg-[#010440] py-2 px-5 text-center text-sm hover:border-[#010440] hover:bg-[#D9D9D9] hover:text-[#010440]"
											onClick={() => onImageRemove(index)}>
											Remove
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
