![image](https://github.com/user-attachments/assets/da77d1b3-786c-4822-9878-83f82b4bd498)

# 山口VRサークル Fulldive Universal Gateway Unit公式ホームページのGithubリポジトリです

## 開発メンバー
- [ToLpaz](https://x.com/T_yao_K)
- [しろさん](https://x.com/ksr03_dev)
- [オトリフ](https://x.com/Otoriff_VR)

## 採用技術
- Github
- React
- TypeScript
- Vite
- Cloudflare Pages

## 開発に関するnote

## 簡単な説明
### 実行方法
1. ```npm install```で必要なパッケージをインストール
2. ```npm run build```でビルド
3. ```npx wrangler pages dev dist```でBEのサーバを起動（http://localhost:8788 で起動します）
4. 別のターミナルで```npm run dev```でFEのサーバを起動
5. http://localhost:5173/にアクセス
※ .dev.varsファイルを用意して環境変数（INTEGRATION_SECRET, DB_ID）を設定する必要があります。詳細は運営メンバーへ<br>
※ 活動実績（Notion）の表示を確認しない場合は、手順2〜3は不要です
___

### FEはReact/TypeScript/Viteで構築しています
/srcに基本的なファイルが格納されています
- components: ページ構築用のコンポーネント
- type: 型定義
- utils: 関数の定義
- /public/images: 使用している画像
___

### サーバーサイドのエンドポイント作成はCloudflare Pages Functionsを使用しています
前提として、活動実績のイベント一覧はNotion APIを用いてFUGUのNotionページから取得して表示しています。<br>
参考になりそうな記事：https://zenn.dev/hid3/articles/f0bdc73438de87

（元々vite.config.tsのproxy設定を行うことで、FEから(ほぼ)直接Notion APIを叩いていましたが、ローカル以外では動作しないことが判明<br>
PR#56 にてVercelのServerless Functionを使ってエンドポイントを用意することで解決し、その後Cloudflare Pages Functionsに移行しました。）<br>
Pages Functions(公式)：https://developers.cloudflare.com/pages/functions/

functions/api/events.jsにNotion APIでDBのデータをfetchするエンドポイントを定義し、src/utils/getEvents.tsxで前述のエンドポイントを介してデータを取得しています。<br>
functions/配下のファイルパスがそのままURLになります（functions/api/events.js → /api/events）。
___

### デプロイ
CloudflareのPagesプロジェクトをこのリポジトリと連携しています。
- masterにマージすると本番環境にデプロイされます
- それ以外のブランチやPRはプレビュー用のURLが自動で発行されます
- 環境変数（INTEGRATION_SECRET, DB_ID）はCloudflareのダッシュボードで設定しています
