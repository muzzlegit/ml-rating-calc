/**
 * Рівні юнітів
 * @typedef {"1" | "2" | "3" | "4"} unitLevels
 */

/**
 * Типи юнітів
 * @typedef {"porter" | "swordsman"| "cavalier"| "flying"| "archer"| "healer"| "mercenary"| "mage"} unitsNypes
 */

/**
 * Сутність Юніт
 * @typedef {Object} Unit
 * @property {string} id
 * @property {unitsNypes} name
 * @property {unitLevels} level
 * @property {number} rating
 */

/**
 * Сутність Дані зображення
 * @typedef {Object} ImageData
 * @property {url} url
 * @property {width} width
 * @property {height} height
 */

/**
 * Сутність Ресурс
 * @typedef {"gold", "wood", "grain", "iron"} resource
 */
