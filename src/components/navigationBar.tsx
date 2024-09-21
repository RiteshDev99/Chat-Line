import { useState } from 'react';
import { LayoutDashboard, UserCircleIcon, MessageCircleCodeIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';


const NavigationBar = () => {
    const NavLinksData = [
        {
            name: 'Dashboard',
            icon: LayoutDashboard,
            id: 'dashboard',
        },
        {
            name: 'Your Profile',
            icon: UserCircleIcon,
            id: 'yourProfile',
        },
        {
            name: 'Chat',
            icon: MessageCircleCodeIcon,
            id: 'chat',
        },
    ];

    const [ActiveNavIndex, setActiveNavIndex] = useState(0);

    return (
        <>
            <div className="bg-[#94a3b8] px-10 py-12 flex flex-col border-r-2 border-[#e0f2fe]  w-1/5 h-screen">
                <div className="logo flex items-center space-x-2">
                    <img src="https://cdn-icons-png.freepik.com/512/2899/2899298.png" alt="" className="h-9 " />
                    <span className="text-3xl text-[#ecf9ff] font-semibold">Chat-Line</span>
                </div>
                <div className="mt-[7vh] flex flex-col space-y-8 text-[#ededed] font-semibold text-xl">
                    {NavLinksData.map((item, index) => (
                        <NavLink
                            to={`/admin/${item.id}`}
                            key={index}
                            className={
                                'flex p-3 rounded-xl cursor-pointer space-x-3 ' +
                                (ActiveNavIndex === index ? 'bg-[#60a5fa]' : '')
                            }
                            onClick={() => setActiveNavIndex(index)}
                        >
                            <item.icon />
                            <span>{item.name}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NavigationBar;
