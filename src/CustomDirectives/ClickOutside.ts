import { DirectiveBinding } from 'vue';

type ElementType = HTMLElement & {
  clickOutside: (e: Event) => void;
};

type DirectiveValue = (e: Event) => void;

export const clickOutside = {
  created: (el: ElementType, binding: DirectiveBinding<DirectiveValue>) => {
    el.clickOutside = (e: Event) => {
      if (e.target instanceof Element) {
        if (!el.contains(e.target) && el !== e.target) {
          binding.value(e);
        }
      }
    };
  },
  mounted: (el: ElementType) => {
    document.addEventListener('click', el.clickOutside, true);
  },
  unmounted: (el: ElementType) => {
    document.removeEventListener('click', el.clickOutside, true);
  },
};
