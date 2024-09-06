import './Styles.scss'
import { Button } from "../../button/Button";
import LogoVN from '../../../assets/vietnam.png';
import { Attached } from "../../../assets";


interface FormApllyProps {
    elements: { id: number; content: JSX.Element }[];
}

const elements = [
    {
        id: 1,
        content: (
            <div className="flex flex-col items-start gap-2">
                <span>Họ tên</span>
                <input type="text" placeholder="Nguyen Van A" className="custom-input-apply" />
            </div>
        )
    },
    {
        id: 2,
        content: (
            <div className="flex flex-col items-start gap-2">
                <span>Năm sinh</span>
                <input type="text" placeholder="12-12-2000" className="custom-input-apply" />
            </div>
        )
    },
    {
        id: 3,
        content: (
            <div className="flex flex-col items-start gap-2">
                <span>Nơi ở hiện nay</span>
                <input type="text" placeholder="123 Âu Cơ, Phường 9, Tân Bình, TP HCM" className="custom-input-apply" />
            </div>
        )
    },
    {
        id: 4,
        content: (
            <div className="flex flex-col items-start gap-2">
                <span>Email</span>
                <input type="text" placeholder="Nguyenvana@gmail.com" className="custom-input-apply" />
            </div>
        )
    },
    {
        id: 5,
        content: (
            <div className="flex flex-col items-start gap-2">
                <span>Trình độ</span>
                <input type="text" placeholder="Đại học" className="custom-input-apply" />
            </div>
        )
    },
    {
        id: 6,
        content: (
            <div className="flex flex-col items-start gap-2">
                <span>Bạn có sẵn sàng đi công tác dài ngày</span>
                <div className="radio-group">
                    <input type="radio" id="readyToWork-yes" name="readyToWork" className="custom-radio-apply" />
                    <label htmlFor="readyToWork-yes">Có</label>

                    <input type="radio" id="readyToWork-depending" name="readyToWork" className="custom-radio-apply" />
                    <label htmlFor="readyToWork-depending">Tùy thời điểm</label>

                    <input type="radio" id="readyToWork-no" name="readyToWork" className="custom-radio-apply" />
                    <label htmlFor="readyToWork-no">Không</label>
                </div>
            </div>
        )
    },
    {
        id: 7,
        content: (
            <div className="flex flex-col items-start gap-2">
                <span>Giới tính</span>
                <div className="radio-group h-10">
                    <input type="radio" id="male" name="gender" className="custom-radio-apply" />
                    <label htmlFor="male">Nam</label>

                    <input type="radio" id="female" name="gender" className="custom-radio-apply" />
                    <label htmlFor="female">Nữ</label>
                </div>
            </div>
        )
    },
    {
        id: 8,
        content: (
            <div className="flex flex-col items-start gap-2">
                <span>Nơi sinh</span>
                <input type="text" placeholder="Phường 6, Quận Tân Bình, TP HCM" className="custom-input-apply" />
            </div>
        )
    },
    {
        id: 9,
        content: (
            <div className="flex flex-col items-start gap-2 custom-input-phonenumber">
                <span>Điện thoại</span>
                <div className="flex items-start gap-4 w-full">
                    <div className="flex h-7 py-1 px-3 items-center gap-1">
                        <div className="flex items-center gap-1 h-7">
                            <img src={LogoVN} className="w-4 h-4" />
                            <span>+84</span>
                        </div>
                    </div>
                    <input type="text" placeholder="0123456789" className=" w-full" />
                </div>
            </div>
        )
    },
    {
        id: 10,
        content: (
            <div className="flex flex-col items-start gap-2">
                <span>Facebook cá nhân</span>
                <input type="text" placeholder="facebook.com.vn" className="custom-input-apply" />
            </div>
        )
    },
    {
        id: 11,
        content: (
            <div className="flex flex-col items-start gap-2 ">
                <span>Đính kèm CV</span>
                <div className="xl:w-[437px] w-[311px] rounded-lg flex xl:items-start items-center gap-1 xl:px-4 px-2 xl:py-[10px] py-[7px] bg-white xl:h-10 h-7">
                    <input type="text" placeholder="Không có tập tin nào được chọn" className="xl:text-base text-xs w-full" />
                        <Attached className="xl:w-6 xl:h-6 h-4 w-4" />
                </div>
            </div>
        )
    },
    {
        id: 12,
        content: (
            <div className="flex flex-col items-start gap-2">
                <span>Bạn có sẵn sàng làm thêm giờ</span>
                <div className="radio-group">
                    <input type="radio" id="readyToWork-yes" name="readyToWork" className="custom-radio-apply" />
                    <label htmlFor="readyToWork-yes">Có</label>

                    <input type="radio" id="readyToWork-depending" name="readyToWork" className="custom-radio-apply" />
                    <label htmlFor="readyToWork-depending">Tùy thời điểm</label>

                    <input type="radio" id="readyToWork-no" name="readyToWork" className="custom-radio-apply" />
                    <label htmlFor="readyToWork-no">Không</label>
                </div>
            </div>
        )
    },
]
const alternateElements = (elements: FormApllyProps['elements']) => {
    const half = Math.floor(elements.length / 2);
    const firstHalf = elements.slice(0, half);
    const secondHalf = elements.slice(half);

    const alternatingElements = [];
    for (let i = 0; i < half; i++) {
        alternatingElements.push(firstHalf[i]);
        alternatingElements.push(secondHalf[i]);
    }

    return alternatingElements;
};

const FormApply = () => {
    const isSmallScreen = window.innerWidth < 768;
    const smallScreenElements = alternateElements(elements);
    const largeScreenFirstHalf = elements.slice(0, 6);
    const largeScreenSecondHalf = elements.slice(6, 12);
    return (
        <div className="xl:w-[954px] w-[311px] form-apply font-roboto flex flex-col gap-3 items-start">
            <h1 className="custom-title-formapply font-roboto">Ứng tuyển Online</h1>
            <div className="flex flex-col items-start gap-8">
                <div className="flex items-start gap-20">
                    {isSmallScreen ? (
                        <div className="flex flex-col items-start gap-3">
                            {smallScreenElements.map(element => (
                                <div key={element.id}>{element.content}</div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <div className="flex flex-col items-start gap-3">
                                {largeScreenFirstHalf.map(element => (
                                    <div key={element.id}>{element.content}</div>
                                ))}
                            </div>
                            <div className="flex flex-col items-start gap-3">
                                {largeScreenSecondHalf.map(element => (
                                    <div key={element.id}>{element.content}</div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
                <div className="flex w-[954px] flex-col items-end gap-3">
                    <div className="flex w-full flex-col items-start gap-2">
                        <span>Những nơi đã từng làm việc trước đây (ghi rõ vị trí)</span>
                        <textarea className="font-roboto"
                            placeholder="Những nơi đã từng làm việc trước đây"
                        ></textarea>
                    </div>
                    <div className="flex w-full flex-col items-start gap-2">
                        <span>Kinh nghiệm bản thân</span>
                        <textarea className="font-roboto"
                            placeholder="Kinh nghiệm bản thân"
                        ></textarea>
                    </div>
                </div>

            </div>
            <div className="w-full flex items-center justify-end">
                <div className="xl:w-36 w-full">
                    <Button type="button" label="Gửi ngay" />
                </div>
            </div>
        </div>
    )
}

export default FormApply