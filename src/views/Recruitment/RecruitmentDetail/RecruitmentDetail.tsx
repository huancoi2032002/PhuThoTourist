import { Clock, MapIcon } from "../../../assets";
import { LogoRecruitment, LogoRecruitmentXL } from "../../../assets/Logo";
import Layout from "../../../layouts/Layout";
import StatusComponent from "../../../components/Tag/StatusComponent/StatusComponent";
import TueNhi from "../../../assets/tuenhi/tuenhicuahuan.jpg"
import './Styles.scss';
import TableRecuitment from "../../../components/Table/TableRecuitment/TableRecuitment";
import FormApply from "../../../components/Form/FormApply/FormApply";


//Đây là trang chi tiết tuyển dụng

const RecruitmentDetail = () => {

    return (
        <div className="xl:w-[1520px] w-[343px] custom-recruitmentdetail xl:px-40 px-4 py-[14px] xl:py-12 flex flex-col xl:gap-10 gap-4 mt-14">
            <div className="xl:w-full w-[311px] flex items-center justify-between">
                <div className="inline-flex items-start flex-col xl:gap-3">
                    <div className="flex">
                        <LogoRecruitment className="block md:hidden" />

                        {/* Logo for screens larger than 768px */}
                        <LogoRecruitmentXL className="hidden md:block" />
                        <div>
                            <h1 className="font-roboto custom-title-recruit">Nhân viên thiết kế đồ họa</h1>
                            <span className="font-roboto text-blue-400 font-normal xl:text-xl text-sm">Nhân viên chính thức</span>
                        </div>
                    </div>
                    <div className="xl:w-full w-[311px] custom-detail-mobile xl:pl-[72px]">
                        <div className="flex items-start xl:gap-6 gap-2 custom-position-date ">
                            <div className="flex items-center gap-1">
                                <MapIcon className="w-6 h-6 fill-[#A3A3A3]" />
                                <span className="font-roboto xl:text-lg text-xs font-semibold text-gray-500">CVVH Đầm Sen</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-6 h-6 fill-[#A3A3A3]" />
                                <span className="font-roboto xl:text-lg text-xs font-semibold text-gray-500 line-height-normal">2 tuần trước</span>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <StatusComponent status="Đang tuyển" size={1} />
                        </div>
                    </div>
                </div>
                <div className="custom-status-recruit">
                    <StatusComponent status="Đang tuyển" size={2} />
                </div>
            </div>
            <div className="w-full h-[687px]">
                <img src={TueNhi} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-start gap-8">
                <h1 className="text-blue-500 font-roboto xl:text-2xl text-sm font-semibold">Chi tiết tin tuyển dụng</h1>
                <TableRecuitment />
            </div>
            <div>
                <FormApply />
            </div>
        </div>
    )
}

export default RecruitmentDetail