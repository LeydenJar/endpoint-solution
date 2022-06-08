## Running the application

- install the dependencies:

  ```bash
  npm i
  ```

- configure the desired input editing input.txt

- run the commands:

  ```bash
  npm run start
  ```

## Custom command file

You can optionally pass a different command file by calling start like this

```bash
npm run start -- -- inputFile=path/to/input/file
```

## Notes

Due to the deadline I won't be able to implement everything I wanted, just to let noted I still wanted to make the injection container better, make more tests and organize them better and probably change the command class.

I went for a 3 layer architecture, having commands being independent of how we are persisting data and making it easy for the system to accept different commands
