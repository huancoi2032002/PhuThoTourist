import { Clock, MapIcon } from "../../../assets";
import { LogoRecruitmentXL } from "../../../assets/Logo";
import Layout from "../../../layouts/Layout";
import StatusComponent from "../../../components/Tag/StatusComponent/StatusComponent";
import TueNhi from "../../../assets/tuenhi/tuenhicuahuan.jpg"
import './Styles.scss';
import TableRecuitment from "../../../components/Table/TableRecuitment/TableRecuitment";




const RecruitmentDetail = () => {
    return (
        <div className="w-[1520px] custom-recruitmentdetail px-40 py-12 flex flex-col gap-10">
            <div className="w-full flex items-center justify-between">
                <div className="inline-flex items-center gap-6">
                    <LogoRecruitmentXL />
                    <div className="flex flex-col items-start gap-4">
                        <h1 className="font-roboto custom-title-recruit">Nhân viên thiết kế đồ họa</h1>
                        <span className="font-roboto text-blue-400 font-normal text-xl">Nhân viên chính thức</span>
                        <div className="flex items-start gap-6">
                            <div className="flex items-center gap-1">
                                <MapIcon className="w-6 h-6 fill-[#A3A3A3]" />
                                <span className="font-roboto text-lg font-semibold text-gray-500">CVVH Đầm Sen</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-6 h-6 fill-[#A3A3A3]" />
                                <span className="font-roboto text-lg font-semibold text-gray-500 line-height-normal">2 tuần trước</span>
                            </div>
                        </div>
                    </div>
                </div>
                <StatusComponent status="Đang tuyển" size={2} />
            </div>
            <div className="w-full h-[687px]">
                <img src={TueNhi} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-start gap-8">
                <h1 className="text-blue-500 font-roboto text-2xl font-semibold">Chi tiết tin tuyển dụng</h1>
                <TableRecuitment />
            </div>
        </div>
    )
}

export default RecruitmentDetail