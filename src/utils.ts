import React from "react";

export const followCursor = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const el = document.getElementById('stat-' + target.parentElement!.getAttribute('data-idx'))!;

    el.style.visibility = 'visible';

    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.transform = `translate(${x * 0.5}px, ${y}px)`;
}   

export const resetCursor = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const el = document.getElementById('stat-' + target.parentElement!.getAttribute('data-idx'))!;
    el.style.visibility = 'hidden';
}

export const prettify = (txt: string): string => {
    return txt.split('_').join(' ');
}