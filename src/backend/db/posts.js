import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "xhzTkUi2Nt",
    content: "Nature is beautiful !!",
    mediaURL: "https://img.freepik.com/premium-photo/mountains-during-flowers-blossom-sunrise-flowers-mountain-hills-beautiful-natural-landscape-summer-time-mountainimage_647656-1502.jpg",
    mediaAlt :"image1", 
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "okzxcf",
        username: "janedoe",
        commentData: "Truly amazing !! Love the click!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "Alex",
    createdAt: "2022-01-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "siFFxfYI1s",
    content: "Minions are so cute !",
    mediaURL:
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/tenor_1.gif",
      mediaAlt :"image2",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "carlsmith",
    createdAt: "2022-05-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLP1fg",
    content: "What a mystic creature this is ! 🐯 ",
    mediaURL:
      "https://cdn.pixabay.com/photo/2015/06/02/12/11/lion-794962_640.jpg",
      mediaAlt :"image3",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6nImWvImxo",
        username: "johndoe",
        commentData: "Maintain a safe distance !",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "janedoe",
    createdAt: "2022-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "MTYtVhecCj",
    content:
      "Mario is my all time favourite game !!",
    mediaURL: "https://media.tenor.com/MbAAcYSyyagAAAAd/super-mario-mario.gif",
    mediaAlt :"marioImage",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: "2022-03-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLP9kC",
    content:
    "Comment where do you live? Iam waiting",
  mediaURL: "",
      mediaAlt :"",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "EO7iOPN9n8",
        username: "carlsmith",
        commentData: "Take me too !",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "QK52wf6HI1",
        username: "janedoe",
        commentData: "Wow! Looks Amazzing!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "adarshbalika",
    createdAt: "2022-03-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "tHaThLyFQh",
    content:
      "To change tomorrow, you have to change something today !",
    mediaURL: "",
    mediaAlt :"",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: "2022-04-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "G-Gi3lSZP9",
    content: "Japan is my dream destination !",
    mediaURL:
      "https://cdn.pixabay.com/photo/2015/06/29/04/41/tokyo-tower-825196_1280.jpg",
    mediaAlt :"japan.jpg",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: "2022-05-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "GeMUAdi9mh",
    content: "Anyone up for a movie ? Lets plan together !",
    mediaURL: "https://media.tenor.com/OlmWTIz9-skAAAAC/movie-night.gif",
    mediaAlt :"movie.gif",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: "2022-03-06T12:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "IyUlYXTrzZ",
    content: "I love blueberries ! They are sweet.",
    mediaURL:
      "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg",
      mediaAlt :"image6",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6nIffvImxo",
        username: "sophiajones",
        commentData: "Oh! That looks Delicious!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "Alex",
    createdAt: "2022-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "Ie92xOSVeU",
    content:
      "I want to be a youtuber !",
    mediaURL: "",
    mediaAlt :"",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6fgd534s",
        username: "janedoe",
        commentData: "Yes! I am also learning from there!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "alexmaxwell",
    createdAt: "2022-04-12T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "xhzTkUyfNt",
    content: "Believe in yourself! Rest all will fall in place.",
    mediaURL: "",
    mediaAlt :"",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "unImWvIzbf",
        username: "Alex",
        commentData: "So True!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "sophiajones",
    createdAt: "2022-05-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "CCmJpDnnQQ",
    content:
      "You can get everything in life you want if you will just help enough other people get what they want.",
    mediaURL: "",
    mediaAlt :"",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "Alex",
    createdAt: "2022-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "Z_TZT_3EAw",
    content:
      "If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it.",
    mediaURL: "",
    mediaAlt :"",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "johndoe",
    createdAt: "2022-01-12T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "e-knMEsoLq",
    content: "More is lost by indecision than wrong decision.",
    mediaURL: "",
    mediaAlt :"",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "alexmaxwell",
    createdAt: "2022-01-26T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "VY14RsXC7G",
    content:
      "The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone else’s highlight reel.",
    mediaURL: "",
    mediaAlt :"",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "carlsmith",
    createdAt: "2022-03-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "l9pedEMjZS",
    content: "If you don’t risk anything, you risk even more.",
    mediaURL: "",
    mediaAlt :"",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "sophiajones",
    createdAt: "2022-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "lbW4dlCpNC",
    content: "If it makes you nervous, you’re doing it right.",
    mediaURL: "",
    mediaAlt :"",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "Alex",
    createdAt: "2022-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "k-Vwd2d7Vt",
    content:
      "I learned a long time ago that there is something worse than missing the goal, and that’s not pulling the trigger.",
    mediaURL: "",
    mediaAlt :"",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "carlsmith",
    createdAt: "2022-01-14T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "R2lAuXvK7V",
    content:
      "Success is stumbling from failure to failure with no loss of enthusiasm. Love this quote by Winston Churchill.",
    mediaURL: "",
    mediaAlt :"",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "janedoe",
    createdAt: "2022-05-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "G5xd30tMCR",
    content:
      "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    mediaURL: "",
    mediaAlt :"",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "alexmaxwell",
    createdAt: "2022-02-14T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "lF8cnfPAe9",
    content:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    mediaURL: "",
    mediaAlt :"",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "Alex",
    createdAt: "2022-01-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "stfTkUi2Nt",
    content:
      "“Do not wait for the perfect time and place to enter, for you are already onstage.",
    mediaURL: "",
    mediaAlt :"",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "sophiajones",
    createdAt: "2022-05-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "quiTkUi2Nt",
    content: "It is a rough road that leads to the heights of greatness.",
    mediaURL: "",
    mediaAlt :"",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "janedoe",
    createdAt: "2022-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
