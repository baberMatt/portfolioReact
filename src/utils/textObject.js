var styleObject = {
    var: "varStyle",
    def: "defineStyle",
    plain: "plainStyle",
    const: "constStyle",
    func: "funcStyle",
    str: "strStyle",
    int: "intStyle",
    inline: "d-inline",
    ml2: "ml-2",
    ml5: "ml-5"
}




export var textObject = {
    "1": ["const ", styleObject.def, styleObject.inline],
    "2": ["technologies", styleObject.var, styleObject.inline],
    "3": [" = [", styleObject.plain, styleObject.inline],
    "4": ["'HTML'", styleObject.str, null, styleObject.ml2],
    "5": ["'CSS'", styleObject.str, null, styleObject.ml2],
    "6": ["'JavaScript'", styleObject.str, null, styleObject.ml2],
    "7": ["'Node.js'", styleObject.str, null, styleObject.ml2],
    "8": ["'React.js'", styleObject.str, null, styleObject.ml2],
    "9": ["'MySQL'", styleObject.str, null, styleObject.ml2],
    "10": ["'MongoDB'", styleObject.str, null, styleObject.ml2],
    "15": ["'Git'", styleObject.str, null, styleObject.ml2],
    "16": ["'Heroku'", styleObject.str, null, styleObject.ml2],
    "17": ["'Postman'", styleObject.str, null, styleObject.ml2],
    "18": ["]", styleObject.plain],
    "19": ["function ", styleObject.def, styleObject.inline],
    "20": ["loadTechnologies", styleObject.func, styleObject.inline],
    "21": ["() {", styleObject.plain, styleObject.inline],
    "22": ["1"],
    "23": ["technologies.", styleObject.var, styleObject.inline, styleObject.ml2],
    "24": ["map", styleObject.func, styleObject.inline],
    "25": ["(", styleObject.plain, styleObject.inline],
    "26": ["item ", styleObject.var, styleObject.inline],
    "27": ["=> ", styleObject.def, styleObject.inline],
    "28": ["(", styleObject.plain, styleObject.inline],
    "29": ["1"],
    "30": ["let ", styleObject.def, styleObject.inline, styleObject.ml5],
    "31": ["icon ", styleObject.var, styleObject.inline],
    "32": ["= ", styleObject.plain, styleObject.inline],
    "33": ["document.", styleObject.var, styleObject.inline],
    "34": ["createElement", styleObject.func, styleObject.inline],
    "35": ["(", styleObject.plain, styleObject.inline],
    "36": ["'img'", styleObject.str, styleObject.inline],
    "37": [")", styleObject.plain, styleObject.inline],
    "38": ["1"],
    "39": ["icon.src ", styleObject.var, styleObject.inline, styleObject.ml5],
    "40": ["= ", styleObject.plain, styleObject.inline],
    "41": ["`/assets/icons/`", styleObject.str, styleObject.inline],
    "42": ["${", styleObject.def, styleObject.inline],
    "43": ["item", styleObject.var, styleObject.inline],
    "44": ["}", styleObject.def, styleObject.inline],
    "45": ["`", styleObject.str, styleObject.inline],
    "46": ["1"],
    "47": ["document.", styleObject.var, styleObject.inline, styleObject.ml5],
    "48": ["getElementById", styleObject.func, styleObject.inline],
    "49": ["(", styleObject.plain, styleObject.inline],
    "50": ["'tech'", styleObject.str, styleObject.inline],
    "51": [").", styleObject.plain, styleObject.inline],
    "52": ["appendChild", styleObject.func, styleObject.inline],
    "53": ["(", styleObject.plain, styleObject.inline],
    "54": ["icon", styleObject.var, styleObject.inline],
    "55": [")", styleObject.plain, styleObject.inline],
    "91": ["));", styleObject.plain, null, styleObject.ml2],  
    "92": ["};", styleObject.plain] 

}