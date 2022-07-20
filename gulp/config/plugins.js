import replace from "gulp-replace"; //Поиск и замена
import plumber from "gulp-plumber"; // Обработчик ошибок
import notify from "gulp-notify"; // Оповещения об ошибках (подсказках)
import browsersync from "browser-sync"; // Локальный сервер
import newer from 'gulp-newer'; //Проверка обновления картинок

// Экспортируем объект плагинов
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer
}