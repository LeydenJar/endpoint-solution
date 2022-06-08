## Running the application

- install the dependencies:

  ```bash
  npm i
  ```

- configure the desired input editing input.txt

- run the commands:

  ```bash
  npm run start:dev
  ```

## Custom command file

You can optionally pass a different command file by calling start like this

```bash
npm run start:dev -- -- inputFile=path/to/input/file
```

## Note

I wasn't able to implement everything I wanted in the project, I still wanted to make a better injection container, a dependency inversion between the domain layer and the repository and organize the tests better, among other things. I'm sending the project anyway because the deadline won't allow me to implement all of that but hopefully you can see what I was going for.
