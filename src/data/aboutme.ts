export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Chowdhury Ahmed Hossain",
  title: "Ph.D. Student",
  institution: "University of Houston",
  // Note that links work in the description
  description:
    "I'm a first-year <a href='https://www.uh.edu'>PhD student</a> working on developing better materials by changing their internal geometry. My research focuses on understanding the mechanical constituent properties and dynamic responses of bistable auxetic materials.",
  email: "ahmedhossain.buet@gmail.com",
  imageUrl:
    "/img/livingthings.jpg",
  googleScholarUrl: "",
  githubUsername: "ahmed-hossain",
  linkedinUsername: "chowdhury-ahmed",
  twitterUsername: "chowdhurysami0",
  blogUrl: "https://",
  cvUrl: "https://",
  institutionUrl: "https://www.uh.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
