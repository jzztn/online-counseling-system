import Link from "next/link"
import { MenuAlt3Icon } from '@heroicons/react/solid'

const StudentNavbar = () => {
	return (
		<div className="z-10 grid grid-cols-[auto,1fr] items-center p-6 border-b-gray border-[1px] border-t-0 border-l-0 border-r-0">
			<div className="flex flex-row gap-4 items-center">
				<div>
					<img src="/logo.png" alt="cvsu logo" className="w-14 h-14 lg:w-20 lg:h-20" />
				</div>

				<div className="flex flex-col text-sm md:text-md lg:text-lg">
					<h1>CvSU General Trias City</h1>
					<h1>Guidance and Counseling</h1>
				</div>
			</div>

			<div className="hidden ml-auto lg:flex gap-8 tracking-wide">
				<div className="group">
					<Link href={'/users/students/profile'}><h1 className="relative cursor-pointer text-lg">Edit Profile</h1></Link>
					<div className="bg-button w-0 h-1 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:w-full"></div>
				</div>

				<div className="group">
					<Link href={'/users/students/appointment'}><h1 className="cursor-pointer text-lg">Set Appointment</h1></Link>
					<div className="bg-button w-0 h-1 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:w-full"></div>
				</div>

				<div className="group">
					<Link href={'/users/students/chat'}><h1 className="cursor-pointer text-lg">Chats</h1></Link>
					<div className="bg-button w-0 h-1 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:w-full"></div>
				</div>

				<div className="group">
					<Link href={'/'}><h1 className="cursor-pointer text-lg">Logout</h1></Link>
					<div className="bg-button w-0 h-1 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:w-full"></div>
				</div>
			</div>

			<div className="group lg:hidden ml-auto">
				<MenuAlt3Icon className="h-8 w-8 text-button" />

				<div className="absolute top-0 right-0 bg-button h-full w-64 hidden py-6 group-hover:block transition-all duration-700">
					<ul className="flex flex-col gap-12 text-center mt-20">
						<Link href={'/users/students/profile'}><h1 className="text-lg text-white tracking-wide cursor-pointer hover:bg-white hover:bg-opacity-30 py-4 transition-all duration-500">Edit Profile</h1></Link>
						<Link href={'/users/students/appointment'}><h1 className="text-lg text-white tracking-wide cursor-pointer hover:bg-white hover:bg-opacity-30 py-4 transition-all duration-500">Set Appointment</h1></Link>
						<Link href={'/users/students/chat'}><h1 className="text-lg text-white tracking-wide cursor-pointer hover:bg-white hover:bg-opacity-30  py-4 transition-all duration-500">Chats</h1></Link>
						<Link href={'/'}><h1 className="text-lg text-white tracking-wide cursor-pointer hover:bg-white hover:bg-opacity-30  py-4 transition-all duration-500">Logout</h1></Link>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default StudentNavbar
