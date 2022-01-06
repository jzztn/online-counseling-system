import Details from "../../../components/Details"


const Index = () => {
	return (
		<div className="h-screen grid grid-rows-[auto,1fr] items-center p-20">
			<Details
				lastName="De Ramos"
				firstName="Rancesca Nhadine"
				email="rnderamos@cvsu.edu.ph"
				schedule="Monday 5-7pm"
			/>

			<div>
				<button className="bg-button py-4 px-6 text-white text-sm tracking-wide rounded-sm hover:font-semibold transition-all duration-500">SET TO AVAILABLE AGAIN</button>
			</div>

		</div>
	)
}

export default Index
