import type { Pages } from "./types"

function enCategory(category: Pages) {
  if (category === "Мнения") {
    return "opinions"
  } else if (category === "Общество") {
    return "society"
  } else if (category === "Экономика") {
    return "economics"
  } else if (category === "Экология") {
    return "ecology"
  } else if (category === "Архив") {
    return "archive"
  }
}

const feedArticlesParameters = {
  from: 0,
  to: 10,
}

const popularArticlesParameters = {
  from: 7,
  to: 11,
}

const topArticlesParameters = {
  from: 1,
  to: 6,
}

const mArticle = 0
const editorsArticle = 2

export {
  enCategory,
  feedArticlesParameters,
  popularArticlesParameters,
  topArticlesParameters,
  mArticle,
  editorsArticle,
}
