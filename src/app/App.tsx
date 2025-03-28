import { BrowserRouter } from "react-router-dom";
import { Navbar } from "@/shared/ui/Navbar/Navbar";
import { AppRouter } from "./AppRouter";
import "./App.css";

function App() {

	return <BrowserRouter>
		<Navbar />
		<AppRouter />
	</BrowserRouter>
}

export default App;
