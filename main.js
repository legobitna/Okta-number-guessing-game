let computerNumber = Math.floor(Math.random() * 100 + 1);

const guess = (event) => {
  event.preventDefault();
  const userNumber = document.getElementById("guessNumber").value;
  let resultHTML = ``;
  if (computerNumber == userNumber) {
    resultHTML = `<img src="https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif"/ width=300 height=168>
    <h1 class="result-text">정답!</h1>`;
  } else if (computerNumber < userNumber) {
    resultHTML = `<img src="https://lh3.googleusercontent.com/proxy/FdEVh72TH2834LorcUF4lo5K6nII1xI9WH4i9knvDZx6uGSNUiFL9ykppf1tkoK6SuAa3leSwwelzjpT7U1XPVPEvOJZTG5k1JykiFooP1jR"/ width=300 height=168>
      <h1 class="result-text">Down!</h1>`;
  } else if (computerNumber > userNumber) {
    resultHTML = `<img src="https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif"/ width=300 height=168>
      <h1 class="result-text">Up!</h1>`;
  }

  document.getElementById("resultArea").innerHTML = resultHTML;
  document.getElementById("guessNumber").value = ``;
};

const reset = () => {
  computerNumber = Math.floor(Math.random() * 10 + 1);
  document.getElementById(
    "resultArea"
  ).innerHTML = `<img src="https://media1.giphy.com/media/9DinPR8bzFsmf74j9W/giphy.gif"/ width=300>
    <h1 class="result-text">죽기싫다면 맞춰라!</h1>`;
};
