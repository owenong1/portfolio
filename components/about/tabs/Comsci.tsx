import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { IconContext } from "react-icons";

const skills = [
    {
        Label: "Python",
        Icon: FaPython,
    },

    {
        Label: "Java",
        Icon: FaJava,
    },
    
    {
        Label: "Javascript",
        Icon: RiJavascriptFill,
    },
    
    {
        Label:"TailwindCSS",
        Icon: SiTailwindcss,
    },

    {
        Label:"Figma",
        Icon: FaFigma,
    },

    {
        Label:"React",
        Icon: FaReact,
    },

]

const skillsList = skills.map((skill, index) => (
  <div key={index}>
    <p className="mr-1 mt-1 rounded-lg bg-neutral-800 p-2 py-2 leading-none sm:mx-0 sm:mb-2 sm:mt-0">
        <IconContext.Provider value={{ size: "2.5em" }}>
            <skill.Icon />
        </IconContext.Provider>
      {" " + skill.Label}
    </p>
  </div>
));

const csTab = (
  <div className="inline w-full justify-between sm:flex">
    <div className="text-left text-lg sm:w-2/3">
      <h5>Computer Science:</h5>
      <p>
      As a computer science student at the National University of Singapore
        (NUS), I am actively looking for ways to develop my technical
        skills and explore my passions.
        <br />
        <br />
        This has taken shape in the form of the various projects I&apos;ve worked on,
        such as those related to UI/UX and design. This website is one of
        the projects I&apos;ve worked on to learn more about web development and
        design. I&apos;ve also explored user interface design through creating UIs and 
        mockups for an address book application and a media campaign website. One 
        point that I&apos;m particularly interested in is the human aspect of technology,
        and the interplay between design and communication. 
        <br />
        <br />
        Regardless, if my projects have taught me anything, it&apos;s that I love
        designing and developing products that people will appreciate both design-wise
        and feature-wise.
      </p>
    </div>
    <div className="flex flex-wrap sm:inline sm:w-1/3 sm:px-5">
      {skillsList}
    </div>
  </div>
);

export default csTab;