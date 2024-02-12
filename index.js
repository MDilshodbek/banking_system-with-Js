var bank = {
  12312: {
    balance: 2000,
  },
  12345: {
    balance: 17000,
  },
};

function operation_executer(type, amount, secret = "not provided") {
  if (secret === "not provided") {
    return console.log("Please provide a secret key!");
    console.log("Smth");
  } else {
    console.log(secret);
  }

  console.log("Smth");

  if (bank[secret]) {
    if (type === "withdraw") bank[secret].balance -= amount;
    else bank[secret].balance += amount;
  } else {
    console.log("Operation declined!");
  }
}

operation_executer("deposit", 500, 12312);

console.log(bank);
