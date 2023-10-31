import React from "react";
import { useEffect, useState } from "react";
const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/repos/urz-ahmed/beer-store/contributors")
      .then((response) => response.json())
      .then((data) => setContributors(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="title-container">
        <h1 className="title-text">Our Contributors</h1>
        <div className="title-line"></div>
      </div>
      <div className="contributors-container">
        {contributors.map((contributor) => (
          <div className="card" key={contributor.id}>
            <div className="card-border-top"></div>
            <img src={contributor.avatar_url} alt={contributor.login} />
            <span> {contributor.login}</span>
            <p className="job">Contributions: {contributor.contributions}</p>
            <button>
              <a href={contributor.html_url}>Github</a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;
