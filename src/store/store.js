import {
  getBuildingsList,
  getInitialUnitsList,
  getResourcesList,
} from "shared/helpers";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useCalcStore = create(
  devtools(
    immer((set, get) => ({
      unitsRating: 0,
      resourcesRating: 0,
      units: getInitialUnitsList("3"),
      resources: getResourcesList(),
      buildings: getBuildingsList(),
      getUnit: (unit) => get().units[unit],
      getResource: (resource) => get().resources[resource],
      increaseRating: (type, rating) =>
        set((state) => {
          state[type] += rating;
        }),
      decreaseRating: (type, rating) =>
        set((state) => {
          state[type] -= rating;
        }),
      changeUnit: (unit, updatedUnit) =>
        set((state) => {
          state.units[unit] = { ...state.units[unit], ...(updatedUnit ?? {}) };
        }),
      changeResourceQuantity: (resource, quantity) =>
        set((state) => {
          state.resources[resource] = {
            ...state.resources[resource],
            quantity,
          };
        }),
    })),
    { name: "rating-calc" }
  )
);

export default useCalcStore;
