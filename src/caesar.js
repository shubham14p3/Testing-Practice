function caesar(str, key) {
  return str
    .toUpperCase()
    .replace(/[A-Z]/g, (c) => String.fromCharCode(((c.charCodeAt(0) - 65 + key) % 26) + 65)).toLowerCase();
}

module.exports = caesar;
