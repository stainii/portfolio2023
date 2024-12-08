import Splide from '@splidejs/splide';

export function initializeCarouselWebComponent() {
	class CarouselWebComponent extends HTMLElement {

		arrows = true;
		static observedAttributes = ["arrows"];

		connectedCallback() {
			// Create the outer structure
			const section = document.createElement('section');
			section.className = 'splide';

			const track = document.createElement('div');
			track.className = 'splide__track';

			const list = document.createElement('ul');
			list.className = 'splide__list';

			const images = this.querySelectorAll('img');
			images.forEach(img => {
				const li = document.createElement('li');
				li.className = 'splide__slide';
				li.appendChild(img.cloneNode(true));
				list.appendChild(li);
			});

			// Assemble the structure
			track.appendChild(list);
			section.appendChild(track);

			// Replace the content of the custom element
			this.innerHTML = '';
			this.appendChild(section);

			new Splide(
				section,
				{
					arrows: this.arrows,
					autoplay: true,
					rewind: true,
					focus: 'center'
				}).mount();
		}

		attributeChangedCallback(name, oldValue, newValue) {
			if (name === 'arrows') {
				this.arrows = newValue;
			}
		}

	}

	customElements.define('app-carousel', CarouselWebComponent);
}

