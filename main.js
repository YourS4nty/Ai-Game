const choices = ['rock', 'paper', 'scissors'];
    const outcomes = ['You win!', 'You lose!', "It's a tie!"];
    let userChoices = [];
    let aiChoices = [];

    function computerChoice() {
      const randomIndex = Math.floor(Math.random() * 3);
      return choices[randomIndex];
    }

    function determineWinner(user, computer) {
      if (user === computer) {
        return outcomes[2];
      } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
      ) {
        return outcomes[0];
      } else {
        return outcomes[1];
      }
    }

    function aiDecision() {
      if (userChoices.length > 0) {
        const lastUserChoice = userChoices[userChoices.length - 1];
        const likelyAiChoice = choices[(choices.indexOf(lastUserChoice) + 1) % 3];
        return likelyAiChoice;
      } else {
        return computerChoice();
      }
    }

    function userChoice(user) {
      const ai = aiDecision();
      const result = determineWinner(user, ai);
      displayResult(result, user, ai);
      userChoices.push(user);
      aiChoices.push(ai);
    }

    function displayResult(result, user, ai) {
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `You chose: <i class="fas fa-hand-${user}"></i> <br> Ai Choice: <i class="fas fa-hand-${ai}"></i>.<br>Result: ${result}`;
    }

    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
    }
