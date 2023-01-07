import React, { useState } from "react";
import ImageUploading from "react-images-uploading";

const AddPP = ({ dataURLKey }) => {
	const [images, setImages] = useState([]);
	const maxNumber = 1;

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};

	return (
		<div className="">
			<ImageUploading
				multiple
				value={images}
				acceptType={["jpg", "jpeg", "png"]}
				resolutionType={"ratio"}
				resolutionWidth={1}
				resolutionHeight={1}
				onChange={onChange}
				maxNumber={maxNumber}
				dataURLKey="data_url">
				{(
					{
						imageList,
						onImageUpload,
						onImageUpdate,
						onImageRemove,
						isDragging,
						dragProps,
					} // write your building UI
				) => (
					<div className="flex flex-col">
						{imageList[0] ? null : (
							<div className="mx-auto flex flex-row justify-center gap-4">
								<button
									className="cursor-pointer rounded-xl border-2 border-[#D9D9D9] bg-[#010440] py-2 px-5 text-center text-xl hover:border-[#010440] hover:bg-[#D9D9D9] hover:text-[#010440]"
									style={isDragging ? { color: "red" } : undefined}
									onClick={onImageUpload}
									{...dragProps}>
									Click or Drop here
								</button>
							</div>
						)}
						<div>
							{imageList.map((image, index) => (
								<div
									key={index}
									className="flex flex-col items-center justify-center gap-4">
									<img src={image["data_url"]} alt="" width="300" />
									<div className="flex flex-row gap-2">
										<button
											className="cursor-pointer rounded-xl border-2 border-[#D9D9D9] bg-[#010440] py-2 px-5 text-center text-xl hover:border-[#010440] hover:bg-[#D9D9D9] hover:text-[#010440]"
											onClick={() => onImageUpdate(index)}>
											Update
										</button>
										<button
											className="rounded-xl bg-[#010440] p-2 text-center hover:bg-[#D9D9D9] hover:text-[#010440]"
											onClick={() => onImageRemove(index)}>
											Remove
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</ImageUploading>
		</div>
	);
};

export default AddPP;
