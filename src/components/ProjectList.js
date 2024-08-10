// src/components/ProjectList.js
import React from 'react';
import Project from './Project';

const projects = [
  { 
    title: 'QUOTE GENERATOR', 
    description: 'Description for project 1', 
    link: 'https://quote-generator-lake-five.vercel.app/', 
    imageUrl: 'https://quotelar.com/wp-content/uploads/2023/10/One-Line-Motivational-Quotes.jpg' 
  },
  { 
    title: 'CALCULATOR', 
    description: 'Description for project 2', 
    link: 'https://calculator-sb4f.vercel.app/', 
    imageUrl: 'https://www.istockphoto.com/vector/blackboard-gm518905264-90293313?searchscope=image%2Cfilm' 
  },
  { 
    title: 'COUNTER', 
    description: 'Description for project 3', 
    link: 'https://counter-chi-eight.vercel.app/',
    imageUrl: 'https://as2.ftcdn.net/v2/jpg/02/86/04/29/1000_F_286042976_yHVCaenhKfl3G1FJysUA8H0gccJLlN1Z.jpg' 
  },
];

const ProjectList = () => {
  return (
    <>
    <h2>Projects</h2>
    <div className='project-list-container'>
      
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
    </>
  );
};

export default ProjectList;
