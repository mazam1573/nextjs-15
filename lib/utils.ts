import { techMap } from "@/constants/techMap";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const  getDevconIcon = (techName: string) => {
  const normalized = techName.replace(/[ .]/g, "").toLocaleLowerCase();

  return techMap[normalized] ? `${techMap[normalized]} colored` : "devicon-javascript-plain";
}