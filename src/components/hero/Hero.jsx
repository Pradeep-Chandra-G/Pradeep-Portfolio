import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const buttonVariants = {
  hover: {
    backgroundColor: "#ffffff",
    color: "#000000",
    transition: {
      duration: 0.3,
    },
  },
};

const Hero = () => {
  const scrollToSection = (sectionId) => {
    console.log("Scrolling to:", sectionId); // Debug log
    const element = document.getElementById(sectionId);
    console.log("Element found:", element); // Debug log
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleWorksClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Works button clicked"); // Debug log
    scrollToSection("Portfolio");
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Contact button clicked"); // Debug log
    scrollToSection("Contact");
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>PRADEEP CHANDRA GAJENDRA</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Java Developer NextJS Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              onClick={handleWorksClick}
              style={{ pointerEvents: 'auto', position: 'relative', zIndex: 100 }}
              type="button"
            >
              See the Latest Works
            </motion.button>
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              onClick={handleContactClick}
              style={{ pointerEvents: 'auto', position: 'relative', zIndex: 100 }}
              type="button"
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Designer Developer 
      </motion.div>
      <div className="imageContainer">
        <img src="/pradeep.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;