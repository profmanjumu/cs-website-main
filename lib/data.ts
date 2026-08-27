import React from 'react'
import { FaJava } from 'react-icons/fa'
import { SiCplusplus } from 'react-icons/si'

export type ClassOption = {
  name: string
  icon: React.ReactElement
  href: string
  // SDSU CS courses are 'SDSU'; outreach / Extended Studies are 'SRS'.
  org: 'SDSU' | 'SRS'
  // When true, the href points at an external page.
  external?: boolean
}

export const classOptions: ClassOption[] = [
  {
    name: 'CS 210',
    icon: React.createElement(SiCplusplus, { size: '2em' }),
    href: '/cs210',
    org: 'SDSU',
  },
  {
    name: 'CS 250',
    icon: React.createElement(FaJava, { size: '2em' }),
    href: '/cs250',
    org: 'SDSU',
  },
  {
    name: 'CS 460',
    icon: React.createElement(FaJava, { size: '2em' }),
    href: '/cs460',
    org: 'SDSU',
  },
  {
    name: 'CS 577',
    icon: React.createElement(FaJava, { size: '2em' }),
    href: '/cs577',
    org: 'SDSU',
  },
  {
    name: 'Lego Robotics',
    icon: React.createElement(FaJava, { size: '2em' }),
    href: 'https://extendedstudies.ucsd.edu/courses/elementary-school-introduction-to-robotics-using-lego-mindstorms-cse-90175',
    org: 'SRS',
    external: true,
  },
  {
    name: '2D & 3D Game Programming',
    icon: React.createElement(FaJava, { size: '2em' }),
    href: 'https://extendedstudies.ucsd.edu/sally-ride-science/k12-students/sally-ride-science-academy/middle-school',
    org: 'SRS',
    external: true,
  },
]

/** Tab / display order on the SDSU hub — ascending course number. */
export const sdsuTabOrder = ['CS 210', 'CS 250', 'CS 460', 'CS 577'] as const

/**
 * When false, outreach UI is hidden from nav, home, hubs, and About.
 * Data + `/ucsd` route remain in the codebase for later.
 */
export const showUcsdUi = false

/** Display titles + schedule lines for course rows (shared by hubs). */
export const courseMeta: Record<
  string,
  { title: string; meta: string; image?: string; description?: string }
> = {
  'CS 210': { title: 'Data Structures', meta: 'Tu / Th \u00b7 Fall 2026' },
  'CS 250': {
    title: 'Coming soon',
    meta: 'Schedule TBD',
    description: 'Course details coming soon. See CONTENT_TODO.md.',
  },
  'CS 460': { title: 'Algorithms', meta: 'Tu / Th \u00b7 Fall 2026' },
  'CS 577': { title: 'Data Science', meta: 'Mon-Fri \u00b7 Summer 2026' },
  'Lego Robotics': {
    title: 'Upper Elementary School',
    meta: 'Jul 20 \u2013 Jul 24 \u00b7 Extended Studies',
    image: '/ManjuTeach.jpg',
    description:
      'Students build robots using Lego Mindstorms and explore sensors, motors, and coding — including an app joystick for battle bots.',
  },
  '2D & 3D Game Programming': {
    title: 'Middle School',
    meta: 'Jul 6 \u2013 Jul 10 \u00b7 Summer Academy',
    image: '/KidsLearn.jpg',
    description:
      'Hands-on robotics and programming camps that introduce middle-school students to STEM in a fun, project-based environment.',
  },
}

/**
 * Discord server widget IDs keyed by class slug.
 * Values restored from an earlier site build — verify in Discord server settings.
 * Leave empty string to show the placeholder panel (see CONTENT_TODO.md).
 */
export const discordWidgetIds: Record<string, string> = {
  cs210: '1183649805415743528',
  cs250: '',
  cs460: '1183649881026461747',
  cs577: '1328631404145152092',
}

