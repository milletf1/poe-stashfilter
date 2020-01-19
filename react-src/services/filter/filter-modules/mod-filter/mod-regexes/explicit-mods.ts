import { IMod } from '../IModFilterParams';
import { ModFilterType } from '../ModFilterType';
/* tslint:disable:max-line-length */

export const explicitModRegexes: IMod[] = [
  {
    label: '# Enemy Writhing Worms escape the Flask when used Writhing Worms are destroyed when Hit',
    regex: /(\d+) Enemy Writhing Worms escape the Flask when used Writhing Worms are destroyed when Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '# Physical Damage taken from Attack Hits',
    regex: /(\d+) Physical Damage taken from Attack Hits/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '# Physical Damage taken from Hits',
    regex: /(\d+) Physical Damage taken from Hits/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '# to # added Fire Damage against Burning Enemies',
    regex: /(\d+) to (\d+) added Fire Damage against Burning Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '# to # Cold Damage per Frenzy Charge',
    regex: /(\d+) to (\d+) Cold Damage per Frenzy Charge/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% additional Elemental Resistances during Flask effect',
    regex: /(\d+)% additional Elemental Resistances during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% additional Physical Damage Reduction',
    regex: /(\d+)% additional Physical Damage Reduction/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% additional Physical Damage Reduction against Abyssal Monsters',
    regex: /(\d+)% additional Physical Damage Reduction against Abyssal Monsters/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% additional Physical Damage Reduction during any Flask Effect',
    regex: /(\d+)% additional Physical Damage Reduction during any Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% additional Physical Damage Reduction during Flask Effect',
    regex: /(\d+)% additional Physical Damage Reduction during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% additional Physical Damage Reduction if you weren\'t Damaged by a Hit Recently',
    regex: /(\d+)% additional Physical Damage Reduction if you weren't Damaged by a Hit Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% additional Physical Damage Reduction while moving',
    regex: /(\d+)% additional Physical Damage Reduction while moving/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance for Bleeding inflicted with this Weapon to deal 100% more Damage',
    regex: /(\d+)% chance for Bleeding inflicted with this Weapon to deal 100% more Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance for Poisons inflicted with this Weapon to deal 100% more Damage',
    regex: /(\d+)% chance for Poisons inflicted with this Weapon to deal 100% more Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance for your Flasks to not consume Charges',
    regex: /(\d+)% chance for your Flasks to not consume Charges/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Avoid being Chilled',
    regex: /(\d+)% chance to Avoid being Chilled/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Avoid being Chilled during Flask effect',
    regex: /(\d+)% chance to Avoid being Chilled during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Avoid being Frozen',
    regex: /(\d+)% chance to Avoid being Frozen/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Avoid being Frozen during Flask effect',
    regex: /(\d+)% chance to Avoid being Frozen during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Avoid being Ignited',
    regex: /(\d+)% chance to Avoid being Ignited/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Avoid being Poisoned',
    regex: /(\d+)% chance to Avoid being Poisoned/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Avoid being Shocked',
    regex: /(\d+)% chance to Avoid being Shocked/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Avoid being Stunned',
    regex: /(\d+)% chance to Avoid being Stunned/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to avoid Bleeding',
    regex: /(\d+)% chance to avoid Bleeding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Avoid Cold Damage from Hits',
    regex: /(\d+)% chance to Avoid Cold Damage from Hits/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Avoid Elemental Ailments',
    regex: /(\d+)% chance to Avoid Elemental Ailments/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Avoid Fire Damage from Hits',
    regex: /(\d+)% chance to Avoid Fire Damage from Hits/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Avoid interruption from Stuns while Casting',
    regex: /(\d+)% chance to Avoid interruption from Stuns while Casting/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Avoid Lightning Damage from Hits',
    regex: /(\d+)% chance to Avoid Lightning Damage from Hits/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to avoid Projectiles',
    regex: /(\d+)% chance to avoid Projectiles/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Blind Enemies on Hit with Attacks',
    regex: /(\d+)% chance to Blind Enemies on Hit with Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Blind Enemies when they Hit you',
    regex: /(\d+)% chance to Blind Enemies when they Hit you/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% Chance to Block Attack Damage',
    regex: /(\d+)% Chance to Block Attack Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% Chance to Block Spell Damage',
    regex: /(\d+)% Chance to Block Spell Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Cast Level 20 Fire Burst on Hit',
    regex: /(\d+)% chance to Cast Level 20 Fire Burst on Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to cause Bleeding on Hit',
    regex: /(\d+)% chance to cause Bleeding on Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to cause Enemies to Flee on use',
    regex: /(\d+)% chance to cause Enemies to Flee on use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Chill Attackers for 4 seconds on Block',
    regex: /(\d+)% chance to Chill Attackers for 4 seconds on Block/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to deal Double Damage',
    regex: /(\d+)% chance to deal Double Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Dodge Attack and Spell Hits if you\'ve been Hit Recently',
    regex: /(\d+)% chance to Dodge Attack and Spell Hits if you've been Hit Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Dodge Attack Hits',
    regex: /(\d+)% chance to Dodge Attack Hits/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Dodge Attack Hits if you have Blocked Recently',
    regex: /(\d+)% chance to Dodge Attack Hits if you have Blocked Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Dodge Spell Hits',
    regex: /(\d+)% chance to Dodge Spell Hits/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Freeze',
    regex: /(\d+)% chance to Freeze/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Freeze, Shock and Ignite',
    regex: /(\d+)% chance to Freeze, Shock and Ignite/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Freeze, Shock and Ignite during Flask effect',
    regex: /(\d+)% chance to Freeze, Shock and Ignite during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain a Flask Charge when you deal a Critical Strike',
    regex: /(\d+)% chance to gain a Flask Charge when you deal a Critical Strike/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain a Frenzy Charge on Kill',
    regex: /(\d+)% chance to gain a Frenzy Charge on Kill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain a Frenzy Charge when Hit',
    regex: /(\d+)% chance to gain a Frenzy Charge when Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain a Frenzy Charge when you Block',
    regex: /(\d+)% chance to gain a Frenzy Charge when you Block/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain a Frenzy Charge when you Hit a Rare or Unique Enemy',
    regex: /(\d+)% chance to gain a Frenzy Charge when you Hit a Rare or Unique Enemy/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain a Power Charge on Critical Strike',
    regex: /(\d+)% chance to gain a Power Charge on Critical Strike/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain a Power Charge on Kill',
    regex: /(\d+)% chance to gain a Power Charge on Kill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain a Power Charge when you Block',
    regex: /(\d+)% chance to gain a Power Charge when you Block/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain a Power, Frenzy or Endurance Charge on Kill',
    regex: /(\d+)% chance to gain a Power, Frenzy or Endurance Charge on Kill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain an additional Vaal Soul on Kill',
    regex: /(\d+)% chance to gain an additional Vaal Soul on Kill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain an Endurance Charge on Critical Strike',
    regex: /(\d+)% chance to gain an Endurance Charge on Critical Strike/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain an Endurance Charge on Kill',
    regex: /(\d+)% chance to gain an Endurance Charge on Kill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain an Endurance Charge when you Block',
    regex: /(\d+)% chance to gain an Endurance Charge when you Block/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain an Endurance Charge when you Hit a Bleeding Enemy',
    regex: /(\d+)% chance to gain an Endurance Charge when you Hit a Bleeding Enemy/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain an Endurance Charge when you Stun an Enemy',
    regex: /(\d+)% chance to gain an Endurance Charge when you Stun an Enemy/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain an Endurance Charge when you Taunt an Enemy',
    regex: /(\d+)% chance to gain an Endurance Charge when you Taunt an Enemy/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain Fortify when you Stun an Enemy with Melee Damage',
    regex: /(\d+)% chance to gain Fortify when you Stun an Enemy with Melee Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain Onslaught for 4 seconds on Kill',
    regex: /(\d+)% chance to gain Onslaught for 4 seconds on Kill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain Onslaught when you use a Flask',
    regex: /(\d+)% chance to gain Onslaught when you use a Flask/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain Phasing for 4 seconds on Kill',
    regex: /(\d+)% chance to gain Phasing for 4 seconds on Kill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to gain Unholy Might for 3 seconds on Kill',
    regex: /(\d+)% chance to gain Unholy Might for 3 seconds on Kill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Gain Unholy Might for 4 seconds on Melee Kill',
    regex: /(\d+)% chance to Gain Unholy Might for 4 seconds on Melee Kill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Hinder Enemies on Hit with Spells, with 30% reduced Movement Speed',
    regex: /(\d+)% chance to Hinder Enemies on Hit with Spells, with 30% reduced Movement Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Ignite',
    regex: /(\d+)% chance to Ignite/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to inflict Bleeding on Hit with Attacks against Taunted Enemies',
    regex: /(\d+)% chance to inflict Bleeding on Hit with Attacks against Taunted Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Intimidate Enemies for 4 seconds on Hit',
    regex: /(\d+)% chance to Intimidate Enemies for 4 seconds on Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Knock Enemies Back on hit',
    regex: /(\d+)% chance to Knock Enemies Back on hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Maim on Hit',
    regex: /(\d+)% chance to Maim on Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Poison on Hit',
    regex: /(\d+)% chance to Poison on Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Poison on Hit during Flask effect',
    regex: /(\d+)% chance to Poison on Hit during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Recover 10% of Mana when you use a Skill',
    regex: /(\d+)% chance to Recover 10% of Mana when you use a Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Shock',
    regex: /(\d+)% chance to Shock/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Shock Attackers for 4 seconds on Block',
    regex: /(\d+)% chance to Shock Attackers for 4 seconds on Block/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance to Taunt Enemies on Hit with Attacks',
    regex: /(\d+)% chance to Taunt Enemies on Hit with Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% chance when Hit for double Armour effect',
    regex: /(\d+)% chance when Hit for double Armour effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% faster start of Energy Shield Recharge',
    regex: /(\d+)% faster start of Energy Shield Recharge/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% Global chance to Blind Enemies on hit',
    regex: /(\d+)% Global chance to Blind Enemies on hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Accuracy Rating if you haven\'t Killed Recently',
    regex: /(\d+)% increased Accuracy Rating if you haven't Killed Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Accuracy Rating per Frenzy Charge',
    regex: /(\d+)% increased Accuracy Rating per Frenzy Charge/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Amount Recovered',
    regex: /(\d+)% increased Amount Recovered/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Area Damage',
    regex: /(\d+)% increased Area Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Area Damage per 12 Strength',
    regex: /(\d+)% increased Area Damage per 12 Strength/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Area of Effect',
    regex: /(\d+)% increased Area of Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Area of Effect during Flask Effect',
    regex: /(\d+)% increased Area of Effect during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Area of Effect if you have at least 500 Strength',
    regex: /(\d+)% increased Area of Effect if you have at least 500 Strength/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Area of Effect if you have Blocked Recently',
    regex: /(\d+)% increased Area of Effect if you have Blocked Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Area of Effect if you have Stunned an Enemy Recently',
    regex: /(\d+)% increased Area of Effect if you have Stunned an Enemy Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Area of Effect of Aura Skills',
    regex: /(\d+)% increased Area of Effect of Aura Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Area of Effect of Curse Skills',
    regex: /(\d+)% increased Area of Effect of Curse Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Area of Effect per 50 Strength',
    regex: /(\d+)% increased Area of Effect per 50 Strength/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Area of Effect per Endurance Charge',
    regex: /(\d+)% increased Area of Effect per Endurance Charge/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Area of Effect per Power Charge',
    regex: /(\d+)% increased Area of Effect per Power Charge/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Area of Effect while Fortified',
    regex: /(\d+)% increased Area of Effect while Fortified/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Armour',
    regex: /(\d+)% increased Armour/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Armour and Energy Shield',
    regex: /(\d+)% increased Armour and Energy Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Armour and Evasion',
    regex: /(\d+)% increased Armour and Evasion/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Armour during Flask effect',
    regex: /(\d+)% increased Armour during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Armour if you haven\'t Killed Recently',
    regex: /(\d+)% increased Armour if you haven't Killed Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Armour, Evasion and Energy Shield',
    regex: /(\d+)% increased Armour, Evasion and Energy Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack and Cast Speed',
    regex: /(\d+)% increased Attack and Cast Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack and Cast Speed during any Flask Effect',
    regex: /(\d+)% increased Attack and Cast Speed during any Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack and Cast Speed if you\'ve Hit an Enemy Recently',
    regex: /(\d+)% increased Attack and Cast Speed if you've Hit an Enemy Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Damage',
    regex: /(\d+)% increased Attack Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Damage while holding a Shield',
    regex: /(\d+)% increased Attack Damage while holding a Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed',
    regex: /(\d+)% increased Attack Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed during any Flask Effect',
    regex: /(\d+)% increased Attack Speed during any Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed during Flask effect',
    regex: /(\d+)% increased Attack Speed during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed if you have Blocked Recently',
    regex: /(\d+)% increased Attack Speed if you have Blocked Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed if you\'ve dealt a Critical Strike Recently',
    regex: /(\d+)% increased Attack Speed if you've dealt a Critical Strike Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed if you\'ve Killed Recently',
    regex: /(\d+)% increased Attack Speed if you've Killed Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed while Dual Wielding',
    regex: /(\d+)% increased Attack Speed while Dual Wielding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed while holding a Shield',
    regex: /(\d+)% increased Attack Speed while holding a Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed with Axes',
    regex: /(\d+)% increased Attack Speed with Axes/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed with Bows',
    regex: /(\d+)% increased Attack Speed with Bows/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed with Claws',
    regex: /(\d+)% increased Attack Speed with Claws/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed with Daggers',
    regex: /(\d+)% increased Attack Speed with Daggers/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed with Maces and Sceptres',
    regex: /(\d+)% increased Attack Speed with Maces and Sceptres/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed with One Handed Melee Weapons',
    regex: /(\d+)% increased Attack Speed with One Handed Melee Weapons/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed with Staves',
    regex: /(\d+)% increased Attack Speed with Staves/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed with Swords',
    regex: /(\d+)% increased Attack Speed with Swords/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed with Two Handed Melee Weapons',
    regex: /(\d+)% increased Attack Speed with Two Handed Melee Weapons/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed with Unarmed Attacks',
    regex: /(\d+)% increased Attack Speed with Unarmed Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack Speed with Wands',
    regex: /(\d+)% increased Attack Speed with Wands/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attack, Cast and Movement Speed during Flask Effect',
    regex: /(\d+)% increased Attack, Cast and Movement Speed during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Attributes',
    regex: /(\d+)% increased Attributes/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Bleeding Duration',
    regex: /(\d+)% increased Bleeding Duration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Block and Stun Recovery during Flask effect',
    regex: /(\d+)% increased Block and Stun Recovery during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Burning Damage',
    regex: /(\d+)% increased Burning Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Cast Speed',
    regex: /(\d+)% increased Cast Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Cast Speed during any Flask Effect',
    regex: /(\d+)% increased Cast Speed during any Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Cast Speed during Flask effect',
    regex: /(\d+)% increased Cast Speed during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Cast Speed if a Minion has been Killed Recently',
    regex: /(\d+)% increased Cast Speed if a Minion has been Killed Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Cast Speed if you\'ve dealt a Critical Strike Recently',
    regex: /(\d+)% increased Cast Speed if you've dealt a Critical Strike Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Cast Speed if you\'ve Killed Recently',
    regex: /(\d+)% increased Cast Speed if you've Killed Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Cast Speed while Dual Wielding',
    regex: /(\d+)% increased Cast Speed while Dual Wielding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Cast Speed while holding a Shield',
    regex: /(\d+)% increased Cast Speed while holding a Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Cast Speed while wielding a Staff',
    regex: /(\d+)% increased Cast Speed while wielding a Staff/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Cast Speed with Chaos Skills',
    regex: /(\d+)% increased Cast Speed with Chaos Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Cast Speed with Cold Skills',
    regex: /(\d+)% increased Cast Speed with Cold Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Cast Speed with Fire Skills',
    regex: /(\d+)% increased Cast Speed with Fire Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Cast Speed with Lightning Skills',
    regex: /(\d+)% increased Cast Speed with Lightning Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Chaos Damage',
    regex: /(\d+)% increased Chaos Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Charge Recovery',
    regex: /(\d+)% increased Charge Recovery/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Charges gained by Other Flasks during Flask Effect',
    regex: /(\d+)% increased Charges gained by Other Flasks during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Charges used',
    regex: /(\d+)% increased Charges used/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Chill and Freeze Duration on Enemies',
    regex: /(\d+)% increased Chill and Freeze Duration on Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Cold Damage',
    regex: /(\d+)% increased Cold Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Cooldown Recovery Speed',
    regex: /(\d+)% increased Cooldown Recovery Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Cooldown Recovery Speed for throwing Traps',
    regex: /(\d+)% increased Cooldown Recovery Speed for throwing Traps/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance',
    regex: /(\d+)% increased Critical Strike Chance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance against Bleeding Enemies',
    regex: /(\d+)% increased Critical Strike Chance against Bleeding Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance against Blinded Enemies',
    regex: /(\d+)% increased Critical Strike Chance against Blinded Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance against Poisoned Enemies',
    regex: /(\d+)% increased Critical Strike Chance against Poisoned Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance against Shocked Enemies',
    regex: /(\d+)% increased Critical Strike Chance against Shocked Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance for Spells',
    regex: /(\d+)% increased Critical Strike Chance for Spells/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance if you have Killed Recently',
    regex: /(\d+)% increased Critical Strike Chance if you have Killed Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance if you haven\'t dealt a Critical Strike Recently',
    regex: /(\d+)% increased Critical Strike Chance if you haven't dealt a Critical Strike Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance while holding a Shield',
    regex: /(\d+)% increased Critical Strike Chance while holding a Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance with Axes',
    regex: /(\d+)% increased Critical Strike Chance with Axes/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance with Bows',
    regex: /(\d+)% increased Critical Strike Chance with Bows/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance with Chaos Skills',
    regex: /(\d+)% increased Critical Strike Chance with Chaos Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance with Claws',
    regex: /(\d+)% increased Critical Strike Chance with Claws/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance with Cold Skills',
    regex: /(\d+)% increased Critical Strike Chance with Cold Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance with Daggers',
    regex: /(\d+)% increased Critical Strike Chance with Daggers/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance with Elemental Skills',
    regex: /(\d+)% increased Critical Strike Chance with Elemental Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance with Fire Skills',
    regex: /(\d+)% increased Critical Strike Chance with Fire Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance with Lightning Skills',
    regex: /(\d+)% increased Critical Strike Chance with Lightning Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance with Maces and Sceptres',
    regex: /(\d+)% increased Critical Strike Chance with Maces and Sceptres/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance with Mines',
    regex: /(\d+)% increased Critical Strike Chance with Mines/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance with One Handed Melee Weapons',
    regex: /(\d+)% increased Critical Strike Chance with One Handed Melee Weapons/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance with Staves',
    regex: /(\d+)% increased Critical Strike Chance with Staves/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance with Swords',
    regex: /(\d+)% increased Critical Strike Chance with Swords/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance with Traps',
    regex: /(\d+)% increased Critical Strike Chance with Traps/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance with Two Handed Melee Weapons',
    regex: /(\d+)% increased Critical Strike Chance with Two Handed Melee Weapons/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance with Wands',
    regex: /(\d+)% increased Critical Strike Chance with Wands/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage',
    regex: /(\d+)% increased Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage against Abyssal Monsters',
    regex: /(\d+)% increased Damage against Abyssal Monsters/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage against Taunted Enemies',
    regex: /(\d+)% increased Damage against Taunted Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage during any Flask Effect',
    regex: /(\d+)% increased Damage during any Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage if you\'ve Killed Recently',
    regex: /(\d+)% increased Damage if you've Killed Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage over Time',
    regex: /(\d+)% increased Damage over Time/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage Over Time during Flask Effect',
    regex: /(\d+)% increased Damage Over Time during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage over Time while Dual Wielding',
    regex: /(\d+)% increased Damage over Time while Dual Wielding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage over Time while holding a Shield',
    regex: /(\d+)% increased Damage over Time while holding a Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage over Time while wielding a Two Handed Weapon',
    regex: /(\d+)% increased Damage over Time while wielding a Two Handed Weapon/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage per 1% Chance to Block Attack Damage',
    regex: /(\d+)% increased Damage per 1% Chance to Block Attack Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage per 15 Dexterity',
    regex: /(\d+)% increased Damage per 15 Dexterity/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage per 15 Intelligence',
    regex: /(\d+)% increased Damage per 15 Intelligence/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage per 15 Strength',
    regex: /(\d+)% increased Damage per 15 Strength/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage per Power Charge',
    regex: /(\d+)% increased Damage per Power Charge/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage when on Full Life',
    regex: /(\d+)% increased Damage when on Full Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with Ailments',
    regex: /(\d+)% increased Damage with Ailments/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with Axes',
    regex: /(\d+)% increased Damage with Axes/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with Bleeding',
    regex: /(\d+)% increased Damage with Bleeding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with Bleeding inflicted on Poisoned Enemies',
    regex: /(\d+)% increased Damage with Bleeding inflicted on Poisoned Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with Bleeding per Endurance Charge',
    regex: /(\d+)% increased Damage with Bleeding per Endurance Charge/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with Bows',
    regex: /(\d+)% increased Damage with Bows/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with Claws',
    regex: /(\d+)% increased Damage with Claws/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with Daggers',
    regex: /(\d+)% increased Damage with Daggers/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with Hits against Chilled Enemies',
    regex: /(\d+)% increased Damage with Hits against Chilled Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with Hits and Ailments per Curse on Enemy',
    regex: /(\d+)% increased Damage with Hits and Ailments per Curse on Enemy/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with Maces and Sceptres',
    regex: /(\d+)% increased Damage with Maces and Sceptres/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with One Handed Weapons',
    regex: /(\d+)% increased Damage with One Handed Weapons/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with Poison',
    regex: /(\d+)% increased Damage with Poison/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with Poison inflicted on Bleeding Enemies',
    regex: /(\d+)% increased Damage with Poison inflicted on Bleeding Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with Staves',
    regex: /(\d+)% increased Damage with Staves/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with Swords',
    regex: /(\d+)% increased Damage with Swords/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with Two Handed Weapons',
    regex: /(\d+)% increased Damage with Two Handed Weapons/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Damage with Wands',
    regex: /(\d+)% increased Damage with Wands/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Dexterity',
    regex: /(\d+)% increased Dexterity/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Duration',
    regex: /(\d+)% increased Duration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Duration of Poisons you inflict during Flask effect',
    regex: /(\d+)% increased Duration of Poisons you inflict during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased effect',
    regex: /(\d+)% increased effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Effect of Auras on you',
    regex: /(\d+)% increased Effect of Auras on you/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Effect of Chill',
    regex: /(\d+)% increased Effect of Chill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Effect of Fortify on you',
    regex: /(\d+)% increased Effect of Fortify on you/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Effect of Fortify on you while Stationary',
    regex: /(\d+)% increased Effect of Fortify on you while Stationary/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Effect of Shock',
    regex: /(\d+)% increased Effect of Shock/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Effect of your Curses',
    regex: /(\d+)% increased Effect of your Curses/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Elemental Damage',
    regex: /(\d+)% increased Elemental Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Elemental Damage per 12 Intelligence',
    regex: /(\d+)% increased Elemental Damage per 12 Intelligence/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Elemental Damage per 12 Strength',
    regex: /(\d+)% increased Elemental Damage per 12 Strength/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Elemental Damage per Power charge',
    regex: /(\d+)% increased Elemental Damage per Power charge/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Elemental Damage with Attack Skills',
    regex: /(\d+)% increased Elemental Damage with Attack Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Endurance Charge Duration',
    regex: /(\d+)% increased Endurance Charge Duration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Energy Shield',
    regex: /(\d+)% increased Energy Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Energy Shield from Body Armour',
    regex: /(\d+)% increased Energy Shield from Body Armour/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Energy Shield Recharge Rate',
    regex: /(\d+)% increased Energy Shield Recharge Rate/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Energy Shield Recovery rate',
    regex: /(\d+)% increased Energy Shield Recovery rate/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Evasion and Energy Shield',
    regex: /(\d+)% increased Evasion and Energy Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Evasion if you have Hit an Enemy Recently',
    regex: /(\d+)% increased Evasion if you have Hit an Enemy Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Evasion Rating',
    regex: /(\d+)% increased Evasion Rating/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Evasion Rating during Flask effect',
    regex: /(\d+)% increased Evasion Rating during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Evasion Rating while moving',
    regex: /(\d+)% increased Evasion Rating while moving/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Evasion while Leeching',
    regex: /(\d+)% increased Evasion while Leeching/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Experience gain',
    regex: /(\d+)% increased Experience gain/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Fire Damage',
    regex: /(\d+)% increased Fire Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Fishing Line Strength',
    regex: /(\d+)% increased Fishing Line Strength/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Fishing Range',
    regex: /(\d+)% increased Fishing Range/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Flask Charges gained',
    regex: /(\d+)% increased Flask Charges gained/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Flask Effect Duration',
    regex: /(\d+)% increased Flask Effect Duration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Flask Life Recovery rate',
    regex: /(\d+)% increased Flask Life Recovery rate/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Flask Mana Recovery rate',
    regex: /(\d+)% increased Flask Mana Recovery rate/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Fortify Duration per 10 Strength',
    regex: /(\d+)% increased Fortify Duration per 10 Strength/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Freeze Duration on Enemies',
    regex: /(\d+)% increased Freeze Duration on Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Frenzy Charge Duration',
    regex: /(\d+)% increased Frenzy Charge Duration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Global Accuracy Rating',
    regex: /(\d+)% increased Global Accuracy Rating/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Global Critical Strike Chance',
    regex: /(\d+)% increased Global Critical Strike Chance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Global Defences',
    regex: /(\d+)% increased Global Defences/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Global Evasion Rating when on Full Life',
    regex: /(\d+)% increased Global Evasion Rating when on Full Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Global Physical Damage',
    regex: /(\d+)% increased Global Physical Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Ignite Duration on Enemies',
    regex: /(\d+)% increased Ignite Duration on Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Intelligence',
    regex: /(\d+)% increased Intelligence/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Life Recovered',
    regex: /(\d+)% increased Life Recovered/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Life Recovery from Flasks',
    regex: /(\d+)% increased Life Recovery from Flasks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Life Recovery rate',
    regex: /(\d+)% increased Life Recovery rate/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Light Radius',
    regex: /(\d+)% increased Light Radius/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Light Radius during Flask effect',
    regex: /(\d+)% increased Light Radius during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Lightning Damage',
    regex: /(\d+)% increased Lightning Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Mana Recovered',
    regex: /(\d+)% increased Mana Recovered/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Mana Recovery rate',
    regex: /(\d+)% increased Mana Recovery rate/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Mana Regeneration Rate',
    regex: /(\d+)% increased Mana Regeneration Rate/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Mana Regeneration Rate while moving',
    regex: /(\d+)% increased Mana Regeneration Rate while moving/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased maximum Energy Shield',
    regex: /(\d+)% increased maximum Energy Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased maximum Life',
    regex: /(\d+)% increased maximum Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased maximum Mana',
    regex: /(\d+)% increased maximum Mana/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Maximum total Recovery per second from Life Leech',
    regex: /(\d+)% increased Maximum total Recovery per second from Life Leech/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Melee Critical Strike Chance',
    regex: /(\d+)% increased Melee Critical Strike Chance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Melee Damage',
    regex: /(\d+)% increased Melee Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Melee Damage during any Flask Effect',
    regex: /(\d+)% increased Melee Damage during any Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Melee Physical Damage per 10 Strength while Fortified',
    regex: /(\d+)% increased Melee Physical Damage per 10 Strength while Fortified/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Melee Physical Damage with Unarmed Attacks',
    regex: /(\d+)% increased Melee Physical Damage with Unarmed Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Mine Damage',
    regex: /(\d+)% increased Mine Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Mine Duration',
    regex: /(\d+)% increased Mine Duration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Mine Throwing Speed',
    regex: /(\d+)% increased Mine Throwing Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Minion Accuracy Rating',
    regex: /(\d+)% increased Minion Accuracy Rating/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Minion Duration',
    regex: /(\d+)% increased Minion Duration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Movement Speed',
    regex: /(\d+)% increased Movement Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Movement Speed during any Flask Effect',
    regex: /(\d+)% increased Movement Speed during any Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Movement Speed during Flask effect',
    regex: /(\d+)% increased Movement Speed during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Movement Speed if you haven\'t been Hit Recently',
    regex: /(\d+)% increased Movement Speed if you haven't been Hit Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Movement Speed if you haven\'t taken Damage Recently',
    regex: /(\d+)% increased Movement Speed if you haven't taken Damage Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Movement Speed if you\'ve Hit an Enemy Recently',
    regex: /(\d+)% increased Movement Speed if you've Hit an Enemy Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Movement Speed if you\'ve Killed Recently',
    regex: /(\d+)% increased Movement Speed if you've Killed Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Movement speed while on Burning, Chilled or Shocked ground',
    regex: /(\d+)% increased Movement speed while on Burning, Chilled or Shocked ground/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Movement Speed while you have Fortify',
    regex: /(\d+)% increased Movement Speed while you have Fortify/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Physical Damage',
    regex: /(\d+)% increased Physical Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Physical Damage taken',
    regex: /(\d+)% increased Physical Damage taken/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Physical Weapon Damage while Dual Wielding',
    regex: /(\d+)% increased Physical Weapon Damage while Dual Wielding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Poison Duration',
    regex: /(\d+)% increased Poison Duration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Power Charge Duration',
    regex: /(\d+)% increased Power Charge Duration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Projectile Attack Damage',
    regex: /(\d+)% increased Projectile Attack Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Projectile Attack Damage during any Flask Effect',
    regex: /(\d+)% increased Projectile Attack Damage during any Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Projectile Attack Damage per 200 Accuracy Rating',
    regex: /(\d+)% increased Projectile Attack Damage per 200 Accuracy Rating/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Projectile Damage',
    regex: /(\d+)% increased Projectile Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Projectile Speed',
    regex: /(\d+)% increased Projectile Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Quantity of Fish Caught',
    regex: /(\d+)% increased Quantity of Fish Caught/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Quantity of Items found',
    regex: /(\d+)% increased Quantity of Items found/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Quantity of Items found during Flask effect',
    regex: /(\d+)% increased Quantity of Items found during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Rarity of Fish Caught',
    regex: /(\d+)% increased Rarity of Fish Caught/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Rarity of Items found',
    regex: /(\d+)% increased Rarity of Items found/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Rarity of Items found during any Flask Effect',
    regex: /(\d+)% increased Rarity of Items found during any Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Rarity of Items found during Flask effect',
    regex: /(\d+)% increased Rarity of Items found during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Rarity of Items found from Slain Unique Enemies',
    regex: /(\d+)% increased Rarity of Items found from Slain Unique Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Recovery rate',
    regex: /(\d+)% increased Recovery rate/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Recovery when on Low Life',
    regex: /(\d+)% increased Recovery when on Low Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Shock Duration on Enemies',
    regex: /(\d+)% increased Shock Duration on Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Skill Effect Duration',
    regex: /(\d+)% increased Skill Effect Duration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Spell Damage',
    regex: /(\d+)% increased Spell Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Spell Damage during any Flask Effect',
    regex: /(\d+)% increased Spell Damage during any Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Spell Damage per 10 Intelligence',
    regex: /(\d+)% increased Spell Damage per 10 Intelligence/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Spell Damage per 10 Strength',
    regex: /(\d+)% increased Spell Damage per 10 Strength/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Spell Damage per 16 Dexterity',
    regex: /(\d+)% increased Spell Damage per 16 Dexterity/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Spell Damage per 16 Intelligence',
    regex: /(\d+)% increased Spell Damage per 16 Intelligence/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Spell Damage per 16 Strength',
    regex: /(\d+)% increased Spell Damage per 16 Strength/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Spell Damage while Dual Wielding',
    regex: /(\d+)% increased Spell Damage while Dual Wielding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Spell Damage while holding a Shield',
    regex: /(\d+)% increased Spell Damage while holding a Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Spell Damage while wielding a Staff',
    regex: /(\d+)% increased Spell Damage while wielding a Staff/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Strength',
    regex: /(\d+)% increased Strength/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Stun and Block Recovery',
    regex: /(\d+)% increased Stun and Block Recovery/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Stun Duration on Enemies',
    regex: /(\d+)% increased Stun Duration on Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Stun Duration per 15 Strength',
    regex: /(\d+)% increased Stun Duration per 15 Strength/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased total Recovery per second from Life Leech',
    regex: /(\d+)% increased total Recovery per second from Life Leech/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Totem Damage',
    regex: /(\d+)% increased Totem Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Totem Life',
    regex: /(\d+)% increased Totem Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Totem Placement speed',
    regex: /(\d+)% increased Totem Placement speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Trap and Mine Throwing Speed',
    regex: /(\d+)% increased Trap and Mine Throwing Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Trap Damage',
    regex: /(\d+)% increased Trap Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Trap Duration',
    regex: /(\d+)% increased Trap Duration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Trap Throwing Speed',
    regex: /(\d+)% increased Trap Throwing Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Vaal Skill Critical Strike Chance',
    regex: /(\d+)% increased Vaal Skill Critical Strike Chance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Vaal Skill Effect Duration',
    regex: /(\d+)% increased Vaal Skill Effect Duration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Weapon Critical Strike Chance while Dual Wielding',
    regex: /(\d+)% increased Weapon Critical Strike Chance while Dual Wielding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% increased Weapon Damage while Dual Wielding',
    regex: /(\d+)% increased Weapon Damage while Dual Wielding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% more Melee Physical Damage during effect',
    regex: /(\d+)% more Melee Physical Damage during effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Attack Damage Leeched as Life',
    regex: /(\d+)% of Attack Damage Leeched as Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Attack Damage Leeched as Life during Flask effect',
    regex: /(\d+)% of Attack Damage Leeched as Life during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Chaos Damage Leeched as Life',
    regex: /(\d+)% of Chaos Damage Leeched as Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Chaos Damage Leeched as Life during Flask effect',
    regex: /(\d+)% of Chaos Damage Leeched as Life during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Cold Damage Leeched as Life',
    regex: /(\d+)% of Cold Damage Leeched as Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Damage is taken from Mana before Life',
    regex: /(\d+)% of Damage is taken from Mana before Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Damage taken gained as Mana over 4 seconds when Hit',
    regex: /(\d+)% of Damage taken gained as Mana over 4 seconds when Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Fire Damage Leeched as Life',
    regex: /(\d+)% of Fire Damage Leeched as Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Lightning Damage Leeched as Life',
    regex: /(\d+)% of Lightning Damage Leeched as Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Lightning Damage Leeched as Life during Flask effect',
    regex: /(\d+)% of Lightning Damage Leeched as Life during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Lightning Damage Leeched as Mana during Flask effect',
    regex: /(\d+)% of Lightning Damage Leeched as Mana during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Maximum Life taken as Chaos Damage per second',
    regex: /(\d+)% of Maximum Life taken as Chaos Damage per second/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Physical Attack Damage Leeched as Life',
    regex: /(\d+)% of Physical Attack Damage Leeched as Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Physical Attack Damage Leeched as Life during Flask effect',
    regex: /(\d+)% of Physical Attack Damage Leeched as Life during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Physical Attack Damage Leeched as Mana',
    regex: /(\d+)% of Physical Attack Damage Leeched as Mana/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Physical Attack Damage Leeched as Mana during Flask effect',
    regex: /(\d+)% of Physical Attack Damage Leeched as Mana during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Physical Damage Converted to Chaos Damage',
    regex: /(\d+)% of Physical Damage Converted to Chaos Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Physical Damage Converted to Cold Damage',
    regex: /(\d+)% of Physical Damage Converted to Cold Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Physical Damage Converted to Fire Damage',
    regex: /(\d+)% of Physical Damage Converted to Fire Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Physical Damage Converted to Lightning Damage',
    regex: /(\d+)% of Physical Damage Converted to Lightning Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Physical Damage Converted to Lightning during Flask effect',
    regex: /(\d+)% of Physical Damage Converted to Lightning during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Physical Damage from Hits taken as Chaos Damage',
    regex: /(\d+)% of Physical Damage from Hits taken as Chaos Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Physical Damage from Hits taken as Cold Damage',
    regex: /(\d+)% of Physical Damage from Hits taken as Cold Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Physical Damage from Hits taken as Cold Damage during Flask effect',
    regex: /(\d+)% of Physical Damage from Hits taken as Cold Damage during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Physical Damage from Hits taken as Fire Damage',
    regex: /(\d+)% of Physical Damage from Hits taken as Fire Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Physical Damage from Hits taken as Lightning Damage',
    regex: /(\d+)% of Physical Damage from Hits taken as Lightning Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Physical Damage Leeched as Life',
    regex: /(\d+)% of Physical Damage Leeched as Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Recovery applied Instantly',
    regex: /(\d+)% of Recovery applied Instantly/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Spell Damage Leeched as Energy Shield',
    regex: /(\d+)% of Spell Damage Leeched as Energy Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Spell Damage Leeched as Energy Shield during Flask effect',
    regex: /(\d+)% of Spell Damage Leeched as Energy Shield during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Spell Damage Leeched as Life',
    regex: /(\d+)% of Spell Damage Leeched as Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% of Spell Damage Leeched as Mana',
    regex: /(\d+)% of Spell Damage Leeched as Mana/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Amount Recovered',
    regex: /(\d+)% reduced Amount Recovered/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Attribute Requirements',
    regex: /(\d+)% reduced Attribute Requirements/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Chaos Damage taken',
    regex: /(\d+)% reduced Chaos Damage taken/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Chaos Damage taken over time',
    regex: /(\d+)% reduced Chaos Damage taken over time/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Charges used',
    regex: /(\d+)% reduced Charges used/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Cold Damage taken',
    regex: /(\d+)% reduced Cold Damage taken/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Duration',
    regex: /(\d+)% reduced Duration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Effect of Curses on you',
    regex: /(\d+)% reduced Effect of Curses on you/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Elemental Ailment Duration on you',
    regex: /(\d+)% reduced Elemental Ailment Duration on you/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Elemental Damage taken per Endurance Charge',
    regex: /(\d+)% reduced Elemental Damage taken per Endurance Charge/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Elemental Damage Taken while stationary',
    regex: /(\d+)% reduced Elemental Damage Taken while stationary/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Enemy Stun Threshold',
    regex: /(\d+)% reduced Enemy Stun Threshold/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Enemy Stun Threshold while you have at least 500 Strength',
    regex: /(\d+)% reduced Enemy Stun Threshold while you have at least 500 Strength/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Fire Damage taken',
    regex: /(\d+)% reduced Fire Damage taken/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Fishing Pool Consumption',
    regex: /(\d+)% reduced Fishing Pool Consumption/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Flask Charges used',
    regex: /(\d+)% reduced Flask Charges used/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Lightning Damage taken',
    regex: /(\d+)% reduced Lightning Damage taken/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Mana Cost of Skills',
    regex: /(\d+)% reduced Mana Cost of Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Mana Cost of Skills during Flask Effect',
    regex: /(\d+)% reduced Mana Cost of Skills during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Mana Reserved',
    regex: /(\d+)% reduced Mana Reserved/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Physical Damage taken over time',
    regex: /(\d+)% reduced Physical Damage taken over time/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Recovery rate',
    regex: /(\d+)% reduced Recovery rate/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Reflected Damage taken',
    regex: /(\d+)% reduced Reflected Damage taken/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Reflected Elemental Damage taken',
    regex: /(\d+)% reduced Reflected Elemental Damage taken/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Reflected Physical Damage taken',
    regex: /(\d+)% reduced Reflected Physical Damage taken/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '#% reduced Soul Cost of Vaal Skills',
    regex: /(\d+)% reduced Soul Cost of Vaal Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# Armour if you\'ve Blocked Recently',
    regex: /\+(\d+) Armour if you've Blocked Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# Energy Shield gained for each Enemy hit by your Attacks',
    regex: /\+(\d+) Energy Shield gained for each Enemy hit by your Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# Life gained for each Blinded Enemy Hit by this Weapon',
    regex: /\+(\d+) Life gained for each Blinded Enemy Hit by this Weapon/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# Life gained for each Enemy hit by Attacks',
    regex: /\+(\d+) Life gained for each Enemy hit by Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# Life gained for each Enemy Hit by this Weapon while you are Leeching',
    regex: /\+(\d+) Life gained for each Enemy Hit by this Weapon while you are Leeching/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# Life gained for each Enemy hit by your Attacks',
    regex: /\+(\d+) Life gained for each Enemy hit by your Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# Life gained for each Enemy hit by your Spells',
    regex: /\+(\d+) Life gained for each Enemy hit by your Spells/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# Life gained on Kill',
    regex: /\+(\d+) Life gained on Kill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# Life gained when you Block',
    regex: /\+(\d+) Life gained when you Block/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# Mana gained for each Enemy hit by your Attacks',
    regex: /\+(\d+) Mana gained for each Enemy hit by your Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# Mana gained for each Enemy Hit by your Spells',
    regex: /\+(\d+) Mana gained for each Enemy Hit by your Spells/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# Mana gained on Kill',
    regex: /\+(\d+) Mana gained on Kill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# Mana gained when you Block',
    regex: /\+(\d+) Mana gained when you Block/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Accuracy Rating',
    regex: /\+(\d+) to Accuracy Rating/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to all Attributes',
    regex: /\+(\d+) to all Attributes/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Armour',
    regex: /\+(\d+) to Armour/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Armour if you\'ve Hit an Enemy Recently',
    regex: /\+(\d+) to Armour if you've Hit an Enemy Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Dexterity',
    regex: /\+(\d+) to Dexterity/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Dexterity and Intelligence',
    regex: /\+(\d+) to Dexterity and Intelligence/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Evasion Rating',
    regex: /\+(\d+) to Evasion Rating/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Evasion Rating if Hit an Enemy Recently',
    regex: /\+(\d+) to Evasion Rating if Hit an Enemy Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Intelligence',
    regex: /\+(\d+) to Intelligence/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of all Chaos Spell Skill Gems',
    regex: /\+(\d+) to Level of all Chaos Spell Skill Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of all Cold Spell Skill Gems',
    regex: /\+(\d+) to Level of all Cold Spell Skill Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of all Fire Spell Skill Gems',
    regex: /\+(\d+) to Level of all Fire Spell Skill Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of all Lightning Spell Skill Gems',
    regex: /\+(\d+) to Level of all Lightning Spell Skill Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of all Minion Skill Gems',
    regex: /\+(\d+) to Level of all Minion Skill Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of all Physical Spell Skill Gems',
    regex: /\+(\d+) to Level of all Physical Spell Skill Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of all Raise Spectre Gems',
    regex: /\+(\d+) to Level of all Raise Spectre Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of all Spell Skill Gems',
    regex: /\+(\d+) to Level of all Spell Skill Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Active Skill Gems',
    regex: /\+(\d+) to Level of Socketed Active Skill Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Aura Gems',
    regex: /\+(\d+) to Level of Socketed Aura Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Bow Gems',
    regex: /\+(\d+) to Level of Socketed Bow Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Chaos Gems',
    regex: /\+(\d+) to Level of Socketed Chaos Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Cold Gems',
    regex: /\+(\d+) to Level of Socketed Cold Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Curse Gems',
    regex: /\+(\d+) to Level of Socketed Curse Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Dexterity Gems',
    regex: /\+(\d+) to Level of Socketed Dexterity Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Fire Gems',
    regex: /\+(\d+) to Level of Socketed Fire Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Gems',
    regex: /\+(\d+) to Level of Socketed Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Intelligence Gems',
    regex: /\+(\d+) to Level of Socketed Intelligence Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Lightning Gems',
    regex: /\+(\d+) to Level of Socketed Lightning Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Melee Gems',
    regex: /\+(\d+) to Level of Socketed Melee Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Minion Gems',
    regex: /\+(\d+) to Level of Socketed Minion Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Spell Gems',
    regex: /\+(\d+) to Level of Socketed Spell Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Strength Gems',
    regex: /\+(\d+) to Level of Socketed Strength Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Support Gems',
    regex: /\+(\d+) to Level of Socketed Support Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Trap Gems',
    regex: /\+(\d+) to Level of Socketed Trap Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Level of Socketed Trap or Mine Gems',
    regex: /\+(\d+) to Level of Socketed Trap or Mine Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Maximum Charges',
    regex: /\+(\d+) to Maximum Charges/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Maximum Endurance Charges',
    regex: /\+(\d+) to Maximum Endurance Charges/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to maximum Energy Shield',
    regex: /\+(\d+) to maximum Energy Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Maximum Frenzy Charges',
    regex: /\+(\d+) to Maximum Frenzy Charges/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to maximum Life',
    regex: /\+(\d+) to maximum Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to maximum Mana',
    regex: /\+(\d+) to maximum Mana/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to maximum number of Raised Zombies',
    regex: /\+(\d+) to maximum number of Raised Zombies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to maximum number of Skeletons',
    regex: /\+(\d+) to maximum number of Skeletons/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to maximum number of Spectres',
    regex: /\+(\d+) to maximum number of Spectres/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to maximum number of Summoned Totems',
    regex: /\+(\d+) to maximum number of Summoned Totems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Maximum Power Charges',
    regex: /\+(\d+) to Maximum Power Charges/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Melee Weapon and Unarmed Attack range',
    regex: /\+(\d+) to Melee Weapon and Unarmed Attack range/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Melee Weapon Range if you have Killed Recently',
    regex: /\+(\d+) to Melee Weapon Range if you have Killed Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Melee Weapon Range while at Maximum Frenzy Charges',
    regex: /\+(\d+) to Melee Weapon Range while at Maximum Frenzy Charges/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Melee Weapon Range while Fortified',
    regex: /\+(\d+) to Melee Weapon Range while Fortified/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Strength',
    regex: /\+(\d+) to Strength/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Strength and Dexterity',
    regex: /\+(\d+) to Strength and Dexterity/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Strength and Intelligence',
    regex: /\+(\d+) to Strength and Intelligence/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+# to Weapon range',
    regex: /\+(\d+) to Weapon range/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% Chance to Block',
    regex: /\+(\d+)% Chance to Block/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% Chance to Block Attack Damage during Flask effect',
    regex: /\+(\d+)% Chance to Block Attack Damage during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% Chance to Block Attack Damage if there are at least 5 nearby Enemies',
    regex: /\+(\d+)% Chance to Block Attack Damage if there are at least 5 nearby Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% Chance to Block Attack Damage if you were Damaged by a Hit Recently',
    regex: /\+(\d+)% Chance to Block Attack Damage if you were Damaged by a Hit Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% Chance to Block Attack Damage if you\'ve dealt a Critical Strike Recently',
    regex: /\+(\d+)% Chance to Block Attack Damage if you've dealt a Critical Strike Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% Chance to Block Attack Damage per Endurance Charge',
    regex: /\+(\d+)% Chance to Block Attack Damage per Endurance Charge/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% Chance to Block Attack Damage while Dual Wielding',
    regex: /\+(\d+)% Chance to Block Attack Damage while Dual Wielding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% Chance to Block Attack Damage while holding a Shield',
    regex: /\+(\d+)% Chance to Block Attack Damage while holding a Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% Chance to Block Attack Damage while wielding a Staff',
    regex: /\+(\d+)% Chance to Block Attack Damage while wielding a Staff/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% Chance to Block Projectile Attack Damage',
    regex: /\+(\d+)% Chance to Block Projectile Attack Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% Chance to Block Spell Damage during Flask effect',
    regex: /\+(\d+)% Chance to Block Spell Damage during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% Chance to Block Spell Damage if you were Damaged by a Hit Recently',
    regex: /\+(\d+)% Chance to Block Spell Damage if you were Damaged by a Hit Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% Chance to Block Spell Damage while Dual Wielding',
    regex: /\+(\d+)% Chance to Block Spell Damage while Dual Wielding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% Chance to Block Spell Damage while holding a Shield',
    regex: /\+(\d+)% Chance to Block Spell Damage while holding a Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% Chance to Block Spell Damage while wielding a Staff',
    regex: /\+(\d+)% Chance to Block Spell Damage while wielding a Staff/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% chance to Evade Attacks',
    regex: /\+(\d+)% chance to Evade Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% Chaos Resistance against Damage Over Time',
    regex: /\+(\d+)% Chaos Resistance against Damage Over Time/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to all Elemental Resistances',
    regex: /\+(\d+)% to all Elemental Resistances/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to all maximum Elemental Resistances during Flask effect',
    regex: /\+(\d+)% to all maximum Elemental Resistances during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to all maximum Resistances',
    regex: /\+(\d+)% to all maximum Resistances/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Chaos Damage over Time Multiplier',
    regex: /\+(\d+)% to Chaos Damage over Time Multiplier/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Chaos Resistance',
    regex: /\+(\d+)% to Chaos Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Chaos Resistance during any Flask Effect',
    regex: /\+(\d+)% to Chaos Resistance during any Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Cold and Lightning Resistances',
    regex: /\+(\d+)% to Cold and Lightning Resistances/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Cold Damage over Time Multiplier',
    regex: /\+(\d+)% to Cold Damage over Time Multiplier/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Cold Resistance',
    regex: /\+(\d+)% to Cold Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier against Enemies that are on Full Life',
    regex: /\+(\d+)% to Critical Strike Multiplier against Enemies that are on Full Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier for Spells',
    regex: /\+(\d+)% to Critical Strike Multiplier for Spells/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier if you have Blocked Recently',
    regex: /\+(\d+)% to Critical Strike Multiplier if you have Blocked Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier if you haven\'t dealt a Critical Strike Recently',
    regex: /\+(\d+)% to Critical Strike Multiplier if you haven't dealt a Critical Strike Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier if you\'ve Killed Recently',
    regex: /\+(\d+)% to Critical Strike Multiplier if you've Killed Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier while Dual Wielding',
    regex: /\+(\d+)% to Critical Strike Multiplier while Dual Wielding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Axes',
    regex: /\+(\d+)% to Critical Strike Multiplier with Axes/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Bows',
    regex: /\+(\d+)% to Critical Strike Multiplier with Bows/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Chaos Skills',
    regex: /\+(\d+)% to Critical Strike Multiplier with Chaos Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Claws',
    regex: /\+(\d+)% to Critical Strike Multiplier with Claws/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Cold Skills',
    regex: /\+(\d+)% to Critical Strike Multiplier with Cold Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Daggers',
    regex: /\+(\d+)% to Critical Strike Multiplier with Daggers/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Elemental Skills',
    regex: /\+(\d+)% to Critical Strike Multiplier with Elemental Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Fire Skills',
    regex: /\+(\d+)% to Critical Strike Multiplier with Fire Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Lightning Skills',
    regex: /\+(\d+)% to Critical Strike Multiplier with Lightning Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Maces and Sceptres',
    regex: /\+(\d+)% to Critical Strike Multiplier with Maces and Sceptres/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Mines',
    regex: /\+(\d+)% to Critical Strike Multiplier with Mines/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with One Handed Melee Weapons',
    regex: /\+(\d+)% to Critical Strike Multiplier with One Handed Melee Weapons/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Staves',
    regex: /\+(\d+)% to Critical Strike Multiplier with Staves/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Swords',
    regex: /\+(\d+)% to Critical Strike Multiplier with Swords/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Traps',
    regex: /\+(\d+)% to Critical Strike Multiplier with Traps/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Two Handed Melee Weapons',
    regex: /\+(\d+)% to Critical Strike Multiplier with Two Handed Melee Weapons/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Wands',
    regex: /\+(\d+)% to Critical Strike Multiplier with Wands/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Elemental Resistances during Flask Effect',
    regex: /\+(\d+)% to Elemental Resistances during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Fire and Cold Resistances',
    regex: /\+(\d+)% to Fire and Cold Resistances/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Fire and Lightning Resistances',
    regex: /\+(\d+)% to Fire and Lightning Resistances/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Fire Damage over Time Multiplier',
    regex: /\+(\d+)% to Fire Damage over Time Multiplier/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Fire Resistance',
    regex: /\+(\d+)% to Fire Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Global Critical Strike Multiplier',
    regex: /\+(\d+)% to Global Critical Strike Multiplier/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Lightning Resistance',
    regex: /\+(\d+)% to Lightning Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to maximum Chance to Block Attack Damage',
    regex: /\+(\d+)% to maximum Chance to Block Attack Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to maximum Chaos Resistance',
    regex: /\+(\d+)% to maximum Chaos Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to maximum Cold Resistance',
    regex: /\+(\d+)% to maximum Cold Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to maximum Fire Resistance',
    regex: /\+(\d+)% to maximum Fire Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to maximum Lightning Resistance',
    regex: /\+(\d+)% to maximum Lightning Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Melee Critical Strike Multiplier',
    regex: /\+(\d+)% to Melee Critical Strike Multiplier/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Melee Critical Strike Multiplier while holding a Shield',
    regex: /\+(\d+)% to Melee Critical Strike Multiplier while holding a Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Physical Damage over Time Multiplier',
    regex: /\+(\d+)% to Physical Damage over Time Multiplier/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Quality',
    regex: /\+(\d+)% to Quality/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '+#% to Quality of Socketed Support Gems',
    regex: /\+(\d+)% to Quality of Socketed Support Gems/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '-# to Total Mana Cost of Skills',
    regex: /-(\d+) to Total Mana Cost of Skills/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: '50% more Global Accuracy Rating',
    regex: /50% more Global Accuracy Rating/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Chaos Damage',
    regex: /Adds (\d+) to (\d+) Chaos Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Chaos Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Chaos Damage to Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Chaos Damage to Spells',
    regex: /Adds (\d+) to (\d+) Chaos Damage to Spells/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Chaos Damage to Spells while Dual Wielding',
    regex: /Adds (\d+) to (\d+) Chaos Damage to Spells while Dual Wielding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Chaos Damage to Spells while holding a Shield',
    regex: /Adds (\d+) to (\d+) Chaos Damage to Spells while holding a Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Chaos Damage to Spells while wielding a Two Handed Weapon',
    regex: /Adds (\d+) to (\d+) Chaos Damage to Spells while wielding a Two Handed Weapon/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage',
    regex: /Adds (\d+) to (\d+) Cold Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage against Chilled or Frozen Enemies',
    regex: /Adds (\d+) to (\d+) Cold Damage against Chilled or Frozen Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Attacks with this Weapon per 10 Dexterity',
    regex: /Adds (\d+) to (\d+) Cold Damage to Attacks with this Weapon per 10 Dexterity/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Axe Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Axe Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Bow Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Bow Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Claw Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Claw Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Dagger Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Dagger Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Mace and Sceptre Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Mace and Sceptre Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Spells',
    regex: /Adds (\d+) to (\d+) Cold Damage to Spells/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Spells and Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Spells and Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Spells while Dual Wielding',
    regex: /Adds (\d+) to (\d+) Cold Damage to Spells while Dual Wielding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Spells while holding a Shield',
    regex: /Adds (\d+) to (\d+) Cold Damage to Spells while holding a Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Spells while wielding a Two Handed Weapon',
    regex: /Adds (\d+) to (\d+) Cold Damage to Spells while wielding a Two Handed Weapon/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Staff Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Staff Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Sword Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Sword Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Wand Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Wand Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage',
    regex: /Adds (\d+) to (\d+) Fire Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage against Ignited Enemies',
    regex: /Adds (\d+) to (\d+) Fire Damage against Ignited Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage if you\'ve Blocked Recently',
    regex: /Adds (\d+) to (\d+) Fire Damage if you've Blocked Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Attacks with this Weapon per 10 Strength',
    regex: /Adds (\d+) to (\d+) Fire Damage to Attacks with this Weapon per 10 Strength/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Axe Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Axe Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Bow Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Bow Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Claw Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Claw Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Dagger Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Dagger Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Mace and Sceptre Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Mace and Sceptre Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Spells',
    regex: /Adds (\d+) to (\d+) Fire Damage to Spells/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Spells and Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Spells and Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Spells while Dual Wielding',
    regex: /Adds (\d+) to (\d+) Fire Damage to Spells while Dual Wielding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Spells while holding a Shield',
    regex: /Adds (\d+) to (\d+) Fire Damage to Spells while holding a Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Spells while wielding a Two Handed Weapon',
    regex: /Adds (\d+) to (\d+) Fire Damage to Spells while wielding a Two Handed Weapon/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Staff Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Staff Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Sword Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Sword Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Wand Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Wand Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage',
    regex: /Adds (\d+) to (\d+) Lightning Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage against Shocked Enemies',
    regex: /Adds (\d+) to (\d+) Lightning Damage against Shocked Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Attacks during Flask effect',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Attacks during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Attacks with this Weapon per 10 Intelligence',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Attacks with this Weapon per 10 Intelligence/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Axe Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Axe Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Bow Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Bow Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Claw Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Claw Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Dagger Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Dagger Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Mace and Sceptre Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Mace and Sceptre Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Spells',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Spells/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Spells and Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Spells and Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Spells during Flask effect',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Spells during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Spells while Dual Wielding',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Spells while Dual Wielding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Spells while holding a Shield',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Spells while holding a Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Spells while wielding a Two Handed Weapon',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Spells while wielding a Two Handed Weapon/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Staff Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Staff Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Sword Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Sword Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Wand Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Wand Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage',
    regex: /Adds (\d+) to (\d+) Physical Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage against Bleeding Enemies',
    regex: /Adds (\d+) to (\d+) Physical Damage against Bleeding Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage against Poisoned Enemies',
    regex: /Adds (\d+) to (\d+) Physical Damage against Poisoned Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage to Axe Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Axe Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage to Bow Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Bow Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage to Claw Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Claw Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage to Dagger Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Dagger Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage to Mace and Sceptre Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Mace and Sceptre Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage to Spells',
    regex: /Adds (\d+) to (\d+) Physical Damage to Spells/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage to Spells while Dual Wielding',
    regex: /Adds (\d+) to (\d+) Physical Damage to Spells while Dual Wielding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage to Spells while holding a Shield',
    regex: /Adds (\d+) to (\d+) Physical Damage to Spells while holding a Shield/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage to Spells while wielding a Two Handed Weapon',
    regex: /Adds (\d+) to (\d+) Physical Damage to Spells while wielding a Two Handed Weapon/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage to Staff Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Staff Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage to Sword Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Sword Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage to Wand Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Wand Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Adds Knockback to Melee Attacks during Flask effect',
    regex: /Adds Knockback to Melee Attacks during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Area is inhabited by an additional Invasion Boss',
    regex: /Area is inhabited by an additional Invasion Boss/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Area is inhabited by the Vaal',
    regex: /Area is inhabited by the Vaal/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Areas contain Alva',
    regex: /Areas contain Alva/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Areas contain Einhar',
    regex: /Areas contain Einhar/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Areas contain Jun',
    regex: /Areas contain Jun/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Areas contain Niko',
    regex: /Areas contain Niko/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Areas contain Zana',
    regex: /Areas contain Zana/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Attacks have #% chance to cause Bleeding',
    regex: /Attacks have (\d+)% chance to cause Bleeding/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Attacks have #% chance to Maim on Hit',
    regex: /Attacks have (\d+)% chance to Maim on Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Attacks have +#% to Critical Strike Chance',
    regex: /Attacks have \+(\d+)% to Critical Strike Chance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Attacks with this Weapon Penetrate #% Elemental Resistances',
    regex: /Attacks with this Weapon Penetrate (\d+)% Elemental Resistances/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Auras from your Skills grant #% increased Damage to you and Allies',
    regex: /Auras from your Skills grant (\d+)% increased Damage to you and Allies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Bow Attacks fire an additional Arrow',
    regex: /Bow Attacks fire an additional Arrow/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Bow Attacks fire an additional Arrow while Main Hand Accuracy Rating is at least #',
    regex: /Bow Attacks fire an additional Arrow while Main Hand Accuracy Rating is at least (\d+)/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Cannot be Chilled or Frozen while moving',
    regex: /Cannot be Chilled or Frozen while moving/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Cannot be Frozen',
    regex: /Cannot be Frozen/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Cannot be Poisoned',
    regex: /Cannot be Poisoned/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Cannot be Shocked or Ignited while moving',
    regex: /Cannot be Shocked or Ignited while moving/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Cannot be Stunned during Flask Effect',
    regex: /Cannot be Stunned during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Cannot gain Mana during effect',
    regex: /Cannot gain Mana during effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Chaos Damage does not bypass Energy Shield during effect',
    regex: /Chaos Damage does not bypass Energy Shield during effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Chill Nearby Enemies when you Block',
    regex: /Chill Nearby Enemies when you Block/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Consumes Frenzy Charges on use',
    regex: /Consumes Frenzy Charges on use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Corrupted Blood cannot be inflicted on you',
    regex: /Corrupted Blood cannot be inflicted on you/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Creates a Smoke Cloud on Use',
    regex: /Creates a Smoke Cloud on Use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Creates Chilled Ground on Use',
    regex: /Creates Chilled Ground on Use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Creates Consecrated Ground on Use',
    regex: /Creates Consecrated Ground on Use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Critical Strikes with this Weapon have Culling Strike',
    regex: /Critical Strikes with this Weapon have Culling Strike/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Culling Strike',
    regex: /Culling Strike/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Curse Enemies with Level # Assassin\'s Mark on Hit',
    regex: /Curse Enemies with Level (\d+) Assassin's Mark on Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Curse Enemies with Level # Conductivity on Hit',
    regex: /Curse Enemies with Level (\d+) Conductivity on Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Curse Enemies with Level # Despair on Hit',
    regex: /Curse Enemies with Level (\d+) Despair on Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Curse Enemies with Level # Flammability on Hit',
    regex: /Curse Enemies with Level (\d+) Flammability on Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Curse Enemies with Level # Frostbite on Hit',
    regex: /Curse Enemies with Level (\d+) Frostbite on Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Curse Enemies with Level # Poacher\'s Mark on Hit',
    regex: /Curse Enemies with Level (\d+) Poacher's Mark on Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Curse Enemies with Level # Vulnerability on Hit',
    regex: /Curse Enemies with Level (\d+) Vulnerability on Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Curse Enemies with Level # Warlord\'s Mark on Hit',
    regex: /Curse Enemies with Level (\d+) Warlord's Mark on Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Curse Skills have #% increased Cast Speed',
    regex: /Curse Skills have (\d+)% increased Cast Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Curse Skills have #% increased Skill Effect Duration',
    regex: /Curse Skills have (\d+)% increased Skill Effect Duration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Damage Penetrates #% Cold Resistance',
    regex: /Damage Penetrates (\d+)% Cold Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Damage Penetrates #% Elemental Resistance if you haven\'t Killed Recently',
    regex: /Damage Penetrates (\d+)% Elemental Resistance if you haven't Killed Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Damage Penetrates #% Elemental Resistances',
    regex: /Damage Penetrates (\d+)% Elemental Resistances/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Damage Penetrates #% Elemental Resistances during any Flask Effect',
    regex: /Damage Penetrates (\d+)% Elemental Resistances during any Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Damage Penetrates #% Fire Resistance',
    regex: /Damage Penetrates (\d+)% Fire Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Damage Penetrates #% Lightning Resistance',
    regex: /Damage Penetrates (\d+)% Lightning Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Damage Penetrates #% Lightning Resistance during Flask effect',
    regex: /Damage Penetrates (\d+)% Lightning Resistance during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Drops Burning Ground while moving, dealing # Fire Damage per second',
    regex: /Drops Burning Ground while moving, dealing (\d+) Fire Damage per second/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'During Flask Effect, #% reduced Damage taken of each Element for which your Uncapped Elemental Resistance is lowest',
    regex: /During Flask Effect, (\d+)% reduced Damage taken of each Element for which your Uncapped Elemental Resistance is lowest/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'During Flask Effect, Damage Penetrates #% Resistance of each Element for which your Uncapped Elemental Resistance is highest',
    regex: /During Flask Effect, Damage Penetrates (\d+)% Resistance of each Element for which your Uncapped Elemental Resistance is highest/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Enemies have #% reduced Evasion if you have Hit them Recently',
    regex: /Enemies have (\d+)% reduced Evasion if you have Hit them Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Enemies Ignited by you during Flask Effect take #% increased Damage',
    regex: /Enemies Ignited by you during Flask Effect take (\d+)% increased Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Enemies killed explode dealing #% of their Life as Fire Damage',
    regex: /Enemies killed explode dealing (\d+)% of their Life as Fire Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Eternal Iron Hook',
    regex: /Eternal Iron Hook/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Flask Effect is not removed at Full Mana',
    regex: /Flask Effect is not removed at Full Mana/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Flasks applied to you have #% increased Effect',
    regex: /Flasks applied to you have (\d+)% increased Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Found Items have a #% chance to drop Corrupted in Area',
    regex: /Found Items have a (\d+)% chance to drop Corrupted in Area/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain # Charge when you are Hit by an Enemy',
    regex: /Gain (\d+) Charge when you are Hit by an Enemy/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain # Vaal Souls on use',
    regex: /Gain (\d+) Vaal Souls on use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain # Vaal Souls Per Second during effect',
    regex: /Gain (\d+) Vaal Souls Per Second during effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain #% of Cold Damage as Extra Chaos Damage',
    regex: /Gain (\d+)% of Cold Damage as Extra Chaos Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain #% of Elemental Damage as Extra Chaos Damage',
    regex: /Gain (\d+)% of Elemental Damage as Extra Chaos Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain #% of Elemental Damage as Extra Chaos Damage during effect',
    regex: /Gain (\d+)% of Elemental Damage as Extra Chaos Damage during effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain #% of Fire Damage as Extra Chaos Damage',
    regex: /Gain (\d+)% of Fire Damage as Extra Chaos Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain #% of Lightning Damage as Extra Chaos Damage',
    regex: /Gain (\d+)% of Lightning Damage as Extra Chaos Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain #% of Non-Chaos Damage as extra Chaos Damage',
    regex: /Gain (\d+)% of Non-Chaos Damage as extra Chaos Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Chaos Damage',
    regex: /Gain (\d+)% of Physical Damage as Extra Chaos Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Chaos Damage during effect',
    regex: /Gain (\d+)% of Physical Damage as Extra Chaos Damage during effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Cold Damage',
    regex: /Gain (\d+)% of Physical Damage as Extra Cold Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Cold Damage during effect',
    regex: /Gain (\d+)% of Physical Damage as Extra Cold Damage during effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Damage of a random Element',
    regex: /Gain (\d+)% of Physical Damage as Extra Damage of a random Element/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Fire Damage',
    regex: /Gain (\d+)% of Physical Damage as Extra Fire Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Fire Damage if you\'ve dealt a Critical Strike Recently',
    regex: /Gain (\d+)% of Physical Damage as Extra Fire Damage if you've dealt a Critical Strike Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Lightning Damage',
    regex: /Gain (\d+)% of Physical Damage as Extra Lightning Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain a Power Charge after Spending a total of 200 Mana',
    regex: /Gain a Power Charge after Spending a total of 200 Mana/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain an Endurance Charge every # seconds while Stationary',
    regex: /Gain an Endurance Charge every (\d+) seconds while Stationary/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain an Endurance Charge when you lose Fortify',
    regex: /Gain an Endurance Charge when you lose Fortify/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain an Endurance, Frenzy or Power charge when you Block',
    regex: /Gain an Endurance, Frenzy or Power charge when you Block/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain Onslaught for # seconds per Frenzy Charge on use',
    regex: /Gain Onslaught for (\d+) seconds per Frenzy Charge on use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain Onslaught for 3 seconds when Hit',
    regex: /Gain Onslaught for 3 seconds when Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gain Unholy Might during Flask Effect',
    regex: /Gain Unholy Might during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gains no Charges during Effect of any Overflowing Chalice Flask',
    regex: /Gains no Charges during Effect of any Overflowing Chalice Flask/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Gains no Charges during effect of any Soul Ripper Flask',
    regex: /Gains no Charges during effect of any Soul Ripper Flask/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants #% of Life Recovery to Minions',
    regex: /Grants (\d+)% of Life Recovery to Minions/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Last Breath when you Use a Skill during Flask Effect, for #% of Mana Cost',
    regex: /Grants Last Breath when you Use a Skill during Flask Effect, for (\d+)% of Mana Cost/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Abyssal Cry Skill',
    regex: /Grants Level (\d+) Abyssal Cry Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Anger Skill',
    regex: /Grants Level (\d+) Anger Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Aspect of the Avian Skill',
    regex: /Grants Level (\d+) Aspect of the Avian Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Aspect of the Cat Skill',
    regex: /Grants Level (\d+) Aspect of the Cat Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Aspect of the Crab Skill',
    regex: /Grants Level (\d+) Aspect of the Crab Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Aspect of the Spider Skill',
    regex: /Grants Level (\d+) Aspect of the Spider Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Clarity Skill',
    regex: /Grants Level (\d+) Clarity Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Decoy Totem Skill',
    regex: /Grants Level (\d+) Decoy Totem Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Despair Curse Aura during Flask Effect',
    regex: /Grants Level (\d+) Despair Curse Aura during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Determination Skill',
    regex: /Grants Level (\d+) Determination Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Discipline Skill',
    regex: /Grants Level (\d+) Discipline Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Enduring Cry Skill',
    regex: /Grants Level (\d+) Enduring Cry Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Envy Skill',
    regex: /Grants Level (\d+) Envy Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Grace Skill',
    regex: /Grants Level (\d+) Grace Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Haste Skill',
    regex: /Grants Level (\d+) Haste Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Hatred Skill',
    regex: /Grants Level (\d+) Hatred Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Herald of Ash Skill',
    regex: /Grants Level (\d+) Herald of Ash Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Herald of Ice Skill',
    regex: /Grants Level (\d+) Herald of Ice Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Herald of Thunder Skill',
    regex: /Grants Level (\d+) Herald of Thunder Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Rallying Cry Skill',
    regex: /Grants Level (\d+) Rallying Cry Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Vitality Skill',
    regex: /Grants Level (\d+) Vitality Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Level # Wrath Skill',
    regex: /Grants Level (\d+) Wrath Skill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Grants Perfect Agony during Flask effect',
    regex: /Grants Perfect Agony during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Has 1 Abyssal Socket',
    regex: /Has 1 Abyssal Socket/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Hits can\'t be Evaded',
    regex: /Hits can't be Evaded/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Hits with this Weapon can\'t be Evaded if you have Blocked Recently',
    regex: /Hits with this Weapon can't be Evaded if you have Blocked Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Hits with this Weapon have Culling Strike against Bleeding Enemies',
    regex: /Hits with this Weapon have Culling Strike against Bleeding Enemies/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Hits with this Weapon have Culling Strike if you have dealt a Critical Strike Recently',
    regex: /Hits with this Weapon have Culling Strike if you have dealt a Critical Strike Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Ignore all Movement Penalties from Armour',
    regex: /Ignore all Movement Penalties from Armour/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Immune to Curses during Flask effect Removes Curses on use',
    regex: /Immune to Curses during Flask effect Removes Curses on use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Immune to Freeze, Chill, Curses and Stuns during Flask Effect',
    regex: /Immune to Freeze, Chill, Curses and Stuns during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Immune to Poison during Flask Effect Removes Poison on use',
    regex: /Immune to Poison during Flask Effect Removes Poison on use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Immunity to Bleeding during Flask effect Removes Bleeding on use',
    regex: /Immunity to Bleeding during Flask effect Removes Bleeding on use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Immunity to Freeze and Chill during Flask effect Removes Freeze and Chill on use',
    regex: /Immunity to Freeze and Chill during Flask effect Removes Freeze and Chill on use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Immunity to Ignite during Flask effect Removes Burning on use',
    regex: /Immunity to Ignite during Flask effect Removes Burning on use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Immunity to Shock during Flask effect Removes Shock on use',
    regex: /Immunity to Shock during Flask effect Removes Shock on use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Instant Recovery',
    regex: /Instant Recovery/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Instant Recovery when on Low Life',
    regex: /Instant Recovery when on Low Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Item sells for much more to vendors',
    regex: /Item sells for much more to vendors/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Items and Gems have #% reduced Attribute Requirements',
    regex: /Items and Gems have (\d+)% reduced Attribute Requirements/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Knocks Back Enemies in an Area when you use a Flask',
    regex: /Knocks Back Enemies in an Area when you use a Flask/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Life and Mana Leech are instant during effect',
    regex: /Life and Mana Leech are instant during effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Life Recovery from Flasks also applies to Energy Shield during Flask Effect',
    regex: /Life Recovery from Flasks also applies to Energy Shield during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Lose all Flask Charges on entering a new area',
    regex: /Lose all Flask Charges on entering a new area/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Mana Recovery occurs instantly at the end of the Flask effect',
    regex: /Mana Recovery occurs instantly at the end of the Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Melee Movement Skills have #% chance to Fortify on Hit',
    regex: /Melee Movement Skills have (\d+)% chance to Fortify on Hit/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Mines have #% increased Detonation Speed',
    regex: /Mines have (\d+)% increased Detonation Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions deal # to # additional Chaos Damage',
    regex: /Minions deal (\d+) to (\d+) additional Chaos Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions deal # to # additional Cold Damage',
    regex: /Minions deal (\d+) to (\d+) additional Cold Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions deal # to # additional Fire Damage',
    regex: /Minions deal (\d+) to (\d+) additional Fire Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions deal # to # additional Lightning Damage',
    regex: /Minions deal (\d+) to (\d+) additional Lightning Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions deal # to # additional Physical Damage',
    regex: /Minions deal (\d+) to (\d+) additional Physical Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions deal #% increased Damage',
    regex: /Minions deal (\d+)% increased Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions deal #% increased Damage against Abyssal Monsters',
    regex: /Minions deal (\d+)% increased Damage against Abyssal Monsters/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions deal #% increased Damage if you\'ve used a Minion Skill Recently',
    regex: /Minions deal (\d+)% increased Damage if you've used a Minion Skill Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions have #% chance to Blind on Hit with Attacks',
    regex: /Minions have (\d+)% chance to Blind on Hit with Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions have #% chance to deal Double Damage',
    regex: /Minions have (\d+)% chance to deal Double Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions have #% chance to Hinder Enemies on Hit with Spells, with 30% reduced Movement Speed',
    regex: /Minions have (\d+)% chance to Hinder Enemies on Hit with Spells, with 30% reduced Movement Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions have #% chance to Taunt on Hit with Attacks',
    regex: /Minions have (\d+)% chance to Taunt on Hit with Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions have #% increased Attack and Cast Speed if you or your Minions have Killed Recently',
    regex: /Minions have (\d+)% increased Attack and Cast Speed if you or your Minions have Killed Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions have #% increased Attack Speed',
    regex: /Minions have (\d+)% increased Attack Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions have #% increased Cast Speed',
    regex: /Minions have (\d+)% increased Cast Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions have #% increased maximum Life',
    regex: /Minions have (\d+)% increased maximum Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions have #% increased Movement Speed',
    regex: /Minions have (\d+)% increased Movement Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions have +# to Accuracy Rating',
    regex: /Minions have \+(\d+) to Accuracy Rating/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions have +#% Chance to Block Attack Damage',
    regex: /Minions have \+(\d+)% Chance to Block Attack Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions have +#% to all Elemental Resistances',
    regex: /Minions have \+(\d+)% to all Elemental Resistances/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions have +#% to Chaos Resistance',
    regex: /Minions have \+(\d+)% to Chaos Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions Leech #% of Damage as Life',
    regex: /Minions Leech (\d+)% of Damage as Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions Regenerate # Life per second',
    regex: /Minions Regenerate (\d+) Life per second/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Minions Regenerate #% of Life per second',
    regex: /Minions Regenerate (\d+)% of Life per second/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Nearby Enemies have #% to Chaos Resistance',
    regex: /Nearby Enemies have (\d+)% to Chaos Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Nearby Enemies have #% to Cold Resistance',
    regex: /Nearby Enemies have (\d+)% to Cold Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Nearby Enemies have #% to Fire Resistance',
    regex: /Nearby Enemies have (\d+)% to Fire Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Nearby Enemies have #% to Lightning Resistance',
    regex: /Nearby Enemies have (\d+)% to Lightning Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Nearby Enemies have -#% to Chaos Resistance',
    regex: /Nearby Enemies have -(\d+)% to Chaos Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Nearby Enemies have -#% to Cold Resistance',
    regex: /Nearby Enemies have -(\d+)% to Cold Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Nearby Enemies have -#% to Fire Resistance',
    regex: /Nearby Enemies have -(\d+)% to Fire Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Nearby Enemies have -#% to Lightning Resistance',
    regex: /Nearby Enemies have -(\d+)% to Lightning Resistance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Nearby Enemies take #% increased Physical Damage',
    regex: /Nearby Enemies take (\d+)% increased Physical Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Non-Channelling Skills have -# to Total Mana Cost',
    regex: /Non-Channelling Skills have -(\d+) to Total Mana Cost/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Petrified during Flask Effect',
    regex: /Petrified during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Projectiles deal #% increased Damage for each Enemy Pierced',
    regex: /Projectiles deal (\d+)% increased Damage for each Enemy Pierced/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Projectiles Pierce # additional Targets',
    regex: /Projectiles Pierce (\d+) additional Targets/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Projectiles Pierce an additional Target',
    regex: /Projectiles Pierce an additional Target/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Recharges # Charge when you Consume an Ignited corpse',
    regex: /Recharges (\d+) Charge when you Consume an Ignited corpse/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Recharges # Charge when you deal a Critical Strike',
    regex: /Recharges (\d+) Charge when you deal a Critical Strike/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Recharges # Charges when you take a Critical Strike',
    regex: /Recharges (\d+) Charges when you take a Critical Strike/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Recover #% of Energy Shield on Kill',
    regex: /Recover (\d+)% of Energy Shield on Kill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Recover #% of Energy Shield when you Block',
    regex: /Recover (\d+)% of Energy Shield when you Block/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Recover #% of Energy Shield when you Kill an Enemy during Flask Effect',
    regex: /Recover (\d+)% of Energy Shield when you Kill an Enemy during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Recover #% of Life on Kill',
    regex: /Recover (\d+)% of Life on Kill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Recover #% of Life when you Block',
    regex: /Recover (\d+)% of Life when you Block/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Recover #% of Life when you Kill an Enemy during Flask Effect',
    regex: /Recover (\d+)% of Life when you Kill an Enemy during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Recover #% of Mana on Kill',
    regex: /Recover (\d+)% of Mana on Kill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Recover #% of Mana when you Kill an Enemy during Flask Effect',
    regex: /Recover (\d+)% of Mana when you Kill an Enemy during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Recover #% of your maximum Mana when you Block',
    regex: /Recover (\d+)% of your maximum Mana when you Block/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Recover Full Life at the end of the Flask Effect',
    regex: /Recover Full Life at the end of the Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Recover Full Life on use',
    regex: /Recover Full Life on use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Reduce Attack, Cast and Movement Speed #% every second during Flask Effect',
    regex: /Reduce Attack, Cast and Movement Speed (\d+)% every second during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Reflects # Physical Damage to Melee Attackers',
    regex: /Reflects (\d+) Physical Damage to Melee Attackers/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Regenerate # Energy Shield per second',
    regex: /Regenerate (\d+) Energy Shield per second/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Regenerate # Life per second',
    regex: /Regenerate (\d+) Life per second/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Regenerate # Mana per second',
    regex: /Regenerate (\d+) Mana per second/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Regenerate #% of Energy Shield per second',
    regex: /Regenerate (\d+)% of Energy Shield per second/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Regenerate #% of Energy Shield per second if you\'ve Hit an Enemy Recently',
    regex: /Regenerate (\d+)% of Energy Shield per second if you've Hit an Enemy Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Regenerate #% of Life per second',
    regex: /Regenerate (\d+)% of Life per second/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Regenerate #% of Life per second while moving',
    regex: /Regenerate (\d+)% of Life per second while moving/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Regenerate #% of Mana per second',
    regex: /Regenerate (\d+)% of Mana per second/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Regenerate #% of Mana per second if you\'ve Hit an Enemy Recently',
    regex: /Regenerate (\d+)% of Mana per second if you've Hit an Enemy Recently/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Remove Chill and Freeze when you use a Flask',
    regex: /Remove Chill and Freeze when you use a Flask/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Remove Ignite and Burning when you use a Flask',
    regex: /Remove Ignite and Burning when you use a Flask/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Remove Shock when you use a Flask',
    regex: /Remove Shock when you use a Flask/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Removes #% of Life Recovered from Mana when used',
    regex: /Removes (\d+)% of Life Recovered from Mana when used/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Removes #% of Mana Recovered from Life when used',
    regex: /Removes (\d+)% of Mana Recovered from Life when used/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Removes #% of your maximum Energy Shield on use',
    regex: /Removes (\d+)% of your maximum Energy Shield on use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Removes all but one Life on use Removed life is Regenerated as Energy Shield over # seconds',
    regex: /Removes all but one Life on use Removed life is Regenerated as Energy Shield over (\d+) seconds/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Removes Bleeding when you use a Warcry',
    regex: /Removes Bleeding when you use a Warcry/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Shocks nearby Enemies during Flask effect, causing 10% increased Damage taken',
    regex: /Shocks nearby Enemies during Flask effect, causing 10% increased Damage taken/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Skills fire # additional Projectiles during Flask Effect',
    regex: /Skills fire (\d+) additional Projectiles during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Skills used by Mines have #% increased Area of Effect',
    regex: /Skills used by Mines have (\d+)% increased Area of Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Skills used by Traps have #% increased Area of Effect',
    regex: /Skills used by Traps have (\d+)% increased Area of Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Skills which Throw Traps throw up to 1 additional Trap',
    regex: /Skills which Throw Traps throw up to 1 additional Trap/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Attacks have +#% to Critical Strike Chance',
    regex: /Socketed Attacks have \+(\d+)% to Critical Strike Chance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Attacks have +#% to Critical Strike Multiplier',
    regex: /Socketed Attacks have \+(\d+)% to Critical Strike Multiplier/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Attacks have -# to Total Mana Cost',
    regex: /Socketed Attacks have -(\d+) to Total Mana Cost/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Added Fire Damage',
    regex: /Socketed Gems are Supported by Level (\d+) Added Fire Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Additional Accuracy',
    regex: /Socketed Gems are Supported by Level (\d+) Additional Accuracy/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Advanced Traps',
    regex: /Socketed Gems are Supported by Level (\d+) Advanced Traps/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Ancestral Call',
    regex: /Socketed Gems are Supported by Level (\d+) Ancestral Call/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Arcane Surge',
    regex: /Socketed Gems are Supported by Level (\d+) Arcane Surge/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Blastchain Mine',
    regex: /Socketed Gems are Supported by Level (\d+) Blastchain Mine/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Blind',
    regex: /Socketed Gems are Supported by Level (\d+) Blind/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Brutality',
    regex: /Socketed Gems are Supported by Level (\d+) Brutality/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Burning Damage',
    regex: /Socketed Gems are Supported by Level (\d+) Burning Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Cast On Critical Strike',
    regex: /Socketed Gems are Supported by Level (\d+) Cast On Critical Strike/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Cast On Melee Kill',
    regex: /Socketed Gems are Supported by Level (\d+) Cast On Melee Kill/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Cast when Damage Taken',
    regex: /Socketed Gems are Supported by Level (\d+) Cast when Damage Taken/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Cast While Channelling',
    regex: /Socketed Gems are Supported by Level (\d+) Cast While Channelling/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Chance To Bleed',
    regex: /Socketed Gems are Supported by Level (\d+) Chance To Bleed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Cold Penetration',
    regex: /Socketed Gems are Supported by Level (\d+) Cold Penetration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Concentrated Effect',
    regex: /Socketed Gems are Supported by Level (\d+) Concentrated Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Controlled Destruction',
    regex: /Socketed Gems are Supported by Level (\d+) Controlled Destruction/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Efficacy',
    regex: /Socketed Gems are Supported by Level (\d+) Efficacy/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Elemental Damage with Attacks',
    regex: /Socketed Gems are Supported by Level (\d+) Elemental Damage with Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Elemental Focus',
    regex: /Socketed Gems are Supported by Level (\d+) Elemental Focus/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Elemental Proliferation',
    regex: /Socketed Gems are Supported by Level (\d+) Elemental Proliferation/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Endurance Charge on Melee Stun',
    regex: /Socketed Gems are Supported by Level (\d+) Endurance Charge on Melee Stun/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Faster Attacks',
    regex: /Socketed Gems are Supported by Level (\d+) Faster Attacks/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Faster Casting',
    regex: /Socketed Gems are Supported by Level (\d+) Faster Casting/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Faster Projectiles',
    regex: /Socketed Gems are Supported by Level (\d+) Faster Projectiles/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Fire Penetration',
    regex: /Socketed Gems are Supported by Level (\d+) Fire Penetration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Fortify',
    regex: /Socketed Gems are Supported by Level (\d+) Fortify/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Hypothermia',
    regex: /Socketed Gems are Supported by Level (\d+) Hypothermia/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Immolate',
    regex: /Socketed Gems are Supported by Level (\d+) Immolate/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Increased Area of Effect',
    regex: /Socketed Gems are Supported by Level (\d+) Increased Area of Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Increased Critical Damage',
    regex: /Socketed Gems are Supported by Level (\d+) Increased Critical Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Increased Critical Strikes',
    regex: /Socketed Gems are Supported by Level (\d+) Increased Critical Strikes/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Increased Duration',
    regex: /Socketed Gems are Supported by Level (\d+) Increased Duration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Innervate',
    regex: /Socketed Gems are Supported by Level (\d+) Innervate/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Inspiration',
    regex: /Socketed Gems are Supported by Level (\d+) Inspiration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Iron Grip',
    regex: /Socketed Gems are Supported by Level (\d+) Iron Grip/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Item Rarity',
    regex: /Socketed Gems are Supported by Level (\d+) Item Rarity/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Less Duration',
    regex: /Socketed Gems are Supported by Level (\d+) Less Duration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Lesser Multiple Projectiles',
    regex: /Socketed Gems are Supported by Level (\d+) Lesser Multiple Projectiles/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Lesser Poison',
    regex: /Socketed Gems are Supported by Level (\d+) Lesser Poison/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Life Leech',
    regex: /Socketed Gems are Supported by Level (\d+) Life Leech/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Lightning Penetration',
    regex: /Socketed Gems are Supported by Level (\d+) Lightning Penetration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Maim',
    regex: /Socketed Gems are Supported by Level (\d+) Maim/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Mana Leech',
    regex: /Socketed Gems are Supported by Level (\d+) Mana Leech/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Melee Physical Damage',
    regex: /Socketed Gems are Supported by Level (\d+) Melee Physical Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Melee Splash',
    regex: /Socketed Gems are Supported by Level (\d+) Melee Splash/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Minion Damage',
    regex: /Socketed Gems are Supported by Level (\d+) Minion Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Minion Life',
    regex: /Socketed Gems are Supported by Level (\d+) Minion Life/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Multistrike',
    regex: /Socketed Gems are Supported by Level (\d+) Multistrike/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Onslaught',
    regex: /Socketed Gems are Supported by Level (\d+) Onslaught/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Poison',
    regex: /Socketed Gems are Supported by Level (\d+) Poison/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Power Charge On Critical Strike',
    regex: /Socketed Gems are Supported by Level (\d+) Power Charge On Critical Strike/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Ranged Attack Totem',
    regex: /Socketed Gems are Supported by Level (\d+) Ranged Attack Totem/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Ruthless',
    regex: /Socketed Gems are Supported by Level (\d+) Ruthless/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Slower Projectiles',
    regex: /Socketed Gems are Supported by Level (\d+) Slower Projectiles/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Spell Cascade',
    regex: /Socketed Gems are Supported by Level (\d+) Spell Cascade/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Spell Echo',
    regex: /Socketed Gems are Supported by Level (\d+) Spell Echo/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Spell Totem',
    regex: /Socketed Gems are Supported by Level (\d+) Spell Totem/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Trap',
    regex: /Socketed Gems are Supported by Level (\d+) Trap/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Trap And Mine Damage',
    regex: /Socketed Gems are Supported by Level (\d+) Trap And Mine Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Unbound Ailments',
    regex: /Socketed Gems are Supported by Level (\d+) Unbound Ailments/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Vicious Projectiles',
    regex: /Socketed Gems are Supported by Level (\d+) Vicious Projectiles/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Volley',
    regex: /Socketed Gems are Supported by Level (\d+) Volley/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems Chain # additional times',
    regex: /Socketed Gems Chain (\d+) additional times/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems deal # to # additional Fire Damage',
    regex: /Socketed Gems deal (\d+) to (\d+) additional Fire Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems deal #% more Damage over Time',
    regex: /Socketed Gems deal (\d+)% more Damage over Time/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems deal #% more Elemental Damage',
    regex: /Socketed Gems deal (\d+)% more Elemental Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems gain #% of Physical Damage as extra Lightning Damage',
    regex: /Socketed Gems gain (\d+)% of Physical Damage as extra Lightning Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems have #% chance to Ignite',
    regex: /Socketed Gems have (\d+)% chance to Ignite/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems have #% more Attack and Cast Speed',
    regex: /Socketed Gems have (\d+)% more Attack and Cast Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems have #% reduced Mana Reservation',
    regex: /Socketed Gems have (\d+)% reduced Mana Reservation/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Gems have +#% Critical Strike Chance',
    regex: /Socketed Gems have \+(\d+)% Critical Strike Chance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Movement Skills have no Mana Cost',
    regex: /Socketed Movement Skills have no Mana Cost/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Non-Curse Aura Gems have #% increased Aura Effect',
    regex: /Socketed Non-Curse Aura Gems have (\d+)% increased Aura Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Skills deal #% more Attack Damage',
    regex: /Socketed Skills deal (\d+)% more Attack Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Skills deal #% more Spell Damage',
    regex: /Socketed Skills deal (\d+)% more Spell Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Skills have #% increased Attack Speed',
    regex: /Socketed Skills have (\d+)% increased Attack Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Skills have #% increased Cast Speed',
    regex: /Socketed Skills have (\d+)% increased Cast Speed/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Spells have #% reduced Mana Cost',
    regex: /Socketed Spells have (\d+)% reduced Mana Cost/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Spells have +#% to Critical Strike Chance',
    regex: /Socketed Spells have \+(\d+)% to Critical Strike Chance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Socketed Spells have +#% to Critical Strike Multiplier',
    regex: /Socketed Spells have \+(\d+)% to Critical Strike Multiplier/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Spells have +#% to Critical Strike Chance',
    regex: /Spells have \+(\d+)% to Critical Strike Chance/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Take # Chaos Damage per Second during Flask effect',
    regex: /Take (\d+) Chaos Damage per Second during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Throw an additional Mine',
    regex: /Throw an additional Mine/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Totemic Wood Lure',
    regex: /Totemic Wood Lure/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Totems gain +#% to all Elemental Resistances',
    regex: /Totems gain \+(\d+)% to all Elemental Resistances/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Triggers Level 20 Spectral Spirits when Equipped',
    regex: /Triggers Level 20 Spectral Spirits when Equipped/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Unaffected by Burning Ground',
    regex: /Unaffected by Burning Ground/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Unaffected by Chilled Ground',
    regex: /Unaffected by Chilled Ground/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Unaffected by Desecrated Ground',
    regex: /Unaffected by Desecrated Ground/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Unaffected by Shocked Ground',
    regex: /Unaffected by Shocked Ground/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Vaal Skills deal #% increased Damage',
    regex: /Vaal Skills deal (\d+)% increased Damage/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Vaal Skills deal #% increased Damage during effect',
    regex: /Vaal Skills deal (\d+)% increased Damage during effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Vaal Skills deal #% more Damage during Effect',
    regex: /Vaal Skills deal (\d+)% more Damage during Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Vaal Skills have #% reduced Soul Cost during effect',
    regex: /Vaal Skills have (\d+)% reduced Soul Cost during effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Vaal Skills used during effect do not apply Soul Gain Prevention',
    regex: /Vaal Skills used during effect do not apply Soul Gain Prevention/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Vaal Skills used during effect have #% reduced Soul Gain Prevention Duration',
    regex: /Vaal Skills used during effect have (\d+)% reduced Soul Gain Prevention Duration/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'When you Kill a Rare Monster, #% chance to gain one of its Modifiers for 10 seconds',
    regex: /When you Kill a Rare Monster, (\d+)% chance to gain one of its Modifiers for 10 seconds/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'You are Immune to Damage during Flask Effect',
    regex: /You are Immune to Damage during Flask Effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'You are Shocked during Flask effect, causing 50% increased Damage taken',
    regex: /You are Shocked during Flask effect, causing 50% increased Damage taken/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'You can apply an additional Curse',
    regex: /You can apply an additional Curse/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'You gain a Frenzy Charge on use',
    regex: /You gain a Frenzy Charge on use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'You gain a Power Charge on use',
    regex: /You gain a Power Charge on use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'You gain an Endurance Charge on use',
    regex: /You gain an Endurance Charge on use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'You take #% of your maximum Life as Chaos Damage on use',
    regex: /You take (\d+)% of your maximum Life as Chaos Damage on use/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'You take #% reduced Extra Damage from Critical Strikes',
    regex: /You take (\d+)% reduced Extra Damage from Critical Strikes/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Your Critical Strikes do not deal extra Damage during Flask effect',
    regex: /Your Critical Strikes do not deal extra Damage during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Your Hits inflict Decay, dealing 500 Chaos Damage per second for 8 seconds',
    regex: /Your Hits inflict Decay, dealing 500 Chaos Damage per second for 8 seconds/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Your Skills have no Mana Cost during Flask effect',
    regex: /Your Skills have no Mana Cost during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
  {
    label: 'Zealot\'s Oath during Flask effect',
    regex: /Zealot's Oath during Flask effect/,
    type: ModFilterType.EXPLICIT,
  },
];
