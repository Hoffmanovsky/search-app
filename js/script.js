const input = document.querySelector('.search');
const liArray = document.querySelectorAll('li');

const checkList = e => {
  const text = e.target.value.toLowerCase();

  liArray.forEach(el => {
    const task = el.textContent;
    if (task.toLowerCase().indexOf(text) !== -1) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });
};

input.addEventListener('keyup', checkList);
