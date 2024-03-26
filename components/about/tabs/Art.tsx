import Image from "next/image";
import { IconContext } from "react-icons";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import csp from "./csp.png";

const skills = [
    {
        Label: "Adobe Photoshop",
        Icon: SiAdobephotoshop,
    },

    {
        Label: "Adobe Illustrator",
        Icon: SiAdobeillustrator,
    },
    
    {
        Label: "Clip Studio Paint",
        Icon: csp,
    },
    
    {
        Label:"Canva",
        Icon: SiCanva,
    },

]

const skillsList = skills.map((skill, index) => {
  const Icon = skill.Icon;
  return (
    <div key={index}>
      <p className="mr-1 mt-1 rounded-lg bg-neutral-800 p-2 py-2 leading-none sm:mx-0 sm:mb-2 sm:mt-0">
          <IconContext.Provider value={{ size: "2.5em" }}>
              {typeof Icon === "object" ? (
                <Image className="size-12" src={Icon} alt={skill.Label} />
              ) : (
                <Icon />
              )}
          </IconContext.Provider>
        {" " + skill.Label}
      </p>
    </div>
)});

const artTab = (
  <div className="inline w-full justify-between sm:flex">
    <div className="text-left text-lg sm:w-2/3">
      <h5>Arts:</h5>
      <p>
        As a lover of art and design, I&apos;ve always been interested in the process
        of creation. In particular, the written and visual arts and their unique
        forms of storytelling interest me to no end.
        <br />
        <br />
        As a passionate artist, I specialize in digital illustration and thrive 
        on storytelling through visual mediums. With a background in creating posters, 
        apparel designs, and social media campaigns for various events, I&apos;ve honed 
        my skills and eventually branched out as a commission-based artist. 
        With my main proficiencies in Photoshop and Clip Studio, I aim to inspire 
        and deliver impactful visual narratives through my art.
        <br />
        <br />
        Currently, I aim to expand my skillset by learning more on animation and
        asset creation, and I&apos;m always on the lookout for new opportunities to
        explore creative mediums.
      </p>
    </div>
    <div className="flex flex-wrap sm:inline sm:w-1/3 sm:px-5">
      {skillsList}
    </div>
  </div>
);

export default artTab;