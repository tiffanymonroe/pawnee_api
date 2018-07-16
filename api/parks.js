const mongoose = require('mongoose');

const parksStaff = [
  {
    name: 'Ron Swanson',
    department: 'Department of Parks and Recreation',
    title: 'Director',
    quote: "Never half-ass two things. Whole-ass one thing.",
    img: "https://m.media-amazon.com/images/M/MV5BMjI0MDA0NzA2MV5BMl5BanBnXkFtZTgwNzU5MjkyMDE@._V1_.jpg"
  },
  {
    name: 'Leslie Knope',
    department: 'Department of Parks and Recreation',
    title: 'Deputy Director',
    quote: "What I hear when I'm being yelled at is people caring loudly at me.",
    img: "https://m.media-amazon.com/images/M/MV5BMjEzNTY1Nzk4OV5BMl5BanBnXkFtZTgwNDY5MjkyMDE@._V1_.jpg"
  },
  {
    name: 'Tom Haverford',
    department: 'Department of Parks and Recreation',
    title: 'Administrator',
    quote: "Sometimes you gotta work a little so you can ball a lot.",
    img: "https://m.media-amazon.com/images/M/MV5BMTA0MTYyNDk2MTleQTJeQWpwZ15BbWU4MDMzOTI5MjAx._V1_.jpg"
  },
  {
    name: 'April Ludgate-Dwyer',
    department: 'Department of Parks and Recreation',
    title: 'Assistant to Ron Swanson',
    quote: "I hate talking to people about things.",
    img: "https://m.media-amazon.com/images/M/MV5BMTg3Nzc2NDA3Ml5BMl5BanBnXkFtZTgwMTc5MjkyMDE@._V1_.jpg"
  },
  {
    name: 'Donna Meagle',
    department: 'Department of Parks and Recreation',
    title: 'Permits Secretary',
    quote: "If you don't like how I tweet, don't follow me.",
    img: "https://m.media-amazon.com/images/M/MV5BMTQ2ODE1OTczMV5BMl5BanBnXkFtZTgwNzY5MjkyMDE@._V1_.jpg"
  },
  {
    name: 'Jerry Gergich',
    department: 'Department of Parks and Recreation',
    title: 'Office Manager',
    quote: "I think Comic Sans always screams fun, don't you?",
    img: "https://m.media-amazon.com/images/M/MV5BMjE3ODY0NDkyN15BMl5BanBnXkFtZTgwMjQ5MjkyMDE@._V1_.jpg"
  },
  {
    name: 'Andy Dwyer',
    department: 'Department of Parks and Recreation',
    title: 'Assistant to Leslie Knope',
    quote: "When life gives you lemons make lemonade. I read that one on a can of lemonade. I like to think it applies to life.",
    img: "https://m.media-amazon.com/images/M/MV5BMjEyNTQxMzM0OF5BMl5BanBnXkFtZTgwOTQ5MjkyMDE@._V1_.jpg"
  },
  {
    name: 'Ann Perkins',
    department: 'Department of Health',
    title: 'Public Relations Director',
    quote: "Jogging is the worst! I know it keeps you healthy, but God, at what cost?",
    img: "https://m.media-amazon.com/images/M/MV5BMTAwMzYwMjgxMTleQTJeQWpwZ15BbWU4MDUzOTI5MjAx._V1_.jpg"
  },
  {
    name: 'Ben Wyatt',
    department: 'City of Pawnee',
    title: 'Assistant City Manager',
    quote: "That was amazing. That was a flu-ridden Michael Jordan at the '97 NBC FInals. That was Kirk Gibson hobbling up to the plate and hitting a homer off of Dennis Eckersley. That was... that was Leslie Knope.",
    img: "https://m.media-amazon.com/images/M/MV5BMTUyMzkxOTYxMF5BMl5BanBnXkFtZTgwOTM5MjkyMDE@._V1_.jpg"
  },
  {
    name: 'Chris Traeger',
    department: 'City of Pawnee',
    title: 'City Manager',
    quote: "There is literally nothing in this world that you cannot do.",
    img: "https://m.media-amazon.com/images/M/MV5BODA4MDM1ODU1Ml5BMl5BanBnXkFtZTgwNTU5MjkyMDE@._V1_.jpg"
  }
];

module.exports = parksStaff;
