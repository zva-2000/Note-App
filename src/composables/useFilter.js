import { ref, computed } from 'vue'

import {  notesArray } from './useNotes.js'

import { searchValue } from './SearcheValue.js'

export function useFilter() {
    
    const notesFilter = computed(() => {
        let array =  notesArray.notes;

        let search = searchValue.search
      
        if (!search) return array;
      
        let valueOfSearch = search.trim().toLowerCase();
        array = array.filter(function (note) {
          return note.title.toLowerCase().includes(valueOfSearch) || 
          note.descr.toLowerCase().includes(valueOfSearch) || 
          note.date.toLowerCase().includes(valueOfSearch) || 
          note.teg.some((teg) => teg.toLowerCase().includes(valueOfSearch));
        });
      
        return array;
    });

    const mode = Object.freeze({
        GRID: true,
        LIST: false,
    })
    
    let viewMode = ref(mode.GRID); 

    function changeGrid() {
      if(mode.GRID) {
       mode.LIST
      }
      console.log('dfjvndkljfv')
    //   } else if (mode.LIST) {
    //     return mode.GRID
    //   }
    }
    
      
return { notesFilter, changeGrid, mode };
    
}