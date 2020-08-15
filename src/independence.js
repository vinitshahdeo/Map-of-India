const figlet = require("figlet"),
    chalk = require("chalk"),
    log = console.log;

figlet('Happy Independence Day', function (err, message) {
    if (err) {
        log('OOPS! Something went wrong :(', err);
    } else {
        log(chalk.red.bold('\n\nWishing\n\n') + 
            chalk.white.bold('You\n\n') +
            chalk.green.bold('A Very\n\n')
        );

        log(message);

        log(chalk.blue.bold('\n\nAuthor: ') +
            chalk.yellow.bold('Vinit Shahdeo')
        );
        
        log(chalk.cyan.bold('\nFollow on GitHub at ') + 
            chalk.magenta.bold('https://github.com/vinitshahdeo') + 
            '\n\n'
        );
    }
});
