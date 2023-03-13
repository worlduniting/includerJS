# IncluderJS

A bare bones module for including files in other files.

## Use

@include "file"

## About

IncluderJS's entry is a single file, `srcDoc`. All includes are processed from the beginning to the end of the document. Contents from each included file are spliced into the source document. All includes must be in the the `srceDir`.

* IncluderJS is built using ES Modules

`your-library.js`
```javascript
import includerJS from 'includerJS'

const srcDir = "path/to/files/"
const srcDoc = "initialFile"

const processedDoc = includerJS(srcDoc, { basePath: srcDir });
```

`initial-file.md` (using markdown as the example, but you can use anything)
```
This is some text content in your srcDoc.

@include "another-file.md"
```

`another-file.md`
```
This is some other content that will be spliced in and replace the include statement
```

'resulting-file.md'
```
This is some text content in your srcDoc.

This is some other content that will be spliced in and replace the include statement
