import Link from "next/link";

const navlink = [
    {
        path: '/dashboard',
        title: 'Home'
    },
    {
        path: '/additem',
        title: 'Add Item'
    },
    {
        path: '/manageitem',
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
                        <Link href={path}>{title}</Link>
                    </li>)
                }
            </ul>
        </aside>
    );
};

export default SideBar;