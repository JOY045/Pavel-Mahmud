// Import necessary dependencies
import React, { useState } from "react";
import { motion } from "framer-motion";

// Define the component
const PhotoCard = ({ photoUrl }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="max-w-sm rounded overflow-hidden shadow-lg"
    >
      <img src={photoUrl} alt="Photo" className="w-full" />
    </motion.div>
  );
};

const PhotosSection = ({ sectionName, photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Function to handle opening a photo
  const openPhoto = (photoUrl) => {
    setSelectedPhoto(photoUrl);
  };

  // Function to handle closing the photo
  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <section id={sectionName}>
      <h2 className="text-4xl font-bold text-white mt-16 mb-8 md:mb-12">
        {sectionName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={() => openPhoto(photo.url)}
          >
            <PhotoCard photoUrl={photo.url} />
          </motion.div>
        ))}
      </div>

      {/* Modal for displaying the selected photo */}
      {selectedPhoto && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closePhoto}
        >
          <motion.img
            src={selectedPhoto}
            alt="Selected Photo"
            className="max-w-screen-lg max-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </section>
  );
};

// Export the component
export default PhotosSection;
