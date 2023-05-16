import { MusicInt } from "../model";
import {DateTime} from 'luxon';

export const musicPosts: MusicInt[] = [
  {
    name: 'A Thousand Tongues',
    blurb: 'A ',
    about: '',
    startDate: DateTime.fromObject({year: 2023, month: 4, day: 1}),
    performances: [DateTime.fromObject({year: 2023, month: 5, day: 6})],
    flyer: '',
    recordings: []
  },
  {
    name: 'REQUIEM: A Concert for Gun Reform',
    blurb: '',
    about: '',
    startDate: DateTime.fromObject({year: 2022, month: 5, day: 15}),
    performances: [],
    flyer: '',
    recordings: []
  },
  {
    name: 'MASS',
    blurb: '',
    about: '',
    startDate: ,
    performances: [],
    flyer: '',
    recordings: []
  }
]

