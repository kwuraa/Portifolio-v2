import { useState, useEffect } from "react";
import "../styles/Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const USERNAME = "kwuraa";
    const URL = `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=4`;

    fetch(URL)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar os dados do github!");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="projects-section">
      <div className="projects-wrapper">
        {loading ? (
          <div className="projects-grid">
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <div className="project-preview">
                  {repo.homepage ? (
                    <img
                      src={`https://api.microlink.io?url=${encodeURIComponent(repo.homepage)}&screenshot=true&embed=screenshot.url`}
                      alt={`Preview do projeto ${repo.name}`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="no-preview">⚡ Terminal Mode</div>
                  )}
                </div>
                <div>
                  <h3>{repo.name}</h3>
                  <p>
                    {repo.description || "Nenhuma descrição no repositório."}
                  </p>
                </div>
                <div className="card-footer">
                  <div className="card-lang">
                    <span className="lang-dot"></span>
                    <span>{repo.language || "Outro"}</span>
                  </div>
                  <div className="card-stats">
                    <span>{repo.stargazers_count}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
