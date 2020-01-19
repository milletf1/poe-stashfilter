import { IMod } from '../IModFilterParams';
import { ModFilterType } from '../ModFilterType';

export const mapModRegexes: IMod[] = [
  {
    label: '# Flask Charges recovered every 3 seconds',
    regex: /(\d+) Flask Charges recovered every 3 seconds/,
    type: ModFilterType.MAP,
  },
  {
    label: '#% increased Experience gain',
    regex: /(\d+)% increased Experience gain/,
    type: ModFilterType.MAP,
  },
  {
    label: '#% increased Monster Attack Speed',
    regex: /(\d+)% increased Monster Attack Speed/,
    type: ModFilterType.MAP,
  },
  {
    label: '#% increased Monster Cast Speed',
    regex: /(\d+)% increased Monster Cast Speed/,
    type: ModFilterType.MAP,
  },
  {
    label: '#% increased Monster Damage',
    regex: /(\d+)% increased Monster Damage/,
    type: ModFilterType.MAP,
  },
  {
    label: '#% increased Monster Movement Speed',
    regex: /(\d+)% increased Monster Movement Speed/,
    type: ModFilterType.MAP,
  },
  {
    label: '#% increased Quantity of Items found in this Area',
    regex: /(\d+)% increased Quantity of Items found in this Area/,
    type: ModFilterType.MAP,
  },
  {
    label: '#% increased Rarity of Items found in this Area',
    regex: /(\d+)% increased Rarity of Items found in this Area/,
    type: ModFilterType.MAP,
  },
  {
    label: '#% less effect of Curses on Monsters',
    regex: /(\d+)% less effect of Curses on Monsters/,
    type: ModFilterType.MAP,
  },
  {
    label: '#% more Magic Monsters',
    regex: /(\d+)% more Magic Monsters/,
    type: ModFilterType.MAP,
  },
  {
    label: '#% more Monster Life',
    regex: /(\d+)% more Monster Life/,
    type: ModFilterType.MAP,
  },
  {
    label: '#% more Rare Monsters',
    regex: /(\d+)% more Rare Monsters/,
    type: ModFilterType.MAP,
  },
  {
    label: '+#% Monster Chaos Resistance',
    regex: /\+(\d+)% Monster Chaos Resistance/,
    type: ModFilterType.MAP,
  },
  {
    label: '+#% Monster Cold Resistance',
    regex: /\+(\d+)% Monster Cold Resistance/,
    type: ModFilterType.MAP,
  },
  {
    label: '+#% Monster Elemental Resistance',
    regex: /\+(\d+)% Monster Elemental Resistance/,
    type: ModFilterType.MAP,
  },
  {
    label: '+#% Monster Fire Resistance',
    regex: /\+(\d+)% Monster Fire Resistance/,
    type: ModFilterType.MAP,
  },
  {
    label: '+#% Monster Lightning Resistance',
    regex: /\+(\d+)% Monster Lightning Resistance/,
    type: ModFilterType.MAP,
  },
  {
    label: '+#% Monster pack size',
    regex: /\+(\d+)% Monster pack size/,
    type: ModFilterType.MAP,
  },
  {
    label: '+#% Monster Physical Damage Reduction',
    regex: /\+(\d+)% Monster Physical Damage Reduction/,
    type: ModFilterType.MAP,
  },
  {
    label: '+#% to Monster Critical Strike Multiplier',
    regex: /\+(\d+)% to Monster Critical Strike Multiplier/,
    type: ModFilterType.MAP,
  },
  {
    label: '-#% maximum Player Resistances',
    regex: /-(\d+)% maximum Player Resistances/,
    type: ModFilterType.MAP,
  },
  {
    label: 'All Monster Damage from Hits always Ignites',
    regex: /All Monster Damage from Hits always Ignites/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Ancient Talismans possess monsters throughout Wraeclast',
    regex: /Ancient Talismans possess monsters throughout Wraeclast/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area becomes fatal after some time',
    regex: /Area becomes fatal after some time/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area can contain Breaches',
    regex: /Area can contain Breaches/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area can contain Mysterious Harbingers',
    regex: /Area can contain Mysterious Harbingers/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains # additional Breaches',
    regex: /Area contains (\d+) additional Breaches/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains # additional Essences',
    regex: /Area contains (\d+) additional Essences/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains # additional Magic Monster packs',
    regex: /Area contains (\d+) additional Magic Monster packs/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains # additional Monsters possessed by Ancient Talismans',
    regex: /Area contains (\d+) additional Monsters possessed by Ancient Talismans/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains # additional packs with a Rare monster',
    regex: /Area contains (\d+) additional packs with a Rare monster/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains # additional Perandus Chests',
    regex: /Area contains (\d+) additional Perandus Chests/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains # extra Harbingers',
    regex: /Area contains (\d+) extra Harbingers/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains # extra Shrines',
    regex: /Area contains (\d+) extra Shrines/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains # extra Strongboxes',
    regex: /Area contains (\d+) extra Strongboxes/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains a Stone Circle',
    regex: /Area contains a Stone Circle/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains Alva',
    regex: /Area contains Alva/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains an additional Breach',
    regex: /Area contains an additional Breach/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains an additional Essence',
    regex: /Area contains an additional Essence/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains an additional Legion Encounter',
    regex: /Area contains an additional Legion Encounter/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains an extra Harbinger',
    regex: /Area contains an extra Harbinger/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains an extra Shrine',
    regex: /Area contains an extra Shrine/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains an extra Strongbox',
    regex: /Area contains an extra Strongbox/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains Einhar',
    regex: /Area contains Einhar/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains Immortal Syndicate activity',
    regex: /Area contains Immortal Syndicate activity/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains Jun',
    regex: /Area contains Jun/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains many Sentinel Traps',
    regex: /Area contains many Sentinel Traps/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains many Totems',
    regex: /Area contains many Totems/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains Niko',
    regex: /Area contains Niko/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains no monsters',
    regex: /Area contains no monsters/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains two Unique Bosses',
    regex: /Area contains two Unique Bosses/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains unbridged gaps to cross',
    regex: /Area contains unbridged gaps to cross/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area contains Zana',
    regex: /Area contains Zana/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area has a #% chance to contain Cadiro Perandus',
    regex: /Area has a (\d+)% chance to contain Cadiro Perandus/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area has Damaging Totems',
    regex: /Area has Damaging Totems/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area has increased monster variety',
    regex: /Area has increased monster variety/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area has patches of burning ground',
    regex: /Area has patches of burning ground/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area has patches of chilled ground',
    regex: /Area has patches of chilled ground/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area has patches of desecrated ground',
    regex: /Area has patches of desecrated ground/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area has patches of shocking ground',
    regex: /Area has patches of shocking ground/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area has patches of tar',
    regex: /Area has patches of tar/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is #% larger',
    regex: /Area is (\d+)% larger/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is a Maze',
    regex: /Area is a Maze/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is haunted by # additional Tormented Spirit',
    regex: /Area is haunted by (\d+) additional Tormented Spirit/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is haunted by # additional Tormented Spirits',
    regex: /Area is haunted by (\d+) additional Tormented Spirits/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by # additional Rogue Exiles',
    regex: /Area is inhabited by (\d+) additional Rogue Exiles/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by # additional Warbands',
    regex: /Area is inhabited by (\d+) additional Warbands/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by Abominations',
    regex: /Area is inhabited by Abominations/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by an additional Invasion Boss',
    regex: /Area is inhabited by an additional Invasion Boss/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by Animals',
    regex: /Area is inhabited by Animals/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by Bandits',
    regex: /Area is inhabited by Bandits/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by Blackguards',
    regex: /Area is inhabited by Blackguards/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by Cultists of Kitava',
    regex: /Area is inhabited by Cultists of Kitava/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by Demons',
    regex: /Area is inhabited by Demons/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by Ghosts',
    regex: /Area is inhabited by Ghosts/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by Goatmen',
    regex: /Area is inhabited by Goatmen/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by Humanoids',
    regex: /Area is inhabited by Humanoids/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by Lunaris fanatics',
    regex: /Area is inhabited by Lunaris fanatics/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by ranged monsters',
    regex: /Area is inhabited by ranged monsters/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by Sea Witches and their Spawn',
    regex: /Area is inhabited by Sea Witches and their Spawn/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by Skeletons',
    regex: /Area is inhabited by Skeletons/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by Solaris fanatics',
    regex: /Area is inhabited by Solaris fanatics/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by Spiders',
    regex: /Area is inhabited by Spiders/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by the Vaal',
    regex: /Area is inhabited by the Vaal/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by Undead',
    regex: /Area is inhabited by Undead/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Area is inhabited by wild Animals',
    regex: /Area is inhabited by wild Animals/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Areas can contain Essences',
    regex: /Areas can contain Essences/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Areas contain deposits of Voltaxic Sulphite',
    regex: /Areas contain deposits of Voltaxic Sulphite/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Areas contain Memory Fragments',
    regex: /Areas contain Memory Fragments/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Areas Have the Same Layout for all Players',
    regex: /Areas Have the Same Layout for all Players/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Caches of Perandus wealth can be found throughout Wraeclast',
    regex: /Caches of Perandus wealth can be found throughout Wraeclast/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Cannot Leech Life from Monsters',
    regex: /Cannot Leech Life from Monsters/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Cannot Leech Mana from Monsters',
    regex: /Cannot Leech Mana from Monsters/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Chests have #% increased Item Rarity',
    regex: /Chests have (\d+)% increased Item Rarity/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Contains the Immortalised Grandmasters PvP damage scaling in effect',
    regex: /Contains the Immortalised Grandmasters PvP damage scaling in effect/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Curses have #% reduced effect on Monsters',
    regex: /Curses have (\d+)% reduced effect on Monsters/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Found Items have a #% chance to drop Corrupted in Area',
    regex: /Found Items have a (\d+)% chance to drop Corrupted in Area/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Life, Mana, Energy Shield and Flasks are not refilled in Towns',
    regex: /Life, Mana, Energy Shield and Flasks are not refilled in Towns/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Magic Monster Packs each have a Bloodline Mod',
    regex: /Magic Monster Packs each have a Bloodline Mod/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Minimap is Revealed',
    regex: /Minimap is Revealed/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monster Level: #',
    regex: /Monster Level: (\d+)/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters and bosses invade from elsewhere in Wraeclast',
    regex: /Monsters and bosses invade from elsewhere in Wraeclast/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters are Hexproof',
    regex: /Monsters are Hexproof/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters are Immune to randomly chosen Elemental Ailments or Stun',
    regex: /Monsters are Immune to randomly chosen Elemental Ailments or Stun/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters cannot be affected by Ailments',
    regex: /Monsters cannot be affected by Ailments/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters cannot be Chilled or Frozen',
    regex: /Monsters cannot be Chilled or Frozen/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters cannot be Ignited',
    regex: /Monsters cannot be Ignited/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters cannot be Shocked',
    regex: /Monsters cannot be Shocked/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters cannot be Stunned',
    regex: /Monsters cannot be Stunned/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters cannot be Taunted',
    regex: /Monsters cannot be Taunted/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters deal #% extra Damage as Cold',
    regex: /Monsters deal (\d+)% extra Damage as Cold/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters deal #% extra Damage as Fire',
    regex: /Monsters deal (\d+)% extra Damage as Fire/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters deal #% extra Damage as Lightning',
    regex: /Monsters deal (\d+)% extra Damage as Lightning/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters drop items # Levels higher',
    regex: /Monsters drop items (\d+) Levels higher/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters drop no items',
    regex: /Monsters drop no items/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters fire # additional Projectiles',
    regex: /Monsters fire (\d+) additional Projectiles/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters Fracture',
    regex: /Monsters Fracture/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters gain # Endurance Charge every 20 seconds',
    regex: /Monsters gain (\d+) Endurance Charge every 20 seconds/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters gain # Endurance Charges every 20 seconds',
    regex: /Monsters gain (\d+) Endurance Charges every 20 seconds/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters gain # Frenzy Charge every 20 seconds',
    regex: /Monsters gain (\d+) Frenzy Charge every 20 seconds/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters gain # Frenzy Charges every 20 seconds',
    regex: /Monsters gain (\d+) Frenzy Charges every 20 seconds/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters gain # Power Charge every 20 seconds',
    regex: /Monsters gain (\d+) Power Charge every 20 seconds/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters gain # Power Charges every 20 seconds',
    regex: /Monsters gain (\d+) Power Charges every 20 seconds/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters gain a Frenzy Charge on Hit',
    regex: /Monsters gain a Frenzy Charge on Hit/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters gain a Power Charge on Hit',
    regex: /Monsters gain a Power Charge on Hit/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters gain an Endurance Charge on Hit',
    regex: /Monsters gain an Endurance Charge on Hit/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters have #% chance to Avoid Ailments',
    regex: /Monsters have (\d+)% chance to Avoid Ailments/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters have #% chance to Avoid Elemental Ailments',
    regex: /Monsters have (\d+)% chance to Avoid Elemental Ailments/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters have #% increased Accuracy Rating',
    regex: /Monsters have (\d+)% increased Accuracy Rating/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters have #% increased Area of Effect',
    regex: /Monsters have (\d+)% increased Area of Effect/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters have #% increased Critical Strike Chance',
    regex: /Monsters have (\d+)% increased Critical Strike Chance/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters have a #% chance to avoid Poison, Blind, and Bleeding',
    regex: /Monsters have a (\d+)% chance to avoid Poison, Blind, and Bleeding/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters have a #% chance to cause Elemental Ailments on Hit',
    regex: /Monsters have a (\d+)% chance to cause Elemental Ailments on Hit/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters have Onslaught',
    regex: /Monsters have Onslaught/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters Poison on Hit',
    regex: /Monsters Poison on Hit/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters reflect #% of Elemental Damage',
    regex: /Monsters reflect (\d+)% of Elemental Damage/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters reflect #% of Physical Damage',
    regex: /Monsters reflect (\d+)% of Physical Damage/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters reflect Curses',
    regex: /Monsters reflect Curses/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters take #% reduced Extra Damage from Critical Strikes',
    regex: /Monsters take (\d+)% reduced Extra Damage from Critical Strikes/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters\' Action Speed cannot be modified to below base value',
    regex: /Monsters' Action Speed cannot be modified to below base value/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters\' Melee Attacks apply random Curses on Hit',
    regex: /Monsters' Melee Attacks apply random Curses on Hit/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Monsters\' skills Chain # additional times',
    regex: /Monsters' skills Chain (\d+) additional times/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Player chance to Dodge is Unlucky',
    regex: /Player chance to Dodge is Unlucky/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players are Cursed with Conductivity',
    regex: /Players are Cursed with Conductivity/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players are Cursed with Elemental Weakness',
    regex: /Players are Cursed with Elemental Weakness/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players are Cursed with Enfeeble',
    regex: /Players are Cursed with Enfeeble/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players are Cursed with Flammability',
    regex: /Players are Cursed with Flammability/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players are Cursed with Frostbite',
    regex: /Players are Cursed with Frostbite/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players are Cursed with Projectile Weakness',
    regex: /Players are Cursed with Projectile Weakness/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players are Cursed with Punishment',
    regex: /Players are Cursed with Punishment/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players are Cursed with Temporal Chains',
    regex: /Players are Cursed with Temporal Chains/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players are Cursed with Vulnerability',
    regex: /Players are Cursed with Vulnerability/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players are Cursed with Warlord\'s Mark',
    regex: /Players are Cursed with Warlord's Mark/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players cannot Regenerate Life, Mana or Energy Shield',
    regex: /Players cannot Regenerate Life, Mana or Energy Shield/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players deal #% less Projectile Damage',
    regex: /Players deal (\d+)% less Projectile Damage/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players gain #% reduced Flask Charges',
    regex: /Players gain (\d+)% reduced Flask Charges/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players gain a Random Mod from Slain Rare Monsters for # seconds',
    regex: /Players gain a Random Mod from Slain Rare Monsters for (\d+) seconds/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players gain Modifiers from Slain Rare Monsters for # seconds',
    regex: /Players gain Modifiers from Slain Rare Monsters for (\d+) seconds/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players gain Soul Eater for # seconds on Rare Monster Kill',
    regex: /Players gain Soul Eater for (\d+) seconds on Rare Monster Kill/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players have #% increased Action Speed while Chilled',
    regex: /Players have (\d+)% increased Action Speed while Chilled/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players have #% increased Cooldown Recovery Speed for Movement Skills',
    regex: /Players have (\d+)% increased Cooldown Recovery Speed for Movement Skills/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players have #% less Area of Effect',
    regex: /Players have (\d+)% less Area of Effect/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players have #% less Armour',
    regex: /Players have (\d+)% less Armour/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players have #% less Recovery Rate of Life and Energy Shield',
    regex: /Players have (\d+)% less Recovery Rate of Life and Energy Shield/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players have #% reduced Chance to Block',
    regex: /Players have (\d+)% reduced Chance to Block/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players have a random Curse on them every 10 seconds',
    regex: /Players have a random Curse on them every 10 seconds/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players have Blood Magic',
    regex: /Players have Blood Magic/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players have Corrupting Blood',
    regex: /Players have Corrupting Blood/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players have Elemental Equilibrium',
    regex: /Players have Elemental Equilibrium/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players have no Life or Mana Regeneration',
    regex: /Players have no Life or Mana Regeneration/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players have Point Blank',
    regex: /Players have Point Blank/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Players take # Chaos Damage per second',
    regex: /Players take (\d+) Chaos Damage per second/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Powerful Shrines can affect both Monsters and you',
    regex: /Powerful Shrines can affect both Monsters and you/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Powerful Tempests can affect both Monsters and you',
    regex: /Powerful Tempests can affect both Monsters and you/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Projectiles move at #% reduced Speed',
    regex: /Projectiles move at (\d+)% reduced Speed/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Rare Monsters each have a Nemesis Mod',
    regex: /Rare Monsters each have a Nemesis Mod/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Rogue Exiles roam Wraeclast',
    regex: /Rogue Exiles roam Wraeclast/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Shrines are corrupted by Darkness',
    regex: /Shrines are corrupted by Darkness/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Slaying Enemies close together can attract monsters from Beyond this realm',
    regex: /Slaying Enemies close together can attract monsters from Beyond this realm/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Slaying Enemies close together has a #% chance to attract monsters from Beyond',
    regex: /Slaying Enemies close together has a (\d+)% chance to attract monsters from Beyond/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Slaying Enemies in a kill streak grants Rampage bonuses',
    regex: /Slaying Enemies in a kill streak grants Rampage bonuses/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Strongboxes are guarded by ambushing monsters',
    regex: /Strongboxes are guarded by ambushing monsters/,
    type: ModFilterType.MAP,
  },
  {
    label: 'This Area\'s Modifiers to Quantity of Items found also apply to Rarity',
    regex: /This Area's Modifiers to Quantity of Items found also apply to Rarity/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Tormented Spirits haunt Wraeclast',
    regex: /Tormented Spirits haunt Wraeclast/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Unique Boss deals #% increased Damage',
    regex: /Unique Boss deals (\d+)% increased Damage/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Unique Boss drops # additional Maps',
    regex: /Unique Boss drops (\d+) additional Maps/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Unique Boss drops divination cards',
    regex: /Unique Boss drops divination cards/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Unique Boss gives #% increased Experience',
    regex: /Unique Boss gives (\d+)% increased Experience/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Unique Boss has #% increased Area of Effect',
    regex: /Unique Boss has (\d+)% increased Area of Effect/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Unique Boss has #% increased Attack and Cast Speed',
    regex: /Unique Boss has (\d+)% increased Attack and Cast Speed/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Unique Boss has #% increased Life',
    regex: /Unique Boss has (\d+)% increased Life/,
    type: ModFilterType.MAP,
  },
  {
    label: 'Unique Boss is augmented by Player choices',
    regex: /Unique Boss is augmented by Player choices/,
    type: ModFilterType.MAP,
  },
];
