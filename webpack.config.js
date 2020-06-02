module.exports = {
  mode: 'development',
  entry: './src/main.ts', //ファイルをまとめる際のエントリーポイント
  output: {
    // path: __dirname,
    path: __dirname + "/doc",
    filename: 'bundle.js' //まとめた結果出力されるファイル名
  },
  resolve: {
    extensions: ['.ts', '.js'] //拡張子がtsだったらTypescirptでコンパイルする
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader' //ts-loader使うよ
    }, {
      test: /\.css/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            url: false
          }
        }
      ]
    }]
  }
}