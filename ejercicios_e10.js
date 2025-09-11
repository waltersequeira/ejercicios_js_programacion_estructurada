const partidos = [
    {
        juego: 1,
        LosToros: 0,
        SanFernando: 4
    },
 {
        juego: 2,
        LosToros: 8,
        SanFernando: 6
    },
 {
        juego: 3,
        equipo1: 5,
        equipo2: 3
    },
 {
        juego: 4,
        equipo1: 6,
        equipo2: 7
    },
 {
        juego: 5,
        equipo1: 0,
        equipo2: 1
    },
 {
        juego: 6,
        LosToros: 3,
        SanFernando: 1
    },
 {
        juego: 7,
        LosToros: 10,
        SanFernando: 5
    },

];

const numPartidos = partidos.length;

// Resultado del partido
for(let i = 0; i < numPartidos; i++){
    const p = partidos.shift();
    console.log(`Resultado del partido ${p.juego}: Los Toros ${p.LosToros} - San Fernando ${p.SanFernando}`);
}

console.log("Partidos:", partidos);

// Eliminacion del primer partido
const p1 = partidos.shift();


// Resultado del partido1
console.log(`Resultado del partido ${p1.juego}: Los Toros ${p1.LosToros} - San Fernando ${p1.SanFernando}`);

const p2 = partidos.shift();

// Resultado del partido2
console.log(`Resultado del partido ${p2.juego}: Los Toros ${p2.LosToros} - San Fernando ${p2.SanFernando}`);

const p3 = partidos.shift();

// Resultado del partido3
console.log(`Resultado del partido ${p3.juego}: Los Toros ${p3.LosToros} - San Fernando ${p3.SanFernando}`);

const p4 = partidos.shift();

// Resultado del partido4
console.log(`Resultado del partido ${p4.juego}: Los Toros ${p4.LosToros} - San Fernando ${p4.SanFernando}`);

const p5 = partidos.shift();

// Resultado del partido5
console.log(`Resultado del partido ${p5.juego}: Los Toros ${p5.LosToros} - San Fernando ${p5.SanFernando}`);

const p6 = partidos.shift();

// Resultado del partido6
console.log(`Resultado del partido ${p6.juego}: Los Toros ${p6.LosToros} - San Fernando ${p6.SanFernando}`);

const p7 = partidos.shift();

// Resultado del partido7
console.log(`Resultado del partido ${p7.juego}: Los Toros ${p7.LosToros} - San Fernando ${p7.SanFernando}`);

// Visualizar cola
console.log("Partidos:", partidos);