import ReactSlider from "react-slider";

const Slider = ({ fungsi, sliderName, lowerState, middleState, upperState }) => {
	return (
		<div className="border-4 border-cyan-400 p-5">
			<h2 className="underline">{sliderName}</h2>
			<div className="mt-2 flex flex-row">
				<p className="flex w-1/3 justify-start text-left">{lowerState}</p>
				<p className="flex w-1/3 justify-center text-center">{middleState}</p>
				<p className="flex w-1/3 justify-end text-right">{upperState}</p>
			</div>

			<ReactSlider
				className="flex h-auto max-w-screen-sm border-2 border-indigo-800"
				thumbClassName="w-10 border-4 border-cyan-500 text-center bg-black cursor-pointer"
				trackClassName="trackColor"
				renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
				onAfterChange={(e) => fungsi(e)}
			/>
		</div>
	);
};
export default Slider;
