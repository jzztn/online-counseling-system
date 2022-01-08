import Link from "next/link"
import { MenuAlt2Icon } from '@heroicons/react/solid'

const SideBar = () => {
	return (
		<div className="h-screen grid grid-cols-[auto,1fr]">
			<div className="hidden bg-button py-10 lg:block group-hover:block">
				<ul className="flex flex-col gap-8 w-72 mb-96">
					<Link href={'/users/students/home'}><li className="cursor-pointer text-white hover:bg-white hover:bg-opacity-20 w-full py-4 pl-16 transition-all duration-500">Edit Profile</li></Link>
					<Link href={'/users/students/appointment'}><li className="cursor-pointer text-white hover:bg-white hover:bg-opacity-20 w-full py-4 pl-16 transition-all duration-500">Session Appointments</li></Link>
					<Link href={'/users/students/chat'}><li className="cursor-pointer text-white hover:bg-white hover:bg-opacity-20 w-full py-4 pl-16 transition-all duration-500">Chat</li></Link>
				</ul>

				<Link href={'/'}><button className="cursor-pointer text-white hover:bg-white hover:bg-opacity-20 w-full py-4 text-left pl-16 transition-all duration-500">LOG OUT</button></Link>
			</div>

			{/* Mobile */}
			<div className="group lg:hidden ml-auto z-10">
				<MenuAlt2Icon className="h-8 w-8 text-button ml-4" />

				<div className="absolute top-0 left-0 h-screen bg-button w-72 hidden py-10 group-hover:block">
					<ul className="flex flex-col gap-8 w-72 mb-96">
						<Link href={'/users/students/home'}><h1 className="cursor-pointer text-white hover:bg-white hover:bg-opacity-20 w-full py-4 pl-16 transition-all duration-500">Edit Profile</h1></Link>
						<Link href={'/users/students/appointment'}><h1 className="cursor-pointer text-white hover:bg-white hover:bg-opacity-20 w-full py-4 pl-16 transition-all duration-500">Set Appointment</h1></Link>
						<Link href={'/users/students/chat/'}><h1 className="cursor-pointer text-white hover:bg-white hover:bg-opacity-20 w-full py-4 pl-16 transition-all duration-500">Chat</h1></Link>
					</ul>

					<Link href={'/'}><button className="cursor-pointer text-white hover:bg-white hover:bg-opacity-20 w-full py-4 text-left pl-16 transition-all duration-500">LOG OUT</button></Link>
				</div>
			</div>
		</div>
	)
}
export default SideBar
