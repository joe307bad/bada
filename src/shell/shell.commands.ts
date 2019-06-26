import { mkdir, exec } from 'shelljs';

export const mount = () => {
  console.log('mount');
  exec('mount /blah /does-this-work', function(code, stdout, stderr) {
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);
  });
};
