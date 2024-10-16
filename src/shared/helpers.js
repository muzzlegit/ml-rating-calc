import canvas from "assets/images/images.webp";
import map from "assets/maps/images.map.json";
import { nanoid } from "nanoid";
import { RANKS, UNITS_NAMES } from "./constants";
import buildingsData from "./data/buildingsData.json";
import ratingData from "./data/ratingData.json";
import resourcesData from "./data/recourcesData.json";
import serversData from "./data/serversData.json";
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

/**
 * генерує список назв будывель
 */

export function getBuildingsNames() {
  return Object.keys(buildingsData);
}

/**
 * генерує стартовий список будівель
 */

export function getBuildingsList() {
  let list = {};
  Object.entries(buildingsData).forEach(([buildingName, levels]) => {
    list[buildingName] = getLevelsList(levels, buildingName);
  });
  return list;

  function getLevelsList(levels, buildingName) {
    let list = {};
    const startRating = buildingName === "Центральное здание" ? 1000000 : 0;
    Object.entries(levels).reduce((acc, [level, resources]) => {
      const rating = getBuildingRating(resources);
      list[level] = { rating: rating + acc + startRating, quantity: 0 };
      return (acc += rating);
    }, 0);
    return list;
  }

  function getBuildingRating(resourcesObj) {
    let rating = 0;
    Object.entries(resourcesObj).forEach(([resource, amount]) => {
      const resourceValue = resourcesData[resource] || 0;
      rating += amount * resourceValue;
    });
    return rating;
  }
}

/**
 * перевіряє на число
 * @param {string|number} value
 * @returns {number} number
 */

export function checkForNumber(value) {
  const number = Number(value);
  return isNaN(number) ? 0 : number;
}

export function getServersOptions() {
  const list = [];
  Object.keys(serversData).forEach((server) => {
    list.push({ label: server, value: server });
  });
  return list;
}

export function getServerCoefficient(server) {
  return serversData[server] || null;
}

export function getServerType(server) {
  switch (server) {
    case "Шахтерский":
      return "miners";
    case "Геройский":
      return "miners";
    case "Экономический":
      return "miners";
    case "Стратегический":
      return "miners";
    case "Оперативный":
      return "miners";
    case "Тактический":
      return "miners";
    case "Боевой":
      return "battle";
    default:
      return "miners";
  }
}

export function getRatingData(currentRating, server) {
  const ratingList = Object.entries(ratingData).map(
    ([rank, { level, rating }]) => ({
      rank,
      level,
      rating: rating[getServerType(server)],
    })
  );
  let rating = ratingList[0];
  if (currentRating > ratingList[ratingList.length - 1]?.rating) {
    rating = ratingList[ratingList.length - 1];
  } else {
    ratingList.forEach((item, index) => {
      const nextIndex = index + 1;
      if (
        ratingList[nextIndex] &&
        currentRating > item.rating &&
        currentRating < ratingList[nextIndex]?.rating
      )
        rating = item;
    });
  }
  return rating;
}

export function getRankRating(rank, server) {
  const currentIndex = RANKS.indexOf(rank);

  const nextRank = rank === "Сюзерен" ? rank : RANKS[currentIndex + 1];

  return ratingData?.[nextRank]?.rating?.[getServerType(server)];
}
