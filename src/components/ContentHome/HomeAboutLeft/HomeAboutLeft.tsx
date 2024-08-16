import { Button } from '../../button/Button';
import { Rectangle } from '../../Rectangle/Rectangle';
import Vector from '../../Vector/Vector';
import './Styles.scss'

const HomeAboutLeft = () => {
    return (
        <div className="inline-flex flex-col items-start gap-[30px] w-[694px] h-[535px]">
            <div className="flex flex-col items-start gap-[10px] w-[666px]">
                <h3 className="font-roboto text-center text-[18px] font-semibold about-me">VỀ CHÚNG TÔI</h3>
                <h2 className='text-blue-primary-600 font-philosopher text-[30px] font-bold leading-normal'>Chúng tôi cung cấp dịch vụ du lịch đáp ứng mọi nhu cầu của bạn!</h2>
                <Rectangle width='154px'/>
            </div>
            <div className='flex items-start gap-[19px] h-[288px]'>
                <div className=" h-full">
                    <Vector />
                </div>
                <div className="w-[675px] font-roboto text-[16px] font-normal leading-custom custom-color ">
                    <p>Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist), là một đơn vị thành viên của Saigontourist. Phuthotourist được biết đến với các sản phẩm du lịch nổi tiếng tại TP.HCM (Quận 11) như:</p>
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
            <div className="">
                <Button type='button' label='Xem chi tiết' />
            </div>
        </div>
    )
}

export default HomeAboutLeft