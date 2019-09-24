const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on("data", (input) => {
  if (input === 'b') {
    setTimeout(() => { process.stdout.write('\x07'); }, 0)
  } else if (input >= 1 && input <= 9) {
    process.stdout.write(`setting timer for ${input} seconds...\n`);
    setTimeout(() => { process.stdout.write('\x07'); }, input * 1000)
  } else if (input === '\u0003') {
    setTimeout(() => {
      process.stdout.write('Thanks for using me, ciao!\n')
      setTimeout(() => {
        process.exit();
      }, 500)
    }, 70)
  }
})