import {PrimeIcons} from "primeng/api";

export interface NavigationHistoryItem {
  url: string;
  name: string;
  icon: string;
  date: Date;
  param: string[];
  color: string;
}

export interface NavigationHistoryState {
  items: NavigationHistoryItem[]
}


export function getNavigationItem(url: string): NavigationHistoryItem {

  const urlArray = url.split('/');
  const date = new Date();

  switch (urlArray[1]) {
    case 'home':
      return {
        url,
        date,
        name: 'Home',
        param: [],
        icon: PrimeIcons.HOME,
        color: '--blue-500'
      }
    case 'books':
      if (urlArray[2] && urlArray[2].length) {
        return {
          url,
          date,
          name: urlArray[2] === 'form' ? 'Create Book' : 'Book View',
          param: [...urlArray[2].slice(2)],
          icon: urlArray[2] === 'form' ? PrimeIcons.PENCIL : PrimeIcons.BOOK,
          color: '--orange-500'
        }
      }
      return {
        url,
        date,
        name: 'Books',
        param: [],
        icon: PrimeIcons.BOOK,
        color: '--orange-800'
      }
    case 'authors':
      if (urlArray[2] && urlArray[2].length) {
        return {
          url,
          date,
          name: 'Author View',
          param: [...urlArray[2].slice(2)],
          icon: PrimeIcons.USER,
          color: '--bluegray-500'
        }
      }
      return {
        url,
        date,
        name: 'Author View',
        param: [],
        icon: PrimeIcons.USERS,
        color: '--bluegray-800'
      }
    default:
      return {
        url,
        date,
        name: 'Unknown',
        param: [],
        icon: PrimeIcons.TIMES,
        color: '--bluegray-800'
      }
  }
}
