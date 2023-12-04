const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
      question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const questionActive = document.querySelector('.question.active')

            if (questionActive && questionActive !== question) {
                  questionActive.classList.remove('active');
                  questionActive.nextElementSibling.style.display = 'none';
                  questionActive.children[1].setAttribute('src', 'images/icon-plus.svg')
            }
            
            question.classList.toggle('active');

            const expandIcon = question.children[1];

            if (question.classList.contains('active')) {
                  answer.style.display = 'block';
                  expandIcon.setAttribute('src', 'images/icon-minus.svg')
            } else {
                  answer.style.display = 'none';
                  expandIcon.setAttribute('src', 'images/icon-plus.svg')
            }
      })
})