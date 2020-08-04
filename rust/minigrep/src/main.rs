use std::env;
use std::process;

use minigrep;
use minigrep::Config;

fn main () {
    // let args:Vec<String> = env::args().collect();

    let config = Config::new(env::args()).unwrap_or_else(|err| {
        eprintln!("Problem parsing arguments: {}", err);
        
        process::exit(1);
    });
    
    println!("Searching for {}", config.query);
    println!("In file {}", config.filename);

    if let Err(e) = minigrep::run(config) {
        eprintln!("Application error:{}", e);

        process::exit(1);
    }

}


/* 
fn main() {
    // println!("Hello, world!");

    // 返回一个传递给程序的命令行参数的 迭代器（iterator）
    let args: Vec<String> = env::args().collect();

    // 调试格式 :? 打印出 vector
    // println!("{:?}", args)

    let binary_name = &args[0]; // 二进制文件的名称
    let query = &args[1];
    let filename = &args[2];

    println!("binary_name {}", binary_name);
    println!("Searching for {}", query);
    println!("in file {}", filename);

    let contents = fs::read_to_string(filename)
        .expect("Something went wrong reading the file");
    println!("With text:\n{}", contents);
}
 */