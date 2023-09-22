export const test = async (req, res) => {
  try {
    res.send("Testing this controller working");
  } catch (err) {
    return res.status(400).send(err);
  }
};

export const getNextProbableWords = async (req, res) => {
  try {
    const { classes, statements } = req.body;

    // Fill in your solution here and return the correct output based on the given input

    // 1. split out all commands
    let commands = [];
    let output = {};

    for (let i = 0; i < statements.length; i++) {
      let command = statements[i].split(".");
      commands.push(command);
    }

    // 2. loop through commands, first command will be get item
    for (let i = 0; i < commands.length; i++) {
      let command = commands[i];
      let header = command[0];

      // now we want look for item of curr header
      let item;
      for (let j = 0; j < classes.length; j++) {
        if (classes[j][header] !== undefined) {
          item = classes[j][header];
          break;
        }
      }

      const handleArray = (item, command, key) => {
        if (item === "") {
          output[key] = [""];
        } else {
          item = item.filter((curr) => curr.includes(command));
          item = item.sort().slice(0, 5);
          if (item.length === 0) {
            item[0] = "";
          }
          output[key] = item;
        }
      };

      // here we have to check item is array or object
      if (Array.isArray(item)) {
        // next command is head of string should contain in the array
        handleArray(item, command[1], statements[i]);
      } else {
        let index = 1;
        let nextIndex = 2;

        while (command[nextIndex] !== undefined) {
          // need to continue to go into nested object
          item = item[command[index]];
          index += 1;
          nextIndex += 1;
        }

        // no more nested object, find most probable keys
        if (typeof item === "object") {
          let keys = Object.keys(item);
          handleArray(keys, command[index], statements[i]);
        } else {
          // since not object, we output empty array
          handleArray("", command[index], statements[i]);
        }
      }
    }

    res.send(output);
  } catch (err) {
    res.status(400).send(err);
  }
};