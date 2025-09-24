import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  return (
    <div className="navbar">
      <Tooltip id="my-tooltip" className="my-tooltip" />
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s get out of <span className="hell-text">Development Hell</span>{" "}
          together!
        </motion.span>
        <div className="social">
          <a
            href="https://github.com/Pradeep-Chandra-G"
            target="_blank"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Go to my Github!"
          >
            <img src="/github-logo.png" alt="Github Link" />
          </a>
          <a
            href="https://www.linkedin.com/in/pradeep-chandra-g/"
            target="_blank"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Go to my LinkedIn!"
          >
            <img src="/linkedin.png" alt="LinkedIN Link" />
          </a>
          <a
            href="/Pradeep's Resume.pdf"
            target="_blank"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Go to my Resume!"
          >
            <img src="/resume.png" alt="Pradeep's Resume" />
          </a>
          <a
            href="https://dribbble.com/pradeep-chandra"
            target="_blank"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Go to my Dribbble!"
          >
            <img src="/dribbble.png" alt="Dribble Link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
