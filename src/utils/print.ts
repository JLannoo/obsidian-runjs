import { printStyle } from "../styles/print";

export function logger(...args: any[]) {
	console.log("%cRunJS", printStyle, ...args);
}