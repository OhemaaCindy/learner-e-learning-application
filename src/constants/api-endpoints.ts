export const BASEURL = "https://tmp-se-projectapi.azurewebsites.net/api";

export const apiEndpoints = {
  baseURL: BASEURL,
  AUTH: {
    register: "/auth/signup/learner",
    login: "/auth/login",
    forgotPassword: "/auth/forgot-password",
    resetPassword: (id: string) => `/auth/reset-password/${id}`,
    verifyEmail: "/auth/verify-email",
    resendVerificationToken: "/auth/resend-token",
    logout: "/admin/auth/logout",
    checkAuth: "auth/check-auth",
    // update-password:"/auth/change-password",
  },
  TRACKS: {
    getAllTracks: "/tracks",
    getOneTrack: (id: string) => `/tracks/${id}`,
    createTrack: "/tracks",
    updateTrack: (id: string) => `/tracks/${id}`,
    deleteTrack: (id: string) => `/tracks/${id}`,
  },
  //   INVOICES: {
  //     getAllInvoices: "/invoices",
  //     createInvoice: "/invoices",
  //     updateInvoice: "",
  //   },
  //   LEARNERS: {
  //     getAllLearners: "/learners",
  //     getOneLearner: (id: string) => `/learners/${id}`,
  //   },
  //   COURSES: {
  //     getAllCourses: "/courses",
  //     createCourse: "/courses",
  //     getSingleCourse: (id: string) => `/courses/${id}`,

  //     deleteCourse: (id: string) => `/courses/${id}`,
  //     updateCourse: (id: string) => `/courses/${id}`,
  //   },
};
