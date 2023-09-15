const blogPosts = [
  {
    id: 1,
    name: "john",
    description:
      "John Smith is the author of the blog post for the blog post on the blog post website at http:// johnsmith.com and he writes about the announcement about his child birthday",
  },
  {
    id: 2,
    name: "john",
    description:
      "John Smith is the author of the blog post for the blog post on the blog post website at http:// johnsmith.com and he writes about the announcement about his child birthday",
  },
  {
    id: 3,
    name: "john",
    description:
      "John Smith is the author of the blog post for the blog post on the blog post website at http:// johnsmith.com and he writes about the announcement about his child birthday",
  },
  {
    id: 4,
    name: "john",
    description:
      "John Smith is the author of the blog post for the blog post on the blog post website at http:// johnsmith.com and he writes about the announcement about his child birthday",
  },
  {
    id: 5,
    name: "john",
    description:
      "John Smith is the author of the blog post for the blog post on the blog post website at http:// johnsmith.com and he writes about the announcement about his child birthday",
  },
  {
    id: 6,
    name: "john",
    description:
      "John Smith is the author of the blog post for the blog post on the blog post website at http:// johnsmith.com and he writes about the announcement about his child birthday",
  },
];
function getAllPosts() {
  return blogPosts;
}
function getPostsById(postId) {
  return blogPosts.find((post) => post.id === postId);
}
module.exports = {
  getAllPosts,
  getPostsById,
};
