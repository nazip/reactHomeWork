require("babel-register");

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import BlogPage from './components/containers/blogPage';

var express = require('express');
var app = express();

const BlogListItems = [[{img: {src:"card.png", width:"100", height:"100", alt:"image not found"},
                   txt: {type: "text", size: "20"}, txt1: "текст1"},
                   {img: {src:"card.png", width:"100", height:"50", alt:"image not found"},
                   txt: {type: "text", size: "20"}, txt1: "текст2"},
                   {img: {src:"card.png", width:"100", height:"30", alt:"image not found"},
                   txt: {type: "text", size: "20"}, txt1: "текст3"}],

                   [{img: {src:"card.png", width:"50", height:"100", alt:"image not found"},
                   txt: {type: "text", size: "20"}, txt1: "текст4"},
                   {img: {src:"card.png", width:"50", height:"50", alt:"image not found"},
                   txt: {type: "text", size: "20"}, txt1: "текст5"},
                   {img: {src:"card.png", width:"50", height:"30", alt:"image not found"},
                   txt: {type: "text", size: "20"}, txt1: "текст6"}]];

app.use(express.static('img'));
app.get('/', (req, res) => {

  res.send(ReactDOMServer.renderToStaticMarkup(
    React.createElement(BlogPage, {BlogListItems})
  ));

});

app.listen(4000);