/** Home hub description copy (relocated from the previous hero strip). */
export const homeDescription = {
  deck: 'A classroom where assignments have side quests.',
  body: [
    'Every course here is built around one idea: the best way to understand a system is to build one. No toy problems. Students design, argue, implement, and defend real solutions to real constraints and walk away with something to show for it.',
    "Whether it's tracing Dijkstra's algorithm on a weighted graph, benchmarking data structures head-to-head, or finding a story buried in the dataset the work is the learning.",
  ],
} as const

/** Outreach hub GitHub Pages embed URLs — fill in via CONTENT_TODO.md */
export const ucsdEmbedUrls: { label: string; url: string }[] = [
  // { label: 'Program overview', url: 'https://...' },
]

export const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  // SDSU hub
  // Kept in code — gated by showUcsdUi in the Nav component
  {
    label: 'Outreach',
    href: '/ucsd',
    ucsdOnly: true,
  },
  {
    label: 'About Me',
    href: '/about',
  },
]

export const cppTopicLinks = [
  {
    id: '1SGbvlXdCXVSyO1DMaBTA9HCudO0NLD9p',
    name: 'Linked Lists, Stacks & Queues',
  },
  { id: '1eW9qEb50Vyp-h8bm1uS-P2gAY8AV7y1i', name: 'Recursion' },
  { id: '1YNvrGpPZ6HkMqwwKikzjt0PLLr7W8q3K', name: 'Sorting' },
  { id: '1t0IiAYoG_2NPJGR9Diz4pGqNa61RNpla', name: 'Hashtables' },
  { id: '1KDqgM3qeXxU4yUAjwYfdLbFLT4-vnTAW', name: 'Graphs' },
  { id: '1e4DcT-BRsoxs5mMbVwXqaeaSh6wS7MrM', name: 'Trees' },
  {
    id: '1w8zzV0lOLwuGhbAkooROtmRr7a9fxZQV',
    name: 'Priority Queues & Heaps',
  },
  {
    id: '1_fKkMpWOxmaCHGbfgU_2bM2oBNzCfydX',
    name: 'Analysis Of algorithms',
  },
  { id: '1EPJSfTaOROllsDtvrgN4WJCpw_mzTEtO', name: 'Resources' },
]

export const ulVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const liVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
}

type ExternalLinks = {
  [key: string]: {
    name: string
    href: string
  }[]
}

export const externalLinks460: ExternalLinks = {
  test: [
    {
      name: 'test',
      href: 'testLink',
    },
  ],
}

