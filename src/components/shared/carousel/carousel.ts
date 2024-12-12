import { addTouchEventListener } from "@helpers/touch";
import { CarouselPaginator, type CarouselChangedEvent } from "./carousel-paginator";

class Carousel extends HTMLElement {
    container: HTMLDivElement | null = this.querySelector('[carousel-container]');
    paginator: CarouselPaginator | null = this.querySelector('f-carousel-paginator');

    leftIndicator: HTMLButtonElement | null = this.querySelector('[carousel-indicator-left]');
    rightIndicator: HTMLButtonElement | null = this.querySelector('[carousel-indicator-right]');

    itemCount: number = 0;
    itemIdx: number = 0;

    connectedCallback() {
        if (!this.container) {
            console.info('Carousel(init): item container is missing.');
            return;
        }

        this.itemCount = this.container?.childElementCount;

        this.leftIndicator?.addEventListener('click', () => this.setActiveCarousel(this.itemIdx - 1));
        this.rightIndicator?.addEventListener('click', () => this.setActiveCarousel(this.itemIdx + 1));

        this.addEventListener('carouselChanged', this.carouselChanged as EventListener);
        
        addTouchEventListener(this, action => {
            if (action == 'left') this.setActiveCarousel(this.itemIdx - 1);
            if (action == 'right') this.setActiveCarousel(this.itemIdx + 1);
        });

        this.setActiveCarousel(0);
    }

    setActiveCarousel(index: number) {
        if (index < 0) index = this.itemCount - 1;
        if (index >= this.itemCount) index = 0;
        // if (index == this.itemIdx) return;

        this.paginator?.setAttribute(CarouselPaginator.PAGE_ACTIVE_ATTR, `${index}`);
        this.container?.children[this.itemIdx].classList.remove('active');
        this.container?.children[index].classList.add('active');
        this.itemIdx = index;
    }

    carouselChanged(event: CustomEvent<CarouselChangedEvent>) {
        event.stopPropagation();
        this.setActiveCarousel(event.detail.new);            
    }
}

customElements.define('f-carousel', Carousel);