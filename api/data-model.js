const db = require("../data/db-config.js");

function getProjects() {
  return db("projects");
}

function insertProject(projectData) {
  return db("projects").insert(projectData);
}

function getResources() {
  return db("resources");
}

function insertResources(resourceData) {
  return db("resources").insert(resourceData);
}

function getTask(projectId) {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.project_id")
    .where("p.id", "=", projectId)
    .select(
      "p.name",
      "p.description as project_description",
      "t.description as task_description",
      "t.notes",
      "t.completed"
    );
}

function insertTask(taskData, projectId) {
  return db("tasks").insert({ ...taskData, project_id: projectId });
}

function verifyProjectId(projectId) {
  return db("projects").where({ id: projectId });
}

function projectResources(projectId) {
  return db("projects as p")
    .join("project_resources as pr", "pr.project_id", "p.id")
    .join("resources as r", "pr.resource_id", "r.id")
    .where("p.id", "=", projectId)
    .select("r.name", "r.description");
}

function projectTasks(projectId) {
  return db("tasks")
    .where("project_id", projectId)
    .select("description", "notes", "completed");
}

function projectsUsingResource(resourceId) {
  return db("projects as p")
    .join("project_resources as pr", "pr.project_id", "p.id")
    .join("resources as r", "pr.resource_id", "r.id")
    .where("r.id", "=", resourceId)
    .select("p.name", "p.description", "p.completed");
}

module.exports = {
  getProjects,
  insertProject,
  getResources,
  insertResources,
  insertTask,
  getTask,
  verifyProjectId,
  projectResources,
  projectTasks,
  projectsUsingResource,
};
