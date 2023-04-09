#! /usr/bin/env node

import inquirer from "inquirer";

let todos: string[] = [];
let loop = true;

while (loop) {
  const inputs: {
    todo: string;
    more: boolean;
  } = await inquirer.prompt([
    {
      type: "input",
      name: "todo",
      message: "ENTER YOUR TO-DOs",
    },

    {
      type: "confirm",
      name: "more",
      message: "DO YOU WANT TO ADD MORE TO-DOs",
      default: false,
    },
  ]);
  const { todo, more } = inputs;
  loop = more;
  if (todo) {
    todos.push(todo);
  } else {
    console.log("KINDLY ENTER VALID INPUT");
  }
}

if (todos.length > 0) {
  console.log("your TOdo list:");

  todos.forEach((todo) => {
    console.log(todo);
  });
} else {
  console.log("NO DATA FOUND");
}
