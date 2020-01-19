import { IMod } from '../IModFilterParams';
import { ModFilterType } from '../ModFilterType';
/* tslint:disable:max-line-length */

export const implicitModRegexes: IMod[] = [
  {
    label: '# Cold Damage taken from Hits',
    regex: /(\d+) Cold Damage taken from Hits/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '# Fire Damage taken from Hits',
    regex: /(\d+) Fire Damage taken from Hits/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '# Lightning Damage taken from Hits',
    regex: /(\d+) Lightning Damage taken from Hits/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '# Physical Damage taken from Attack Hits',
    regex: /(\d+) Physical Damage taken from Attack Hits/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '# to # Cold Damage per Frenzy Charge',
    regex: /(\d+) to (\d+) Cold Damage per Frenzy Charge/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% additional Physical Damage Reduction',
    regex: /(\d+)% additional Physical Damage Reduction/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% additional Physical Damage Reduction against Abyssal Monsters',
    regex: /(\d+)% additional Physical Damage Reduction against Abyssal Monsters/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% additional Physical Damage Reduction while affected by Determination',
    regex: /(\d+)% additional Physical Damage Reduction while affected by Determination/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% additional Physical Damage Reduction while stationary',
    regex: /(\d+)% additional Physical Damage Reduction while stationary/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Avoid being Chilled',
    regex: /(\d+)% chance to Avoid being Chilled/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Avoid being Frozen',
    regex: /(\d+)% chance to Avoid being Frozen/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Avoid being Ignited',
    regex: /(\d+)% chance to Avoid being Ignited/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Avoid being Poisoned',
    regex: /(\d+)% chance to Avoid being Poisoned/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Avoid being Shocked',
    regex: /(\d+)% chance to Avoid being Shocked/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Avoid being Stunned',
    regex: /(\d+)% chance to Avoid being Stunned/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to avoid Bleeding',
    regex: /(\d+)% chance to avoid Bleeding/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Avoid Cold Damage from Hits',
    regex: /(\d+)% chance to Avoid Cold Damage from Hits/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Avoid Elemental Ailments',
    regex: /(\d+)% chance to Avoid Elemental Ailments/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Avoid Fire Damage from Hits',
    regex: /(\d+)% chance to Avoid Fire Damage from Hits/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Avoid interruption from Stuns while Casting',
    regex: /(\d+)% chance to Avoid interruption from Stuns while Casting/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Avoid Lightning Damage from Hits',
    regex: /(\d+)% chance to Avoid Lightning Damage from Hits/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Blind Enemies on Hit with Attacks',
    regex: /(\d+)% chance to Blind Enemies on Hit with Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% Chance to Block Attack Damage',
    regex: /(\d+)% Chance to Block Attack Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% Chance to Block Spell Damage',
    regex: /(\d+)% Chance to Block Spell Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to cause Bleeding on Hit',
    regex: /(\d+)% chance to cause Bleeding on Hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Cause Monsters to Flee',
    regex: /(\d+)% chance to Cause Monsters to Flee/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to deal Double Damage',
    regex: /(\d+)% chance to deal Double Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Dodge Attack Hits',
    regex: /(\d+)% chance to Dodge Attack Hits/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Dodge Attack Hits while moving',
    regex: /(\d+)% chance to Dodge Attack Hits while moving/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Dodge Spell Hits',
    regex: /(\d+)% chance to Dodge Spell Hits/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Dodge Spell Hits while moving',
    regex: /(\d+)% chance to Dodge Spell Hits while moving/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Fortify on Melee hit',
    regex: /(\d+)% chance to Fortify on Melee hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Freeze',
    regex: /(\d+)% chance to Freeze/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Freeze, Shock and Ignite',
    regex: /(\d+)% chance to Freeze, Shock and Ignite/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to gain a Frenzy Charge on Hit',
    regex: /(\d+)% chance to gain a Frenzy Charge on Hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to gain a Frenzy Charge on Kill',
    regex: /(\d+)% chance to gain a Frenzy Charge on Kill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to gain a Power Charge on Critical Strike',
    regex: /(\d+)% chance to gain a Power Charge on Critical Strike/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to gain a Power Charge on Kill',
    regex: /(\d+)% chance to gain a Power Charge on Kill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to gain an additional Vaal Soul on Kill',
    regex: /(\d+)% chance to gain an additional Vaal Soul on Kill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to gain an Endurance Charge on Kill',
    regex: /(\d+)% chance to gain an Endurance Charge on Kill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to gain an Endurance Charge when you Stun an Enemy',
    regex: /(\d+)% chance to gain an Endurance Charge when you Stun an Enemy/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to gain Onslaught for 4 seconds on Kill',
    regex: /(\d+)% chance to gain Onslaught for 4 seconds on Kill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to gain Phasing for 4 seconds on Kill',
    regex: /(\d+)% chance to gain Phasing for 4 seconds on Kill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to gain Unholy Might for 3 seconds on Kill',
    regex: /(\d+)% chance to gain Unholy Might for 3 seconds on Kill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Hinder Enemies on Hit with Spells, with #% reduced Movement Speed',
    regex: /(\d+)% chance to Hinder Enemies on Hit with Spells, with (\d+)% reduced Movement Speed/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Ignite',
    regex: /(\d+)% chance to Ignite/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Impale Enemies on Hit with Attacks',
    regex: /(\d+)% chance to Impale Enemies on Hit with Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Intimidate Enemies for 4 seconds on Hit',
    regex: /(\d+)% chance to Intimidate Enemies for 4 seconds on Hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Knock Enemies Back on hit',
    regex: /(\d+)% chance to Knock Enemies Back on hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Poison on Hit',
    regex: /(\d+)% chance to Poison on Hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Shock',
    regex: /(\d+)% chance to Shock/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance to Taunt Enemies on Hit with Attacks',
    regex: /(\d+)% chance to Taunt Enemies on Hit with Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% chance when Hit for double Armour effect',
    regex: /(\d+)% chance when Hit for double Armour effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% faster start of Energy Shield Recharge',
    regex: /(\d+)% faster start of Energy Shield Recharge/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% Global chance to Blind Enemies on hit',
    regex: /(\d+)% Global chance to Blind Enemies on hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Accuracy Rating with Axes',
    regex: /(\d+)% increased Accuracy Rating with Axes/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Accuracy Rating with Bows',
    regex: /(\d+)% increased Accuracy Rating with Bows/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Accuracy Rating with Claws',
    regex: /(\d+)% increased Accuracy Rating with Claws/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Accuracy Rating with Daggers',
    regex: /(\d+)% increased Accuracy Rating with Daggers/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Accuracy Rating with Maces and Sceptres',
    regex: /(\d+)% increased Accuracy Rating with Maces and Sceptres/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Accuracy Rating with Staves',
    regex: /(\d+)% increased Accuracy Rating with Staves/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Accuracy Rating with Swords',
    regex: /(\d+)% increased Accuracy Rating with Swords/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Accuracy Rating with Wands',
    regex: /(\d+)% increased Accuracy Rating with Wands/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Area Damage',
    regex: /(\d+)% increased Area Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Area of Effect',
    regex: /(\d+)% increased Area of Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Area of Effect if you have Stunned an Enemy Recently',
    regex: /(\d+)% increased Area of Effect if you have Stunned an Enemy Recently/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Armour',
    regex: /(\d+)% increased Armour/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attack and Cast Speed',
    regex: /(\d+)% increased Attack and Cast Speed/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attack and Cast Speed during Onslaught',
    regex: /(\d+)% increased Attack and Cast Speed during Onslaught/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attack and Cast Speed if Corrupted',
    regex: /(\d+)% increased Attack and Cast Speed if Corrupted/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attack Damage',
    regex: /(\d+)% increased Attack Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attack Damage against Bleeding Enemies',
    regex: /(\d+)% increased Attack Damage against Bleeding Enemies/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attack Damage if Corrupted',
    regex: /(\d+)% increased Attack Damage if Corrupted/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attack Damage per 500 Maximum Mana',
    regex: /(\d+)% increased Attack Damage per 500 Maximum Mana/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attack Speed',
    regex: /(\d+)% increased Attack Speed/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attack Speed during any Flask Effect',
    regex: /(\d+)% increased Attack Speed during any Flask Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attack Speed with Axes',
    regex: /(\d+)% increased Attack Speed with Axes/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attack Speed with Bows',
    regex: /(\d+)% increased Attack Speed with Bows/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attack Speed with Claws',
    regex: /(\d+)% increased Attack Speed with Claws/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attack Speed with Daggers',
    regex: /(\d+)% increased Attack Speed with Daggers/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attack Speed with Maces and Sceptres',
    regex: /(\d+)% increased Attack Speed with Maces and Sceptres/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attack Speed with Staves',
    regex: /(\d+)% increased Attack Speed with Staves/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attack Speed with Swords',
    regex: /(\d+)% increased Attack Speed with Swords/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attack Speed with Wands',
    regex: /(\d+)% increased Attack Speed with Wands/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Attributes',
    regex: /(\d+)% increased Attributes/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Bleeding Duration',
    regex: /(\d+)% increased Bleeding Duration/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Block Recovery',
    regex: /(\d+)% increased Block Recovery/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Brand Attachment range',
    regex: /(\d+)% increased Brand Attachment range/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Burning Damage',
    regex: /(\d+)% increased Burning Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Cast Speed',
    regex: /(\d+)% increased Cast Speed/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Cast Speed during any Flask Effect',
    regex: /(\d+)% increased Cast Speed during any Flask Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Cast Speed while Dual Wielding',
    regex: /(\d+)% increased Cast Speed while Dual Wielding/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Cast Speed while holding a Shield',
    regex: /(\d+)% increased Cast Speed while holding a Shield/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Cast Speed while wielding a Staff',
    regex: /(\d+)% increased Cast Speed while wielding a Staff/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Chaos Damage',
    regex: /(\d+)% increased Chaos Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Chaos Damage for each Corrupted Item Equipped',
    regex: /(\d+)% increased Chaos Damage for each Corrupted Item Equipped/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Chaos Damage with Attack Skills',
    regex: /(\d+)% increased Chaos Damage with Attack Skills/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Chaos Damage with Spell Skills',
    regex: /(\d+)% increased Chaos Damage with Spell Skills/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Chill Duration on Enemies',
    regex: /(\d+)% increased Chill Duration on Enemies/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Cold Damage',
    regex: /(\d+)% increased Cold Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Cold Damage with Attack Skills',
    regex: /(\d+)% increased Cold Damage with Attack Skills/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Cold Damage with Spell Skills',
    regex: /(\d+)% increased Cold Damage with Spell Skills/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Conductivity Curse Effect',
    regex: /(\d+)% increased Conductivity Curse Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance',
    regex: /(\d+)% increased Critical Strike Chance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance during any Flask Effect',
    regex: /(\d+)% increased Critical Strike Chance during any Flask Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance for Spells',
    regex: /(\d+)% increased Critical Strike Chance for Spells/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance for Spells while Dual Wielding',
    regex: /(\d+)% increased Critical Strike Chance for Spells while Dual Wielding/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance for Spells while holding a Shield',
    regex: /(\d+)% increased Critical Strike Chance for Spells while holding a Shield/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Critical Strike Chance for Spells while wielding a Staff',
    regex: /(\d+)% increased Critical Strike Chance for Spells while wielding a Staff/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage',
    regex: /(\d+)% increased Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage against Abyssal Monsters',
    regex: /(\d+)% increased Damage against Abyssal Monsters/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage during any Flask Effect',
    regex: /(\d+)% increased Damage during any Flask Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage if Corrupted',
    regex: /(\d+)% increased Damage if Corrupted/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage over Time',
    regex: /(\d+)% increased Damage over Time/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage per 15 Dexterity',
    regex: /(\d+)% increased Damage per 15 Dexterity/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage per 15 Intelligence',
    regex: /(\d+)% increased Damage per 15 Intelligence/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage per 15 Strength',
    regex: /(\d+)% increased Damage per 15 Strength/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage per Endurance Charge',
    regex: /(\d+)% increased Damage per Endurance Charge/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage per Frenzy Charge',
    regex: /(\d+)% increased Damage per Frenzy Charge/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage per Power Charge',
    regex: /(\d+)% increased Damage per Power Charge/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage while Dead',
    regex: /(\d+)% increased Damage while Dead/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage while Leeching',
    regex: /(\d+)% increased Damage while Leeching/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage while Leeching Life',
    regex: /(\d+)% increased Damage while Leeching Life/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage while Leeching Mana',
    regex: /(\d+)% increased Damage while Leeching Mana/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage with Ailments',
    regex: /(\d+)% increased Damage with Ailments/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage with Bleeding',
    regex: /(\d+)% increased Damage with Bleeding/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Damage with Poison',
    regex: /(\d+)% increased Damage with Poison/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Dexterity',
    regex: /(\d+)% increased Dexterity/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Effect of Auras on you',
    regex: /(\d+)% increased Effect of Auras on you/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Effect of Chill',
    regex: /(\d+)% increased Effect of Chill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Effect of Fortify on you',
    regex: /(\d+)% increased Effect of Fortify on you/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Effect of non-Damaging Ailments on Enemies',
    regex: /(\d+)% increased Effect of non-Damaging Ailments on Enemies/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Effect of Shock',
    regex: /(\d+)% increased Effect of Shock/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Effect of Socketed Jewels',
    regex: /(\d+)% increased Effect of Socketed Jewels/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Effect of your Curses',
    regex: /(\d+)% increased Effect of your Curses/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Elemental Damage',
    regex: /(\d+)% increased Elemental Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Elemental Damage with Attack Skills',
    regex: /(\d+)% increased Elemental Damage with Attack Skills/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Elemental Weakness Curse Effect',
    regex: /(\d+)% increased Elemental Weakness Curse Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Endurance Charge Duration',
    regex: /(\d+)% increased Endurance Charge Duration/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Endurance, Frenzy and Power Charge Duration',
    regex: /(\d+)% increased Endurance, Frenzy and Power Charge Duration/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Energy Shield',
    regex: /(\d+)% increased Energy Shield/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Energy Shield Recharge Rate',
    regex: /(\d+)% increased Energy Shield Recharge Rate/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Energy Shield Recovery rate',
    regex: /(\d+)% increased Energy Shield Recovery rate/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Evasion Rating',
    regex: /(\d+)% increased Evasion Rating/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Evasion Rating per Frenzy Charge',
    regex: /(\d+)% increased Evasion Rating per Frenzy Charge/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Experience gain',
    regex: /(\d+)% increased Experience gain/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Fire Damage',
    regex: /(\d+)% increased Fire Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Fire Damage per 20 Strength',
    regex: /(\d+)% increased Fire Damage per 20 Strength/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Fire Damage with Attack Skills',
    regex: /(\d+)% increased Fire Damage with Attack Skills/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Fire Damage with Spell Skills',
    regex: /(\d+)% increased Fire Damage with Spell Skills/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Fish Bite Sensitivity',
    regex: /(\d+)% increased Fish Bite Sensitivity/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Flammability Curse Effect',
    regex: /(\d+)% increased Flammability Curse Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Flask Charges gained',
    regex: /(\d+)% increased Flask Charges gained/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Flask Effect Duration',
    regex: /(\d+)% increased Flask Effect Duration/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Freeze Duration on Enemies',
    regex: /(\d+)% increased Freeze Duration on Enemies/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Frenzy Charge Duration',
    regex: /(\d+)% increased Frenzy Charge Duration/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Frostbite Curse Effect',
    regex: /(\d+)% increased Frostbite Curse Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Global Accuracy Rating',
    regex: /(\d+)% increased Global Accuracy Rating/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Global Critical Strike Chance',
    regex: /(\d+)% increased Global Critical Strike Chance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Global Critical Strike Chance if Corrupted',
    regex: /(\d+)% increased Global Critical Strike Chance if Corrupted/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Global Defences',
    regex: /(\d+)% increased Global Defences/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Global Physical Damage',
    regex: /(\d+)% increased Global Physical Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Ignite Duration on Enemies',
    regex: /(\d+)% increased Ignite Duration on Enemies/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Intelligence',
    regex: /(\d+)% increased Intelligence/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Life Recovery from Flasks',
    regex: /(\d+)% increased Life Recovery from Flasks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Life Recovery rate',
    regex: /(\d+)% increased Life Recovery rate/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Light Radius',
    regex: /(\d+)% increased Light Radius/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Lightning Damage',
    regex: /(\d+)% increased Lightning Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Lightning Damage with Attack Skills',
    regex: /(\d+)% increased Lightning Damage with Attack Skills/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Lightning Damage with Spell Skills',
    regex: /(\d+)% increased Lightning Damage with Spell Skills/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Mana Recovery rate',
    regex: /(\d+)% increased Mana Recovery rate/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Mana Regeneration Rate',
    regex: /(\d+)% increased Mana Regeneration Rate/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased maximum Energy Shield',
    regex: /(\d+)% increased maximum Energy Shield/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased maximum Energy Shield if Corrupted',
    regex: /(\d+)% increased maximum Energy Shield if Corrupted/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased maximum Life',
    regex: /(\d+)% increased maximum Life/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased maximum Life if Corrupted',
    regex: /(\d+)% increased maximum Life if Corrupted/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased maximum Mana',
    regex: /(\d+)% increased maximum Mana/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Maximum total Recovery per second from Energy Shield Leech',
    regex: /(\d+)% increased Maximum total Recovery per second from Energy Shield Leech/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Maximum total Recovery per second from Life Leech',
    regex: /(\d+)% increased Maximum total Recovery per second from Life Leech/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Maximum total Recovery per second from Mana Leech',
    regex: /(\d+)% increased Maximum total Recovery per second from Mana Leech/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Melee Damage',
    regex: /(\d+)% increased Melee Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Mine Throwing Speed',
    regex: /(\d+)% increased Mine Throwing Speed/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Minion Accuracy Rating',
    regex: /(\d+)% increased Minion Accuracy Rating/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Movement Speed',
    regex: /(\d+)% increased Movement Speed/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Movement Speed during any Flask Effect',
    regex: /(\d+)% increased Movement Speed during any Flask Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Movement Speed if Corrupted',
    regex: /(\d+)% increased Movement Speed if Corrupted/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Movement Speed while Phasing',
    regex: /(\d+)% increased Movement Speed while Phasing/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Physical Damage',
    regex: /(\d+)% increased Physical Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Physical Damage while you have Unholy Might',
    regex: /(\d+)% increased Physical Damage while you have Unholy Might/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Physical Damage with Attack Skills',
    regex: /(\d+)% increased Physical Damage with Attack Skills/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Physical Damage with Axes',
    regex: /(\d+)% increased Physical Damage with Axes/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Physical Damage with Bows',
    regex: /(\d+)% increased Physical Damage with Bows/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Physical Damage with Claws',
    regex: /(\d+)% increased Physical Damage with Claws/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Physical Damage with Daggers',
    regex: /(\d+)% increased Physical Damage with Daggers/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Physical Damage with Maces and Sceptres',
    regex: /(\d+)% increased Physical Damage with Maces and Sceptres/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Physical Damage with Spell Skills',
    regex: /(\d+)% increased Physical Damage with Spell Skills/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Physical Damage with Staves',
    regex: /(\d+)% increased Physical Damage with Staves/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Physical Damage with Swords',
    regex: /(\d+)% increased Physical Damage with Swords/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Physical Damage with Wands',
    regex: /(\d+)% increased Physical Damage with Wands/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Poison Duration',
    regex: /(\d+)% increased Poison Duration/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Power Charge Duration',
    regex: /(\d+)% increased Power Charge Duration/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Projectile Attack Damage',
    regex: /(\d+)% increased Projectile Attack Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Projectile Damage',
    regex: /(\d+)% increased Projectile Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Projectile Speed',
    regex: /(\d+)% increased Projectile Speed/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Quantity of Fish Caught',
    regex: /(\d+)% increased Quantity of Fish Caught/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Quantity of Items found',
    regex: /(\d+)% increased Quantity of Items found/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Rarity of Fish Caught',
    regex: /(\d+)% increased Rarity of Fish Caught/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Rarity of Items found',
    regex: /(\d+)% increased Rarity of Items found/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Shock Duration on Enemies',
    regex: /(\d+)% increased Shock Duration on Enemies/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Skill Effect Duration',
    regex: /(\d+)% increased Skill Effect Duration/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Spell Damage',
    regex: /(\d+)% increased Spell Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Spell Damage if Corrupted',
    regex: /(\d+)% increased Spell Damage if Corrupted/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Spell Damage per 10 Intelligence',
    regex: /(\d+)% increased Spell Damage per 10 Intelligence/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Spell Damage per 10 Strength',
    regex: /(\d+)% increased Spell Damage per 10 Strength/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Spell Damage per 16 Dexterity',
    regex: /(\d+)% increased Spell Damage per 16 Dexterity/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Spell Damage per 16 Intelligence',
    regex: /(\d+)% increased Spell Damage per 16 Intelligence/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Spell Damage per 16 Strength',
    regex: /(\d+)% increased Spell Damage per 16 Strength/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Spell Damage per 500 Maximum Mana',
    regex: /(\d+)% increased Spell Damage per 500 Maximum Mana/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Spell Damage per Power Charge',
    regex: /(\d+)% increased Spell Damage per Power Charge/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Spell Damage while Dual Wielding',
    regex: /(\d+)% increased Spell Damage while Dual Wielding/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Spell Damage while holding a Shield',
    regex: /(\d+)% increased Spell Damage while holding a Shield/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Spell Damage while wielding a Staff',
    regex: /(\d+)% increased Spell Damage while wielding a Staff/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Strength',
    regex: /(\d+)% increased Strength/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Stun and Block Recovery',
    regex: /(\d+)% increased Stun and Block Recovery/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Stun Duration on Enemies',
    regex: /(\d+)% increased Stun Duration on Enemies/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased total Recovery per second from Life Leech',
    regex: /(\d+)% increased total Recovery per second from Life Leech/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased total Recovery per second from Life Leech for each Corrupted Item Equipped',
    regex: /(\d+)% increased total Recovery per second from Life Leech for each Corrupted Item Equipped/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased total Recovery per second from Mana Leech',
    regex: /(\d+)% increased total Recovery per second from Mana Leech/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased total Recovery per second from Mana Leech for each Corrupted Item Equipped',
    regex: /(\d+)% increased total Recovery per second from Mana Leech for each Corrupted Item Equipped/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Totem Placement speed',
    regex: /(\d+)% increased Totem Placement speed/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Trap Throwing Speed',
    regex: /(\d+)% increased Trap Throwing Speed/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Vaal Skill Critical Strike Chance',
    regex: /(\d+)% increased Vaal Skill Critical Strike Chance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Vaal Skill Effect Duration',
    regex: /(\d+)% increased Vaal Skill Effect Duration/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% increased Vulnerability Curse Effect',
    regex: /(\d+)% increased Vulnerability Curse Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Attack Damage Leeched as Life',
    regex: /(\d+)% of Attack Damage Leeched as Life/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Attack Damage Leeched as Mana',
    regex: /(\d+)% of Attack Damage Leeched as Mana/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Chaos Damage Leeched as Life',
    regex: /(\d+)% of Chaos Damage Leeched as Life/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Cold Damage from Hits taken as Fire Damage',
    regex: /(\d+)% of Cold Damage from Hits taken as Fire Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Cold Damage from Hits taken as Lightning Damage',
    regex: /(\d+)% of Cold Damage from Hits taken as Lightning Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Cold Damage Leeched as Life',
    regex: /(\d+)% of Cold Damage Leeched as Life/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Damage is taken from Mana before Life',
    regex: /(\d+)% of Damage is taken from Mana before Life/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Damage taken gained as Mana over 4 seconds when Hit',
    regex: /(\d+)% of Damage taken gained as Mana over 4 seconds when Hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Elemental Damage Leeched as Life',
    regex: /(\d+)% of Elemental Damage Leeched as Life/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Fire Damage from Hits taken as Cold Damage',
    regex: /(\d+)% of Fire Damage from Hits taken as Cold Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Fire Damage from Hits taken as Lightning Damage',
    regex: /(\d+)% of Fire Damage from Hits taken as Lightning Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Fire Damage Leeched as Life',
    regex: /(\d+)% of Fire Damage Leeched as Life/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Lightning Damage from Hits taken as Cold Damage',
    regex: /(\d+)% of Lightning Damage from Hits taken as Cold Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Lightning Damage from Hits taken as Fire Damage',
    regex: /(\d+)% of Lightning Damage from Hits taken as Fire Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Lightning Damage Leeched as Life',
    regex: /(\d+)% of Lightning Damage Leeched as Life/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Physical Attack Damage Leeched as Life',
    regex: /(\d+)% of Physical Attack Damage Leeched as Life/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Physical Attack Damage Leeched as Life and Mana',
    regex: /(\d+)% of Physical Attack Damage Leeched as Life and Mana/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Physical Attack Damage Leeched as Mana',
    regex: /(\d+)% of Physical Attack Damage Leeched as Mana/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Physical Damage Converted to Chaos Damage',
    regex: /(\d+)% of Physical Damage Converted to Chaos Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Physical Damage Converted to Cold Damage',
    regex: /(\d+)% of Physical Damage Converted to Cold Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Physical Damage Converted to Fire Damage',
    regex: /(\d+)% of Physical Damage Converted to Fire Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Physical Damage Converted to Lightning Damage',
    regex: /(\d+)% of Physical Damage Converted to Lightning Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Physical Damage from Hits taken as Chaos Damage',
    regex: /(\d+)% of Physical Damage from Hits taken as Chaos Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Physical Damage from Hits taken as Cold Damage',
    regex: /(\d+)% of Physical Damage from Hits taken as Cold Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Physical Damage from Hits taken as Fire Damage',
    regex: /(\d+)% of Physical Damage from Hits taken as Fire Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Physical Damage from Hits taken as Lightning Damage',
    regex: /(\d+)% of Physical Damage from Hits taken as Lightning Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Physical Damage is taken from Mana before Life',
    regex: /(\d+)% of Physical Damage is taken from Mana before Life/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Physical Damage Leeched as Life',
    regex: /(\d+)% of Physical Damage Leeched as Life/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% of Spell Damage Leeched as Energy Shield',
    regex: /(\d+)% of Spell Damage Leeched as Energy Shield/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Area Damage taken from Hits',
    regex: /(\d+)% reduced Area Damage taken from Hits/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Chaos Damage taken',
    regex: /(\d+)% reduced Chaos Damage taken/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Character Size',
    regex: /(\d+)% reduced Character Size/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Chill Duration on you',
    regex: /(\d+)% reduced Chill Duration on you/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Cold Damage taken',
    regex: /(\d+)% reduced Cold Damage taken/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Damage taken',
    regex: /(\d+)% reduced Damage taken/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Damage taken from Damage Over Time',
    regex: /(\d+)% reduced Damage taken from Damage Over Time/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Damage taken from Projectiles',
    regex: /(\d+)% reduced Damage taken from Projectiles/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Damage taken if Corrupted',
    regex: /(\d+)% reduced Damage taken if Corrupted/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Damage taken per 250 Dexterity',
    regex: /(\d+)% reduced Damage taken per 250 Dexterity/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Damage taken per 250 Intelligence',
    regex: /(\d+)% reduced Damage taken per 250 Intelligence/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Damage taken per 250 Strength',
    regex: /(\d+)% reduced Damage taken per 250 Strength/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Elemental Ailment Duration on you',
    regex: /(\d+)% reduced Elemental Ailment Duration on you/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Enemy Stun Threshold',
    regex: /(\d+)% reduced Enemy Stun Threshold/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Fire Damage taken',
    regex: /(\d+)% reduced Fire Damage taken/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Flask Charges used',
    regex: /(\d+)% reduced Flask Charges used/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Freeze Duration on you',
    regex: /(\d+)% reduced Freeze Duration on you/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Ignite Duration on you',
    regex: /(\d+)% reduced Ignite Duration on you/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Lightning Damage taken',
    regex: /(\d+)% reduced Lightning Damage taken/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Mana Cost of Skills',
    regex: /(\d+)% reduced Mana Cost of Skills/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Mana Reserved',
    regex: /(\d+)% reduced Mana Reserved/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Reflected Damage taken',
    regex: /(\d+)% reduced Reflected Damage taken/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '#% reduced Shock Duration on you',
    regex: /(\d+)% reduced Shock Duration on you/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# Armour while stationary',
    regex: /\+(\d+) Armour while stationary/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# Energy Shield gained for each Enemy hit by your Attacks',
    regex: /\+(\d+) Energy Shield gained for each Enemy hit by your Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# Life and Mana gained for each Enemy hit',
    regex: /\+(\d+) Life and Mana gained for each Enemy hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# Life gained for each Enemy hit by Attacks',
    regex: /\+(\d+) Life gained for each Enemy hit by Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# Life gained for each Enemy hit by your Attacks',
    regex: /\+(\d+) Life gained for each Enemy hit by your Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# Life gained on Kill',
    regex: /\+(\d+) Life gained on Kill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# Life gained when you Block',
    regex: /\+(\d+) Life gained when you Block/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# Mana gained for each Enemy hit by Attacks',
    regex: /\+(\d+) Mana gained for each Enemy hit by Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# Mana gained for each Enemy hit by your Attacks',
    regex: /\+(\d+) Mana gained for each Enemy hit by your Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# Mana gained on Kill',
    regex: /\+(\d+) Mana gained on Kill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# Mana gained when you Block',
    regex: /\+(\d+) Mana gained when you Block/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Accuracy Rating',
    regex: /\+(\d+) to Accuracy Rating/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to all Attributes',
    regex: /\+(\d+) to all Attributes/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Armour',
    regex: /\+(\d+) to Armour/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Armour and Evasion Rating',
    regex: /\+(\d+) to Armour and Evasion Rating/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Armour and Evasion Rating while you have Fortify',
    regex: /\+(\d+) to Armour and Evasion Rating while you have Fortify/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Dexterity',
    regex: /\+(\d+) to Dexterity/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Dexterity and Intelligence',
    regex: /\+(\d+) to Dexterity and Intelligence/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Evasion Rating',
    regex: /\+(\d+) to Evasion Rating/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Global Evasion Rating while moving',
    regex: /\+(\d+) to Global Evasion Rating while moving/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Intelligence',
    regex: /\+(\d+) to Intelligence/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed AoE Gems',
    regex: /\+(\d+) to Level of Socketed AoE Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Aura Gems',
    regex: /\+(\d+) to Level of Socketed Aura Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Bow Gems',
    regex: /\+(\d+) to Level of Socketed Bow Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Chaos Gems',
    regex: /\+(\d+) to Level of Socketed Chaos Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Cold Gems',
    regex: /\+(\d+) to Level of Socketed Cold Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Curse Gems',
    regex: /\+(\d+) to Level of Socketed Curse Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Dexterity Gems',
    regex: /\+(\d+) to Level of Socketed Dexterity Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Duration Gems',
    regex: /\+(\d+) to Level of Socketed Duration Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Fire Gems',
    regex: /\+(\d+) to Level of Socketed Fire Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Gems',
    regex: /\+(\d+) to Level of Socketed Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Intelligence Gems',
    regex: /\+(\d+) to Level of Socketed Intelligence Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Lightning Gems',
    regex: /\+(\d+) to Level of Socketed Lightning Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Melee Gems',
    regex: /\+(\d+) to Level of Socketed Melee Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Minion Gems',
    regex: /\+(\d+) to Level of Socketed Minion Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Projectile Gems',
    regex: /\+(\d+) to Level of Socketed Projectile Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Strength Gems',
    regex: /\+(\d+) to Level of Socketed Strength Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Support Gems',
    regex: /\+(\d+) to Level of Socketed Support Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Trap or Mine Gems',
    regex: /\+(\d+) to Level of Socketed Trap or Mine Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Vaal Gems',
    regex: /\+(\d+) to Level of Socketed Vaal Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Level of Socketed Warcry Gems',
    regex: /\+(\d+) to Level of Socketed Warcry Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Maximum Endurance Charges',
    regex: /\+(\d+) to Maximum Endurance Charges/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to maximum Energy Shield',
    regex: /\+(\d+) to maximum Energy Shield/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Maximum Frenzy Charges',
    regex: /\+(\d+) to Maximum Frenzy Charges/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to maximum Life',
    regex: /\+(\d+) to maximum Life/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to maximum Mana',
    regex: /\+(\d+) to maximum Mana/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to maximum number of Raised Zombies',
    regex: /\+(\d+) to maximum number of Raised Zombies/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Maximum Power Charges',
    regex: /\+(\d+) to Maximum Power Charges/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Melee Weapon and Unarmed Attack range',
    regex: /\+(\d+) to Melee Weapon and Unarmed Attack range/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Minimum Endurance Charges',
    regex: /\+(\d+) to Minimum Endurance Charges/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Minimum Frenzy Charges',
    regex: /\+(\d+) to Minimum Frenzy Charges/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Minimum Power Charges',
    regex: /\+(\d+) to Minimum Power Charges/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Strength',
    regex: /\+(\d+) to Strength/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Strength and Dexterity',
    regex: /\+(\d+) to Strength and Dexterity/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Strength and Intelligence',
    regex: /\+(\d+) to Strength and Intelligence/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+# to Weapon range',
    regex: /\+(\d+) to Weapon range/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% Chance to Block',
    regex: /\+(\d+)% Chance to Block/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% Chance to Block Attack Damage',
    regex: /\+(\d+)% Chance to Block Attack Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% Chance to Block Attack Damage while Dual Wielding',
    regex: /\+(\d+)% Chance to Block Attack Damage while Dual Wielding/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% Chance to Block Attack Damage while wielding a Staff',
    regex: /\+(\d+)% Chance to Block Attack Damage while wielding a Staff/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% chance to Evade Attacks',
    regex: /\+(\d+)% chance to Evade Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% chance to Evade Attacks while affected by Grace',
    regex: /\+(\d+)% chance to Evade Attacks while affected by Grace/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to all Elemental Resistances',
    regex: /\+(\d+)% to all Elemental Resistances/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to all Elemental Resistances if Corrupted',
    regex: /\+(\d+)% to all Elemental Resistances if Corrupted/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to all maximum Resistances',
    regex: /\+(\d+)% to all maximum Resistances/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Animated Guardian Elemental Resistances',
    regex: /\+(\d+)% to Animated Guardian Elemental Resistances/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Chaos Damage over Time Multiplier',
    regex: /\+(\d+)% to Chaos Damage over Time Multiplier/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Chaos Resistance',
    regex: /\+(\d+)% to Chaos Resistance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Cold and Lightning Resistances',
    regex: /\+(\d+)% to Cold and Lightning Resistances/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Cold Damage over Time Multiplier',
    regex: /\+(\d+)% to Cold Damage over Time Multiplier/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Cold Resistance',
    regex: /\+(\d+)% to Cold Resistance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier during any Flask Effect',
    regex: /\+(\d+)% to Critical Strike Multiplier during any Flask Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier for Spells while Dual Wielding',
    regex: /\+(\d+)% to Critical Strike Multiplier for Spells while Dual Wielding/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier for Spells while holding a Shield',
    regex: /\+(\d+)% to Critical Strike Multiplier for Spells while holding a Shield/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier for Spells while wielding a Staff',
    regex: /\+(\d+)% to Critical Strike Multiplier for Spells while wielding a Staff/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Axes',
    regex: /\+(\d+)% to Critical Strike Multiplier with Axes/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Bows',
    regex: /\+(\d+)% to Critical Strike Multiplier with Bows/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Claws',
    regex: /\+(\d+)% to Critical Strike Multiplier with Claws/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Daggers',
    regex: /\+(\d+)% to Critical Strike Multiplier with Daggers/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Maces and Sceptres',
    regex: /\+(\d+)% to Critical Strike Multiplier with Maces and Sceptres/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Staves',
    regex: /\+(\d+)% to Critical Strike Multiplier with Staves/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Swords',
    regex: /\+(\d+)% to Critical Strike Multiplier with Swords/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Critical Strike Multiplier with Wands',
    regex: /\+(\d+)% to Critical Strike Multiplier with Wands/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Fire and Cold Resistances',
    regex: /\+(\d+)% to Fire and Cold Resistances/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Fire and Lightning Resistances',
    regex: /\+(\d+)% to Fire and Lightning Resistances/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Fire Resistance',
    regex: /\+(\d+)% to Fire Resistance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Global Critical Strike Multiplier',
    regex: /\+(\d+)% to Global Critical Strike Multiplier/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Lightning Resistance',
    regex: /\+(\d+)% to Lightning Resistance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to maximum Chance to Block Attack Damage',
    regex: /\+(\d+)% to maximum Chance to Block Attack Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to maximum Chance to Block Spell Damage',
    regex: /\+(\d+)% to maximum Chance to Block Spell Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to maximum Chance to Dodge Attack Hits',
    regex: /\+(\d+)% to maximum Chance to Dodge Attack Hits/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to maximum Chance to Dodge Spell Hits',
    regex: /\+(\d+)% to maximum Chance to Dodge Spell Hits/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to maximum Chaos Resistance',
    regex: /\+(\d+)% to maximum Chaos Resistance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to maximum Cold Resistance',
    regex: /\+(\d+)% to maximum Cold Resistance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to maximum Fire Resistance',
    regex: /\+(\d+)% to maximum Fire Resistance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to maximum Lightning Resistance',
    regex: /\+(\d+)% to maximum Lightning Resistance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Quality of Socketed AoE Gems',
    regex: /\+(\d+)% to Quality of Socketed AoE Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Quality of Socketed Aura Gems',
    regex: /\+(\d+)% to Quality of Socketed Aura Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Quality of Socketed Bow Gems',
    regex: /\+(\d+)% to Quality of Socketed Bow Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Quality of Socketed Chaos Gems',
    regex: /\+(\d+)% to Quality of Socketed Chaos Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Quality of Socketed Cold Gems',
    regex: /\+(\d+)% to Quality of Socketed Cold Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Quality of Socketed Dexterity Gems',
    regex: /\+(\d+)% to Quality of Socketed Dexterity Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Quality of Socketed Fire Gems',
    regex: /\+(\d+)% to Quality of Socketed Fire Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Quality of Socketed Gems',
    regex: /\+(\d+)% to Quality of Socketed Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Quality of Socketed Intelligence Gems',
    regex: /\+(\d+)% to Quality of Socketed Intelligence Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Quality of Socketed Lightning Gems',
    regex: /\+(\d+)% to Quality of Socketed Lightning Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Quality of Socketed Melee Gems',
    regex: /\+(\d+)% to Quality of Socketed Melee Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Quality of Socketed Minion Gems',
    regex: /\+(\d+)% to Quality of Socketed Minion Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Quality of Socketed Projectile Gems',
    regex: /\+(\d+)% to Quality of Socketed Projectile Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Quality of Socketed Strength Gems',
    regex: /\+(\d+)% to Quality of Socketed Strength Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '+#% to Quality of Socketed Support Gems',
    regex: /\+(\d+)% to Quality of Socketed Support Gems/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '-# Chaos Damage taken',
    regex: /-(\d+) Chaos Damage taken/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: '-# to Total Mana Cost of Skills',
    regex: /-(\d+) to Total Mana Cost of Skills/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Chaos Damage',
    regex: /Adds (\d+) to (\d+) Chaos Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Chaos Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Chaos Damage to Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage',
    regex: /Adds (\d+) to (\d+) Cold Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Attacks with this Weapon per 10 Dexterity',
    regex: /Adds (\d+) to (\d+) Cold Damage to Attacks with this Weapon per 10 Dexterity/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Bow Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Bow Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Spells',
    regex: /Adds (\d+) to (\d+) Cold Damage to Spells/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Cold Damage to Spells and Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Spells and Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage',
    regex: /Adds (\d+) to (\d+) Fire Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Attacks with this Weapon per 10 Strength',
    regex: /Adds (\d+) to (\d+) Fire Damage to Attacks with this Weapon per 10 Strength/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Bow Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Bow Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Spells',
    regex: /Adds (\d+) to (\d+) Fire Damage to Spells/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Fire Damage to Spells and Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Spells and Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage',
    regex: /Adds (\d+) to (\d+) Lightning Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Attacks with this Weapon per 10 Intelligence',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Attacks with this Weapon per 10 Intelligence/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Bow Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Bow Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Spells',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Spells/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Lightning Damage to Spells and Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Spells and Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage',
    regex: /Adds (\d+) to (\d+) Physical Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Adds # to # Physical Damage to Bow Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Bow Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Anger has #% increased Aura Effect',
    regex: /Anger has (\d+)% increased Aura Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Arrows Pierce # additional Targets',
    regex: /Arrows Pierce (\d+) additional Targets/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Arrows Pierce an additional Target',
    regex: /Arrows Pierce an additional Target/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Attacks have #% chance to cause Bleeding',
    regex: /Attacks have (\d+)% chance to cause Bleeding/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Attacks have +#% to Critical Strike Chance',
    regex: /Attacks have \+(\d+)% to Critical Strike Chance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Attacks with this Weapon Penetrate #% Elemental Resistances',
    regex: /Attacks with this Weapon Penetrate (\d+)% Elemental Resistances/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Bleeding cannot be inflicted on you',
    regex: /Bleeding cannot be inflicted on you/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Bleeding you inflict deals Damage #% faster',
    regex: /Bleeding you inflict deals Damage (\d+)% faster/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Bow Attacks fire an additional Arrow',
    regex: /Bow Attacks fire an additional Arrow/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Can have up to # additional Trap placed at a time',
    regex: /Can have up to (\d+) additional Trap placed at a time/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Can roll Minion Modifiers',
    regex: /Can roll Minion Modifiers/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Cannot be Blinded',
    regex: /Cannot be Blinded/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Cannot be Frozen',
    regex: /Cannot be Frozen/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Cannot be Ignited',
    regex: /Cannot be Ignited/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Cannot be Knocked Back',
    regex: /Cannot be Knocked Back/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Cannot be Poisoned',
    regex: /Cannot be Poisoned/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Cannot be Shocked',
    regex: /Cannot be Shocked/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Causes Bleeding on Hit',
    regex: /Causes Bleeding on Hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Corrupted Blood cannot be inflicted on you',
    regex: /Corrupted Blood cannot be inflicted on you/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Culling Strike',
    regex: /Culling Strike/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Curse Enemies with Level # Conductivity on Hit',
    regex: /Curse Enemies with Level (\d+) Conductivity on Hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Curse Enemies with Level # Despair on Hit',
    regex: /Curse Enemies with Level (\d+) Despair on Hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Curse Enemies with Level # Elemental Weakness on Hit',
    regex: /Curse Enemies with Level (\d+) Elemental Weakness on Hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Curse Enemies with Level # Enfeeble on Hit',
    regex: /Curse Enemies with Level (\d+) Enfeeble on Hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Curse Enemies with Level # Flammability on Hit',
    regex: /Curse Enemies with Level (\d+) Flammability on Hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Curse Enemies with Level # Frostbite on Hit',
    regex: /Curse Enemies with Level (\d+) Frostbite on Hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Curse Enemies with Level # Temporal Chains on Hit',
    regex: /Curse Enemies with Level (\d+) Temporal Chains on Hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Curse Enemies with Level # Vulnerability on Hit',
    regex: /Curse Enemies with Level (\d+) Vulnerability on Hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Curse Skills have #% increased Skill Effect Duration',
    regex: /Curse Skills have (\d+)% increased Skill Effect Duration/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Damage Penetrates #% Cold Resistance',
    regex: /Damage Penetrates (\d+)% Cold Resistance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Damage Penetrates #% Elemental Resistances',
    regex: /Damage Penetrates (\d+)% Elemental Resistances/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Damage Penetrates #% Fire Resistance',
    regex: /Damage Penetrates (\d+)% Fire Resistance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Damage Penetrates #% Lightning Resistance',
    regex: /Damage Penetrates (\d+)% Lightning Resistance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Damage with Weapons Penetrates #% Cold Resistance',
    regex: /Damage with Weapons Penetrates (\d+)% Cold Resistance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Damage with Weapons Penetrates #% Fire Resistance',
    regex: /Damage with Weapons Penetrates (\d+)% Fire Resistance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Damage with Weapons Penetrates #% Lightning Resistance',
    regex: /Damage with Weapons Penetrates (\d+)% Lightning Resistance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Determination has #% increased Aura Effect',
    regex: /Determination has (\d+)% increased Aura Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Determination has #% reduced Mana Reservation',
    regex: /Determination has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Discipline has #% increased Aura Effect',
    regex: /Discipline has (\d+)% increased Aura Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Discipline has #% reduced Mana Reservation',
    regex: /Discipline has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Enemies Cannot Leech Life From you',
    regex: /Enemies Cannot Leech Life From you/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Gain #% of Cold Damage as Extra Chaos Damage',
    regex: /Gain (\d+)% of Cold Damage as Extra Chaos Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Gain #% of Fire Damage as Extra Chaos Damage',
    regex: /Gain (\d+)% of Fire Damage as Extra Chaos Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Gain #% of Lightning Damage as Extra Chaos Damage',
    regex: /Gain (\d+)% of Lightning Damage as Extra Chaos Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Gain #% of Maximum Life as Extra Maximum Energy Shield',
    regex: /Gain (\d+)% of Maximum Life as Extra Maximum Energy Shield/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Chaos Damage',
    regex: /Gain (\d+)% of Physical Damage as Extra Chaos Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Cold Damage',
    regex: /Gain (\d+)% of Physical Damage as Extra Cold Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Damage of a random Element',
    regex: /Gain (\d+)% of Physical Damage as Extra Damage of a random Element/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Fire Damage',
    regex: /Gain (\d+)% of Physical Damage as Extra Fire Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Lightning Damage',
    regex: /Gain (\d+)% of Physical Damage as Extra Lightning Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Gain a Frenzy Charge after Spending a total of 200 Mana',
    regex: /Gain a Frenzy Charge after Spending a total of 200 Mana/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Gain an Endurance Charge every second if you\'ve been Hit Recently',
    regex: /Gain an Endurance Charge every second if you've been Hit Recently/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Gain Arcane Surge on Hit with Spells',
    regex: /Gain Arcane Surge on Hit with Spells/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grace has #% increased Aura Effect',
    regex: /Grace has (\d+)% increased Aura Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grace has #% reduced Mana Reservation',
    regex: /Grace has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Anger Skill',
    regex: /Grants Level (\d+) Anger Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Assassin\'s Mark Skill',
    regex: /Grants Level (\d+) Assassin's Mark Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Clarity Skill',
    regex: /Grants Level (\d+) Clarity Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Conductivity Skill',
    regex: /Grants Level (\d+) Conductivity Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Despair Skill',
    regex: /Grants Level (\d+) Despair Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Determination Skill',
    regex: /Grants Level (\d+) Determination Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Discipline Skill',
    regex: /Grants Level (\d+) Discipline Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Elemental Weakness Skill',
    regex: /Grants Level (\d+) Elemental Weakness Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Flammability Skill',
    regex: /Grants Level (\d+) Flammability Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Frostbite Skill',
    regex: /Grants Level (\d+) Frostbite Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Grace Skill',
    regex: /Grants Level (\d+) Grace Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Haste Skill',
    regex: /Grants Level (\d+) Haste Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Hatred Skill',
    regex: /Grants Level (\d+) Hatred Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Malevolence Skill',
    regex: /Grants Level (\d+) Malevolence Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Pride Skill',
    regex: /Grants Level (\d+) Pride Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Projectile Weakness Skill',
    regex: /Grants Level (\d+) Projectile Weakness Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Purity of Elements Skill',
    regex: /Grants Level (\d+) Purity of Elements Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Purity of Fire Skill',
    regex: /Grants Level (\d+) Purity of Fire Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Purity of Ice Skill',
    regex: /Grants Level (\d+) Purity of Ice Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Purity of Lightning Skill',
    regex: /Grants Level (\d+) Purity of Lightning Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Temporal Chains Skill',
    regex: /Grants Level (\d+) Temporal Chains Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Vitality Skill',
    regex: /Grants Level (\d+) Vitality Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Vulnerability Skill',
    regex: /Grants Level (\d+) Vulnerability Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Wrath Skill',
    regex: /Grants Level (\d+) Wrath Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Grants Level # Zealotry Skill',
    regex: /Grants Level (\d+) Zealotry Skill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Has 1 Abyssal Socket',
    regex: /Has 1 Abyssal Socket/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Has 1 Socket',
    regex: /Has 1 Socket/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Hatred has #% increased Aura Effect',
    regex: /Hatred has (\d+)% increased Aura Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Hits have #% increased Critical Strike Chance against you',
    regex: /Hits have (\d+)% increased Critical Strike Chance against you/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Ignites you inflict deal Damage #% faster',
    regex: /Ignites you inflict deal Damage (\d+)% faster/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Immune to Curses if Corrupted',
    regex: /Immune to Curses if Corrupted/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Implicit Modifier magnitudes are doubled',
    regex: /Implicit Modifier magnitudes are doubled/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Implicit Modifier magnitudes are tripled',
    regex: /Implicit Modifier magnitudes are tripled/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Increases and Reductions to Damage of Vaal Skills also apply to Non-Vaal Skills',
    regex: /Increases and Reductions to Damage of Vaal Skills also apply to Non-Vaal Skills/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Intimidate Enemies for 4 seconds on Hit with Attacks',
    regex: /Intimidate Enemies for 4 seconds on Hit with Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Item drops on Death if Equipped by an Animated Guardian',
    regex: /Item drops on Death if Equipped by an Animated Guardian/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Killed Enemies Explode, dealing #% of their Life as Physical Damage',
    regex: /Killed Enemies Explode, dealing (\d+)% of their Life as Physical Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Malevolence has #% increased Aura Effect',
    regex: /Malevolence has (\d+)% increased Aura Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Minions deal #% increased Damage',
    regex: /Minions deal (\d+)% increased Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Minions have #% increased Attack Speed',
    regex: /Minions have (\d+)% increased Attack Speed/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Minions have #% increased Cast Speed',
    regex: /Minions have (\d+)% increased Cast Speed/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Minions have #% increased maximum Life',
    regex: /Minions have (\d+)% increased maximum Life/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Minions have #% increased Movement Speed',
    regex: /Minions have (\d+)% increased Movement Speed/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Minions have +#% to all Elemental Resistances',
    regex: /Minions have \+(\d+)% to all Elemental Resistances/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Minions Regenerate #% of Life per second',
    regex: /Minions Regenerate (\d+)% of Life per second/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Onslaught',
    regex: /Onslaught/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Point Blank',
    regex: /Point Blank/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Poisons you inflict deal Damage #% faster',
    regex: /Poisons you inflict deal Damage (\d+)% faster/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Pride has #% increased Aura Effect',
    regex: /Pride has (\d+)% increased Aura Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Projectiles deal #% increased Damage for each Enemy Pierced',
    regex: /Projectiles deal (\d+)% increased Damage for each Enemy Pierced/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Projectiles deal #% increased Damage for each time they have Chained',
    regex: /Projectiles deal (\d+)% increased Damage for each time they have Chained/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Projectiles Pierce # additional Targets',
    regex: /Projectiles Pierce (\d+) additional Targets/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Properties are doubled while in a Breach',
    regex: /Properties are doubled while in a Breach/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Purity of Fire has #% reduced Mana Reservation',
    regex: /Purity of Fire has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Purity of Ice has #% reduced Mana Reservation',
    regex: /Purity of Ice has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Purity of Lightning has #% reduced Mana Reservation',
    regex: /Purity of Lightning has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Raised Zombies deal #% increased Damage',
    regex: /Raised Zombies deal (\d+)% increased Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Recover #% of Energy Shield when you Block',
    regex: /Recover (\d+)% of Energy Shield when you Block/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Recover #% of Life on Kill',
    regex: /Recover (\d+)% of Life on Kill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Recover #% of Life when you Block',
    regex: /Recover (\d+)% of Life when you Block/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Recover #% of Mana on Kill',
    regex: /Recover (\d+)% of Mana on Kill/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Recover #% of your maximum Mana when you Block',
    regex: /Recover (\d+)% of your maximum Mana when you Block/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Reflects # Physical Damage to Melee Attackers',
    regex: /Reflects (\d+) Physical Damage to Melee Attackers/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Regenerate # Life per second',
    regex: /Regenerate (\d+) Life per second/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Regenerate # Life per second while moving',
    regex: /Regenerate (\d+) Life per second while moving/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Regenerate # Mana per second',
    regex: /Regenerate (\d+) Mana per second/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Regenerate # Mana per Second while Dual Wielding',
    regex: /Regenerate (\d+) Mana per Second while Dual Wielding/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Regenerate # Mana per Second while holding a Shield',
    regex: /Regenerate (\d+) Mana per Second while holding a Shield/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Regenerate # Mana per second while wielding a Staff',
    regex: /Regenerate (\d+) Mana per second while wielding a Staff/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Regenerate #% of Energy Shield per second',
    regex: /Regenerate (\d+)% of Energy Shield per second/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Regenerate #% of Energy Shield per Second while affected by Discipline',
    regex: /Regenerate (\d+)% of Energy Shield per Second while affected by Discipline/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Regenerate #% of Life per second',
    regex: /Regenerate (\d+)% of Life per second/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Regenerate #% of Life per second per Endurance Charge',
    regex: /Regenerate (\d+)% of Life per second per Endurance Charge/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Regenerate #% of Mana per second',
    regex: /Regenerate (\d+)% of Mana per second/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Remove Chill and Freeze when you use a Flask',
    regex: /Remove Chill and Freeze when you use a Flask/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Remove Ignite and Burning when you use a Flask',
    regex: /Remove Ignite and Burning when you use a Flask/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Remove Shock when you use a Flask',
    regex: /Remove Shock when you use a Flask/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Resolute Technique',
    regex: /Resolute Technique/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Skeletons deal #% increased Damage',
    regex: /Skeletons deal (\d+)% increased Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Skills Chain +# times',
    regex: /Skills Chain \+(\d+) times/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Skills fire an additional Projectile',
    regex: /Skills fire an additional Projectile/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Added Fire Damage',
    regex: /Socketed Gems are Supported by Level (\d+) Added Fire Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Additional Accuracy',
    regex: /Socketed Gems are Supported by Level (\d+) Additional Accuracy/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Blind',
    regex: /Socketed Gems are Supported by Level (\d+) Blind/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Blood Magic',
    regex: /Socketed Gems are Supported by Level (\d+) Blood Magic/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Cast On Critical Strike',
    regex: /Socketed Gems are Supported by Level (\d+) Cast On Critical Strike/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Cast when Stunned',
    regex: /Socketed Gems are Supported by Level (\d+) Cast when Stunned/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Elemental Damage with Attacks',
    regex: /Socketed Gems are Supported by Level (\d+) Elemental Damage with Attacks/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Elemental Proliferation',
    regex: /Socketed Gems are Supported by Level (\d+) Elemental Proliferation/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Faster Casting',
    regex: /Socketed Gems are Supported by Level (\d+) Faster Casting/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Faster Projectiles',
    regex: /Socketed Gems are Supported by Level (\d+) Faster Projectiles/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Fork',
    regex: /Socketed Gems are Supported by Level (\d+) Fork/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Fortify',
    regex: /Socketed Gems are Supported by Level (\d+) Fortify/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Increased Area of Effect',
    regex: /Socketed Gems are Supported by Level (\d+) Increased Area of Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Increased Critical Damage',
    regex: /Socketed Gems are Supported by Level (\d+) Increased Critical Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Inspiration',
    regex: /Socketed Gems are Supported by Level (\d+) Inspiration/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Life Gain On Hit',
    regex: /Socketed Gems are Supported by Level (\d+) Life Gain On Hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Life Leech',
    regex: /Socketed Gems are Supported by Level (\d+) Life Leech/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Melee Splash',
    regex: /Socketed Gems are Supported by Level (\d+) Melee Splash/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Multistrike',
    regex: /Socketed Gems are Supported by Level (\d+) Multistrike/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Onslaught',
    regex: /Socketed Gems are Supported by Level (\d+) Onslaught/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems are Supported by Level # Stun',
    regex: /Socketed Gems are Supported by Level (\d+) Stun/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Gems have #% reduced Mana Reservation',
    regex: /Socketed Gems have (\d+)% reduced Mana Reservation/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Socketed Skill Gems get a #% Mana Multiplier',
    regex: /Socketed Skill Gems get a (\d+)% Mana Multiplier/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Spectres have #% increased Damage',
    regex: /Spectres have (\d+)% increased Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Spells have +#% to Critical Strike Chance',
    regex: /Spells have \+(\d+)% to Critical Strike Chance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Spells have a #% chance to deal Double Damage',
    regex: /Spells have a (\d+)% chance to deal Double Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Totems gain +#% to all Elemental Resistances',
    regex: /Totems gain \+(\d+)% to all Elemental Resistances/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Triggered Spells deal #% increased Spell Damage',
    regex: /Triggered Spells deal (\d+)% increased Spell Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Unaffected by Burning Ground',
    regex: /Unaffected by Burning Ground/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Unaffected by Chilled Ground',
    regex: /Unaffected by Chilled Ground/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Unaffected by Shocked Ground',
    regex: /Unaffected by Shocked Ground/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Unwavering Stance',
    regex: /Unwavering Stance/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Vaal Skills deal #% increased Damage',
    regex: /Vaal Skills deal (\d+)% increased Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Vitality has #% reduced Mana Reservation',
    regex: /Vitality has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Wrath has #% increased Aura Effect',
    regex: /Wrath has (\d+)% increased Aura Effect/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'You and Allies affected by Auras from your Skills deal #% increased Damage',
    regex: /You and Allies affected by Auras from your Skills deal (\d+)% increased Damage/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'You can apply an additional Curse',
    regex: /You can apply an additional Curse/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'You can catch Corrupted Fish',
    regex: /You can catch Corrupted Fish/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'You cannot be Cursed with Silence',
    regex: /You cannot be Cursed with Silence/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'You cannot be Hindered',
    regex: /You cannot be Hindered/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'You cannot be Maimed',
    regex: /You cannot be Maimed/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'You gain Onslaught for # seconds on Hit',
    regex: /You gain Onslaught for (\d+) seconds on Hit/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'You take #% reduced Extra Damage from Critical Strikes',
    regex: /You take (\d+)% reduced Extra Damage from Critical Strikes/,
    type: ModFilterType.IMPLICIT,
  },
  {
    label: 'Zealotry has #% increased Aura Effect',
    regex: /Zealotry has (\d+)% increased Aura Effect/,
    type: ModFilterType.IMPLICIT,
  },
];
