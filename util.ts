import { shape, columns } from "./data";

export function print(column: number, isBlank: boolean = false) {
    process.stdout.write(`${(isBlank) ? ' ' : shape}${(column === columns) ? '\n' : ''}`);
}