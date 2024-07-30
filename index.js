window.onload = function () {
  var current = window.location.href.split("/").pop().split(".")[0];

  // setup nav
  $(".navbar-toggle").click(function(){
    if ($(".navbar-collapse").hasClass("collapse")) {
      $(".navbar-collapse").removeClass("collapse");
    } else {
      $(".navbar-collapse").addClass("collapse");
    }
  })

  if (current==="index") {
    let introText = "";
    for (let i=0; i<intros.length; i++) {
      let text = intros[i];
      while (text.indexOf('[')>-1) {
        let start = text.indexOf('[');
        let end = text.indexOf(']')
        key = text.substring(start+1, end);
        if (key==='hanna' || key==='luke') {
          text =  text.substring(0, start) + "<a href='" + people_website[key] + "' target='_blank'>" + people[key] + "</a>" + text.substring(end+1, text.length);
        } else {
          console.assert(key in pub_dictionary);
          text =  text.substring(0, start) + "<a href='" + pub_dictionary[key] + "' target='_blank'>" + key + "</a>" + text.substring(end+1, text.length);
        }
      }
      introText += text;
      break;
    }
    introText += `<h4 style="font-size: 150%">News</h4><div id='news-text'></div>`;
    function _add_button(button_id, button_text) {
      return `<span id='` + button_id + `' style='
        cursor: pointer;
        margin-left: 10px;
      '>
      [<a>` + button_text + `</a>]
      </span>`;
    }
    introText += _add_button('news-load', 'Load all') + _add_button('news-collapse', 'Collapse');
    introText += `<div class="mini-blank"></div>`;
    document.getElementById("intro-text").innerHTML += introText;


    // load news
    function _load_news(n_news) {
      let newsText = "";
      for (let i=0; i<n_news; i++) {
        newsText += "<p id='news-" + i + "'><span class='glyphicon glyphicon-ok'></span> " + news[i] + "</p>";
      }
      newsText += "<p style='margin-top: 5px'>";
      document.getElementById("news-text").innerHTML = newsText;
    }
    _load_news(7);
    
    // control # of news to show
    $('#news-collapse').hide();
    $('#news-load').click(function(){
      _load_news(news.length);
      $('#news-collapse').show();
      $('#news-load').hide();
    })
    $('#news-collapse').click(function(){
      _load_news(7);
      $('#news-collapse').hide();
      $('#news-load').show();
    })

  } else if (current === "publication") {

    // load publications
    let pubText = "";
    let ordered_options = ["paper", "website", "code", "demo", "api", "slides", "talk", "poster"];
    
    let papers = publications;

    //for (let i=0; i<publications.length; i++) {
    //console.assert(publications[i].length===3);
    //pubText += "<h4><em>" + publications[i][0] + "</em></h4>";
    //let papers = publications[i][2];
    for (let j=0; j<papers.length; j++) {
      let paper = papers[j];
      let isFirst = j===0 || paper[3]!=papers[j-1][3];

      if (isFirst) {
        pubText += "<h4 class='year'>" + paper[3] + "</h4>";
        pubText += "<h4 class='first'>" + paper[0] + "</h4>"; // title
      } else {
        pubText += "<h4>" + paper[0] + "</h4>"; // title
      }
      pubText += "<p>"; //authors
      for (let k=0; k<paper[1].length; k++) {
        let author = paper[1][k];
        if (k>0) {
          pubText += ", ";
        }
        if (author.endsWith('*')) {
          pubText += people[author.substring(0, author.length-1)]+"*";
        } else {
          if (author in people) {
            pubText += people[author];
          } else {
            pubText += author;
          }
        }
      }
      pubText += "<br />"
      let keyword;
      if (paper[2].startsWith("arXiv") || paper[2].includes("Tutorial")) {
        // arxiv
        pubText += "<em>"+paper[2]+"</em>. "+paper[3]+". ";
        keyword = paper[4];
      } else if (paper[2].includes("TACL")){
        // journal
        pubText += "In: <em>"+paper[2]+"</em>. "+paper[3]+". ";
        keyword = paper[5];
      } else {
        // proceedings
        //pubText += "In: <em> Proceedings of "+paper[2]+"</em>. "+paper[3]+". "+paper[4]+". ";
        pubText += "In: <em> Proceedings of "+paper[2]+"</em>. "+paper[3]+". ";
        keyword = paper[4];
      }

      // optional things
      if (keyword in pub_dictionary) {
        let optional_dict = pub_dictionary[keyword];
        for (let k=0; k<ordered_options.length; k++) {
          if (ordered_options[k] in optional_dict) {
            let key = ordered_options[k];
            let value = optional_dict[key];
            if (key==="slides" || key==="poster") {
              value = "assets/slides/"+value;
            }
            pubText += "[<a href='"+value+"' target='_blank'>"+key+"</a>] ";
          }
        }
        
        // we will skip bibtext starting from 2024
        if (parseInt(paper[3])<2024 || (parseInt(paper[3])==2024 && paper[2].startsWith("ICLR"))) {
          var bibtex = "assets/bibtex/"+keyword+".txt";
          if ("BibTeX" in optional_dict) {
            bibtex = optional_dict["BibTeX"]
          }
          pubText += "[<a href='" + bibtex + "' target='_blank'>BibTeX</a>] ";

        }
      }

      pubText += "</p>"
    }
    //}
    document.getElementById("publication").innerHTML += `

    Please see my <a href="https://scholar.google.com/citations?user=jU4IZs4AAAAJ&hl=en" target="_blank">
    <span style="font-size:120%"><i class="ai ai-google-scholar"></i></span>
    google scholar</a> or <a href="https://www.semanticscholar.org/author/Sewon-Min/48872685" target="_blank">
    <span style="font-size:120%"><i class="ai ai-semantic-scholar"></i></span>
    semantic scholar</a> for an up-to-date list.
    <br /><br />
    *: equal contribution` +pubText;
  
  } else if (current == "background") {
    // load education
    let eduText = "";
    for (let i=0; i<educations.length; i++) {
      console.assert(educations[i].length == 3);
      eduText += "<h4>" + educations[i][0] + " <sup>" + educations[i][1] + "</sup></h4>";
      for (let j=0; j<educations[i][2].length; j++) {
        eduText += "<p>" + educations[i][2][j] + "</p>";
      }
    }
    document.getElementById("education").innerHTML += eduText;
    // load experiences
    let expText = "";
    for (let i=0; i<experiences.length; i++) {
      console.assert(experiences[i].length == 4);
      let verb = "supervised"; //(experiences[i][0].includes("University")) ? "advised" : "mentored";
      expText += "<h4>" + experiences[i][0] + " <sup>" + experiences[i][1] + "</sup></h4>";
      expText += "<p>" + experiences[i][2] + ", " + verb + " by ";
      for (let j=0; j<experiences[i][3].length; j++) {
        if (j>0 && j===experiences[i][3].length-1) {
          expText += " and ";
        } else if (j>0) {
          expText += ", ";
        }
        let mentor = experiences[i][3][j]
        expText += "<a href='" + people_website[mentor] + "' target='_blank'>" + people[mentor] + "</a>";
      }
      expText += "</p>";
    }
    document.getElementById("experience").innerHTML += expText;

  } else if (current == "service") {
    // load services
    let serviceText = `Please see my <a href="assets/CV.pdf" target="_blank"><i class="fa fa-download"></i> CV</a> for an up-to-date list.<br /><br />`;
    for (let i=0; i<services.length; i++) {
      serviceText += "<li>" + services[i] + "</li>";
    }
    document.getElementById("service").innerHTML += "<ul>" + serviceText + "</ul>";
  } else if (current === "talks") {
    // load talks
    let talksText = `Please see my <a href="assets/CV.pdf" target="_blank"><i class="fa fa-download"></i> CV</a> for an up-to-date list.`;
    var prevYear = "";
    var group = false;
    for (let i=0; i<talks.length; i++) {

      let year = talks[i].split(" ")[0].split(":")[0].split("/")[1];
      let isFirst = (i===0 || year!=prevYear) && !group;
      if (year==="2021" && !group) {
        year = "2021 or earlier";
        group = true;
      }
      prevYear = year;
      let talk = talks[i].replace("Title:", "&nbsp;&nbsp;&nbsp;&nbsp;Title:")

      if (isFirst) {
        talksText += "<h4 class='year'>" + year + "</h4>";
        talksText += "<p class='first'>" + talk + "</p>";
      } else {
        talksText += "<p>" + talk + "</p>";
      }

    }
    document.getElementById("talks").innerHTML += "<ul>" + talksText + "</ul>";
  } else if (current === "teaching") {
    let teachingText = "";
    
    for (let i=0; i<teaching.length; i++) {
      teachingText += "<p>" + teaching[i] + "</p>";
    }
    document.getElementById("teaching").innerHTML += teachingText;
  }


};
