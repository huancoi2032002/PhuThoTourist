import React, { FC, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Dropdown, MenuProps } from "antd";
import './Navigation.scss';

type NavigationProps = {

}
const menuDocument: MenuProps['items'] = [

    {
        key: '1',
        label: <Link to="/doc1" className="">Tài liệu 1</Link>,
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
    return (
        <nav className="w-full bg-bgnav h-h-nav text-lg border-b border-white flex items-center justify-center font-philosopher">
            <div className="flex justify-end items-center gap-gap-nav text-sm">
                <Link to="/" className="text-white p-3 hover:bg-black">TRANG CHỦ</Link>
                <Link to="/articles" className="text-white p-3">BÀI VIẾT</Link>
                <Link to="/home" className="p-3">LOGO</Link>
                <Dropdown
                    menu={{ items: menuDocument }}
                    trigger={['hover']}
                    overlayClassName="custom-dropdown-menu"
                    placement="bottomLeft"
                >
                    <Link to="/articles" className="text-white p-3 ant-dropdown-link" onClick={e => e.preventDefault()}>TÀI LIỆU</Link>
                </Dropdown>
                <Link to="/recruitment" className="text-white p-3">TUYỂN DỤNG</Link>
            </div>
        </nav>
    )
}

export default Navigation