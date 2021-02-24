# webpack
1. 先安装好相应的包
`npm install @babel/parser @babel/traverse @babel/core @babel/preset-env -D`
    - @babel/parser生成AST抽象语法树，
    - 利用@babel/traverse进行AST遍历，记录依赖关系，
    - @babel/core和@babel/preset-env进行代码的转换

2. 编写相关函数步骤
    第一步:转换代码、 生成依赖
    第二步：生成依赖图谱。
    第三步: 生成代码字符串