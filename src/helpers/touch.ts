const TOUCH_EVENT_THRESHOLD = 50;

export type TouchEventAction = 'diagonal' | 'left' | 'right' | 'up' | 'down' | 'click';
export type TouchEventListener = (action: TouchEventAction, touchStartEvent: TouchEvent, touchEndEvent: TouchEvent) => void;

export function addTouchEventListener(el: HTMLElement, cb: TouchEventListener) {
    let startEvent: TouchEvent;

    el.addEventListener('touchstart', e => startEvent = e);
    el.addEventListener('touchend', endEvent => {
        if (!startEvent.changedTouches || !endEvent.changedTouches)
            return;

        const start = startEvent.changedTouches[0];
        const end = endEvent.changedTouches[0];

        if (!start || !end)
            return;

        const horizontalDifference = start.screenX - end.screenX;
        const verticalDifference = start.screenY - end.screenY;
        const horizontal = Math.abs(horizontalDifference) > Math.abs(verticalDifference) && Math.abs(verticalDifference) < TOUCH_EVENT_THRESHOLD;
        const vertical = !horizontal && Math.abs(horizontalDifference) < TOUCH_EVENT_THRESHOLD;

        let action: TouchEventAction = 'diagonal';

        if (horizontal) 
            action = horizontalDifference >= TOUCH_EVENT_THRESHOLD ? 'left' : (horizontalDifference <= -TOUCH_EVENT_THRESHOLD ? 'right' : 'click');
        if (vertical) 
            action = verticalDifference >= TOUCH_EVENT_THRESHOLD ? 'up' : (verticalDifference <= -TOUCH_EVENT_THRESHOLD ? 'down' : 'click');

        cb(action, startEvent, endEvent);
    })
}