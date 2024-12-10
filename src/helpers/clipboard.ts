export async function clipboard(text: string): Promise<boolean> {
    if ('clipboard' in navigator)
        try { 
            await navigator.clipboard.writeText(text);
            console.info(`Clipboard: Copied '${text}' to clipboard.`);
            return true;
        } 
        catch(err) {
            console.error(`Clipboard: Failed to copy '${text}' to clipboard: ${err}`);
            return false;
        };
    
    let success = false;
    const el = document.createElement('textarea');

    el.textContent = text;
    el.style.opacity = '0';

    document.body.appendChild(el);
    el.select();

    try {
        success = document.execCommand('copy');
        if (success)
            console.info(`Clipboard: Copied '${text}' to clipboard.`);
        else
            console.error(`Clipboard: Failed to copy '${text}' to clipboard: unknown`);
    }
    catch(err) {
        console.error(`Clipboard: Failed to copy '${text}' to clipboard: ${err}`);
    }
    
    document.body.removeChild(el);

    return success;
}