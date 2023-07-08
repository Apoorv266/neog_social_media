import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "t7cZfWIp-q",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "Be yourself!",
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686332490/socialMedia/programming-bg_znumg2.jpg",
    website: "https://Alex.netlify.app/",
    createdAt: "2022-01-01T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "79Gksh9otl",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "johndoe123",
    bio: "Hello World",
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686341814/socialMedia/be-yourself-bg_rmxvmb.jpg",
    website: "https://google.com/",
    createdAt: "2022-01-02T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "1T6Be1QpLm",
    firstName: "Jane",
    lastName: "Doe",
    username: "janedoe",
    password: "janedoe123",
    bio: "Whats in bio?",
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554256/socialmedia/avatars/jane-doe_il3cvx.webp",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686342238/socialMedia/adventure-explorer-bg_i4p63w.jpg",
    website: "https:/Alex.netlify.app/",
    createdAt: "2022-01-01T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "LCrc9f0Zl0",
    firstName: "Carl",
    lastName: "Smith",
    username: "carlsmith",
    password: "carlsmith123",
    bio: "Whats in bio?",
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686342526/socialMedia/musician-bg_qgesca.jpg",
    website: "https://foogle.com/",
    createdAt: "2022-01-03T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "o5gzWjEeX_",
    firstName: "Alex",
    lastName: "Chop",
    username: "Alex",
    password: "Alex123",
    bio: "Aspiring Frontend Engineer",
    avatarUrl:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686343623/socialMedia/food-bg_dgsyce.jpg",
    website: "https://Alex .hashnode.dev/",
    createdAt: "2022-01-04T10:55:06+05:30",
    updatedAt: formatDate(),
    following: [{
      _id: "LCrc9f0Zl0",
      firstName: "Carl",
      lastName: "Smith",
      username: "carlsmith",
      password: "carlsmith123",
      bio: "Whats in bio?",
      avatarUrl:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
      website: "https://foogle.com/",
      createdAt: "2022-01-03T10:55:06+05:30",
      updatedAt: formatDate(),
    }
    ],
    followers: [
      {
        _id: "M1NR81Bzlz",
        firstName: "Alex",
        lastName: "Maxwell",
        username: "alexmaxwell",
        password: "alexmaxwell123",
        bio: "What's up?",
        avatarUrl:
          "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652525373/socialmedia/avatars/alex-maxwell.webp",
        website: "https://facebook.com/",
        createdAt: "2022-01-05T10:55:06+05:30",
        updatedAt: formatDate(),
      }
    ]
  },

  {
    _id: "M1NR81Bzlz",
    firstName: "Alex",
    lastName: "Maxwell",
    username: "alexmaxwell",
    password: "alexmaxwell123",
    bio: "What's up?",
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652525373/socialmedia/avatars/alex-maxwell.webp",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686344328/socialMedia/pencil-sketch-bg_t0qfe9.jpg",
    website: "https://facebook.com/",
    createdAt: "2022-01-05T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "qq8zWjEeXd",
    firstName: "Sophia",
    lastName: "Jones",
    username: "sophiajones",
    password: "sophiajones123",
    bio: "Frontend Engineer",
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652525510/socialmedia/avatars/sophia-jones.webp",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686344677/socialMedia/fashion-stage-bg_ykeinp.jpg",
    website: "https://tinder.com/",
    createdAt: "2022-01-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
