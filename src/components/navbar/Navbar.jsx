import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s get out of <span class="hell-text">Development Hell</span>{" "}
          together!
        </motion.span>
        <div className="social">
          <a href="https://github.com/Pradeep-Chandra-G" target="_blank">
            <img src="/github-logo.png" alt="Github Link" />
          </a>
          <a
            href="https://www.linkedin.com/in/pradeep-chandra-g/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="LinkedIN Link" />
          </a>
          <a href="/Pradeep's Resume.pdf" target="_blank">
            <img src="/resume.png" alt="Pradeep's Resume" />
          </a>
          <a href="#" target="_blank">
            <img src="/dribbble.png" alt="Dribble Link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
