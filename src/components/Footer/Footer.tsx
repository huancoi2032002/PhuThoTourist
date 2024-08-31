import React from "react"
import { CopyIcon, EllipseIcon, EmailIcon, FacebookIcon, Logo, MapIcon, PhoneIcon } from "../../assets/index"
import './Styles.scss'
import { Link } from "react-router-dom"

type FooterProps = {
    label: string
    link?: string 
}
const Title: React.FC<FooterProps> = ({ label }) => (
    <h1 className="font-philosopher xl:text-[24px] text-base  text-[#FFF]">{label}</h1>
)
const ListLink: React.FC<FooterProps> = ({label, link}) => (
    <div className="flex items-center gap-[8px] custom-text">
        <EllipseIcon className="size-[6px] fill-[#FFF]" />
        {link ? <Link to={link}>{label}</Link> : <span>{label}</span>}
    </div>
)

const Footer = () => {
    return (
        <div className="w-full custom-footer flex items-center justify-between xl:px-[20px]">
            <div className="xl:h-[210px] w-[307px] xl:max-w-[438px] flex flex-col justify-between items-start">
                <div className="flex">
                    <Logo className="custom-logo-footer" />
                    <div className="font-helvetica flex flex-col justify-around items-start">
                        <h4 className="xl:text-[12.5px] text-[8.147px] text-white">CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ</h4>
                        <h3 className="text-[#9FF] xl:text-[33.5px] text-[font-size: 21.121px;]">PHUTHOTOURIST</h3>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center gap-[5px] font-roboto text-[13px] text-[#FFF] custom-copyright-primary">
                    <p>Copyright</p>
                    <CopyIcon />
                    <p>Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)</p>
                </div>
            </div>
            <div className="xl:max-w-[245px] w-[307px] flex flex-col items-start gap-[20px] text-[#FFF]">
                <Title label="LIÊN HỆ" />
                <div className="flex h-[161px] flex-col justify-between items-start font-roboto leading-[21px] font-normal">
                    <div className="flex items-start gap-[8px]">
                        <MapIcon className="xl:w-6 xl:h-6 w-[18px] h-[18px] fill-white flex-shrink-0" />
                        <p className="xl:text-[15px] text-[14px]">15 Đường số 2, Cư xá Lữ Gia, Phường 15, Quận 11, TP. HCM</p>
                    </div>
                    <div className="flex items-start gap-[8px]">
                        <PhoneIcon className="xl:w-6 xl:h-6 w-[18px] h-[18px] flex-shrink-0 " />
                        <p className="">02838650921</p>
                    </div>
                    <div className="flex items-start gap-[8px]">
                        <EmailIcon className="xl:w-6 xl:h-6 w-[18px] h-[18px] flex-shrink-0 px-[2px] pt-[3px] pb-[4px]" />
                        <p className="">vanphong@damsenpark.vn</p>
                    </div>
                    <div className="flex items-start gap-[10px]">
                        <FacebookIcon className="xl:w-5 xl:h-5 w-[16px] h-[16px] flex-shrink-0" />
                        <p className="">Phuthotourist</p>
                    </div>
                </div>

            </div>
            <div className="xl:max-w-[536px] w-[307px] flex flex-col items-start gap-[20px]">
                <Title label="CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST" />
                <div className="list-inside h-[161px] flex flex-col justify-between ">
                    <ListLink label="Công viên Văn hóa Đầm Sen" link="" />
                    <ListLink label="Khu du lịch sinh thái Vàm Sát" link="" />
                    <ListLink label="Khách sạn Ngọc Lan (Quận 1)" link="" />
                    <ListLink label="Khách sạn Phú Thọ (Quận 11)" link="" />
                    <ListLink label="Trung tâm Du lịch Đầm Sen" link="" />
                </div>

            </div>
            <div className="w-[307px] flex justify-center gap-[5px] font-roboto text-[13px] text-[#FFF] custom-copyright lg:hidden">
                    <p>Copyright</p>
                    <CopyIcon />
                    <p>Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)</p>
            </div>
        </div>
    )
}

export default Footer