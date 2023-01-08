import React, { useState } from "react";
import ImageUploading from "react-images-uploading";

const AddPP = () => {
	const [images, setImages] = useState([]);

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};

	console.log(images)
	
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
				{({
					imageList,
					onImageUpload,
					onImageUpdate,
					onImageRemove,
					isDragging,
					dragProps,
				}) => (
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
									<a href={image["data_url"]} target="_blank">
										<img
											id="oc-pp"
											src={image["data_url"]}
											alt="OC PP"
											width="300"
										/>
									</a>
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
