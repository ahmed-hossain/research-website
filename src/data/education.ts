export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2025—Present",
    institution: "University of Houston",
    degree: "Ph.D. in Mechanical Engineering",
    advisor: "Dr. Theocharis Baxevanis",
  },
  {
    year: "2019—2024",
    institution: "Bangladesh University of Engineering and Technology",
    degree: "B.Sc. in Mechanical Engineering",
    thesis: "",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
