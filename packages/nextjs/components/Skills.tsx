import React from "react";
const skills = [
  "Angular",
  "React",
  "Spring Framework",
  "Android App Development",
  "Java",
  "PHP",
  "AngularJS",
  "Laravel",
  "CodeIgniter",
  "Spring Boot",
  "Spring MVC",
  "Core Java",
  "Hibernate",
  "RESTful API",
  "Web Development",
];
function Skills(props) {
  return (
    <div className="pt-4">
      <h1 className="font-bold text-lg ">Skills</h1>

      <div className="grid grid-cols-3 gap-1">
        {skills?.length > 0 ? (
          skills.map((skill, idx) => (
            <p className="bg-gray-600 rounded py-1 px-1 text-sm text-custom-white text-center" key={idx}>
              {skill}
            </p>
          ))
        ) : (
          <p className="text-gray-400">No Projects Available</p>
        )}
      </div>
    </div>
  );
}

export default Skills;
