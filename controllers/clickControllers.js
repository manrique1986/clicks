const Click = require("../models/clickModel");

exports.registerClick = async (req, res) => {
  try {
    let click = await Click.findOne();
    if (!click) {
      click = new Click();
    }
    click.count++;
    await click.save();
    res.json({ count: click.count, Date: click.date});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
