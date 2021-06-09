let people = {
  'sewon': "<strong class='thicker'>Sewon Min</strong>",
  'hanna': "Hannaneh Hajishirzi",
  'luke': "Luke Zettlemoyer",
  'minjoon': "Minjoon Seo",
  'danqi': "Danqi Chen",
  'victor': "Victor Zhong",
  'matt': "Matt Gardner",
  'sameer': "Sameer Singh",
  'eric': "Eric Wallace",
  'ali': "Ali Farhadi",
  'alon': "Alon Talmor",
  'jonathan': "Jonathan Berant",
  'caiming': "Caiming Xiong",
  'richard': "Richard Socher",
  'gunhee': "Gunhee Kim",
  'sanggoo': "Sang-goo Lee",
  'kristina': "Kristina Toutanova",
  'kenton': "Kenton Lee",
  'vlad': "Vladimir Karpukhin",
  'barlas': "Barlas Oguz",
  'ledell': "Ledell Wu",
  'sergey': "Sergey Edunov",
  'scott': "Wen-tau Yih",
  'julian': "Julian Michael",
  'patrick': "Patrick Lewis",
  'daniel': "Daniel Khashabi",
  'tushar': "Tushar Khot",
  'ashish': "Ashish Sabharwal",
  'oyvind': "Oyvind Tafjord",
  'peter': "Peter Clark",
  'srini': "Srinivasan Iyer",
  'belinda': "Belinda Z. Li",
  'yashar': "Yashar Mehdad",
  'adam': "Adam Roberts",
  'chris': "Chris Alberti",
  'colin': "Colin Raffel",
  'eunsol': "Eunsol Choi",
  'jennimaria': "Jennimaria Palomaki",
  'jordan': "Jordan Boyd-Graber",
  'kelvin': "Kelvin Guu",
  'michael': "Michael Collins",
  'tom': "Tom Kwiatkowski",
  'mingwei': "Ming-Wei Chang",
  'jungsoo': "Jungsoo Park"
};

let people_website = {
  'hanna': "https://homes.cs.washington.edu/~hannaneh/",
  'luke': "https://www.cs.washington.edu/people/faculty/lsz",
  'minjoon': "https://seominjoon.github.io",
  'ali': "https://homes.cs.washington.edu/~ali/index.html",
  'caiming': "http://cmxiong.com/",
  'richard': "http://www.socher.org/",
  'gunhee': "https://vision.snu.ac.kr/gunhee/",
  'sanggoo': "http://ids.snu.ac.kr/site/members/M_Sang-goo_Lee.html",
  'kristina': "http://kristinatoutanova.com/",
  'kenton': "https://kentonl.com"
};

let intros = [
  `  Hello! <br />
  I am a 3rd-year Ph.D. student in the Natural Language Processing group at the University of Washington.
  I am fortunate to be advised by [hanna] and [luke].
  Prior to UW, I received B.S. in CSE from Seoul National University. <br /><br />

  My primary research interests lie in the area of natural language processing and machine learning.
  My long-term goal of research is to build a system that can understand natural language text, reason about it, and
  answer to any real-world questions. <br /><br />

  During my Ph.D., I have been fortunate to be a visiting researcher / an intern at Facebook AI Research and Google AI Research,
  and work closely with Allen Institute for AI.
  `
]

