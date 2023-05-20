import { DateTime } from 'luxon'

export interface LogoColorsInt {
  skin: string;
  lens: string;
  hair: string;
  frame: string;
  shirt: string;
  trim: string;
  buttons: string;
}

export interface RectInt {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

export interface BlogInt {
  name: string;
  date: DateTime;
}

export interface CodeInt {
  image: string;
  name: string;
  blurb: string;
  startDate: DateTime;
  github: string;
  deploy: string;
  technologies: string[];
}

export interface MusicInt {
  name: string;
  blurb: string;
  about: string;
  startDate: DateTime;
  performances: DateTime[];
  flyer: string;
  recordings: string[];
}

export interface Fact {
  title: string;
  text: string;
  emoji1: string;
  emoji2: string;
}