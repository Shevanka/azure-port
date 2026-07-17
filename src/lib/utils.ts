import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(sectionId: string, offset = 64): void {
  const target = document.getElementById(sectionId)

  if (!target) {
    return
  }

  const targetTop = target.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: 'smooth',
  })
}
