import fs from 'fs';
import path from 'path';
import includerjs from '../src/includerjs.js';

describe('includerjs', () => {
    it('should replace @include statements with the included file contents', () => {
        const input = `
_____
This is some text.

@include include1.md

More text.

@include include2.md
_____
`;
        const basePath = path.join(path.dirname(new URL(import.meta.url).pathname), 'fixtures');
        const output = includerjs(input, { basePath });

        console.log(output)
        const expectedOutput = fs.readFileSync(path.join(basePath, 'expected.md'), 'utf8');
        expect(output).toEqual(expectedOutput);
    });
});
