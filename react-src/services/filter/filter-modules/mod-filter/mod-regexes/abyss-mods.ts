import { IMod } from '../IModFilterParams';
import { ModFilterType } from '../ModFilterType';
/* tslint:disable:max-line-length */

export const abyssModRegexes: IMod[] = [
  {
    label: '# Physical Damage taken from Hits',
    regex: /(\d+) Physical Damage taken from Hits/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% additional Physical Damage Reduction',
    regex: /(\d+)% additional Physical Damage Reduction/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% additional Physical Damage Reduction against Abyssal Monsters',
    regex: /(\d+)% additional Physical Damage Reduction against Abyssal Monsters/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% additional Physical Damage Reduction if you weren\'t Damaged by a Hit Recently',
    regex: /(\d+)% additional Physical Damage Reduction if you weren't Damaged by a Hit Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% additional Physical Damage Reduction while moving',
    regex: /(\d+)% additional Physical Damage Reduction while moving/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance for Bleeding inflicted with this Weapon to deal 100% more Damage',
    regex: /(\d+)% chance for Bleeding inflicted with this Weapon to deal 100% more Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance for Poisons inflicted with this Weapon to deal 100% more Damage',
    regex: /(\d+)% chance for Poisons inflicted with this Weapon to deal 100% more Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to Avoid being Poisoned',
    regex: /(\d+)% chance to Avoid being Poisoned/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to avoid Bleeding',
    regex: /(\d+)% chance to avoid Bleeding/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to Avoid Cold Damage from Hits',
    regex: /(\d+)% chance to Avoid Cold Damage from Hits/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to Avoid Fire Damage from Hits',
    regex: /(\d+)% chance to Avoid Fire Damage from Hits/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to Avoid interruption from Stuns while Casting',
    regex: /(\d+)% chance to Avoid interruption from Stuns while Casting/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to Avoid Lightning Damage from Hits',
    regex: /(\d+)% chance to Avoid Lightning Damage from Hits/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to Blind Enemies on Hit with Attacks',
    regex: /(\d+)% chance to Blind Enemies on Hit with Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% Chance to Block Attack Damage',
    regex: /(\d+)% Chance to Block Attack Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% Chance to Block Spell Damage',
    regex: /(\d+)% Chance to Block Spell Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to Dodge Attack and Spell Hits if you\'ve been Hit Recently',
    regex: /(\d+)% chance to Dodge Attack and Spell Hits if you've been Hit Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to Dodge Attack Hits',
    regex: /(\d+)% chance to Dodge Attack Hits/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to Dodge Spell Hits',
    regex: /(\d+)% chance to Dodge Spell Hits/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to gain a Frenzy Charge when Hit',
    regex: /(\d+)% chance to gain a Frenzy Charge when Hit/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to gain a Frenzy Charge when you Hit a Rare or Unique Enemy',
    regex: /(\d+)% chance to gain a Frenzy Charge when you Hit a Rare or Unique Enemy/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to gain an additional Vaal Soul on Kill',
    regex: /(\d+)% chance to gain an additional Vaal Soul on Kill/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to gain Onslaught for 4 seconds on Kill',
    regex: /(\d+)% chance to gain Onslaught for 4 seconds on Kill/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to gain Onslaught when you use a Flask',
    regex: /(\d+)% chance to gain Onslaught when you use a Flask/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to gain Phasing for 4 seconds on Kill',
    regex: /(\d+)% chance to gain Phasing for 4 seconds on Kill/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to Gain Unholy Might for 4 seconds on Melee Kill',
    regex: /(\d+)% chance to Gain Unholy Might for 4 seconds on Melee Kill/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to Hinder Enemies on Hit with Spells, with 30% reduced Movement Speed',
    regex: /(\d+)% chance to Hinder Enemies on Hit with Spells, with 30% reduced Movement Speed/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to Intimidate Enemies for 4 seconds on Hit',
    regex: /(\d+)% chance to Intimidate Enemies for 4 seconds on Hit/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance to Taunt Enemies on Hit with Attacks',
    regex: /(\d+)% chance to Taunt Enemies on Hit with Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% chance when Hit for double Armour effect',
    regex: /(\d+)% chance when Hit for double Armour effect/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% Global chance to Blind Enemies on hit',
    regex: /(\d+)% Global chance to Blind Enemies on hit/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Accuracy Rating if you haven\'t Killed Recently',
    regex: /(\d+)% increased Accuracy Rating if you haven't Killed Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Armour',
    regex: /(\d+)% increased Armour/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Armour and Energy Shield',
    regex: /(\d+)% increased Armour and Energy Shield/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Armour and Evasion',
    regex: /(\d+)% increased Armour and Evasion/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Armour if you haven\'t Killed Recently',
    regex: /(\d+)% increased Armour if you haven't Killed Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Armour, Evasion and Energy Shield',
    regex: /(\d+)% increased Armour, Evasion and Energy Shield/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Attack and Cast Speed if you\'ve Hit an Enemy Recently',
    regex: /(\d+)% increased Attack and Cast Speed if you've Hit an Enemy Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Attack Speed',
    regex: /(\d+)% increased Attack Speed/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Attack Speed if you\'ve dealt a Critical Strike Recently',
    regex: /(\d+)% increased Attack Speed if you've dealt a Critical Strike Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Cast Speed',
    regex: /(\d+)% increased Cast Speed/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Cast Speed if a Minion has been Killed Recently',
    regex: /(\d+)% increased Cast Speed if a Minion has been Killed Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Cast Speed if you\'ve dealt a Critical Strike Recently',
    regex: /(\d+)% increased Cast Speed if you've dealt a Critical Strike Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Chaos Damage',
    regex: /(\d+)% increased Chaos Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Cold Damage',
    regex: /(\d+)% increased Cold Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Critical Strike Chance if you haven\'t dealt a Critical Strike Recently',
    regex: /(\d+)% increased Critical Strike Chance if you haven't dealt a Critical Strike Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Damage against Abyssal Monsters',
    regex: /(\d+)% increased Damage against Abyssal Monsters/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Damage if you\'ve Killed Recently',
    regex: /(\d+)% increased Damage if you've Killed Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Damage over Time while Dual Wielding',
    regex: /(\d+)% increased Damage over Time while Dual Wielding/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Damage over Time while holding a Shield',
    regex: /(\d+)% increased Damage over Time while holding a Shield/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Damage over Time while wielding a Two Handed Weapon',
    regex: /(\d+)% increased Damage over Time while wielding a Two Handed Weapon/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Damage when on Full Life',
    regex: /(\d+)% increased Damage when on Full Life/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Damage with Ailments',
    regex: /(\d+)% increased Damage with Ailments/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Effect of Auras on you',
    regex: /(\d+)% increased Effect of Auras on you/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Effect of Chill',
    regex: /(\d+)% increased Effect of Chill/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Effect of Fortify on you',
    regex: /(\d+)% increased Effect of Fortify on you/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Effect of Shock',
    regex: /(\d+)% increased Effect of Shock/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Elemental Damage',
    regex: /(\d+)% increased Elemental Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Energy Shield',
    regex: /(\d+)% increased Energy Shield/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Energy Shield from Body Armour',
    regex: /(\d+)% increased Energy Shield from Body Armour/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Evasion and Energy Shield',
    regex: /(\d+)% increased Evasion and Energy Shield/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Evasion Rating',
    regex: /(\d+)% increased Evasion Rating/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Evasion Rating while moving',
    regex: /(\d+)% increased Evasion Rating while moving/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Fire Damage',
    regex: /(\d+)% increased Fire Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Global Critical Strike Chance',
    regex: /(\d+)% increased Global Critical Strike Chance/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Global Defences',
    regex: /(\d+)% increased Global Defences/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Global Evasion Rating when on Full Life',
    regex: /(\d+)% increased Global Evasion Rating when on Full Life/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Global Physical Damage',
    regex: /(\d+)% increased Global Physical Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Life Recovery from Flasks',
    regex: /(\d+)% increased Life Recovery from Flasks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Lightning Damage',
    regex: /(\d+)% increased Lightning Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Mana Recovery rate',
    regex: /(\d+)% increased Mana Recovery rate/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Mana Regeneration Rate while moving',
    regex: /(\d+)% increased Mana Regeneration Rate while moving/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased maximum Life',
    regex: /(\d+)% increased maximum Life/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased maximum Mana',
    regex: /(\d+)% increased maximum Mana/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Movement Speed if you haven\'t taken Damage Recently',
    regex: /(\d+)% increased Movement Speed if you haven't taken Damage Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Movement Speed if you\'ve Hit an Enemy Recently',
    regex: /(\d+)% increased Movement Speed if you've Hit an Enemy Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Movement Speed if you\'ve Killed Recently',
    regex: /(\d+)% increased Movement Speed if you've Killed Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Physical Damage taken',
    regex: /(\d+)% increased Physical Damage taken/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Vaal Skill Critical Strike Chance',
    regex: /(\d+)% increased Vaal Skill Critical Strike Chance/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% increased Vaal Skill Effect Duration',
    regex: /(\d+)% increased Vaal Skill Effect Duration/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% of Attack Damage Leeched as Life',
    regex: /(\d+)% of Attack Damage Leeched as Life/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% of Chaos Damage Leeched as Life',
    regex: /(\d+)% of Chaos Damage Leeched as Life/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% of Cold Damage Leeched as Life',
    regex: /(\d+)% of Cold Damage Leeched as Life/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% of Damage is taken from Mana before Life',
    regex: /(\d+)% of Damage is taken from Mana before Life/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% of Damage taken gained as Mana over 4 seconds when Hit',
    regex: /(\d+)% of Damage taken gained as Mana over 4 seconds when Hit/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% of Fire Damage Leeched as Life',
    regex: /(\d+)% of Fire Damage Leeched as Life/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% of Lightning Damage Leeched as Life',
    regex: /(\d+)% of Lightning Damage Leeched as Life/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% of Physical Damage Leeched as Life',
    regex: /(\d+)% of Physical Damage Leeched as Life/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% of Spell Damage Leeched as Energy Shield',
    regex: /(\d+)% of Spell Damage Leeched as Energy Shield/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% reduced Elemental Ailment Duration on you',
    regex: /(\d+)% reduced Elemental Ailment Duration on you/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% reduced Mana Cost of Skills',
    regex: /(\d+)% reduced Mana Cost of Skills/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% reduced Mana Reserved',
    regex: /(\d+)% reduced Mana Reserved/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% reduced Physical Damage taken over time',
    regex: /(\d+)% reduced Physical Damage taken over time/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '#% reduced Soul Cost of Vaal Skills',
    regex: /(\d+)% reduced Soul Cost of Vaal Skills/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+# Mana gained for each Enemy hit by your Attacks',
    regex: /\+(\d+) Mana gained for each Enemy hit by your Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+# to Accuracy Rating',
    regex: /\+(\d+) to Accuracy Rating/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+# to Armour if you\'ve Hit an Enemy Recently',
    regex: /\+(\d+) to Armour if you've Hit an Enemy Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+# to Evasion Rating if Hit an Enemy Recently',
    regex: /\+(\d+) to Evasion Rating if Hit an Enemy Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+# to Level of all Raise Spectre Gems',
    regex: /\+(\d+) to Level of all Raise Spectre Gems/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+# to Level of Socketed Chaos Gems',
    regex: /\+(\d+) to Level of Socketed Chaos Gems/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+# to Level of Socketed Cold Gems',
    regex: /\+(\d+) to Level of Socketed Cold Gems/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+# to Level of Socketed Dexterity Gems',
    regex: /\+(\d+) to Level of Socketed Dexterity Gems/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+# to Level of Socketed Fire Gems',
    regex: /\+(\d+) to Level of Socketed Fire Gems/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+# to Level of Socketed Intelligence Gems',
    regex: /\+(\d+) to Level of Socketed Intelligence Gems/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+# to Level of Socketed Lightning Gems',
    regex: /\+(\d+) to Level of Socketed Lightning Gems/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+# to Level of Socketed Strength Gems',
    regex: /\+(\d+) to Level of Socketed Strength Gems/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+# to maximum Life',
    regex: /\+(\d+) to maximum Life/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+#% Chance to Block Attack Damage if you were Damaged by a Hit Recently',
    regex: /\+(\d+)% Chance to Block Attack Damage if you were Damaged by a Hit Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+#% Chance to Block Spell Damage if you were Damaged by a Hit Recently',
    regex: /\+(\d+)% Chance to Block Spell Damage if you were Damaged by a Hit Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+#% chance to Evade Attacks',
    regex: /\+(\d+)% chance to Evade Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+#% Chaos Resistance against Damage Over Time',
    regex: /\+(\d+)% Chaos Resistance against Damage Over Time/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+#% to Chaos Resistance',
    regex: /\+(\d+)% to Chaos Resistance/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+#% to Cold Resistance',
    regex: /\+(\d+)% to Cold Resistance/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+#% to Critical Strike Multiplier if you\'ve Killed Recently',
    regex: /\+(\d+)% to Critical Strike Multiplier if you've Killed Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+#% to Fire Resistance',
    regex: /\+(\d+)% to Fire Resistance/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+#% to Global Critical Strike Multiplier',
    regex: /\+(\d+)% to Global Critical Strike Multiplier/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+#% to Lightning Resistance',
    regex: /\+(\d+)% to Lightning Resistance/,
    type: ModFilterType.ABYSS,
  },
  {
    label: '+#% to Quality',
    regex: /\+(\d+)% to Quality/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Chaos Damage',
    regex: /Adds (\d+) to (\d+) Chaos Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Chaos Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Chaos Damage to Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Chaos Damage to Spells',
    regex: /Adds (\d+) to (\d+) Chaos Damage to Spells/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Chaos Damage to Spells while Dual Wielding',
    regex: /Adds (\d+) to (\d+) Chaos Damage to Spells while Dual Wielding/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Chaos Damage to Spells while holding a Shield',
    regex: /Adds (\d+) to (\d+) Chaos Damage to Spells while holding a Shield/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Chaos Damage to Spells while wielding a Two Handed Weapon',
    regex: /Adds (\d+) to (\d+) Chaos Damage to Spells while wielding a Two Handed Weapon/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Cold Damage',
    regex: /Adds (\d+) to (\d+) Cold Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Cold Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Cold Damage to Axe Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Axe Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Cold Damage to Bow Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Bow Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Cold Damage to Claw Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Claw Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Cold Damage to Dagger Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Dagger Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Cold Damage to Mace and Sceptre Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Mace and Sceptre Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Cold Damage to Spells',
    regex: /Adds (\d+) to (\d+) Cold Damage to Spells/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Cold Damage to Spells while Dual Wielding',
    regex: /Adds (\d+) to (\d+) Cold Damage to Spells while Dual Wielding/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Cold Damage to Spells while holding a Shield',
    regex: /Adds (\d+) to (\d+) Cold Damage to Spells while holding a Shield/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Cold Damage to Spells while wielding a Two Handed Weapon',
    regex: /Adds (\d+) to (\d+) Cold Damage to Spells while wielding a Two Handed Weapon/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Cold Damage to Staff Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Staff Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Cold Damage to Sword Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Sword Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Cold Damage to Wand Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Wand Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Fire Damage',
    regex: /Adds (\d+) to (\d+) Fire Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Fire Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Fire Damage to Axe Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Axe Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Fire Damage to Bow Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Bow Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Fire Damage to Claw Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Claw Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Fire Damage to Dagger Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Dagger Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Fire Damage to Mace and Sceptre Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Mace and Sceptre Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Fire Damage to Spells',
    regex: /Adds (\d+) to (\d+) Fire Damage to Spells/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Fire Damage to Spells while Dual Wielding',
    regex: /Adds (\d+) to (\d+) Fire Damage to Spells while Dual Wielding/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Fire Damage to Spells while holding a Shield',
    regex: /Adds (\d+) to (\d+) Fire Damage to Spells while holding a Shield/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Fire Damage to Spells while wielding a Two Handed Weapon',
    regex: /Adds (\d+) to (\d+) Fire Damage to Spells while wielding a Two Handed Weapon/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Fire Damage to Staff Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Staff Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Fire Damage to Sword Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Sword Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Fire Damage to Wand Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Wand Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Lightning Damage',
    regex: /Adds (\d+) to (\d+) Lightning Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Lightning Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Lightning Damage to Axe Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Axe Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Lightning Damage to Bow Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Bow Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Lightning Damage to Claw Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Claw Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Lightning Damage to Dagger Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Dagger Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Lightning Damage to Mace and Sceptre Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Mace and Sceptre Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Lightning Damage to Spells',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Spells/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Lightning Damage to Spells while Dual Wielding',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Spells while Dual Wielding/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Lightning Damage to Spells while holding a Shield',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Spells while holding a Shield/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Lightning Damage to Spells while wielding a Two Handed Weapon',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Spells while wielding a Two Handed Weapon/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Lightning Damage to Staff Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Staff Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Lightning Damage to Sword Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Sword Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Lightning Damage to Wand Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Wand Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Physical Damage',
    regex: /Adds (\d+) to (\d+) Physical Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Physical Damage against Bleeding Enemies',
    regex: /Adds (\d+) to (\d+) Physical Damage against Bleeding Enemies/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Physical Damage against Poisoned Enemies',
    regex: /Adds (\d+) to (\d+) Physical Damage against Poisoned Enemies/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Physical Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Physical Damage to Axe Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Axe Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Physical Damage to Bow Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Bow Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Physical Damage to Claw Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Claw Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Physical Damage to Dagger Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Dagger Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Physical Damage to Mace and Sceptre Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Mace and Sceptre Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Physical Damage to Spells',
    regex: /Adds (\d+) to (\d+) Physical Damage to Spells/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Physical Damage to Spells while Dual Wielding',
    regex: /Adds (\d+) to (\d+) Physical Damage to Spells while Dual Wielding/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Physical Damage to Spells while holding a Shield',
    regex: /Adds (\d+) to (\d+) Physical Damage to Spells while holding a Shield/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Physical Damage to Spells while wielding a Two Handed Weapon',
    regex: /Adds (\d+) to (\d+) Physical Damage to Spells while wielding a Two Handed Weapon/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Physical Damage to Staff Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Staff Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Physical Damage to Sword Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Sword Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Adds # to # Physical Damage to Wand Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Wand Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Attacks with this Weapon Penetrate #% Elemental Resistances',
    regex: /Attacks with this Weapon Penetrate (\d+)% Elemental Resistances/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Auras from your Skills grant #% increased Damage to you and Allies',
    regex: /Auras from your Skills grant (\d+)% increased Damage to you and Allies/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Cannot be Chilled or Frozen while moving',
    regex: /Cannot be Chilled or Frozen while moving/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Cannot be Shocked or Ignited while moving',
    regex: /Cannot be Shocked or Ignited while moving/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Curse Enemies with Level # Despair on Hit',
    regex: /Curse Enemies with Level (\d+) Despair on Hit/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Damage Penetrates #% Cold Resistance',
    regex: /Damage Penetrates (\d+)% Cold Resistance/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Damage Penetrates #% Elemental Resistance if you haven\'t Killed Recently',
    regex: /Damage Penetrates (\d+)% Elemental Resistance if you haven't Killed Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Damage Penetrates #% Elemental Resistances',
    regex: /Damage Penetrates (\d+)% Elemental Resistances/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Damage Penetrates #% Fire Resistance',
    regex: /Damage Penetrates (\d+)% Fire Resistance/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Damage Penetrates #% Lightning Resistance',
    regex: /Damage Penetrates (\d+)% Lightning Resistance/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Fire Damage if you\'ve dealt a Critical Strike Recently',
    regex: /Gain (\d+)% of Physical Damage as Extra Fire Damage if you've dealt a Critical Strike Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Has 1 Abyssal Socket',
    regex: /Has 1 Abyssal Socket/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Ignore all Movement Penalties from Armour',
    regex: /Ignore all Movement Penalties from Armour/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions deal # to # additional Chaos Damage',
    regex: /Minions deal (\d+) to (\d+) additional Chaos Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions deal # to # additional Cold Damage',
    regex: /Minions deal (\d+) to (\d+) additional Cold Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions deal # to # additional Fire Damage',
    regex: /Minions deal (\d+) to (\d+) additional Fire Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions deal # to # additional Lightning Damage',
    regex: /Minions deal (\d+) to (\d+) additional Lightning Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions deal # to # additional Physical Damage',
    regex: /Minions deal (\d+) to (\d+) additional Physical Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions deal #% increased Damage',
    regex: /Minions deal (\d+)% increased Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions deal #% increased Damage against Abyssal Monsters',
    regex: /Minions deal (\d+)% increased Damage against Abyssal Monsters/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions deal #% increased Damage if you\'ve used a Minion Skill Recently',
    regex: /Minions deal (\d+)% increased Damage if you've used a Minion Skill Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions have #% chance to Blind on Hit with Attacks',
    regex: /Minions have (\d+)% chance to Blind on Hit with Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions have #% chance to Hinder Enemies on Hit with Spells, with 30% reduced Movement Speed',
    regex: /Minions have (\d+)% chance to Hinder Enemies on Hit with Spells, with 30% reduced Movement Speed/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions have #% chance to Taunt on Hit with Attacks',
    regex: /Minions have (\d+)% chance to Taunt on Hit with Attacks/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions have #% increased Attack and Cast Speed if you or your Minions have Killed Recently',
    regex: /Minions have (\d+)% increased Attack and Cast Speed if you or your Minions have Killed Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions have #% increased Attack Speed',
    regex: /Minions have (\d+)% increased Attack Speed/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions have #% increased Cast Speed',
    regex: /Minions have (\d+)% increased Cast Speed/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions have #% increased maximum Life',
    regex: /Minions have (\d+)% increased maximum Life/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions have #% increased Movement Speed',
    regex: /Minions have (\d+)% increased Movement Speed/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions have +# to Accuracy Rating',
    regex: /Minions have \+(\d+) to Accuracy Rating/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions have +#% to all Elemental Resistances',
    regex: /Minions have \+(\d+)% to all Elemental Resistances/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions have +#% to Chaos Resistance',
    regex: /Minions have \+(\d+)% to Chaos Resistance/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions Leech #% of Damage as Life',
    regex: /Minions Leech (\d+)% of Damage as Life/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions Regenerate # Life per second',
    regex: /Minions Regenerate (\d+) Life per second/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Minions Regenerate #% of Life per second',
    regex: /Minions Regenerate (\d+)% of Life per second/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Nearby Enemies have #% to Chaos Resistance',
    regex: /Nearby Enemies have (\d+)% to Chaos Resistance/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Nearby Enemies have #% to Cold Resistance',
    regex: /Nearby Enemies have (\d+)% to Cold Resistance/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Nearby Enemies have #% to Fire Resistance',
    regex: /Nearby Enemies have (\d+)% to Fire Resistance/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Nearby Enemies have #% to Lightning Resistance',
    regex: /Nearby Enemies have (\d+)% to Lightning Resistance/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Nearby Enemies take #% increased Physical Damage',
    regex: /Nearby Enemies take (\d+)% increased Physical Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Regenerate # Energy Shield per second',
    regex: /Regenerate (\d+) Energy Shield per second/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Regenerate # Life per second',
    regex: /Regenerate (\d+) Life per second/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Regenerate #% of Energy Shield per second',
    regex: /Regenerate (\d+)% of Energy Shield per second/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Regenerate #% of Energy Shield per second if you\'ve Hit an Enemy Recently',
    regex: /Regenerate (\d+)% of Energy Shield per second if you've Hit an Enemy Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Regenerate #% of Life per second',
    regex: /Regenerate (\d+)% of Life per second/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Regenerate #% of Life per second while moving',
    regex: /Regenerate (\d+)% of Life per second while moving/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Regenerate #% of Mana per second',
    regex: /Regenerate (\d+)% of Mana per second/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Regenerate #% of Mana per second if you\'ve Hit an Enemy Recently',
    regex: /Regenerate (\d+)% of Mana per second if you've Hit an Enemy Recently/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Socketed Attacks have -# to Total Mana Cost',
    regex: /Socketed Attacks have -(\d+) to Total Mana Cost/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Socketed Gems are Supported by Level # Arcane Surge',
    regex: /Socketed Gems are Supported by Level (\d+) Arcane Surge/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Socketed Gems are Supported by Level # Maim',
    regex: /Socketed Gems are Supported by Level (\d+) Maim/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Socketed Skills deal #% more Attack Damage',
    regex: /Socketed Skills deal (\d+)% more Attack Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Socketed Skills deal #% more Spell Damage',
    regex: /Socketed Skills deal (\d+)% more Spell Damage/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Socketed Skills have #% increased Attack Speed',
    regex: /Socketed Skills have (\d+)% increased Attack Speed/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Socketed Skills have #% increased Cast Speed',
    regex: /Socketed Skills have (\d+)% increased Cast Speed/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Socketed Spells have #% reduced Mana Cost',
    regex: /Socketed Spells have (\d+)% reduced Mana Cost/,
    type: ModFilterType.ABYSS,
  },
  {
    label: 'Vaal Skills deal #% increased Damage',
    regex: /Vaal Skills deal (\d+)% increased Damage/,
    type: ModFilterType.ABYSS,
  },
];
