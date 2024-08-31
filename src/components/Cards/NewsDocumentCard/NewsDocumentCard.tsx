import React, { useState, useEffect } from "react";
import { DownloadIcon } from "../../../assets";
import { DataItem } from "../../Table/TableDocument/TableDocument";
import Pagination from "../../Pagination/Pagination";
import './Styles.scss';

interface NewsDocumentCardProps {
    data: DataItem[];
}

const NewsDocumentCard: React.FC<NewsDocumentCardProps> = ({ data }) => {
    const [itemsPerPage, setItemsPerPage] = useState(12); // Dynamic items per page based on screen size
    const [currentPage, setCurrentPage] = useState(1); // Current page state

    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(10); // Set to 10 items per page on small screens
            } else {
                setItemsPerPage(12); // Set to 12 items per page on larger screens
            }
        };

        updateItemsPerPage(); // Set the initial value based on the current screen size
        window.addEventListener('resize', updateItemsPerPage); // Update on resize

        return () => window.removeEventListener('resize', updateItemsPerPage); // Cleanup listener
    }, []);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Calculate the items to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    return (
        <div className="flex flex-col gap-3 mb-8">
            {currentItems.map(({ name, date, download, stt }) => (
                <div className="flex flex-col justify-center items-start p-4 gap-[10px] custom-newsdocumentcard" key={stt}>
                    <div className="flex w-[311px] justify-between items-center">
                        <div className="flex flex-col items-start gap-2">
                            <h3 className="w-[245px] text-[#003F7D] text-sm font-bold font-roboto">{name}</h3>
                            <p className="text-xs font-normal text-[#4D4D4D] font-roboto">{date}</p>
                        </div>
                        <div className="flex py-2 px-3 justify-center items-center rounded-[46px]">
                            <a href={download} download>
                                <DownloadIcon />
                            </a>
                        </div>
                    </div>
                </div>
            ))}

            <div className="w-[343px] flex py-2 px-1 gap-8 rounded-[99px] custom-number-page">
                <Pagination
                    totalPages={Math.ceil(data.length / itemsPerPage)}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default NewsDocumentCard;