export const externalLinks210: ExternalLinks = {
  'Linked Lists, Stacks & Queues': [
    {
      name: 'Linked List Cheat Sheet',
      href: 'https://www.techinterviewhandbook.org/algorithms/linked-list/',
    },
    {
      name: 'Google Dev Guide',
      href: 'https://techdevguide.withgoogle.com/resources/topics/linked-lists/?no-filter=true',
    },
    {
      name: 'Linked Lists',
      href: 'https://www.geeksforgeeks.org/data-structures/linked-list/',
    },
    {
      name: 'Sample Lab',
      href: 'https://www.labs.cs.uregina.ca/115/11-linked-lists/',
    },
  ],

  Recursion: [
    {
      name: 'Recursion',
      href: 'https://users.cs.utah.edu/~germain/PPS/Topics/recursion.html',
    },
    {
      name: 'Recursion and Stack',
      href: 'https://javascript.info/recursion',
    },
    {
      name: 'Geeks for Geeks',
      href: 'https://www.geeksforgeeks.org/recursive-functions/',
    },
    {
      name: 'Sample Lab',
      href: 'https://www.cs.mtsu.edu/~cs2170/manual/lab9/lab9.html',
    },
  ],

  Sorting: [
    {
      name: 'Quick Review Videos',
      href: 'https://www.youtube.com/watch?v=4VqmGXwpLqc&list=PL9xmBV_5YoZOZSbGAXAPIq1BeUf4j20pl',
    },
    {
      name: 'Sorting Visualizer',
      href: 'https://visualgo.net/en/sorting',
    },
    {
      name: 'Sorting Visualizer 2',
      href: 'https://www.sortvisualizer.com/',
    },
    {
      name: 'Sorting in C++',
      href: 'https://www.softwaretestinghelp.com/sorting-techniques-in-cpp/',
    },
  ],
  Hashtables: [
    {
      name: 'Hashtables in C++',
      href: 'https://www.digitalocean.com/community/tutorials/hash-table-in-c-plus-plus',
    },
    {
      name: 'Data Structures Handbook',
      href: 'https://www.thedshandbook.com/hash-tables/',
    },
    {
      name: 'Quick Review',
      href: 'https://www.youtube.com/watch?v=knV86FlSXJ8',
    },
  ],
  Graphs: [
    {
      name: 'Intro to Graphs',
      href: 'https://inst.eecs.berkeley.edu/~cs61bl/r//cur/graphs/intro.html?topic=lab23.topic&step=2&course=',
    },
    {
      name: 'Minimum Spanning Trees',
      href: 'https://algs4.cs.princeton.edu/43mst//',
    },
    {
      name: 'Single Source Shortest Path Algorithms',
      href: 'https://www.cs.cmu.edu/afs/cs.cmu.edu/academic/class/15850-f18/www/scribes/lecture04.pdf',
    },
    {
      name: 'Graph Traversals',
      href: 'https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/GraphTraversal.html',
    },
    {
      name: 'Graph Theory : Mathematics',
      href: 'https://www.youtube.com/watch?v=sWsXBY19o8I',
    },
    {
      name: 'Graph Visualizations',
      href: 'https://visualgo.net/en',
    },
  ],
  Trees: [
    {
      name: 'W3Schools',
      href: 'https://www.w3schools.com/dsa/dsa_theory_trees.php',
    },
    {
      name: 'Binary Trees : Geeks for Geeks',
      href: 'https://www.geeksforgeeks.org/binary-tree-data-structure/',
    },
    {
      name: 'Notes on BST',
      href: 'http://cslibrary.stanford.edu/110/BinaryTrees.html',
    },
    {
      name: 'AVL Insertions',
      href: 'https://www.youtube.com/watch?v=JPI-DPizQYk',
    },
    {
      name: 'AVL Notes',
      href: 'https://www.cs.cmu.edu/~15122/handouts/lectures/16-avl.pdf',
    },
    {
      name: 'RB Trees Notes',
      href: 'https://pages.cs.wisc.edu/~cs400/readings/Red-Black-Trees/',
    },
    {
      name: 'Tree Traversals',
      href: 'https://faculty.cs.niu.edu/~mcmahon/CS241/Notes/Data_Structures/binary_tree_traversals.html',
    },
  ],
  'Priority Queues & Heaps': [
    {
      name: 'C++ Priority Queue',
      href: 'https://cplusplus.com/reference/queue/priority_queue/',
    },
    {
      name: 'DS Handbook',
      href: 'https://www.thedshandbook.com/heaps/',
    },
    {
      name: 'Notes on Heaps',
      href: 'https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture4.pdf',
    },
    {
      name: 'Notes on Priority Queues',
      href: 'https://www.cs.princeton.edu/courses/archive/spr15/cos226/lectures/24PriorityQueues.pdf',
    },
  ],
  'Analysis Of algorithms': [
    {
      name: 'Big O Exercises',
      href: 'https://www.cs.auckland.ac.nz/courses/compsci220s1t/lectures/lecturenotes/GG-lectures/220exercises1.pdf',
    },
    {
      name: 'MIT Lecture Notes',
      href: 'https://web.mit.edu/16.070/www/lecture/big_o.pdf',
    },
    {
      name: 'Big O Cheatsheet',
      href: 'https://flexiple.com/algorithms/big-o-notation-cheat-sheet',
    },
    {
      name: 'Big O Calc',
      href: 'https://www.bigocalc.com/',
    },
  ],
}
