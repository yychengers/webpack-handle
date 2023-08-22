function show(content) {
  window.document.getElementById('app').innerHTML = 'hello, ' + content;
}

// 通过commonjs规范导出
module.exports = show;
