# 庭しごと帖

植物ごとに、水やり・施肥・剪定と成長の様子を記録する栽培日誌アプリ。

# めも

| 担当 | 採用案 | 「庭しごと帖」での役割 |
|---|---|---|
| フロントエンド | **Next.js＋React＋TypeScript** | S01〜S06の画面、フォーム、カレンダー、一覧表示 |
| バックエンド | **PHP＋Laravel** | 入力チェック、品目・作業・日記の登録や取得、利用者ごとのアクセス制御 |
| データベース | **MySQL 8.4系** | 作成済みER図のユーザー・品目・作業・日記などを保存 |
| Googleログイン | **Laravel Socialite** | Googleアカウントによる認証 |
| APIの認証 | **Laravel SanctumのCookie認証** | ログイン中の利用者からのAPI操作を受け付ける |
| アプリの公開先 | **Amazon EC2** | Next.jsとLaravelを実行 |
| DBの公開環境 | **Amazon RDS for MySQL** | 本番データを保存 |
| リクエストの振り分け | **Nginx** | 画面へのアクセスをNext.js、APIへのアクセスをLaravelへ送る |
| ローカル開発環境 | **Docker Composeを候補にする** | PHP・MySQLなどのバージョンを揃える |
| ソース管理 | **Git／GitHub** | アプリと設計資料の変更履歴を管理 |
