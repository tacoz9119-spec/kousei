/* ===== Firebaseの設定 =====
   脚本エディタと同じFirebaseプロジェクトを使います。
   脚本エディタのGitHubリポジトリ（kyakuhon）にある firebase-config.js を開き、
   「const firebaseConfig = {」から「};」までをコピーして、
   下の「ここに貼り付け」の行と入れ替えてください。
   （脚本エディタの firebase-config.js を、そのままこのファイルと差し替えてもかまいません）
   この値は公開されても問題のない値です（作品は、ログインした本人しか読み書きできないよう、ルールで守られています）。 */

// ここに貼り付け

/* ↓ここから下は変更しないでください */
window.GENKO_FIREBASE = (typeof firebaseConfig !== 'undefined') ? firebaseConfig : null;
