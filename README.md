## Getting started

```
yarn
cd ios && bundle exec pod install
```

## Quick access links

- [Design](https://www.figma.com/design/NN9GlXCoDOAR5AFKrUAmkl/Skillbox?node-id=33-38772&p=f&t=9xAKZ6xi5IAxeLIw-0).
- [OpenAPI Stoplight](https://kode-education.stoplight.io/docs/kode-bank/187a85716cf64-skillbox-core-api).

### Code Gen

**Gen API client**

1. Get OpenAPI specification from Stoplight.

2. replace `scripts/transform-api/input/bff.json`.

3. run `yarn generate-api`.

**Gen components from SVG-icons**

1. Add up icons into `scripts/transform-svg/input` in .svg format.

2. Rename (if you need).

3. Run`yarn transform-icons`.

**Gen components from Plop-template**

1. Install Plop globally `npm install -g plop`

2. Add extension for
   VSCode [Plop File Templates](https://marketplace.visualstudio.com/items?itemName=SamKirkland.plop-templates)

3. In the extension settings, enter 1 space in the `Destination Path` field

4. To create a component using a template, you need:

- Create component directory
- Right-click on the new directory and select `New file from template`
