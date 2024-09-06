import { useState, useEffect } from "react";
import PostCard from "../../../components/Cards/PostCard/PostCard";
import './Styles.scss';
import { MiniTag } from "../../../components/ContentPost/NewsPost/NewsPost";
import Layout from "../../../layouts/Layout";
import { fetchPosts } from "../../../firebase";
import PDF from '../../../assets/pdf.png';



const ArticleDetails = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const postsData = await fetchPosts();
                setPosts(postsData);
            } catch (error) {
                console.error("Error fetching posts: ", error);
            }
        };

        loadPosts();
    }, []);

    return (
        <Layout>
            <div className="flex xl:p-12 flex-col items-start xl:gap-12 custom-articledetail xl:mt-36 mb-10 gap-3">
                <div className="xl:w-[1152px] xl:h-[101px] flex xl:pr-[38px] flex-col justify-center items-start gap-[2px]">
                    <h1 className="xl:w-[1214px] xl:h-[80px] custom-title-articledetail font-roboto">Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022</h1>
                    <p className="flex justify-center custom-author-articledetail font-roboto">by tuyendung in on Tháng Năm 21, 2020</p>
                </div>
                <div className="flex flex-col items-center gap-8">
                    <div className="xl:w-[1152px] w-[311px] xl:h-[688px] h-[183px] rounded-[4px]">
                        {/* Conditional rendering to check if posts[0] exists */}
                        {posts.length > 0 && posts[0].src ? (
                            <img src={posts[0].src} alt="Article Image" className="w-full h-full object-cover" />
                        ) : (
                            <p>Loading image...</p>
                        )}
                    </div>
                    <div className="w-full flex flex-col items-start gap-4">
                        <div className="xl:w-[1152px] flex flex-col gap-3 custom-des-article">
                            <p>
                                Công ty Cổ phần Dịch vụ Du lịch Phú Thọ xin thông báo đến các đơn vị tham gia đấu giá cạnh tranh hạng mục “Hợp tác giữ xe 02 – 04 bánh tại Công viên văn hóa Đầm Sen (Số 03 Hòa Bình, Phường 03, Quận 11, TP.HCM), kết quả như sau.
                            </p>
                            <ul className="list-inside-des">
                                <li>Tên hạng mục đấu giá: Hợp tác giữ xe 02 -04 bánh.</li>
                                <li>Giá khởi điểm được duyệt: 241.667.000 đồng/tháng (đã bao gồm thuế GTGT).</li>
                                <li>Bên mời đấu giá: Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Địa chỉ: Số 15 đường số 2 cư xá Lữ Gia, Phường 15, Quận 11, TP.HCM).</li>
                                <li>Địa điểm thực hiện: Công viên văn hóa Đầm Sen.</li>
                                <li>Hình thức lựa chọn đơn vị: Đấu giá cạnh tranh</li>
                            </ul>
                            <p>Kết quả lựa chọn đơn vị:</p>
                            <ul className="list-inside-des">
                                <li>Công ty TNHH Thương mại Dịch vụ Hai Tám Sáu (Mã số doanh nghiệp: 0313270903 – Địa chỉ: 247/8B Hoàng Hoa Thám, Phường 05, Quận Phú Nhuận, TP.HCM)</li>
                                <li>Giá tham gia: 13.500.000.000 đồng (đã gồm thuế GTGT)</li>
                                <li>Xếp hạng hồ sơ: Hạng 1</li>
                                <li>Giá trúng đấu giá: 13.500.000.000 đồng (đã gồm thuế GTGT)</li>
                                <li>Loại hợp đồng: Hợp đồng hợp tác kinh doanh</li>
                                <li>Thời gian thực hiện hợp đồng: 03 năm</li>
                            </ul>
                            <p>
                                Đề nghị Công ty TNHH TMDV Hai Tám Sáu trong vòng 02 ngày kể từ thời điểm nhận được thông báo trúng đấu giá của Công ty Cổ phần Dịch vụ Du lịch Phú Thọ, phải tiến hành thương thảo và ký hợp đồng. Nộp tiền bảo lãnh thực hiện hợp đồng bằng tiền mặt hoặc chuyển khoản tương ứng số tiền: 895.000.000 đồng (365 triệu/tháng x 03 tháng = 1.095.000.000 đồng trừ 200 triệu đồng tiền đã ký quỹ) ngay sau khi ký hợp đồng cho Công ty Cổ phần Dịch vụ Du lịch Phú Thọ theo đúng Hồ sơ yêu cầu mời đấu giá cạnh tranh ngày 31/5/2022.
                            </p>
                            <p>
                                Nếu quá thời hạn trên mà không thực hiện thương thảo, ký hợp đồng hoặc không nộp đủ số tiền bảo lãnh thực hiện hợp đồng, thì sẽ mất tiền ký quỹ và mặt bằng đấu giá hợp tác sẽ được chuyển cho khách hàng có hồ sơ đấu giá xếp hạng hai.
                            </p>
                            <p>
                                Kế hoạch ký kết hợp đồng với đơn vị được lựa chọn: Dự kiến trước ngày 30/6/2022.
                            </p>
                            <p>Với những công ty không trúng đấu giá hợp tác sẽ được nhận lại ngay số tiền đã nộp ký quỹ là 200.000.000 đồng tại Văn phòng Công ty Cổ phần Dịch vụ Du lịch Phú Thọ.</p>
                            <p>Thông báo này là cơ sở để ký kết hợp đồng với nhà cung cấp trúng thầu đúng theo quy định.Trân trọng</p>
                            <p>Chi tiết xem trong văn bản đính kèm</p>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <div className="xl:w-[831px] xl:h-[747px] w-[311px] h-[284px]">
                        <img src={PDF} className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <h1 className="font-roboto custom-title-post-detail">Bài viết liên quan</h1>
                    <div className="w-[1152px] h-[292px] flex justify-between items-start custom-list-postcarddetails">
                        {posts.slice(0, 4).map(post => (
                            <PostCard
                                src={post.src}
                                title={post.title}
                                roleName={post.roleName}
                                day={post.day}
                                view={post.view}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col items-start gap-3 xl:hidden">
                        {posts.slice(0, 4).map(post => (
                            <MiniTag
                                day={post.day}
                                view={post.view}
                                title={post.title}
                                src={post.src}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ArticleDetails;
