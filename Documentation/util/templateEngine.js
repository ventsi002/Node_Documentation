import fs from "fs"

function renderPage(page, config = {}) {
    const navbar = fs.readFileSync("./public/components/navbar.html").toString()
        .replace("$TAB_TITLE", config.tabTitle)
        .replace("$CSS_LINK", config.cssLink)
        .replace("$LAST_WEEK", config.lastWeek)
        .replace("$HEAD", config.head);


    const footer = fs.readFileSync("./public/components/footer.html").toString()
        .replace("$NEXT_WEEK", config.nextWeek)
        .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}`);

    return navbar + page + footer
}

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}

export default {
    renderPage,
    readPage
};