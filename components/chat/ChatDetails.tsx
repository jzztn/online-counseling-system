import Link from "next/link"

const ChatDetails = ({ firstName, lastName, message }: any) => {
	return (
		<Link href={'/chatbox'}>
			<div className="group grid grid-cols-[auto,1fr] gap-2 cursor-pointer">
				<div className="bg-button w-1 rounded-lg group-hover:bg-sideBar"></div>
				<div className="flex flex-col truncate">
					<h1 className="text-md font-semibold">{firstName}, {lastName}</h1>
					<h1 className="text-xs font-light text-message">{message}</h1>
				</div>
			</div>
		</Link>
	)
}

export default ChatDetails
