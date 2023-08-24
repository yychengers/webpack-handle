const pluginName = 'HelloWorld';

class HelloWorld {
  constructor(options) {
    this.options = options || {
      env: 'dev',
    };
  }
  /**
   * 插件是一个可实例化的对象，原型上有一个apply方法
   * apply方法在安装此插件时由webpack compiler 调用一次。
   * apply方法被赋予对webpack compiler编译器的引用权限。
   */
  apply(compiler) {
    // 输出 asset 到 output 目录之后执行。
    compiler.hooks.afterEmit.tap(pluginName, (compilation) => {
      console.log('afteremit');
    });
    // 在 compilation 完成时执行
    compiler.hooks.done.tap(pluginName, (compilation) => {
      // console.log(compiler.hooks, 'hooks');
      // console.log('hello world');
      // console.log(this.options, stats);
      console.log('done');
    });
  }
}

module.exports = HelloWorld;
