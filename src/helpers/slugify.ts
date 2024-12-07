export function slugify(text: string) {
    return encodeURIComponent(text.replace(' ', '-').trim().toLowerCase());
}