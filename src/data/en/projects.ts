// English version of src/data/projects.ts — keep both files in sync
// (same slugs, same images, same order of sections).
import type { Project } from "../projects";

export const projects: Project[] = [
  // ─────────────────────────────────────────
  //  I²C BUS — CPNV (Feb – Mar 2024)
  // ─────────────────────────────────────────
  {
    slug: "scanner-i2c",
    title: "Exploring the I²C bus",
    subtitle:
      "A test bench, then a PCB designed in KiCad, to understand the I²C bus and the devices you can connect to it.",
    debut: "2024-02",
    fin: "2024-03",
    periode: "Feb – Mar 2024",
    cadre: "Engineering preparatory year · CPNV — MCT (technical bridging year), electronics course, mid-sized project M2446 (capstone of the programming course)",
    equipe: "Pair project",
    statut: "Completed",
    tags: ["I²C", "Arduino", "C++", "KiCad", "Oscilloscope", "MCP23017", "RTC"],
    links: [
      { label: "Code and documentation (GitHub)", href: "https://github.com/P0770/bus-i2c-m2446" },
    ],
    highlights: [
      "Studied the I²C signal on the oscilloscope: SDA / SCL lines, frames and addresses",
      "Tested several devices: display, temperature sensor, EEPROM memory, output expander chips",
      "Went from a breadboard prototype to a PCB designed in KiCad",
      "Six-program menu, I²C address scanner and an audible alarm if a slave stops responding",
    ],
    cover: {
      src: "/projects/scanner-i2c/produit-fini.jpg",
      alt: "Final I²C device on its PCB",
      caption: "The finished product on its PCB",
    },
    gallery: [
      {
        src: "/projects/scanner-i2c/plaque-essai.jpg",
        alt: "I²C device on a breadboard",
        caption: "The device on a breadboard (test bench)",
      },
      {
        src: "/projects/scanner-i2c/pcb.jpg",
        alt: "The I²C shield on its PCB with the colour display showing the temperature",
        caption: "The finished shield, with program 1 (temperature) on screen",
        entier: true,
      },
    ],
    sections: [
      {
        heading: "Context and goal",
        paragraphs: [
          "Each pair was given a topic to wrap up the programming course; ours was the I²C bus. The goal: understand in depth how it works — the protocol, addressing and the components you can connect to it.",
        ],
      },
      {
        heading: "What I did",
        bullets: [
          "Studied the I²C signal on the oscilloscope: SDA and SCL lines, frames, addresses",
          "Built and debugged the device on a breadboard (test bench)",
          "Tested several I²C devices: a display, a temperature sensor, an EEPROM memory and expander chips to drive outputs",
          "Designed and produced the PCB in KiCad, learning the whole manufacturing chain along the way",
          "Wrote the entire Arduino program; a pair project with Guilhem Rozier Vilardell",
        ],
      },
      {
        heading: "Tech",
        paragraphs: [
          "Arduino · C++ · KiCad · oscilloscope · display, temperature sensor, EEPROM, I/O expanders",
        ],
      },
      {
        heading: "Specifications",
        paragraphs: [
          "The shield plugs onto an Arduino MEGA 1280. It brings together, on a single I²C bus, an MCP23017 I/O expander, a temperature sensor, a real-time clock and an extension connector. A display, four buttons and a small speaker make up the interface.",
        ],
        tableau: {
          entetes: ["Required", "Delivered"],
          lignes: [
            ["Menu: temperature, time, MCP23017 I/O, memory", "Six-program menu"],
            ["Control every MCP23017 output (8 inputs, 8 outputs)", "Done"],
            ["Test every I²C address and list the slaves", "Scanner for addresses 1 to 126"],
            ["Alarm if a slave does not respond (880 Hz, 3 s)", "Alarm alternating between 800 Hz and 100 Hz while the bus is incomplete"],
            ["TC74 sensor", "MCP9808 in the final version"],
            ["External 24LC01 memory, reset to FFh at start-up", "Arduino's internal EEPROM, reset to 0"],
          ],
          note: "The external memory was not part of the final validation, as the program header states.",
        },
        figure: {
          src: "/projects/scanner-i2c/bus-i2c.svg",
          alt: "I²C bus diagram: the Arduino MEGA connected via SDA and SCL to the MCP23017 (0x27), the MCP9808 (0x18), the DS3231 (0x68) and the extension connector; the SSD1351 display uses SPI",
          caption: "The I²C bus and the slave addresses, taken from the final program (diagram in French)",
        },
      },
      {
        heading: "The program",
        paragraphs: [
          "You scroll through the six programs with UP and DOWN, enter with ENTER and leave with EXIT: temperature, time and date, MCP23017 control, memory, I²C scanner and free text saved to memory.",
          "In parallel, every 500 ms, the program rescans all 126 addresses. If it finds fewer than three slaves, the speaker sounds; when a device is plugged in or removed, it gives a rising or falling beep. At start-up, holding UP and DOWN for more than 2 s erases the whole memory.",
        ],
      },
      {
        heading: "The I²C bus on the oscilloscope",
        paragraphs: [
          "In our study, we measured the SDA (data) and SCL (clock) lines on the oscilloscope, using test points designed into the board. You can see the start condition (SDA goes low while SCL is high), the slave address, the data and the stop condition.",
          "We can also estimate, in theory, how long a scan takes. At 100 kHz, the Arduino's default frequency, one bit lasts 1 / 100,000 = 10 µs. Testing an address takes about 11 bits (start, 7 address bits, read/write, acknowledge, stop), i.e. 11 × 10 µs = 110 µs. A full scan therefore takes 126 × 110 µs ≈ 13.9 ms and, repeated every 500 ms, it occupies the bus about 13.9 / 500 ≈ 2.8 % of the time.",
        ],
        figure: {
          src: "/projects/scanner-i2c/oscillo-sda-scl.jpg",
          alt: "Oscilloscope capture of the SDA and SCL lines during an I²C transfer",
          caption: "SDA and SCL lines during a transfer, captured for our study",
        },
      },
      {
        heading: "Result",
        paragraphs: [
          "A finished device on a PCB, with a display, onto which more devices can be added along the I²C chain.",
        ],
      },
      {
        heading: "What I took away",
        paragraphs: [
          "Going from code to the real signal seen on the oscilloscope, then from a breadboard prototype to a manufactured PCB. It gave me a complete view of an electronic system, from design to fabrication.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  MARBLE RUN — CPNV (Jan 2024)
  // ─────────────────────────────────────────
  {
    slug: "parcours-bille",
    title: "Automated marble run",
    subtitle:
      "An automated module controlled by a Siemens PLC, built into a large marble run shared by the whole class.",
    debut: "2024-01",
    fin: "2024-01",
    periode: "23 – 30 Jan 2024",
    cadre: "Engineering preparatory year · CPNV — MCT, module M2 “Simple system”, a short introduction to automation",
    equipe: "Pair project",
    statut: "Completed",
    tags: ["Siemens PLC", "Ladder", "TIA Portal", "3D printing", "State machine", "Inventor"],
    links: [
      { label: "CAD, program and documentation (GitHub)", href: "https://github.com/P0770/parcours-bille-m2421" },
    ],
    highlights: [
      "Required lateral movement and lift of the marble, in 20 s ± 5 s",
      "Transfer mechanism with two grippers tracing a figure-of-eight path",
      "Module integrated into the shared run of the whole class",
      "100 marbles out of 100 in the reliability test",
    ],
    cover: {
      src: "/projects/parcours-bille/module.jpg",
      alt: "The automated marble run module",
      caption: "The marble run module",
    },
    gallery: [
      {
        type: "video",
        src: "/projects/parcours-bille/demo.mp4",
        alt: "Video of the marble run in operation",
        caption: "The module in operation",
      },
      {
        src: "/projects/parcours-bille/ma-partie.jpg",
        alt: "My part of the marble run: two geared arms that lift the marble",
        caption: "My part of the run",
      },
      {
        type: "video",
        src: "/projects/parcours-bille/test-changement.mp4",
        alt: "Test of the direction-change module mounted on its plate",
        caption: "Testing the direction-change module",
      },
      {
        src: "/projects/parcours-bille/engrenages.jpg",
        alt: "The two large gears of the direction-change module",
        caption: "The gears that drive the two grippers",
      },
      {
        src: "/projects/parcours-bille/changement-assemble.jpg",
        alt: "First assembly of the gears and grippers of the direction-change module",
        caption: "First assembly of the gears and grippers",
      },
      {
        type: "video",
        src: "/projects/parcours-bille/test-montee.mp4",
        alt: "Test of the marble lift module",
        caption: "Testing the lift module, built by my teammate",
      },
    ],
    sections: [
      {
        heading: "Context and goal",
        paragraphs: [
          "Each pair had to build a frame in which a marble moves fully automatically. The specifications required a lateral movement and a lift, all within 20 s ± 5 s.",
          "At the end, the modules of the whole class were stacked and connected to form one continuous run: the marble travels through everyone's devices.",
        ],
      },
      {
        heading: "What I did",
        bullets: [
          "Designed and built the lateral transfer mechanism, with two wheels driven by the same motor. On each wheel, the lower end of the gripper rod is fixed to the wheel, and the middle of the rod slides in a guide placed above the centre of the wheel. As the wheel turns, the tip of the gripper traces a figure of eight: it picks up the marble, lifts it, drops it into the neighbouring gripper and returns to its starting position. The second gripper makes the same movement in the opposite direction and drops the marble at the module's exit.",
          "Designed the parts in CAD and 3D-printed them",
          "Programmed the PLC in Ladder with TIA Portal: state machine, faults, control of the stepper motors, sensors and exit solenoid",
          "My teammate Romain Schröder took care of the lift module and the wiring diagram",
        ],
      },
      {
        heading: "Tech",
        paragraphs: [
          "Siemens S7-1200 PLC · TIA Portal · Ladder · motor · sensors · CAD · 3D printing",
        ],
      },
      {
        heading: "Specifications",
        tableau: {
          entetes: ["Requirement", "Required", "Achieved"],
          lignes: [
            ["Path", "At least one change of direction and one motorised lift", "A lift module and a direction-change module"],
            ["Run time", "20 s ± 5 s, i.e. between 15 and 25 s", "Met"],
            ["Reliability", "At most 1 failure in 100 marbles, i.e. 99 %", "100 marbles out of 100, i.e. 100 %"],
            ["Required hardware", "CPU 1212C, safety relay, emergency stop, KTP400 display", "Integrated"],
            ["Link between modules", "Marble held at the exit until the module below is ready", "Holding solenoid and dry “Wait” contact"],
          ],
        },
      },
      {
        heading: "State machine and programming",
        paragraphs: [
          "The client required a four-state machine, shown on the display: Stop (machine off), Wait (waiting for a marble), Busy (a marble is inside the module) and Default (fault). Pressing the emergency stop, or a marble that has not come out after 25 s, triggers the fault: the module stops immediately and only restarts after acknowledgement with the Set button.",
          "The modules are stacked and linked by a dry contact: when it is closed, the module below is in Wait. Until then, a solenoid holds the marble at the exit.",
        ],
        figure: {
          src: "/projects/parcours-bille/machine-etat.svg",
          alt: "State machine diagram: Stop, Wait, Busy and Default, with their transitions",
          caption: "The state machine required by the specifications (diagram in French)",
        },
      },
      {
        heading: "Hardware",
        tableau: {
          entetes: ["Function", "Component"],
          lignes: [
            ["Control", "Siemens S7-1200 CPU 1212C PLC, KTP400 Basic display, Ethernet switch"],
            ["Safety", "Schneider XPSAC safety relay, emergency stop"],
            ["Motion", "2 QSH4218 stepper motors (lift and direction change), driven by TMC2208 boards"],
            ["Exit hold", "TAU-0730 solenoid"],
            ["Sensing", "3 photoelectric sensors, 1 light barrier, 1 inductive sensor"],
            ["Mechanics", "28 PLA-printed parts, 10 machined shafts, gears, PMMA plate, item profiles"],
          ],
        },
      },
      {
        heading: "Reliability and review",
        paragraphs: [
          "At first, we wanted several direction-change modules and a switch to create a loop. The direction-change module turned out to be much larger and more complex than expected. We kept only one, and the lift module was simplified.",
          "In the final test, the module completed 100 marbles out of 100, after one last printed part was replaced on the day of the hand-in. For a next version, we noted improving the rails and the connections between modules, reducing friction in the lift module and adding a switch.",
        ],
      },
      {
        heading: "Result",
        paragraphs: [
          "A working module that meets the required cycle time, successfully integrated into the class's shared run.",
        ],
      },
      {
        heading: "What I took away",
        paragraphs: [
          "My first taste of industrial automation: programming in Ladder, synchronising sensors and actuators, and designing a module that has to interface with everyone else's.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  3D PRINTING — personal (since Mar 2024)
  // ─────────────────────────────────────────
  {
    slug: "impression-3d",
    title: "3D printing",
    subtitle:
      "From CAD to finished part: prototyping, parts for my projects and everyday repairs.",
    debut: "2024-03",
    enCours: true,
    periode: "Since Mar 2024",
    cadre: "Personal project",
    statut: "Ongoing",
    tags: ["Bambu Lab P1S", "Inventor", "Prototyping", "Repair", "PLA"],
    links: [
      { label: "My STL models (GitHub)", href: "https://github.com/P0770/impression-3d" },
    ],
    related: ["etiqueteuse", "concours-robots", "lampe-braun", "drone-fpv", "incubateur-cellules"],
    cover: {
      src: "/projects/impression-3d/support.jpg",
      alt: "White 3D-printed part held in a hand",
      caption: "A custom part, modelled then printed",
    },
    gallery: [
      { src: "/projects/impression-3d/boitier.jpg", alt: "3D-printed enclosure with its circuit board", caption: "A printed enclosure to house a circuit board" },
      { src: "/projects/impression-3d/pieces-plateau.jpg", alt: "3D-printed parts on the build plate", caption: "A batch of parts fresh off the build plate" },
      { src: "/projects/impression-3d/pieces-reparation.jpg", alt: "Three 3D-printed parts", caption: "Several iterations of the same part" },
      { src: "/projects/impression-3d/fc-protect.jpg", alt: "3D render of the protective frame for the LR4's AIO board", caption: "Protection for the LR4's AIO board, version 6", entier: true },
    ],
    sections: [
      {
        heading: "The project",
        paragraphs: [
          "I bought a Bambu Lab P1S as soon as it came out; it quickly became the central tool of almost all my projects. I use it for three things: prototyping my ideas, making the parts for my other projects (labelling machine, competition robot, lamp, drones, incubator — see the related projects below), and fixing everyday things by remodelling broken parts, such as glasses arms or table parts.",
          "I learnt the process in depth: print settings and choosing materials for each use (PLA, PETG, TPU). Modelling in Inventor, slicing with Bambu Studio and OrcaSlicer.",
        ],
      },
      {
        heading: "Parts for my drones",
        paragraphs: [
          "The frame of my tinywhoop, designed entirely by me, its propeller guard and a mount for the AIO board (flight controller and ESCs on a single board), all printed in PLA. The details are on the drones page.",
          "I also designed a 30 × 30 × 4 mm frame that protects the AIO board of my Flywoo LR4. The published version is the sixth.",
        ],
        figure: {
          src: "/projects/impression-3d/drone-pieces.jpg",
          alt: "3D renders of the drone frame, the propeller guard and the AIO mount",
          caption: "Frame, propeller guard and AIO mount",
        },
      },
      {
        heading: "Salt and pepper holder",
        paragraphs: [
          "A holder that keeps a salt shaker and a pepper mill together, with a handle to carry them. I made two versions. The second is more compact: it goes from 75.8 to 52.4 cm³ of material, i.e. (75.8 − 52.4) / 75.8 ≈ 31 % less material.",
        ],
        figure: {
          src: "/projects/impression-3d/sel-poivre.jpg",
          alt: "3D renders of the two versions of the salt and pepper holder",
          caption: "Version 1 (130 × 170 × 65 mm) and version 2 (139 × 115 × 59 mm)",
        },
      },
      {
        heading: "Storage box",
        paragraphs: [
          "An 80 × 80 × 15 mm box that stores a toy. Its recessed cavity follows the toy's organic shape, with thin, rounded parts: an interesting and tricky shape to model.",
        ],
        figure: {
          src: "/projects/impression-3d/squeeshie.jpg",
          alt: "3D render of the storage box with its recessed cavity",
          caption: "The box and its recessed cavity",
        },
      },
      {
        heading: "Mass of the parts",
        paragraphs: [
          "The volume is calculated from the STL file. Multiplied by the density of PLA, about 1.24 g/cm³, it gives the mass of a solid printed part. This is a maximum: the real mass depends on the walls and infill chosen.",
        ],
        tableau: {
          entetes: ["Part", "Volume", "Maximum mass"],
          lignes: [
            ["Drone frame", "4.45 cm³", "4.45 × 1.24 = 5.5 g"],
            ["Propeller guard", "13.61 cm³", "13.61 × 1.24 = 16.9 g"],
            ["AIO mount", "2.15 cm³", "2.15 × 1.24 = 2.7 g"],
            ["LR4 AIO protection", "1.21 cm³", "1.21 × 1.24 = 1.5 g"],
            ["Salt and pepper holder, v1", "75.83 cm³", "75.83 × 1.24 = 94.0 g"],
            ["Salt and pepper holder, v2", "52.38 cm³", "52.38 × 1.24 = 65.0 g"],
            ["Storage box", "59.66 cm³", "59.66 × 1.24 = 74.0 g"],
          ],
        },
      },
    ],
  },

  // ─────────────────────────────────────────
  //  LABELLING MACHINE — CPNV (Mar – Jun 2024)
  // ─────────────────────────────────────────
  {
    slug: "etiqueteuse",
    title: "Automatic honey jar labelling machine",
    subtitle:
      "A labelling machine for standard honey jars, controlled by a Siemens PLC, with automatic adjustment of the label height.",
    debut: "2024-03",
    fin: "2024-06",
    periode: "Mar – Jun 2024",
    cadre: "Engineering preparatory year · CPNV — final project of the year",
    equipe: "Pair project",
    role: "A two-person project: design, studies, fabrication, wiring and programming done together",
    budget: "Materials: CHF 7,374",
    statut: "Completed",
    tags: ["Siemens PLC", "Ladder", "TIA Portal", "Pneumatics", "Wiring", "HMI", "Inventor"],
    links: [
      { label: "Documentation, diagrams, program and CAD (GitHub)", href: "https://github.com/P0770/etiqueteuse-pots-miel" },
    ],
    highlights: [
      "A complete machine: jar detection, conveying, height adjustment, labelling, discharge",
      "Fully programmed in Ladder with TIA Portal",
      "Electronics and cabinet wiring: sensors, motors, solenoid valves for the pneumatic cylinders",
      "12 jars/min, twice as fast as by hand, for about CHF 7,400 of materials",
    ],
    cover: {
      src: "/projects/etiqueteuse/machine.jpg",
      alt: "Automatic honey jar labelling machine",
      caption: "The finished machine",
    },
    gallery: [
      {
        type: "video",
        src: "/projects/etiqueteuse/presentation.mp4",
        alt: "Presentation video of the labelling machine",
        caption: "Project presentation video",
        portrait: true,
        ratio: "9/16",
      },
      {
        src: "/projects/etiqueteuse/cablage.jpg",
        alt: "Wiring at the back of the machine",
        caption: "The wiring at the back of the machine",
      },
      {
        src: "/projects/etiqueteuse/assemblage-general.jpg",
        alt: "3D render of the general assembly of the labelling machine in its frame",
        caption: "General assembly in Inventor",
      },
      {
        src: "/projects/etiqueteuse/poster.jpg",
        alt: "Presentation poster of the M2471 jar labelling machine project",
        caption: "The poster presented at the end of the project (in French)",
        entier: true,
      },
    ],
    sections: [
      {
        heading: "Context and goal",
        paragraphs: [
          "This was the big end-of-year project of the preparatory year. We had to design and build a complete machine that detects honey jars of standard sizes, conveys them and applies a label at the right height.",
        ],
      },
      {
        heading: "How the machine works",
        paragraphs: ["The machine is organised into two subsystems:"],
        bullets: [
          "Conveying — moving the jars on motorised belts",
          "Labelling — a labelling head mounted on a lifting system, which adjusts its height to the detected jar",
        ],
      },
      {
        heading: "What I did",
        bullets: [
          "Programmed the whole machine in Ladder with TIA Portal: jar detection, conveying, height adjustment of the labelling head, labelling, discharge",
          "Designed and built the electronics: connecting the sensors, motors and pneumatic solenoid valves to the PLC",
          "Wired the control cabinet",
          "Mechanical design, studies and fabrication done with my teammate (conveyors, lifting system, 3D-printed parts)",
        ],
      },
      {
        heading: "Tech",
        paragraphs: [
          "Siemens S7-1200 PLC · TIA Portal · Ladder · pneumatic cylinders · sensors · motors · belts · Inventor · 3D printing",
        ],
      },
      {
        heading: "Specifications and results",
        paragraphs: [
          "We wrote the specifications at the start of the project, and the handover report reviews them requirement by requirement. The machine performs every required function, but two numerical requirements were not met.",
        ],
        tableau: {
          entetes: ["Requirement", "Required", "Achieved"],
          lignes: [
            ["Throughput", "At least the manual rate, 6 jars/min", "12 jars/min"],
            ["Success rate", "98 % minimum", "82 %"],
            ["Footprint", "600 × 600 × 600 mm", "600 × 800 × 400 mm with the external electrical enclosure, compliant without it"],
            ["Jar sizes", "2 preset profiles", "Large jar Ø 80 × 133.5 mm and small jar Ø 65 × 86 mm, plus a manual mode"],
            ["Functions", "Control screen, counting, automatic height, jar-type check", "Done"],
          ],
          note: "The enclosure for the electrical panel was added during the project to protect it from honey.",
        },
      },
      {
        heading: "Throughput and reliability",
        paragraphs: [
          "To set the minimum rate, we first applied 25 labels by hand. It took 11.66 s per jar on average, i.e. 60 / 11.66 ≈ 5.1 jars per minute, rounded to 6 jars/min in the study. Only 15 labels out of 25 were properly centred (within ± 2 mm), i.e. 60 %.",
          "The machine labels 12 jars per minute, i.e. 60 / 12 = 5 s per jar: about 11.66 / 5 ≈ 2.3 times faster than by hand.",
          "The success rate reaches 82 % instead of the targeted 98 %: out of 100 jars, that means 18 failures on average instead of 2 at most. Two causes were identified. The label folds when it comes out too early, before the jar arrives. And the labels gradually drift, so they have to be re-centred by hand about every 20 labels.",
        ],
      },
      {
        heading: "Control architecture",
        paragraphs: [
          "A Siemens S7-1200 PLC (CPU 1214C), with a 16-input / 16-output module and a fast-output signal board, reads the sensors and drives the conveyors, the label motor via PWM, the height stepper motor and the cylinders' solenoid valves. The KTP700 touch screen is connected to it via Ethernet. An emergency stop and a safety relay protect the operator.",
        ],
        figure: {
          src: "/projects/etiqueteuse/architecture.svg",
          alt: "Control architecture diagram: sensors, S7-1200 PLC, KTP700 screen, actuators, safety and power supplies",
          caption: "Control architecture, based on the project's wiring diagram (diagram in French)",
        },
      },
      {
        heading: "Operator interface",
        paragraphs: [
          "The touch screen offers four modes: large jar, small jar, automatic (both sizes, each at its own height) and manual (any jar, at a chosen height). In the first two modes, a jar of the wrong size is sent to the exit without being labelled.",
          "Each mode has its own counter, and the machine can stop by itself once a preset number of jars is reached. The default heights are set in recipes. After an error or an emergency stop, the machine switches to jam mode and waits for the operator to confirm a checklist.",
        ],
        figure: {
          src: "/projects/etiqueteuse/hmi-menu.jpg",
          alt: "Main menu of the touch screen with the four mode buttons, the counter and the recipes",
          caption: "Main menu of the touch screen",
        },
      },
      {
        heading: "Review and improvements",
        paragraphs: [
          "In the handover report, we listed what should change in a next version:",
        ],
        bullets: [
          "Strengthen the jaws that drive the label roll: the brakes added against drift increase the force they have to transmit",
          "Height adjustment: move to shafts at least 14 mm in diameter (8 mm today), hardened after machining, and place a motor next to each shaft rather than a single one slightly off the centre of gravity",
          "Decouple the jar rotation from the label feed, so the label can keep being pressed without unrolling a second one",
        ],
        figure: {
          src: "/projects/etiqueteuse/systeme-etiquetage.jpg",
          alt: "3D render of the final labelling unit with the head, the rollers and the jar rotation roller",
          caption: "Final version of the labelling unit",
        },
      },
      {
        heading: "Result",
        paragraphs: [
          "A machine that works end to end: it detects the jar, adjusts the height, applies the label, then moves the jar on.",
        ],
      },
      {
        heading: "What I took away",
        paragraphs: [
          "Leading the control side of a real automated machine, from Ladder logic to wiring, in close coordination with the mechanics, on a project with about CHF 7,400 of materials.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  FPV DRONES — personal (since Jan. 2025)
  // ─────────────────────────────────────────
  {
    slug: "drone-fpv",
    title: "FPV drones",
    subtitle:
      "FPV flying with DJI O4 digital video: two drones bought, a 2.5-inch I assembled and a tinywhoop I designed from scratch.",
    debut: "2025-01",
    enCours: true,
    periode: "Since Jan. 2025",
    cadre: "Personal project",
    statut: "Ongoing",
    tags: ["FPV", "Betaflight", "DJI O4", "3D printing", "Soldering"],
    related: ["impression-3d"],
    cover: { src: "/projects/drone-fpv/cover.jpg", alt: "The Matrix, a 2.5-inch FPV drone I assembled", caption: "The Matrix, assembled by me" },
    sections: [
      {
        heading: "The project",
        paragraphs: [
          "I fly, repair and build my own FPV drones, to understand how they are designed and to shoot aerial videos.",
          "I have four drones: two bought ready to fly (the LR4, a 4\" long-range, and the Firefly 18, my favourite), the Matrix, a 2.5\" I assembled myself on a 3D-printed frame, and a tinywhoop I designed and built entirely.",
          "Over time I have done a lot of repairing and debugging in Betaflight, replaced boards and cameras, and printed upgrade parts. I fly immersed with a DJI headset, for promotional content and cinematic videos.",
        ],
      },
      {
        heading: "My equipment",
        fiches: [
          {
            nom: "Flywoo Explorer LR4",
            origine: "Bought",
            infos: [["Size", "4 inches"], ["Camera", "DJI O4 Pro"]],
            medias: [
              { src: "/projects/drone-fpv/lr4.jpg", alt: "The Flywoo Explorer LR4 on a scale: 244.7 g" },
              { type: "video", src: "/projects/drone-fpv/lr4-vol.mp4", alt: "Video shot with the LR4 over a rocky coastline" },
            ],
          },
          {
            nom: "Flywoo Firefly 18",
            origine: "Bought",
            infos: [["Size", "1.8 inches"], ["Camera", "DJI O4 Lite"]],
            medias: [
              { src: "/projects/drone-fpv/firefly.jpg", alt: "The Flywoo Firefly 18 with its purple propeller guards, held in hand" },
              { type: "video", src: "/projects/drone-fpv/vol.mp4", alt: "Video of a short FPV flight over a river", portrait: true, ratio: "3/4" },
            ],
          },
          {
            nom: "Matrix",
            origine: "Assembled by me",
            perso: true,
            infos: [["Size", "2.5 inches"], ["Camera", "DJI O4 Lite"]],
            medias: [
              { src: "/projects/drone-fpv/matrix.jpg", alt: "The Matrix held in hand, with its blue 3D-printed camera mount" },
            ],
          },
          {
            nom: "Tinywhoop",
            origine: "Designed and built by me",
            perso: true,
            infos: [["Size", "75 mm"], ["Camera", "DJI O4 Lite"]],
            medias: [
              { src: "/projects/drone-fpv/tinywhoop.jpg", alt: "My tinywhoop with its printed propeller guard, held in hand" },
              { src: "/projects/drone-fpv/tinywhoop-nu.jpg", alt: "The tinywhoop without its propeller guard, circuit board visible" },
              { src: "/projects/drone-fpv/tinywhoop-variante.jpg", alt: "A variant of the tinywhoop, in blue, held in hand" },
            ],
          },
        ],
        apres: [
          "All my drones fly with DJI O4 digital video: O4 Pro on the LR4, O4 Lite on the others. On the ground: DJI Goggles 3 headset, DJI controller, and 1S, 3S and 4S LiPo batteries depending on the drone.",
        ],
      },
      {
        heading: "3D-printed parts",
        paragraphs: [
          "I designed in Inventor and printed in PLA several parts for my drones: my tinywhoop's frame, its propeller guard, a mount for the AIO board, and a protective frame for the LR4's AIO, now on its 6th version.",
          "On the tinywhoop's frame, the motors sit at the corners of a 50 mm square, so two opposite motors are 50 × √2 ≈ 70.7 mm apart: the size of a 75 mm-class micro-drone. Two neighbouring propellers must not touch, so their diameter has to stay below 50 mm. The propeller guard fixes onto the four holes at the arm tips, 134.6 mm apart diagonally.",
          "The Matrix's frame, on the other hand, is a Kayoumini-compatible 2.5\" design downloaded from MakerWorld, which I printed but did not design: its motors are 111.8 mm apart diagonally.",
        ],
        figure: {
          src: "/projects/drone-fpv/pieces-imprimees.jpg",
          alt: "3D renders of my tinywhoop's frame, its propeller guard and the AIO board mount",
          caption: "My parts for the tinywhoop: frame, propeller guard and AIO mount",
        },
      },
      {
        heading: "Betaflight configuration",
        paragraphs: [
          "The two drones whose configuration I have run Betaflight 4.5.1. The main points:",
        ],
        bullets: [
          "Motors on bidirectional DShot300: the flight controller knows the real speed of each motor, which enables the RPM filter (3 harmonics) to remove motor noise from the gyro precisely",
          "DJI controller: the stick commands go through the O4 video unit, which is linked to the flight controller",
          "Flight information (voltage, time, link quality, GPS) shown in HD in the DJI headset via MSP DisplayPort",
          "PID tuning with Betaflight's simplified sliders, snappier on the LR4, which is heavier",
          "Rates suited to the use: soft with expo on the Matrix for filming, linear on the LR4",
          "Switches: arming, flight modes (Angle, Horizon, Acro), turtle mode after a crash, beeper to find the drone",
        ],
      },
      {
        heading: "Safety: the LR4's return to home",
        paragraphs: [
          "For long-range flying, the LR4 has a GPS and is set up with GPS Rescue. If the radio link is lost, the failsafe forces the channel that triggers this mode: the drone climbs to 50 m, flies back towards its take-off point at about 20 m/s, starts descending 200 m from it and lands. A switch can also cut the 10 V supply to the video transmitter.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  ROBOT COMPETITION — HEPIA MT1 (Mar. – Jun. 2025)
  // ─────────────────────────────────────────
  {
    slug: "concours-robots",
    vedette: true,
    title: "Robot competition",
    subtitle:
      "Two robots cooperating over Bluetooth: a carrier with a fold-out bridge and an explorer, to cross a gap and fill a tank.",
    debut: "2025-03",
    fin: "2025-06",
    periode: "Mar. – Jun. 2025",
    cadre: "1st year HEPIA (MT1) — robot competition",
    equipe: "Team of 5 (RVEZ group)",
    role: "In charge of electronics and code",
    statut: "Completed — design award",
    budget: "CHF 183.47 of the CHF 200 allowed",
    links: [
      { label: "Project code and files (GitHub)", href: "https://github.com/P0770/concours-robots-hepia" },
    ],
    tags: ["Arduino", "Bluetooth", "C++", "Robotics", "PID"],
    highlights: [
      "Won the design award and completed the challenge",
      "Two independent robots talking over Bluetooth, master / slave",
      "Fold-out bridge and peristaltic pump to complete the mission",
      "Big robot's path corrected by PID, using the gyro of the small robot riding on board",
      "Fully autonomous mission after pressing START, with emergency stop and shutdown on Bluetooth loss",
    ],
    cover: {
      src: "/projects/concours-robots/robot-1.jpg",
      alt: "The competition robots",
      caption: "The two robots",
    },
    gallery: [
      {
        type: "video",
        src: "/projects/concours-robots/concours-extrait.mp4",
        alt: "Competition video: the bridge unfolds and the small robot crosses",
        caption: "The competition: the bridge unfolds and the small robot crosses (80 s excerpt)",
      },
      { src: "/projects/concours-robots/robot-2.jpg", alt: "Explorer robot (fire engine) and carrier robot (fire station)", caption: "The explorer fire engine next to the fire station, the carrier robot" },
      { src: "/projects/concours-robots/robot-3.jpg", alt: "Fire-station-shaped carrier robot, door closed", caption: "The fire station: the carrier robot, door closed" },
      { src: "/projects/concours-robots/atelier.jpg", alt: "The robots being built in the workshop", caption: "The robots being built in the workshop" },
      {
        src: "/projects/concours-robots/cao-assemblage.jpg",
        alt: "CAD render of both robots with the bridge unfolded",
        caption: "CAD assembly: the big robot, the unfolded bridge and the small robot",
        entier: true,
      },
      {
        src: "/projects/concours-robots/cao-grand-robot.jpg",
        alt: "CAD render of the big robot with the raised tank and the pump",
        caption: "Big robot: raised tank and peristaltic pump",
        entier: true,
      },
      {
        src: "/projects/concours-robots/cao-petit-robot.jpg",
        alt: "CAD render of the small robot with its hose reel",
        caption: "Small robot: the reel that unwinds the hose",
        entier: true,
      },
      {
        src: "/projects/concours-robots/prototype-ouvert.jpg",
        alt: "Big robot prototype open, wiring visible and bridge folded",
        caption: "The big robot prototype during assembly",
        entier: true,
      },
      {
        type: "video",
        src: "/projects/concours-robots/test-pont.mp4",
        alt: "Test video of the bridge unfolding",
        caption: "Full test of the bridge unfolding (19 May 2025)",
      },
      {
        type: "video",
        src: "/projects/concours-robots/pompe-demo.mp4",
        alt: "Demonstration video of the peristaltic pump",
        caption: "Peristaltic pump demonstration",
        portrait: true,
        ratio: "9/16",
      },
    ],
    sections: [
      {
        heading: "Context and goal",
        paragraphs: [
          "The 1st-year discovery project competition: bring about 0.8 L of water into a tank on the other side of a gap. The course is a 3 m table, a 50 cm gap, then a second 3 m table. Once the tank is filled, the robot must back up 50 cm and stop. Everything runs autonomously after the start, on a CHF 200 budget.",
          "Our answer relied on two independent robots that cooperate and communicate over Bluetooth.",
        ],
      },
      {
        heading: "The two-robot strategy",
        bullets: [
          "A large carrier robot takes the small explorer robot to the edge of the gap",
          "At the edge, the carrier unfolds a bridge; the small robot drives over it to reach the second part of the course",
          "A hose links the two robots: it unwinds from the small one to the big one, which holds the water container",
          "The small robot reaches the receiving area; the big robot uses a peristaltic pump to empty the tank, through the small robot's front tray, into the tank of the second area",
        ],
      },
      {
        heading: "What I did",
        bullets: [
          "Designed all the electronics of both robots",
          "Wrote all the code in C++ (Arduino)",
          "Master / slave Bluetooth link: the big robot commands the small one to synchronise the mission phases",
          "Integrated the limit switches for edge detection (stopping at the end of the table), the motors, the servo and the peristaltic pump",
          "PID control of the big robot's path using the small robot's MPU6050 gyro",
        ],
      },
      {
        heading: "Technical details",
        bullets: [
          "Control — Arduino Mega on the big robot (master), Arduino Uno on the small robot (slave)",
          "Communication — 2 HC-05 Bluetooth modules at 9600 baud; the master module's STATE pin signals a lost link",
          "Drive — Modelcraft RB350100 motors with 1:100 gearboxes, driven by L298N H-bridges",
          "Sensors — MPU6050 gyro (I²C) on the small robot; limit switches to detect the table edges",
          "Bridge — two 300 mm wooden decks reinforced with aluminium angles, lowered by a motorised winch",
          "Water — GROTHEN G3000 peristaltic pump powered at 24 V, hose unwound from a 3D-printed reel",
          "Hose placement — a servo triggered at the start dips the tube into the tank with no human help",
          "Interface — START and STOP (emergency stop) buttons",
        ],
        figure: {
          src: "/projects/concours-robots/cablage.svg",
          alt: "Wiring diagram of both robots with the Arduino pins used",
          caption: "Block diagram rebuilt from the pins in the final code; the original schematic was not kept (diagram in French)",
        },
        figureEnFin: true,
      },
      {
        heading: "Communication and control",
        paragraphs: [
          "The big robot has to drive straight for 3 m to the edge, yet its two motors never turn at exactly the same speed. The only gyro available, an MPU6050, is mounted on the small robot… which happens to ride on the big robot during this phase. So the small robot sends its rotation rate over Bluetooth every 50 ms; the big robot integrates it over time to rebuild its own heading, then corrects its two motors with a PID controller (Kp = 6, Ki = 0.05, Kd = 0.6): left speed = target speed − correction, right speed = target speed + correction.",
          "The whole mission is split into states. The master drives the sequence and waits for an acknowledgement from the slave before moving on to the next step:",
        ],
        figure: {
          src: "/projects/concours-robots/sequence-mission.svg",
          alt: "Sequence diagram of the Bluetooth messages between the master and slave robots, state by state",
          caption: "Mission flow and messages exchanged, from the final code of both robots (diagram in French)",
        },
        tableau: {
          entetes: ["Message", "Sent by", "Effect"],
          lignes: [
            ["ETAT1", "Master", "The slave starts sending its rotation rate"],
            ["G:<value>", "Slave", "Rotation rate (°/s) for the master's PID"],
            ["STOP_ANGLE", "Master", "Edge reached: stop sending"],
            ["ETAT3", "Master", "The slave crosses the bridge and drives to the edge"],
            ["ETAT5", "Master", "The slave backs up for 3 s"],
            ["FIN_ETAT", "Slave", "Acknowledgement: the master moves to the next state"],
          ],
        },
      },
      {
        heading: "Sizing and tests",
        paragraphs: [
          "Pump — The GROTHEN G3000 peristaltic pump was tested on 3 m of hose with a 750 mL tank:",
        ],
        tableau: {
          entetes: ["Voltage", "Emptying time", "Average flow"],
          lignes: [
            ["12 V", "60 s", "750 / 60 = 12.5 mL/s"],
            ["24 V", "30 s", "750 / 30 = 25 mL/s"],
          ],
          note: "Measured losses: about 30 mL, i.e. 30 / 750 = 4 % of the volume, below the 10 % tolerance. Hence a dedicated 24 V battery for the pump, and a raised tank so that gravity helps empty the hose. On competition day the pump ran for about 30 s.",
        },
        apres: [
          "Bridge — It had to span a 500 mm gap, carry a robot of up to 4 kg and fit folded within 400 × 400 × 100 mm. The chosen design: a drawbridge with two 300 mm decks joined by hinges, lowered by a cord wound on a winch; elastic bands unfold the second deck once the lever arm is long enough.",
          "Wheel motors — Continuous torque C = 6 kgf·cm = 6 × 9.81 N × 0.01 m ≈ 0.589 N·m. With two motors and wheels of radius R = 0.06 m, the driving force is F = n·C / R = 2 × 0.589 / 0.06 ≈ 19.6 N. The rolling resistance of a 10 kg robot is F_r = μr·m·g = 0.03 × 10 × 9.81 ≈ 2.94 N. Net force: 19.6 − 2.94 ≈ 16.7 N, giving an acceleration a = 16.7 / 10 ≈ 1.67 m/s². At 52 rpm under load, the speed is v = 52 / 60 × 2π × 0.06 ≈ 0.33 m/s: the 3 m table takes about 9 s. (This corrects the calculation in review report 2, which mixed kgf and newtons and found 3 N; the conclusion — motors more than strong enough — stays the same.)",
        ],
      },
      {
        heading: "Result",
        paragraphs: ["We won the design award and completed the challenge."],
      },
      {
        heading: "Difficulties",
        bullets: [
          "Bridge — during the review 2 demonstration, a cord attachment broke and the bridge came down too fast. The cord was then fixed directly through a hole in the aluminium profile, and the winch speed reduced for a gradual unfolding",
          "Preparation — the winch cord had to be rewound by hand between runs, in a hard-to-reach spot",
          "Electronics — a shield problem prevented the first motor tests with the code",
          "Cooperation — getting two autonomous systems to talk in real time, with acknowledgements and handling of a lost link",
        ],
        figure: {
          src: "/projects/concours-robots/pont-deploiement.jpg",
          alt: "Three stages of the bridge unfolding: folded, coming down, unfolded",
          caption: "The bridge unfolding in three stages, during a test",
        },
        figureEnFin: true,
      },
      {
        heading: "What I take away",
        paragraphs: [
          "Making two autonomous embedded systems cooperate and talk in real time: that was the real difficulty, far more than either robot on its own.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  RASPBERRY PI SERVER — personal (since summer 2025)
  // ─────────────────────────────────────────
  {
    slug: "serveur-raspberry",
    title: "Self-hosted server",
    subtitle:
      "A Raspberry Pi 5 hosting a family cloud and a media library, reachable on my own domain.",
    debut: "2025-07",
    enCours: true,
    periode: "Since summer 2025",
    cadre: "Personal project",
    statut: "Ongoing",
    tags: ["Raspberry Pi", "Docker", "Cloudflare Tunnel", "Self-hosting", "Nextcloud", "Jellyfin", "Linux"],
    links: [
      { label: "Setup and configuration guide (GitHub)", href: "https://github.com/P0770/picloud" },
    ],
    cover: { src: "/projects/serveur-raspberry/montage.jpg", alt: "Raspberry Pi 5 server" },
    sections: [
      {
        heading: "The project",
        paragraphs: [
          "It all started with an ad blocker on a first Raspberry Pi: that project got me into self-hosting. I then wanted to host my own services, at home, on my own hardware.",
          "The server runs on a Raspberry Pi 5 with an SSD, in a case that handles power and management of the whole unit. It hosts family cloud storage and a video library, like a personal Netflix. The services run in Docker containers and are exposed on my own domain through a Cloudflare Tunnel, without opening any port on my router.",
        ],
      },
      {
        heading: "Hardware",
        tableau: {
          entetes: ["Part", "Details"],
          lignes: [
            ["Computer", "Raspberry Pi 5, 4 GB RAM"],
            ["Storage", "1 TB NVMe SSD in ext4 (916 GB usable), mounted automatically at boot"],
            ["System", "Raspberry Pi OS Lite 64-bit, no desktop"],
            ["Administration", "SSH from the local network, containers managed with Portainer"],
          ],
        },
      },
      {
        heading: "Services",
        tableau: {
          entetes: ["Service", "Role"],
          lignes: [
            ["Nextcloud", "Family cloud: one account per family member, file sync and a shared folder"],
            ["Jellyfin", "Video library, with separate libraries"],
            ["Portainer", "Admin interface for the Docker containers"],
            ["cloudflared", "Cloudflare tunnel client, linking the server to the internet without opening a port"],
          ],
        },
        apres: [
          "Nextcloud and Jellyfin share the same folder on the SSD: a video the family drops into Nextcloud shows up automatically in Jellyfin.",
        ],
      },
      {
        heading: "Architecture",
        paragraphs: [
          "The key part is the Cloudflare tunnel: the Raspberry Pi opens an outgoing encrypted connection to Cloudflare, and Cloudflare then routes visitors through that tunnel. My router therefore has no open port, and my IP address is never exposed. Each service has its own subdomain, served over HTTPS by Cloudflare.",
        ],
        figure: {
          src: "/projects/serveur-raspberry/architecture.svg",
          alt: "Architecture diagram: users, Cloudflare, encrypted tunnel to the cloudflared container, then Nextcloud and Jellyfin on the SSD",
          caption: "Server architecture, with domain names replaced by generic values (diagram in French)",
        },
        apres: [
          "When the Raspberry Pi is off, the domain shows a 502 error: Cloudflare still answers, but can no longer find the server at the other end of the tunnel.",
        ],
      },
      {
        heading: "Problems solved",
        tableau: {
          entetes: ["Problem", "Cause", "Fix"],
          lignes: [
            ["SSH connection refused after a reinstall", "The Pi's host key changes with every reinstall", "Removed the old known key (ssh-keygen -R)"],
            ["Nextcloud data on the SD card", "Docker volume created by default", "Recreated the container with its data on the SSD"],
            ["SSD missing after a reboot", "Drive not declared in /etc/fstab", "Added the SSD to fstab for automatic mounting"],
            ["Portainer unreachable through the tunnel", "The tunnel pointed at Portainer's HTTPS port", "Routed to the internal HTTP port, with HTTPS handled by Cloudflare"],
            ["Nextcloud rejected the domain name", "Domain missing from trusted_domains", "Added the domain with Nextcloud's occ tool"],
            ["Shared folder unreadable in Nextcloud", "Wrong file owner", "Gave the folder to the web server user (www-data)"],
            ["File sharing \"not allowed\"", "Sharing API disabled", "Enabled it in the Nextcloud admin settings"],
          ],
        },
      },
      {
        heading: "Next steps",
        bullets: [
          "Automatic backups to my NAS: right now all the data sits on a single SSD",
          "Cloudflare Access authentication in front of the admin interfaces",
          "Host Overleaf Community Edition to share LaTeX projects",
          "Move from docker run commands to a versioned docker-compose file (already prepared in the GitHub repo)",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  BRAUN LAMP — personal (Dec. 2025)
  // ─────────────────────────────────────────
  {
    slug: "lampe-braun",
    title: "Braun-inspired bedside lamp",
    subtitle:
      "The Braun HL70 fan reimagined as a bedside lamp, a big CAD modelling job.",
    debut: "2025-12",
    fin: "2025-12",
    periode: "Dec. 2025",
    cadre: "Personal project",
    statut: "Completed",
    tags: ["CAD", "Inventor", "3D printing", "Electronics", "Reuse"],
    links: [
      { label: "CAD and STL files (GitHub)", href: "https://github.com/P0770/lampe-chevet" },
    ],
    related: ["impression-3d"],
    cover: { src: "/projects/lampe-braun/lampe.jpg", alt: "Bedside lamp inspired by the Braun HL70" },
    gallery: [
      {
        type: "video",
        src: "/projects/lampe-braun/demo.mp4",
        alt: "Video of the lamp switched on",
        caption: "The lamp switched on",
      },
      { src: "/projects/lampe-braun/detail.jpg", alt: "Bedside lamp switched off", caption: "The lamp switched off" },
    ],
    sections: [
      {
        heading: "The project",
        paragraphs: [
          "A bedside lamp that copies the shape of the famous Braun HL70 fan exactly, but in my own colours. The heart of the project was the CAD modelling: faithfully reproducing the lines of this iconic object, which greatly improved my 3D design skills.",
          "The lamp is then 3D-printed, with simple electronics built around an LED strip salvaged from an old lamp and reused for the occasion.",
        ],
      },
      {
        heading: "CAD design",
        paragraphs: [
          "The lamp is modelled in Inventor: seven parts in one assembly, designed to fit together and take the electronics as they are.",
        ],
        figure: {
          src: "/projects/lampe-braun/pieces-cao.jpg",
          alt: "Renders of the lamp's six main parts: base, LED holder, outer shell, central housing, plate and end disc",
          caption: "The main parts, rendered from the STL files (colours close to the real print)",
        },
        tableau: {
          entetes: ["Part", "Role", "Dimensions (mm)"],
          lignes: [
            ["Base", "Holds the lamp lying horizontally", "140 × 83 × 68"],
            ["LED holder", "Carries the LED strip", "120 × 77 × 73"],
            ["Outer shell", "Curved shell following the HL70 silhouette", "130 × 111 × 92"],
            ["Central housing", "Holds the battery and the circuit board", "70 × 70 × 70"],
            ["Plate and end disc", "Close the ends", "77 × 73 × 6 and Ø 70 × 6"],
            ["Board holder", "Keeps the circuit board in place", "—"],
            ["Button", "Extends the original button to the outside", "4.6 × 4 × 4.6"],
          ],
        },
      },
      {
        heading: "Reused electronics",
        paragraphs: [
          "Rather than designing electronics, I took apart a shop-bought rechargeable head torch (200 lumens, 270° lighting) to recover its complete electronics: LED strip, battery, charging board and button. The lamp was then designed around these parts, without modifying them.",
          "That is the reverse of the usual approach: the sizes of the board, battery and LED strip dictated the inner geometry. A holder keeps the board in place, a small part extends the original button to the outside, and the charging port stays accessible: the lamp charges just like the original torch, battery included.",
        ],
      },
      {
        heading: "Printing",
        bullets: [
          "Bambu Lab P1S printer with the AMS multicolour unit",
          "PLA for the structural and coloured parts",
          "Clear PETG to let the light through",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  AMC GAME — HEPIA MT2 (Mar. – May 2026)
  // ─────────────────────────────────────────
  {
    slug: "jeu-amc",
    title: "\"Qui de nous ?\" — Local network party game",
    subtitle:
      "A multiplayer party game in Python/Kivy, on PC and Android: one player hosts the game, the others join on the same Wi-Fi.",
    debut: "2026-03",
    fin: "2026-05",
    periode: "Mar. – May 2026",
    cadre: "2nd year HEPIA (MT2) — AMC course (Mobile Apps and Sensors)",
    equipe: "Pair project",
    role: "Interface, Android deployment, tablet testing",
    statut: "Completed",
    tags: ["Python", "Kivy", "Android", "Buildozer", "TCP", "Accelerometer", "Git"],
    links: [
      { label: "Game code (GitHub)", href: "https://github.com/P0770/qui-de-nous" },
      { label: "Android app (APK)", href: "https://github.com/P0770/qui-de-nous/releases/latest" },
      {
        label: "HEPIA Git repository",
        href: "https://gitedu.hesge.ch/amc/amc26/amc26_jeu_bento_pozzo",
      },
    ],
    highlights: [
      "Multiplayer party game over the local network: each player joins from their own device",
      "One player hosts the game, the others join with its IP address on the same Wi-Fi",
      "Client/server communication over TCP (Python sockets) on the local network",
      "The game starts when the host shakes their device, detected by the accelerometer",
      "Graphical interface built with the Kivy framework, Android app compiled with Buildozer",
    ],
    cover: { src: "/projects/jeu-amc/cover.jpg", alt: "Game logo: a glowing question mark and the letters QDN" },
    gallery: [
      {
        src: "/projects/jeu-amc/interface.jpg",
        alt: "The game's home screen on PC and on an Android tablet",
        caption: "The home screen: one player creates the game, the other joins with the host's IP address",
      },
      { src: "/projects/jeu-amc/ecran-menu.jpg", alt: "Game menu on PC and tablet", caption: "Menu: nickname, create or join a game", entier: true },
      { src: "/projects/jeu-amc/ecran-salon.jpg", alt: "Waiting room with the list of players", caption: "Waiting room: the host shakes the device to start the game", entier: true },
      { src: "/projects/jeu-amc/ecran-question.jpg", alt: "Question-writing screen", caption: "The chosen player completes \"Qui de nous…\" (\"Which of us…\") and picks a secret target", entier: true },
      { src: "/projects/jeu-amc/ecran-vote.jpg", alt: "Voting screen", caption: "The other players vote", entier: true },
      { src: "/projects/jeu-amc/ecran-resultats.jpg", alt: "Round results", caption: "Round results and scores", entier: true },
      { src: "/projects/jeu-amc/ecran-victoire.jpg", alt: "End-of-game screen", caption: "End of game and ranking", entier: true },
    ],
    sections: [
      {
        heading: "Context",
        paragraphs: [
          "This project was done in pairs for the AMC course (Mobile Apps and Sensors), in 2nd year at HEPIA. The main requirement was to build a working network application with a graphical interface.",
        ],
      },
      {
        heading: "Rules of the game",
        paragraphs: [
          "Each round, a chosen player completes the sentence \"Which of us…\" (for example \"…is the most touchy?\") and secretly picks the person they have in mind. The other players vote for who they think the answer is: each correct vote earns 1 point. After 5 rounds, the player with the most points wins.",
        ],
      },
      {
        heading: "Network architecture",
        paragraphs: [
          "The game uses a client/server architecture on the local network. One node runs the server (game state, synchronisation) and the other players connect to it as TCP clients, joining the host's game.",
        ],
        figure: {
          src: "/projects/jeu-amc/architecture.svg",
          alt: "Diagram: the flow through the game's six screens, then the host and its threads linked to the players over TCP, with the list of messages exchanged",
          caption: "Screen flow and network communication (TCP, port 55555, JSON messages prefixed with their length) (diagram in French)",
        },
      },
      {
        heading: "Interface and accelerometer",
        paragraphs: [
          "The interface was built with Kivy, a Python framework for touch interfaces. The accelerometer is used to start the game: in the waiting room, the host shakes their device. The sensor is read every 50 ms, and a shake is detected when |Δx| + |Δy| + |Δz| exceeds 14.5.",
        ],
      },
      {
        heading: "My part: the interface and Android deployment",
        bullets: [
          "Interface design: dark theme, colours, buttons and layouts for the six screens",
          "Building the Android app (APK) with Buildozer, on a virtual machine controlled over SSH",
          "Fixing an Android bug: \"[Errno 1] Operation not permitted\" on connecting, because the automatic permission detection did not spot the socket use; the INTERNET permission was added explicitly",
          "Testing and debugging on an Android tablet and on PC, screenshots and final presentation",
        ],
        apres: [
          "My teammate handled the network architecture, the game logic and the shake detection.",
        ],
      },
      {
        heading: "Difficulties",
        bullets: [
          "HEPIA's Wi-Fi isolates devices from each other (AP isolation): players could not connect to one another, so we used a mobile hotspot",
          "Kivy's font does not display emojis",
          "A fixed layout, poorly suited to different screen sizes",
          "The virtual players (bots) could not be made to work",
        ],
      },
      {
        heading: "Possible improvements",
        bullets: [
          "Automatic reconnection after a disconnect",
          "Backup start button for devices without an accelerometer",
          "A timer for voting",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  INCUBATOR — HEPIA MT2 (Mar. – Jun. 2026)
  // ─────────────────────────────────────────
  {
    slug: "incubateur-cellules",
    vedette: true,
    title: "Portable cell incubator",
    subtitle:
      "A self-contained unit carrying living cells between Lausanne and Geneva, at 37 °C with controlled humidity and pH.",
    debut: "2026-03",
    fin: "2026-06",
    periode: "Mar. – Jun. 2026",
    cadre: "2nd year HEPIA (MT2) — Thematic Project, biomedical specialisation",
    statut: "Completed — working prototype validated",
    links: [
      { label: "Project code and files (GitHub)", href: "https://github.com/P0770/incubateur-transportable-pb0326" },
    ],
    tags: ["ESP32", "C++", "Control", "State machine", "Creo", "3D printing", "Biomedical"],
    highlights: [
      "Goal: hold 37 °C ±0.5 °C, RH ≈ 100 % and pH 7.2–7.4 during 1 h of transport",
      "\"Pick and place\" system: the unit is prepared separately then set down, with connections made by magnetic connectors",
      "ESP32 + SHT35 (T/RH) + SCD40/Nafion (CO₂) + heating resistor + CO₂ solenoid valve architecture",
      "C++ firmware built around a 6-phase finite state machine (INIT → CHECK → BUFFER → MARCHE → PAUSE → ERREUR)",
      "All mechanical parts designed in Creo and made by 3D printing",
    ],
    cover: {
      src: "/projects/incubateur-cellules/prototype.jpg",
      alt: "The incubator prototype open in its case",
      caption: "The prototype in its case",
    },
    gallery: [
      {
        type: "video",
        src: "/projects/incubateur-cellules/demo.mp4",
        alt: "Video of the incubator prototype",
        caption: "The removable biological unit and its case",
        portrait: true,
        ratio: "9/16",
      },
      {
        src: "/projects/incubateur-cellules/cao-valise.jpg",
        alt: "CAD render of the open case with its interior layout",
        caption: "Full CAD assembly in the case",
        entier: true,
      },
      {
        src: "/projects/incubateur-cellules/cao-support.jpg",
        alt: "CAD render of the culture dish holder on the base grid",
        caption: "Culture dish holder, wedges and magnetic connector mounts",
        entier: true,
      },
      {
        src: "/projects/incubateur-cellules/montage.jpg",
        alt: "Open case during assembly: grid, printed mounts and wiring",
        caption: "From model to prototype: assembly in the case",
        entier: true,
      },
      {
        src: "/projects/incubateur-cellules/ecran-en-marche.jpg",
        alt: "Prototype screen in MARCHE (running) mode showing temperature, humidity and CO₂",
        caption: "The screen in MARCHE (running) mode: T = 37.1 °C for a 37.0 °C setpoint",
        entier: true,
      },
    ],
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "How do you carry living cells for an hour-long train ride between Lausanne and Geneva without them dying on the way? Mammalian cells need 37 °C (enzymes degrade at the slightest deviation), humidity close to saturation (≈ 100 % RH, otherwise the medium evaporates and becomes cytotoxic) and a pH between 7.2 and 7.4, controlled by CO₂ injection.",
          "Commercial solutions (Cellbox Go, Phoenix…) are designed for 12 to 72 h journeys. They are oversized and unaffordable for a one-hour trip. Hence the development of a custom prototype.",
        ],
      },
      {
        heading: "Specifications",
        bullets: [
          "Battery life ≥ 1 h with no mains socket",
          "Weight < 10 kg, cabin-case size (45 × 36 × 20 cm)",
          "Biological zone temperature: 37.0 °C ± 0.5 °C",
          "Relative humidity: ≈ 100 %",
          "Medium pH (via CO₂): 7.2 – 7.4",
          "Preparation with no technical training: < 5 min",
        ],
      },
      {
        heading: "How we chose",
        paragraphs: [
          "For each subsystem, several solutions were described and then compared with a weighted decision matrix (scores out of 5, multiplied by each criterion's weight). The table sums up the chosen solution and the best alternative that was rejected.",
        ],
        tableau: {
          entetes: ["Subsystem", "Chosen solution", "Score", "Next alternative"],
          lignes: [
            ["Heating", "Heating resistor", "80", "Peltier module (65)"],
            ["pH control", "CO₂ injection by solenoid valve", "88", "HEPES buffer (44)"],
            ["Humidification", "Passive cellulose sponge", "102", "Microporous membrane (74)"],
            ["T / RH sensor", "SHT35", "77", "DS18B20 (57)"],
            ["CO₂ sensor", "SCD40 + Nafion membrane", "84", "SCD40 alone (67)"],
            ["Microcontroller", "ESP32", "100", "Raspberry Pi (74)"],
            ["Power", "3S 5000 mAh LiPo + BMS", "79", "3S 2200 mAh LiPo (72)"],
          ],
          note: "The maximum scores differ from one matrix to another (different number and weight of criteria): compare them within a row, not between rows.",
        },
      },
      {
        heading: "Chosen architecture",
        paragraphs: [
          "Everything is organised around a removable biological unit fitted inside the case. Each subsystem was chosen with a weighted decision matrix:",
        ],
        bullets: [
          "Heating — RS PRO 8.2 Ω wirewound resistor (50 W rated; at 12 V it dissipates P = U²/R = 144/8.2 ≈ 17.6 W), driven by an IRLZ44N MOSFET",
          "Humidification — passive cellulose sponge (ratio of water available / water needed ≈ 2,500)",
          "pH / CO₂ — CO₂ injection by solenoid valve: CO₂ tank → regulator → SMC V114 solenoid valve (normally closed) → biological zone",
          "Measurement — SHT35 (T+RH, ±0.1 °C) in the biological zone; SCD40 + Nafion membrane (CO₂, ±50 ppm) outside the humid zone",
          "Interface — 2.0\" ST7789 EYESPI screen with progress bars, RGB alert LEDs, buzzer",
          "Power — 2 × 3S 5000 mAh LiPo + BMS, 12 V DC-DC (resistor + valve) and 5 V regulator (ESP32 + sensors). Estimated battery life ≥ 2 h.",
        ],
        apres: [
          "The three power loads (resistor, solenoid valve, fan) are switched the same way: a low-side IRLZ44N MOSFET, a 100 Ω gate resistor and a 1N4007 flyback diode that protects the transistor when an inductive load is switched off.",
        ],
        figure: {
          src: "/projects/incubateur-cellules/schema-actionneurs.png",
          alt: "Actuator schematic: heating resistor, solenoid valve and fan driven by MOSFETs",
          caption: "\"Actionneurs\" (actuators) sheet of the schematic (EasyEDA), in French — click to enlarge",
        },
        figureEnFin: true,
      },
      {
        heading: "What I'm proudest of: the \"pick and place\" system",
        paragraphs: [
          "The biological unit can be prepared in a controlled environment, then simply set down on its base. Magnetic connectors then make all the links automatically: power, sensors and the inner heating system connect in a single move, with no delicate handling.",
        ],
      },
      {
        heading: "Mechanical design",
        paragraphs: [
          "All parts were modelled in Creo and 3D-printed. The perforated base grid allows every mount to be anchored flexibly. The culture dish holder is made of two clip-together parts: the lower part holds the sponges and the SHT35 sensor; the upper part houses the fan and the CO₂ compartment with its Nafion membrane. Angled wedges and side plates hold the plastic container still against the train's vibrations.",
        ],
      },
      {
        heading: "Firmware — finite state machine",
        paragraphs: [
          "Firmware v4.0 (C++, ESP32-DevKitC) organises the behaviour around a 6-phase finite state machine:",
        ],
        figure: {
          src: "/projects/incubateur-cellules/machine-etats.svg",
          alt: "State machine diagram: INIT, CHECK, BUFFER, MARCHE, PAUSE and ERREUR with their transitions",
          caption: "Firmware v4.0.1 state machine — a single GO button drives every transition (diagram in French)",
        },
        bullets: [
          "INIT — variables initialised, 3 s splash screen",
          "CHECK — I²C scan every 2 s, SHT35 and SCD40 check",
          "BUFFER — live T/RH/CO₂ display, waiting for the enclosure to be closed and GO to be pressed",
          "MARCHE (running) — active control: on/off heating resistor, CO₂ injection by solenoid valve, timer",
          "PAUSE — resistor off, fan kept on, back to MARCHE or BUFFER",
          "ERREUR (error) — all actuators off, red LED + buzzer flashing, message on screen",
        ],
      },
      {
        heading: "Results and validation",
        paragraphs: [
          "The prototype was tested with the culture dish empty. Temperature, humidity and CO₂ stay within the target thresholds once running. Error handling works correctly: the actuators switch off and the alarm goes off as soon as a critical threshold is crossed.",
          "Working prototype: display, control and safety features behave as expected in testing. Holding the temperature over a full hour has not yet been measured and logged.",
        ],
        figure: {
          src: "/projects/incubateur-cellules/simulation-temperature-humidite.png",
          alt: "Simulation chart: temperature rising to 37 °C then oscillating around the setpoint, and humidity rising towards 94 %",
          caption: "Numerical simulation (not a measurement): 3-node thermal model with the firmware's real control law. Rises to 36.5 °C in ≈ 17 min, then oscillates between 36.8 and 37.5 °C; humidity above the 85 % threshold after ≈ 24 min, then ≈ 94 % (chart in French).",
        },
        apres: [
          "The simulation uses the firmware's control law (17.6 W resistor in on/off mode, 37.1 °C threshold, reading every 2 s) and a 21 °C ambient temperature. It shows two points to watch: slight overshoots above 37.5 °C, which justify moving to PID control, and measured humidity below 100 % as long as the air is warmer than the water in the sponge.",
          "Next step: log a full hour of real measurements (the firmware already prints T and RH every 2 s on the serial port) to compare the model with reality.",
        ],
      },
      {
        heading: "Difficulties",
        bullets: [
          "Housing — aligning the biological unit with the connectors was hard, hence the adjustable base that leaves some positioning play",
          "Sealing — the container had to be made airtight",
          "Components — an ordering problem",
          "The most demanding part: fitting the whole project into the case, protecting the CO₂ sensor from humidity, and going from a clean 3D model to the real assembly",
        ],
      },
      {
        heading: "What I take away",
        paragraphs: [
          "A real systems project under demanding biomedical conditions: combining precise control, embedded electronics, mechanics and the constraints of living cells, with a prototype that genuinely holds its parameters.",
        ],
      },
      {
        heading: "Outlook",
        bullets: [
          "Remote Wi-Fi monitoring — real-time T, RH, CO₂ on a phone during the journey (native ESP32 Wi-Fi)",
          "PID temperature control to limit oscillations around 37 °C",
          "Logging the parameters for the whole journey to validate cell viability",
          "A Peltier module to cool as well — adapting to other cell types",
          "Steam injection for better humidity control",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  //  BOTTLE COUNTER — personal (Jul. 2026)
  // ─────────────────────────────────────────
  {
    slug: "compteur-bouteilles",
    title: "Bottle counter for a winemaker",
    subtitle:
      "A standalone ESP32 counter that detects each filled and corked bottle by infrared and shows the total live.",
    debut: "2026-07",
    fin: "2026-07",
    periode: "Jul. 2026",
    cadre: "Personal project, made for my brother's wine estate",
    equipe: "Solo",
    statut: "Completed",
    tags: ["ESP32", "C++", "IR sensor", "OLED", "Embedded", "CAD", "3D printing"],
    links: [
      { label: "Code and CAD files (GitHub)", href: "https://github.com/P0770/bottlecounter" },
    ],
    highlights: [
      "Counts filled and corked bottles, directly on the rotary part of the machine",
      "Contactless detection with a reflective infrared sensor",
      "Total shown live on an SSD1306 OLED screen",
      "C++ firmware on an ESP32, simply powered over USB-C",
      "Start/Stop and Reset buttons, status LED, total kept in flash memory",
      "Housing designed in Inventor and 3D-printed, mounted on an off-the-shelf universal clamp",
    ],
    related: ["incubateur-cellules", "scanner-i2c"],
    cover: {
      src: "/projects/compteur-bouteilles/couverture.jpg",
      alt: "Bottle counter fitted on the rotary part of the bottling machine",
      caption: "The counter on the machine, infrared sensor facing the bottles",
    },
    gallery: [
      {
        src: "/projects/compteur-bouteilles/comptage.mp4",
        alt: "Video of the counter counting bottles",
        caption: "The counter at work during bottling",
        type: "video",
        portrait: true,
        ratio: "9/16",
      },
    ],
    sections: [
      {
        heading: "The need",
        paragraphs: [
          "My brother is a winemaker. During bottling, he wanted to know how many bottles had been filled and corked, without counting them by hand.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "On the machine, the bottles first go through a rotary system, then are placed on a conveyor. Counting happens on the rotary part: each time a bottle passes in front of it, the reflective infrared sensor detects it, the ESP32 increments the counter and the screen shows the new total.",
        ],
      },
      {
        heading: "Hardware",
        bullets: [
          "ESP32, programmed in C++",
          "Reflective infrared sensor, to detect bottles without contact",
          "SSD1306 OLED screen, to show the total",
          "Powered through the ESP32's USB-C port",
        ],
      },
      {
        heading: "Interface and wiring",
        paragraphs: [
          "The ESP32 drives a screen, a sensor, two buttons and two LEDs. The buttons are wired to ground and use the ESP32's internal pull-up resistors: a press pulls the input low.",
        ],
        tableau: {
          entetes: ["Part", "ESP32 pin", "Role"],
          lignes: [
            ["SSD1306 OLED screen", "GPIO 2 (SDA), GPIO 15 (SCL)", "Shows the total, I²C bus, address 0x3C"],
            ["Reflective IR sensor", "GPIO 13", "Output goes low when a bottle passes"],
            ["Start/Stop button", "GPIO 22", "Starts or pauses counting"],
            ["Reset button", "GPIO 23", "Resets the total to 0"],
            ["Green LED", "GPIO 19", "Counting active"],
            ["Red LED", "GPIO 21", "Bottle in front of the sensor"],
          ],
        },
        figure: {
          src: "/projects/compteur-bouteilles/cablage.svg",
          alt: "Wiring diagram of the ESP32 with the OLED screen, the infrared sensor, the two buttons and the two LEDs",
          caption: "Wiring of the final version, from the pins in the code (diagram in French)",
        },
      },
      {
        heading: "Counting logic",
        paragraphs: [
          "The program does not count the presence of a bottle but its arrival: a pass is counted on the falling edge of the sensor signal, when it goes from high to low. A bottle standing still in front of the sensor is therefore counted only once.",
          "After each count, further edges are ignored for 150 ms. This debounce delay avoids counting a bottle twice when its edge or label makes the signal flicker. It also sets the maximum rate: 1 / 0.150 s ≈ 6.7 bottles per second, i.e. about 6.7 × 60 ≈ 400 bottles per minute, well above the machine's pace.",
          "The total is saved to the ESP32's flash memory every 10 bottles, on stop and on reset: after a power cut during bottling, the counter restarts from the last saved total, with at most 9 bottles to recount.",
        ],
      },
      {
        heading: "Housing",
        paragraphs: [
          "I designed the housing in Inventor to fit an off-the-shelf universal clamp. It is made of two 3D-printed parts: the housing, which holds the electronics, the screen and the sensor, and a plate screwed onto the clamp. The counter can therefore be fitted to the machine without modifying it.",
        ],
        figure: {
          src: "/projects/compteur-bouteilles/boitier.jpg",
          alt: "3D render of the two housing parts: the 66 × 123 × 26 mm housing and the 71 × 8 × 68 mm mounting plate",
          caption: "The two printed parts: the housing (66 × 123 × 26 mm) and the clamp mounting plate (71 × 8 × 68 mm)",
        },
      },
      {
        heading: "How the code evolved",
        paragraphs: [
          "The project was first written in MicroPython, in four successive versions. The first lays the groundwork: a state machine that ignores detections that are too short, and saving the total. The next ones add the OLED screen, then the LEDs, then the splash screen and the large-digit display. The final version was rewritten in C++ with the Arduino environment. All versions are in the GitHub repo.",
        ],
      },
    ],
  },
  // ─────────────────────────────────────────
  //  BÉBÈNE — personal (Nov 2026, ongoing)
  // ─────────────────────────────────────────
  {
    slug: "bebene",
    vedette: true,
    title: "Bébène — Claude AI companion",
    subtitle:
      "A black pixel-art cat that lives on the Windows desktop, answers questions and acts on the PC: files, Excel, Word, programs.",
    debut: "2026-11",
    enCours: true,
    periode: "Nov. 2026 – ongoing",
    cadre: "Personal project",
    equipe: "Solo",
    statut: "Ongoing",
    tags: ["C#", "WinForms", "WebView2", "Claude Code", "AI", "Pixel art", "Windows"],
    links: [
      { label: "Code and documentation (GitHub)", href: "https://github.com/P0770/bebene" },
      { label: "Download the latest version", href: "https://github.com/P0770/bebene/releases" },
    ],
    highlights: [
      "Windows desktop companion: a pixel-art cat drawn entirely by code, with no image files",
      "Chat window connected to Claude Code, with access to the PC's files and programs",
      "Calendar, exams and appointments taken from .ics calendars and emails, analysed locally",
      "Spell checker in every application, 100% local",
      "Safety lock: the assistant cannot modify its own program",
      "Token savings: AI-written conversation titles and automatic compaction of long conversations",
      "Answers written live, word by word, and a plan prepared before producing any file",
      "Up to three tasks in parallel, each in its own Claude Code session",
      "Projects and conversations in a Ctrl + K panel, organised by drag and drop",
      "Reminders, a daily brief and \"Ask about the selection\" from any application",
      "A C# program compiled with the tools already built into Windows, tested and released automatically by GitHub Actions, updated in one click",
    ],
    related: ["serveur-raspberry", "jeu-amc"],
    cover: {
      src: "/projects/bebene/poses.png",
      alt: "Sheet of Bébène's poses, a black pixel-art cat: walking, sitting, grooming, sleeping",
      caption: "Bébène's poses, all computed by the program",
      entier: true,
    },
    gallery: [
      {
        src: "/projects/bebene/discussion-conv.png",
        alt: "Bébène's chat window with an ongoing conversation",
        caption: "The chat window, opened right above the cat (interface in French)",
        entier: true,
      },
      {
        src: "/projects/bebene/volets.png",
        alt: "Side panels: monthly calendar and list of exams and appointments",
        caption: "The side panels: calendar on the left, exams and appointments on the right",
        entier: true,
      },
      {
        src: "/projects/bebene/attrape.png",
        alt: "Bébène picked up by the scruff and swinging",
        caption: "Picked up by the scruff, he swings like a pendulum",
        entier: true,
      },
      {
        src: "/projects/bebene/reponse-prete.png",
        alt: "Bébène happy, with a bubble and a heart, when the answer is ready",
        caption: "The answer is ready: he waits for the chat to be reopened",
        entier: true,
      },
      {
        src: "/projects/bebene/reglages.png",
        alt: "Bébène's settings window, with collapsible sections",
        caption: "The settings and the setup assistant",
        entier: true,
      },
    ],
    sections: [
      {
        heading: "The idea",
        paragraphs: [
          "I use Claude Code every day, but in a terminal. I wanted an assistant that is always at hand, friendly, and able to act directly on my files and programs. Hence Bébène: a little black cat that wanders around the desktop and opens a chat when you click on him.",
        ],
      },
      {
        heading: "The chat",
        paragraphs: [
          "Clicking the cat or pressing a keyboard shortcut (Alt + Space or Ctrl + Alt + C by default, changeable in the settings) opens the chat right above him. The answer is written live, word by word, while Claude composes it. It works with a Claude Pro or Max subscription, with no API key.",
        ],
        bullets: [
          "Saved conversations, or Flash mode, which leaves no trace",
          "Prepare before producing: for a report, a presentation or code, Bébène first proposes a plan and points out what is missing, then produces the file on request",
          "When a key piece of information is missing, he asks a single question with clickable choices, and the cat scratches his head while waiting",
          "Projects: conversations on the same topic are grouped and archived automatically",
          "Remaining quota shown live (5-hour and weekly limits) with a countdown",
          "Conversation titles summarised by the AI; each project has its own history",
          "Numbered or bulleted lists that continue on their own while typing",
          "Automatic compaction: a long conversation is summarised to use far fewer tokens",
          "File drag and drop, Copy buttons on code and messages",
          "When the answer arrives with the chat closed, the cat jumps for joy until it is read",
          "Paste an image (Ctrl + V): Claude sees it along with the message",
          "Search through the whole history, accent-insensitive, with the matching excerpt highlighted",
          "Right-click on an answer to copy it or download it as .txt",
          "Light or dark mode, resizable window, sharp at every Windows zoom level and suited to small screens",
          "Once the answer arrives, only the answer remains: searches and commands disappear, changed files fit in one folded line",
          "An input box that fits the text: one line to start, it grows with what you type",
        ],
      },
      {
        heading: "Projects and conversations, neatly organised",
        paragraphs: [
          "A single panel, opened with a click or Ctrl + K, brings projects and history together. At the top, a search finds a project by name or a conversation by its content. Projects appear as coloured tiles, with their number of conversations and an hourglass if a task is running there. Below, the conversations of the chosen project are sorted into sub-groups. Everything also works from the keyboard.",
          "To organise, just drag a conversation: onto a sub-group, onto \"No group\", onto a zone that creates a new sub-group, or onto another project's tile. Hovering a tile for a moment opens that project so you can aim at one of its sub-groups, and \"Undo\" puts everything back. A finished project can be archived in the settings: it leaves the menu without losing anything and can come back in one click.",
        ],
        figure: {
          src: "/projects/bebene/palette-glisser.png",
          alt: "Bébène's project panel: a conversation being dragged into the Rédaction sub-group",
          caption: "Dragging a conversation into a sub-group",
        },
      },
      {
        heading: "Several tasks at once",
        paragraphs: [
          "Each conversation keeps its own Claude Code session open: you can start a long task, switch to another conversation and start a second one, up to three in parallel. The history shows the state of each (running, question, approval needed, done) and a Windows notification announces the end. Steps are shown as a checklist, and the cat displays the \"3/5\" counter.",
        ],
        bullets: [
          "When the quota drops below 3%, the task pauses cleanly with a summary of what was done; one click on Continue resumes it later",
          "Simple questions get a quick answer from the Haiku model",
        ],
      },
      {
        heading: "Reminders and daily brief",
        paragraphs: [
          "\"Remind me in 20 minutes to…\": at the set time, a card appears above the cat with a notification, even with the chat closed, and \"10 more minutes\" snoozes it. On the first opening of the day, a card sums up the day's agenda, the week's exams and appointments, reminders, pinned sticky notes and paused tasks.",
          "Anywhere in Windows, select some text and press Ctrl + Alt + Q: Bébène opens with Explain, Translate, Correct and Summarise, or a free question. The clipboard is restored as it was.",
        ],
      },
      {
        heading: "Acting on the PC",
        paragraphs: [
          "Bébène is not just a talking cat: behind him is Claude Code, with access to files and programs. He knows which window was open just before and can look at it (screenshot): \"fix the open document\" is enough. He also fills in forms on web pages open in Chrome. He drives Excel, Word, PowerPoint, Outlook or Inventor through COM, the command line or UI Automation. Before each command, a card asks for the user's approval, except in autonomous mode.",
        ],
      },
      {
        heading: "Sticky notes and reference templates",
        paragraphs: [
          "Sticky notes stick to the desktop, with checkboxes and colours; Bébène can create them to keep a list or a reminder. You can also give him templates (past reports, presentations, code): he builds a style profile from them and follows their form, never their content.",
        ],
      },
      {
        heading: "Calendar, exams and appointments",
        paragraphs: [
          "Two panels frame the chat: the monthly calendar and the list of exams and appointments with their countdown. Events come from calendars (.ics, webcal), from the last six months of emails (Gmail and Outlook) or are added by hand. Emails are analysed on the PC, without going through the AI. A reminder appears the day before at 6 pm and one hour before.",
        ],
      },
      {
        heading: "Spell checker",
        paragraphs: [
          "Wherever you type (browser, Word, Notepad, Teams…), a small red cross appears on each mistake as soon as you pause. A click shows the suggestions and Bébène types the correction. It uses the spell checker built into Windows: everything stays local, and it never activates in a password field or a terminal.",
        ],
      },
      {
        heading: "The pixel-art cat",
        paragraphs: [
          "Bébène is drawn procedurally, in 8-bit pixel art: no image files, every pose is computed. He walks, runs, grooms, stretches with a yawn, scratches, sleeps in four positions and chases the mouse from time to time. An activity setting makes him calmer or more playful, and when he dozes he half-opens a wary eye towards the mouse. Hover over him and he purrs. Pick him up and he swings like a pendulum, while his tail follows a small physics simulation with inertia.",
        ],
      },
      {
        heading: "One-click updates",
        paragraphs: [
          "A badge on Bébène's avatar, at the top left of the chat, compares the installed version with the latest one published on GitHub. Orange: a new version is available, with its release notes. One click is enough: Bébène downloads it, closes, replaces only its program and restarts. The badge turns green, and settings, conversations, calendars and emails are kept.",
        ],
        figure: {
          src: "/projects/bebene/maj-disponible.png",
          alt: "Bébène update window with the release notes and the Update button",
          caption: "A new version is available: one click to update",
        },
      },
      {
        heading: "Security and privacy",
        bullets: [
          "Self-modification lock: a Claude Code hook blocks any write or command targeting Bébène's folder, even in autonomous mode",
          "Emails read and analysed locally; Gmail app password encrypted with DPAPI (readable only by the Windows account)",
          "Calendars and spell checker fully local: only the chat uses tokens",
          "No file produced without consent: Bébène offers a summary or a study sheet instead of creating it, and reads documents without copying them",
          "Official versions protected: only the owner publishes; others copy the code (fork) and suggest changes through pull requests",
        ],
      },
      {
        heading: "Technical side",
        paragraphs: [
          "The program is about 4,900 lines of C# (WinForms, .NET Framework 4), split into nine files, plus 2,100 lines for the chat interface. It is compiled with the csc.exe already present in Windows, with no SDK to install. The interface is an HTML page displayed in WebView2. Memory is shared with Claude Code in a OneDrive folder. On every push to GitHub, GitHub Actions compiles the program, runs about thirty tests and publishes the new version if its number has changed.",
        ],
        tableau: {
          entetes: ["Part", "Choice"],
          lignes: [
            ["Language", "C# 5, WinForms, .NET Framework 4"],
            ["Chat interface", "HTML / CSS / JavaScript in WebView2"],
            ["Brain", "Claude Code (claude -p, stream-json output, live writing)"],
            ["App control", "COM, command line, UI Automation"],
            ["Multitasking", "1 claude -p session kept open per conversation (stream-json input), 3 in parallel"],
            ["History", "1 JSON file per conversation, only changed files are rewritten"],
            ["Organising", "Ctrl+K palette, drag and drop with pointer events, archived projects in a file synced by OneDrive"],
            ["Publishing", "GitHub Actions: build, tests, Release with zip"],
            ["Updates", "GitHub Releases API, only the program is replaced"],
            ["Token savings", "Automatic /compact and titles with the Haiku model"],
          ],
        },
      },
      {
        heading: "What I took away",
        paragraphs: [
          "A complete software project, from animation to deployment: integrating an AI into a real desktop application, interacting with Windows at a low level (keyboard hooks, UI Automation, COM, transparent windows) and thinking about security from the start, since the assistant acts on the PC.",
        ],
      },
    ],
  },
];
