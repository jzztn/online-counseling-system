import Link from "next/link"

const Login = () => {
	return (
		<div className="h-full bg-login bg-cover bg-no-repeat grid justify-center items-center">
			<div className="bg-black bg-opacity-30 p-8 grid grid-rows-[auto,1fr,auto] justify-center items-center gap-8 rounded-xl">
				<div>
					<h1 className="text-white text-center text-3xl">You are not Alone</h1>
				</div>

				<div className="grid gap-4">
					<input placeholder="First Name" className="border-none outline-none w-96 py-4 pl-3  rounded-md placeholder:text-opacity-20" />
					<input placeholder="Last Name" className="border-none outline-none py-4 pl-3  rounded-md placeholder:text-opacity-20" />
					<input placeholder="CvSU Mail" className="border-none outline-none py-4 pl-3  rounded-md placeholder:text-opacity-20" />
					<input placeholder="Create Password" className="border-none outline-none py-4 pl-3 rounded-md placeholder:text-opacity-20" />
				</div>

				<button className="bg-button py-4 text-white text-md rounded-md tracking-wider hover:font-semibold transition-all duration-700">SIGN UP</button>
				<Link href={'/login'}><span className="text-white text-sm text-center tracking-wide opacity-75 cursor-pointer hover:text-button transition-colors duration-300">Already have an account?</span></Link>
			</div>
		</div>
	)
}
export default Login
