let listaReferencia = [3, 2, 2, 3, 8, 9, 4, 1, 4, 7, 4]
const lengthArray = listaReferencia.length;
let listaRAM = [];
let flagFalta = 0;

if(listaReferencia !== null){
    for(var lr = 0; lr < lengthArray; lr++){
        let frame = listaReferencia.shift();
        let found = listaRAM.find(e => e == frame);
        
        if(found == undefined){ //caso o item da listaReferencia não esteja na listaRAM, pontua-se a falta de página
            listaRAM.push(frame);
            flagFalta++;
        }

        if(listaRAM.length > 3){
            listaRAM.shift();
        }

        console.log(listaRAM);
        
    }
    console.log("VALORES FINAIS: " + listaRAM);
    console.log(`Número de falta de páginas: ${flagFalta}`);
} else{
    console.log("A lista não existe");
}



