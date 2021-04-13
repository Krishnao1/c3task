const express = require("express");
const Joi = require("joi");
const app = express();


app.use(express.json());
app.post("/user", (req, res) => {
  const scheme = Joi.object({
    name: Joi.string().min(3).max(20).required(),
  });

  const result = scheme.validate(req.body);
  if (result.error) {
    res.send("erro: 40x");
  } else {
    res.send(result.value);
  }
});

app.listen(3000, () => {
  console.log("server is runnig");
});
