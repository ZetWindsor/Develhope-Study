import { EventEmitter } from "events";

function createNewsFeed() {
  const emitter = new EventEmitter();

  setInterval(() => {
    emitter.emit("newsEvent", "News: A thing happened in a place.");
  }, 1000);

  setInterval(() => {
    emitter.emit("breakingNews", "Breaking news! A BIG thing happened.");
  }, 4000);

  setTimeout(() => {
    emitter.emit("error", new Error("News feed connection error"));
  }, 5000);

  return emitter;
}

const newsFeed = createNewsFeed();

const newsEventListener = (data) => {
  console.log("News Event:", data);
};

const breakingNewsListener = (data) => {
  console.log("Breaking News:", data);
};

const errorListener = (error) => {
  console.error("Error:", error.message);
};

newsFeed.addListener("newsEvent", newsEventListener);
newsFeed.addListener("breakingNews", breakingNewsListener);
newsFeed.addListener("error", errorListener);
