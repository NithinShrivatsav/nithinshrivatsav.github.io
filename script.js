const projects = [
  {
    title: "Stereo Depth Estimation Pipeline",
    description: "Implemented disparity estimation with bilinear sampling and data augmentation for stereo images.",
    tags: ["Computer Vision", "Stereo", "PyTorch"],
    github: "https://github.com/YOUR_REPO",
    demo: ""
  },
  {
    title: "Decentralized Multi-Robot Control",
    description: "ROS-based navigation stack with LiDAR mapping and obstacle avoidance.",
    tags: ["Robotics", "ROS", "SLAM"],
    github: "https://github.com/YOUR_REPO",
    demo: ""
  }
];

const container = document.getElementById("projects");

projects.forEach(p => {
  const div = document.createElement("div");
  div.className = "project";

  div.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <p><b>Tags:</b> ${p.tags.join(", ")}</p>
    ${p.github ? `<a href="${p.github}" target="_blank">GitHub</a>` : ""}
    ${p.demo ? `<a href="${p.demo}" target="_blank">Demo</a>` : ""}
  `;

  container.appendChild(div);
});
