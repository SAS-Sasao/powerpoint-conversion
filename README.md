# Cline to Marp

ClineのAIアシスタントを使用して、MarkdownファイルからMarpスライドを簡単に生成するリポジトリです。

## 前提条件

1. Clineのインストール
2. VS Codeの拡張機能「Marp for VS Code」の追加
3. テーマの設定
   - VS Codeの設定で、Markdown > Marp:Themesに以下を追加：
   ```
   https://cunhapaulo.github.io/style/freud.css
   ```
   - その他のテーマについては[Qiita記事](https://qiita.com/YoshikiIto/items/74b3d786266b1de3ed93)を参考にしてください
   - 人気のテーマ：
     - gradient
     - beamer
     - border
     - dracula
     - speee
     - plato
     - heidegger

## 基本的な使い方

1. 入力ファイルの準備
   - `input/input.md`に変換したいMarkdownファイルを配置
   - ※mdファイルの名前は任意のものでも構いません

2. スライド生成ルールの適用
   - `.clinerules/01-powerpoint-conversion.md`にルールが定義済み
   - これにより、以下のルールが自動的に適用されます：
     - テンプレートの使用
     - 文字数制限
     - レイアウト制限
     - 画像使用ルール
     - フォーマット制限   

3. スライドの生成
   - Clineに「@input.md を元にスライド生成」と指示
   - 自動的に`YYYYMMDD_タイトル.md`形式でスライドが生成されます
   - ※1でファイル名を変更している場合は任意のものに変更すること

## 注意事項

1. 画像の配置
   - 必ず`.images`ディレクトリに配置
   - ロゴ画像は必須

2. スライドのスタイル
   - `YYYYMMDD_template.md`で定義
   - カスタマイズする場合はテンプレートを編集

3. 日本語対応
   - フォントは'Hiragino Sans'と'Noto Sans CJK JP'を使用
   - 文字化けが発生する場合はフォントの確認を

## 編集可能なPowerPointファイルの生成

### 前提条件
- LibreOfficeのインストールが必要です
- 以下のコマンドでインストール可能：
```bash
winget install --id TheDocumentFoundation.LibreOffice
```

### 生成方法
1. **通常のPowerPointファイル生成**
```bash
npx @marp-team/marp-cli "ファイル名.md" --pptx --output "出力ファイル名.pptx" --allow-local-files
```

2. **編集可能なPowerPointファイル生成**
```bash
npx @marp-team/marp-cli --no-config "ファイル名.md" --pptx --pptx-editable --output "出力ファイル名_編集可能.pptx" --allow-local-files
```

### 実行例
```bash
# 編集可能なPowerPointファイルを生成
npx @marp-team/marp-cli --no-config "20250619_AI駆動開発による要件定義の革新.md" --pptx --pptx-editable --output "20250619_AI駆動開発による要件定義の革新_編集可能.pptx" --allow-local-files
```

### 注意事項
- `--pptx-editable`は実験的機能です
- LibreOfficeに依存するため、スライドの再現性は完全には保証されません
- 生成されたPowerPointファイルはMicrosoft PowerPointで編集可能です
- Marpのスタイルとテーマが保持されます
