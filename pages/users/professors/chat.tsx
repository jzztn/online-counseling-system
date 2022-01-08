import ChatDetails from '../../../components/chat/ChatDetails'
import ProfNavbar from '../../../components/navbar/ProfNavBar'

const Chat = () => {
	return (
		<div className="h-screen grid grid-rows-[auto,1fr] py-10">
			<ProfNavbar />

			<div className="flex flex-col gap-10 py-10 px-8">
				<input type={'text'} placeholder="Search.." className="outline-none border-b-gray border-[1px] border-l-0 border-t-0 border-r-0 py-3 pl-2 placeholder:text-sm placeholder:text-opacity-10" />
				<div className="grid grid-flow-row gap-6 justify-center">
					<ChatDetails
						firstName="Keithlyn"
						lastName="Bay"
						message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
					/>

					<ChatDetails
						firstName="John Reil"
						lastName="Labiang"
						message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
					/>

					<ChatDetails
						firstName="Efrelhet"
						lastName="Siarez"
						message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
					/>

					<ChatDetails
						firstName="Efrelhet"
						lastName="Siarez"
						message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
					/>

					<ChatDetails
						firstName="Jonel"
						lastName="Camalig"
						message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
					/>

					<ChatDetails
						firstName="Louziela"
						lastName="Masana"
						message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
					/>

					<ChatDetails
						firstName="Shain"
						lastName="Hayag"
						message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
					/>
				</div>

			</div>
		</div>
	)
}

export default Chat
