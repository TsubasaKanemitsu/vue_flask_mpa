module.exports = {
    assetsDir: 'static',
    indexPath: 'template/index.html',
    pages: {
      index: {
        entry: 'src/pages/index/main.js',
        template: 'public/index.html', 
        filename: 'template/index.html'  
      },
      ex1: {
        entry: 'src/pages/ex1/main.js',
        template: 'public/ex1.html', 
        filename: 'template/ex1.html'  
      }
    }
  }
  