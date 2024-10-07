import { getInitialUnitsList } from "shared/helpers";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useCalcStore = create(
  devtools(
    immer((set, get) => ({
      unitsRating: 0,
      units: getInitialUnitsList("3"),
      getUnit: (unit) => get().units[unit],
      increaseUnitsRating: (rating) =>
        set((state) => {
          state.unitsRating += rating;
        }),
      decreaseUnitsRating: (rating) =>
        set((state) => {
          state.unitsRating -= rating;
        }),
      changeUnit: (unit, updatedUnit) =>
        set((state) => {
          state.units[unit] = { ...updatedUnit };
        }),
    })),
    { name: "rating-calc" }
  )
);

export default useCalcStore;
