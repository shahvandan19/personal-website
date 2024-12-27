import React from 'react';
import './about.css';
import headshot_img from '../../data/Headshot.jpg';

const About = () => {
  const languages = ['C++', 'Python', 'JavaScript', 'SQL', 'Tensorflow', 'Git', 'AWS'];

  return (
    <div id='about_me' className="about-section">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        <div className="about-left">
          <img src={headshot_img} alt="Vandan Shah" />
        </div>
        <div className="about-right">
          <p>
            <em>
              "Technology is best when it brings people together." - Matt Mullenweg
            </em>
          </p>
          <p>
            Hi, my name is Vandan Shah, and I am a senior at the University of Michigan studying Computer Science with a minor in Business Administration. 
            I’m passionate about using technology to help businesses and communities solve complex problems. I’m interested in Software Engineering, Product Management, 
            and Management Consulting opportunities; check out some of my work below!
          </p>
          <p>
            Unlike most Computer Science students, I had a late start to programming—the first time I wrote a line of code was during my freshman year of college. 
            At first, it was incredibly challenging, but the thrill of solving tough problems quickly became addictive and inspired me to keep learning and growing.
          </p>
          <p>
            As I delved deeper into Computer Science, I found myself drawn to the intersection of technology and business. This passion stems from a lifelong interest 
            in understanding how systems work and how they can be improved. I'm particularly fascinated by the transformative potential of AI and Machine Learning 
            and aspire to integrate these technologies into innovative solutions that address real-world challenges.
          </p>
          <p>
            When I’m not working, you can catch me playing pickup basketball, capturing moments through film photography, diving into a good book, or brewing the perfect cup of coffee.
            Thank you for taking the time to check out my website. Feel free to explore my professional experiences and reach out—I would love to connect!
          </p>
          <div className="languages-list">
            {languages.map((lang) => (
              <div className="language-item" key={lang}>
                {lang}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
