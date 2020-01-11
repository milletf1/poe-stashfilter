/** Regex for checking one handed weapon items */
export const ONE_HAND_WEAPON_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/OneHandWeapons\//;
/** Regex for checking two handed weapon items */
export const TWO_HAND_WEAPON_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/TwoHandWeapons\//;
/** Regex for checking bows */
export const BOW_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/TwoHandWeapons\/Bows\//;
/** Regex for checking claws */
export const CLAW_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/OneHandWeapons\/Claws\//;
/** Regex for checking daggers */
export const DAGGER_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/OneHandWeapons\/Daggers\//;
/** Regex for checking one handed axes */
export const ONE_HAND_AXE_TEST_REGEX: RegExp =
  /.*\/2DItems\/Weapons\/OneHandWeapons\/OneHandAxes\//;
/** Regex for checking one handed maces */
export const ONE_HAND_MACE_TEST_REGEX: RegExp =
  /.*\/2DItems\/Weapons\/OneHandWeapons\/OneHandMaces\//;
/** Regex for checking one handed swords */
export const ONE_HAND_SWORD_TEST_REGEX: RegExp =
  /.*\/2DItems\/Weapons\/OneHandWeapons\/OneHandSwords\//;
/** Regex for checking sceptre typeline */
export const SCEPTRE_TYPELINE_TEST_REGEX: RegExp = /(Sceptre$)|(Sceptre\ of\ .+)/;
/** Regex for checking staves */
export const STAFF_TEST_REGEX: RegExp =
  /.*\/2DItems\/Weapons\/TwoHandWeapons\/Staves\//;
/** Regex for checking two handed axes */
export const TWO_HAND_AXE_TEST_REGEX: RegExp =
  /.*\/2DItems\/Weapons\/TwoHandWeapons\/TwoHandAxes\//;
/** Regex for checking two handed maces */
export const TWO_HAND_MACE_TEST_REGEX: RegExp =
  /.*\/2DItems\/Weapons\/TwoHandWeapons\/TwoHandMaces\//;
/** Regex for checking two handed swords */
export const TWO_HAND_SWORD_TEST_REGEX: RegExp =
  /.*\/2DItems\/Weapons\/TwoHandWeapons\/TwoHandSwords\//;
/** Regex for checking wands */
export const WAND_TEST_REGEX: RegExp =
  /.*\/2DItems\/Weapons\/OneHandWeapons\/Wands\//;
/** Regex for checking body armours */
export const BODY_ARMOUR_TEST_REGEX: RegExp = /.*\/2DItems\/Armours\/BodyArmours\//;
/** Regex for checking boots */
export const BOOTS_TEST_REGEX: RegExp = /.*\/2DItems\/Armours\/Boots\//;
/** Regex for checking gloves */
export const GLOVES_TEST_REGEX: RegExp = /.*\/2DItems\/Armours\/Gloves\//;
/** Regex for checking helmets */
export const HELMET_TEST_REGEX: RegExp = /.*\/2DItems\/Armours\/Helmets\//;
/** Regex for checking shields */
export const SHIELD_TEST_REGEX: RegExp = /.*\/2DItems\/Armours\/Shields\//;
/** Regex for checking amulets */
export const AMULET_TEST_REGEX: RegExp = /.*\/2DItems\/Amulets\//;
/** Regex for checking beasts */
export const BEAST_TEST_REGEX: RegExp = /.*\/2DItems\/Currency\/BestiaryOrbFull\.png/;
/** Regex for checking belts */
export const BELT_TEST_REGEX: RegExp = /.*\/2DItems\/Belts\//;
/** Regex for checking cards */
export const CARD_TEST_REGEX: RegExp = /.*\/2DItems\/Divination\//;
/** Regex for checking essences */
export const ESSENCE_TEST_REGEX: RegExp = /.*\/2DItems\/Currency\/Essence\//;
/** Regex for checking fishing rods */
export const FISHING_ROD_TEST_REGEX: RegExp = /.*\/2DItems\/Weapons\/TwoHandWeapons\/FishingRods\//;
/** Regex for checking flasks */
export const FLASK_TEST_REGEX: RegExp = /https:\/\/web\.poecdn\.com\/gen\/image\/.*\/Item\.png/;
/** Regex for checking gems */
export const GEM_TEST_REGEX: RegExp = /.*\/2DItems\/Gems\//;
/** Regex for checking incubators */
export const INCUBATOR_TEST_REGEX: RegExp = /.*\/2DItems\/Currency\/Incubation\//;
/** Regex for checking jewels */
export const JEWEL_TEST_REGEX: RegExp = /.*\/2DItems\/Jewels\//;
/** Regex for checking leaguestones */
export const LEAGUESTONE_TEST_REGEX: RegExp = /.*\/2DItems\/Currency\/Classic\//;
/** Regex for checking maps */
export const MAP_TEST_REGEX: RegExp = /.*\/2DItems\/Maps\/AtlasMaps\/(?!Fragment).*/;
/** Regex for checking nets */
export const NET_TEST_REGEX: RegExp = /.*\/2DItems\/Currency\/BestiaryTrap/;
/** Regex for checking prophecies */
export const PROPHECY_TEST_REGEX: RegExp = /.*\/2DItems\/Currency\/ProphecyOrb/;
/** Regex for checking quivers */
export const QUIVER_TEST_REGEX: RegExp = /.*\/2DItems\/Quivers\//;
/** Regex for checking rings */
export const RING_TEST_REGEX: RegExp = /.*\/2DItems\/Rings\//;
/** Regex for checking scarabs */
export const SCARAB_TEST_REGEX: RegExp = /.*\/2DItems\/Currency\/Scarabs/;
/** Regex for checking map fragments */
export const MAP_FRAGMENT_TEST_REGEX: RegExp =
  /.*\/2DItems\/Maps\/((Uber)?Vaal(?!Shard)|.*Fragment|AtlasMapGuardian)/;
/** Regex for checking resonators */
export const RESONATOR_TYPELINE_TEST_REGEX: RegExp = /.*\ Resonator$/;
/** Regex for checking fossils */
export const FOSSIL_TEST_REGEX: RegExp = /.*\/2DItems\/Currency\/Delve\/.*Fossil\.png/;
/** Regex for checking divine vessels */
export const DIVINE_VESSEL_TEST_REGEX: RegExp = /.*\/2DItems\/Maps\/SinFlask.*\.png/;
/** Regex for checking splinters */
export const SPLINTER_TEST_REGEX: RegExp =
  /.*\/2DItems\/(Maps\/.+Shard|Currency\/Breach\/BreachShard.+)\.png/;
/** Regex for checking splinter typeline */
export const SPLINTER_TYPELINE_TEST_REGEX: RegExp = /(^Splinter\ of|Splinter$)/;
/** Regex for checking breachstones */
export const BREACHSTONE_TEST_REGEX: RegExp =
  /.*\/2DItems\/Currency\/Breach\/BreachFragments.+\.png/;
/** Regex for checking currency */
// tslint:disable-next-line:max-line-length
export const CURRENCY_TEST_REGEX: RegExp = /.*\/2DItems\/Currency\/(?!Bestiary(OrbFull|Trap\d)|ProphecyOrbRed|(?!Oils|Catalysts).+\/).+\.png/;
/** Regex for checking metamorph organs */
export const ORGAN_TEST_REGEX: RegExp = /.*\/2DItems\/Currency\/Metamorph/;
