import Link from "next/link"

const Hero = () => {
	return (
		<div className="h-screen bg-hero bg-no-repeat bg-cover bg-opacity-50 lg:bg-opacity-100 grid xl:grid-cols-[1fr,1fr] justify-center items-center">
			<div className="hidden xl:block"></div>
			<div>
				<div className="grid gap-8 xl:ml-32 px-10">
					<div className="flex flex-col gap-3 text-center ">
						<h1 className="text-6xl lg:text-7xl font-medium lg:font-extralight tracking-wide">A simple ways</h1>
						<p className="text-lg font-thin tracking-wider">to bring you peace and harmony to your life</p>
					</div>

					<div className="grid gap-2 md:justify-center">
						<Link href={'/signup'}><button className="py-5 w-full bg-white rounded-sm tracking-wider text-sm md:text-md hover:bg-button hover:text-white transition-colors duration-200 md:px-24">SIGN UP</button></Link>
						<Link href={'/login'}><button className="py-5 w-full bg-button rounded-sm tracking-wider text-sm md:text-md text-white transition-colors duration-200 md:px-24">LOG IN</button></Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
