module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3.8,
        debug: true,
        targets: "> 0.1%, not dead",
      },
    ],
  ],
};
