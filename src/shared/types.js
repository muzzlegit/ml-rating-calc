/**
 * Рівні юнітів
 * @typedef {"1" | "2" | "3" | "4"} unitLevels
 */

/**
 * Типи юнітів
 * @typedef {"porter" | "swordsman"| "cavalier"| "flying"| "archer"| "healer"| "mercenary"| "mage"} unitsTypes
 */

/**
 * Сутність Юніт
 * @typedef {Object} Unit
 * @property {string} id
 * @property {unitsTypes} name
 * @property {unitLevels} level
 * @property {number} rating
 */
/**
 * Сутність Ресурс
 * @typedef {"gold"|"wood"|"grain"|"iron"} resource
 */
/**
 * Варіанти зображень
 * @typedef {"Центральное здание"|"Шахта"|"Копь"|"Жилища"|"Укрепление"|"Башня"|"Магическая башня"|"Рынок"|"Склады"|"Дипломатический корпус"|"Воскреситель"|"Храм"|"Сокровищница"|"Таверна"|"Темница"|"Гильдия купцов"|"Гильдия шпионов"|"Гильдия антишпионов"|"Экспедиционный корпус"|"Центр колонизации"|"Башня провидцев"|"Башня зеркал" |"Дом вассалов (Носильщики)"|"Казарма (Воины)"|"Конюшня (Кони)"|"Бастион пегасов (Летающие)"|"Стрельбище (Стрелки)"|"Монастырь (Лекари)"|"Орден наёмников (Наемники)"|"Школа магии (Маги)"|"Лаборатория алхимиков"|"Хижина дровосека"|"Каменоломня"|"Мельница"|"Торговая лавка"|"Рудник"|"Прииск"|"Чаша изобилия"|"Склад клана"|"Резервация клана"|"Терраформер"|"porter"|"swordsman"|"cavalier"|"flying"|"archer"|"healer"|"mercenary"|"mage"|"gold"|"wood"|"stone"|"grain"|"iron"|"star"|"perfect"} images
 */

/**
 * Сутність Дані зображення
 * @typedef {Object} ImageData
 * @property {url} url
 * @property {width} width
 * @property {height} height
 */
