const skills: string[] = ['bash', 'counter', 'healing'];

interface IHero{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // optional
}

const hero: IHero = {
  name: "Armando",
  hp: 100,
  skills: ["bash", "counter"],
};

hero.hometown = 'Oregon';

console.table(hero);

export {}
