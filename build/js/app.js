function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('people');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((users) => {
    return users.map((person) => {
      let li = createNode('li'),
        span = createNode('span');

      li.innerHTML = person.name;
      span.innerHTML = person.email;

      append(li, span);
      append(ul, li);
    });
  })
  .catch((error) => console.error(error));
