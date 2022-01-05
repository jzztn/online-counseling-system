import { PaperAirplaneIcon } from '@heroicons/react/solid'

const Chat = () => {
	return (
		<div className="h-screen grid grid-rows-[auto,1fr,auto] gap-4 rounded-lg px-20">
			<div className="py-2 mt-4 border-b-gray border-t-0 border-l-0 border-r-0 border-[1px]">
				<h1 className="text-lg tracking-wider">Hayag, Shain Custodia</h1>
			</div>

			<div>
				<h1>CHAT</h1>
			</div>

			<div className="grid grid-cols-[1fr,auto] gap-6 items-center my-10">
				<input type="text" placeholder="Write your Message Here.." className="border-gray border-[1px] rounded-lg outline-none py-5 pl-4" />
				<PaperAirplaneIcon className="h-8 w-8 rotate-45 mx-2 mr-8 text-button cursor-pointer" />
			</div>
		</div>
	)
}

export default Chat
