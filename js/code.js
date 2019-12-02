const A = "ぁ".charCodeAt();
const N = "ん".charCodeAt();
const PER = A - 10;

const getCharset = () => {
    codelist = {};
    for(let i = A; i <= N; i++) {
        codelist[String.fromCharCode(i)] = i - PER;
    }
    codelist["ー"] = 93; //93
    return codelist;
};

const str2code = (str) => {
    let rst = "";
    for(const c of str) {
        rst += (c == "ー" || c == "-")? "93" : `${c.charCodeAt() - PER}`;
    }
    return rst;
};

const code2str = (code) => {
    let rst = "";
    for(let idx = 0; idx < code.length; idx += 2) {
        const c = parseInt(code.substring(idx, idx + 2));
        rst += (c == 93)? "ー" : String.fromCharCode(c + PER);
    }
    return rst;
};
