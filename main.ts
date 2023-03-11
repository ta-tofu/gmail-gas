import { GmailUtility } from './GmailUtility';

function main() {
    const utility = new GmailUtility();
    const conditions = 'is:unread';
    const sheetName = 'メール一覧';
    const labelName = '取得済み';
  
    utility.execute(conditions, sheetName, labelName);
  }

main();