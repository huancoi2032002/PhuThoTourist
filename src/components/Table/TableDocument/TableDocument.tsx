import React, { useState } from "react";
import { DownloadIcon } from "../../../assets";
import Pagination from "../../Pagination/Pagination";

// Định nghĩa kiểu dữ liệu cho hàng bảng
export interface DataItem {
    stt: number;
    name: string;
    date: string;
    download: string;
}

// Thay đổi để nhận dữ liệu từ props
interface TableProps {
    data: DataItem[];
}

// Component để hiển thị tiêu đề của các cột
export const Columns: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="w-full h-[44px] font-semibold bg-[#0054A6] px-6 py-3 flex items-center hidden lg:block">
            <span className="font-roboto text-lg text-white">{title}</span>
        </div>
    );
};

// Component để hiển thị một hàng dữ liệu
export const Row: React.FC<DataItem> = ({ stt, name, date, download }) => {
    return (
        <div className="w-full flex h-[44px] bg-white gap-2">
            <div className="flex-1 px-6 py-3 flex items-center">{stt}</div>
            <div className="flex-1 px-6 py-3 flex items-center">{name}</div>
            <div className="flex-1 px-6 py-3 flex items-center">{date}</div>
            <div className="flex-1 px-6 py-3 flex items-center">
                <a href={download} download>
                    <button className="">
                        <DownloadIcon />
                    </button>
                </a>
            </div>
        </div>
    );
};

// Component bảng chính với phân trang
const Table: React.FC<TableProps> = ({ data }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 10;

    // Tính toán số trang
    const totalPages = Math.ceil(data.length / pageSize);
    const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };


    return (
        <div className="w-full rounded-lg">
            <div className="flex flex-col gap-2">
                <div className="flex">
                    <Columns title="STT" />
                    <Columns title="Tên tài liệu" />
                    <Columns title="Ngày tạo" />
                    <Columns title="Tải tài liệu" />
                </div>
                <div className="flex flex-col gap-2">
                    {paginatedData.map(item => (
                        <Row
                            key={item.stt}
                            stt={item.stt}
                            name={item.name}
                            date={item.date}
                            download={item.download}
                        />
                    ))}
                </div>
            </div>
            <div className="w-[1125px] flex justify-between items-center mt-3">
                <div className="flex items-center gap-2 font-roboto text-base text-[#4D4D4D]">
                    <p>Hiển thị</p>
                    <p className="flex justify-center items-center border border-[#0054A6] w-9 h-9 px-[13px] py-[3px] rounded-[4px] text-[#0054A6]">{pageSize}</p>
                    <p>câu trả lời trong mỗi trang</p>
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default Table;
