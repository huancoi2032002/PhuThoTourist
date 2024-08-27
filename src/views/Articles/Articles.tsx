import React, { useState } from "react";
import TueNhi from '../../assets/tuenhi/tuenhi2.jpg';
import PostCard from "../../components/Cards/PostCard/PostCard";
import { Pagination } from "antd";
import "antd/dist/reset.css";
import RectangleTitle from "../../components/Rectangles/RectangleTitle/RectangleTitle";
import Slider from "../../components/Sliders/Slider";
import FilterPackCol from "../../components/Filter/FiltersPacks/FilterPackCol/FilterPackCol";
import FilterPackRow from "../../components/Filter/FiltersPacks/FilterPackRow/FilterPackRow";
import NewsPost from "../../components/ContentPost/NewsPost/NewsPost";
import Layout from "../../layouts/Layout";
import './Styles.scss'
import ArticleDetails from "./ArticleDetails/ArticleDetails";

const Articles = () => {
    const totalItems = 50; // Tổng số mục
    const itemsPerPage = 12; // Số mục mỗi trang
    const [currentPage, setCurrentPage] = useState(1); // Trạng thái trang hiện tại

    // Dữ liệu mô phỏng, thay thế bằng dữ liệu thực tế của bạn
    const postCards = Array.from({ length: totalItems }, (_, index) => ({
        src: TueNhi,
        title: `Thông báo ${index + 1}`,
        roleName: "Admin",
        view: 1000 + index,
        day: `20/02/2034`,
    }));

    // Tạo nhiều đối tượng cho mỗi chỉ số nếu cần
    const extendedPostCards = postCards.flatMap(item => [item, item]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Tính toán các mục cần hiển thị cho trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = extendedPostCards.slice(startIndex, endIndex);

    return (

        <Layout>
            
            <div className='w-full flex flex-col items-center justify-center mt-32 '>
                <RectangleTitle label="BÀI VIẾT" />
            </div>
            {/*
            <div className="w-full flex flex-col items-center justify-center gap-6">

                <div className="max-w-[1520px] w-full flex justify-between">
                    <Slider />
                    <NewsPost />
                </div>
                <div className="max-w-[1520px] w-full h-[1108px]  flex justify-between flex-shrink-0">
                    <FilterPackCol />
                    <div className="flex flex-col gap-[22px]">
                        <FilterPackRow />
                        <div>
                            <div className="inline-flex flex-col items-center gap-6">
                                <div className="w-[1134px] h-auto flex flex-wrap gap-6">
                                    {currentItems.map((item, index) => (
                                        <PostCard
                                            key={index}
                                            src={item.src}
                                            title={item.title}
                                            roleName={item.roleName}
                                            view={item.view}
                                            day={item.day}
                                        />
                                    ))}
                                </div>
                                <div className="flex py-2 px-1 gap-8 rounded-[99px] custom-number-page">
                                    <Pagination
                                        total={extendedPostCards.length}
                                        pageSize={itemsPerPage}
                                        onChange={handlePageChange}
                                        current={currentPage}
                                        showSizeChanger={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            */}
            <ArticleDetails />
        </Layout>
    );
};

export default Articles;
