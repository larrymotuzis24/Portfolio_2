import "./about.styles.css";
import profilePic from "./IMG_0210.JPG";

const AboutSection = () => {
  const aboutMe = `
    Hi, I'm Larry Motuzis, a passionate software developer who loves bringing ideas to life on the digital landscape. My journey into the realm of coding began in 2021 when a close friend showcased some of their impressive work, sparking an insatiable curiosity within me. Since then, I've immersed myself in the world of software development, constantly learning and evolving my skillset.

    I take pride in crafting engaging and interactive web applications, always aiming for the perfect balance between form and function. When I'm not writing lines of code or solving complex problems, you can find me exploring new technologies, tinkering with emerging tools, and staying up-to-date with industry trends to ensure I always deliver top-notch, innovative solutions.

    Through dedication and perseverance, I've honed my abilities in various programming languages and frameworks, constantly striving to push the boundaries of what's possible. I believe that software development and Web development is an ever-evolving art form, and I'm committed to growing alongside it. I have done work in software and web development, front-end/back-end web and database/server management.
  `;

  return (
    <div className="about-container">
      <h1> Larry Motuzis </h1>
      <div>
        <h1> About Me </h1>
        <div>{aboutMe}</div>
        <div>
          <img src={profilePic} alt="profile" className="profile-pic"/>
        </div>
        <div>
          <p> Technologies ive been working with </p>
          <ul className="">
            <li> JavaScript </li>
            <li> React </li>
            <li> Redux-Toolkit</li>
            <li> Node.js </li>
            <li> TypeScript </li>
            <li> PHP </li>
            <li> MongoDB </li>
            <li> Firebase </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
