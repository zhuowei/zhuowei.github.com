var running = true;
var userName = "You";
var clearScreen;
var likeMicrosoft = false;
var questions = [
{ question: "Hello", answer: ["Hello!", "What's up?", "Hey!"] },
{ question: "My name is", answer: function(question) { userName = question.substr(question.toLowerCase().indexOf("my name is ") + "My name is ".length).replace("?", "").replace(".", ""); return "Nice to meet you, " + userName + ".";}},
{ question: "How are you?", answer: ["Fine, thanks.", "Pretty good, thanks."]},
{ question: "Who are you?", answer: "I am Steve, a Minecraft player."},
{ question: "That's a very nice", hidden: true, answer: function(question) { alert("Connection closed: remote computer exploded"); return "";}},
{ question: "Sssss", hidden: true, answer: function(question) { alert("Connection closed: remote computer exploded"); running = false; return "";}},
{ question: "Is Herobrine real?", answer: "As long as you keep faith, he shall always be real in your heart."},
{ question: "Do you have a family?", answer: "Yes, my wife Steveietta and little Steve."},
{ question: "What is your name?", answer: "My name is Steve."},
{ question: "What is your quest?", answer: "To seek diamonds."},
{ question: "What is the airspeed of an unladen swallow?", answer: "Is it an African or European swallow?"},
{ question: "Don't ask me this question!", hidden: true, answer: function(question) { window.location = "http://www.youtube.com/watch?v=oHg5SJYRHA0"; return "";}},
{ question: "Do you like cake?", answer: "Yes, but only square cake."},
{ question: "Install viruses", answer: function(question) { alert("Well, you asked for it!"); window.location = "http://sp.ask.com/toolbar/install/web/ask/download.php"; return "";}},
{ question: "The cake is a lie", answer: "It's also chocolate flavoured."},
{ question: "I love Microsoft", answer: function(question) { likeMicrosoft = true; return "I'll remember that."}},
{ question: "I love Bing", answer: function(question) { likeMicrosoft = true; return "Because Google is too mainstream? Just kidding; Ill remember that."}},
{ question: "What is", answer: function(question) { window.location= (likeMicrosoft? "http://bing.lmgtfy.com?q=" : "http://lmgtfy.com?q=") + encodeURIComponent(question.substr(question.toLowerCase().indexOf("what is") + 8).replace("?", ""));
return "Let me " + (likeMicrosoft? "Bing" : "Google") + " that for you.";}},
{ question: "Can you", answer: function(question) { return question.toLowerCase().replace(/can you/, "Yes, I can").replace("?", ".")}},
{ question: "Do you like", answer: function(question) { return question.toLowerCase().replace(/do you like/, "Yes, I like").replace("?", ".")}},
{ question: "Do you think", answer: function(question) { return question.toLowerCase().replace(/do you think/, question.length % 2 == 0? "Yes, I think" : "No, I don't think").replace("?", ".")}},
{ question: "Are you", answer: function(question) { return question.toLowerCase().replace(/are you/, question.length % 2 == 0? "Yes, I am" : "No, I am not").replace("?", ".")}},
{ question: "Clear screen", answer: function(question) { clearScreen(); return "Blew up old responses with a stack of TNT.";}},
{ question: "Hi", matchExact: true, answer: "Hey!" },
{ question: "Ban me", answer: function(question) { alert("Disconnected: Banned"); running = false; return "You asked for it!"} },
{ question: "Minecraft crashed", answer: "It's not my fault! Update your display card's drivers and force update Minecraft. "}
]
