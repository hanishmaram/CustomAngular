export class Logger{
  Log(){
    console.log("default logger");
  }
}


export class ConsoleLogger extends Logger{
  Log(){
    console.log("console logger");
  }
}

export class FileLogger extends Logger{
  Log(){
    console.log("file logger");
  }
}