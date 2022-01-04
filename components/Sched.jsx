const Sched = ({ profile, name, day, day2, time, time2 }) => {
	return (
		<div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-6 items-center border-b-gray border-[1px] border-t-0 border-l-0 border-r-0 pb-4">
			<div>
				<img src={profile} alt="profile" className="w-24 h-24 mx-auto rounded-full mr-5 lg:mr-12" />
			</div>

			<h1 className="text-lg font-semibold mb-6 text-left">{name}</h1>

			<div className="flex flex-col text-left lg:items-center">
				<h1 className="text-sm font-extralight">{day}</h1>
				<h1 className="text-sm font-extralight">{day2}</h1>
			</div>

			<div className="flex flex-col text-left lg:items-center lg:gap-2">
				<h1 className="text-sm font-extralight">{time}</h1>
				<h1 className="text-sm font-extralight">{time2}</h1>
			</div>
		</div>
	)
}

export default Sched
