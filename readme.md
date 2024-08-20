# インターンシップタスクサイト

## 環境構築手順

1. git clone

    任意のディレクトリで以下のコマンドを実行

    ```bash
    git clone https://github.com/logicalAnd-Inc/internship_js.git
    ```

2. nodeのインストール

    **Mac**

    nodebrewのインストール

    ```bash
    brew install nodebrew
    nodebrew setup
    ```

    nodebrewのPathを追加
    ```bash
    echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.zshrc
    source ~/.zshrc
    ```

    インストールできるNodeのバージョン確認
    ```bash
    node ls-remote
    ```

    バージョンを指定してインストール
    （コマンドにはリポジトリ作成当時の実行バージョンを記載）
    ```bash
    nodebrew install v18.1.0
    ```

    インストール確認
    ```bash
    nodebrew ls
    ```

    バージョン変更方法
    ```bash
    nodebrew use v18.1.0
    ```

    npmのインストール
    ```bash
    npm install -g npm
    ```

    nodebrewとnpmのアンインストール
    ```bash
    brew ls
    brew uninstall --force nodebrew
    npm ls -g node
    npm uninstall -g npm
    ```

    3. パッケージのインストール
    ```bash
    npm install
    ```

## 実行手順
1. cloneしたディレクトリに移動
    ```bash
    cd 任意のディレクトリ/internship_js
    ```

2. ローカルサーバー実行
    ```bash
    npm run start
    ```

3. 表示されたURLをブラウザで表示
    ```bash
    open http://localhost:3000/top/
    ```

## gitコマンド

* **ブランチの一覧を表示するコマンド**
```bash
git branch
```

---

* **ブランチを作成するコマンド**

  ブランチを作成することで変更を分けることができる

  開発する際に分けることでメインのブランチに影響がでないようにすることができる

```bash
# ブランチを作成して切り替え
git switch -c <ブランチ名>
# ブランチを作成
git branch <ブランチ名>
```

---

* **ブランチを変更するコマンド**

  ブランチを変更することができる

  変更先の最後のcommitにファイルの内容を変更する

```bash
git switch <ブランチ名>
```

---

* **ローカルに保存するコマンド**

  自由に実行して良い。

  コメントをつける必要があるため、ある程度区切りの良いところで実行するとより良い。

```bash
git commit
```

---

* **ローカルの保存をリモートに送るコマンド**

  リモートリポジトリに反映することで自分以外の他の人も確認できるようにする

  PCの不調でデータが飛んだりしても、リモートに反映していれば消えないので区切りの良いところで実行すると良い

  基本的には動作確認を行ってから実行するもので、動作しないプログラムをpushするのは歓迎されない

```bash
# 初回以降
git push
# 初回
git push --set-upstream <リモートリポジトリ名> <ブランチ名>
```

## リポジトリの扱い

### リモートリポジトリ

今回の実習では決まった時刻に `git push` を行うため、基本的には指示したタイミングでのみリモートリポジトリを利用します。

ただし、その時刻より早くコードが書けた場合には、こちらから `git push` するように指示があるかもしれません。その場合は `git push` して構いません。

### ローカルリポジトリ

今回の実習では保存したい好きなタイミングで `git commit` の実行をしてもらって問題ありません。

ブランチの作成も自由です。