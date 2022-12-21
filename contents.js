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
  'jungsoo': "Jungsoo Park",
  'mike': "Mike Lewis",
  'tim': "Tim Dettmers",
  'shane': "Xinxi Lyu",
  'ari': "Ari Holtzman",
  'mikel': "Mikel Artetxe"
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

let pub_dictionary = {
  "emnlp2019": {'paper': "https://arxiv.org/abs/1909.04849",
                'code': "https://github.com/shmsw25/qa-hard-em",
                'slides': "emnlp2019_slides.pdf",
                'talk': "https://vimeo.com/426355627"},
  "acl2019a": {'paper': "https://arxiv.org/abs/1906.02916",
        'code': "https://github.com/shmsw25/DecompRC",
        'demo': "http://qa.cs.washington.edu:2019",
        'demo-code': "https://github.com/shmsw25/DecompRC/tree/master/demo",
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
        'demo': 'http://qa.cs.washington.edu:2020',
        'demo-code': 'https://github.com/shmsw25/AmbigQA/tree/demo/codes'},
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
  	"paper": "https://arxiv.org/abs/2101.00133",
    "website": "http://efficientqa.github.io"
  },
  "min2021joint": {
    "paper": "https://arxiv.org/abs/2104.08445",
    "slides": "EMNLP2021_JPR_slides.pdf",
    "poster": "EMNLP2021_JPR_poster.pdf"
  },
  "beltagy2021beyond": {
    "website": "https://github.com/allenai/naacl2021-longdoc-tutorial"
  },
  "park2022faviq": {
    "paper": "https://arxiv.org/abs/2107.02153",
    "website": "https://faviq.github.io",
    "code": "https://github.com/faviq/faviq",
    "BibTeX": "https://raw.githubusercontent.com/faviq/faviq/main/park2022faviq.txt",
    "talk": "https://underline.io/events/284/sessions/10691/lecture/49741-long-faviq-fact-verification-from-information-seeking-questions"
  },
  "min2022noisy": {
  	"paper": "https://arxiv.org/abs/2108.04106",
    "code": "https://github.com/shmsw25/Channel-LM-Prompting",
    "slides": "ACL2022_Channel_Prompt_Learning_slides.pdf",
    "poster": "ACL2022_Channel_Prompt_Learning_poster.pdf",
    "talk": "https://underline.io/events/284/sessions/10759/lecture/50536-long-noisy-channel-language-model-prompting-for-few-shot-text-classification"
  },
  "min2022metaicl": {
    "paper": "https://arxiv.org/abs/2110.15943",
    "code": "https://github.com/facebookresearch/MetaICL",
    "demo": "http://qa.cs.washington.edu:2021",
    "slides": "NAACL2022_MetaICL.pdf",
    "talk": "https://underline.io/events/325/sessions/11415/lecture/53942-metaicl-learning-to-learn-in-context"
    //"demo-code": "https://github.com/shmsw25/MetaICL"
  },
  "khashabi2022prompt": {
  	"paper": "https://arxiv.org/abs/2112.08348",
    "code": "https://github.com/Alrope123/prompt-waywardness",
    "talk": "https://underline.io/events/325/sessions/11415/lecture/53940-prompt-waywardness-the-curious-case-of-discretized-interpretation-of-continuous-prompts"
  },
  "min2022rethinking": {
  	"paper": "https://arxiv.org/abs/2202.12837",
  	"code": "https://github.com/Alrope123/rethinking-demonstrations"
  },
  "wu2022inscit": {
    "paper": "https://arxiv.org/abs/2207.00746",
    "code": "https://github.com/ellenmellon/INSCIT",
  },
  "si2022re": {
    "paper": "https://arxiv.org/abs/2205.12507"
  },
  "press2022measuring": {
    "paper": "https://ofir.io/self-ask.pdf",
    "code": "https://github.com/ofirpress/self-ask"
  },
  "awadalla2022exploring": {
    "paper": "https://arxiv.org/abs/2210.12517",
  },
  "yu2022crepe": {
    "paper": "https://arxiv.org/abs/2211.17257",
    "code": "https://github.com/velocityCavalry/CREPE",
    "data": "https://github.com/velocityCavalry/CREPE#download-data"
  },
  "lyu2022z": {
    "paper": "https://arxiv.org/abs/2212.09865",
    "code": "https://github.com/alrope123/z-icl",
  },
  "min2022nonparametric": {
    "paper": "https://arxiv.org/abs/2212.01349",
    "code": "https://github.com/facebookresearch/NPM",
  },
  "shi2022retrieval": {
    "paper": "",
  },
  "wang2022towards": {
    "paper": "https://arxiv.org/abs/2212.10001",
    "code": "https://github.com/sunlab-osu/Understanding-CoT"
  },
}

