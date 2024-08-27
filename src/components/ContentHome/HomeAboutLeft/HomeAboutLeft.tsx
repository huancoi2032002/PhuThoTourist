import { Button } from '../../button/Button';
import { Rectangle } from '../../Rectangles/Rectangle/Rectangle';
import Vector from '../../Vector/Vector';
import './Styles.scss'

const HomeAboutLeft = () => {
    return (
        <div className="inline-flex flex-col xl:items-start items-center xl:gap-[30px] xl:w-[694px] w-[375px] xl:h-[535px] py-[6px] gap-[4px]">
            <div className="flex flex-col xl:items-start items-center gap-[10px] xl:w-[666px]">
                <h3 className="font-roboto text-center xl:text-[18px] text-[12px] font-semibold about-me">VỀ CHÚNG TÔI</h3>
                <h2 className='text-blue-primary-600 font-philosopher xl:text-[30px] text-[20px] xl:text-start text-center font-bold leading-normal'>Chúng tôi cung cấp dịch vụ du lịch đáp ứng mọi nhu cầu của bạn!</h2>
                <Rectangle width='w-[154px]'/>
            </div>
            <div className='flex items-start gap-[19px] xl:h-[288px]'>
                <div className=" h-full">
                    <Vector />
                </div>
                <div className="xl:w-[675px] font-roboto xl:text-[16px] text-[14px] font-normal leading-custom custom-color ">
                    <p className="">Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist), là một đơn vị thành viên của Saigontourist. Phuthotourist được biết đến với các sản phẩm du lịch nổi tiếng tại TP.HCM (Quận 11) như:</p>
                    <ul className="list-inside">
                        <li>Công viên Văn hóa Đầm Sen</li>
                        <li>Khu du lịch sinh thái Vàm Sát</li>
                        <li>Khách sạn Ngọc Lan</li>
                        <li>Khách sạn Phú Thọ</li>
                        <li>Trung tâm chăm sóc sức khỏe & giải trí Đầm Sen (Damsen Plaza)</li>
                        <li>Nhà hàng Thủy Tạ Đầm Sen</li>
                        <li>Cà phê Vườn Đá</li>
                        <li>Trung tâm Dịch vụ Du lịch Đầm Sen (Damsen Travel)</li>
                        <li>Liên kết với Công viên nước Đầm Sen (Đầm Sen Water Park).</li>
                    </ul>
                </div>
            </div>
            <div className="custom-btn-about">
                <Button type='button' label='Xem chi tiết' />
            </div>
        </div>
    )
}

export default HomeAboutLeft