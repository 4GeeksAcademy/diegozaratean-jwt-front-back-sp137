import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate()

	function logout(){
		// devolver al home
		navigate('/')
		// borar token
		localStorage.removeItem("token");
		// poner en false auth
		dispatch({type: 'set_auth', payload: false})
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				{store.auth ? <button onClick={logout} className="btn btn-primary">Logout</button>:null}

				{store.auth ? 
					<Link to="/">
						<button onClick={()=>{
							// borar token
							localStorage.removeItem("token");
							// poner en false auth
							dispatch({type: 'set_auth', payload: false})
						}} className="btn btn-primary">Logout2</button>
	
					</Link>
					:null}
						

				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};