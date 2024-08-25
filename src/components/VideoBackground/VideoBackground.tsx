import React from 'react';
import backgroundVideo from '../../assets/background/background.mp4';
import './Styles.scss'

const VideoBackground: React.FC = () => {
    return (
        <div className="video-container">
            <video autoPlay muted loop className="video-background">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoBackground;
