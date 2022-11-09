import fs from 'fs';

export const rows: number = 100;
export const columns: number = 300;
export const framesPerSecond: number = 5;
export const shape: string = '*';
export const frames: Record<string, number[][]>[] = JSON.parse(fs.readFileSync('frames/jjk-ed.json', {encoding: 'utf-8'}));