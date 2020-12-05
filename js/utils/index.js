export function getValeFromXML(value) {
    let DOMParser = require('xmldom').DOMParser;
    let doc = new DOMParser().parseFromString(value);
    return doc.getElementsByTagName('item');
}

export function getSpecificValeFromXML(value,tag) {
    let DOMParser = require('xmldom').DOMParser;
    let doc = new DOMParser().parseFromString(value);
    return doc.getElementsByTagName(tag);
}