import { getImageData } from "graphics/imageComponent/getImageData";
import PropTypes from "prop-types";
import { Container } from "./ImageComponent.styled";

/**
 * @param {"Центральное здание"|"Шахта"|"Копь"|"Жилища"|"Укрепление"|"Башня"|"Магическая башня"|"Рынок"|"Склады"|"Дипломатический корпус"|"Воскреситель"|"Храм"|"Сокровищница"|"Таверна"|"Темница"|"Гильдия купцов"|"Гильдия шпионов"|"Гильдия антишпионов"|"Экспедиционный корпус"|"Центр колонизации"|"Башня провидцев"|"Башня зеркал" |"Дом вассалов (Носильщики)"|"Казарма (Воины)"|"Конюшня (Кони)"|"Бастион пегасов (Летающие)"|"Стрельбище (Стрелки)"|"Монастырь (Лекари)"|"Орден наёмников (Наемники)"|"Школа магии (Маги)"|"Лаборатория алхимиков"|"Хижина дровосека"|"Каменоломня"|"Мельница"|"Торговая лавка"|"Рудник"|"Прииск"|"Чаша изобилия"|"Склад клана"|"Резервация клана"|"Терраформер"|"porter"|"swordsman"|"cavalier"|"flying"|"archer"|"healer"|"mercenary"|"mage"|"gold"|"wood"|"stone"|"grain"|"iron"|"star"|"perfect"} imageName
 */

const ImageComponent = ({ imageName }) => {
  const imageData = getImageData(imageName);

  if (!imageName || !imageData) return null;

  const { imageUrl, width, height } = imageData;

  return <Container background={imageUrl} height={height} width={width} />;
};

export default ImageComponent;

ImageComponent.propTypes = {
  imageName: PropTypes.string.isRequired,
};
