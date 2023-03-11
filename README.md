# プログラム概要
- Gmailのメールを取得し、その内容を指定したスプレッドシートに書き込むためのクラス GmailUtility が定義されています。
- execute メソッドを呼び出すことで、指定した Gmail 検索条件にマッチした未読メールを取得します。
- それぞれのメールの日時、送信者、件名、本文を GmailData オブジェクトとして生成し、指定したスプレッドシートに書き込みます。

# サンプルコード

```TypeScript
import { GmailUtility } from './GmailUtility';

function main() {
  const utility = new GmailUtility();
  const conditions = 'is:unread';
  const sheetName = 'メール一覧';
  const labelName = '取得済み';

  utility.execute(conditions, sheetName, labelName);
}

main();
```

# 留意点
1. このプログラムは、Google Apps Script で実行する事を想定しています。
2. 出力先に設定するシートは、予め作成しておいてください<span style="color: #ff6347;">(修正予定)</span>。
3. 付与するラベルは、予め作成しておいてください<span style="color: #ff6347;">(修正予定)</span>。

# 動作確認について
- clasp というツールで GAS にプッシュした後、GAS で正常に動作した事を確認しています。
- clasp の導入については、各自 Web で検索してみてください。
- clasp で GAS にプッシュする際、TypeScript のコードが JavaScript にトランスパイルされるみたいです。
- ローカル環境では確認してないです。