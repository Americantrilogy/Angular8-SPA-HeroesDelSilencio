import { Injectable } from '@angular/core';

@Injectable()
export class DiscografiaService {

    private discografia: Vinilo[] = [
        {
        artist: 'Heroes del Silencio',
        date: '1987',
        album: 'Heroes Del Silencio (EP)',
        cover: 'https://images.coveralia.com/audio/h/Heroes_Del_Silencio-Heroe_De_Leyenda_(Ep)-Frontal.jpg',
        description: 'Héroes del Silencio (también llamado Héroe de leyenda) es un EP y primer trabajo del grupo español Héroes del Silencio, producido por Roberto Durruty y Gustavo Montesano y arreglado por el propio grupo. Fue publicado en el año 1987. El disco fue concebido después de que el productor Roberto Durruty y su amigo y socio Gustavoo Montesano (Olé Olé) les viera tocar en la sala "En Bruto" y los pusiera en contacto con la discográfica EMI. La idea fundamental de este trabajo era una prueba, en la que la compañía apostaba con la grabación de este maxi sencillo. La portada de este trabajo fue realizada por Roberto Durruty su mánager quien estaba permanentemente encima de los pasos de esta banda que comenzaba su andadura en una multinacional. La idea de esta portada era mantener el estilo dark de la banda, ya que sus influencias de la época eran The Mission, Sisters of Mercy y The Cure. Cuando la compañía discográfica lanzó al mercado este trabajo, su meta era vender 5.000 copias. La venta de 30.000 copias constituyó toda una sorpresa, hazaña que ningún grupo había podido lograr, ni siquiera la banda Vam Cyborg quienes ya tenían disco en las tiendas. El impresionante número de copias vendidas de este EP, motivó a que EMI lanzara al mercado un segundo tiraje de este trabajo, cambiando la portada para hacerla más atractiva comercialmente.'
    },
    {
        artist: 'Heroes del Silencio',
        date: '31.10.1988',
        album: 'El Mar No Cesa',
        cover: 'https://images.coveralia.com/audio/h/Heroes_Del_Silencio-El_Mar_No_Cesa-Frontal.jpg',
        description: 'El Mar No Cesa es el primer álbum de estudio de la banda española Héroes del Silencio publicado el 31 de octubre de 1988.1​ Fue grabado en los estudios Hispavox, bajo la producción de Gustavo Montesano y Roberto Durruty. Se han hecho dos ediciones diferentes, la primera en vinilo, en la que no se incluían las canciones «Olvidado» y «La Visión de Vuestras Almas», incluidas en la segunda, en CD. Cabe mencionar la grabación de las canciones «El Cuadro» y «Hologramas» para este trabajo discográfico, solo la segunda fue incluida como cara B del sencillo «Agosto», ambas se reeditaron en 1998 en el álbum Rarezas. Las canciones «Fuente Esperanza», «Flor Venenosa», «Agosto» y «Héroe de Leyenda» fueron regrabadas vocalmente por Enrique Bunbury en el año 2000, para el recopilatorio Canciones 1984-1996.​'
    },
    {
        artist: 'Heroes del Silencio',
        date: '08.09.1989',
        album: 'En Directo',
        cover: 'https://img.discogs.com/e9lvFmp2pyoeQXAPMu-fOPZi-JI=/fit-in/500x498/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3280413-1323719131.jpeg.jpg',
        description: 'En Directo es un EP grabado en directo por el grupo español Héroes del Silencio el día 8 de septiembre de 1989, en Villanueva del Arzobispo (Jaén). Fue producido por Carlos Martos y Héroes del Silencio, y mezclado en Eurosonic (Madrid), los días 14 y 15 de septiembre de 1989. De edición limitada, este disco salió a la venta en diciembre de 1989, con un tiraje de 5000 copias solo en España. Éste a su vez se volvió a editar en la edición conmemorativa con el regreso de Héroes Del Silencio en 2007, aunque algunos fanes consideran solamente de valor al EP de la edición de 1989. Este EP fue una forma de "mimar" a sus seguidores más asiduos; dado que el grupo no se encontraba conforme con el resultado y la sobre-producción de su primer álbum de estudio, El Mar No Cesa, sintieron la necesidad de mostrarle a los críticos y a sus seguidores que no eran un grupo prefabricado y que tenían presencia sobre el escenario. El Vinilo En Directo fue todo un éxito comercial y se ha convertido en un verdadero objeto de culto que en el mercado negro alcanza cifras sólo reservadas para los fetiches de los grandes del Rock & Roll.'
    },
    {
        artist: 'Heroes del Silencio',
        date: '04.12.1990',
        album: 'Senderos De Traición',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/71NlSZLnDtL._SL1400_.jpg',
        description: 'Senderos de Traición es el segundo álbum de estudio de la banda española Héroes del Silencio, grabado en los estudios Kirios (Madrid) bajo la producción de Phil Manzanera para Sound & Management (Zúrich). Fue mezclado en Metropolis Studios (Londres), contando con Keith Bessey como ingeniero de sonido y mezclas. La banda ha considerado éste el mejor disco de su carrera y donde la crítica comenzó a apoyarles más; era un disco completamente introspectivo y muy acorde a la época, haciendo una fusión de sonidos entre el rock gótico, el pop y el hard rock. Las mayores influencias fueron The Cult y New Model Army. Ha sido considerado un disco recopilatorio, quizás por las demostraciones incluidas en maquetas y conciertos dados en el momento, tal como es el caso de «Entre Dos Tierras» y «Maldito Duende», que datan de 1987 (y que se puede encontrar en la maqueta Azulejos, de 1993), así como «El Cuadro II», de 1985 en su primera interpretación. Las letras comienzan a ser más profundas, explotando más a fondo los sentimientos, la ira, la frustración, la tristeza, la melancolía; los efectos causados por las drogas se muestran de manera explícita, como en el tema «Hechizo». Fue su primer número uno en España y el primer álbum que entró en las listas de ventas en Alemania. En el número de agosto de 2009, en la edición española de la revista Rolling Stone, Senderos de traición fue considerado como el segundo mejor disco de rock español.​'
    },
    {
        artist: 'Heroes del Silencio',
        date: '26.09.1991',
        album: 'Senda \'91',
        cover: 'https://images.coveralia.com/audio/h/Heroes_Del_Silencio-Senda__91-Frontal.jpg',
        description: 'Senda \'91 es un EP en directo de la banda zaragozana Héroes del Silencio. Grabado con el soporte de la unidad móvil de los estudios Kirios (Madrid) el 26 de septiembre de 1991 en Las Rozas de Madrid. Producido por Keith Bessey y Héroes del Silencio. Este disco que marcó una etapa en la carrera de Héroes del Silencio, en él se reúne lo mejor del concierto que se llevó a cabo en el municipio de Las Rozas de Madrid. En el librito del disco podemos encontrar una serie de "collages", en donde se muestran las críticas acogidas durante esta gira, mostradas como recortes de periódicos, en su mayoría, críticas negativas hacia la banda. La forma de distribución fue sumamente extraña, puesto que la discográfica anunció que este iba a ser una edición limitada, el grupo argumentó que era un modo de hacer un pequeño presente a sus seguidores más asiduos. En cada tienda de discos, se hacían enormes filas para hacer llegar este álbum, por medio de boletos o "tickets", en donde se pagaba el monto del ticket, y se hacía la entrega del artefacto. Cabe destacar un hecho, raro y casi endemoniado envolvía más en ese misterio a la banda, no sólo por sus letras, si no, por un mensaje oculto que se encuentra al final de la canción "Hologramas", que si se hacía recorrer el LP hacia atrás, se podía escuchar con claridad un mensaje que dice así: "Y entre cada palabra y sílaba pronunciada como surco áspero al recorrer, quedarán mensajes sin descifrar que escondan mentiras aprendidas". En el tema "Decadencia" se incluye una magnífica adaptación de "El Cuervo". Y en "Con Nombre de Guerra", se incluye, de forma irónica en la grabación, los errores al ejecutar la pieza musical..​'
    },
    {
        artist: 'Heroes del Silencio',
        date: '14.06.1993',
        album: 'El Espiritu Del Vino',
        cover: 'https://images.coveralia.com/audio/h/Heroes_Del_Silencio-El_Espiritu_Del_Vino-Frontal.jpg',
        description: 'El espíritu del vino es el título del tercer álbum de estudio del grupo español Héroes del Silencio. Se grabó en los estudios Gallery en Chertsey (Surrey), bajo la producción musical de Phil Manzanera, y fue mezclado en los estudios Metropolis de Londres. Se presentó simultáneamente para toda Europa en Berlín, Alemania, el 3 de junio de 1993. Es, según algunas opiniones, el disco más exitoso de la carrera de Héroes del Silencio, donde explotan su faceta más roquera, inspirándose en el rock and roll de los años 60 y 70. Además, se hizo patente la influencia de Phil Manzanera. Los pianos y hammond estuvieron a cargo de Copi Corellano, mientras que el propio Manzanera se encargó de la guitarra rítmica. Las letras se tornaron mucho más complejas, lo que sería la seña de identidad del grupo. En conjunto es un disco complejo, extenso, barroco, experimental. A menudo se identifica este álbum con los excesos que rodearon esta etapa del grupo; de hecho la gira que lo llevaría al directo sería bautizada como "Camino del Exceso". Aunque podemos encontrar una influencia obvia en el poema El alma del vino de Charles Baudelaire, el título ha sido atribuido a la inspiración surgida en un momento en el que la agrupación se encontraba en pleno estado de ebriedad. Las letras son el claro reflejo de ello, y han sido identificadas las drogas, los sueños y la poesía simbólica. En la edición LP el formato fue de disco doble, y en la edición CD, un disco con 16 temas. Fue número uno en España y alcanzó el número nueve en Alemania, su mayor éxito allí. También fue, debido a su complejidad instrumental, un álbum en que fue necesaria la presencia de una segunda guitarra, puesto que le fue asignado al guitarrista mexicano Alan Boguslavsky, como apoyo a Juan Valdivia.'
    },
    {
        artist: 'Heroes del Silencio',
        date: '18.09.1995',
        album: 'Avalancha',
        cover: 'https://images.coveralia.com/audio/h/Heroes_Del_Silencio-Avalancha-Frontal.jpg',
        description: 'Avalancha es el título del cuarto y último álbum de estudio del grupo español de rock Héroes del Silencio. Fue grabado en los estudios Soundcastle en Los Ángeles, California, bajo la producción de Andrew Jackson y Bob Ezrin. La discográfica EMI lo lanzó al mercado el 18 de septiembre de 1995. El ingeniero de sonido fue Andrew Jackson y el ayudante de ingeniero, Chris Roberts. En este disco, que a diferencia de El espíritu del vino y Senderos de traición marca un gran cambio en la música de Héroes del Silencio, Alan Boguslavsky entra oficialmente como integrante y es bautizado por Enrique Bunbury como "El Azteca de Oro". Las letras denotan una preocupación o un modo de sentir referente a temas sociales: la apatía, el agobio, la avaricia, los sentimientos de la gente que enarbola la bandera del estancamiento, afloran en este disco. Avalancha invita a un cambio. No solo demuestra la madurez del grupo, musicalmente hablando, sino que se invita a la gente a no quedarse callada, a levantarse y romper con las cadenas de la opresión. A pesar de ser un disco innovador, no alcanza los logros de sus anteriores trabajos, sobre todo con El espíritu del vino. Lleno de energía, este LP presenta guitarras mucho más potentes que demuestran la afición de Juan Valdivia por el Hard rock, plasmadas en cada riff de su guitarra. También hay influencias de bandas grunge como Soundgarden o Alice in Chains. Es el álbum más potente y "norteamericano" de Héroes del Silencio, y también, para algunos, el que mejor ha aguantado el tiempo gracias a su producción. Los demos fueron grabados en un retiro de la zona de Los Pirineos, llamado, "El Hospital de Benasque", lugar que fue aprovechado durante la época laboral para cerrarlo y comenzar a trabajar en lo que fuera su 4º trabajo de estudio; además, fue un momento para entibiar las relaciones entre los miembros de la banda, que ya se empezaban a tornar tormentosas. De estas sesiones se extrajeron los demos que en su tiempo fueron publicados por El Exceso S.L., en edición limitada, y que más tarde fueron publicados en el disco "Rarezas". En un principio se tenía en mente, que el disco se llamase "Babel", una perfecta continuación a lo que fuera El Espíritu del Vino. El álbum fue número uno en España y entró en el top 30 en Alemania. La canción "Avalancha" fue incluida en la lista de canciones de Guitar Hero III: Legends Of Rock como una canción bonus..​'
    },
    {
        artist: 'Heroes del Silencio',
        date: '30.09.1996',
        album: 'Parasiempre',
        cover: 'https://images.coveralia.com/audio/h/Heroes_Del_Silencio-Parasiempre-Frontal.jpg',
        description: 'Parasiempre es el disco que publicó Héroes del Silencio tras terminar la gira de Avalancha. Éste es un doble CD en directo que recoge sus temas en dos conciertos: (el 7 de junio en Madrid y el 8 de junio de 1996 en Zaragoza). Este fue su último disco del grupo juntos, ya que después de este CD se separaron. Llegó al número de uno de ventas en España.'
    }
];

    constructor() {
        console.log('servicio listo para usar!!!');
    }

    getDiscografia(): Vinilo[] {
        return this.discografia;
    }

    getDisco(indice: string) {
        return this.discografia[indice];
    }

    buscarDiscos(termino: string) {
        let discosArr: Vinilo[] = [];
        termino = termino.toLowerCase();
        for (let i = 0; i < this.discografia.length; i++) {
            let disco = this.discografia[i];
            let nombre = disco.album.toLowerCase();
            if (nombre.indexOf(termino) >= 0) {
                disco.idx = i;
                discosArr.push(disco);
            }
        }

        return discosArr;
    }
}

export interface Vinilo {
    artist: string;
    date: string;
    album: string;
    cover: string;
    description: string;
    idx?: any;
}