let pub_dictionary = {
  "emnlp2019": {'paper': "https://arxiv.org/abs/1909.04849",
                'code': "https://github.com/shmsw25/qa-hard-em",
                'slides': "emnlp2019_slides.pdf",
                'talk': "https://vimeo.com/426355627"},
  "acl2019a": {'paper': "https://arxiv.org/abs/1906.02916",
        'code': "https://github.com/shmsw25/DecompRC",
        'demo': "http://allgood.cs.washington.edu:2019",
        'poster': "acl2019a_poster.pdf"},
  "acl2019b": {'paper': "https://arxiv.org/abs/1906.02900",
        'code': "https://github.com/shmsw25/single-hop-rc",
        'slides': "acl2019b_slides.pdf",
        'talk': "https://vimeo.com/385198551"},
  "acl2018": {'paper': "http://arxiv.org/abs/1805.08092",
        'poster': "acl2018_poster.pdf"},
  "iclr2018": {'paper': "https://arxiv.org/abs/1711.02085",
        'poster': "iclr2018_poster.pdf"},
  "acl2017": {'paper': "https://arxiv.org/abs/1702.02171",
        'code': "https://github.com/shmsw25/qa-transfer",
        'poster': "acl2017_poster.pdf"},
  "iclr2017": {'paper': "https://arxiv.org/abs/1606.04582",
        'code': "https://github.com/seominjoon/qrn"},
  "mrqa2019": {'paper': "https://mrqa.github.io/2019/assets/papers/43_Paper.pdf"},
  "min2020ambigqa": {'paper': "https://arxiv.org/abs/2004.10645",
        'website' :'https://nlp.cs.washington.edu/ambigqa/',
        'code': 'https://github.com/shmsw25/AmbigQA',
    	  'slides': 'ambigqa_slides.pdf',
        'talk': 'https://slideslive.com/38938941'},
  "karpukhin2020dense": {'paper': "https://arxiv.org/abs/2004.04906",
        'code': 'https://github.com/facebookresearch/DPR',
        'demo': 'http://qa.cs.washington.edu:2020/'},
  "preprint2019b": {'paper': "https://arxiv.org/abs/1911.03868",
        'code': "https://github.com/shmsw25/GraphRetriever"},
  "preprint2019a": {'paper': "https://arxiv.org/abs/1909.11291"},
  "khashabi2020unifiedqa": {'paper': "https://arxiv.org/abs/2005.00700",
        'code': "https://github.com/allenai/unifiedqa"},
  "iyer2021reconsider": {'paper': "https://arxiv.org/abs/2010.10757",
        'code': "https://github.com/facebookresearch/reconsider"},
  "li2020efficient": {'paper': "https://arxiv.org/abs/2010.02413",
        'code': "https://github.com/facebookresearch/BLINK/tree/master/elq"},
  "min2021neurips": {
  	"paper": "https://efficientqa.github.io/assets/report.pdf"
  },
  "min2021joint": {
    "paper": "https://arxiv.org/abs/2104.08445"
  },
  "beltagy2021beyond": {
    "website": "https://github.com/allenai/naacl2021-longdoc-tutorial"
  },
  "part2021faviq": {
    "paper": "",
    "website": "https://faviq.github.io"
  }
}

let website_directory = {
  "uskb": "https://uskb-workshop.github.io/",
  "efficientqa": "http://efficientqa.github.io/",
  "mrqa": "https://mrqa.github.io/"
}

function add_link (title, link) {
  return `<a href="` + link + `" target="_blank">` + title + `</a>`;
}

function add_info (paper, infos) {
  var text = "";
  infos.forEach(info => {
    text += "[" + add_link(info, pub_dictionary[paper][info]) + "]";
  })
  return text;
}

let news = [
  `06/2021: I co-taught the NAACL-HLT tutorial on ` + 
  add_link(`Beyond Paragraphs: NLP for Long Sequences`, pub_dictionary["beltagy2021beyond"]["website"]) + `.`,
  `04/2021: Our new preprint, ` + 
  add_link("Joint Passage Ranking for Diverse Multi-Answer Retrieval", pub_dictionary["min2021joint"]["paper"]) + `
  is out! This is done as part of my internship at Google.`,
  `01/2021: 
  We, the NeurIPS 2020 EfficientQA organizers, together with participants,
  wrote ` + add_link(`NeurIPS 2020 EfficientQA Competition:
  	Systems, Analyses and Lessons Learned`, pub_dictionary["min2021neurips"]["paper"]) + `.
  The video of the NeuIPS event is also available ` + add_link(`here`, "https://www.youtube.com/watch?v=3tdWV4vAf2I") + `.
   (Update 05/2021: The paper was accepted to PMLR.)`,
  `12/2020: I am co-organizing ` + add_link("The 3rd Workshop on Machine Reading for Question Answering", website_directory["mrqa"]) +
  `, hosted at EMNLP 2021. Stay tuned for Call for papers!`,
  `09/2020: I made an ` + add_link("Open-domain QA Demo", pub_dictionary["karpukhin2020dense"]["demo"])
      + ` using ` + add_link("DPR", pub_dictionary["karpukhin2020dense"]["paper"]) + `. Give it a try!`,
  `06/2020: I am co-organizing ` + add_link("Competition on Efficient Open-Domain Question Answering", website_directory["efficientqa"]) +
  `, hosted at NeurIPS 2020. [` + add_link("leaderboard", "https://ai.google.com/research/NaturalQuestions/efficientqa") + `]`,
  `06/2020: I am co-organizing ` + add_link("Workshop on Unstructured/Structured KBs", website_directory["uskb"]) +
  `, hosted at AKBC 2020.`,
  `04/2020: Our new preprint, ` +
  add_link("AmbigQA: Answering Ambiguous Open-domain Questions", pub_dictionary["min2020ambigqa"]["paper"]) + `
  is out! Visit ` + add_link("AmbigQA website", pub_dictionary["min2020ambigqa"]["website"]) + ` to download data and see samples.`,
  `04/2020: Our new preprint, ` +
  add_link("Dense Passage Retrieval for Open-domain Question Answering", pub_dictionary["karpukhin2020dense"]["paper"]) + `
  is out (w/ ` + add_link("code", pub_dictionary["karpukhin2020dense"]["code"]) + `)!`
];


