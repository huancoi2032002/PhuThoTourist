import { ref, onValue, get } from 'firebase/database';
import { db } from '../config/config'; // Import cấu hình Firebase


export const fetchSlides = async (): Promise<any[]> => { // Gọi dữ liệu ở slides để hiện thị
    return new Promise((resolve, reject) => {
        const slidesRef = ref(db, 'slides');
        onValue(slidesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const slidesData = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key],
                }));
                resolve(slidesData);
            } else {
                resolve([]); // Trả về mảng rỗng nếu không có dữ liệu
            }
        }, (error) => {
            reject(error); // Từ chối promise nếu có lỗi
        });
    });
};

export const fetchPosts = async (): Promise<any[]> => { // Lấy dữ liệu post từ firebase 
    const postsRef = ref(db, 'post');
    const snapshot = await get(postsRef);
    if(snapshot.exists()){
        const dataPost = snapshot.val();
        return Object.keys(dataPost).map(key => ({
            id: key,
            src: dataPost[key].image,
            title: dataPost[key].title,
            roleName: dataPost[key].ruleCreatePost,
            view: dataPost[key].view,
            day: dataPost[key].createDate,
        }))
    }
    return [];
};