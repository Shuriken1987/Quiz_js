class Question{
    constructor(text,options,answer,category,points){
        this.text = text;
        this.options = options;
        this.answer = answer;
        this.category = category;
        this.points = points;
    }
}

// let question = new Question('pitanje1',['opcija1','opcija2','opcija3','opcija4'],'opcija3','movie',5);

let questions = [
    new Question('Glavni grad Srbije ?',['Novi Sad','Nis','Beograd','Valjevo'],'Beograd','geografija',1),
    new Question('Ko je Kajzer Soze u filmu Dezurni krivci ?',['Al Pacino','Kevin Spacey','Dragan Nikolic','Benicio Del Toro'],'Kevin Spacey','movie',5),
    new Question('Kako se zvao frontmen grupe Dors?',['Jimi Hendrix','Ian Gilian','Jim Morison','Nick Cave'],'Jim Morison','music',2),
    new Question('Ko se smatra kumom Srpske kosarke?',['Zeljko Obradovic','Svetislav Pesic','Bozidar Maljkovic','Dusan Ivkovic'],'Dusan Ivkovic','sport',3),
    new Question('Koja grupa ima album Clandestino ?',['RHCP','Manu Chao','Rage Against the Machine','REM'],'Manu Chao','music',5),
    new Question('Ko je nadimak sina Cara Dusana ?',['Uros Nejaki','Uros Silni','Uros Veliki','Uros Mali'],'Uros Nejaki','istorija',4),
    new Question('Ko je predvodio Osmansku vojsku u bici za Konstntinopolj?',['Murat','Sulejman Velicanstveni','Mehmed II Osvajac','Bajazit'],'Mehmed II Osvajac','istorija',5),
    new Question('Koji instrument svira Vlada Divljan?',['Harmoniku','Gitaru','Violinu','Cimbalo'],'Gitaru','music',3),
    new Question('Cuveni vladar Mongola ?',['Ahila','Saladin','Dzingis Kan','Mao Ce'],'Dzingis Kan','istorija',5),
    new Question('Najmnogoljudnija zemlja na svetu?',['Indija','Rusija','USA','Kina'],'Kina','geografija',2),
    new Question('Policajac u filmu Munje ?',['Nebojsa Glogovac','Sergej Trifunovic','Nikola Djuricko','Zoran Cvijanovic'],'Nebojsa Glogovac','movie',3),
    new Question('Hrvatska pank grupa?',['KUD Idijoti','KUD POLET','KUD Muja','KUD Svi'],'KUD Idijoti','music',5)
];