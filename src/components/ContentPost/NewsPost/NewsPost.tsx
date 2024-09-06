import React, { useState, useEffect } from "react";
import { TypeCard } from "../../../Store/Card/TypeCard";
import { EllipseIcon } from "../../../assets";
import { fetchPosts } from "../../../firebase";
import './Styles.scss'

// MiniTag component
export const MiniTag: React.FC<TypeCard> = ({ view, day, src, title }) => {
    return (
        <div className="xl:w-[314px] w-[304px] h-[102px] flex bg-white rounded-[4px] custom-minitag flex-shrink-0 gap-[12px] overflow-hidden">
            <div className="w-[104px] h-[102px] flex-shrink-0">
                <img src={src} className="w-full h-full object-cover" alt="Post Thumbnail" />
            </div>
            <div className="w-auto h-auto flex flex-col items-start justify-center gap-[8px]">
                <h3 className="text-[#666] font-roboto text-[14px] font-bold">
                    {title}
                </h3>
                <div className="flex items-center gap-[8px] font-roboto">
                    <div className="flex items-center gap-[4px] custom-text">{view} lượt xem</div>
                    <EllipseIcon className="size-[3px] custom-fill" />
                    <div className="flex items-center gap-[8px] custom-text">{day}</div>
                </div>
            </div>
        </div>
    );
}

// NewsPost component
const NewsPost = () => {
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
    //Cũng như ở bên kia
    return (
        <div className="h-[603px] xl:w-[362px] flex flex-col p-[20px] custom-bg-newspost rounded-[8px]">
            <div className="pb-[16px]">
                <h2 className="font-roboto text-[24px] font-bold text-[#0054A6]">Bài mới nhất</h2>
            </div>
            <div className="h-[520px] inline-flex flex-col items-start gap-4 scroll-newspost flex-shrink-0">
                {posts.map(post => (
                    <MiniTag
                        key={post.id}
                        day={post.createDate}
                        view={post.view}
                        title={post.title}
                        src={post.src}
                    />
                ))}
            </div>
        </div>
    );
}

export default NewsPost;
