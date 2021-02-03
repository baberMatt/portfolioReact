import { defaultTheme } from "react-select"

export var text = [
    "const Languages = [",
    "'HTML',",
    "'CSS',",
    "'JavaScript',",
    "'jQuery',",
    "'nodeJS',",
    "'MySQL',",
    "'MongoDB',",
    "'ReactJS']",
    "const Applications = [",
    "'Git',",
    "'Heroku',",
    "'Postman',",
    "'MySQL Workbench',",
    "'MongoDBCompass']",
    "function loadLanguagesAndApps() {",
    "   for (i=0; i < Languages.length; i++){",
    "       let icon = document.createElement('img')",
    "       icon.src = `/assets/icons/${Languages[i]}`",
    "       document.getElementById('tech').appendChild(icon)",
    "   };",
    "   for (i=0; i < Applications.length; i++){",
    "       let icon = document.createElement('img')",
    "       icon.src = `/assets/icons/${Applications[i]}`",
    "       document.getElementById('tech').appendChild(icon)",
    "   };",
    "};"
]

