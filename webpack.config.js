module.exports = {
    entry: "./src/index.jsx",
    module: {
      rules: [
        //...
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          type: "asset/resource",
        },
      ],
    },
    //...
  };