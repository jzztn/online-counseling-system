import Link from "next/link"

const Login = () => {
	return (
		<div className="h-full bg-login bg-cover bg-no-repeat grid justify-center items-center p-10">
			<div className="bg-black bg-opacity-30 p-8 grid grid-rows-[auto,1fr,auto,auto] gap-8 rounded-xl">
				<div>
					<h1 className="text-white text-center text-2xl md:text-3xl">You are not Alone</h1>
				</div>

				<div>
					<div>
						<input
							type={"text"}
							placeholder="First Name"
							className="border-none outline-none  py-4 pl-3  rounded-md w-full placeholder:text-opacity-20 placeholder:text-sm"
						/>

						<div className="text-red-400 text-xs mt-1 tracking-wide">This field should not be empty</div>
					</div>

					<div>
						<input
							type={"text"}
							placeholder="Last Name"
							className="mt-4 border-none outline-none py-4 pl-3  rounded-md w-full placeholder:text-opacity-20 placeholder:text-sm"
						/>
						<div className="text-red-400 text-xs mt-1 tracking-wide">This field should not be empty</div>
					</div>


					<div>
						<input type={"text"} placeholder="CvSU Mail" className="mt-4 border-none outline-none py-4 pl-3  rounded-md w-full placeholder:text-opacity-20 placeholder:text-sm " />
						<div className="text-red-400 text-xs mt-1 tracking-wide">This field should not be empty</div>
					</div>

					<div>
						<input
							type={"password"}
							placeholder="Create Password"
							className="mt-4 border-none outline-none  py-4 pl-3  rounded-md w-full placeholder:text-opacity-20 placeholder:text-sm"
						/>
						<div className="text-red-400 text-xs mt-1 tracking-wide">This field should not be empty</div>
					</div>
				</div>

				<button className="bg-button py-4 text-white text-sm rounded-md tracking-wider hover:font-semibold transition-all duration-500">SIGN UP</button>
				<Link href={'/login'}><span className="text-white text-md text-center tracking-wide opacity-75 cursor-pointer hover:text-button transition-colors duration-300">Already have an account?</span></Link>
			</div>
		</div>
	)
}
export default Login
