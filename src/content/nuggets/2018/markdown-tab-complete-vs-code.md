---
title: "Enable tab completion for Markdown Snippets in VS Code"
description: "A quick guide to enabling tab completion for Markdown Snippets in VS Code."
date: "2018-06-24"
---

While working on a frontmatter markdown snippet in VS Code I couldn't understand why tab completion wasn't working. It turns out that [some extensions (including Markdown) don't have snippet tab completion enabled by default](https://github.com/Microsoft/vscode/issues/1617) (you can however type `ctrl+Space` to show available snippets with what you've typed).

# Enable snippet tab completion for all extensions

To enable tab completion in VS Code, open your **User Settings** (`⌘+,` in MacOS, `ctrl+,` in Windows) and add the following JSON:

```json
    "editor.tabCompletion": true,
```

Save your **User Setttings** configuration and your on your way to more efficient snippet usage for Markdown (and other languages)!


<img src="/img/markdown-expand.gif" class="center" title="Markdown Snippet Tab Completion" />