const HowItWorks = () => {
	return (
		<div className="h-screen bg-how bg-no-repeat bg-cover grid grid-rows-[auto,1fr]  justify-center items-center">
			<h1 className="text-3xl font-semibold lg:text-4xl text-center text-white mt-32">HOW IT WORKS?</h1>

			<div className="flex flex-col text-center gap-10 mx-10 lg:gap-20">
				<div className="flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-10 items-center">
					<span className="text-xl font-semibold bg-button text-center text-white px-6 py-4 lg:px-8 lg:py-5 rounded-full">1</span>
					<h1 className="text-xl lg:text-2xl font-semibold tracking-wide text-white">Create an account with your CvSu Mail</h1>
				</div>

				<div className="flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-10 items-center">
					<span className="text-xl font-semibold bg-button text-center text-white px-6 py-4 lg:px-8 lg:py-5 rounded-full">2</span>
					<h1 className="text-xl lg:text-2xl font-semibold text-md lg:tracking-wide text-white">Choose your appointment Schedule</h1>
				</div>

				<div className="flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-10 items-center">
					<span className="text-xl font-semibold bg-button text-center  text-white px-6 py-4 lg:px-8 lg:py-5 rounded-full">3</span>
					<h1 className="text-xl lg:text-2xl font-semibold tracking-wide text-white">Choose your preffered Guidance Facilitator</h1>
				</div>
			</div>
		</div>
	)
}

export default HowItWorks
