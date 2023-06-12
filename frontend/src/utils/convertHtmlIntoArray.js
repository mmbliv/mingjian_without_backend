import TurndownService from "turndown"

function convertHtmlToArray(html) {
  const turndownService = new TurndownService()
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, "text/html")

  const dates = doc.querySelectorAll("h1")
  const contents = doc.querySelectorAll("p")

  const result = []

  for (let i = 0; i < dates.length; i++) {
    const date = dates[i].textContent
    const contentHtml = contents[i].innerHTML
    const contentMarkdown = turndownService.turndown(contentHtml)
    result.push({ date, content: contentMarkdown })
  }

  return result
}

const html =
  '<h1>2022-05-02</h1>\n<p>Our new Perspective discussing "Chemical Reaction Networks and Opportunities for Machine Learning" appeared in <em>Nature Computational Science</em>!</p>\n<h1>2022-05-06</h1>\n<p>PhD students Wei-Fan, Emmanuel, and Dale join the group. Welcome!</p>'

const arrayResult = convertHtmlToArray(html)
console.log(arrayResult)
