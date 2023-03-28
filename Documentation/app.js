import express from "express";
import path from "path";
import templateEngine from "./util/templateEngine.js";
const app = express();

app.use(express.static("public"));

const week1 = templateEngine.readPage("./public/documentationPageWeek1/documentationPage.html");
const week1Page = templateEngine.renderPage(week1, {
    tabTitle: "Documentation week 1",
    cssLink: `<link rel="stylesheet" href="./documentationPageWeek1/documentationPage.css">`,
    lastWeek: `<a href="./documentation-week-1">`,
    head: "Documentation week 1",
    nextWeek: `<a href="./documentation-week-2">`
});

const week2 = templateEngine.readPage("./public/documentationPageWeek2/documentationPage.html");
const week2Page = templateEngine.renderPage(week2, {
    tabTitle: "Documentation week 2",
    cssLink: `<link rel="stylesheet" href="./documentationPageWeek2/documentationPage.css">`,
    lastWeek: `<a href="./documentation-week-1">`,
    head: "Documentation week 2",
    nextWeek: `<a href="./documentation-week-3">`
});

const week3 = templateEngine.readPage("./public/documentationPageWeek3/documentationPage.html");
const week3Page = templateEngine.renderPage(week3, {
    tabTitle: "Documentation week 3",
    cssLink: `<link rel="stylesheet" href="./documentationPageWeek3/documentationPage.css">`,
    lastWeek: `<a href="./documentation-week-2">`,
    head: "Documentation week 3",
    nextWeek: `<a href="./documentation-week-4">`
});

const week4 = templateEngine.readPage("./public/documentationPageWeek4/documentationPage.html");
const week4Page = templateEngine.renderPage(week4, {
    tabTitle: "Documentation week 4",
    cssLink: `<link rel="stylesheet" href="./documentationPageWeek4/documentationPage.css">`,
    lastWeek: `<a href="./documentation-week-3">`,
    head: "Documentation week 4",
    nextWeek: `<a href="./documentation-week-5">`
});

const week5 = templateEngine.readPage("./public/documentationPageWeek5/documentationPage.html");
const week5Page = templateEngine.renderPage(week5, {
    tabTitle: "Documentation week 5",
    cssLink: `<link rel="stylesheet" href="./documentationPageWeek5/documentationPage.css">`,
    lastWeek: `<a href="./documentation-week-4">`,
    head: "Documentation week 5",
    nextWeek: `<a href="./documentation-week-6">`
});

const week6 = templateEngine.readPage("./public/documentationPageWeek6/documentationPage.html");
const week6Page = templateEngine.renderPage(week6, {
    tabTitle: "Documentation week 6",
    cssLink: `<link rel="stylesheet" href="./documentationPageWeek6/documentationPage.css">`,
    lastWeek: `<a href="./documentation-week-5">`,
    head: "Documentation week 6",
    nextWeek: `<a href="./documentation-week-7">`
});

const week7 = templateEngine.readPage("./public/documentationPageWeek7/documentationPage.html");
const week7Page = templateEngine.renderPage(week7, {
    tabTitle: "Documentation week 7",
    cssLink: `<link rel="stylesheet" href="./documentationPageWeek7/documentationPage.css">`,
    lastWeek: `<a href="./documentation-week-6">`,
    head: "Documentation week 7",
    nextWeek: `<a href="./documentation-week-7">`
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage/frontpage.html"));
});


app.get("/documentation-week-1", (req, res) => {
    res.send(week1Page);
});

app.get("/documentation-week-2", (req, res) => {
    res.send(week2Page);
});

app.get("/documentation-week-3", (req, res) => {
    res.send(week3Page);
});

app.get("/documentation-week-4", (req, res) => {
    res.send(week4Page);
});

app.get("/documentation-week-5", (req, res) => {
    res.send(week5Page);
});

app.get("/documentation-week-6", (req, res) => {
    res.send(week6Page);
});

app.get("/documentation-week-7", (req, res) => {
    res.send(week7Page);
});


app.listen(8080);


