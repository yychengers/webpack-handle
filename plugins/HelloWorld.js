class HelloWorld {
  apply(compiler) {
    compiler.hooks.done.tap(
      {
        name: 'HelloWorld',
      },
      () => {
        console.log('hello world');
      },
    );
  }
}

module.exports = HelloWorld;
