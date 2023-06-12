import TurndownService from "turndown"

function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
}

export function convertHtmlToArray(html) {
  const turndownService = new TurndownService()

  const container = document.createElement("div")
  container.innerHTML = html

  const entries = container.querySelectorAll("h1, p")

  const result = []
  let currentEntry = null

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]

    if (entry.tagName === "H1") {
      if (currentEntry) {
        result.push(currentEntry)
      }
      currentEntry = { id: generateUniqueId(), date: entry.textContent.trim() }
    } else if (entry.tagName === "P") {
      const contentHtml = entry.innerHTML
      const contentMarkdown = turndownService.turndown(contentHtml)
      currentEntry.content = contentMarkdown
    }
  }

  if (currentEntry) {
    result.push(currentEntry)
  }

  return result
}

// const html = '<h1>2022-05-02</h1>\n<p>Our new Perspective discussing "Chemical Reaction Networks and Opportunities for Machine Learning" appeared in <em>Nature Computational Science</em>!</p>\n<h1>2022-05-06</h1>\n<p>PhD students Wei-Fan, Emmanuel, and Dale join the group. Welcome!</p>';

// const arrayResult = convertHtmlToArray(html);
// console.log(arrayResult);
