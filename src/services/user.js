import { getItem, setItem } from "./localStorage";
import faker from "faker";
import md5 from "md5";
import fetchJsonp from "fetch-jsonp";

export const getUser = () =>
  new Promise(resolve => {
    let user = getItem("user");
    if (!user) {
      const email = window.prompt("What is your e-mail address?");
      if (email) {
        const hash = md5(email);
        fetchJsonp(`https://www.gravatar.com/${hash}.json`)
          .then(response => response.json())
          .then(data => resolve(setItem("user", data.entry[0])))
          .catch(() => resolve(setItem("user", generateUser())));
      } else {
        resolve(setItem("user", generateUser()));
      }
    } else {
      resolve(user);
    }
  });

const generateUser = () => {
  const user = faker.helpers.contextualCard();
  user.name = {};
  user.name.formatted = faker.name.findName();
  user.displayName = user.username;
  user.preferredUsername = user.username;
  user.thumbnailUrl = user.avatar;
  user.aboutMe = faker.lorem.sentences();
  return user;
};
