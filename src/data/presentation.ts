type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "badzlannurdhabith@gmail.com",
  title: "Hi, I’m Badzlan 👋",
  profile: "/profile.jpg",
  description:
  "Hello, i'm *Badzlan Nur Dhabith* a Software Engineer with over *2 years* of Back-end experience. I am currently working as *Back-end Engineer* at Smarteschool. Outside of work, I also learn *Cyber Security* and *Project Management*.",
  socials: [
    {
      label: "GitHub",
      link: "https://github.com/badzlan",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/badzlannurdhabith/",
    },
    {
      label: "Bento",
      link: "https://bento.me/badzlan",
    }
  ],
};

export default presentation;
