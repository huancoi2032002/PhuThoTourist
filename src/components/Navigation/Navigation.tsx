import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navigation.scss';
import { Logo, ListIcon, Close } from "../../assets"; // Giả sử ListIcon và CloseIcon được import từ assets
import './Navigation.scss'


const Navigation: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getLinkClassName = (path: string) => {
        return `p-3 ${currentPath === path ? 'underline text-customColor' : 'text-white '}`;
    };

    const toggleMenu = () => {
        console.log('Menu toggled');
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <>
            <nav className="w-full custom-navigation flex items-center text-xl justify-center font-philosopher z-30 gap-[80px] px-4 py-[6px] md:p-4">
                {/* Mobile Layout */}
                <div className="flex justify-between items-center w-full md:hidden">
                    <Link to="/" className="">
                        <Logo className="h-10 w-10" />
                    </Link>
                    <button className="" onClick={toggleMenu}>
                        <ListIcon />
                    </button>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex justify-center items-center gap-[80px] text-xl">
                    <Link to="/" className={getLinkClassName("/")}>TRANG CHỦ</Link>
                    <Link to="/articles" className={getLinkClassName("/articles")}>BÀI VIẾT</Link>
                    <Link to="/" className=""><Logo className="" /></Link>
                    <Link to="/document" className={getLinkClassName("/document")}>TÀI LIỆU</Link>
                    <Link to="/recruitment" className={getLinkClassName("/recruitment")}>TUYỂN DỤNG</Link>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 w-full h-full flex flex-col space-y-6 custom-nav-mobile text-xl font-philosopher z-50">
                    <button className="custom-toggle-close" onClick={toggleMenu}>
                        <Close />
                    </button>
                    <div className="inline-flex flex-col items-center px-[65px] pt-[124px]">
                        <div className="flex flex-col items-start gap-4">
                            <Link to="/" className={getLinkClassName("/")} onClick={toggleMenu}>TRANG CHỦ</Link>
                            <Link to="/articles" className={getLinkClassName("/articles")} onClick={toggleMenu}>BÀI VIẾT</Link>
                            <Link to="/document" className={getLinkClassName("/document")} onClick={toggleMenu}>TÀI LIỆU</Link>
                            <Link to="/recruitment" className={getLinkClassName("/recruitment")} onClick={toggleMenu}>TUYỂN DỤNG</Link>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default Navigation;
