import {
  HOME_PAGE,
  GROCERY_PAGE,
  CLOTHING_PAGE,
  MAKEUP_PAGE,
  BAGS_PAGE,
  FURNITURE_PAGE,
  BOOK_PAGE,
  MEDICINE_PAGE,
  Categories,
  Category,
  RESTAURANT_PAGE,
} from 'site-settings/site-navigation';
const arr = [
  HOME_PAGE,
  GROCERY_PAGE,
  CLOTHING_PAGE,
  MAKEUP_PAGE,
  BAGS_PAGE,
  FURNITURE_PAGE,
  BOOK_PAGE,
  MEDICINE_PAGE,
  MEDICINE_PAGE,
  Categories,
  Category,
];
export function isCategoryPage(pathname) {
  return arr.includes(`/${pathname}`);
}
