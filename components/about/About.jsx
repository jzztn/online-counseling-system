const About = () => {
	return (
		<div className="grid lg:grid-cols-[1fr,1fr] py-56 lg:py-72  px-10 justify-center items-center gap-20 text-center lg:gap-0">
			<div className="justify-center hidden lg:block">
				<img src="/about.png" alt="about" className="rounded-full h-full w-full" />
			</div>

			<div className="flex flex-col gap-8 text-left">
				<h1 className="text-3xl lg:text-4xl tracking-wider">ABOUT</h1>
				<div className="text-xl mt-10 lg:text-2xl xl:text-3xl">
					<p>Cavite State University General Trias City Campus</p>
					<p>Guidance and Counseling</p>
				</div>
				<p className="lg:text-lg lg:leading-relaxed">Develop and Understand your thought patterns. The centers aim is to help people who ask for help, advices
					and guidance. Usually an emotional crisis can strike us either because of some past or recent events that trigger it, the reasons may be hidden deep down in your consciousness.
				</p>
			</div>
		</div>
	)
}

export default About
