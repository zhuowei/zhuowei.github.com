var logTextArea, inputText;
function processQuestion(question) {
	var answer = "I don't know what you mean, sorry.";
	for (var i = 0; i < questions.length; i++) {
		if (question.toLowerCase().indexOf(questions[i].question.toLowerCase()) >= 0) {
			var questionObj = questions[i];
			if (questionObj.answer instanceof Function) {
				answer = questionObj.answer(question);
			} else {
				answer = questionObj.answer;
			}
			return answer;
		}
	}
	if (question.toLowerCase().indexOf("help") >= 0) {
		return listAllCommands(false);
	} else if (question.toLowerCase().indexOf("secret command") >= 0) {
		return listAllCommands(true);
	} 
	return answer;
}

function inputHandler(e) {
	if (!running) return;
	var question = inputText.value;
	var answer = processQuestion(question);
	inputText.value = "";
	logTextArea.value += userName +": " + question + "\nSteve: " + answer + "\n";
	logTextArea.scrollTop = logTextArea.scrollHeight - logTextArea.clientHeight;
}

function keyDownHandler(e) {
	if (e.keyCode == 13) {
		inputHandler(e);
	}
}

function loadHandler() {
	logTextArea = document.getElementById("log-text-area");
	inputText = document.getElementById("input-text");
	inputText.onkeydown = keyDownHandler;
	sayButton = document.getElementById("say-button");
	sayButton.onclick = inputHandler;
	inputText.style.width = (logTextArea.clientWidth - sayButton.clientWidth) + "px";
}

function listAllCommands(showSecret) {
	var retval = "Here is a list of all the commands that I understand:\n"
	for (var i = 0; i < questions.length; i++) {
		var question = questions[i];
		if (!showSecret && question.hidden === true) continue;
		if (question.answer instanceof Function) {
			retval += " - " + question.question + "...\n";
		} else {
			retval += " - " + question.question + "\n";
		}
	}
	return retval;
}

function clearScreen() {
	logTextArea.value = "";
}

window.onload = loadHandler;
