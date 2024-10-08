import React from "react"
import './Styles.scss'
import { useNavigate } from "react-router-dom"

type NewsCardProps = {
    src: string
    title: string
    description: string
}
const NewsCard: React.FC<NewsCardProps> = ({ src, title, description }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/articles/articledetails', { state: { title } });
    };
    return (
        <div className="xl:w-[362px] w-[343px] h-auto rounded-[12px] bg-white newscard-custom cursor-pointer flex-shrink-0" onClick={handleCardClick}>
            <div className="w-full h-[197px]">
                <img src={src} className="w-full h-full object-cover rounded-t-[12px]" alt="Description" />
            </div>
            <div className="flex flex-col items-start gap-[12px] py-8">
                <h2 className="font-roboto custom-h2-newscard w-full text-center">{title}</h2>
                <p className="font-roboto custom-p-newscard w-full text-center">{description}</p>
            </div>
        </div>
    )
}

export default NewsCard