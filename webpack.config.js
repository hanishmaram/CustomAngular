//Step 1:- Entry Point
//Step 2:- Pre-processing (Module Loaders)
//Step 3:- Bundling process
//Step 4:- Output
//Step 5:- Compress (Plugin)


const path=require('path');
module.exports={
  entry:{
    MainModule:"./src/Main.ts",
    SupplierModule:"./src/SupplierApp/Supplier/Supplier.module.ts",
    //Startup:[
      //"./nodule_modules/core-js/client/shim.min.js",
      //"./node_modules/zone.js/dist/zone.js",
      //"./node_modules/reflect-metadata/Reflect.js",
      //"Startup.ts"
    //]
  },
  output:{
    path:path.join(__dirname,"dist"),
    publicPath:"/dist/",
    filename:"[name].bundle.js"
  },
  resolve:{
    extensions:['.ts','.js']
  },
  module:{
    rules:[
      {
        test:/\.ts$/,
        loaders:['awesome-typescript-loader'
                ]
      },
      {
        test:/\.(ts|js)$/,
        loaders:[
                'angular-router-loader']
      }
    ]
  },//,
  //Plugins:[new UglifyJSPlugin()]
}