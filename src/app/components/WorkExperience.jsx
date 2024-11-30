import React from "react";
import ExperienceCard from "../components/ExperienceCard";

const IndexPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">Work Experiences</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12">
        <ExperienceCard
          company="DHaus.ai"
          position="Creative Visualizer"
          details="Editing video on Adobe Premier Pro & creating motion graphics for Offer & Campaigns."
          time="Employed"
          // image="../../../public/images/220577192_4231188316927457_276293184630894842_n.png"
        />
        <ExperienceCard
          company="Furniture Concept"
          position="Visualize Brand & Communication"
          details="Editing video on Adobe Premier Pro & creating motion graphics for Offer & Campaigns."
          time="May 2024"
          // image="../../../public/images/220577192_4231188316927457_276293184630894842_n.png"
        />
        <ExperienceCard
          company="Soft IT Care"
          position="Video & Motion Graphics Designer"
          details="Editing video on Adobe Premier Pro & creating motion graphics for Offer & Campaigns."
          time="December 2023"
          // image="../../../public/images/220577192_4231188316927457_276293184630894842_n.png"
        />
        <ExperienceCard
          company="Hi-Tech Lifestyle & Furniture"
          position="Executive Creative & Branding"
          details="Editing video on Adobe Premier Pro & creating motion graphics for Offer & Campaigns. Taking care of Cinematography and Product photography."
          time="December 2022"
          // image="../../../public/images/220577192_4231188316927457_276293184630894842_n.png"
        />
        <ExperienceCard
          company="Chadpur TV"
          position="Video & Motion Graphics Designer"
          details="Edit videos & create motion graphics for diverse programs, oversee cinematography & manage daily news broadcast, social media contents, banners & thumbnails using Adobe Premiere Pro."
          time="May 2022"
          // image="../../../public/images/220577192_4231188316927457_276293184630894842_n.png"
        />
        <ExperienceCard
          company="Sunbox"
          position="Video Editor"
          details="Editing video on Adobe Premiere Pro for different type of programs. Taking care of Cinematography and control broadcasting (Adda With Manjur, Candid Show)."
          time="June 2021"
          // image="../../../public/images/220577192_4231188316927457_276293184630894842_n.png"
        />
        <ExperienceCard
          company="Muktomon TV"
          position="Video Editor"
          details="Editing video on Adobe Premiere Pro for different type of YouTube content. Taking care of Cinematography and control broadcasting."
          time="November 2020"
          // image="../../../public/images/220577192_4231188316927457_276293184630894842_n.png"
        />
      </div>
    </div>
  );
};

export default IndexPage;
