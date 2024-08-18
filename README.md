
<h1 align="center">
    <a href="https://squadcalc.app">
      <img src="./src/img/github/logo.webp" alt="squadcalc logo">
    </a>
</h1>

<div align="center">
    <a href="https://github.com/sh4rkman/SquadCalc?tab=MIT-1-ov-file#readme">  
      <img src="https://img.shields.io/github/license/Naereen/StrapDown.js.svg?style=for-the-badge" alt="Licence"></a>
    <a href="https://squadcalc.app">
      <img src="https://up.sharkman.info/api/badge/3/uptime/72?style=for-the-badge" alt="Uptime">
    </a> 
</div>

<div align="center">
    <a href="https://github.com/sh4rkman/SquadCalc/issues/new">🪳 Report a Bug</a> &nbsp;&bull;&nbsp;
    <a href="https://github.com/sh4rkman/SquadCalc/wiki/Translating-SquadCalc"> 📜 Help to Translate</a> &nbsp;&bull;&nbsp;
    <a href="https://github.com/sh4rkman/SquadCalc/wiki">📖 Wiki</a> &nbsp;&bull;&nbsp;
    <a href="https://github.com/sh4rkman/SquadCalc/blob/master/CHANGELOG.md">🆕 ChangeLog</a>
</div>

</br>
</br>


# <div align="center">Introduction</div>

</br>


[squadcalc.app](https://squadcalc.app/) is a mortar calculator designed specifically for the game <a href="https://joinsquad.com/">Squad</a>.  
This tool facilitates rapid mortar calculations through two distinct modes:
1. **Interactive Map Mode:** This mode enables users to intuitively add visual targets by double-clicking on the map, allowing easy manipulation of weapons and targets through drag-and-drop functionality.

2. **Simple Legacy Mode:** For a straightforward approach, the legacy mode allows users to swiftly enter keypad inputs without the complexity of maps, buttons, or icons.
 


</br>
 
# <div align="center">Screenshots</div>

</br>

<div align="center">

  ![image](./src/img/github/desktop_ui_1.webp)
  ![image](./src/img/github/desktop_ui_2.webp)
  ![image](./src/img/github/desktop_ui_3.webp)
  ![image](./src/img/github/desktop_ui_4.webp)
  ![image](./src/img/github/desktop_ui_0.webp)

</div>

</br></br>

# <div align="center">Features</div>


## **Elevations Calculations**

SquadCalc utilizes heightmaps extracted from the Squad SDK to precisely compute the elevation difference between mortars and targets, automatically adjusting the elevation settings. [Check out the Wiki](https://github.com/sh4rkman/SquadCalc/wiki/Deducing-Altitude) to understand how it works.


## **Map Layers**

### Base map :
The classic, straight from the game base map.  

<div align="center">
  <picture>
    <img src="./src/img/github/basemap.webp" alt="base map">
  </picture>
</div>

### Terrain map :
Base map enhanced with bumpmap from SDK's heightmap. Add a better comprehension of terrain.  
Also known as "why the fuck is it not the default ingame map?"

<div align="center">
  <picture>
    <img src="./src/img/github/terrainmap.webp" alt="terrain map">
  </picture>
</div>

### Topographic map :
A mix of bump map, contour map with a touch of hypsometric colors for a complete understanding of map reliefs.

<div align="center">
  <picture>
    <img src="./src/img/github/topomap.webp" alt="topographic map">
  </picture>
</div>

## **Advanced informations & Simulation**

Get a better and complete understanding of your shots and visualise a simulation of the projectile path and the terrain between you and your targets. 
You can even see if terrain is going to block your projectiles when using low angle weapons ! (UB/GRAD) 

<div align="center">
  <picture>
    <img src="./src/img/github/simulation.webp" alt="target information">
  </picture>
  <picture>
    <img src="./src/img/github/weaponInformation.webp" alt="weapon information">
  </picture>
</div>

## **Advanced customisation**

Want to see Spread radius, time of flight, distance AND bearing for each targets ? You can.  
Rather have a minimalist/non-clustered map ? you can too. Hop in settings to customise everything.

<div align="center">
  <picture>
      <img src="./src/img/github/settings.webp">
  </picture>
</div>

</br></br>


# <div align="center">Map & Weapons Support</div>

|                                   |       **NAME**     |                                                    |
|-------------------------------------------------------------------|-----------------------|--------------------|
|<img height="40" src="./src/img/icons/mortar.png">                 | Mortars               |        ✅          |
|<img height="40" src="./src/img/icons/ub32_deployable.png">        | UB-32                 |        ✅          |
|<img height="40" src="./src/img/icons/hellcannon_white.png">       | Hell Canon            |        ✅          |
|<img height="40" src="./src/img/icons/technical_mortar_white.png"> | Technicals mortars    |        ✅          |
|<img height="40" src="./src/img/icons/ub32_white.png">             | Technicals/BRDM UB-32 |        ✅          |
|<img height="40" src="./src/img/icons/mlrs_white.png">             | BM-21 Grad            |        ✅          |
|<img height="40" src="./src/img/icons/m113a3_white.png">           | M1064-A3 120mm        |        ✅          |


| **MAPS**                    |      Supported               |
|-----------------------------|---------------------|
| Al Basrah                   |         ✅          |
| Anvil                       |         ✅          |
| Belaya                      |         ✅          |
| Black Coast                 |         ✅          |
| Chora                       |         ✅          |
| Fallujah                    |         ✅          |
| Fool's Road                 |         ✅          |
| Goose Bay                   |         ✅          |
| Gorodok                     |         ✅          |
| Harju                       |         ✅          |
| Jensen's Range              |         ✅          |
| Kamdesh Highlands           |         ✅          |
| Kohat Toi                   |         ✅          |
| Kokan                       |         ✅          |
| Lashkar Valley              |         ✅          |
| Logar Valley                |         ✅          |
| Manicouagan                 |         ✅          |
| Mestia                      |         ✅          |
| Mutaha                      |         ✅          |
| Narva                       |         ✅          |
| Narva (flooded)             |         ❌          |
| Pacific Proving Grounds     |         ❌          |
| Sanxian Islands             |         ✅          |
| Skorpo                      |         ✅          |
| Sumari Bala                 |         ✅          |
| Tallil Outskirts            |         ✅          |
| Yehorivka                   |         ✅          |
