import "util/types";
import { logMessage } from "utils/index";
import canvas from "../images/images.webp";
import map from "../maps/images.map.json";

/**
 * Генерує дані зображення
 * @param {"Центральное здание"|"Шахта"|"Копь"|"Жилища"|"Укрепление"|"Башня"|"Магическая башня"|"Рынок"|"Склады"|"Дипломатический корпус"|"Воскреситель"|"Храм"|"Сокровищница"|"Таверна"|"Темница"|"Гильдия купцов"|"Гильдия шпионов"|"Гильдия антишпионов"|"Экспедиционный корпус"|"Центр колонизации"|"Башня провидцев"|"Башня зеркал" |"Дом вассалов (Носильщики)"|"Казарма (Воины)"|"Конюшня (Кони)"|"Бастион пегасов (Летающие)"|"Стрельбище (Стрелки)"|"Монастырь (Лекари)"|"Орден наёмников (Наемники)"|"Школа магии (Маги)"|"Лаборатория алхимиков"|"Хижина дровосека"|"Каменоломня"|"Мельница"|"Торговая лавка"|"Рудник"|"Прииск"|"Чаша изобилия"|"Склад клана"|"Резервация клана"|"Терраформер"|"porter"|"swordsman"|"cavalier"|"flying"|"archer"|"healer"|"mercenary"|"mage"|"gold"|"wood"|"stone"|"grain"|"iron"|"star"|"perfect"} imageName
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
