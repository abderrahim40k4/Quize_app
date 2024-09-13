import { create } from 'zustand'

const defulteConfige = {
    numberOfQustions:10,
    category:{
        index:0,
        name:'',
    },
    type:'',
    stutas:'',
    score:0,
}

const useQuize = create((set) => ({
  confige: {...defulteConfige},
  addLevel: (level) => set((state) => ({ confige: {...state.confige, level:level}})),
  addNumberOfQustions: (count) => set((state) => ({ confige: {...state.confige, numberOfQustions:count}})),
  addLevel: (Level) => set((state) => ({ confige: {...state.confige, level:level}})),
  addLevel: (Level) => set((state) => ({ confige: {...state.confige, level:level}})),
  addLevel: (Level) => set((state) => ({ confige: {...state.confige, level:level}})),
  
}))