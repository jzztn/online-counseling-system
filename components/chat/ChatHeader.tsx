
const ChatHeader = ({ lastName, firstName, email }: any) => {
	return (
		<div className="p-6 mt-4 bg-button text-white flex flex-col">
			<h1 className="text-lg tracking-wide font-semibold">{firstName}, {lastName}</h1>
			<h1 className="text-sm tracking-wide">{email}</h1>
		</div>
	)
}

export default ChatHeader
