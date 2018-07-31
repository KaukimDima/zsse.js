try {
  throw new Error("Ошибка!");
} catch (e) {
  console.log(e.name + ": " + e.message); //выведет Error: Ошибка!
}
