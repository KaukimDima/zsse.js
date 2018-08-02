import React, { Component } from 'react';
import './App.css';
import CommentList from './Comments/CommentList';
import SendComment from './Comments/SendComment';

let id = 0; 

function getTodoId() {
  id += 1;
  return id;
}

