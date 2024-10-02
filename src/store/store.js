import { getInitialUnitsList } from "shared/helpers";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useCalcStore = create(
  devtools(
    immer((set) => ({
      units: getInitialUnitsList("3"),
      changeUnit: (unit, properties) =>
        set((state) => {
          state.units[unit] = { ...state.units[unit], ...properties };
        }),
    })),
    { name: "rating-calc" }
  )
);

export default useCalcStore;
