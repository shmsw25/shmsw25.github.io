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
  'julian': "Julian Michael"
};

let people_website = {
  'hanna': "https://homes.cs.washington.edu/~hannaneh/",
  'luke': "https://www.cs.washington.edu/people/faculty/lsz",
  'minjoon': "https://seominjoon.github.io",
  'ali': "https://homes.cs.washington.edu/~ali/index.html",
  'caiming': "http://www.stat.ucla.edu/~caiming/",
  'richard': "http://www.socher.org/",
  'gunhee': "https://www.cs.cmu.edu/~gunhee/",
  'sanggoo': "http://ids.snu.ac.kr/wiki/Sang-goo_Lee",
  'kristina': "http://kristinatoutanova.com/",
  'kenton': "https://kentonl.com"
};

let intros = [
  `  Hello! <br />
  I am a 2nd-year Ph.D. student in the Natural Language Processing group at the University of Washington.
  I am fortunate to be advised by [hanna] and [luke].
  Prior to UW, I received B.S. in CSE from Seoul National University. <br /><br />
  
  My primary research interests lie in the area of natural language processing and machine learning.
  My long-term goal is to build a machine that can understand natural language text and reason about it
  through answering questions.
  `
]

let pub_dictionary = {
  "emnlp2019": {'paper': "https://arxiv.org/abs/1909.04849",
                'code': "https://github.com/shmsw25/qa-hard-em",
                'slides': "emnlp2019_slides.pdf"},
  "acl2019a": {'paper': "https://arxiv.org/abs/1906.02916",
        'code': "https://github.com/shmsw25/DecompRC",
        'demo': "http://allgood.cs.washington.edu:2019",
        'poster': "acl2019a_poster.pdf"},
  "acl2019b": {'paper': "https://arxiv.org/abs/1906.02900",
        'code': "https://github.com/shmsw25/single-hop-rc",
        'slides': "acl2019b_slides.pdf"},
  "acl2018": {'paper': "http://arxiv.org/abs/1805.08092",
        'poster': "acl2018_poster.pdf"},
  "iclr2018": {'paper': "https://arxiv.org/abs/1711.02085",
        'poster': "iclr2018_poster.pdf"},
  "acl2017": {'paper': "https://arxiv.org/abs/1702.02171",
        'code': "https://github.com/shmsw25/qa-transfer",
        'poster': "acl2017_poster.pdf"},
  "iclr2017": {'paper': "https://arxiv.org/abs/1606.04582",
        'code': "https://github.com/seominjoon/qrn"},
  "mrqa2019": {'paper': "https://mrqa.github.io/assets/papers/43_Paper.pdf"},
  "preprint2020b": {'paper': "https://arxiv.org/abs/2004.10645",
        'website' :'https://nlp.cs.washington.edu/ambigqa/',
        'code': 'https://github.com/shmsw25/AmbigQA'},
  "preprint2020a": {'paper': "https://arxiv.org/abs/2004.04906",
        'code': 'https://fburl.com/qa-dpr'},
  "preprint2019b": {'paper': "https://arxiv.org/abs/1911.03868"},
  "preprint2019a": {'paper': "https://arxiv.org/abs/1909.11291"}
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
  /*`04/21/2020: Our new preprint, "AmbigQA: Answering Ambiguous Open-domain Questions" is out! ` +
  add_info("preprint2020b", ["paper", "website"]),
  `04/10/2020: Our new preprint, "Dense Passage Retrieval for Open-domain QA" is out! ` +
  add_info("preprint2020a", ["paper"])*/
  `04/22/2020: Our new preprint, ` +
  add_link("AmbigQA: Answering Ambiguous Open-domain Questions", pub_dictionary["preprint2020b"]["paper"]) + `
  is out! Visit ` + add_link("AmbigQA website", pub_dictionary["preprint2020b"]["website"]) + ` to download data and see examples.`,
  `04/10/2020: Our new preprint, ` + 
  add_link("Dense Passage Retrieval for Open-domain Question Answering", pub_dictionary["preprint2020a"]["paper"]) + `
  is out!`
];

let publications = [
  [ "Peer-Reviewed Conference Papers",
    [
      ["A Discrete Hard EM Approach for Weakly Supervised Question Answering",
       ['sewon', 'danqi', 'hanna', 'luke'],
       "EMNLP (long)",
       "Hong Kong, China",
       "2019",
       "emnlp2019"
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
    ]
  ],
  [ "Peer-Reviewed Workshop Papers",
    [
      ["On Making Reading Comprehension More Comprehensive",
       ['matt', 'jonathan', 'hanna', 'alon', 'sewon'],
       "MRQA @ EMNLP",
       "Hong Kong, China",
       "2019",
       "mrqa2019"
      ]
    ]
  ],
  [ "Preprints",
    [
      ["AmbigQA: Answering Ambiguous Open-domain Questions",
       ['sewon', 'julian', 'hanna', 'luke'],
       "arXiv preprint arXiv:2004.10645",
       "2020",
       "preprint2020b"
      ],
      ["Dense Passage Retrieval for Open-domain Question Answering",
       ['vlad*', 'barlas*', 'sewon', 'ledell', 'sergey', 'danqi', 'scott'],
       "arXiv preprint arXiv:2004.04906",
       "2020",
       "preprint2020a"
      ],
      ["Knowledge Guided Text Retrieval and Reading for Open Domain Question Answerin",
       ['sewon', 'danqi', 'luke', 'hanna'],
       "arXiv preprint arXiv:1911.03868",
       "2019",
       "preprint2019b"
      ],
      ["Question Answering is a Format; When is it Useful?",
       ['matt', 'jonathan', 'hanna', 'alon', 'sewon'],
       "arXiv preprint arXiv:1909.11291",
       "2019",
       "preprint2019a"
      ]
    ]
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
    "2011.03 - 2013.02",
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
  /*[
    "Google AI Research",
    "2020.06 - 2020.09 (Expected)",
    "Research intern",
    ["kenton", "kristina"]
  ],*/
  [
    "Facebook AI Research (FAIR)",
    "2019.10 - 2020.06 (Expected)",
    "Part-time visiting researcher",
    ["luke"]
  ],
  [
    "Salesforce Research (Metamind)",
    "2017.11 - 2018.02",
    "Research Intern",
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
    "Undergraduate intern at <a href='http://vision.snu.ac.kr/' target='_blank'>Vision&Learning Lab</a>",
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
  "<a href='https://www.google.cn/intl/en/university/research/travelgrants.html' target='_blank'>Google Travel Grants</a> (2017, 2018)",
  "<a href='http://cse.snu.ac.kr/scsc/node/19' target='_blank'>Samsung Convergence Software Course</a> Mentor Scholarship (2017)"
];

let services = [
  //"Co-organizer: Workshop on Structured and Unstructured KBs (@ AKBC 2020)",
  "Reviewer/Program Committee: NeurIPS 2018, ICLR 2019, AKBC 2019, "
  + "ACL 2019, EMNLP 2019, AAAI 2020, ICLR 2020, ACL 2020, AKBC 2020, "
  + "NeurIPS 2020, AACL 2020, EMNLP 2020",
  "Reviewer/Program Committee: Student Research Workshop (SRW @ ACL 2019), "
  + "Workshop on Machine Reading for Question Answering (MRQA @ EMNLP 2019), "
  + "Student Research Workshop (SRW @ ACL 2020),",
  "UW CSE Prospective Student Committee Chair (2019)"
]
