import React, { useEffect, useRef } from "react";

import './Styles.scss'

interface TableRow {
    title: string;
    content: string | React.ReactNode;
}

interface CustomTableProps {
    data: TableRow[];
}
const CustomTable: React.FC<CustomTableProps> = ({ data }) => {
    return (
        <div className="custom-table">
            {data.map((row, index) => (
                <div className="custom-table-row" key={index}>
                    <div className="custom-table-cell custom-table-col-first">{row.title}</div>
                    <div className="custom-table-cell">{row.content}</div>
                </div>
            ))}
        </div>
    );
};
const JobDescription = () => {
    return (
        <ul className="list-inside-table">
            <li>Thiết kế hình ảnh, brochure, banner, poster, pano, backdrop sân khấu, các loại vé mời … và các ấn phẩm phục vụ sự kiện, truyền thông của công viên.</li>
            <li>Chụp hình, quay phim, dựng video đơn giản.</li>
            <li>Lên phác thảo, trao đổi ý tưởng với quản lý và hoàn thiện thiết kế.</li>
            <li>Các chi tiết về công việc được trao đổi tại buổi phỏng vấn.</li>
        </ul>
    )
}
const Interest = () => {
    return (
        <ul className="list-inside-table">
            <li>Được ký hợp đồng lao động, tham gia đầy đủ chế độ BHXH.</li>
            <li>Thưởng tháng 13, 14, các ngày lễ, tết trong năm.</li>
            <li>Được phục vụ bữa ăn trưa tại nơi làm việc.</li>
            <li>Được trang bị đồng phục, khám sức khỏe định kỳ hàng năm.</li>
            <li>Được tham gia Bảo hiểm tai nạn 24/24.</li>
            <li>Nghỉ phép: 12 ngày phép / năm, công tác 5 năm thêm 1 ngày.</li>
            <li>Được tham gia miễn phí các khóa đào tạo nâng cao nghiệp vụ.</li>
            <li>Môi trường làm việc thân thiện, nhiều cơ hội học hỏi từ đội ngũ quản lý, nhân sự giàu kinh nghiệm, nhiệt huyết.</li>
            <li>Các chế độ khác: Quà sinh nhật, cưới hỏi, lì xì tết. Quà trung thu, quà Tết, quà thiếu nhi 1/6.</li>
            <li>Hỗ trợ ốm đau, ma chay, sinh con. Tham gia Ngày hội Gia đình, Ngày hội Tuổi thơ, hoạt động văn thể mỹ hàng năm.</li>
        </ul>
    )
}
const Request = () => {
    return (
        <ul className="list-inside-table">
            <li>Tốt nghiệp từ Cao đẳng chuyên ngành Mỹ thuật, Đồ họa...</li>
            <li>Sử dụng thành thạo các phần mềm thiết kế (Photoshop, Corel, Illustrator…).</li>
            <li>Có khả năng quay và dựng video hấp dẫn người xem.</li>
            <li>Sử dụng thành thạo máy ảnh, máy quay, flycam...</li>
            <li>Có khiếu thẩm mỹ, sáng tạo, chủ động trong công việc.</li>
            <li>Có thể làm việc cuối tuần, lễ tết theo đặc thù kinh doanh Công viên Giải trí.</li>
        </ul>
    )
}
const Profile = () => {
    return (
        <div>
            <span>Thông tin ứng tuyển:</span>
            <ul className="list-inside-table">
                <li>Ứng viên vui lòng gửi CV đến email: tuyendung@damsenpark.vn.</li>
                <li>Hoặc nộp hồ sơ trực tiếp tại Trụ sở Văn phòng Công ty: 15 đường số 2, cư xá Lữ Gia, P. 15, Quận 11..</li>
            </ul>
            <span>(ĐT: 028 38 650 921  - Phòng Nhân sự).</span>
        </div>
    )
}
const data = [
    { title: 'Vị trí', content: 'Nhân viên thiết kế đồ họa' },
    { title: 'Số lượng', content: '02 người' },
    { title: 'Địa chỉ làm việc', content: 'Công viên văn hóa Đầm Sen' },
    { title: 'Mô tả công việc', content: <JobDescription /> },
    { title: 'Ngày làm việc', content: '...' },
    { title: 'Giờ làm việc', content: 'Giờ hành chính' },
    { title: 'Quyền lợi', content: <Interest /> },
    { title: 'Yêu cầu', content: <Request /> },
    { title: 'Độ tuổi', content: '22 - 27 tuổi' },
    { title: 'Trình độ', content: 'Cao đẳng' },
    { title: 'Hồ sơ gồm', content: <Profile /> },
];
const TableRecuitment = () => {

    return (
        <div className="w-[1200px] flex items-stretch">
            <CustomTable data={data} />
        </div>
    );
}

export default TableRecuitment;
