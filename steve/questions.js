var running = true;
var questions = [
{ question: "Hello", answer: "Hello!" },
{ question: "How are you?", answer: "Fine, thanks."},
{ question: "Who are you?", answer: "I am Steve, a Minecraft player."},
{ question: "That's a very nice", hidden: true, answer: function(question) { alert("Connection closed: remote computer exploded"); return "";}},
{ question: "Sssss", hidden: true, answer: function(question) { alert("Connection closed: remote computer exploded"); running = false; return "";}},
{ question: "Is Herobrine real?", answer: "As long as you keep faith, he shall always be real in your heart."},
{ question: "Do you have a family?", answer: "Yes, my wife Steveietta and little Steve."},
{ question: "What is your name?", answer: "My name is Steve"},
{ question: "What is your quest?", answer: "To seek diamonds"},
{ question: "What is the airspeed of an unladen swallow?", answer: "Is it an African or European swallow?"},
{ question: "Don't ask me this question!", hidden: true, answer: function(question) { window.location = "http://www.youtube.com/watch?v=oHg5SJYRHA0"; return "";}},
{ question: "Do you like cake?", answer: "Yes, but only square cake."},
{ question: "Install viruses", answer: function(question) { alert("Well, you asked for it!"); window.location = "http://sp.ask.com/toolbar/install/web/ask/download.php"; return "";}},
{ question: "The cake is a lie", answer: "It's also chocolate flavoured."},
{ question: "Can you", hidden: true, answer: function(question) { return question.toLowerCase().replace(/can you/, "Yes, I can").replace("?", ".")}},
{ question: "Do you like", hidden: true, answer: function(question) { return question.toLowerCase().replace(/do you like/, "Yes, I like").replace("?", ".")}},
{ question: "Do you think", hidden: true, answer: function(question) { return question.toLowerCase().replace(/do you think/, question.length % 2 == 0? "Yes, I think" : "No, I don't think").replace("?", ".")}},
{ question: "Are you", hidden: true, answer: function(question) { return question.toLowerCase().replace(/are you/, question.length % 2 == 0? "Yes, I am" : "No, I am not").replace("?", ".")}}
]
