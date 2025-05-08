import React from 'react';

const ProjectCard = ({ title, description, link, imageSrc }) => {
  return (
    <div id='Projects' className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white">
      <img className="w-full h-40 object-cover" src={imageSrc} alt={title} />
      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:text-blue-300">
          View Project
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      title: "Blogging Website",
      description: "A blogging website built with React and Tailwind CSS.",
      link: "#",
      imageSrc: "https://www.ryrob.com/wp-content/uploads/2019/09/Screen-Shot-2019-08-20-at-8.40.30-PM.png"
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform using Node.js and MongoDB.",
      link: "#",
      imageSrc: "https://media.licdn.com/dms/image/v2/D5612AQF8GGlQaYG9Vw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686137572046?e=2147483647&v=beta&t=UQPHh_ywy3TqW8jBb_S6S_b_Dxb7GswZf9VsUzWmNnw"
    },
    {
      title: "Netflix Clone",
      description: "A clone of Netflix with React and Firebase for authentication.",
      link: "#",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjtPdTbDBy7Cm5S-Ne_Ul8lYLEXsRQv2ICg&s"
    },
    {
      title: "Weather App",
      description: "A weather application that uses an external API to fetch real-time data.",
      link: "#",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVo2xYDi9O7RQQo7J2-roejFmbhV7Glt0KIA&s"
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website showcasing my skills and projects.",
      link: "#",
      imageSrc: "https://cdn.kwork.com/files/portfolio/t3/20/bfb933fcd3f49054c923c6b9d231e34d9effe768-1713894769.jpg"
    },
    {
      title: "Task Manager",
      description: "A simple task manager app that allows you to add and delete tasks.",
      link: "#",
      imageSrc: "https://media.istockphoto.com/id/1492645918/photo/survey-form-concept-businessman-using-laptops-do-online-checklist-surveys-questionnaire-with.jpg?s=612x612&w=0&k=20&c=lqbzWDBLxqRe99kOz2GwfWDRzkVduf2BvUzn1NBGh7Q="
    }
  ];

  return (
    <div id="projects" className="p-10 md:p-24 bg-black text-white">
      <h1 className="text-2xl md:text-4xl text-center font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            imageSrc={project.imageSrc}  // Here we are passing the image source for each project
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
