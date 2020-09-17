window.onload = function () {
  // load intro
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
    introText += text+"<br /><br />";
  }
  // load news
  for (let i=0; i<news.length; i++) {
    introText += "<span class='glyphicon glyphicon-ok'></span> " + news[i] + "<br />";
  }
  document.getElementById("intro-text").innerHTML += introText;
  // load publications
  let pubText = "";
  let ordered_options = ["paper", "website", "code", "demo", "slides", "talk", "poster", "BibTex"];
  for (let i=0; i<publications.length; i++) {
    console.assert(publications[i].length===3);
    pubText += "<h4><em>" + publications[i][0] + "</em></h4>";
    let papers = publications[i][2];
    for (let j=0; j<papers.length; j++) {
      let paper = papers[j];
      //let prefix = "<sup>[" + publications[i][1] + (papers.length-j) + "]</sup>";
      pubText += "<h4>" + paper[0] + "</h4>"; // title
      pubText += "<p>"; //authors
      for (let k=0; k<paper[1].length; k++) {
        let author = paper[1][k];
        if (k>0) {
          pubText += ", ";
        }
        if (author.endsWith('*')) {
          pubText += people[author.substring(0, author.length-1)]+"*";
        } else {
          pubText += people[author];
        }
      }
      pubText += "</p>"
      pubText += "<p>"
      let keyword;
      if (paper.length===6) {
        // proceedings
        //pubText += "In: <em> Proceedings of "+paper[2]+"</em>. "+paper[3]+". "+paper[4]+". ";
        pubText += "In: <em> Proceedings of "+paper[2]+"</em>. "+paper[4]+". ";
        keyword = paper[5];
      } else if (paper.length==5) {
        // arxiv
        pubText += "<em>"+paper[2]+"</em>. "+paper[3]+". ";
        keyword = paper[4];
      } else {
        console.assert(false);
      }
      // optional things
      let optional_dict = pub_dictionary[keyword];
      for (let k=0; k<ordered_options.length; k++) {
        if (ordered_options[k] in optional_dict) {
          let key = ordered_options[k];
          let value = optional_dict[key];
          if (key==="slides" || key==="poster") {
            value = "assets/"+value;
          } else if (key==="BibTex") {
            value = "assets/bibtex/"+value;
          }
          pubText += "[<a href='"+value+"' target='_blank'>"+key+"</a>] ";
        }
      }
      pubText += "[<a href='assets/bibtex/"+keyword+".txt' target='_blank'>BibTeX</a>] ";
      pubText += "</p>"
    }
  }
  document.getElementById("publication").innerHTML += pubText + "<br />*: equal contribution";
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
  // load honors
  let honorText = "";
  for (let i=0; i<honors.length; i++) {
    honorText += "<li>" + honors[i] + "</li>";
  }
  document.getElementById("honorship").innerHTML += "<ul>" + honorText + "</ul>";
  // load services
  let serviceText = "";
  for (let i=0; i<services.length; i++) {
    serviceText += "<li>" + services[i] + "</li>";
  }
  document.getElementById("service").innerHTML += "<ul>" + serviceText + "</ul>";
};
