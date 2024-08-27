import DatePickerComponent from "../../components/Filter/FilterDate/DateFilter";
import Search from "../../components/Search/Search";
import Table from "../../components/Table/TableDocument/TableDocument";
import { GroupDown } from "../../assets";
import DocumentCard from "../../components/Cards/DocumentCard/DocumentCard";
import RectangleTitle from "../../components/Rectangles/RectangleTitle/RectangleTitle";
import TueNhi from '../../assets/tuenhi/tuenhicuahuuhuan.jpg';
import Layout from "../../layouts/Layout";
import './Styles.scss';

const data = [
    { stt: 1, name: 'Tài liệu 1', date: '01/01/2023', download: '/download1' },
    { stt: 2, name: 'Tài liệu 2', date: '01/02/2023', download: '/download2' },
    { stt: 3, name: 'Tài liệu 3', date: '01/03/2023', download: '/download3' },
    { stt: 4, name: 'Tài liệu 4', date: '01/04/2024', download: '/download4' },
    { stt: 5, name: 'Tài liệu 5', date: '01/05/2025', download: '/download5' },
    { stt: 6, name: 'Tài liệu 6', date: '01/06/2026', download: '/download6' },
    { stt: 7, name: 'Tài liệu 7', date: '01/07/2027', download: '/download7' },
    { stt: 8, name: 'Tài liệu 8', date: '01/08/2028', download: '/download8' },
    { stt: 9, name: 'Tài liệu 9', date: '01/09/2029', download: '/download9' },
    { stt: 10, name: 'Tài liệu 10', date: '01/010/2020', download: '/download10' },
    { stt: 11, name: 'Tài liệu 11', date: '01/09/2029', download: '/download11' },
    { stt: 12, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 13, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 14, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 15, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 16, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 17, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 18, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 19, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 20, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 21, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 22, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 23, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 24, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 25, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 26, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 27, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 28, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 29, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 30, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 31, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 32, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 33, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 34, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 35, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 36, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 37, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 38, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 39, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 40, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 41, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 42, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 43, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 44, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 45, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 46, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 47, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 48, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 49, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 50, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 51, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 52, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 53, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 54, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 55, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 56, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 57, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 58, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 59, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 60, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 61, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 62, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 63, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 64, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },
    { stt: 65, name: 'Tài liệu 12', date: '01/09/2029', download: '/download12' },

    // Thêm dữ liệu khác nếu cần
];

const Document = () => {
    const handleScroll = () => {
        const element = document.getElementById('scrollTargetDocument');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <Layout>
            <div className='w-full flex flex-col items-center justify-center mt-32'>
                <RectangleTitle label="TÀI LIỆU" />
            </div>
            <div className="inline-flex flex-col items-start gap-[22px]">
                <div className="flex h-[261px] justify-center items-start gap-[22px]">
                    <DocumentCard src={TueNhi} title="Báo cáo Tài Chính năm 2022-2023" />
                    <DocumentCard src={TueNhi} title="Báo cáo Tài Chính năm 2022-2023" />
                    <DocumentCard src={TueNhi} title="Báo cáo Tài Chính năm 2022-2023" />
                    <DocumentCard src={TueNhi} title="Báo cáo Tài Chính năm 2022-2023" />
                </div>
                <div className="flex h-[261px] justify-center items-start gap-[22px]">
                    <DocumentCard src={TueNhi} title="Báo cáo Tài Chính năm 2022-2023" />
                    <DocumentCard src={TueNhi} title="Báo cáo Tài Chính năm 2022-2023" />
                    <DocumentCard src={TueNhi} title="Báo cáo Tài Chính năm 2022-2023" />
                    <DocumentCard src={TueNhi} title="Báo cáo Tài Chính năm 2022-2023" />
                </div>
            </div>
            <div className="animate-move-down cursor-pointer mb-[200px]" onClick={handleScroll}>
                <GroupDown />
            </div>
            <div
                id="scrollTargetDocument"
                className="w-full h-full flex items-center justify-center"
            >
                <div className="w-[1234px] h-[807px] custom-document px-[54px] py-12 flex flex-col gap-[14px]">
                    <div className="flex justify-between items-center">
                        <div className="inline-flex flex-col items-start gap-2">
                            <label htmlFor="" className="text-[#0054A6] font-roboto text-lg font-semibold">Ngày tạo</label>
                            <DatePickerComponent />
                        </div>
                        <div className="inline-flex flex-col items-start gap-2">
                            <label htmlFor="" className="text-[#0054A6] font-roboto text-lg font-semibold">Từ khóa</label>
                            <Search />
                        </div>
                    </div>
                    <div className="flex w-[1126px] items-start rounded-lg">
                        <Table data={data} />
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Document