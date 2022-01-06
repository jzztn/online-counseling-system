import { PaperAirplaneIcon } from '@heroicons/react/solid'
import ChatHeader from '../../../components/ChatHeader'

const Chat = () => {
	return (
		<div className="h-screen grid grid-rows-[auto,1fr,auto] gap-4 px-20">
			<ChatHeader
				lastName="De Ramos"
				firstName="Rancesca Nhadine"
				email="rnderamos@cvsu.edu.ph"
			/>

			<div>
				<h1>CHAT</h1>
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

export default Chat
