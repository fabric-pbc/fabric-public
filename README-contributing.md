# Contributing

# Building
```bash
git clone git@github.com:fabric-pbc/fabric-public.git
cd fabric-public
npm install
npm run build
npm test
```

# Adding a new package
Create the package file using `npm`.
```bash
NEW_PACKAGE="NAME_GOES_HERE"  # for example, fabric-ajv
npm init -w packages/${NEW_PACKAGE} --scope=@fabric-space
# consider version=0.1.0, license=MIT
```

Use `jq` to improve the contents.
```bash
pushd packages/$NEW_PACKAGE

jq ' .main = "dist/index.js"
    | .types = "dist/index.d.ts"
    | .files = ["dist"]
    | .scripts += {
        "test:int": "vitest",
        "test:unit": "vitest",
        "test": "npm run test:unit",
        "build": "rollup -c",
        "clean": "rimraf dist"
      }' package.json > temp.json

mv temp.json package.json
```

Add dependencies
```bash
# standard
npm install -D typescript rimraf rollup @rollup/plugin-typescript vite vitest vite-tsconfig-paths
# examples
npm i @fabric-space/fabric-async
npm i ajv
```

Copy config files
```bash
cp ../fabric-async/tsconfig.json ./
cp ../fabric-async/rollup.config.mjs ./
cp ../fabric-async/vite.config.ts ./
cp ../fabric-async/vitest.config.ts ./
```

Add README.md
```bash
echo "# ${NEW_PACKAGE}" > README.md
```

Add placeholder source code to test the build. Expect a `dist` folder to appear next to `src`.
```bash
mkdir src
echo "export const foo = () => console.log('foo')" > src/index.ts

cat <<EOT >> src/index.test.ts
import { describe, test, expect } from "vitest"

describe("foo", () => {
  test("bar", () => {
    expect(true).toBe(true)
  })
})
EOT

popd
npm run build -w packages/$NEW_PACKAGE
npm test -w packages/$NEW_PACKAGE
```
