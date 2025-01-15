import React from 'react'
import { FaDiscord, FaJava } from 'react-icons/fa'
import { SiCplusplus } from 'react-icons/si'

export const classOptions = [
  {
    name: 'CS 210',
    icon: React.createElement(SiCplusplus, { size: '2em' }),
    href: '/cs210',
  },
  {
    name: 'CS 460',
    icon: React.createElement(FaJava, { size: '2em' }),
    href: '/cs460',
  },
]

export const people = [
  {
    name: 'Manju',
    position: 'Instructor',
    image: '/Manju.jpeg',
    portfolioLink: '/about',
    email: 'mmuralidharanpriya@sdsu.edu',
    discordName: '@profmanjumu',
    officeHours: 'M: 11-1PM , Th: 3:30-5PM',
  },
  {
    name: 'Marcus',
    class: 'CS 460',
    position: 'TA',
    image: '/Marcus.jpg',
    email: 'mchen6466@sdsu.edu',
    portfolioLink: 'https://github.com/marcuschen001',
  },
  {
    name: 'Jaydeep',
    class: 'CS 210',
    position: 'TA',
    image: '/Jaydeep.jpg',
    email: 'jpustake1248@sdsu.edu',
    portfolioLink: 'https://www.linkedin.com/in/jaydeep-pustake//',
  },
  {
    name: 'Alex',
    class: 'CS 210',
    position: 'TA',
    image: '/Alex.webp',
    email: 'astraight9409@sdsu.edu',
    portfolioLink: 'https://alex-straight.vercel.app/',
  },
  {
    name: 'Halie',
    class: 'CS 210',
    position: 'TA',
    image: '/Halie.JPG',
    email: 'hdo1153@sdsu.edu',
    portfolioLink: 'https://github.com/ayuyamo',
  },
  {
    name: 'Apeksha',
    class: 'CS 210',
    position: 'TA',
    image: '',
    email: 'ajadhav7472@sdsu.edu',
    portfolioLink: 'https://apekshajadhav.vercel.app/',
  },
]
export const people3D = [
  {
    name: 'Brandon',
    image: '/Brandon.jpeg',
    portfolioLink: 'https://www.linkedin.com/in/brandongarate177/',
    email: 'brandongarate177@gmail.com',
  },
  {
    name: 'Robert',
    image: '/Robert.jpg',
    portfolioLink: 'https://www.linkedin.com/in/robert-ashe-a55b211a7/',
    email: 'rashe7414@sdsu.edu',
  },
]
export const peopleCWP = [
  {
    name: 'Alex',
    image: '/Alex.webp',
    email: 'astraight9409@sdsu.edu',
    portfolioLink: 'https://alex-straight.vercel.app/',
  },
  {
    name: 'Jaydeep',
    image: '/Jaydeep.jpg',
    email: 'jpustake1248@sdsu.edu',
    portfolioLink: 'https://www.linkedin.com/in/jaydeep-pustake//',
  },
  {
    name: 'Jaxon',
    image: '',
    email: 'jhill4135@sdsu.edu',
  },
]
export const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Me',
    href: '/about',
  },
  {
    label: 'Calendar',
    href: '/calendar',
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
