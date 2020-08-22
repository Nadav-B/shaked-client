import Router from "next/router";

const contactLinks = [
  {
    name: "לביצוע בדיקה חינם",
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
export default directByContact;
