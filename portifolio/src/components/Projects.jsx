import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

const defaultDescriptions = {
  "erp-system": "Sistema ERP com gestão de módulos e interface moderna.",
  "erp-backend": "API RESTful resiliente para operações em larga escala.",
  "Portifolio-v2": "Portfólio interativo UNIX/Terminal com drag & drop.",
  CinetCalc: "Calculadora técnica para análises e engenharia.",
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const USERNAME = "kwuraa";
    const URL = `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=4`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-wrapper">
        {loading ? (
          <div className="projects-grid">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="skeleton"></div>
            ))}
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((repo) => {
              const desc =
                repo.description ||
                defaultDescriptions[repo.name] ||
                "Aplicação web focada em alta performance e UI/UX.";

              return (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                  whileHover={{ y: -4 }}
                >
                  <div className="card-header">
                    <div className="window-dots">
                      <span className="dot dot-close"></span>
                      <span className="dot dot-min"></span>
                      <span className="dot dot-max"></span>
                    </div>
                    <span className="card-path">
                      ~/{repo.name.toLowerCase()}
                    </span>
                  </div>

                  <div className="project-preview">
                    {repo.homepage ? (
                      <img
                        src={`https://api.microlink.io?url=${encodeURIComponent(repo.homepage)}&screenshot=true&embed=screenshot.url`}
                        alt={repo.name}
                        loading="lazy"
                      />
                    ) : (
                      <div className="no-preview">⚡ Terminal Mode</div>
                    )}
                  </div>

                  <div className="card-body">
                    <h3>{repo.name}</h3>
                    <p>{desc}</p>
                  </div>

                  <div className="card-footer">
                    <span className="tech-tag">{repo.language || "Dev"}</span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
