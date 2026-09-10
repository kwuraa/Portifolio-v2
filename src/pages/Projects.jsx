import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiTerminal, FiLock } from "react-icons/fi";
import "../styles/Projects.css";

const defaultDescriptions = {
  "erp-system": "Sistema ERP com gestão de módulos e interface moderna.",
  "erp-backend": "API RESTful resiliente para operações em larga escala.",
  "Portifolio-v2": "Portfólio interativo UNIX/Terminal com drag & drop.",
  CinetCalc: "Calculadora técnica para análises e engenharia.",
};

const manualProjects = [
  {
    id: "cinetcalc",
    name: "Calculadora de Impacto - Docksteel",
    html_url: "https://cinetcalc.netlify.app/",
    homepage: "https://cinetcalc.netlify.app/",
    language: "HTML | CSS | JS ",
    description: defaultDescriptions["CinetCalc"],
    isPrivate: true,
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const USERNAME = "kwuraa";
    const URL = `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=3`;

    const fallbackProjects = [
      {
        id: 1,
        name: "erp-system",
        html_url: "https://github.com/kwuraa/erp-system",
        language: "TypeScript",
      },
      {
        id: 2,
        name: "erp-backend",
        html_url: "https://github.com/kwuraa/erp-backend",
        language: "TypeScript",
      },
      {
        id: 3,
        name: "Portifolio-v2",
        html_url: "https://github.com/kwuraa/Portifolio-v2",
        language: "JavaScript",
      },
    ];

    fetch(URL)
      .then((res) => {
        if (!res.ok) throw new Error("Falha na requisição");
        return res.json();
      })
      .then((data) => {
        const githubData = Array.isArray(data) ? data : fallbackProjects;
        setProjects([...manualProjects, ...githubData]);
      })
      .catch(() => {
        setProjects([...manualProjects, ...fallbackProjects]);
      })
      .finally(() => {
        setLoading(false);
      });
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

              const isLink = Boolean(repo.html_url);
              const CardComponent = isLink ? motion.a : motion.div;

              const cardProps = isLink
                ? {
                    href: repo.html_url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {};

              return (
                <CardComponent
                  key={repo.id}
                  className={`project-card ${!isLink ? "disabled-card" : ""}`}
                  whileHover={{ y: -4 }}
                  {...cardProps}
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
                        src={`https://api.microlink.io?url=${encodeURIComponent(
                          repo.homepage,
                        )}&screenshot=true&embed=screenshot.url`}
                        alt={repo.name}
                        loading="lazy"
                      />
                    ) : (
                      <div className="no-preview">
                        <FiTerminal style={{ marginRight: "6px" }} /> Terminal
                        Mode
                      </div>
                    )}
                  </div>

                  <div className="card-body">
                    <h3>{repo.name}</h3>
                    <p>{desc}</p>
                  </div>

                  <div className="card-footer">
                    <span className="tech-tag">{repo.language || "Dev"}</span>
                    {repo.isPrivate && (
                      <span className="private-tag">
                        <FiLock style={{ marginRight: "4px" }} /> Empresa
                      </span>
                    )}
                  </div>
                </CardComponent>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
