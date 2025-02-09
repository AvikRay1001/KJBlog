import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import toast from "react-hot-toast";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const { setUser } = useContext(UserContext);
	const navigate = useNavigate();

	const [isAdmin, setIsAdmin] = useState(false);
	const [adminPassword, setAdminPassword] = useState("");


	function getCookie(name) {
		const cookies = document.cookie.split("; ");
		for (let cookie of cookies) {
			const [cookieName, cookieValue] = cookie.split("=");
			if (cookieName === decodeURIComponent(name)) {
				return decodeURIComponent(cookieValue);
			}
		}
		return null; // Return null if cookie not found
	}
	

	// const handleLogin = async () => {
	// 	try {
	// 		const res = await axios.post(
	// 			"https://kjblog-production.up.railway.app/api/auth/login",
	// 			{ username, password }, // send plain text password
	// 			{ withCredentials: true }
	// 		);
	// 		console.log("res:",res);
	// 		console.log("Server response:", res.data); // Log the entire response
	// 		const token = getCookie("token"); // Get the token from the cookie
	// 		console.log("Token:-",token);
	// 		localStorage.setItem("token", token); // Store the token in local storage
	// 		console.log("Token at login: ", token);
	// 		setUser(res.data);
	// 		setError(false);
	// 		navigate("/");
	// 		toast.success("Welcome back " + res.data.username + " !");
	// 	} catch (err) {
	// 		setError(true);
	// 		console.log(err);
	// 	}
	// };

	const handleLogin = async () => {
		try {
			const res = await axios.post(
				"https://kjblog-production.up.railway.app/api/auth/login",
				{ username, password },
				{ withCredentials: true }
			);
	
			console.log("Server response:", res.data); // Log the entire response
	
			const token = res.data.token; // Get the token directly from the response
			console.log("Token:", token);
	
			localStorage.setItem("token", token); // Store the token in local storage
			console.log("Token at login:", token);
	
			setUser(res.data.user); // Update state with user info
			setError(false);
			navigate("/");
			toast.success("Welcome back " + res.data.user.username + "!");
		} catch (err) {
			setError(true);
			console.error("Login error:", err.response?.data || err.message);
		}
	};
	

	const checkAdminPassword = () => {
		const adminPass = "kjadmin007";
		if (adminPassword === adminPass) {
			setIsAdmin(true);
		} else {
			toast.error("Incorrect admin password");
		}
	};

	return (
		<>
			{isAdmin ? (
				<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
					<p className="text-lg text-center text-gray-700 mb-2">
						You are not allowed to access this page
					</p>
					<p className="text-md text-center text-gray-600 mb-6">
						Login as an admin to continue
					</p>
					<input
						type="password"
						className="w-64 px-3 py-2 border-2 border-gray-300 rounded-md outline-none focus:border-indigo-500"
						placeholder="Enter admin password"
						onChange={(e) => setAdminPassword(e.target.value)}
					/>
					<button
						onClick={checkAdminPassword}
						className="mt-4 px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none"
					>
						Submit
					</button>
				</div>
			) : (
				<>
					<div className="flex items-center justify-between px-6 md:px-[200px] py-4">
						<h1 className="">
							<Link to="/">
								<div className="flex flex-row gap-10 items-center justify-center">
								<span className="font-jockey text-[30px]">Blog Blitz</span>
								<span className="font-poppins">by</span>
								<div className="flex flex-row">
									<span className="font-jockey pr-2 text-[20px]
									mt-1">KALINGA</span>
									<img
											src="/fevicon.jpg"
											alt="KalingaLogo"
											className="h-10 w-10 rounded-full"
									/>
									<span className="font-jockey pl-2 text-[20px] mt-1">JYOTI</span>
								</div>
						</div>
							</Link>
						</h1>
						<h3>
							<Link to="/register" className="font-jockey text-[20px]">Register</Link>
						</h3>
					</div>
					<div className="w-full flex justify-center items-center h-[80vh] ">
						<div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
							<h1 className="text-[20px] font-jockey text-left">
								Log in to your account
							</h1>
							<input
								onChange={(e) => setUsername(e.target.value)}
								className="w-full px-4 py-2 border-2 border-black outline-0 font-jockey"
								type="text"
								placeholder="Enter your username"
							/>
							<input
								onChange={(e) => setPassword(e.target.value)}
								className="w-full px-4 py-2 border-2 border-black outline-0"
								type="password"
								placeholder="Enter your password"
							/>
							<button
								onClick={handleLogin}
								className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black font-jockey text-[25px]"
							>
								Log in
							</button>
							{error && (
								<h3 className="text-red-500 text-sm font-jockey">Something went wrong</h3>
							)}
							<div className="flex justify-center items-center space-x-3">
								<p className="font-jockey text-[20px]">New here?</p>
								<p className="text-gray-500 hover:text-black">
									<Link to="/register" className="font-jockey text-[20px]">Register</Link>
								</p>
							</div>
						</div>
					</div>
				</>
			)}
			<Footer />
		</>
	);
};

export default Login;
