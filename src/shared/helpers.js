import canvas from "assets/images/images.webp";
import map from "assets/maps/images.map.json";
import { nanoid } from "nanoid";
import { UNITS_NAMES } from "./constants";
import resourcesData from "./data/recourcesData.json";
import unitsData from "./data/unitsData.json";
import "./types.js";

/**
 * Генерує дані зображення
 * @param {string} imageName
 * @returns {ImageData|null}
 */

export const getImageData = (imageName) => {
  const imageData = map?.[imageName];
  if (
    !imageData ||
    !imageData?.coordinate ||
    !imageData?.width ||
    !imageData?.height
  ) {
    logMessage("warn", "Не вдалося знайти дані зображення");
    return null;
  }
  const { coordinate, width, height } = imageData;

  const imageUrl = `url(${canvas}) ${coordinate}`;

  return { imageUrl, width, height };
};

/**
 * Генерує список юнітів для стору
 * @param {unitLevels} unitLevel
 * @returns {object|null} unitsList
 */

export function getInitialUnitsList(unitLevel) {
  let list = {};
  UNITS_NAMES.forEach((unit) => {
    list[unit] = { ...getUnitData(unit, unitLevel), quantity: 0 };
  });
  return list;
}

/**
 * Генерує дані зображення
 * @param {unitsTypes} unitName
 * @param {unitLevels} unitLevel
 * @returns {Unit} Unit
 */

export function getUnitData(unitName, unitLevel) {
  const data = unitsData?.[unitName]?.[unitLevel];
  if (!data) return null;
  let rating = 0;

  Object.entries(data).forEach(([resource, amount]) => {
    const coefficient = getResourceCoefficient(resource);
    if (coefficient) {
      rating += amount * coefficient;
    }
  });

  return { id: getID(), name: unitName, level: unitLevel, rating };
}

/**
 * Оновлення об'єкту через глибоке копіювання
 * @param {Object|Array} object
 * @returns {*} copy
 */

export function deepCopy(object) {
  if (typeof object !== "object" || !object) return object;
  let copy;
  if (Array.isArray(object)) {
    copy = [];
    for (let i = 0; i < object.length; i++) {
      copy[i] = deepCopy(object[i]);
    }
  } else {
    copy = {};
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        copy[key] = deepCopy(object[key]);
      }
    }
  }

  return copy;
}

/**
 * Генератор id
 * @returns {string} id
 */

export function getID() {
  return nanoid(5);
}

/**
 * ЛОГУВАННЯ В КОНСОЛІ
 * @param {"error" | "warn" | "info"} type
 * @param {string} message
 * @param {any} body
 */

export function logMessage(type = "info", message, body) {
  const colors = {
    error: "red",
    warn: "orange",
    info: "wheat",
  };
  console.log(
    `%c${message}`,
    `background: ${colors[type]}; color: black; font-weight:700; padding: 0 4px;`,
    body ?? " "
  );
}

/**
 * повертає коефіцієнт ресурсу
 * @param {resource} resource
 * @returns {number|null} coefficient
 */

export function getResourceCoefficient(resource) {
  const coefficient = resourcesData?.[resource];
  return coefficient ?? null;
}

/**
 * генерує початковий список ресурсів
 */

export function getResourcesList() {
  const list = {};
  Object.entries(resourcesData).forEach(([resource, coefficient]) => {
    list[resource] = { quantity: 0, coefficient };
  });
  return list;
}
