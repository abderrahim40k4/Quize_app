import { create } from 'zustand';

const defaultConfig = {
    numberOfQuestions: 10,
    category: {
        index: 0,
        name: '',
    },
    type: '',
    status: '',
    score: 0,
};

const useQuiz = create((set) => ({
    config: { ...defaultConfig },
    addLevel: (level) => set((state) => ({ config: { ...state.config, level: level } })),
    addNumberOfQuestions: (count) => set((state) => ({ config: { ...state.config, numberOfQuestions: count } })),
    addCategory: (id, name) => set((state) => ({ config: { ...state.config, category: { id: id, name: name } } })),
    addStatus: (status) => set((state) => ({ config: { ...state.config, status: status } })),
    addType: (type) => set((state) => ({ config: { ...state.config, type: type } })),
    addScore: (score) => set((state) => ({ config: { ...state.config, score: score } })),
}));

export default useQuiz;
