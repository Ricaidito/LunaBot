const { MongoClient, ObjectId } = require("mongodb");

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
const remindersCollection = client.db("reminderDB").collection("reminders");

const getReminders = userId => remindersCollection.find({ userId }).toArray();

const addReminder = (userId, reminder) =>
  remindersCollection.insertOne({ userId, reminder });

const removeReminder = (reminderId, userId) =>
  remindersCollection.deleteOne({ _id: new ObjectId(reminderId), userId });

module.exports = {
  addReminder,
  getReminders,
  removeReminder,
};
