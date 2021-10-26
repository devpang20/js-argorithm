function soluation(str) {
  const row = str.split("");
  const rowLength = row.length;
  const i = parseInt(rowLength / 2);

  if (rowLength % 2 === 1) {
    return row[i];
  } else {
    const j = i - 1;
    return row[j] + row[i];
  }
}

soluation("study");
soluation("good");
