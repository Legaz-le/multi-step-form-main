export const TODO_ITEMS = [
  "buy some cheese",
  "abylaikhan@gmail.com",
  "+77571353081",
] as const;

export const REQUIRED_FIELDS = [
  { label: "Name", value: TODO_ITEMS[0] },
  { label: "Email Address", value: TODO_ITEMS[1] },
  { label: "Phone Number", value: TODO_ITEMS[2] },
];

export const INVALID_EMAIL = [
  "@Clearout.io",
  "John.doesocialfrontier.com",
  "MaryLopez12@.com",
];

export const INVALID_PHONE_NUMBER = ["+31fgf6464w54", "1-555-555-1212", "+5464654"];