module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactAnimations',
      externals: {
        react: 'React'
      }
    }
  }
}
