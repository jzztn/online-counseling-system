import { PencilIcon } from '@heroicons/react/outline'
import StudentNavbar from '../../../components/navbar/StudentNavbar'

const Profile = () => {
	return (
		<div className="h-full grid grid-rows-[auto,1fr] gap-20 py-10">
			<StudentNavbar />

			<div className="grid grid-rows-[auto,1fr,auto] gap-20 px-10">
				<div className="border-b-gray border-[1px] border-t-0 border-l-0 border-r-0">
					<h1 className="text-xl font-semibold tracking-wide mb-2">De Ramos, Rancesca</h1>
				</div>

				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-2">
						<h1 className="text-xs font-semibold text-button">First Name</h1>
						<div className="group flex gap-10">
							<h1 className="text-md">Rancesca Nhadine</h1>
							<PencilIcon className="h-5 w-5 hidden text-button group-hover:block" />
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<h1 className="text-xs font-semibold text-button">Last Name</h1>
						<div className="group flex gap-10">
							<h1 className="text-md">De Ramos</h1>
							<PencilIcon className="h-5 w-5 hidden text-button group-hover:block" />
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<h1 className="text-xs font-semibold text-button">CvSU Email</h1>
						<div className="group flex gap-10">
							<h1 className="text-md">rnderamos@cvsu.edu.ph</h1>
							<PencilIcon className="h-5 w-5 hidden text-button group-hover:block" />
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<h1 className="text-xs font-semibold text-button">Password</h1>
						<div className="group flex gap-10">
							<input type="password" className=" border-none outline-none " value={"rnderamos20010314"} />
							<PencilIcon className="h-5 w-5 hidden text-button group-hover:block" />
						</div>
					</div>

				</div>

				<div>
					<button className="py-3 px-16 bg-gradient-to-r from-lightgreen to-button text-white rounded-md tracking-wider hover:text-white transition-colors duration-200">SAVE</button>
				</div>
			</div>
		</div>
	)
}
export default Profile
