module.exports = {
  // Marp設定
  inputDir: '.',
  output: './output',
  engine: '@marp-team/marp-core',
  
  // PowerPoint出力設定
  pptx: {
    // 編集可能なPowerPointファイルを生成
    allowLocalFiles: true,
    // テーマを保持
    theme: 'freud'
  },
  
  // テーマ設定
  themeSet: './themes'
};
