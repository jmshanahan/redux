export const getTodos = () => {
  return fetch("http://localhost:8080/todos").then(response => response.json());
};
export const createTodo = name => {
  // const accept = "Accept";
  // const headings = `{
  //   "Accept": "application/json",
  //   "Content-Type": "application/json"
  // }`;
  // console.log(`headers ${headings}`);
  return fetch("http://localhost:8080/todos", {
    method: "POST",
    headers: {
      "Acccept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: name, isComplete: false })
  }).then(response => response.json());
};
