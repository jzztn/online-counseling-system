import Link from "next/link"
import { MenuAlt2Icon } from '@heroicons/react/solid'

const SideBar = () => {
	return (
		<div className="grid grid-cols-[auto,1fr]">
			<div className="hidden h-full bg-sideBar grid-rows-[1fr,auto] py-8 px-16 lg:block group-hover:block transition-all duration-700">
				<ul className=" flex flex-col gap-6">
					<div className="group">
						<Link href={'/student/profile'}><li className="cursor-pointer text-white">Edit Profile</li></Link>
						<div className="bg-white w-0 h-1 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:w-full"></div>
					</div>

					<div className="group">
						<Link href={'/student/appointment'}><li className="cursor-pointer text-white">Session Appointments</li></Link>
						<div className="bg-white w-0 h-1 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:w-full"></div>
					</div>

					<div className="group">
						<Link href={'/student/chat'}><li className="cursor-pointer text-white ">Chat</li></Link>
						<div className="bg-white w-0 h-1 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:w-full"></div>
					</div>
				</ul>

				<Link href={"/"}><div className="text-md cursor-pointer text-white">Log Out</div></Link>

			</div>

			<div className="group lg:hidden ml-auto z-10">
				<MenuAlt2Icon className="h-8 w-8 text-button ml-4" />

				<div className="absolute top-0 left-0 bg-button h-full w-72 hidden py-6 group-hover:block transition-all duration-700">
					<ul className="flex flex-col gap-12 text-center mt-20">
						<Link href={'/student/profile'}><h1 className="text-lg text-white tracking-wide cursor-pointer hover:bg-white hover:bg-opacity-30 py-4 transition-all duration-500">Profile</h1></Link>
						<Link href={'/student/appointment'}><h1 className="text-lg text-white tracking-wide cursor-pointer hover:bg-white hover:bg-opacity-30 py-4 transition-all duration-500">Set Appointment</h1></Link>
						<Link href={'/student/chat'}><h1 className="mb-96 text-lg text-white tracking-wide cursor-pointer hover:bg-white hover:bg-opacity-30  py-4 transition-all duration-500">Chat</h1></Link>
						<Link href={'/'}><h1 className="text-white tracking-wide cursor-pointer hover:bg-white hover:bg-opacity-30  py-4 transition-all duration-500">Log Out</h1></Link>
					</ul>
				</div>
			</div>
		</div>
	)
}
export default SideBar
