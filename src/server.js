import { Server, Model, RestSerializer } from "miragejs";
import { posts } from "./backend/db/posts";
import { users } from "./backend/db/users";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import {
  createPostHandler,
  getAllpostsHandler,
  getPostHandler,
  deletePostHandler,
  editPostHandler,
  likePostHandler,
  dislikePostHandler,
  getAllUserPostsHandler,
} from "./backend/controllers/PostController";
import {
  followUserHandler,
  getAllUsersHandler,
  getUserHandler,
  getBookmarkPostsHandler,
  bookmarkPostHandler,
  removePostFromBookmarkHandler,
  unfollowUserHandler,
  editUserHandler,
} from "./backend/controllers/UserController";
import {
  getPostCommentsHandler,
  addPostCommentHandler,
  editPostCommentHandler,
  deletePostCommentHandler,
  upvotePostCommentHandler,
  downvotePostCommentHandler,
} from "./backend/controllers/CommentsController";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    // TODO: Use Relationships to have named relational Data
    models: {
      post: Model,
      user: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      server.logging = false;
      users.forEach((item) =>
        server.create("user", {
          followers: [],
          following: [],
          bookmarks: [],
          ...item,
        })
      );
      posts.forEach((item) => server.create("post", { ...item }));
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      // done
      this.post("/auth/signup", signupHandler.bind(this));
      //done
      this.post("/auth/login", loginHandler.bind(this));

      // post routes (public)
      //done
      this.get("/posts", getAllpostsHandler.bind(this));
      // done
      this.get("/posts/:postId", getPostHandler.bind(this));
      //done
      this.get("/posts/user/:username", getAllUserPostsHandler.bind(this));

      // post routes (private)
      // not done
      this.post("/posts", createPostHandler.bind(this));
      // done
      this.delete("/posts/:postId", deletePostHandler.bind(this));
      // not done
      this.post("/posts/edit/:postId", editPostHandler.bind(this));
      // done
      this.post("/posts/like/:postId", likePostHandler.bind(this));
      // done
      this.post("/posts/dislike/:postId", dislikePostHandler.bind(this));

      // user routes (public)
      // done
      this.get("/users", getAllUsersHandler.bind(this));
      // done
      this.get("/users/:userId", getUserHandler.bind(this));

      // user routes (private)
      // not done
      this.post("users/edit", editUserHandler.bind(this));
      // done
      this.get("/users/bookmark", getBookmarkPostsHandler.bind(this));
      this.post("/users/bookmark/:postId", bookmarkPostHandler.bind(this));
      // done
      this.post(
        "/users/remove-bookmark/:postId",
        removePostFromBookmarkHandler.bind(this)
      );
      // done
      this.post("/users/follow/:followUserId", followUserHandler.bind(this));
      // done
      this.post(
        "/users/unfollow/:followUserId",
        unfollowUserHandler.bind(this)
      );



      //post comments routes (public)

      this.get("/comments/:postId", getPostCommentsHandler.bind(this));


      //post comments routes (private)
      this.post("/comments/add/:postId", addPostCommentHandler.bind(this));
      this.post(
        "/comments/edit/:postId/:commentId",
        editPostCommentHandler.bind(this)
      );

      // done
      this.post(
        "/comments/delete/:postId/:commentId",
        deletePostCommentHandler.bind(this)
      );
      this.post(
        "/comments/upvote/:postId/:commentId",
        upvotePostCommentHandler.bind(this)
      );
      this.post(
        "/comments/downvote/:postId/:commentId",
        downvotePostCommentHandler.bind(this)
      );

      this.passthrough("https://api.cloudinary.com/v1_1/ducuco7mq/auto/upload");
    },
  });
}
