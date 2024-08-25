import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Dropdown, MenuProps } from "antd";
import './Navigation.scss';
import { Logo } from "../../assets";

type NavigationProps = {}

const menuDocument: MenuProps['items'] = [
    {
        key: '1',
        label: <Link to="/doc1">Tài liệu 1</Link>,
    },
    {
        key: '2',
        label: <Link to="/doc2">Tài liệu 2</Link>,
    },
    {
        key: '3',
        label: <Link to="/doc3">Tài liệu 3</Link>,
    },
]

const Navigation: React.FC<NavigationProps> = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const getLinkClassName = (path: string) => {
        return `text-white p-3 ${currentPath === path ? 'text-decoration-underline text-[#99FFFF]' : ''}`;
    }

    return (
        <nav className="w-full bg-bgnav h-h-nav text-lg border-b border-white flex items-center justify-center font-philosopher">
            <div className="flex justify-end items-center gap-gap-nav text-sm">
                <Link to="/home" className={getLinkClassName("/home")}>TRANG CHỦ</Link>
                <Link to="/articles" className={getLinkClassName("/articles")}>BÀI VIẾT</Link>
                <Link to="/home" className="p-3"><Logo className="" /></Link>
                <Dropdown
                    menu={{ items: menuDocument }}
                    trigger={['hover']}
                    overlayClassName="custom-dropdown-menu"
                    placement="bottomLeft"
                >
                    <Link to="/document" className={`text-white p-3 ant-dropdown-link ${currentPath === '/document' ? 'text-decoration-underline' : ''}`} onClick={e => e.preventDefault()}>TÀI LIỆU</Link>
                </Dropdown>
                <Link to="/recruitment" className={getLinkClassName("/recruitment")}>TUYỂN DỤNG</Link>
            </div>
        </nav>
    )
}

export default Navigation;
