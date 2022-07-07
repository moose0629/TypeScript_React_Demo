module.exports = {
  presets: [
    "@babel/typescript",
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-env",
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
    [
      "import",
      {
        libraryName: "lodash",
        libraryDirectory: "",
        camel2DashComponentName: false,
      },
      "lodash",
    ],
  ],
};
