import React from 'react';
import './Hero.css';
import headshot_img from '../../data/Headshot.jpg';
import resume from '../../data/resume.pdf';

const Hero = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Vandan_Shah_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div id='home' className='hero'>
            <img src={headshot_img} alt="Vandan Shah" />
            <h1><span>Hi, I'm Vandan!</span></h1>
            <p>
                Computer Science + Business at the <span>University of Michigan</span>〽️
                <p></p>
                Building impactful technology solutions with creativity, passion, and purpose.
            </p>
            <div className='hero-action'>
                <div className="hero-connect">Connect with me</div>
                <div 
                    className="hero-resume"
                    onClick={handleDownload}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleDownload()}
                >
                    Download Resume
                </div>
            </div>
        </div>
    );
};

export default Hero;