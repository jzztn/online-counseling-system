const Card = ({ profile, name, degree, degree2, email }: any) => {
	return (
		<div className="bg-gradient-to-b from-green-100 to-lightgreen grid grid-flow-rows gap-4 text-center py-10 rounded-lg">
			<div>
				<img src={profile} alt="profile" className="w-20 h-20 lg:w-24 lg:h-24 mx-auto rounded-full" />
			</div>

			<div className="flex flex-col mt-8">
				<h1 className="text-xl font-semibold tracking-wide mb-6">{name}</h1>
				<h1 className="text-sm font-light mx-6">{degree}</h1>
				<h1 className="text-sm font-light mt-2 mx-6">{degree2}</h1>
			</div>

			<div>
				<h1 className="text-sm font-extralight mt-16 mx-6">{email}</h1>
			</div>
		</div>
	)
}

export default Card
