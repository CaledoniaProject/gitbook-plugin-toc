# 说明

修改了下 TOC 插件，解决内部跳转的 BUG

修改后，所有的 title 都必须自定义 ID，e.g

```
##### sometitle {#someid}
```

# gitbook-plugin-toc

This plugin will add table of content to the page and provide navigation function inside a page.

Add `<!-- toc -->` to the markdown files. When you build the book, it will insert a table of content where you insert `<!-- toc -->`


`book.json` Config:


```
{
	"plugins": ["toc"],
	"pluginsConfig": {
		"toc": {
			"addClass": true,
			"className": "toc"
		}
	}
}
```

You can add this config to add a HTML ClassName to the TOC `ul` element
