exports.seed = function (knex) {
  return knex("resources").insert([
    {
      id: 1,
      name: "Conference Room",
      description: "we need a space to discuss all the project structure",
    },
    { id: 2, name: "Computers", description: "we need the equipment to work" },
    {
      id: 3,
      name: "Snacks",
      description: "we need this to maintain the team happy",
    },
  ]);
};
