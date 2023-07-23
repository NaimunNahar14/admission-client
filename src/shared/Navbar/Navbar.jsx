import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import image from '../../assets/pngtree-college-entrance-examination-doctor-s-cap-image_1467421-removebg-preview (1).png';
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));

    }

    const navOptions = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/colleges">Colleges</Link>
            </li>
            <>
                <li>
                    <Link to="/admission">Admission</Link>
                </li>

            </>
            {user ? (
                <>
                    <li>
                        <Link to="/mycolleges"> My Colleges</Link>
                    </li>
                    <li>
                        <span>{user?.displayName}</span>
                        <button
                            onClick={handleLogOut}
                            className="btn btn-active btn-ghost"
                        >
                            Logout
                        </button>
                    </li>
                </>
            ) : (
                <li>
                    <Link to="/login"><button className="btn btn-accent">Login</button>
                    </Link>
                </li>
            )}
        </>
    );

    return (
        <div
            className={`navbar ${theme === "light" ? "bg-white" : "bg-gray-800"
                }`}
        >
            <div className="navbar-start flex items-center">
                <div className="dropdown">
                    <button
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                    {mobileMenuOpen && (
                        <ul
                            className={`menu menu-compact dropdown-content mt-3 p-2 shadow ${theme === "light" ? "bg-base-100" : "bg-gray-700"
                                } rounded-box w-52 lg:hidden`}
                        >
                            {navOptions}
                        </ul>
                    )}
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img className='h-16 w-24 mr-2' src={image} alt="" />
                        <h1>EnrollGenius</h1>
                    </Link>
                </div>
            </div>
            <div className={`navbar-center hidden lg:flex ${mobileMenuOpen ? 'hidden' : 'block'}`}>
                <ul className="menu menu-horizontal px-1 flex items-center">
                    {navOptions}
                </ul>
            </div>
            <button
                className={`toggle ml-3 lg:hidden ${theme === "light" ? "bg-gray-300" : "bg-gray-600"
                    }`}
                onClick={toggleTheme}
            >
                {theme === "light" ? "" : ""}
            </button>
        </div>
    );
};

export default Navbar;
