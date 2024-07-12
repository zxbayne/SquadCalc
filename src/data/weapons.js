import classicLogo from "../img/icons/mortar.png";
import hellcannonLogo from "../img/icons/hellcannon_white.png";
import ub322Logo from "../img/icons/ub32_deployable.png";
import technicalLogo from "../img/icons/technical_mortar_white.png";
import mlrsLogo from "../img/icons/mlrs_white.png";
import ub32Logo from "../img/icons/ub32_white.png";
import m113Logo from "../img/icons/m113a3_white.png";
/* eslint no-unused-vars: "off" */
import target from "../img/icons/target.png";

import { mortarIcon, hellIcon, ub32Icon, tMortarIcon, tub32Icon, gradIcon, m121Icon} from "../js/squadIcon";

const UB32_table = [
    [100,  334.7778886114855],
    [200, 305.6459342280165],
    [300, 283.0585190456855],
    [400, 269.15585935988156],
    [500, 268.4445467197605],
    [600, 241.58938992870094],
    [700, 230.00396877923583],
    [800, 227.48886673532039],
    [900, 226.87144522938755],
    [1000, 219.29451804327465],
    [1100, 217.69947684093455],
    [1200, 213.47910836403614],
    [1300, 217.24714731055712],
    [1400, 215.84356249799185],
    [1500, 213.64675771020842],
    [1600, 210.37877185692568],
    [1700, 208.344434014631],
    [1800, 207.3186719065925],
    [1900, 207.57652270427334],
    [2000, 208.62643147834694],
    [2050, 208.4836594211979],
    //[2100, 206.292701799937445],
    [2178, 206.40174417867692],
];

export const WEAPONSTYPE = ["deployables", "vehicles"];

export var WEAPONS = [
    {
        name: "Mortar",
        velocity: 110,
        gravityScale: 1,
        minElevation: [800, 1579],
        unit: "mil",
        logo: classicLogo,
        marker: mortarIcon,
        logoCannonPos: "130%",
        type: "deployables",
        angleType: "high",
        elevationPrecision: 0,
        minDistance: 51,
        moa: 50,
        explosionDamage: 350,
        explosionRadius: [0, 40],
        explosionDistanceFromImpact: 1,
        damageFallOff: 7,
    },
    {
        name: "UB-32",
        velocity: UB32_table,
        gravityScale: 2,
        minElevation: [-25, 35],
        unit: "deg",
        logo: ub322Logo,
        marker: ub32Icon,
        logoCannonPos: "110%",
        type: "deployables",
        angleType: "low",
        elevationPrecision: 1,
        minDistance: 0,
        moa: 300,
        explosionDamage: 115,
        explosionRadius: [5, 18],
        explosionDistanceFromImpact: 0.2,
        damageFallOff: 1,
    },
    {
        name: "Hell Cannon",
        velocity: 95,
        gravityScale: 1,
        minElevation: [10, 85],
        unit: "deg",
        logo: hellcannonLogo,
        marker: hellIcon,
        logoCannonPos: "130%",
        type: "deployables",
        angleType: "high",
        elevationPrecision: 1,
        minDistance: 160,
        moa: 100,
        explosionDamage: 125,
        explosionRadius: [1, 50],
        explosionDistanceFromImpact: 2,
        damageFallOff: 1,
    },
    {
        name: "Tech. Mortar",
        velocity: 110,
        gravityScale: 1,
        minElevation: [-45, 135],
        unit: "deg",
        logo: technicalLogo,
        marker: tMortarIcon,
        logoCannonPos: "50%",
        type: "vehicles",
        angleType: "high",
        elevationPrecision: 1,
        minDistance: 51,
        moa: 50,
        explosionDamage: 350,
        explosionRadius: [0, 40],
        explosionDistanceFromImpact: 0.5,
        damageFallOff: 7,
    },
    {
        name: "Tech. UB-32",
        velocity: UB32_table,
        gravityScale: 2,
        minElevation: [-45, 135],
        unit: "deg",
        logo: ub32Logo,
        marker: tub32Icon,
        logoCannonPos: "55%",
        type: "vehicles",
        angleType: "low",
        elevationPrecision: 1,
        minDistance: 0,
        moa: 300,
        explosionDamage: 115,
        explosionRadius: [5, 18],
        explosionDistanceFromImpact: 0.2,
        damageFallOff: 1,
    },
    {
        name: "BM-21 Grad",
        velocity: 200,
        gravityScale: 2,
        minElevation: [-45, 135],
        unit: "deg",
        logo: mlrsLogo,
        marker: gradIcon,
        logoCannonPos: "60%",
        type: "vehicles",
        angleType: "low",
        elevationPrecision: 1,
        minDistance: 0,
        moa: 200,
        explosionDamage: 140,
        explosionRadius: [1, 35],
        explosionDistanceFromImpact: 2,
        damageFallOff: 1,
    },
    {
        name: "M1064 M121",
        velocity: 142,
        gravityScale: 1,
        minElevation: [45, 85.3],
        unit: "deg",
        logo: m113Logo,
        marker: m121Icon,
        logoCannonPos: "45%",
        type: "vehicles",
        angleType: "high",
        elevationPrecision: 1,
        minDistance: 340,
        moa: 50,
        explosionDamage: 100,
        explosionRadius: [10, 60],
        explosionDistanceFromImpact: 10,
        damageFallOff: 1.3,
        shells : [{
            moa: 40,
            explosionDamage: 400,
            explosionRadius: [0, 40],
            explosionDistanceFromImpact: 1,
            damageFallOff: 7,
        },
        {
            moa: 50,
            explosionDamage: 100,
            explosionRadius: [10, 60],
            explosionDistanceFromImpact: 10,
            damageFallOff: 1.3,
        },
        ]
    }    
];