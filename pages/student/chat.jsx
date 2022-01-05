import SideBar from "../../components/navbar/SideBar"
import { PaperAirplaneIcon } from '@heroicons/react/solid'

const Chat = () => {
	return (
		<div className="h-full grid grid-cols-[auto,1fr] py-10">
			<SideBar />

			<div className="grid grid-rows-[auto,1fr,auto] rounded-lg px-10">
				<div className="px-4 py-2 mt-4 border-b-gray border-t-0 border-l-0 border-r-0 border-[1px]">
					<h1 className="text-lg tracking-wider">Hayag, Shain Custodia</h1>
				</div>

				<div>
					<h1 className="p-3">CHAT</h1>
				</div>

				<div className="grid grid-cols-[1fr,auto] gap-6 items-center my-10">
					<input type="text" placeholder="Write your Message Here.." className="border-gray border-[1px] rounded-lg outline-none py-5 pl-4" />
					<PaperAirplaneIcon className="h-8 w-8 rotate-45 mx-2 text-button cursor-pointer" />
				</div>
			</div>
		</div>
	)
}

export default Chat
