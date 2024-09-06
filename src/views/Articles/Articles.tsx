import { useEffect, useState } from "react";
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
import FilterPackRowMobile from "../../components/Filter/FiltersPacks/FilterPackRow/FilterPackRowMobile";
import { Outlet } from 'react-router-dom';
import { fetchPosts } from "../../firebase";

const Articles = () => {
    const [posts, setPosts] = useState<any[]>([]); //Sử dụng useState tạo mảng 
    const [itemsPerPage, setItemsPerPage] = useState(12); // Số mục mỗi trang
    const [currentPage, setCurrentPage] = useState(1); // Trạng thái trang hiện tại

    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(5);
            } else {
                setItemsPerPage(12);
            }
        }
        updateItemsPerPage()
        window.addEventListener('resize', updateItemsPerPage)
        return () => window.removeEventListener('resize', updateItemsPerPage)
    }, [])


    useEffect(() => {
        const loadSlides = async () => {
            try {
                const slidesData = await fetchPosts();
                setPosts(slidesData); //truyền dữ liệu slidesData và setPosts
            } catch (error) {
                console.error("Error fetching slides: ", error); // Nếu lỗi thì hiện thông báo
            }
        };

        loadSlides();
    }, []);

    // Tạo nhiều đối tượng cho mỗi chỉ số nếu cần
    const extendedPostCards = posts.flatMap(item => [item, item]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Tính toán các mục cần hiển thị cho trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = extendedPostCards.slice(startIndex, endIndex);

    return (
        <Layout>
            {location.pathname === '/articles' ? (
                <>
                    <div className='w-full flex flex-col items-center justify-center mt-32 '>
                        <RectangleTitle label="BÀI VIẾT" />
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-6 custom-content-article">
                        <div className="max-w-[1520px] w-full flex justify-between custom-slider-article">
                            <Slider />
                            <NewsPost />
                        </div>
                        <FilterPackRowMobile className="xl:hidden z-30" />
                        <div className="xl:max-w-[1520px] xl:w-full xl:h-[1108px]  flex justify-between flex-shrink-0">
                            <FilterPackCol className="custom-filterpackcol-article" />
                            <div className="flex flex-col gap-[22px]">
                                <FilterPackRow className="article-filterpackrow z-20" />
                                <div className="z-10">
                                    <div className="inline-flex flex-col items-center gap-6 z-10">
                                        <div className="xl:w-[1134px] h-auto flex xl:flex-wrap xl:gap-6 custom-list-postcard">
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
                </>
            ) : (
                <Outlet /> // Only renders the ArticleDetails when not on the main Articles route
            )}
        </Layout >
    );
};

export default Articles;
