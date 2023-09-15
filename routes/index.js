// Import the homeController to use its functions

import { getAllPosts } from "../controllers/homeController";

// Define a route for the homepage
router.get("/", (req, res) => {
  const data = {
    pageTitle: "Home",
    posts: getAllPosts(), // Call the function to get blog posts
  };

  // Render the 'home' template and pass data to it
  res.render("home", data);
});
