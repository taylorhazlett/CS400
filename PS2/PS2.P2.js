function* words (str) {
    const sent = str.split(' ');
    const sentIterator = sent[Symbol.iterator]();

    let w = sentIterator.next();
    while (!w.done) {
        console.log(w.value);
        w = sentIterator.next();
    }
}
let song = words('All I know is something like a bird within her sang');
let lyrics = song.next();

while (!lyrics.done) {
    console.log(lyrics.next());
}

