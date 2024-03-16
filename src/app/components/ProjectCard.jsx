import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import VideoModal from "./VideoModal"; // Assuming you have a VideoModal component

// const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, videoId }) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   return (
//     <div>
//       <div
//         className="h-52 md:h-72 rounded-t-xl relative group"
//         style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
//       >
//         <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
//           {/* <Link
//             href={gitUrl}
//             className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
//           >
//             <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
//           </Link> */}
//           <button
//             onClick={() => setModalIsOpen(true)} // Open the modal when this button is clicked
//             className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
//           >
//             <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
//           </button>
//         </div>
//       </div>
//       <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
//         <h5 className="text-xl font-semibold mb-2">{title}</h5>
//         <p className="text-[#ADB7BE]">{description}</p>
//       </div>
//       <VideoModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} videoId={videoId} />
//     </div>
//   );
// };

// export default ProjectCard;

import ImageModal from "./ImageModal";

const ProjectCard = ({ type, contentUrl, title, description, videoId }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group cursor-pointer"
        onClick={openModal}
        style={{ background: `url(${contentUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <button
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </button>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#121212] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
      {type === "video" && (
        <VideoModal isOpen={modalIsOpen} onClose={closeModal} videoId={videoId} />
      )}
      {type === "image" && (
        <ImageModal isOpen={modalIsOpen} onClose={closeModal} imageUrl={contentUrl} />
      )}
    </div>
  );
};

export default ProjectCard;
