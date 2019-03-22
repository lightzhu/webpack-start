
module.exports = {
  plugins: [
      require('autoprefixer')({
          "browsers": [
              "defaults",
              "not ie < 9",
              "last 2 versions",
              "> 1%",
              "iOS 6",
              "last 3 iOS versions"
          ]
      })
  ]
};