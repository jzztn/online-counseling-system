import Details from "../../components/Details"


const Index = () => {
	return (
		<div className="h-screen grid grid-rows-[1fr,auto] items-center p-20">
			<Details
				lastName="De Ramos"
				firstName="Rancesca Nhadine"
				email="rnderamos@cvsu.edu.ph"
				schedule="Monday 5-7pm"
			/>

			<div>
				<button className="bg-button py-4 px-6 text-white text-sm tracking-wide rounded-sm">SET TO AVAILABLE AGAIN</button>
			</div>

		</div>
	)
}

export default Index
