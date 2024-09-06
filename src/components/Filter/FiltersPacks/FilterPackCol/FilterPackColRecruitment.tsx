import React from "react";
import { Button } from "../../../button/Button";
import Chips from "../../../Tag/Chips/Chips";
import { BagIcon, PersonCard, Map } from "../../../../assets/iconpack";

interface FilterSettingMobileProps {
    isOpen: boolean;
    onClose: () => void;
}

const FilterPackColRecruitment: React.FC<FilterSettingMobileProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`flex flex-col items-start pb-[9px] px-6 custom-filtersettingmobile font-roboto ${isOpen ? 'open' : ''}`}>
            <div className="h-6 flex w-full justify-center items-center">
                <div className="w-[54px] h-1 custom-line"></div>
            </div>
            <div className="w-[322px] inline-flex flex-col items-start gap-4 mt-2 mb-4">
                <div className="flex w-[322px] flex-col items-start gap-4">
                    <div className="flex w-[314px] justify-start items-center gap-2">
                        <BagIcon className="w-4 h-4" />
                        <span className="custom-field font-roboto text-sm">Lĩnh vực</span>
                    </div>
                    <div className="w-full flex justify-start items-start flex-wrap gap-2">
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
                        <PersonCard className="w-4 h-4" />
                        <span className="custom-field font-roboto text-sm">Hình thức làm việc</span>
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
                        <Map className="w-4 h-4" />
                        <span className="custom-field font-roboto text-sm">Hình thức làm việc</span>
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
            <div className="w-[327px] h-10 flex justify-center items-start gap-4 mb-6">
                <Button type="button" label="Hủy" variant="secondary" onClick={onClose} />
                <div className="w-[221px]">
                    <Button type="button" label="Xác nhận" onClick={onClose} />
                </div>
            </div>
        </div>
    )
}

export default FilterPackColRecruitment