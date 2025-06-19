const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// 編集可能なPowerPointファイルを生成する関数
function generateEditablePPTX(inputFile, outputFile) {
  console.log('🎯 編集可能なPowerPointファイルを生成中...');
  
  // Marpコマンドを実行
  const command = `npx @marp-team/marp-cli "${inputFile}" --pptx --output "${outputFile}" --allow-local-files --theme-set ./themes`;
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error('❌ エラーが発生しました:', error);
      return;
    }
    
    console.log('✅ PowerPointファイルが生成されました:', outputFile);
    console.log('📝 このファイルはPowerPointで編集可能です');
    
    // ファイルサイズを確認
    if (fs.existsSync(outputFile)) {
      const stats = fs.statSync(outputFile);
      console.log(`📊 ファイルサイズ: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
    }
  });
}

// 実行
const inputFile = '20250619_AI駆動開発による要件定義の革新.md';
const outputFile = '20250619_AI駆動開発による要件定義の革新_編集可能.pptx';

generateEditablePPTX(inputFile, outputFile);
