---
title: Skateboards2Go
stack: [Vue,Firebase]
slug: skateboards
date:  2021-01-34
description: Next you could create a page component at src/pages/blog/index.js to serve as a listing page for all your blog posts.This should get you started on some basic Markdown functionality in your Gatsby site. You can further customize the frontmatter and the component file to get desired effects!
---

Say we have the following markdown file, `example.md`:

```markdown
## Hello, *World*!
```

And our script, `example.js`, looks as follows:

```js
import fs from 'node:fs'
import {fromMarkdown} from 'mdast-util-from-markdown'

const doc = fs.readFileSync('example.md')

const tree = fromMarkdown(doc)

console.log(tree)
```

Now, running `node example` yields (positional info removed for brevity):

```js
