export type Villa = {
  name: string;
  desc: string;
  image: string;
  size: "wide" | "tall" | "normal";
  featured?: boolean;
};

export type Step = {
  number: string;
  title: string;
  body: string;
  image: string;
};
