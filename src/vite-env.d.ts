/// <reference types="vite/client" />
declare module "solarlunar" { export function solar2lunar(y:number,m:number,d:number): {lYear:number;lMonth:number;lDay:number;isLeap:boolean;gzDay:string;gzMonth:string;gzYear:string}; }
