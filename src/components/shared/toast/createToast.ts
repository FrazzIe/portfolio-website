export type ToastStyle = 'success' | 'warning' | 'error' | 'info';

export interface ToastOptions {
    message: string;
    style: ToastStyle;
}

const toaster = document.getElementById('toaster');
const styles: ToastStyle[] = [ 'success', 'warning', 'error', 'info' ];
const templates = styles.reduce((templates, style) => {
    const template = document.getElementById(`toaster-${style}`) as HTMLTemplateElement;
    const toast = template.content.firstElementChild as HTMLElement;

    templates[style] = toast;

    return templates;
}, {} as Record<ToastStyle, HTMLElement>);

async function waitForAnimations(el: Element, provider: () => void) {
    await Promise.allSettled(el.getAnimations().map(a => a.finished));

    provider();

    return;
}

export function createToast(message: string, style: ToastStyle = 'info') {
    const toast = templates[style].cloneNode(true) as HTMLElement;
    const text = document.createTextNode(message);
    
    toast.appendChild(text);
    toaster?.appendChild(toast);

    return waitForAnimations(toast, () => toaster?.removeChild(toast));
}

// Object.keys(templates).forEach(style => {
//     createToast(`Hello from ${style}`, style as ToastStyle);
// });