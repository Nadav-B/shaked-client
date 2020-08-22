import Router from "next/router";

const contactLinks = [
  {
    name: "לביצוע בדיקה חינם",
    link: "/surveys",
  },
  {
    name: "צריכים עזרה עם המשכנתא?",
    link: "/surveys",
  },
  {
    name: "לבדיקת איחוד הלוואת",
    link: "/surveys",
  },
];

const directByContact = (string) => {
  console.log(string);
  const object = contactLinks.find((object) => object.name == string);
  if (object) {
    Router.push(object.link);
  } else Router.push("/contact");
};

export { directByContact, contactLinks };
