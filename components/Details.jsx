import Link from "next/link"
const Details = ({ lastName, firstName, email, schedule }) => {
	return (
		<div className="grid grid-cols-[1fr,auto] gap-4">
			<div className="border-gray border-[1px] border-l-0 grid grid-cols-[1fr,1fr,1fr]">
				<div className="border-l-gray border-t-0 border-r-0 border-b-0 border-[1px] text-center px-4 py-4 tracking-wide">{lastName, firstName}</div>
				<div className="border-l-gray border-t-0 border-r-0 border-b-0 border-[1px] text-center px-4 py-4 tracking-wide">{email}</div>
				<div className="border-l-gray border-t-0 border-r-0 border-b-0 border-[1px] text-center px-4 py-4 tracking-wide">{schedule}</div>
			</div>

			<div className="grid grid-cols-[1fr,1fr] gap-4">
				<Link href={'/professors/chat'}><button className="bg-button py-3 px-4 text-white text-xs tracking-wide rounded-sm ">CHAT</button></Link>
				<button className="bg-button py-3 px-4 text-white text-xs tracking-wide rounded-sm ">SET AS DONE</button>
			</div>
		</div>
	)
}

export default Details

