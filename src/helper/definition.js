const era = {
  reiwa: 2018,
  heisei: 1988,
  showa: 1925
}

/**
 * 年の選択肢を取得
 * 
 * @param {object} yearOptions -  選択リスト 
 */
const createYearOptions = (yearOptions) => {
  for(let i = 1980; i < 2025; i++ ) {
    switch (true) {
      case i > era.reiwa:
        yearOptions.push({year: i, text: `${i}年（令和${i - era.reiwa}）`});
        break;
      case i > era.heisei && i <= era.reiwa: 
        yearOptions.push({year: i, text: `${i}年（平成${i - era.heisei}）`});
        break;
      default:
        yearOptions.push({year: i, text: `${i}年（昭和${i - era.showa}）`});
        break;
    }
  }
  return yearOptions;
}

export default { createYearOptions }
