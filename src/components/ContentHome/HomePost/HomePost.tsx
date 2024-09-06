
import React, { useState, useEffect } from 'react'
import Title from '../../title/Title'
import './Styles.scss'
import Card from '../../Cards/Card/Card'
import { Button } from '../../button/Button';
import { useNavigate } from "react-router-dom";
import { fetchPosts } from '../../../firebase';


const HomePost = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const navigate = useNavigate();
    const textColorStyle: React.CSSProperties = {
        color: '#FFF'
    }
    const handleSlideClick = (index: number) => {
        console.log(`Slide ${index} clicked`);
    };
    const handleClick = () => {
        navigate('/articles', { state: {} });
    };
    useEffect(() => {
        const loadPosts = async () => {
            try {
                const postsData = await fetchPosts();
                setPosts(postsData.slice(0, 3)); // Limit to 3 posts
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        loadPosts();
    }, []);

    return (
        <div className="xl:w-[1520px] xl:h-[892px] w-[375px] home-post flex flex-col xl:justify-around items-center xl:gap-[10px] gap-4">
            <Title
                titleHeader='CHIA SẺ THÔNG TIN'
                titleContent='Bài viết mới'
                description='Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch'
                textColor={textColorStyle}
                width="w-[56px] xl:w-[130px]"
            />
            <div className="w-full flex xl:justify-between items-center xl:px-[193px] custom-list-card-posthome">
                {posts.map(post => (
                    <Card
                        src={post.src}
                        roleName={post.roleName}
                        title={post.title}
                        description={post.des}
                        view={post.view}
                        day={post.day}
                        showRoles={true}
                        showDetails={true}
                    />
                ))}
            </div>
            <div className="w-[343px]">
                <Button label='Xem thêm bài viết' type='button' onClick={handleClick} />
            </div>
        </div>
    )
}

export default HomePost