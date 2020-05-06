#! /usr/bin/env node

const cmd = require("commander");
const chalk = require('chalk')
const downGit = require('./src/downLoad')
// const options = require('./src/options')


cmd.command('init').description('初始化模板').action(async (args) => {
    typeof args !== 'string' && (console.log(chalk.red('缺少项目文件名字')), process.exit(1))
    console.log(chalk.yellow('mpVue脚手架初始化模板，不要问我为什么是中文的,因为我是中国人 \n'))
    // 填选项
    // await options()
    // 拉取
    await downGit(args)
})
cmd.parse(process.argv) 