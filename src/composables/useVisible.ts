import { watch, ref } from 'vue';

const isDropdownOpen = ref(false);

const isAnyDropdownOpen  = ref(false);

export function useVisible() {

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;

      if (isDropdownOpen.value) {
        isAnyDropdownOpen.value = true;
      }
    };

    watch(isAnyDropdownOpen, (newValue) => {
      if (newValue && isDropdownOpen.value) {
        isDropdownOpen.value = false;
      }
    });

    return {
      isAnyDropdownOpen,  
      isDropdownOpen,
      toggleDropdown
    };
}

