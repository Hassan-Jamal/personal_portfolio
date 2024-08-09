import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/s2.png"
          title="Pinoy Courier Service Website"
          description="A comprehensive courier service website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It features real-time shipment tracking, user account management, and a responsive design for optimal performance across all devices. The website includes a streamlined booking system, interactive maps for tracking, and a robust admin panel for managing operations. Designed for efficiency and scalability, it ensures secure and smooth handling of logistics data, enhancing the overall user experience."
        />
        <ProjectCard
          src="/elearningp.png"
          title="E-Learning Platform"
          description="An innovative e-learning app developed with Flutter and available on the Play Store. This platform offers a wide range of educational courses with a user-friendly interface, progress tracking, and interactive content. It includes integrated ChatGPT for real-time assistance, enhancing the learning experience on Android devices."
        />
        <ProjectCard
          src="/Modern Next JS Portfolio.png"
          title="Modern Next.js Portfolio"
          description="A modern portfolio website created with Next.js, featuring a clean, responsive design that highlights your skills and projects. It uses server-side rendering for fast performance and SEO benefits, dynamic routing for easy updates, and interactive UI elements for a smooth user experience. The site includes sections for detailed project descriptions, contact information, and an intuitive navigation system. It's designed to effectively showcase your work and make a strong impression on potential clients or employers."
        />
      </div>
    </div>
  );
};

export default Projects;