exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects").insert([
    {
      id: 1,
      name: "Spotify Suggestions",
      description: "an app that help u find music that u will like",
      completed: false,
    },
    {
      id: 2,
      name: "FoodTruckTrakr",
      description:
        "an app that help the user track all the food trucks on they area",
      completed: false,
    },
    {
      id: 3,
      name: "Flipper",
      description: "game that allow the user work on it mental speed",
      completed: true,
    },
  ]);
};
