import Link from "next/link"

const Login = () => {
	return (
		<div className="h-full bg-login bg-cover bg-no-repeat grid justify-center items-center">
			<div className="bg-black bg-opacity-30 p-8 grid grid-rows-[auto,1fr,auto] gap-8 rounded-xl">
				<div>
					<h1 className="text-white text-center text-3xl">Always by your Side</h1>
				</div>

				<div>
					<input placeholder="CvSU Mail" className="border-none outline-none w-full py-4 pl-3  rounded-md placeholder:text-opacity-20" />
					<input placeholder="Password" className="mt-4 border-none outline-none w-full py-4 pl-3 rounded-md placeholder:text-opacity-20" />
				</div>

				<Link href={'/student/profile'}>
					<button className="bg-button py-4 text-white text-md rounded-md tracking-wider hover:font-semibold transition-all duration-500">
						LOG IN
					</button>
				</Link>

				<Link href={'/signup'}>
					<span className="text-white text-sm text-center tracking-wide opacity-75 cursor-pointer hover:text-button transition-colors duration-300">
						Create an Account
					</span>
				</Link>
			</div>
		</div>
	)
}
export default Login
