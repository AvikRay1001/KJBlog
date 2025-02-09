import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";


 const Footer = () => {
	return (
		<>
			<div className="mt-8 w-full backdrop-blur-xl text-black px-8 flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm pt-2 pb-1">
				<div className="">
					<p className="font-jockey text-[20px]">Student Coordinators:</p>
					<br/>
					<div className="flex gap-4 text-black">
						<div className="">
							<p className="font-jockey text-[20px]">DHANANJAY MOHANTY</p>
							<p className="font-jockey">+91 79825 63364</p>
						</div>
						<div className="">
							<p className="font-jockey text-[20px]">ARMAAN GARNAYAK</p>
							<p className="font-jockey">+91 94389 13565</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col text-black">
					<p className="font-jockey text-[20px]">Faculty Coordinators:</p><br/>
					<p className="font-jockey text-[20px]">DR. SAROJ KUMAR DASH</p>
				</div>
				<div className="">
					<p className="pb-2 text-center items-center font-jockey text-[20px]">
						All rights reserved @Blogging Blitz KALINGA JYOTI 2024
					</p><br/>
					<div className="flex justify-center space-x-2 items-center">
								<a href="https://twitter.com/kalinga_jyoti" target="_blank" rel="noopener noreferrer">
									<FaTwitter className="text-blue-400 text-[20px]" />
								</a>
								<a href="https://www.instagram.com/kalingajyoti.vitc/" target="_blank" rel="noopener noreferrer">
									<FaInstagram className="text-pink-600 text-[20px]" />
								</a>
								<a href="https://www.linkedin.com/company/kalinga-jyoti-vitc/about/" target="_blank" rel="noopener noreferrer">
									<FaLinkedin className="text-blue-700 text-[20px]" />
								</a>
								<a href="https://www.youtube.com/@KalingaJyoti" target="_blank" rel="noopener noreferrer">
									<FaYoutube className="text-red-600 text-[20px]" />
								</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
