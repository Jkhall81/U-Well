import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import crypto from "crypto";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Was going to use this, but didn't end up needing it
export const striptQuotes = (str: string) => {
  return str.replace(/^['"]|['"]$/g, "");
};

// Animation function
export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 90 : direction === "down" ? -90 : 0,
      opacity: 0,
      x: direction === "left" ? 90 : direction === "right" ? -90 : 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.3, 0.45, 0.65],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export function splitStringUsingRegex(inputString: string): string[] {
  const characters: string[] = [];
  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(inputString)) !== null) {
    characters.push(match[0]);
  }
  return characters;
}

export const generateSecureToken = (length = 48) => {
  return crypto.randomBytes(length).toString("hex");
};
