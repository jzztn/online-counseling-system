import ChatHeader from '../components/chat/ChatHeader'
import { PaperAirplaneIcon } from '@heroicons/react/solid'

const ChatBox = () => {
	return (
		<div className="h-full grid grid-rows-[auto,1fr,auto] rounded-lg px-2 ">
			<ChatHeader
				lastName="Bay"
				firstName="Keithlyn"
				email="keithlynbay@cvsu.edu.ph"
			/>

			<div>
				<h1 className="p-3">CHAT</h1>
			</div>

			<div className="grid grid-cols-[1fr,auto] items-center my-10">
				<input type="text" placeholder="Write your Message Here.." className="border-gray border-[1px] outline-none py-5 pl-4" />

				<div className='bg-button h-full px-8 lg:px-10 grid justify-center items-center'>
					<PaperAirplaneIcon className=" w-6 h-6 lg:h-7 lg:w-7 rotate-45 text-white cursor-pointer" />
				</div>
			</div>
		</div>
	)
}

export default ChatBox