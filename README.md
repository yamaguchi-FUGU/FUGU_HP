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

## 開発に関するnote

## 簡単な説明
### 実行方法
1. ```npm install```で必要なパッケージをインストール
2. ```npm run dev```でFEのサーバを起動
3. ```npm install -g vercel```でVercel CLIをインストール
4. ```vercel dev```でBEのサーバを起動（最初は質問に回答する必要があるので、適宜対処）
5. http://localhost:5173/にアクセス
※ .envファイルを用意して環境変数を設定する必要があります。詳細は運営メンバーへ
___

### FEはReact/TypeScript/Viteで構築しています
/srcに基本的なファイルが格納されています
- components: ページ構築用のコンポーネント
- type: 型定義
- utils: 関数の定義
- /public/images: 使用している画像
___

### サーバーサイドのエンドポイント作成はServerless Functionを使用しています
前提として、活動実績のイベント一覧はNotion APIを用いてFUGUのNotionページから取得して表示しています。<br>
参考になりそうな記事：https://zenn.dev/hid3/articles/f0bdc73438de87

（元々vite.config.tsのproxy設定を行うことで、FEから(ほぼ)直接Notion APIを叩いていましたが、ローカル以外では動作しないことが判明<br>
PR#56 にてServerless Functionを使ってエンドポイントを用意することで解決しました。）<br>
Serverless Function(公式)：https://vercel.com/templates/other/nodejs-serverless-function-express

api/events.jsにNotion APIでDBのデータをfetchするエンドポイントを定義し、src/utils/getEvents.tsxで前述のエンドポイントを介してデータを取得しています。<br>
参考になりそうな記事：https://zenn.dev/you_5805/articles/vanilla-vercel-functions