let publications = [
     /*["FaVIQ: Fact Verification from Information seeking Questions",
      ["jungsoo*", 'sewon*', "Jaewoo Kang", 'luke', 'hanna'],
      "arXiv preprint",
      "",
      "2021",
      "part2021faviq"],*/
     ["Joint Passage Ranking for Diverse Multi-Answer Retrieval",
      ['sewon', 'kenton', 'mingwei', 'kristina', 'hanna'],
      "arXiv preprint",
      "",
      "2021",
      "min2021joint"
      ],
      ["NeurIPS 2020 EfficientQA Competition: Systems, Analyses and Lessons Learned",
       //['<strong>Sewon Min</strong> et al.'],
       ['sewon', 'jordan', 'chris', 'danqi', 'eunsol', 'michael', 'kelvin', 'hanna', 'kenton',
       'jennimaria', 'colin', 'adam', 'tom', " and more (EfficientQA participants)"],
       "Maching Learning Research (PMLR)",
       "",
       "2021",
       "min2021neurips"
      ],
      ["Beyond Paragraphs: NLP for Long Sequences",
       ["Iz Beltagy", "Arman Cohan",'hanna', 'sewon', "Matthew E. Peters"],
        "NAACL-HLT Tutorial",
        "",
        "2021",
        "beltagy2021beyond"
      ],
      ["ReConsider: Re-Ranking using Span-Focused Cross-Attention for Open Domain Question Answering",
       ['srini', 'sewon', 'yashar', 'scott'],
       "NAACL-HLT (short)",
       "",
       "2021",
       "iyer2021reconsider"
      ],
      ["Efficient One-Pass End-to-End Entity Linking for Questions",
       ['belinda', 'sewon', 'srini', 'yashar', 'scott'],
       "EMNLP (short)",
       "",
       "2020",
       "li2020efficient"
      ],
      ["AmbigQA: Answering Ambiguous Open-domain Questions",
       ['sewon', 'julian', 'hanna', 'luke'],
       "EMNLP (long)",
       "",
       "2020",
       "min2020ambigqa"
      ],
      ["Dense Passage Retrieval for Open-domain Question Answering",
       ['vlad*', 'barlas*', 'sewon', 'patrick', 'ledell', 'sergey', 'danqi', 'scott'],
       "EMNLP (long)",
       "",
       "2020",
       "karpukhin2020dense"
      ],
      ["UnifiedQA: Crossing Format Boundaries With a Single QA System",
       ['daniel', 'sewon', 'tushar', 'ashish', 'oyvind', 'peter', 'hanna'],
       "Findings of EMNLP (long)",
       "",
       "2020",
       "khashabi2020unifiedqa"
      ],
      ["Knowledge Guided Text Retrieval and Reading for Open Domain Question Answering",
       ['sewon', 'danqi', 'luke', 'hanna'],
       "arXiv:1911.03868",
       "",
       "2019",
       "preprint2019b"
      ],
      ["A Discrete Hard EM Approach for Weakly Supervised Question Answering",
       ['sewon', 'danqi', 'hanna', 'luke'],
       "EMNLP (long)",
       "Hong Kong, China",
       "2019",
       "emnlp2019"
      ],
      ["On Making Reading Comprehension More Comprehensive",
       ['matt', 'jonathan', 'hanna', 'alon', 'sewon'],
       "MRQA @ EMNLP",
       "Hong Kong, China",
       "2019",
       "mrqa2019"
      ],
      ["Question Answering is a Format; When is it Useful?",
       ['matt', 'jonathan', 'hanna', 'alon', 'sewon'],
       "arXiv:1909.11291",
       "",
       "2019",
       "preprint2019a"
      ],
      ["Multi-hop Reading Comprehension through Question Decomposition and Rescoring",
       ['sewon', 'victor', 'luke', 'hanna'],
       "ACL (long)",
       "Florence, Italy",
       "2019",
       "acl2019a"
      ],
      ["Compositional Questions Do Not Necessitate Multi-hop Reasoning",
       ['sewon*', 'eric*', 'sameer', 'matt', 'hanna', 'luke'],
       "ACL (short)",
       "Florence, Italy",
       "2019",
       "acl2019b"
      ],
      ["Efficient and Robust Question Answering from Minimal Context over Documents",
       ['sewon', 'victor', 'richard', 'caiming'],
       "ACL (long)",
       "Melbourne, Australia",
       "2018",
       "acl2018"
      ],
      ["Neural Speed Reading via Skim-RNN",
       ['minjoon*', 'sewon*', 'ali', 'hanna'],
       "ICLR",
       "Vancouver, Canada",
       "2018",
       "iclr2018"
      ],
      ["Question Answering through Transfer Learning from Large Fine-grained Supervision Data",
       ['sewon', 'minjoon', 'hanna'],
       "ACL (short)",
       "Vancouver, Canada",
       "2017",
       "acl2017"
      ],
      ["Query-Reduction Networks for Question Answering",
       ['minjoon', 'sewon', 'ali', 'hanna'],
       "ICLR",
       "Toulon, France",
       "2017",
       "iclr2017"
      ]
];

