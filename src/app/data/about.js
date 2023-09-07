import { GoDeviceDesktop } from "react-icons/go";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiAdobeindesign } from "react-icons/si";
import { FcSmartphoneTablet } from "react-icons/fc";

export const ABOUT = {
    title: "About Me",
    name: "Mehedi Hasan",
    description: "I am a web developer with a passion for building beautiful, responsive websites and applications. I have a background in graphic design and I am currently working on a career in web development.",
    exports: ['JavaScript', 'React', 'UI/UX'],
    image: "/Asset/me1.png",
    services: [
        {
            title: "Web Development",
            text: "I'm a fronted web developer.I have most of experience on about web development more then 2 years.I can development mordern, responsive design.",
            icon: <GoDeviceDesktop size={33} />
        },
        {
            title: "UI/UX Design",
            text: "I have of Experience about Ps and Figma.",
            icon: <MdOutlineDesignServices size={33} />
        },
        {
            title: "Web Design",
            text: "I have 2 years of experience about web design.",
            icon: <SiAdobeindesign size={33} />
        },
        {
            title: "Responsive Design",
            text: "I have experience on Responsive. Responsive is one way to make your website more usable and accessible across different screen sizes like mobile, tablet, pc",
            icon: <FcSmartphoneTablet size={33} />
        },
    ]
}