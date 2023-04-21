import React from "react";
import Sidebar from "@/components/sidebar";

const Header = () => {
	return (
		<div className="flex p-4 bg-gray-200">
			<div className="bg-green-400 rounded-lg mx-4 p-4">LOGO</div>
			<div className="grow"></div>
			<div className="bg-gray-400 rounded-lg mx-4 p-4">Cart</div>
			<div className="p-4">Muster</div>
			<div className="bg-gray-400 rounded-full mx-4 p-4 w-16">MM</div>
		</div>
	);
};

function Layout({ children }) {
	return (
		<div className="flex flex-col">
			<div>
				<Header />
			</div>
			<div className="flex flex-row">
				<div className="basis-1/12">
					<Sidebar />
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
}

export default Layout;
