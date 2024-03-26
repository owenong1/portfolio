//import { Link } from "lucide-react";
import Link from "next/link";
import React from "react"

import { IconContext } from "react-icons";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

export default function Navbar() {
    const socials = [
        {
            Link: "https://linkedin.com/in/owen-ong",
            Label: "LinkedIn",
            Icon: SiLinkedin,
        },

        {
            Link: "https://github.com/owenong1",
            Label: "Github",
            Icon: SiGithub,
        },
        
        {
            Link: "https://www.instagram.com/ooart1?igsh=cmsyZHl3M285djlm",
            Label: "Instagram",
            Icon: SiInstagram,
        }
    ]

    // todo: horizontal icons
    
    return (
        <ul className="py-10 flex justify-center">
            <div className="flex-row">
                {socials.map((social, index) => {
                    const Icon = social.Icon;
                    return (
                        <div>
                        <Link 
                            href={social.Link} 
                            key={index} 
                            aria-label={social.Label}
                        >
                            <IconContext.Provider value={{ size: "2.5em" }}>
                                <Icon />
                            </IconContext.Provider> 
                        </Link>
                        </div>
                    );
                })}
            </div>
        </ul>
    )
}
