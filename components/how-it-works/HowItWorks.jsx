const HowItWorks = () => {
	return (
		<div className="h-screen bg-how bg-no-repeat bg-cover grid grid-rows-[auto,1fr] opacity-90 justify-center items-center">
			<h1 className="text-3xl lg:text-5xl text-center text-white mt-32">HOW IT WORKS?</h1>

			<div className="flex flex-col text-center gap-10 lg:gap-20">
				<div className="flex gap-6 lg:gap-10 items-center">
					<span className="text-xl font-semibold bg-button text-center px-8 py-5 rounded-full">1</span>
					<h1 className="text-xl lg:text-2xl font-medium tracking-wide text-white">Create an account with your CvSu Mail</h1>
				</div>

				<div className="flex gap-6 lg:gap-10 items-center">
					<span className="text-xl font-semibold bg-button text-center px-8 py-5 rounded-full">2</span>
					<h1 className="text-xl lg:text-2xl font-medium text-md lg:tracking-wide text-white">Choose your appointment Schedule</h1>
				</div>

				<div className="flex gap-6 lg:gap-10 items-center">
					<span className="text-xl font-semibold bg-button text-center px-8 py-5 rounded-full">3</span>
					<h1 className="text-xl lg:text-2xl font-medium tracking-wide text-white">Choose your preffered Guidance Facilitator</h1>
				</div>
			</div>
		</div>
	)
}

export default HowItWorks
