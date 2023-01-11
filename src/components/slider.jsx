import ReactSlider from "react-slider";

const Slider = ({
	fungsi,
	sliderName,
	lowerState,
	middleState,
	upperState,
}) => {
	return (
		<div className="border-4 border-darkone p-5">
			<h2 className="underline">{sliderName}</h2>
			<div className="mt-2 flex flex-row">
				<p className="flex w-1/3 justify-start text-left">{lowerState}</p>
				<p className="flex w-1/3 justify-center text-center">{middleState}</p>
				<p className="flex w-1/3 justify-end text-right">{upperState}</p>
			</div>

			<ReactSlider
				className="flex h-auto max-w-screen-sm border-2 border-temp3"
				thumbClassName="w-10 border-4 border-temp4 text-center bg-lightone cursor-pointer"
				trackClassName="trackColor"
				renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
				onAfterChange={(e) => fungsi(sliderName, e)}
			/>
		</div>
	);
};
export default Slider;
