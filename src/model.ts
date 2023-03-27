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
  name: string;
  blurb: string;
  startDate: DateTime;
  github: string;
  deploy: string;
  technologies: string[];
}