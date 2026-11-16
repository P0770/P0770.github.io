// English version of src/data/site.ts — keep both files in sync.
import type { Education } from "../site";

const education: Education[] = [
  {
    school: "HEPIA — HES-SO Geneva",
    degree: "Bachelor's in microengineering, biomedical specialisation",
    period: "2024 – present",
    note: "",
    logo: "/logos/hepia.png",
    initiales: "HE",
    credits: {
      total: 180,
      groupes: [
        {
          titre: "Semesters 1 and 2 · MT1 (1st year)",
          lignes: [
            {
              nom: "Mathematics and computer science",
              ects: 15,
              cours: [
                "Engineering mathematics A1", "Engineering mathematics A2",
                "Engineering mathematics B1", "Engineering mathematics B2",
                "Programming 1", "Programming 2", "Logic systems",
                "Statistical data processing",
              ],
            },
            {
              nom: "Mechanical design",
              ects: 17,
              cours: [
                "Materials 1", "Materials 2", "Physical mechanics 1", "Physical mechanics 2",
                "Technical drawing", "Computer-aided design", "Manufacturing techniques",
                "Machine design 1", "Machine design 2",
              ],
            },
            {
              nom: "Electrical design",
              ects: 17,
              cours: [
                "Electronics 1", "Electronics 2", "Electrical engineering 1", "Sensors and actuators",
                "Electrostatics and electromagnetism 1", "Energy 1",
              ],
            },
            {
              nom: "Projects and methods",
              ects: 11,
              cours: [
                "Project", "English 1", "English 2", "Communication and communication tools",
                "Sustainable development workshop",
              ],
            },
          ],
        },
        {
          titre: "Semesters 3 and 4 · MT2 (2nd year)",
          lignes: [
            { nom: "Engineering sciences 3", ects: 7, cours: ["Mathematics 3", "Physics 3"] },
            { nom: "Engineering sciences 4", ects: 5, cours: ["Mathematics 4", "Physics 4"] },
            {
              nom: "Electronic systems 1",
              ects: 11,
              cours: [
                "Electronics 3", "Motors and actuators",
                "Microcontroller architecture and programming 1", "Continuous-time signals and systems",
              ],
            },
            {
              nom: "Electronic systems 2",
              ects: 7,
              cours: ["Electronics 4", "Control systems 1", "Signal processing"],
            },
            {
              nom: "Microengineering systems 1",
              ects: 11,
              cours: [
                "Microengineering design 1", "Materials 3", "Chemistry 1",
                "Computer-aided design 2", "Machine elements",
              ],
            },
            {
              nom: "Microengineering systems 2",
              ects: 7,
              cours: ["Microengineering design 2", "Materials 4", "Chemistry 2"],
            },
            {
              nom: "Project and professional software",
              ects: 6,
              cours: ["Thematic project (Projet thématique)", "Modelling and simulation", "Instrumentation 1"],
            },
            {
              nom: "Bioengineering option",
              ects: 6,
              cours: [
                "Mobile applications with sensors", "Optoelectronics",
                "Operational radiation protection", "Bioengineering 1",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    school: "CPNV — Yverdon",
    degree: "Engineering preparatory year, mechanical / microengineering bridging course",
    period: "2023 – 2024",
    note: "Final project: automatic labelling machine, CHF 7,374 in materials",
    logo: "/logos/cpnv.png",
    initiales: "CP",
  },
  {
    school: "University of Liège",
    degree: "Bachelor's in biology — biodiversity, genetics and molecular biology",
    period: "2018 – 2022",
    note: "Studies not completed",
    logo: "/logos/uliege.png",
    initiales: "UL",
    credits: {
      total: 180,
      groupes: [
        {
          titre: "Courses passed",
          lignes: [
            { nom: "Biodiversity and ecology", ects: 10 },
            { nom: "Animal biology", ects: 9 },
            { nom: "Organic chemistry", ects: 9 },
            { nom: "Biology", ects: 8 },
            { nom: "Mathematics", ects: 8 },
            { nom: "Physics", ects: 8 },
            { nom: "Plant biology", ects: 7 },
            { nom: "Geology and palaeontology", ects: 5 },
            { nom: "Introduction to animal embryology", ects: 3 },
            { nom: "English 1", ects: 3 },
            { nom: "Introduction to microbiology", ects: 2 },
            { nom: "English: introduction", ects: 2 },
          ],
        },
      ],
    },
  },
  {
    school: "La Source — Lausanne",
    degree: "Nursing preparatory year, osteopathy bridging course",
    period: "2017 – 2018",
    note: "",
    logo: "/logos/lasource.png",
    initiales: "LS",
  },
];

export const site = {
  name: "Mattéo Pozzo di Borgo",
  headline: "Microengineering — between electronics, embedded systems and fabrication.",
  location: "Lausanne, Switzerland",

  email: "matteopozzodiborgo@gmail.com",

  /** English CV */
  cv: "/cv-matteo-pozzo-di-borgo.pdf",  // provisoire : CV français tant que le CV anglais n'est pas validé

  links: {
    github: "https://github.com/P0770",
    linkedin: "https://www.linkedin.com/in/matt%C3%A9o-pozzo-di-borgo-869396271",
  },

  seo: {
    url: "https://P0770.github.io",
    description:
      "Portfolio of Mattéo Pozzo di Borgo — third-year microengineering student (biomedical specialisation) at HEPIA. Embedded electronics, 3D printing, embedded systems, CAD.",
  },

  about: {
    intro:
      "Third-year Bachelor's student in microengineering at HEPIA (HES-SO Geneva), specialising in biomedical engineering. After studying biology at the University of Liège, I moved into engineering: this dual background naturally draws me towards biomedical devices.",
    bullets: [
      "I build as much as I code: from the circuit diagram to the 3D-printed part, I prefer having a prototype in my hands.",
      "Curious about anything involving embedded systems, networking and mechanical design.",
      "I look for real problems where a custom-made solution makes more sense than an off-the-shelf product.",
    ],
  },

  experience: [
    {
      company: "Tibits",
      location: "Lausanne, Switzerland",
      role: "Team member — barista, service, till, kitchen assistant",
      period: "2024 — present",
      bullets: [
        "Front-of-house service and food preparation in a high-volume vegetarian restaurant.",
      ],
    },
    {
      company: "LGI Luxury Good Logistics",
      location: "San Antonino, Switzerland",
      role: "Stock controller",
      period: "2019",
      bullets: [
        "Logistics tracking, stock optimisation and quality control.",
      ],
    },
    {
      company: "Student society — University of Liège",
      location: "Liège, Belgium",
      role: "Head",
      period: "2022",
      bullets: [
        "Organised events for up to 1,800 people: coordination, logistics and team management.",
      ],
    },
    {
      company: "Student jobs",
      location: "Belgium / Switzerland",
      role: "Various",
      period: "2018 – 2023",
      bullets: [
        "Kitchen staff (La Halle, Munich), scooter delivery rider, butcher's assistant (Intermarché, Liège), all-round assistant (Sushishop).",
      ],
    },
  ],

  education,

  skills: {
    "Mechanics & fabrication": [
      "Inventor", "Fusion 360", "Creo", "3D printing", "laser cutting",
    ],
    "Electronics & embedded": [
      "ESP32", "Arduino", "Raspberry Pi", "KiCad", "EasyEDA",
      "I²C / SPI sensors", "soldering",
    ],
    "Code": ["C / C++", "Python", "Ladder (Siemens PLCs)"],
    "Tools": ["Git / GitHub", "3D slicers", "Adobe Illustrator", "Office"],
  },

  interests:
    "3D printing · Embedded electronics · Climbing · Volleyball · Mycology · Ski touring · Video games",

  languages: [
    "French (native)",
    "English (bilingual)",
    "Italian (very good)",
    "German (intermediate)",
  ],
} as const;
