import { useState, useEffect } from "react"
import { BagIcon, LineIcon, Map, PersonCard } from "../../assets/iconpack"
import RecruitmentCard from "../../components/Cards/RecruitmentCard/RecruitmentCard"
import Chips from "../../components/Tag/Chips/Chips"
import Pagination from "../../components/Pagination/Pagination"
import Search from "../../components/Search/Search"
import RectangleTitle from "../../components/Rectangles/RectangleTitle/RectangleTitle"
import Layout from "../../layouts/Layout"
import './Styles.scss'
import { VueSetting } from "../../assets/iconpack"
import { Outlet, useLocation } from 'react-router-dom';
import { fetchRecruitment } from "../../firebase"
import FilterPackColRecruitment from "../../components/Filter/FiltersPacks/FilterPackCol/FilterPackColRecruitment"

const Recruitment = () => {

    const [jobs, setJobs] = useState<any[]>([]);
    useEffect(() => {
        const loadJobs = async () => {
            try {
                const slidesData = await fetchRecruitment();
                setJobs(slidesData);
            } catch (error) {
                console.error("Error fetching slides: ", error);
            }
        };

        loadJobs();
    }, []);
    const totalItems = jobs.length; // Tổng số mục
    const [itemsPerPage, setItemsPerPage] = useState(9); // Số mục mỗi trang
    const [currentPage, setCurrentPage] = useState(1); // Trạng thái trang hiện tại
    const [isOpenFilterSetting, setIsOpenFilterSetting] = useState(false);
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(5);
            } else {
                setItemsPerPage(9);
            }
        }
        updateItemsPerPage()
        window.addEventListener('resize', updateItemsPerPage)
        return () => window.removeEventListener('resize', updateItemsPerPage)
    }, [])
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const currentJobs = jobs.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleClickFilterSetting = () => {
        setIsOpenFilterSetting(prevState => !prevState);
    };
    const handleCloseFilterSetting = () => {
        setIsOpenFilterSetting(false); // Close the modal when the buttons are clicked
    };
    return (
        <Layout >
            {location.pathname === '/recruitment' ? (
                <div className="flex flex-col justify-center items-center">
                    <div className='w-full flex flex-col items-center justify-center mt-32'>
                        <RectangleTitle label="TUYỂN DỤNG" />
                    </div>
                    <div className="w-[343px] flex items-center gap-2 rounded-xl p-3 custom-filterpackrowmobile lg:hidden">
                        <Search width="276px" />
                        <div className="custom-vuesetting" onClick={handleClickFilterSetting}>
                            <VueSetting />
                        </div>
                    </div>
                    <FilterPackColRecruitment isOpen={isOpenFilterSetting} onClose={handleCloseFilterSetting} />
                    <div className="xl:w-[1520px] h-full flex items-center justify-center">
                        <div className="xl:w-[1520px] flex items-start gap-6">
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="xl:w-[1520px] flex items-start gap-6">
                                    <div className="w-[362px] h-[936px] custom-recruitment-packs py-6 px-5">
                                        <div className="w-[322px] h-[664px] flex flex-col justify-center items-start gap-6">
                                            <div className="w-full flex items-center justify-center">
                                                <Search width="314px" />
                                            </div>
                                            <LineIcon />
                                            <div className="flex w-[322px] flex-col items-start gap-4">
                                                <div className="flex w-[314px] justify-start items-center gap-2">
                                                    <BagIcon />
                                                    <span className="custom-field font-roboto">Lĩnh vực</span>
                                                </div>
                                                <div className="flex pr-8 flex-col justify-center items-start gap-2">
                                                    <div className="flex items-start gap-2">
                                                        <Chips label="Hướng dẫn viên" />
                                                        <Chips label="Kinh doanh" />
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <Chips label="Kĩ sư xây dựng" />
                                                        <Chips label="Nhân viên kế toán" />
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <Chips label="Nhân viên kĩ thuật" />
                                                        <Chips label="Nhân viên phục vụ" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex w-[322px] flex-col items-start gap-4">
                                                <div className="flex w-[314px] justify-start items-center gap-2">
                                                    <PersonCard />
                                                    <span className="custom-field font-roboto">Hình thức làm việc</span>
                                                </div>
                                                <div className="flex pr-8 flex-col justify-center items-start gap-2">
                                                    <div className="flex items-start gap-2">
                                                        <Chips label="Bán thời gian" />
                                                        <Chips label="Nhân viên chính thức" />
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <Chips label="Theo ca" />
                                                        <Chips label="Thực tập" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex w-[322px] flex-col items-start gap-4">
                                                <div className="flex w-[314px] justify-start items-center gap-2">
                                                    <Map />
                                                    <span className="custom-field font-roboto">Hình thức làm việc</span>
                                                </div>
                                                <div className="flex pr-8 flex-col justify-center items-start gap-2">
                                                    <div className="flex items-start gap-2">
                                                        <Chips label="Cà Phê Vườn Đá" />
                                                        <Chips label="NH Thủy Tạ Đầm Sen" />
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <Chips label="CVVH Đầm Sen" />
                                                        <Chips label="Khách sạn Ngọc Lan" />
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <Chips label="Khách sạn Phú Thọ" />
                                                        <Chips label="KDL Sinh Thái Vàm Sát" />
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <Chips label="Trung tâm DVDL Đầm Sen" />
                                                        <Chips label="VP Phuthotourist" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-[-28px] right-[-188px]">
                                            <div className="w-[440.7px] h-[280.8px] flex flex-shrink-0 relative opacity-15">
                                                <svg className="relative" xmlns="http://www.w3.org/2000/svg" width="253" height="253" viewBox="0 0 253 256" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M141.323 275.821C215.576 275.821 275.77 215.627 275.77 141.374C275.77 67.1209 215.576 6.92679 141.323 6.92679C67.0694 6.92679 6.87527 67.1209 6.87527 141.374C6.87527 215.627 67.0694 275.821 141.323 275.821ZM141.323 282.148C219.07 282.148 282.097 219.122 282.097 141.374C282.097 63.6266 219.07 0.599854 141.323 0.599854C63.5751 0.599854 0.54834 63.6266 0.54834 141.374C0.54834 219.122 63.5751 282.148 141.323 282.148Z" fill="white" />
                                                </svg>
                                                <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="253" height="253" viewBox="0 0 253 256" fill="none">
                                                    <path d="M282.097 141.374C282.097 219.122 219.07 282.148 141.323 282.148C63.5751 282.148 0.54834 219.122 0.54834 141.374C0.54834 63.6266 63.5751 0.599854 141.323 0.599854C219.07 0.599854 282.097 63.6266 282.097 141.374Z" fill="#0054A6" />
                                                </svg>
                                                <svg
                                                    className="absolute left-1/2 top-1/2 transform -translate-y-1/2"
                                                    style={{ transform: 'translateX(-90%) translateY(-50%)' }}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="335"
                                                    height="97"
                                                    viewBox="0 0 335 97"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M159.971 1.62256L1.6001 86.0871L137.095 43.8549L283.149 94.8855L443.279 10.421L306.024 54.4129L159.971 1.62256Z"
                                                        fill="white"
                                                        stroke="#0054A6"
                                                        strokeWidth="3.16347"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col xl:items-start xl:gap-6 gap-3 custom-list-recruitcard">
                                        <div className="flex items-center justify-center flex-wrap gap-6">
                                            {currentJobs.map((job, index) => (
                                                <RecruitmentCard
                                                    key={index}
                                                    title={job.title}
                                                    position={job.position}
                                                    location={job.location}
                                                    date={job.date}
                                                    des={job.des}
                                                    status={job.status}
                                                />
                                            ))}
                                        </div>
                                        <div className="w-full flex items-center justify-center">
                                            <div className="flex items-center custom-bg-pagination mb-8">
                                                <Pagination
                                                    currentPage={currentPage}
                                                    totalPages={totalPages}
                                                    onPageChange={handlePageChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (<Outlet />)
            }
        </Layout>
    )
}

export default Recruitment