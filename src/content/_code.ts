import { CodeInt } from "../model";

import { DateTime } from 'luxon';

import sudokuImg from '../images/code_images/sudoku.png'
import gigTreeImg from '../images/code_images/gig-tree-img.png'
import MNWPImg from '../images/code_images/MN-womens-press-themes.png'

/* 
template code:
{
  name: '',
  blurb: '',
  startDate: DateTime.fromObject({year: }),
  github: '',
  deploy: '',
  technologies: [],
}
*/

export const codePosts: CodeInt[] = [
  {
    image: sudokuImg,
    name: 'sudoku',
    blurb: 'I built this frontend sudoku game to learn typescript and redux-toolkit. Future additions will include a timer, better keyboard controls, and (possibly) full-stack integration',
    startDate: DateTime.fromObject({ year: 2023, month: 2, day: 24 }),
    github: 'https://github.com/pdebuque/sudoku',
    deploy: 'https://sudoku-ts.herokuapp.com/',
    technologies: [
      'html/css/js',
      'react',
      'typescript',
      'redux-toolkit',
    ]
  },
  {
    image: gigTreeImg,
    name: 'gig tree',
    blurb: 'Project creation and management tool for freelance musicians. Solo project from Prime Digital Academy.',
    startDate: DateTime.fromObject({ year: 2022, month: 11, day: 30 }),
    github: 'https://github.com/pdebuque/Gig-Tree',
    deploy: 'https://gig-tree.herokuapp.com/',
    technologies: [
      'html/css/js',
      'react',
      'redux',
      'materialUI',
      'postgresql',
      'nodejs',
      'expressjs'
    ],
  },
  {
    image: MNWPImg,
    name: 'MN Women\'s Press Content Manager',
    blurb: 'Content Manager for MN Women\s Press, a feminist monthly magazine. Handles creation, deletion, editing, and archiving of publication\'s many contacts, stories, and themes. Capstone group project for Prime Digital Academy.',
    startDate: DateTime.fromObject({ year: 2023, month: 1, day: 1 }),
    github: 'https://github.com/pdebuque/MN-Womens-Press-CM',
    deploy: 'https://github.com/pdebuque/MN-Womens-Press-CM',
    technologies: [
      'html/css/js',
      'react',
      'redux',
      'materialUI',
      'postgresql',
      'nodejs',
      'expressjs'
    ]
  }
]