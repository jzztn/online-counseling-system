import Link from "next/link"

const Details = ({ lastName, firstName, email, schedule }: any) => {
	return (
		<div className="grid grid-rows-[1fr,auto] lg:grid-cols-[1fr,auto] gap-4 items-center">
			<div className="border-gray border-[1px] grid grid-flow-row  xl:grid-cols-[1fr,1fr,1fr] items-center">
				<div className="border-b-gray border-l-0 border-r-0 border-t-0 border-[1px] text-center px-4 py-4 tracking-wide xl:border-b-0 xl:border-l-0 xl:border-r-0 xl:border-t-0 xl:border-[1px]">{lastName}, {firstName}</div>
				<div className="border-b-gray border-l-0 border-r-0 border-t-0 border-[1px] text-center px-4 py-4 tracking-wide xl:border-l-gray xl:border-b-0 xl:border-r-0 xl:border-t-0 xl:border-[1px]">{email}</div>
				<div className="text-center px-4 py-4 tracking-wide xl:border-l-gray xl:border-b-0 xl:border-r-0 xl:border-t-0 xl:border-[1px]">{schedule}</div>
			</div>

			<Link href={'/users/professors/chat'}><button className="bg-button py-4 px-10 text-white text-sm tracking-wider rounded-sm hover:font-semibold transition-all duration-500">CHAT</button></Link>
		</div>
	)
}

export default Details

