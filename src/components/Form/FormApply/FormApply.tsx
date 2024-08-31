import React from "react";
import dayjs from "dayjs";
import './Styles.scss'
import { Button } from "../../button/Button";

interface IUser {
    nameUser: string
    dateOfBirth: string
    address: string
    email: string
    gender: string
    placeOfBirth: string
    level: string
    phoneNumber: string
    readyToWork: string
    overTime: string
    placesOfWork: string
    personalExperience: string
    cv: string
    facebook: string
}
const FormApply = () => {
    return (
        <div className="w-[954px] form-apply font-roboto flex flex-col gap-3 items-start">
            <h1 className="custom-title-formapply font-roboto">Ứng tuyển Online</h1>
            <div className="flex flex-col items-start gap-8">
                <div className="flex items-start gap-20">
                    <div className="flex flex-col items-start gap-3">
                        <div className="flex flex-col items-start gap-2">
                            <span>Họ tên</span>
                            <input type="text" placeholder="Nguyen Van A" className="custom-input-apply" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <span>Năm sinh</span>
                            <input type="text" placeholder="" className="custom-input-apply" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <span>Nơi ở hiện nay</span>
                            <input type="text" placeholder="" className="custom-input-apply" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <span>Email</span>
                            <input type="text" placeholder="" className="custom-input-apply" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <span>Trình độ</span>
                            <input type="text" placeholder="" className="custom-input-apply" />
                        </div>
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
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <div className="flex flex-col items-start gap-2">
                            <span>Giới tính</span>
                            <div className="radio-group h-10">
                                <input type="radio" id="male" name="gender" className="custom-radio-apply" />
                                <label htmlFor="male">Nam</label>

                                <input type="radio" id="female" name="gender" className="custom-radio-apply" />
                                <label htmlFor="female">Nữ</label>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <span>Nơi sinh</span>
                            <input type="text" placeholder="" className="custom-input-apply" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <span>Điện thoại</span>
                            <input type="text" placeholder="" className="custom-input-apply" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <span>Facebook cá nhân</span>
                            <input type="text" placeholder="" className="custom-input-apply" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <span>Đính kèm CV</span>
                            <input type="text" placeholder="" className="custom-input-apply" />
                        </div>
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
                    </div>
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
                <div className="w-36">
                    <Button type="button" label="Gửi ngay" />
                </div>
            </div>
        </div>
    )
}

export default FormApply