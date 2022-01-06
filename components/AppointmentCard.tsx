const AppointmentCard = ({ profile, name, degree, degree2, sched, sched2 }: any) => {
	return (
		<div className="bg-gradient-to-b from-green-100 to-lightgreen grid grid-flow-rows gap-4 text-center p-10 rounded-lg">
			<div>
				<img src={profile} alt="profile" className="w-20 h-20 lg:w-24 lg:h-24 mx-auto rounded-full" />
			</div>

			<div className="flex flex-col mt-8">
				<h1 className="text-xl font-semibold tracking-wide mb-6">{name}</h1>
				<h1 className="text-sm font-light">{degree}</h1>
				<h1 className="text-sm font-light mt-2">{degree2}</h1>
			</div>

			<div className="flex flex-col gap-2">
				<h1 className="text-sm font-light mt-10">{sched}</h1>
				<h1 className="text-sm font-light">{sched2}</h1>
			</div>

			<button className="mt-8 py-5 bg-button rounded-sm text-white text-sm tracking-wide hover:font-semibold transition-colors duration-200"> SET APPOINTMENT</button>
		</div>
	)
}

export default AppointmentCard
