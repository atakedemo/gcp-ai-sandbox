# メモ

## 手順

### 1.GCPセットアップ

#### 1-1. Vertex AI APIの有効化

GCPコンソールにログイン。
プロジェクトを作成（既存プロジェクトを使ってもOK）。
APIとサービス → ライブラリで「Vertex AI API」を検索して有効化。

#### 1-2. サービスアカウントの作成

IAMと管理 → サービスアカウント → 新しいサービスアカウントを作成。
ロールに「Vertex AI User」を割り当てる。
JSON形式の鍵を作成
JSON形式のキーをダウンロード（後で使う）

#### 1-3. GCP CLIインストール

```bash
./google-cloud-sdk/install.sh
./google-cloud-sdk/bin/gcloud init

./google-cloud-sdk/bin/gcloud auth application-default login
```

### 2.フロントエンド作成

```bash
npx create-next-app@latest vertex-ai-chat --typescript
cd vertex-ai-chat

npm install @google-cloud/vertexai
```

## 参考

* [@google-cloud/vertexai 公式](https://www.npmjs.com/package/@google-cloud/vertexai)
* [Google CloudのVertex AI SearchでサクッとRAG構築 #GoogleCloud - Qiita](https://qiita.com/keke21/items/188686e726978a6dd7eb)
* [XX](https://shu-kob.hateblo.jp/entry/2024/06/07/171514)