const fs = require("path");
const dir = __dirname;

const src = fs.resolve("./src/token/*.json");
const style_dictionary = require("style-dictionary").extend({
  source: [src],
  platforms: {
    scss: {
      buildPath: "build/scss/",
      transforms: ["attribute/cti", "name/cti/kebab"],
      files: [
        {
          destination: "variable.scss",
          format: "scss/variables",
          options: {
            showFileHeader: true,
            outputReferences: true,
          },
        },
      ],
    },
  },
});
module.exports = style_dictionary;

