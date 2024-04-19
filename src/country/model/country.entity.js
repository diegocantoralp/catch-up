export class Country{
    constructor(name= '', officialName = ' ',  capital=' ', region = ' ', subregion = ' ',  area = 0.0, population = 0, flag = ' ', coatOfArms = ' ') {
        this.name=name;
        this.officialName = officialName;
        this.capital = capital;
        this.region = region;
        this.subregion = subregion;
        this.area =area;
        this.population =population;
        this.flag = flag;
        this.coatOfArms = coatOfArms;
    }
}