// npm init - ініціалізує npm в проекті і створює файл package.json
// npm install - встановлює всі залежності, перелічені в package.json
// npm list --depth=0 - виведе в терміналі список локально встановлених пакетів з номерами їх версій, без залежностей
// npm install [package-name] - встановить пакет локально у папку node_modules
// npm uninstall[package - name] - видалить пакет, встановлений локально і оновить package.json
// --save - вказує, що додається залежність, яка увійде до фінального продукту.Пакет буде встановлений локально, в папку
// node_modules і буде доданий запис в поле dependencies в package.json.
// --save - dev - вказує, що додається залежність розробки.Пакет буде встановлений локально в папку node_modules, і буде
//  доданий запис в поле devDependencies в package.json.
// --global - вказує, що додається глобальна залежність, тобто інструмент, який доступний для будь - якого проекту.Пакет
//  буде встановлений глобально(в систему).
// ЦІКАВО
// npm start і npm test - запустить скрипт start або test, розташований в package.json
// npm run [custom-script] - запустить кастомний скрипт, розташований в package.json
// npm outdated - використовується для пошуку оновлень, виявить сумісні версії програмно і виведе список доступних оновлень
// npm update - оновить всі пакети до максимально дозволеної версії
// npm update [ім'я-пакета] - оновить зазначений пакет.
// npm cache clean - декілька разів на рік очищати
// const FIRST = 'first';

// localStorage.setItem('ok', JSON.stringify('google'));
// const first = JSON.parse(localStorage.getItem(FIRST));
// console.log(first);

try {
  const a = 10;
  console.log(a);
} catch (error) {
  console.log(error);
} finally {
  console.log('HI MAN');
}
