function sentensify(str) {
    return str.split(/[-,.\s]/g).join(" ");
}
sentensify("May-the-force-be-with-you");
