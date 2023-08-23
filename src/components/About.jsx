import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        I'm a Skilled Software Developer with a Swedish College Degree in
        Programming. I have Experience in both Front-End and Back-End
        Development. This includes Java, JavaScript, HTML5/CSS3, Databases and
        Database Management, Mobile Application Development,
        Unit-Testing/Test-Driven Development, Web-Services, Project-Leadership
        and Consultant. I'm a quick learner and I love Programming/Coding. I
        Collaborate closely with my Clients and make it my top-priority to
        create and deliver efficient, scalable, and user-friendly Projects!
      </motion.p>
    </>
  );
};

export default About;
