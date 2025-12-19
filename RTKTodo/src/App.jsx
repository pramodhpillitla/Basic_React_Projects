import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import React from 'react'

export default function App() {
  
  return (
    <>
      <h1>To-Do</h1>
      <AddTodo />
      <Todos />
    </>
  )
}
