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
    id: 15,
    title: "App Promo",
    description: "Antivo",
    image: "/images/projects/App.png",
    tag: ["Motion"],
    gitUrl: "/",
    previewUrl: "/",
    videoId:"7ukDZFMBmcA",
  },
  // {
  //   id: 9,
  //   title: "Eid Greeters 2023",
  //   description: "Soft IT Care",
  //   image: "/images/projects/Eid.png",
  //   tag: ["Motion"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  //   videoId: "zwVyQcKThaI",
  // },
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
    id: 100,
    title: "Transform Your Living Room",
    description: "Furniture Concept",
    image: "/images/projects/Transform Your Living Room.png",
    tag: ["Motion"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "c0SariHvBNY",
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
  // {
  //   id: 14,
  //   title: "15 August",
  //   description: "Hi-Tech Furniture & Lifestyle",
  //   image: "/images/projects/15.png",
  //   tag: ["Motion"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  //   videoId: "pSknt5S9H_0",
  // },
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
    id: 101,
    title: "Beauty with Botanica",
    description: "",
    image: "/images/projects/Beauty with Botanica.png",
    tag: ["Videos"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "YswDfjHC6FI",
  },
  {
    id: 102,
    title: "Unveiled with Botanica",
    description: "",
    image: "/images/projects/Unveiled with Botanica.png",
    tag: ["Videos"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "qLMBY_GL61o",
  },
  {
    id: 23,
    title: "Mattress commercial",
    description: "",
    image: "/images/projects/Mattress.png",
    tag: ["Videos"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "Hjo16wKMHp4",
  },
  {
    id: 22,
    title: "Choice Legacy",
    description: "",
    image: "/images/projects/Choice.png",
    tag: ["Videos"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "JiSylJxuk08",
  },
  {
    id: 24,
    title: "Uttara New Showroom",
    description: "",
    image: "/images/projects/Interior.png",
    tag: ["Videos"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "aDobQZAPLt0",
  },
  {
    id: 103,
    title: "Every Stage of Womanhood",
    description: "",
    image: "/images/projects/Every Stage of Womanhood.png",
    tag: ["Videos"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "W-ct53UW-Es",
  },
  {
    id: 104,
    title: "Well-being During Pregnancy",
    description: "",
    image: "/images/projects/Well-being During Pregnancy.png",
    tag: ["Videos"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "mUwgzYoTPiE",
  },
  // {
  //   id: 25,
  //   title: "Hi-Tech Narayanganj",
  //   description: "",
  //   image: "/images/projects/Narayanganj.png",
  //   tag: ["Videos"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  //   videoId: "6KmzGuNupos",
  // },
  // {
  //   id: 26,
  //   title: "Music video",
  //   description: "",
  //   image: "/images/projects/Music.png",
  //   tag: ["Videos"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  //   videoId: "DmI_qbiPCsA",
  // },
  // {
  //   id: 27,
  //   title: "Fan Made Trailer",
  //   description: "",
  //   image: "/images/projects/KGF5.png",
  //   tag: ["Videos"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  //   videoId: "tLwauF4FHKY",
  // },
  {
    id: 28,
    title: "A Trailer with Suzuki Gixxer",
    description: "",
    image: "/images/projects/Suzuki.png",
    tag: ["Videos"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "KxAw921Wmo0",
  },
  {
    id: 29,
    title: "China's Death Valley",
    description: "",
    image: "/images/projects/Death.png",
    tag: ["Videos"],
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
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I1.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 50,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I2.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 51,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I3.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 52,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I4.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 53,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I5.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 54,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I6.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 55,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I7.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 56,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I8.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 57,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I9.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 58,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I10.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 59,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I11.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 60,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I12.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 61,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I13.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 62,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I14.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 63,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I15.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 64,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I16.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 65,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I17.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 66,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I18.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 67,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I19.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 68,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I20.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 69,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I21.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 70,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I22.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 71,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I23.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 72,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I24.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 73,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I25.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 74,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I26.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 75,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I27.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 76,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I28.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 77,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I29.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 78,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I30.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 79,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I31.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 80,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I32.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 81,
    title: "Ambiance Image",
    description: "Hi-Tech Furniture & Lifestyle",
    image: "/images/projects/I33.jpg",
    tag: ["Ambiant"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 105,
    title: "Motherhood is Blossom",
    description: "",
    image: "/images/projects/Motherhood is Blossom.png",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 106,
    title: "The Bloom of Motherhood",
    description: "",
    image: "/images/projects/The Bloom of Motherhood.png",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 107,
    title: "Herbs to Your Hair",
    description: "",
    image: "/images/projects/Herbs to Your Hair.png",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 108,
    title: "A Gift From Nature",
    description: "",
    image: "/images/projects/A Gift From Nature.png",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 82,
    title: "Facebook Post Biriyani Moshla",
    description: "",
    image: "/images/projects/Biriyani Moshla.jpg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 83,
    title: "Facebook Post Honey",
    description: "",
    image: "/images/projects/Honey.jpg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 84,
    title: "Facebook Post Oil",
    description: "",
    image: "/images/projects/Oil.jpg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 85,
    title: "Facebook Post Coconut Oil",
    description: "",
    image: "/images/projects/Coconut Oil.jpg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 86,
    title: "Facebook Post Mothers Day",
    description: "",
    image: "/images/projects/Mothers Day 2024.jpg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 87,
    title: "Facebook Post Womens Day",
    description: "",
    image: "/images/projects/Womens Day 2024.jpg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 88,
    title: "Facebook Post World Earth Day",
    description: "",
    image: "/images/projects/World Earth Day.jpg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 89,
    title: "Facebook Post Buddha Purnima",
    description: "",
    image: "/images/projects/Buddha Purnima 2024.jpg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 90,
    title: "Facebook Post",
    description: "",
    image: "/images/projects/Computer Table C-323, TDR-129R-77.jpg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 91,
    title: "Facebook Post",
    description: "",
    image: "/images/projects/CUB-103T.jpg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 92,
    title: "Facebook Post",
    description: "",
    image: "/images/projects/lkclcc.jpg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 93,
    title: "Facebook Post",
    description: "",
    image: "/images/projects/Bed 01.jpeg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 94,
    title: "Facebook Post",
    description: "",
    image: "/images/projects/SHO-113D.jpg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 95,
    title: "Facebook Post",
    description: "",
    image: "/images/projects/TCS-103R.jpg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 96,
    title: "Facebook Post",
    description: "",
    image: "/images/projects/Products Promotion 01.jpg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 97,
    title: "Facebook Post",
    description: "",
    image: "/images/projects/Products Promotion 02.jpg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 98,
    title: "Facebook Post",
    description: "",
    image: "/images/projects/Products Promotion 03.jpg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
  {
    id: 99,
    title: "Facebook Post",
    description: "",
    image: "/images/projects/Products Promotion 04.jpg",
    tag: ["Social Media"],
    gitUrl: "/",
    previewUrl: "/",
    videoId: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Talk Show");
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
          name="Talk Show"
          isSelected={tag === "Talk Show"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Motion"
          isSelected={tag === "Motion"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Videos"
          isSelected={tag === "Videos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Cash Cow"
          isSelected={tag === "Cash Cow"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="News"
          isSelected={tag === "News"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Logo"
          isSelected={tag === "Logo"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Ambiant"
          isSelected={tag === "Ambiant"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Social Media"
          isSelected={tag === "Social Media"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Printing"
          isSelected={tag === "Printing"}
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

