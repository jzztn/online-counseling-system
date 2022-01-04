import Link from "next/link"

const Hero = () => {
	return (
		<div className="h-screen bg-hero bg-no-repeat bg-cover bg-opacity-50 lg:bg-opacity-100 grid xl:grid-cols-[1fr,1fr] justify-center items-center">
			<div className="hidden xl:block"></div>
			<div>
				<div className="grid gap-8 xl:ml-32">
					<div className="flex flex-col gap-3 text-center ">
						<h1 className="text-6xl lg:text-7xl font-extralight tracking-wide">A simple ways</h1>
						<p className="text-lg font-thin tracking-wider">to bring you peace and harmony to your life</p>
					</div>

					<div className="grid gap-2 justify-center">
						<Link href={'/signup'}><button className="py-4 bg-white rounded-sm tracking-wider  hover:bg-button hover:text-white transition-colors duration-200">SIGN UP</button></Link>
						<Link href={'/login'}><button className="py-4 px-36 bg-button rounded-sm tracking-wider hover:text-white transition-colors duration-200">LOG IN</button></Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
