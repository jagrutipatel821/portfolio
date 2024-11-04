import React, { useEffect, useState } from 'react';

const skills = [
  { name: "JavaScript", level: 85 },
  { name: "PHP", level: 95 },
  { name: "Python", level: 75 },
  { name: "Photoshop", level: 80 },
  { name: "React", level: 90 },
];

const projectList = [
  {
    title: "Make a Balloon And Bust On Tap",
    description: "Created an interactive balloon-popping game using the Phaser 3 framework. Players inflate balloons with a virtual pump button until they reach a set size and float upwards. Players can tap on the balloons to make them burst, removing the balloon, thread, and letter from the screen.",
    technologies: "Phaser 3, JavaScript",
    url: "https://jagrutipatel821.github.io/Make_a_Balloon_And_burst_On_Tap/"
  },
  {
    title: "Fi Havock Digital Website Redesign",
    description: "Contributed to the redesign of Fi Havock Digital’s main website, enhancing loading speeds, user experience, and SEO performance. Focused on creating a smoother user experience while ensuring mobile responsiveness.",
    technologies: "HTML, CSS, JavaScript, SEO Optimization",
    url: ""
  },
  {
    title: "Calculator App",
    description: "Developed a simple calculator application for basic operations. This project showcases my skills in creating functional user interfaces and implementing JavaScript for real-time calculations.",
    technologies: "HTML, CSS, JavaScript",
    url: ""
  },
  {
    title: "Landing Page for Techno Hacks EduTech",
    description: "Built a clone landing page for Techno Hacks EduTech using HTML and CSS. This project demonstrates my ability to replicate designs and create responsive layouts.",
    technologies: "HTML, CSS",
    url: ""
  },
];

function Portfolio() {
  const [skillLevels, setSkillLevels] = useState(skills.map(() => 0));

  useEffect(() => {
    const interval = 20; // Adjust for smoother or faster animation
    const increments = skills.map(skill => skill.level / (1000 / interval));
    
    const animation = setInterval(() => {
      setSkillLevels(prevLevels => {
        let allFilled = true;
        const newLevels = prevLevels.map((level, index) => {
          if (level < skills[index].level) {
            allFilled = false;
            return Math.min(level + increments[index], skills[index].level);
          }
          return level;
        });
        if (allFilled) clearInterval(animation);
        return newLevels;
      });
    }, interval);

    return () => clearInterval(animation);
  }, []);

  return (
    <section id="portfolio" style={{ display: "flex", flexDirection: "column", padding: "4rem 2rem", gap: "2rem" }}>
      {/* Skills Section */}
      <aside style={{
        flex: '1',
        padding: "2rem",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}>
        <h3 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "1rem", textAlign: "center" }}>Skills</h3>
        {skills.map((skill, index) => (
          <div key={skill.name} style={{ marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "1.2rem", color: "#333", fontWeight: "600" }}>{skill.name}</span>
            <div style={{
              backgroundColor: "#e6e6e6",
              borderRadius: "5px",
              height: "10px",
              overflow: "hidden",
              position: "relative",
              marginTop: "0.5rem"
            }}>
              <div
                style={{
                  width: `${skillLevels[index]}%`,
                  backgroundColor: "#4CAF50",
                  height: "100%",
                  borderRadius: "5px",
                  transition: "width 0.4s ease",
                }}
              >
                <span style={{
                  fontSize: "0.85rem",
                  color: "#fff",
                  fontWeight: "bold",
                  position: "absolute",
                  right: "5px"
                }}>
                  {Math.round(skillLevels[index])}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </aside>

      {/* Experience Section */}
      <div style={{
        flex: '3',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}>
        <h2 style={{ fontSize: "2.5rem", textAlign: "center", color: "#0073e6" }}>My Experience</h2>
        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          {projectList.map((project) => (
            <div
              key={project.title}
              style={{
                flex: "1 1 300px",
                maxWidth: "350px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1.5rem",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "left",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#333" }}>
                <h3 style={{ fontSize: "1.5rem", color: "#0073e6", margin: "0" }}>{project.title}</h3>
              </a>
              <p style={{ fontSize: "0.9rem", color: "#666", margin: "0.5rem 0" }}>{project.description}</p>
              <p style={{ fontSize: "0.8rem", color: "#888" }}><strong>Technologies:</strong> {project.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
