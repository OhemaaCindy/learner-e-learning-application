export const BASEURL = import.meta.env.VITE_SERVER_URL;

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
    updatePassword: "/auth/change-password",
  },
  TRACKS: {
    getAllTracks: "/tracks",
    getOneTrack: (id: string) => `/tracks/${id}`,
    createTrack: "/tracks",
    updateTrack: (id: string) => `/tracks/${id}`,
    deleteTrack: (id: string) => `/tracks/${id}`,
  },
  INVOICES: {
    getInvoices: "/invoices",
    // createInvoice: "/invoices",
    // updateInvoice: "",
  },
  LEARNERS: {
    updateProfile: "/auth/update",
    trackEnrollment: "/enrollments",
    // getOneLearner: (id: string) => `/learners/${id}`,
  },
  //   COURSES: {
  //     getAllCourses: "/courses",
  //     createCourse: "/courses",
  //     getSingleCourse: (id: string) => `/courses/${id}`,

  //     deleteCourse: (id: string) => `/courses/${id}`,
  //     updateCourse: (id: string) => `/courses/${id}`,
  //   },
};
