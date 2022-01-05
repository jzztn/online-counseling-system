const Sched = ({ profile, name, day, day2, time, time2 }) => {
	return (
		<div className="bg-gradient-to-b from-green-100 to-lightgreen rounded-lg grid grid-flow-rows md:grid-cols-[1fr,1fr,1fr,1fr] gap-6 items-center p-10">
			<div>
				<img src={profile} alt="profile" className="w-20 h-20 lg:w-24 lg:h-24 mx-auto rounded-full" />
			</div>

			<h1 className="text-lg font-semibold mb-4 text-center lg:text-left">{name}</h1>

			<div className="flex flex-col text-center lg:items-center">
				<h1 className="text-sm font-light">{day}</h1>
				<h1 className="text-sm font-light">{day2}</h1>
			</div>

			<div className="flex flex-col text-center lg:items-center lg:gap-2">
				<h1 className="text-sm font-light">{time}</h1>
				<h1 className="text-sm font-light">{time2}</h1>
			</div>
		</div>
	)
}

export default Sched
