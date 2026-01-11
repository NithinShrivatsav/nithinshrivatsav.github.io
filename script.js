const toggle = document.getElementById("themeToggle");
toggle.onclick = () => document.body.classList.toggle("dark");

// Load JSON helper
async function loadJSON(path) {
  const res = await fetch(path);
  return await res.json();
}

// Projects
loadJSON("data/projects.json").then(projects => {
  const container = document.getElementById("projects");

  projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${p.title}</h3>
      <img src="${p.image}">
      <p>${p.description}</p>
      <a href="${p.page}">Read More →</a>
    `;
    container.appendChild(div);
  });
});

// Publications
loadJSON("data/publications.json").then(pubs => {
  const container = document.getElementById("publications");

  pubs.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <b>${p.title}</b><br/>
      ${p.authors}<br/>
      <i>${p.venue}</i> (${p.year})<br/>
      <a href="${p.link}" target="_blank">Paper</a>
    `;
    container.appendChild(div);
  });
});

// Blog
loadJSON("data/blog.json").then(posts => {
  const container = document.getElementById("blog");

  posts.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <a href="${p.page}">Read →</a>
    `;
    container.appendChild(div);
  });
});
