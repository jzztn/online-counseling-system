const SideBar = () => {
	return (
		<div className="bg-lightgreen grid grid-rows-[1fr,auto] justify-center py-8 px-12">
			<ul className="flex flex-col gap-10 text-md tracking-wide">
				<h1>Edit Profile</h1>
				<h1>Session Appointments</h1>
				<h1>Chat</h1>
			</ul>

			<div className="text-md">Log Out</div>
		</div>
	)
}
export default SideBar
