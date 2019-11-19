exports.seed = function(knex) {
  let isDead = new Boolean(true);
  let isntDead = new Boolean(false);
  // Deletes ALL existing entries
  return knex("celebs")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("celebs").insert([
        {
          name: "Jack Nicholson",
          imageUrl:
            "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi4pYrT8fblAhXvJzQIHZ_pBAAQjB16BAgBEAM&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AJack_Nicholson_2001.jpg&psig=AOvVaw0ZfrM08w3uB-23TObfp_Hf&ust=1574273927347181",
          dead: isntDead.toString()
        },
        {
          name: "Angelina Jolie",
          imageUrl:
            "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiXsIjZ8fblAhUdHjQIHRaLAmMQjB16BAgBEAM&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AAngelina_Jolie_2_June_2014_(cropped).jpg&psig=AOvVaw2Usm5kDZWu41WBo_CkXrbR&ust=1574273967937917",
          dead: isntDead.toString()
        },
        {
          name: "John Lennon",
          imageUrl:
            "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwim6dDe8fblAhU-JTQIHdG5C6kQjB16BAgBEAM&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AJohn_Lennon_1969_(cropped).jpg&psig=AOvVaw0PyX-zHQY4lwan1Sh9A6-I&ust=1574273982133522",
          dead: isDead.toString()
        },
        {
          name: "Whitney Houston",
          imageUrl:
            "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiOjpiG8vblAhUHJDQIHfWrDuwQjB16BAgBEAM&url=https%3A%2F%2Fsw.wikipedia.org%2Fwiki%2FPicha%3AWhitney_Houston_Welcome_Home_Heroes_1_cropped.jpg&psig=AOvVaw28exJPHwRsmoV9WzGLSixd&ust=1574274021074826",
          dead: isDead.toString()
        },
        {
          name: "Al Pacino",
          imageUrl:
            "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjavIia8vblAhXgHjQIHS6VAMIQjB16BAgBEAM&url=https%3A%2F%2Fsk.m.wikipedia.org%2Fwiki%2FS%25C3%25BAbor%3AAl_Pacino.jpg&psig=AOvVaw2hshy5kPx3oXPFajM5SeZx&ust=1574274093704042",
          dead: isntDead.toString()
        },
        {
          name: "Carrie Fisher",
          imageUrl:
            "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjBt6qy8vblAhWRoFsKHe_PCEkQjB16BAgBEAM&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fjimivr%2F2103448605&psig=AOvVaw1AL_5bwQlEZIxq3Wy3DEqp&ust=1574274137905593",
          dead: isDead.toString()
        },
        {
          name: "Christopher Lloyd",
          imageUrl:
            "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjI0fjZ8vblAhWuKDQIHQ7sAcMQjB16BAgBEAM&url=https%3A%2F%2Fde.wikipedia.org%2Fwiki%2FDatei%3AChristopher_Lloyd_May_2015.jpg&psig=AOvVaw2bo4ACht4mToij8v-3IeEF&ust=1574274199663503",
          dead: isntDead.toString()
        },
        {
          name: "Bruce Lee",
          imageUrl:
            "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiIlaWB8_blAhU8IjQIHWu2AeQQjB16BAgBEAM&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Flex%2F43855760&psig=AOvVaw0uP0c1PM9N1QguwUwYd4qx&ust=1574274272656066",
          dead: isDead.toString()
        },
        {
          name: "Heath Ledger",
          imageUrl:
            "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjXp6yR8_blAhWdJTQIHdobAUoQjB16BAgBEAM&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2F22284790%40N06%2F2149692029&psig=AOvVaw0uyx7k6TkR100WwSb5coYS&ust=1574274355172808",
          dead: isDead.toString()
        },
        {
          name: "John Travolta",
          imageUrl:
            "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwioluuv8_blAhVtGDQIHYFXAVIQjB16BAgBEAM&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AJohn_Travolta_Deauville_2013.jpg&psig=AOvVaw3UZKdB9QnSs9cTsVtQRCGO&ust=1574274391235724",
          dead: isntDead.toString()
        }
      ]);
    });
};
