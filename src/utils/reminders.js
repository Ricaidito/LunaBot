const { MongoClient, ObjectId } = require("mongodb");

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
const remindersCollection = client.db("reminderDB").collection("reminders");

const isMongoIdValid = mongoId => {
  if (ObjectId.isValid(mongoId)) {
    if (String(new ObjectId(mongoId)) === mongoId) return true;
    return false;
  }
  return false;
};

const getReminders = userId =>
  remindersCollection.find({ discordId: userId }).toArray();

const addReminder = (userId, reminder) =>
  remindersCollection.insertOne({ discordId: userId, content: reminder });

const removeReminder = (reminderId, userId) =>
  remindersCollection.deleteOne({
    _id: new ObjectId(reminderId),
    discordId: userId,
  });

const checkIfExists = async (reminderId, userId) => {
  const reminder = await remindersCollection.findOne({
    _id: new ObjectId(reminderId),
    discordId: userId,
  });

  if (reminder) return true;

  return false;
};

module.exports = {
  isMongoIdValid,
  addReminder,
  getReminders,
  removeReminder,
  checkIfExists,
};