let educations = [
  [
    "University of Washington",
    "2018.09 - Current",
    [
      "Ph.D. student in Computer Science & Engineering",
      "Advisers: <a href='" + people_website['hanna'] + "' target='_blank'>" + people['hanna'] + "</a> and " +
      "<a href='" + people_website['luke'] + "' target='_blank'>" + people['luke'] + "</a><br />" +
      "Master's degree obtained in March 2020"
    ],
  ],
  [
    "Seoul National University",
    "2014.03 - 2018.08",
    [
      "B.S. in Computer Science & Engineering (Summa Cum Laude)",
      "GPA: 4.12/4.30 (total) 4.19/4.30 (major), 1st rank in CSE"
    ],
  ],
  [
    "Gyeonggi Science High School",
    "2011.03 - 2014.02",
    [
      "Specialized high school for students talented in math and science"
    ],
  ]
];

let experiences = [
  [
    "University of Washington",
    "2018.09 - Current",
    "Ph.D. student",
    ["hanna", "luke"]
  ],
  [
    "Facebook AI Research (FAIR)",
    "2019.10 - 2020.09, 2021.04 - Current",
    "Visiting researcher",
    ["luke"]
  ],
  [
    "Google AI Research",
    "2020.09 - 2021.03",
    "Research intern / student researcher",
    ["kenton", "kristina"]
  ],
  [
    "Salesforce Research (Metamind)",
    "2017.11 - 2018.02",
    "Research intern",
    ["caiming"]
  ],
  [
    "University of Washington",
    "2016.10 - 2017.02",
    "Undergraduate research intern",
    ["hanna", "ali"]
  ],
  [
    "Seoul National University",
    "2016.07 - 08",
    "Undergraduate intern at <a href='http://vision.snu.ac.kr/' target='_blank'>Vision & Learning Lab</a>",
    ["gunhee"]
  ],
  [
    "Seoul National University",
    "2016.02 - 06",
    "Participant of Undergraduate Research Opportunity Program (UROP)",
    ["sanggoo"]
  ]
];

