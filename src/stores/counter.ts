
import { create } from 'zustand' //import the zustand library

{/* We create an interface to save the data types that we are going to use*/}
interface CounterState {
  counter: number,
  increment: () => void
  decrement: () => void
}

{/* This function will have all the logic of the state */}
export const useCounterStore = create<CounterState>((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({counter: state.counter - 1}))
})); 