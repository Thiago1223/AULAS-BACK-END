function getExame(mediaAluno, notaDoExame){

    let media = mediaAluno;
    let notaExame = notaDoExame;

    let mediaExame = (parseFloat(media) + parseFloat(notaExame)) / 2;

    return mediaExame;

}

module.exports = {
    getExame
}