let honors = [
  "<strong>Doctoral Study Abroad Program Fellowship</strong> granted by "
  + "<a href='https://www.kfas.or.kr/?pCulture=en' target='_blank'>Korea Foundation for Advanced Studies (KFAS)</a> (2018-2023)",
  "Wissner-Slivka Endowed Graduate Fellowship granted by Paul G. Allen School (2018-2019)",
  "Best Undergraduate Thesis Award granted by CSE, Seoul National University (2018)",
  "Full Scholarship for all semesters attended at Seoul National University (merit-based, 2014-2018)",
  "ICLR Travel Award (2018)",
  "<a href='https://buildyourfuture.withgoogle.com/scholarships/google-travel-scholarships/' target='_blank'>Google Travel Grants</a> (2017, 2018)",
  "<a href='http://cse.snu.ac.kr/scsc/node/19' target='_blank'>Samsung Convergence Software Course</a> Mentor Scholarship (2017)"
];

let services = [
  "Co-organizer: " + add_link("The 3rd Workshop on Machine Reading for Question Answering (MRQA @ EMNLP 2021)", website_directory["mrqa"]),
  "Co-organizer: " + add_link("Competition on Efficient Open-Domain Question Answering (EfficientQA @ NeurIPS 2020)", website_directory["efficientqa"]),
  "Co-organizer: " + add_link("Workshop on Unstructured/Structured KBs (USKB @ AKBC 2020)", website_directory["uskb"]),
  "Tutorial co-instructor: " + add_link("Beyond Paragraphs: NLP for Long Sequences (NAACL-HLT 2021)", pub_dictionary["beltagy2021beyond"]["website"]),
  `
  Reviewer/Program Committee:
  <ul style="padding-left: 40px;">
    <!--<li>*CL/NLP conferences: ACL (2019, 2020, 2021), EMNLP (2019, 2020, 2021), AKBC (2019, 2020), AACL (2020), NAACL (2021)</li>
    <li>ML/AI conferences: NeurIPS (2018, 2020, 2021), ICLR (2019, 2020, 2021, 2022), AAAI (2020, 2021), ICML (2021)</li>
    <li>
      Workshops: Student Research Workshop (SRW @ ACL 2019, SRW @ ACL 2020, SRW @ AACL 2020, SRW @ EACL 2021, SRW @ ACL 2021),
      The 2nd Workshop on Machine Reading for Question Answering (MRQA @ EMNLP 2019),
      The 1st Workshop on NLP for Positive Impact (NLP4PI @ ACL 2021)
    </li>
    <li>
      Competition Proposals: NeurIPS (2021)
    </li>-->

    <li>*CL/NLP conferences:
      <ul style="padding-left: 40px;">
        <li>ACL: 2019, 2020, 2021</li>
        <li>EMNLP: 2019, 2020, 2021</li>
        <li>AKBC: 2019, 2020, 2021</li>
        <li>AACL: 2020</li>
        <li>NAACL: 2021</li>
      </ul>
    </li>
    <li>ML/AI conferences:
      <ul style="padding-left: 40px;">
        <li>NeurIPS: 2018, 2020, 2021</li>
        <li>ICLR: 2019, 2020, 2021, 2022</li>
        <li>AAAI: 2020, 2021</li>
        <li>ICML: 2021</li>
      </ul>
    <li>Workshops:
      <ul style="padding-left: 40px;">
        <li>Student Research Workshop: ACL 2019, ACL 2020, AACL 2020, EACL 2021, ACL 2021</li>
        <li>The 2nd Workshop on Machine Reading for Question Answering (MRQA @ EMNLP 2019)</li>
        <li>The 1st Workshop on NLP for Positive Impact (NLP4PI @ ACL 2021)</li>
      </ul>
    </li>
    <li>
      Competition Proposals: NeurIPS (2021)
    </li>
  </ul>
  `,
  "Prospective Student Committee Chair for UW CSE Ph.D. Program (2019)",
  "Admission Committee Member for UW CSE Ph.D. Program (2021)"
]
