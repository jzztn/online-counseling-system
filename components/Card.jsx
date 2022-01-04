const Card = ({ profile, name, degree, degree2, email }) => {
	return (
		<div className="grid grid-flow-row gap-4 text-center w-[400px] py-10 bg-gradient-to-b from-green-100 to-lightgreen rounded-lg">
			<div>
				<img src={profile} alt="profile" className="w-32 h-32 mx-auto rounded-full" />
			</div>

			<div className="flex flex-col mt-8">
				<h1 className="text-xl font-semibold tracking-wider mb-6">{name}</h1>
				<h1 className="text-sm font-extralight">{degree}</h1>
				<h1 className="text-sm font-extralight mt-2">{degree2}</h1>
			</div>

			<div>
				<h1 className="text-sm font-extralight mt-20">{email}</h1>
			</div>
		</div>
	)
}

export default Card
