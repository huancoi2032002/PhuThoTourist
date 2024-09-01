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

const Recruitment = () => {

    const jobs = [
        { title: "Nhân viên thiết kế đồ họa", position: "Nhân viên chính thức", location: "CVVH Đầm Sen", date: "2 tuần trước", des: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...", status: "Đang tuyển" },
        { title: "Nhân viên thiết kế đồ họa", position: "Nhân viên chính thức", location: "CVVH Đầm Sen", date: "2 tuần trước", des: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...", status: "Đã hết hạn" },
        { title: "Nhân viên thiết kế đồ họa", position: "Nhân viên chính thức", location: "CVVH Đầm Sen", date: "2 tuần trước", des: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...", status: "Đã hết hạn" },
        { title: "Nhân viên thiết kế đồ họa", position: "Nhân viên chính thức", location: "CVVH Đầm Sen", date: "2 tuần trước", des: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...", status: "Đã hết hạn" },
        { title: "Nhân viên thiết kế đồ họa", position: "Nhân viên chính thức", location: "CVVH Đầm Sen", date: "2 tuần trước", des: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...", status: "Đang tuyển" },
        { title: "Nhân viên thiết kế đồ họa", position: "Nhân viên chính thức", location: "CVVH Đầm Sen", date: "2 tuần trước", des: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...", status: "Đã hết hạn" },
        { title: "Nhân viên thiết kế đồ họa", position: "Nhân viên chính thức", location: "CVVH Đầm Sen", date: "2 tuần trước", des: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...", status: "Đang tuyển" },
        { title: "Nhân viên thiết kế đồ họa", position: "Nhân viên chính thức", location: "CVVH Đầm Sen", date: "2 tuần trước", des: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...", status: "Đã hết hạn" },
        { title: "Nhân viên thiết kế đồ họa", position: "Nhân viên chính thức", location: "CVVH Đầm Sen", date: "2 tuần trước", des: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...", status: "Đang tuyển" },
        { title: "Nhân viên thiết kế đồ họa", position: "Nhân viên chính thức", location: "CVVH Đầm Sen", date: "2 tuần trước", des: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...", status: "Đã hết hạn" },
        { title: "Nhân viên thiết kế đồ họa", position: "Nhân viên chính thức", location: "CVVH Đầm Sen", date: "2 tuần trước", des: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...", status: "Đang tuyển" },
        { title: "Nhân viên thiết kế đồ họa", position: "Nhân viên chính thức", location: "CVVH Đầm Sen", date: "2 tuần trước", des: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...", status: "Đã hết hạn" },
        { title: "Nhân viên thiết kế đồ họa", position: "Nhân viên chính thức", location: "CVVH Đầm Sen", date: "2 tuần trước", des: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...", status: "Đang tuyển" },
        { title: "Nhân viên thiết kế đồ họa", position: "Nhân viên chính thức", location: "CVVH Đầm Sen", date: "2 tuần trước", des: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...", status: "Đã hết hạn" },
        { title: "Nhân viên thiết kế đồ họa", position: "Nhân viên chính thức", location: "CVVH Đầm Sen", date: "2 tuần trước", des: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...", status: "Đang tuyển" },
        { title: "Nhân viên thiết kế đồ họa", position: "Nhân viên chính thức", location: "CVVH Đầm Sen", date: "2 tuần trước", des: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lịch, QT kinh doanh, Marketing. Am hiểu tâm lý ...", status: "Đã hết hạn" },

        // Thêm các công việc khác vào đây...
    ];
    const totalItems = 50; // Tổng số mục
    const [itemsPerPage, setItemsPerPage] = useState(9); // Số mục mỗi trang
    const [currentPage, setCurrentPage] = useState(1); // Trạng thái trang hiện tại

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

    return (
        <Layout >
            {location.pathname === '/recruitment' ? (
                <div>
                    <div className='w-full flex flex-col items-center justify-center mt-32'>
                        <RectangleTitle label="TUYỂN DỤNG" />
                    </div>
                    <div className="flex items-center gap-2 rounded-xl p-3 custom-filterpackrowmobile lg:hidden">
                        <Search width="276px" />
                        <div className="custom-vuesetting">
                            <VueSetting />
                        </div>
                    </div>
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="xl:w-[1520px] flex items-start gap-6">
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="xl:w-[1520px] flex items-start gap-6">
                                    <div className="w-[362px] h-[936px] custom-recruitment-packs py-6 px-5">
                                        <div className="w-[322px] h-[664px] flex flex-col justify-center items-start gap-6">
                                            <div className="w-full flex items-center justify-center">
                                                <Search />
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
                                    </div>
                                    <div className="flex flex-col items-center xl:gap-6 gap-3 custom-list-recruitcard">
                                        <div className="flex items-center flex-wrap gap-6">
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
            ) : ( <Outlet /> )
            }
        </Layout>
    )
}

export default Recruitment