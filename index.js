(function() {

	window.onload = function(){
		displayQuestion();
		document.getElementById("submit").onclick = loadAnswer;
		for(var i=0; i<7; i++)
			document.getElementById(parseInt(i)).onclick = loadParagraph;
	}

	function displayQuestion(){
		var form= document.createElement("div");
		var label = document.createElement("h4");
		var span = document.createElement("span");
		span.classList.add("label");
		span.classList.add("label-primary");
		span.innerHTML="Question";
		var input = document.createElement("input");
		input.type="text";
		input.name="question"
		input.classList.add("form-control");
		input.id="question";
		var button = document.createElement("button");
		button.type = "button";
		button.classList.add("btn");
		button.classList.add("btn-sm");
		button.classList.add("btn-default");
		button.innerHTML="submit";
		button.id = "submit";
		form.appendChild(label);
		label.appendChild(span)
		form.appendChild(input);
		form.appendChild(button);

		var qadiv = document.getElementById("qa");
		qadiv.append(form);
	}

	function displayAnswer(answer){
	    var div = document.createElement("div");
		var label = document.createElement("h4");
		var span = document.createElement("span");
		span.classList.add("label");
		span.classList.add("label-primary");
		span.innerHTML="Answer";
		var input = document.createElement("div");
		input.classList.add("form-control");
		input.innerHTML = answer;
		div.appendChild(label);
		label.appendChild(span);
		div.appendChild(input);

		var qadiv = document.getElementById("qa");
		qadiv.append(div);
    }

	function loadAnswer(){
		var data = {
			paragraph: $("#paragraph").val(),
			question: $("#question").val()
		};
		sendAjax("/submit", data, handleAnswer);
	}

    function handleAnswer(answer){
		displayAnswer(answer);
		document.getElementById("question").id = "";
		document.getElementById("submit").id = "";
		displayQuestion();
		document.getElementById("submit").onclick = loadAnswer;
	}

	function loadParagraph(){
		var data = {paragraph_id: this.id};
		sendAjax("/select", data, handleParagraph);
	}

	function handleParagraph(para){
		document.getElementById("paragraph").innerHTML = para;
	}

    function sendAjax(url, data, handle){
		$.getJSON(url, data, function(response){
			handle(response.result);
		});
	}

})();
