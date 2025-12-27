const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  COMUNITY: "/community",
  COLLECTION: "/collection",
  JOBS: "/find-jobs",
  TAGS: "/tags",
  PROFILE: "/profile",
  PROFILE_ID: (id: string) => `/profile/${id}`,
  ASK_QUESTION: "/ask-question",
  QUESTION: (id: string) => `/question/${id}`,
};

export default ROUTES;
