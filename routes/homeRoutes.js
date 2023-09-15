const express = require("express");
const router = express.Router();

const { getAllPosts } = require("../controllers/homeController");

const app = express();
