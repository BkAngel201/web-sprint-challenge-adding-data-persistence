exports.seed = function (knex) {
  return knex("tasks").insert([
    {
      id: 1,
      notes: "there is an error processing the info from spotify api",
      description: "artist album picture not showing",
      project_id: 1,
      completed: false,
    },
    {
      id: 2,
      notes:
        "we need to find a better way to retrieve the api_key from spotify",
      description: "api_key is not valid",
      completed: false,
      project_id: 1,
    },
    {
      id: 3,
      notes: "we need a space to discuss all the project structure",
      description: "login failed always on first try",
      project_id: 2,
      completed: false,
    },
    {
      id: 4,
      notes: "the google map api component is not rendering",
      description: "Truck not Showing on map",
      project_id: 2,
      completed: false,
    },
    {
      id: 5,
      notes: "there is a bug that is preventing the proper animation",
      description: "Fix flip animation",
      project_id: 3,
      completed: false,
    },
  ]);
};
