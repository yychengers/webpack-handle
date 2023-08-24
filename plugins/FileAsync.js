const pluginName = 'FileAsync';

class FileAsync {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    // emit 钩子是生成资源到 output 目录之前执行，emit 是一个异步串行钩子，需要用 tapAsync 来注册
    compiler.hooks.emit.tapAsync(pluginName, (compilation, callback) => {
      console.log(compiler, compilation, '文件对象');
      // 在生成的文件中，创建一个头部字符串
      var filelist = '文件列表如下：...\n';

      // 遍历所有编译过的资源文件
      // 对于每个文件，都添加一行内容
      for (var filename in compilation.assets) {
        filelist += '- ' + filename + '\n';
      }

      // 将这个列表作为一个新的文件资源，插入到webpack构建中。
      // 所有待生成的文件都在assets属性上。
      compilation.assets['filelist.md'] = {
        source: function () {
          return filelist;
        },
        size: function () {
          return filelist.length;
        },
      };

      callback();
    });
  }
}

module.exports = FileAsync;
