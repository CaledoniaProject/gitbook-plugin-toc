# gitbook-plugin-toc-ng

An enhanced version of `gitbook-plugin-toc`. 

Note: All titles must come with a pre-defined ID to prevent hash conflicts, this is a major difference from the original gitbook plugin.

### 1. `book.json` Config:

```
{
	"plugins": ["toc-ng"],
	"pluginsConfig": {
		"toc": {
			"addClass": true,
			"className": "toc"
		}
	}
}
```

### 2. full markdown example

```
<!-- toc -->

# titleA {#titleA}

whatever

## titleB {#titleB}

whatever
```

