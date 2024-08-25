import React from 'react';
import { ArrowLeft, ArrowRight } from '../../assets'; // Import các icon từ file khác

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = () => {
        const pages: (number | string)[] = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="flex items-center justify-center py-1">
            <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-2"
            >
                <ArrowLeft />
            </button>
            {pageNumbers().map((page, index) =>
                typeof page === 'number' ? (
                    <button
                        key={index}
                        onClick={() => handlePageChange(page)}
                        className={`rounded-[4px] px-3 py-1 mx-1 ${currentPage === page ? 'bg-[#0054A6] text-white' : ''}`}
                    >
                        {page}
                    </button>
                ) : (
                    <span key={index} className="px-4 py-2 mx-1 text-gray-500">
                        {page}
                    </span>
                )
            )}
            <button
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-2"
            >
                <ArrowRight />
            </button>
        </div>
    );
};

export default Pagination;
