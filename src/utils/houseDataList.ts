import { CardData, House } from 'common/types';
import { joinStringArrayByCharacter } from 'utils/string';

import nameIcon from 'assets/name.svg';
import regionIcon from 'assets/region.svg';
import coatIcon from 'assets/coat.svg';
import wordsIcon from 'assets/words.svg';
import titlesIcon from 'assets/titles.svg';
import seatsIcon from 'assets/seats.svg';
import deadIcon from 'assets/dead.svg';
import overlordIcon from 'assets/overlord.svg';
import cadetIcon from 'assets/number.svg';

export const houseDataList = (houseData: House): CardData[] => [
  {
    name: 'Name of the House',
    value: houseData.name,
    icon: nameIcon,
  },
  {
    name: 'Region',
    value: houseData.region,
    icon: regionIcon,
  },
  {
    name: 'Coat of Arms',
    value: houseData.coatOfArms,
    icon: coatIcon,
  },
  {
    name: 'Words',
    value: houseData.words,
    icon: wordsIcon,
  },
  {
    name: 'Titles',
    value: joinStringArrayByCharacter(houseData.titles, ', '),
    icon: titlesIcon,
  },
  {
    name: 'Seats',
    value: joinStringArrayByCharacter(houseData.seats, ', '),
    icon: seatsIcon,
  },
  {
    name: 'Has died out',
    value: houseData.diedOut ? 'Yes' : 'No',
    icon: deadIcon,
  },
  {
    name: 'Has overlord',
    value: houseData.overlord ? 'Yes' : 'No',
    icon: overlordIcon,
  },
  {
    name: 'Number of Cadet Branches',
    value: houseData.cadetBranches.length,
    icon: cadetIcon,
  },
];
