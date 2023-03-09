const letterToNumber = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'ñ': 15, 'o': 16, 'p': 17, 'q': 18, 'r': 19, 's': 20, 't': 21, 'u': 22, 'v': 23, 'w': 24, 'x': 25, 'y': 26, 'z': 27 };
const numberToLetter = { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'ñ', 16: 'o', 17: 'p', 18: 'q', 19: 'r', 20: 's', 21: 't', 22: 'u', 23: 'v', 24: 'w', 25: 'x', 26: 'y', 27: 'z' };
const message = 'Os ui esmq kqieker, c xicgu uslq jey sye jecgt nes esscu cynswi vinicpou oirxkss a ñmefq. ¿isq vmeog ñes ñirkvs, os? Gwtqu fmau ji jicjq ñycjcw esscu sye ñi fen ñmefq rirq eyaofs xio ne tezqo fi jecgtoo fifkomtkxemgoxe xelg ne rinc go tmeuis, ne tezqo rsr ne eyan ji fmcjq xelg ne rinc vvaicvmg nss oirxkss a jecgtoo gveu vy. Esmq ae vi jebtcw fedq eyeove gwtg vixvq os vmeog vmlfgw (ca jebncveñqw fi gwo lejc) a vemdkin esmq ae vi jebtcw fedq eyeove ne eeneksn sye gwtc usncoho gw "xeois iencu", ne qxrc xiz sye ne gwcwele ñi fm eyeove sye gw ñyy tiptgweovetkxe, nmtgtel gw esmq um ne riruqqa sye ne gwctkfiq jybkgwe niifq ñm ñinvg ryfh (in hmn, nyeiq ne gwcwelau esn gwtq gq ñinvg, fi ñsmgoxo rveuve ñycjc cxeoemoo c ns sye umgwg). Os ui sye vvakie go hytwts, rsr ñycjq vmeñrs vyvg ñmefq fi vsmct gwtc fickumóo (tot ñm, os rsr vm) ne xirfch ñi cxette sye uyftcw rsr ñm eylrc, rsr gwo vi rmdq sye umeñrve jebngpou fi nes esscu sye syigtis, vi iysvcq, os vi iysvcq a ryeu ui sye gq nes ñenqu fi Fmou vsdq uelg rerc dmeo a eveq sye vy a as gwtcñss gq nes ñenqu fi Fmou rsr gwo syigts ficktxe sye co hmn vyvg go xelqt rerc jecgt ns sye jerg a jey ñycjcw tezqois rerc jecgtoo: gveu wqa fi nes ñijqtis riruqqau sye Fmou ñi rirñkxiq esnqeir, gveu fyleg, cpadni, vmetoe, esnukhetcha, vmeogw wq esrcbsn jirñqwo a wqa dsnfch kqctgmbng, gwtct a jebncv esnvkko ñi vvag fimcumafc hilkemdcf, oynec gqcqoxrg ne relcdva gbaeve rerc tifgtmrñg c esmq vi rirekfo rirq vi cweiwvo sye gw umnqommq fi cvmqoma, vvaosyinkhaf, dmeogwtct, hilkemdcf a vsdq c ns sye ui ni rergei, vel xiz rsr gwo wqa uslc relcdva os gbiuvi rerc gwo, viniq iencu fi sye xmvcñss gwtc oyexc gxarc a sye rsdcñss eveegv a uir hilkeis, umeñrve syigts xirvg hilkb, rsr gwo c esnvkqucemoo...';
const dear = 'Syetkha Jmlk,'
const img = 'http://via.placeholder.com/550x360';
const img1 = 'kpg/kpaigqUoq.jrgk';
const img2 = 'kpg/kpaigqDqu.jrgk';

const encrypt = (text, key) => transform(text, key, false);
const decode = (text, key) => transform(text, key);

const transform = (text, key, decode = true) => {
    const words = text.split(' ');
    key = handleKey(key, decode);
    const transformedWords = [];

    words.forEach(w => transformedWords.push(transformWord(w, key)));

    return transformedWords.join(' ');
};

const handleKey = (key, decode) => {
    key = key.toString().split('').map(n => Number(n));
    if (decode) return key.map(n => n * -1);
    return key;
}

const transformWord = (word, key) => {
    let i = 0;
    let tWord = '';
    for (const letter of word.split('')) {
        if (i == 4) i = 0;
        const lowLetter = letter.toString().toLowerCase();
        let tLetter = transformLetter(lowLetter, key[i]);
        tWord += isUpperCase(letter) ? tLetter.toUpperCase() : tLetter;
        i++;
    }

    return tWord;
}

const transformLetter = (letter, times) => {
    const originalNumber = letterToNumber[letter];
    if (!originalNumber) return letter;

    let newNumber = originalNumber + times;
    if (newNumber > 27) newNumber -= 27;
    if (newNumber < 1) newNumber += 27;

    return numberToLetter[newNumber];
}

const isUpperCase = (letter) => {
    return letter === letter.toUpperCase();
}

const writeLetter = (dear, message, img1, img2) => {
    $('#message').text(message);
    $('#dear').text(dear);
    $('#img1').attr('src', img1);
    $('#img2').attr('src', img2);
}

const handleDecode = (key) => {
    if (key) {
        writeLetter(decode(dear, key), decode(message, key), decode(img1, key), decode(img2, key));
        setTimeout(() => {
            const element = document.getElementById("logo");
            element.scrollIntoView();
        }, 500);
    }
}

const triggerDecode = () => {
    Swal.fire({
        title: 'Ingresa la contraseña :)',
        input: 'text',
        inputAttributes: { autocapitalize: 'off' },
        confirmButtonText: 'Descifrar',
        confirmButtonColor: '#800020',
        preConfirm: handleDecode,
    });
}

$('document').ready(() => {
    writeLetter(dear, message, img, img);
});