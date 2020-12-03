require("dotenv").config();
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import jwt from "jsonwebtoken";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * 90000) + 10000;
  return randomNumber;
};

export const sendMail = (email) => {
  const options = {
    auth: {
      api_user: "ksbohyun",
      api_key: "qhgusdl93989358aA!",
    },
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "ksbohyun@gmail.com",
    to: address,
    subject: "인증메일",
    html: `인증 키 </br> <p style="font-size: 20px; font-weight: 600">${secret}</p>`,
  };
  return sendMail(email);
};

export const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET);
