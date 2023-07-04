import NavLink from "../components/NavLink";

const navlink = [
    {
        path: '/dashboard',
        title: 'Profile'
    },
    {
        path: '/dashboard/additem',
        title: 'Add Item'
    },
    {
        path: '/dashboard/manageitem',
        title: 'Manage Item'
    },
    {
        path: '/',
        title: 'Home'
    },
]
const SideBar = () => {
    return (
        <aside className="bg-blue-200 p-10 h-[100vh]">
            <h1 className="text-2xl font-semibold">Welcome Dashboard</h1>
            <ul className="ml-4 mt-6">
                {
                    navlink.map(({ path, title }) => <li key={path}>
                        <NavLink
                            exact={path === '/dashboard' || '/'}
                            activeClassName="text-red-500 px-1 border border-y-0 border-x-2"
                            href={path}
                        >
                            {title}
                        </NavLink>
                    </li>)
                }
            </ul>
        </aside>
    );
};

export default SideBar;