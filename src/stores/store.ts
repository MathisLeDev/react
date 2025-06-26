import { create } from "zustand";

interface ICounterState {
	count: number;
	increment: (number?: number) => void;
	decrement: (number?: number) => void;
	reset: () => void;
}

const useCounterStore = create<ICounterState>((set) => ({
	count: 0,
	increment: (value?) => set((state) => ({ count: state.count + value || 1 })),
	decrement: (value?) => set((state) => ({ count: state.count - value || 1 })),
	reset: () => set({ count: 0 }),
}));

export default useCounterStore;
