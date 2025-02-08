//---------------Button Mirror Shine Effect---------------//

document.addEventListener('DOMContentLoaded', () => {
  const ctaButton = document.querySelector('.cta-button');

  // Trigger shine effect on hover
  ctaButton.addEventListener('mouseenter', () => {
    ctaButton.classList.add('hovered');
  });

  ctaButton.addEventListener('mouseleave', () => {
    ctaButton.classList.remove('hovered');
  });

  // Automatically trigger shine every 4 seconds
  setInterval(() => {
    ctaButton.classList.add('active-shine');
    setTimeout(() => {
      ctaButton.classList.remove('active-shine');
    }, 400); // Remove the class after 400ms (duration of the shine effect)
  }, 4000); // Repeat every 4 seconds
});


document.addEventListener('DOMContentLoaded', () => {
  const ctaButtonSpt = document.querySelector('.cta-button_spt');

  // Trigger shine effect on hover
  ctaButtonSpt.addEventListener('mouseenter', () => {
    ctaButtonSpt.classList.add('hovered');
  });

  ctaButtonSpt.addEventListener('mouseleave', () => {
    ctaButtonSpt.classList.remove('hovered');
  });

  // Automatically trigger shine every 4 seconds
  setInterval(() => {
    ctaButtonSpt.classList.add('active-shine');
    setTimeout(() => {
      ctaButtonSpt.classList.remove('active-shine');
    }, 400); // Remove the class after 400ms (duration of the shine effect)
  }, 4000); // Repeat every 4 seconds
});




//---------------FAQ'S---------------//

document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.question');

  questions.forEach((question, index) => {
    const line = question.nextElementSibling.nextElementSibling; // Line element for each question
    const answer = question.nextElementSibling; // Answer for each question

    question.addEventListener('click', () => {
      const isActive = question.classList.contains('active');
      question.classList.toggle('active');
      if (isActive) {
        answer.style.maxHeight = null;
        answer.classList.remove('active');
        line.style.bottom = '-2px'; // Move the line back to the bottom of the question
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.classList.add('active');
        line.style.bottom = answer.offsetHeight + 10 + 'px'; // Move the line to the bottom of the answer
      }
    });
  });
});


//---------------Buuton Action For Go To Contact Page---------------//

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.cta-button, .cta-button_spt');

  buttons.forEach(button => {
    // Trigger shine effect on hover
    button.addEventListener('mouseenter', () => {
      button.classList.add('hovered');
    });

    button.addEventListener('mouseleave', () => {
      button.classList.remove('hovered');
    });

    // Automatically trigger shine every 4 seconds
    setInterval(() => {
      button.classList.add('active-shine');
      setTimeout(() => {
        button.classList.remove('active-shine');
      }, 400);
    }, 4000);

    // Add click event to navigate to contact.html
    button.addEventListener('click', () => {
      window.location.href = 'contact.html';
    });
  });
});
