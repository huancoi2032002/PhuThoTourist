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
            des: dataPost[key].des
        }))
    }
    return [];
};

export const fetchHomeSlider = async (): Promise<any[]> => {
    const postsRef = ref(db, 'homeslider');
    const snapshot = await get(postsRef); 
    if(snapshot.exists()){
        const homeSlider = snapshot.val();
        return Object.keys(homeSlider).map(key => ({
            id: key,
            link: homeSlider[key].link,
        }))
    }
    return [];
}

export const fetchDocument = async (): Promise<any[]> => {
    const postsRef = ref(db, 'document');
    const snapshot = await get(postsRef);
    if(snapshot.exists()){
        const documentData = snapshot.val();
        return Object.keys(documentData).map(key => ({
            id: key,
            src: documentData[key].src,
            content: documentData[key].content
        }))
    }
    return [];
};
export const fetchDocumentTable = async (): Promise<any[]> => {
    const postsRef = ref(db, 'documentatble');
    const snapshot = await get(postsRef);
    if(snapshot.exists()){
        const documentTableData = snapshot.val();
        return Object.keys(documentTableData).map(key => ({
            id: key,
            stt: documentTableData[key].stt,
            name: documentTableData[key].name,
            date: documentTableData[key].date,
            download: documentTableData[key].download
        }))
    }
    return [];
};

export const fetchRecruitment = async (): Promise<any[]> => {
    const postsRef = ref(db, 'recruitment');
    const snapshot = await get(postsRef);
    if(snapshot.exists()){
        const recruitmentData = snapshot.val();
        return Object.keys(recruitmentData).map(key => ({
            id: key,
            title: recruitmentData[key].title,
            position: recruitmentData[key].position,
            location: recruitmentData[key].location,
            des: recruitmentData[key].des,
            status: recruitmentData[key].status,
        }))
    }
    return [];
};
export const fetchHomeService = async (): Promise<any[]> => {
    const postsRef = ref(db, 'homeservice');
    const snapshot = await get(postsRef);
    if(snapshot.exists()){
        const homeServiceData = snapshot.val();
        return Object.keys(homeServiceData).map(key => ({
            title: homeServiceData[key].title,
            des: homeServiceData[key].des,
            src: homeServiceData[key].src,
        }))
    }
    return [];
};