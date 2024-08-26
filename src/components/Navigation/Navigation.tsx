import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Navigation.scss';
import { Logo } from "../../assets";



const Navigation: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const getLinkClassName = (path: string) => {
        return `p-3 ${currentPath === path ? 'underline text-customColor' : 'text-white '}`;
    };


    return (
        <nav className="w-full custom-navigation h-h-nav text-lg flex items-center justify-center font-philosopher z-30">
            <div className="flex justify-end items-center gap-gap-nav text-xl">
                <Link to="/" className={getLinkClassName("/")}>TRANG CHỦ</Link>
                <Link to="/articles" className={getLinkClassName("/articles")}>BÀI VIẾT</Link>
                <Link to="/" className="p-3"><Logo className="" /></Link>
                <Link to="/document" className={getLinkClassName("/document")}>TÀI LIỆU</Link>
                <Link to="/recruitment" className={getLinkClassName("/recruitment")}>TUYỂN DỤNG</Link>
            </div>
        </nav>
    );
}

export default Navigation;
