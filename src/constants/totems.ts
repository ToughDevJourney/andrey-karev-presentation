import totemAboutImage from "assets/totemAbout.gif";
import totemContactsImage from "assets/totemContacts.gif";
import totemExperienceImage from "assets/totemExperience.gif";
import totemStackImage from "assets/totemStack.gif";

export type TotemName = "about" | "contacts" | "experience" | "tech";

interface Totem {
  xPos: number;
  imageSrc: string;
  name: TotemName;
}

export const aboutTotem: Totem = {
  xPos: -1794,
  imageSrc: totemAboutImage,
  name: "about",
};

export const contactsTotem: Totem = {
  xPos: -1120,
  imageSrc: totemContactsImage,
  name: "contacts",
};

export const experienceTotem: Totem = {
  xPos: 1020,
  imageSrc: totemExperienceImage,
  name: "experience",
};

export const techStackTotem: Totem = {
  xPos: 1900,
  imageSrc: totemStackImage,
  name: "tech",
};

export const totemsList: Totem[] = [aboutTotem, contactsTotem, experienceTotem, techStackTotem];

export const leftTotemsNamesList = totemsList.reduce((acc, totem) => (totem.xPos < 0 ? [...acc, totem.name] : acc), []);

export const rightTotemsNamesList = totemsList.reduce((acc, totem) => (totem.xPos >= 0 ? [...acc, totem.name] : acc), []);

export const totemsNumber = totemsList.length;
