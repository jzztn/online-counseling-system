import Link from "next/link"

const Footer = () => {
	return (
		<div className="bg-button text-white py-12 grid justify-center items-center text-center gap-4 tracking-wider">
			<div className="flex flow-col gap-2 justify-center items-center">
				<div className="relative bg-white rounded-full grid justify-center items-center p-3 cursor-pointer">
					<Link href={'https://www.facebook.com/Guidance-Counseling-ServicesCvSUGenTri-114850117014003/'}><img src="/fb-icon.png" alt="facebook icon" className="w-7 h-7" /></Link>
				</div>

				<div className="relative bg-white rounded-full grid justify-center items-center p-3 cursor-pointer">
					<Link href={'#'}><img src="/gmail.png" alt="facebook icon" className="w-7 h-7" /></Link>
				</div>
			</div>
			<div className="grid gap-2">
				<h1 className="text-lg">CvSu General Trias City</h1>
				<h1 className="text-sm">All rights reserved 2022</h1>
			</div>
		</div>
	)
}

export default Footer
