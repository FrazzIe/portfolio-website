export interface CarouselChangedEvent {
    old: number;
    new: number;
}

export class CarouselPaginator extends HTMLElement {
    static readonly PAGE_ACTIVE_ATTR = 'page-active';

    pageIdx: number = 0;

    static get observedAttributes() {
        return [  CarouselPaginator.PAGE_ACTIVE_ATTR ];
    }

    connectedCallback() {
        this.pageIdx = this.getAttributeAsNumber(CarouselPaginator.PAGE_ACTIVE_ATTR);

        this.setPageActiveStyle(this.pageIdx, true);
        this.addClickListeners();
    }

    attributeChangedCallback(attr: string, oldValue: string, newValue: string) {                
        if (attr === CarouselPaginator.PAGE_ACTIVE_ATTR)
            this.changePage(Number(oldValue), Number(newValue), false);
    }

    private addClickListeners() {
        for (let i = 0; i < this.childElementCount; i++)
            this.children[i].addEventListener('click', () => this.changePage(this.pageIdx, i, true));
    }

    private changePage(oldIdx: number, newIdx: number, notify: boolean = true) {
        if (oldIdx === newIdx)
            return;

        this.setPageActiveStyle(this.pageIdx, false);
        this.setPageActiveStyle(newIdx, true);

        this.pageIdx = newIdx;

        notify && this.dispatchEvent(new CustomEvent('carouselChanged', {
            bubbles: true,
            detail: {
                old: oldIdx,
                new: newIdx
            }
        }));            
    }

    private setPageActiveStyle(pageIdx: number, enabled: boolean) {
        const el = this.children[pageIdx];

        if (!el)
            console.info('CarouselPaginator(setItemActive): failed as target el not found');

        if (enabled)
            el?.classList.add('active');
        else
            el?.classList.remove('active');
    }

    private getAttributeAsNumber(attr: string) {
        const attrValue = Number(this.getAttribute(attr));
        return !isNaN(attrValue) ? attrValue : 0;
    }
}

customElements.define('f-carousel-paginator', CarouselPaginator);