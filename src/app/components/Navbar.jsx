import NavLink from "./NavLink";

const navLinks = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/contact',
        title: 'Contact'
    },
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
    {
        path: '/blog',
        title: 'Blog'
    },
    {
        path: '/blog2',
        title: 'Blog2'
    },
    {
        path: '/register',
        title: 'Register'
    },
    {
        path: '/login',
        title: 'Login'
    }
]
const Navbar = () => {
    return (
        <nav className="flex item-center justify-between rounded-b-full p-10 mx-auto bg-blue-200">
            <h1 className="text-2xl font-semibold text-slate-700">Next Hero</h1>
            <ul className="flex gap-4">
                {
                    navLinks.map(({ path, title }) =>
                        <li key={path}>
                            <NavLink
                                exact={path === '/'}
                                activeClassName="text-red-500 py-1 border border-y-2 border-x-0"
                                href={path}
                            >
                                {title}
                            </NavLink>
                        </li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;