exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("celebs")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("celebs").insert([
        {
          name: "Jack Nicholson",
          imageurl:
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Jack_Nicholson_2001.jpg",
          dead: false
        },
        {
          name: "Angelina Jolie",
          imageurl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Angelina_Jolie_2_June_2014_%28cropped%29.jpg/422px-Angelina_Jolie_2_June_2014_%28cropped%29.jpg",
          dead: false
        },
        {
          name: "John Lennon",
          imageurl:
            "https://upload.wikimedia.org/wikipedia/commons/8/85/John_Lennon_1969_%28cropped%29.jpg",
          dead: true
        },
        {
          name: "Whitney Houston",
          imageurl:
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/Whitney_Houston_Welcome_Home_Heroes_1_cropped.jpg",
          dead: true
        },
        {
          name: "Al Pacino",
          imageurl:
            "https://upload.wikimedia.org/wikipedia/commons/9/98/Al_Pacino.jpg",
          dead: false
        },
        {
          name: "Carrie Fisher",
          imageurl:
            "https://live.staticflickr.com/2036/2103448605_529af5337a.jpg",
          dead: true
        },
        {
          name: "Christopher Lloyd",
          imageurl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Christopher_Lloyd_May_2015.jpg/706px-Christopher_Lloyd_May_2015.jpg",
          dead: false
        },
        {
          name: "Bruce Lee",
          imageurl:
            "https://live.staticflickr.com/27/43855760_fa16727836_z.jpg",
          dead: true
        },
        {
          name: "Heath Ledger",
          imageurl:
            "https://live.staticflickr.com/2296/2149692029_e506cce623_z.jpg",
          dead: true
        },
        {
          name: "John Travolta",
          imageurl:
            "https://upload.wikimedia.org/wikipedia/commons/0/00/John_Travolta_Deauville_2013.jpg",
          dead: false
        }
      ]);
    });
};
