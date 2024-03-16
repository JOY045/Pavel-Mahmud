"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Top 10 EV in India",
    description: "",
    image: "/images/projects/EV.png",
    tag: ["Cash Cow"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "MRANgB1XrNc",
  },
  {
    id: 2,
    title: "Economical Development of Saudi Arabia",
    description: "",
    image: "/images/projects/Saudi.png",
    tag: ["Cash Cow"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "AzFRfYLyosQ",
  },
  {
    id: 3,
    title: "How much money Avatar 2 has made",
    description: "",
    image: "/images/projects/Avatar.png",
    tag: ["Cash Cow"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "UJDgHyE-ywI",
  },
  {
    id: 4,
    title: "China Eco-crisis 2",
    description: "",
    image: "/images/projects/Eco.png",
    tag: ["Cash Cow"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "8AF8ZfXGqG4",
  },
  {
    id: 5,
    title: "Pablo Escobar",
    description: "",
    image: "/images/projects/Pablo.png",
    tag: ["Cash Cow"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "t22XJvxOaEA",
  },
  {
    id: 6,
    title: "Talk Show Showmi",
    description: "Adda With Manju",
    image: "/images/projects/Sowmi.png",
    tag: ["Talk Show"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "swAiSYDoM0Q",
  },
  {
    id: 7,
    title: "Talk Show Barish Haque Ep-1",
    description: "Adda With Manju",
    image: "/images/projects/Barish1.png",
    tag: ["Talk Show"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "6bX8qrZQRLA",
  },
  {
    id: 8,
    title: "Talk Show Barish Haque Ep-2",
    description: "Adda With Manju",
    image: "/images/projects/Barish2.png",
    tag: ["Talk Show"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "o09cmyEX_aQ",
  },
  {
    id: 9,
    title: "Eid Greeters 2023",
    description: "Soft IT Care",
    image: "/images/projects/Eid.png",
    tag: ["Motion"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "zwVyQcKThaI",
  },
  {
    id:10,
    title: "New Arrival",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/Furniture1.png",
    tag: ["Motion"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "VxeQ1vuoDbc",
  },
  {
    id: 11,
    title: "Grand Opening Uttara",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/Uttara.png",
    tag: ["Motion"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "XZvsIZ_Pmr0",
  },
  {
    id: 12,
    title: "Invitation Card for Uttara",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/Invitition.png",
    tag: ["Motion"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "hDzPCIMXFIM",
  },
  {
    id: 13,
    title: "Jersey Motion",
    description: "Tiffany Blue",
    image: "/images/projects/Jersey.png",
    tag: ["Motion"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "KLhr-5Kj2xM",
  },
  {
    id: 14,
    title: "15 August",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/15.png",
    tag: ["Motion"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "pSknt5S9H_0",
  },
  {
    id: 15,
    title: "App Promo",
    description: "Antivo",
    image: "/images/projects/App.png",
    tag: ["Motion"],
    gitUrl: "/",
    previewUrl: "/",
    videoId:"7ukDZFMBmcA",
  },
  {
    id: 16,
    title: "Dashboard Interactive Motion",
    description: "N/A",
    image: "/images/projects/Dashboard.png",
    tag: ["Motion"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "fIE1bbR9Ng4",
  },
  {
    id: 17,
    title: "Wedding Campaign 2022",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/wedding.jpeg",
    tag: ["Motion"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "0EPP5Rtwzc8",
  },
  {
    id: 18,
    title: "Durga Puja 2022",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/Durga.png",
    tag: ["Motion"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "3_Y5ElQr7do?",
  },
  {
    id: 19,
    title: "App Preview (Interactive)",
    description: "N/A",
    image: "/images/projects/App2.png",
    tag: ["Motion"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "yFmkT5mYvIg",
  },
  {
    id: 20,
    title: "17th National Furniture Fair 2022",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/Furniture.png",
    tag: ["Motion"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "jeAu4MkNvss",
  },
  {
    id: 21,
    title: "Daily News",
    description: "Chandpur TV",
    image: "/images/projects/News.png",
    tag: ["News"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "6ogdR1R20RY",
  },
  {
    id: 22,
    title: "Choice Legacy",
    description: "",
    image: "/images/projects/Choice.png",
    tag: ["Others"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "JiSylJxuk08",
  },
  {
    id: 23,
    title: "Mattress commercial",
    description: "",
    image: "/images/projects/Mattress.png",
    tag: ["Others"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "Hjo16wKMHp4",
  },
  {
    id: 24,
    title: "Uttara New Showroom",
    description: "",
    image: "/images/projects/Interior.png",
    tag: ["Others"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "aDobQZAPLt0",
  },
  {
    id: 25,
    title: "Hi-Tech Narayanganj",
    description: "",
    image: "/images/projects/Narayanganj.png",
    tag: ["Others"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "6KmzGuNupos",
  },
  {
    id: 26,
    title: "Music video",
    description: "",
    image: "/images/projects/Music.png",
    tag: ["Others"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "DmI_qbiPCsA",
  },
  {
    id: 27,
    title: "Fan Made Trailer",
    description: "",
    image: "/images/projects/KGF5.png",
    tag: ["Others"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "tLwauF4FHKY",
  },
  {
    id: 28,
    title: "A Trailer with Suzuki Gixxer",
    description: "",
    image: "/images/projects/Suzuki.png",
    tag: ["Others"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "KxAw921Wmo0",
  },
  {
    id: 29,
    title: "China's Death Valley",
    description: "",
    image: "/images/projects/Death.png",
    tag: ["Others"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "593qKMyJKBI",
  },
  {
    id: 30,
    title: "Navi-Ark Logo",
    description: "Navi-Ark.io",
    image: "/images/projects/L14.jpg",
    tag: ["Logo"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 31,
    title: "Tour Guys BD Logo",
    description: "Tour Guys BD YT",
    image: "/images/projects/L13.jpg",
    tag: ["Logo"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 32,
    title: "Aa Mori Bangla Vasa",
    description: "Star Sangbad",
    image: "/images/projects/L1.jpg",
    tag: ["Logo"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 33,
    title: "Vasa Andolone Chandpur",
    description: "Chandpur TV",
    image: "/images/projects/L2.jpg",
    tag: ["Logo"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 34,
    title: "Antivo Logo",
    description: "Antivo LTD",
    image: "/images/projects/L3.jpg",
    tag: ["Logo"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 35,
    title: "Chitrorongo Logo",
    description: "FB Page Chitrorongo",
    image: "/images/projects/L4.jpg",
    tag: ["Logo"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 36,
    title: "Bishad Jibon Logo",
    description: "FB Page Bishad Jibon",
    image: "/images/projects/L5.png",
    tag: ["Logo"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 37,
    title: "Top 10 Logo",
    description: "Top 10 YT",
    image: "/images/projects/L6.jpg",
    tag: ["Logo"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 38,
    title: "S & A Event Logo",
    description: "S & A Event Management",
    image: "/images/projects/L7.jpg",
    tag: ["Logo"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 39,
    title: "Secret Bangla Fact Logo",
    description: "Secret Bangla Fact YT",
    image: "/images/projects/L8.png",
    tag: ["Logo"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 40,
    title: "Sob Janta Somser Logo",
    description: "Sob Janta Somser YT",
    image: "/images/projects/L9.png",
    tag: ["Logo"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 41,
    title: "Unified Football 2024",
    description: "Special Olympics",
    image: "/images/projects/L10.jpg",
    tag: ["Logo"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 42,
    title: "W Win Logo",
    description: "W Win Website",
    image: "/images/projects/L11.jpg",
    tag: ["Logo"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 43,
    title: "An Unique Love Story Logo",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/L12.png",
    tag: ["Logo"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 44,
    title: "A4 Flayer",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/P1.jpg",
    tag: ["Printing"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 45,
    title: "Fabric Banner 01",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/P2.jpg",
    tag: ["Printing"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 46,
    title: "Fabric Banner 02",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/P4.jpg",
    tag: ["Printing"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 47,
    title: "Billboard Design",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/P3.jpg",
    tag: ["Printing"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 48,
    title: "X Banner",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/P5.jpg",
    tag: ["Printing"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 49,
    title: "Ambiance Image 01",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I1.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 50,
    title: "Ambiance Image 02",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I2.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 51,
    title: "Ambiance Image 03",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I3.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 52,
    title: "Ambiance Image 04",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I4.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 53,
    title: "Ambiance Image 05",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I5.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 54,
    title: "Ambiance Image 06",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I6.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 55,
    title: "Ambiance Image 07",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I7.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 56,
    title: "Ambiance Image 08",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I8.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 57,
    title: "Ambiance Image 09",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I9.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 58,
    title: "Ambiance Image 10",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I10.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 59,
    title: "Ambiance Image 11",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I11.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 60,
    title: "Ambiance Image 12",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I12.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 61,
    title: "Ambiance Image 13",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I13.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 62,
    title: "Ambiance Image 14",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I14.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 63,
    title: "Ambiance Image 15",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I15.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 64,
    title: "Ambiance Image 16",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I16.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 65,
    title: "Ambiance Image 17",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I17.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 66,
    title: "Ambiance Image 18",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I18.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 67,
    title: "Ambiance Image 19",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I19.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 68,
    title: "Ambiance Image 20",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I20.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 69,
    title: "Ambiance Image 21",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I21.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 70,
    title: "Ambiance Image 22",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I22.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 71,
    title: "Ambiance Image 23",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I23.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 72,
    title: "Ambiance Image 24",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I24.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 73,
    title: "Ambiance Image 25",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I25.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 74,
    title: "Ambiance Image 26",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I26.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 75,
    title: "Ambiance Image 27",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I27.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 76,
    title: "Ambiance Image 28",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I28.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 77,
    title: "Ambiance Image 29",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I29.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 78,
    title: "Ambiance Image 30",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I30.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 79,
    title: "Ambiance Image 31",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I31.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 80,
    title: "Ambiance Image 32",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I32.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 81,
    title: "Ambiance Image 33",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I33.jpg",
    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Cash Cow");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-16 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Cash Cow"
          isSelected={tag === "Cash Cow"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Images"
          isSelected={tag === "Images"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Logo"
          isSelected={tag === "Logo"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Motion"
          isSelected={tag === "Motion"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="News"
          isSelected={tag === "News"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Printing"
          isSelected={tag === "Printing"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Talk Show"
          isSelected={tag === "Talk Show"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Others"
          isSelected={tag === "Others"}
        />
        {/* Add more ProjectTag components for other categories */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            {/* Determine the type based on the presence of videoId */}
            <ProjectCard
              key={project.id}
              type={project.videoId ? "video" : "image"}
              title={project.title}
              description={project.description}
              contentUrl={project.image} // Use project.image for images
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              videoId={project.videoId}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