let website_directory = {
  "uskb": "https://uskb-workshop.github.io/",
  "efficientqa": "http://efficientqa.github.io/",
  "mrqa": "https://mrqa.github.io/",
  "semiparametric": "http://semiparametric.ml/",
  "fl-tutorial": "https://github.com/allenai/acl2022-zerofewshot-tutorial",
  "repl4nlp": "https://sites.google.com/view/repl4nlp2022/home"
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

function add_tag(tag) {
	if (tag==="paper") {
		return `<span class="badge badge-pill badge-paper">Paper</span>`;
	} else if (tag==="service") {
		return `<span class="badge badge-pill badge-service">Event</span>`;
	} else if (tag=="others") {
		return `<span class="badge badge-pill badge-others">Others</span>`;
	} else if (tag=="event") {
		return `<span class="badge badge-pill badge-event">Event</span>`;
	}
}

let intros = [
  `  Hello! <br />
  I am a fifth year Ph.D. student in the Natural Language Processing group at the University of Washington.
  I am fortunate to be advised by [hanna] and [luke].
  I am also a part-time visiting researcher at Meta AI (formerly Facebook AI Research).
  I am supported by a ` + add_link("J.P. Morgan PhD Fellowship", "https://www.jpmorgan.com/technology/artificial-intelligence/research-awards/phd-fellowship") + `.
  I have previously interned at Google Research (in 2020) and Salesforce Research (in 2017).
  Prior to UW, I received B.S. in CSE from Seoul National University.
  <br /><br />

  My primary research interests lie in the area of natural language processing and machine learning.
  My long-term goal of research is to build a <em>general-purpose</em> machine learning system
  that can <em>understand</em> natural language text and
  solve <em>real-world</em> problems.
  Toward this goal, my work spans across

  <ol style="padding-left: 20px; margin-top: 20px">
    <li>Representation and Retrieval of Text:
      <ul>
        <li>
          Text retrieval for question answering (` + add_link(`GraphQA`, pub_dictionary["preprint2019b"]["paper"]) + `,
          ` + add_link(`DPR`, pub_dictionary["karpukhin2020dense"]["paper"]) + `) or
          multi-hop question answering
          (` + add_link(`DecompRC`, pub_dictionary["acl2019a"]["paper"]) + `),
          reranking
          (` + add_link(`ReConsider`, pub_dictionary["iyer2021reconsider"]["paper"]) + `,
          ` + add_link(`JPR`, pub_dictionary["min2021joint"]["paper"]) + `),
          and entity linking
          (` + add_link(`ELQ`, pub_dictionary["li2020efficient"]["paper"]) + `)
        </li>
        <li>
          Nonparametric language modeling
          (` + add_link(`NPM`, pub_dictionary["min2022nonparametric"]["paper"]) + `)
        </li>
      </ul>
    </li>
    <li>
      General-Purpose, Multi-task/Generalizable Models
      <ul>
        <li>
          Building better training
          (` + add_link(`UnifiedQA`, pub_dictionary["khashabi2020unifiedqa"]["paper"]) + `,
          `+ add_link(`MetaICL`, pub_dictionary["min2022metaicl"]["paper"]) + `) and inference
          (` + add_link(`Noisy Channel`, pub_dictionary["min2022noisy"]["paper"]) + `).
        </li>
        <li>
          Better understanding `
          + add_link("demonstrations", pub_dictionary["min2022rethinking"]["paper"]) + `, `
          + add_link("CoT", pub_dictionary["wang2022towards"]["paper"]) + `, and `
          + add_link("zero-shot", pub_dictionary["lyu2022z"]["paper"]) + `.
        </li>
      </ul>
    </li>
   <li>
      Application to more open-ended NLP problems:
      <ul>
        <li>
          Answering ambiguous questions
          (` + add_link(`AmbigQA`, pub_dictionary["min2020ambigqa"]["paper"]) + `)
          or questions with false presuppositions
          (` + add_link(`CREPE`, pub_dictionary["yu2022crepe"]["paper"]) + `),
          and fact checking (` + add_link(`FaVIQ`, pub_dictionary["park2022faviq"]["paper"]) + `
          )
        </li>
      </ul>
    </li>
  </ol>

  <br />
  

  I have been a strong advocate and an active organizing member of research communities for
  question answering (` + add_link(`MRQA workshop`, website_directory["mrqa"]) + `, ` + add_link(`EfficientQA competition`, website_directory["efficientqa"]) + `),
  representation/retrieval of world knowledge (` + add_link(`USKB workshop`, website_directory["uskb"]) + `, ` + add_link(`Spa-NLP workshop`, website_directory["semiparametric"]) + ", " + add_link("Repl4NLP workshop", website_directory["repl4nlp"]) + `)
  and zero/few-shot learning (` + add_link(`ACL 2022 Tutorial`, website_directory["fl-tutorial"]) + `).
  <br /><br />

  &#8251 I happily mentor a few undergraduate/master students interested in NLP research in topics above, but I am usually of full capacity.
  If you are interested in research opportunities at ` + add_link(`H2Lab`, "https://h2lab.cs.washington.edu/") + `, please apply ` + add_link(`here`, "https://forms.gle/MyUVaLBY8CzxA4Ye8") + `.
  
  <br /><br />
  `
]

let news = [
  `12/2022: ` + add_tag("paper") + ` Check out our new preprint,
  ` + add_link("Nonparametric Masked Language Modeling", pub_dictionary["min2022nonparametric"]["paper"]) + `.
  Stay tuned for the code and model checkpoints!
  `,
  `09/2022: ` + add_tag("others") + ` I was selected by the EECS Rising Stars Program.`,
  `08/2022: ` + add_tag("others") + ` Together with `
  + add_link(`Sang Michael Xie`, "https://cs.stanford.edu/~eix/")
  + `, we wrote a post on `
  + add_link("How does in-context learning work? A framework for understanding the differences from traditional supervised learning", "https://ai.stanford.edu/blog/understanding-incontext/")
  + " at Stanford AI Blog.",
  `05/2022: ` + add_tag("service") + ` I co-taught the ACL tutorial on ` + 
  `Few-Shot NLP with Pretrained Language Models (` +
  add_link("slides", website_directory["fl-tutorial"]) + `, ` +
  add_link("recordings", "https://underline.io/events/284/sessions?eventSessionId=10748") + `).`,
  `02/2022: ` + add_tag("paper") + ` Check out our new preprint, ` + add_link("Rethinking the Role of Demonstrations: What makes In-context Learning Work?", pub_dictionary["min2022rethinking"]["paper"]) + `
  All experiments reproducible from `+ add_link("this code", pub_dictionary["min2022rethinking"]["code"]) + `.
  (Update 10/2022: The paper was accepted to EMNLP 2022.)
  `,
  `02/2022: `+ add_tag("service") + ` I am co-organizing two workshops at ACL 2022: ` + add_link("Repl4NLP", website_directory["repl4nlp"]) +
   ` (` + add_link("CFP", "https://sites.google.com/view/repl4nlp2022/call-for-papers?authuser=0") + `) and 
   `+ add_link("Spa-NLP", website_directory["semiparametric"]) + ` (` +
   add_link("CFP", "http://www.semiparametric.ml/cfp.html") + `).`,
  `10/2021: ` + add_tag("paper") + ` Our new preprint, ` + add_link("MetaICL: Learning to Learn In Context", pub_dictionary["min2022metaicl"]["paper"]) +
  ` is out (w/ `+ add_link("code", pub_dictionary["min2022metaicl"]["code"]) + `).
  Check out the ` + add_link("demo", pub_dictionary["min2022metaicl"]["demo"]) + `!
  (Update 04/2022: The paper was accepted to NAACL 2022.)
  `,
  `08/2021: ` + add_tag("paper") + ` Our new preprint, ` + add_link("Noisy Channel Language Model Prompting for Few-Shot Text Classification", pub_dictionary["min2022noisy"]["paper"]) +
  ` is out w/ `+ add_link("code", pub_dictionary["min2022noisy"]["code"]) + `!
  (Update 02/2022: The paper was accepted to ACL 2022.)
  `,
  `07/2021: ` + add_tag("paper") + ` Our new preprint, ` + add_link("FaVIQ: FAct Verification from Information-seeking Questions", pub_dictionary["park2022faviq"]["paper"]) +
  ` is out! Visit ` + add_link("FaVIQ website", pub_dictionary["park2022faviq"]["website"]) + ` to download data and see samples.
  (Update 02/2022: The paper was accepted to ACL 2022.)
  `,
  `07/2021: ` + add_tag("service") + ` I am co-organizing ` + add_link("The 2nd Workshop on Unstructured/Structured KBs", website_directory["uskb"]) +
  `, hosted at AKBC 2021. <!--Stay tuned for Call for abstracts!-->`,
  `06/2021: ` + add_tag("service") + ` I co-taught the NAACL-HLT tutorial on ` + 
  add_link(`Beyond Paragraphs: NLP for Long Sequences`, pub_dictionary["beltagy2021beyond"]["website"]) + `.`,
  `04/2021: ` + add_tag("paper") + ` Our new preprint, ` + 
  add_link("Joint Passage Ranking for Diverse Multi-Answer Retrieval", pub_dictionary["min2021joint"]["paper"]) + `
  is out! This is done as part of my internship at Google.
  (Update 08/2021: The paper was accepted to EMNLP.)
  `,
  `01/2021: ` + add_tag("service") + `
  We, the NeurIPS 2020 EfficientQA organizers, together with participants,
  wrote ` + add_link(`NeurIPS 2020 EfficientQA Competition:
  	Systems, Analyses and Lessons Learned`, pub_dictionary["min2021neurips"]["paper"]) + `.
  The video of the NeuIPS event is also available ` + add_link(`here`, "https://www.youtube.com/watch?v=3tdWV4vAf2I") + `.
   (Update 05/2021: The paper was accepted to PMLR.)`,
  `12/2020: ` + add_tag("service") + ` I am co-organizing ` + add_link("The 3rd Workshop on Machine Reading for Question Answering", website_directory["mrqa"]) +
  `, hosted at EMNLP 2021. Stay tuned for Call for papers!`,
  `09/2020: ` + add_tag("others") + ` I made an ` + add_link("Open-domain QA Demo", pub_dictionary["karpukhin2020dense"]["demo"])
      + ` using ` + add_link("DPR", pub_dictionary["karpukhin2020dense"]["paper"]) + `. Give it a try!`,
  `06/2020: ` + add_tag("service") + ` I am co-organizing ` + add_link("Competition on Efficient Open-Domain Question Answering", website_directory["efficientqa"]) +
  `, hosted at NeurIPS 2020. [` + add_link("leaderboard", "https://ai.google.com/research/NaturalQuestions/efficientqa") + `]`,
  `06/2020: ` + add_tag("service") + ` I am co-organizing ` + add_link("Workshop on Unstructured/Structured KBs", website_directory["uskb"]) +
  `, hosted at AKBC 2020.`,
  `04/2020: ` + add_tag("paper") + ` Our new preprint, ` +
  add_link("AmbigQA: Answering Ambiguous Open-domain Questions", pub_dictionary["min2020ambigqa"]["paper"]) + `
  is out! Visit ` + add_link("AmbigQA website", pub_dictionary["min2020ambigqa"]["website"]) + ` to download data and see samples.`,
  `04/2020: ` + add_tag("paper") + ` Our new preprint, ` +
  add_link("Dense Passage Retrieval for Open-domain Question Answering", pub_dictionary["karpukhin2020dense"]["paper"]) + `
  is out (w/ ` + add_link("code", pub_dictionary["karpukhin2020dense"]["code"]) + `)!`
];

let publications = [
    ["Towards Understanding Chain-of-Thought Prompting: An Empirical Study of What Matters",
     ["Boshi Wang", 'sewon', "Xiang Deng", "Jiaming Shen", "You Wu", 'luke', "Huan Sun"],
     "arXiv preprint",
     "",
     "2022",
     "wang2022towards"
    ],
    ["Z-ICL: Zero-Shot In-Context Learning with Pseudo-Demonstrations",
     ['shane', 'sewon', 'iz', 'luke', 'hanna'],
     "arXiv preprint",
     "",
     "2022",
     "lyu2022z"
    ],
    ["Nonparametric Masked Language Modeling",
     ['sewon', 'Weijia Shi', 'mike', "Xilun Chen", 'scott', 'hanna', 'luke'],
     "arXiv preprint",
     "",
     "2022",
     "min2022nonparametric"
     ],
    ["CREPE: Open-Domain Question Answering with False Presuppositions",
     ["Xinyan Yu", "sewon", "luke", "hanna"],
     "arXiv preprint",
     "",
     "2022",
     "yu2022crepe"
     ],
     ["Measuring and Narrowing the Compositionality Gap in Language Models",
      ['Ofir Press', 'Muru Zhang', 'sewon', 'Ludwig Schmidt', 'Noah A. Smith', 'mike'],
      "arXiv preprint",
      "",
      "2022",
      "press2022measuring"
     ],
     ["INSCIT: Information-Seeking Conversations with Mixed-Initiative Interactions",
      ['Zeqiu Wu', 'Ryu Parish', 'Hao Cheng', 'sewon', 'Prithviraj Ammanabrolu', 'Mari Ostendorf', 'hanna'],
      "TACL",
      "",
      "2022",
      "wu2022inscit"
     ],
     ["Re-Examining Calibration: The Case of Question Answering",
      ['Chenglei Si', 'Chen Zhao', 'sewon', 'Jordan Boyd-Graber'],
      "Findings of EMNLP (long)",
      "",
      "2022",
      "si2022re"
     ],
     ["Exploring The Landscape of Distributional Robustness for Question Answering Models",
      ["Anas Awadalla", "Mitchell Wortsman", "Gabriel Ilharco", 'sewon', 'hanna', "Ludwig Schmidt"],
      "Findings of EMNLP (long)",
      "",
      "2022",
      "awadalla2022exploring"
     ],
     ["Rethinking the Role of Demonstrations: What makes In-context Learning Work?",
      ['sewon', 'shane', 'ari', 'mikel', 'mike', 'hanna', 'luke'],
      "EMNLP (long)",
       "",
       "2022",
       "min2022rethinking"
     ],
     ["Prompt Waywardness: The Curious Case of Discretized Interpretation of Continuous Prompts",
      ["Daniel Khashabi", "shane", "sewon",
       "Lianhui Qin", "Kyle Richardson", "Sameer Singh", "Sean Welleck",
       "hanna", "Tushar Khot", "Ashish Sabharwal", "Yejin Choi"],
       "NAACL (long)",
       "",
       "2022",
       "khashabi2022prompt"
     ],
     ["MetaICL: Learning to Learn In Context",
      ["sewon", "mike", "luke", "hanna"],
      "NAACL (long)",
      "",
      "2022",
      "min2022metaicl"
     ],
     ["Noisy Channel Language Model Prompting for Few-Shot Text Classification",
  	  ["sewon", "mike", "hanna", "luke"],
  	  "ACL (long)",
      "",
      "2022",
      "min2022noisy"
     ],
     ["FaVIQ: Fact Verification from Information-seeking Questions",
      ["jungsoo*", 'sewon*', "Jaewoo Kang", 'luke', 'hanna'],
      "ACL (long)",
      "",
      "2022",
      "park2022faviq"
     ],
     ["Joint Passage Ranking for Diverse Multi-Answer Retrieval",
      ['sewon', 'kenton', 'mingwei', 'kristina', 'hanna'],
      "EMNLP (long)",
      "",
      "2021",
      "min2021joint"
      ],
      ["NeurIPS 2020 EfficientQA Competition: Systems, Analyses and Lessons Learned",
       //['<strong>Sewon Min</strong> et al.'],
       ['sewon', 'jordan', 'chris', 'danqi', 'eunsol', 'michael', 'kelvin', 'hanna', 'kenton',
       'jennimaria', 'colin', 'adam', 'tom', " and more (EfficientQA participants)"],
       "Machine Learning Research (PMLR)",
       "",
       "2021",
       "min2021neurips"
      ],
      /*["Beyond Paragraphs: NLP for Long Sequences",
       ["Iz Beltagy", "Arman Cohan",'hanna', 'sewon', "Matthew E. Peters"],
        "NAACL-HLT Tutorial",
        "",
        "2021",
        "beltagy2021beyond"
      ],*/
      ["ReConsider: Re-Ranking using Span-Focused Cross-Attention for Open Domain Question Answering",
       ['srini', 'sewon', 'yashar', 'scott'],
       "NAACL (short)",
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
    "09/2018&#8211;Current",
    [
      "Ph.D. student in Computer Science & Engineering",
      "Advisers: <a href='" + people_website['hanna'] + "' target='_blank'>" + people['hanna'] + "</a> and " +
      "<a href='" + people_website['luke'] + "' target='_blank'>" + people['luke'] + "</a><br />" +
      "Master's degree obtained in March 2020"
    ],
  ],
  [
    "Seoul National University",
    "03/2014&#8211;08/2018",
    [
      `B.S. in Computer Science & Engineering (Summa Cum Laude)
      <br />
      GPA: 4.12/4.30 (total) 4.19/4.30 (major), Rank: 1st in CSE (class of 2018)`
    ],
  ],
  [
    "Gyeonggi Science High School",
    "02/2011&#8211;02/2014",
    [],
  ]
];

let experiences = [
  [
    "University of Washington",
    "09/2018&#8211;Current",
    "Ph.D. student",
    ["hanna", "luke"]
  ],
  [
    "Meta AI (formerly Facebook AI Research)",
    "10/2019&#8211;08/2020, 2021.04&#8211;Current",
    "Visiting researcher",
    ["luke"]
  ],
  [
    "Google AI Research",
    "09/2020&#8211;03/2021",
    "Research intern / student researcher",
    ["kenton", "kristina"]
  ],
  [
    "Salesforce Research (formerly Metamind)",
    "11/2017&#8211;02/2018",
    "Research intern",
    ["caiming"]
  ],
  [
    "University of Washington",
    "10/2016&#8211;02/2017",
    "Undergraduate research intern",
    ["hanna", "ali"]
  ],
  [
    "Seoul National University",
    "07/2016&#8211;08/2016",
    "Undergraduate intern at <a href='http://vision.snu.ac.kr/' target='_blank'>Vision & Learning Lab</a>",
    ["gunhee"]
  ],
  [
    "Seoul National University",
    "02/2016&#8211;06/2016",
    "Participant of Undergraduate Research Opportunity Program (UROP)",
    ["sanggoo"]
  ]
];

let demoIntro = `
<!--I often enjoy making simple demos for some of my work.
I happen to make one demo every year. <br /><em>Feedback welcomed!</em>-->
<p style="color: red;">Due to shortage of resources, all demos have been ceased.
Sorry about that! <br />
If you are interested in hosting a demo, please reach out to me.</p> 
`;
let demos = [
    ["2021", "Few-shot Learning",
     "Channel LM (" + add_link("paper", pub_dictionary["min2022noisy"]["paper"]) + ") + MetaICL (" + add_link("paper", pub_dictionary["min2022metaicl"]["paper"]) + ")",
    ],
    ["2020", "Open-domain Question Answering",
     "DPR (" + add_link("paper", pub_dictionary["karpukhin2020dense"]["paper"]) + ") + Reader (" + add_link("paper", pub_dictionary["preprint2019b"]["paper"]) + ")",
    ],
    ["2019", "Multi-hop Question Answering",
     "DecompRC (" + add_link("paper", pub_dictionary["acl2019a"]["paper"]) + ")",
    ]
  ];

let honors = [
  "EECS Rising Stars (2022)",
  "JP Morgan Ph.D. Fellowship (2022&#8211;2023)",
  "Doctoral Study Abroad Program Fellowship granted by "
  + "<a href='https://www.kfas.or.kr/?pCulture=en' target='_blank'>Korea Foundation for Advanced Studies (KFAS)</a> (2018&#8211;2023)",
  "Wissner-Slivka Endowed Graduate Fellowship granted by Paul G. Allen School (2018&#8211;2019)",
  "Best Undergraduate Thesis Award granted by CSE, Seoul National University (2018)",
  "Full Scholarship for all semesters attended at Seoul National University (merit-based, 2014&#8211;2018)",
  "ICLR Travel Award (2018)",
  "<a href='https://buildyourfuture.withgoogle.com/scholarships/google-travel-scholarships/' target='_blank'>Google Travel Grants</a> (2017, 2018)",
  "<a href='http://cse.snu.ac.kr/scsc/node/19' target='_blank'>Samsung Convergence Software Course</a> Mentor Scholarship (2017)"
];


let services = [
  `
  Workshop Co-organizer
  <ul style="padding-left: 40px;">
    <li>
      ` + add_link("7th Workshop on Representation Learning for NLP (Repl4NLP @ ACL 2022)", website_directory["repl4nlp"]) + `
    </li>
    <li>
      ` + add_link("Semiparametric Methods in NLP: Decoupling Logic from Knowledge (Spa-NLP @ ACL 2022)", website_directory["semiparametric"]) + `
    </li>
    <li>
     ` + add_link("3rd Workshop on Machine Reading for Question Answering (MRQA @ EMNLP 2021)", website_directory["mrqa"]+"/2021") + `
    </li>
    <li>
      ` + add_link("2nd Workshop on Unstructured/Structured KBs (USKB @ AKBC 2021)", website_directory["uskb"]) + `
    </li>
    <li>
      ` + add_link("Competition on Efficient Open-Domain Question Answering (EfficientQA @ NeurIPS 2020)", website_directory["efficientqa"]) + `
    </li>
    <li>
      ` + add_link("Workshop on Unstructured/Structured KBs (USKB @ AKBC 2020)", website_directory["uskb"]+"/2020") + `
    </li>
  </ul>
  `,
  `Tutorial Co-instructor
  <ul style="padding-left: 40px;">
    <li>
      ` + add_link("Few-Shot NLP with Pretrained Language Models (ACL 2022)", website_directory["fl-tutorial"]) + `
    </li>
    <li>
      ` + add_link("Beyond Paragraphs: NLP for Long Sequences (NAACL-HLT 2021)", pub_dictionary["beltagy2021beyond"]["website"]) + `
    </li>
  </ul>
  `,
  `Area Chair
  <ul style="padding-left: 40px;">
    <li>COLING 2022</li>
  </ul>
  `,
  `
  Reviewer/Program Committee
  <ul style="padding-left: 40px;">
    <li>Journals:
      <ul style="padding-left: 40px;">
        <li>Transactions of the Association for Computational Linguistics (TACL): 2022</li>
        <li>Transactions on Machine Learning Research (TMLR): 2022</li>
      </ul>
    </li>
    <li>*CL/NLP conferences:
      <ul style="padding-left: 40px;">
        <li>ACL: 2019, 2020, 2021 <em>(outstanding reviewer)</em></li>
        <li>EMNLP: 2019 <em>(outstanding reviewer)</em>, 2020, 2021 <em>(outstanding reviewer)</em>, 2022</li>
        <li>AKBC: 2019, 2020, 2021, 2022</li>
        <li>AACL: 2020</li>
        <li>NAACL: 2021</li>
        <li>ACL Rolling Review: 2021&#8211;</li>
      </ul>
    </li>
    <li>ML/AI conferences:
      <ul style="padding-left: 40px;">
        <li>NeurIPS: 2018, 2020, 2021, 2022</li>
        <li>ICLR: 2019, 2020, 2021, 2022, 2023</li>
        <li>AAAI: 2020, 2021, 2022</li>
        <li>ICML: 2021</li>
      </ul>
    <li>Workshops:
      <ul style="padding-left: 40px;">
        <li>Workshop on Knowledge Retrieval and Language Models (ICML 2022)</li>
        <li>The 2nd Workshop on NLP for Positive Impact (NLP4PI @ EMNLP 2022)</li>
        <li>The 1st Workshop on NLP for Positive Impact (NLP4PI @ ACL 2021)</li>
        <li>Student Research Workshop (SRW): ACL 2019, ACL 2020, AACL 2020, EACL 2021, ACL 2021</li>
        <li>The 2nd Workshop on Machine Reading for Question Answering (MRQA @ EMNLP 2019)</li>
      </ul>
    </li>
    <li>
      Competition Proposals: NeurIPS (2021)
    </li>
  </ul>
  `,
  `
  Departmental Service
  <ul style="padding-left: 40px;">
    <li>
    	UW CSE: Admission Committee Member for the CSE Ph.D. Program (2021, 2022)
    </li>
    <li>
	  	UW CSE: Prospective Student Committee Co-Chair for the CSE Ph.D. Program (2019)
	</li>
	<li>
	  	UW NLP: Student Co-organizer of the NLP Invited Talk Series (2021)
	</li>
	<li>
	  	UW NLP: Student Co-organizer of the NLP Retreat (2021)
	</li>
  </ul>
  `,
];

let talks = [
 `12/2022: Data Science & Business Analytics Lab, Korea University`,
 `10/2022: USC ISI NL Seminar`,
 `07/2022: MLOPT Research Group, University of Wisconsin–Madison`,
 `04/2022: Language & Intelligence Lab, MIT`,
 `12/2021: AIRS, Hyundai`,
 `10/2021: Facebook AI`,
 `08/2021: AI Summer School, Seoul National University`,
 `08/2021: Summer AI Seminar Series, Postech`,
 `04/2021: Colloquium Talk, Graduate School of AI at KAIST`,
 `02/2021: School of Electronic Engineering at KAIST`,
 `09/2020: Apple (Web Answers team)`,
 `08/2020: Facebook NLP Summit, Question Answering Workshop`,
 `08/2018: Kakao Brain`,
 `08/2018: Samsung Advanced Institute of Technology`,
 `08/2017: NAVER, Korea`,
];


let teaching = [
 `ACL 2022 Tutorial: ` + add_link("Few-Shot NLP with Pretrained Language Models", website_directory["fl-tutorial"]) + `
  (` + add_link("recordings from underline", "https://underline.io/events/284/sessions?eventSessionId=10748") + `)
  <ul style="padding-left: 40px;">
    <li>Co-taught with Iz Beltagy, Arman Cohan, Sameer Singh and Robert Logan</li>
  </ul>`,
 `NAACL 2021 Tutorial: ` + add_link(`Beyond Paragraphs: NLP for Long Sequences`, pub_dictionary["beltagy2021beyond"]["website"]) + `
  <ul style="padding-left: 40px;">
    <li>Co-taught with Iz Beltagy, Arman Cohan, Hannaneh Hajishirzi and Matthew E. Peters</li>
  </ul>`,
  `Teaching assistant at University of Washington
  <ul style="padding-left: 40px;">
    <li>
      ` + add_link("CSE 573 Artificial Intelligence", "https://courses.cs.washington.edu/courses/cse573/") + ` 
      (Instructor: ` + add_link("Hanna Hajishirzi", people["hanna"]) + `) ` + add_link("Spring 2022", "https://courses.cs.washington.edu/courses/cse573/22sp/") + `
      <ul style="padding-left: 40px;">
        <li>
          In addition to typical TA role, gave guest lectures and made assignments
        </li>
      </ul>
    </li>
    <li>
      ` + add_link("CSE 447+517 Natural Language Processing", "https://courses.cs.washington.edu/courses/cse517/") + ` 
      (Instructor: ` + add_link("Noah Smith", "https://nasmith.github.io/") + `) ` + add_link("Winter 2021", "https://courses.cs.washington.edu/courses/cse517/21wi/") + `
      <ul style="padding-left: 40px;">
        <li>
          In addition to typical TA role, led the 517 Reproducibility Project and
          guided submissions to the ML Reproducibility Challenge
        </li>
      </ul>
    </li>
  </ul>`,
 `Pre-doctoral student mentoring
 <ul style="padding-left: 40px;">
  <li>Xinyan (Velocity) Yu, BS->MS at UW (2022&#8211;Current)</li>
  <li>Xinxi (Shane) Lyu, BS->MS at UW (2021&#8211;Current)</li>
  <li>Skyler Hallinan, BS->MS at UW (2021)</li>
  <li>Jungsoo Park, MS student at Korea University, now at NAVER (2021)</li>
  <li>Belinda Li, software engineer at Facebook, now a PhD student at MIT (2020)</li>
 </ul>
 `,
 `Mentor at Samsung Convergence Software Course (2017)
  <ul style="padding-left: 40px;">
    <li>Program for non-major students with courses in computer science & engineering</li>
  </ul>`
];









