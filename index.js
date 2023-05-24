const express = require("express");
const app = express();
const { Op } = require("sequelize");
const { Customers, Transactions } = require("./models/index");
const PORT = 3001;

// GET ALL CUSTOMERS
app.get("/get_all_customers", async (req, res) => {
  const customers = await Customers.findAll();
  res.send(customers);
});

app.get("/get_customer/:id", async (req, res) => {
  const { id } = req.params;
  const customer = await Customers.findAll({
    where: {
      id: id,
    },
  });
  res.send(customer);
});

app.get("/get_customer_with_j", async (req, res) => {
  const { id } = req.params;
  const customer = await Customers.findAll({
    where: {
      name: {
        [Op.startsWith]: "J",
      },
    },
  });
  res.send(customer);
});

app.post("/get_customer_with_j_savings", async (req, res) => {
  const { id } = req.params;
  const customer = await Customers.update(
    {
      accountType: "Savings",
    },
    {
      where: {
        name: {
          [Op.startsWith]: "J",
        },
      },
    }
  );
  res.send(customer);
});

app.get("/get_all_transactions", async (req, res) => {
  const transactions = await Transactions.findAll();
  res.send(transactions);
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
