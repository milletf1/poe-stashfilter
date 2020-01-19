import { IMod } from '../IModFilterParams';
import { ModFilterType } from '../ModFilterType';

export const craftedModRegexes: IMod[] = [
  {
    label: '#% additional Physical Damage Reduction while Focussed',
    regex: /(\d+)% additional Physical Damage Reduction while Focussed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance for Flasks to gain a Charge when you take a Critical Strike',
    regex: /(\d+)% chance for Flasks to gain a Charge when you take a Critical Strike/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance for your Flasks to not consume Charges',
    regex: /(\d+)% chance for your Flasks to not consume Charges/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to Avoid being Chilled',
    regex: /(\d+)% chance to Avoid being Chilled/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to Avoid being Frozen',
    regex: /(\d+)% chance to Avoid being Frozen/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to Avoid being Ignited',
    regex: /(\d+)% chance to Avoid being Ignited/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to Avoid being Knocked Back',
    regex: /(\d+)% chance to Avoid being Knocked Back/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to Avoid being Shocked',
    regex: /(\d+)% chance to Avoid being Shocked/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to Avoid being Stunned',
    regex: /(\d+)% chance to Avoid being Stunned/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% Chance to avoid being Stunned during Flask Effect',
    regex: /(\d+)% Chance to avoid being Stunned during Flask Effect/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to Avoid Elemental Ailments',
    regex: /(\d+)% chance to Avoid Elemental Ailments/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to Avoid Elemental Damage from Hits during Soul Gain Prevention',
    regex: /(\d+)% chance to Avoid Elemental Damage from Hits during Soul Gain Prevention/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to Blind Enemies on hit',
    regex: /(\d+)% chance to Blind Enemies on hit/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% Chance to Block Attack Damage',
    regex: /(\d+)% Chance to Block Attack Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% Chance to Block Spell Damage',
    regex: /(\d+)% Chance to Block Spell Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to cause Bleeding on Hit',
    regex: /(\d+)% chance to cause Bleeding on Hit/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to deal Double Damage',
    regex: /(\d+)% chance to deal Double Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to deal Double Damage while Focussed',
    regex: /(\d+)% chance to deal Double Damage while Focussed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to Dodge Spell Hits',
    regex: /(\d+)% chance to Dodge Spell Hits/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to Freeze',
    regex: /(\d+)% chance to Freeze/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to gain a Frenzy Charge on Critical Strike',
    regex: /(\d+)% chance to gain a Frenzy Charge on Critical Strike/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to gain Arcane Surge when you Kill an Enemy',
    regex: /(\d+)% chance to gain Arcane Surge when you Kill an Enemy/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to gain Onslaught for 4 seconds on Kill',
    regex: /(\d+)% chance to gain Onslaught for 4 seconds on Kill/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to Ignite',
    regex: /(\d+)% chance to Ignite/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to Impale Enemies on Hit with Attacks',
    regex: /(\d+)% chance to Impale Enemies on Hit with Attacks/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to Poison on Hit',
    regex: /(\d+)% chance to Poison on Hit/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to Shock',
    regex: /(\d+)% chance to Shock/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% chance to Trigger Level 1 Blood Rage when you Kill an Enemy',
    regex: /(\d+)% chance to Trigger Level 1 Blood Rage when you Kill an Enemy/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% Chance to Trigger Level 18 Summon Spectral Wolf on Kill',
    regex: /(\d+)% Chance to Trigger Level 18 Summon Spectral Wolf on Kill/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% faster start of Energy Shield Recharge',
    regex: /(\d+)% faster start of Energy Shield Recharge/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Area Damage',
    regex: /(\d+)% increased Area Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Area of Effect',
    regex: /(\d+)% increased Area of Effect/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Armour',
    regex: /(\d+)% increased Armour/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Armour and Energy Shield',
    regex: /(\d+)% increased Armour and Energy Shield/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Armour and Evasion',
    regex: /(\d+)% increased Armour and Evasion/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Armour, Evasion and Energy Shield',
    regex: /(\d+)% increased Armour, Evasion and Energy Shield/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Attack and Cast Speed',
    regex: /(\d+)% increased Attack and Cast Speed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Attack and Cast Speed while Focussed',
    regex: /(\d+)% increased Attack and Cast Speed while Focussed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Attack Speed',
    regex: /(\d+)% increased Attack Speed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Attack Speed while a Rare or Unique Enemy is Nearby',
    regex: /(\d+)% increased Attack Speed while a Rare or Unique Enemy is Nearby/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Attributes',
    regex: /(\d+)% increased Attributes/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Brand Attachment range',
    regex: /(\d+)% increased Brand Attachment range/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Cast Speed',
    regex: /(\d+)% increased Cast Speed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Chaos Damage',
    regex: /(\d+)% increased Chaos Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Chill Duration on Enemies',
    regex: /(\d+)% increased Chill Duration on Enemies/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Cold Damage',
    regex: /(\d+)% increased Cold Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Cooldown Recovery Speed',
    regex: /(\d+)% increased Cooldown Recovery Speed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Critical Strike Chance',
    regex: /(\d+)% increased Critical Strike Chance/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Critical Strike Chance during Flask Effect',
    regex: /(\d+)% increased Critical Strike Chance during Flask Effect/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Critical Strike Chance for Spells',
    regex: /(\d+)% increased Critical Strike Chance for Spells/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Damage',
    regex: /(\d+)% increased Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Damage during any Flask Effect',
    regex: /(\d+)% increased Damage during any Flask Effect/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Damage over Time',
    regex: /(\d+)% increased Damage over Time/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Damage per Endurance Charge',
    regex: /(\d+)% increased Damage per Endurance Charge/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Damage per Frenzy Charge',
    regex: /(\d+)% increased Damage per Frenzy Charge/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Damage per Power Charge',
    regex: /(\d+)% increased Damage per Power Charge/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Damage while Leeching',
    regex: /(\d+)% increased Damage while Leeching/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Duration of Ailments you inflict while Focussed',
    regex: /(\d+)% increased Duration of Ailments you inflict while Focussed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Effect of Fortify on you while Focussed',
    regex: /(\d+)% increased Effect of Fortify on you while Focussed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Effect of non-Damaging Ailments on Enemies',
    regex: /(\d+)% increased Effect of non-Damaging Ailments on Enemies/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Effect of your Curses',
    regex: /(\d+)% increased Effect of your Curses/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Elemental Damage if you\'ve dealt a Critical Strike Recently',
    regex: /(\d+)% increased Elemental Damage if you've dealt a Critical Strike Recently/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Elemental Damage with Attack Skills',
    regex: /(\d+)% increased Elemental Damage with Attack Skills/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Energy Shield',
    regex: /(\d+)% increased Energy Shield/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Evasion and Energy Shield',
    regex: /(\d+)% increased Evasion and Energy Shield/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Evasion Rating',
    regex: /(\d+)% increased Evasion Rating/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Fire Damage',
    regex: /(\d+)% increased Fire Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Flask Effect Duration',
    regex: /(\d+)% increased Flask Effect Duration/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Flask Life Recovery rate',
    regex: /(\d+)% increased Flask Life Recovery rate/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Flask Mana Recovery rate',
    regex: /(\d+)% increased Flask Mana Recovery rate/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Freeze Duration on Enemies',
    regex: /(\d+)% increased Freeze Duration on Enemies/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Global Critical Strike Chance',
    regex: /(\d+)% increased Global Critical Strike Chance/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Global Physical Damage',
    regex: /(\d+)% increased Global Physical Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Ignite Duration on Enemies',
    regex: /(\d+)% increased Ignite Duration on Enemies/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Lightning Damage',
    regex: /(\d+)% increased Lightning Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Mana Regeneration Rate',
    regex: /(\d+)% increased Mana Regeneration Rate/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased maximum Energy Shield',
    regex: /(\d+)% increased maximum Energy Shield/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased maximum Life',
    regex: /(\d+)% increased maximum Life/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased maximum Mana',
    regex: /(\d+)% increased maximum Mana/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Melee Damage',
    regex: /(\d+)% increased Melee Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Mine Damage',
    regex: /(\d+)% increased Mine Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Mine Throwing Speed',
    regex: /(\d+)% increased Mine Throwing Speed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Movement Speed',
    regex: /(\d+)% increased Movement Speed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Movement Speed during Flask effect',
    regex: /(\d+)% increased Movement Speed during Flask effect/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Movement Speed if you haven\'t been Hit Recently',
    regex: /(\d+)% increased Movement Speed if you haven't been Hit Recently/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Physical Damage',
    regex: /(\d+)% increased Physical Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Projectile Damage',
    regex: /(\d+)% increased Projectile Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Projectile Speed',
    regex: /(\d+)% increased Projectile Speed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Quantity of Items found in this Area',
    regex: /(\d+)% increased Quantity of Items found in this Area/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Rarity of Items Dropped by Slain Rare or Unique Enemies',
    regex: /(\d+)% increased Rarity of Items Dropped by Slain Rare or Unique Enemies/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Rarity of Items found',
    regex: /(\d+)% increased Rarity of Items found/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Rarity of Items found during Flask Effect',
    regex: /(\d+)% increased Rarity of Items found during Flask Effect/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Shock Duration on Enemies',
    regex: /(\d+)% increased Shock Duration on Enemies/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Spell Damage',
    regex: /(\d+)% increased Spell Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Stun Duration on Enemies',
    regex: /(\d+)% increased Stun Duration on Enemies/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Totem Placement speed',
    regex: /(\d+)% increased Totem Placement speed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Trap Damage',
    regex: /(\d+)% increased Trap Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% increased Trap Throwing Speed',
    regex: /(\d+)% increased Trap Throwing Speed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% more Physical Damage with Unarmed Attacks',
    regex: /(\d+)% more Physical Damage with Unarmed Attacks/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% of Cold Damage Leeched as Life',
    regex: /(\d+)% of Cold Damage Leeched as Life/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% of Damage is taken from Mana before Life while Focussed',
    regex: /(\d+)% of Damage is taken from Mana before Life while Focussed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% of Damage Leeched as Life while Focussed',
    regex: /(\d+)% of Damage Leeched as Life while Focussed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% of Damage Taken from Hits is Leeched as Life during Flask Effect',
    regex: /(\d+)% of Damage Taken from Hits is Leeched as Life during Flask Effect/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% of Damage taken gained as Mana over 4 seconds when Hit',
    regex: /(\d+)% of Damage taken gained as Mana over 4 seconds when Hit/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% of Evasion Rating is Regenerated as Life per second while Focussed',
    regex: /(\d+)% of Evasion Rating is Regenerated as Life per second while Focussed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% of Fire Damage Leeched as Life',
    regex: /(\d+)% of Fire Damage Leeched as Life/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% of Lightning Damage Leeched as Life',
    regex: /(\d+)% of Lightning Damage Leeched as Life/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% of Physical Attack Damage Leeched as Life',
    regex: /(\d+)% of Physical Attack Damage Leeched as Life/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% of Physical Attack Damage Leeched as Mana',
    regex: /(\d+)% of Physical Attack Damage Leeched as Mana/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% of Physical Damage Converted to Cold Damage',
    regex: /(\d+)% of Physical Damage Converted to Cold Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% of Physical Damage Converted to Fire Damage',
    regex: /(\d+)% of Physical Damage Converted to Fire Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% of Physical Damage Converted to Lightning Damage',
    regex: /(\d+)% of Physical Damage Converted to Lightning Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% of Physical Damage from Hits taken as Fire Damage',
    regex: /(\d+)% of Physical Damage from Hits taken as Fire Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% reduced Damage taken from Damage Over Time',
    regex: /(\d+)% reduced Damage taken from Damage Over Time/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% reduced Enemy Block Chance',
    regex: /(\d+)% reduced Enemy Block Chance/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% reduced Enemy Stun Threshold with this Weapon',
    regex: /(\d+)% reduced Enemy Stun Threshold with this Weapon/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% reduced Flask Charges gained',
    regex: /(\d+)% reduced Flask Charges gained/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% reduced Mana Cost of Skills',
    regex: /(\d+)% reduced Mana Cost of Skills/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '#% reduced Mana Cost of Skills during Flask Effect',
    regex: /(\d+)% reduced Mana Cost of Skills during Flask Effect/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# Life gained for each Enemy hit by your Attacks',
    regex: /\+(\d+) Life gained for each Enemy hit by your Attacks/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Accuracy Rating',
    regex: /\+(\d+) to Accuracy Rating/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to all Attributes',
    regex: /\+(\d+) to all Attributes/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Armour',
    regex: /\+(\d+) to Armour/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Armour and Evasion Rating',
    regex: /\+(\d+) to Armour and Evasion Rating/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Armour during Soul Gain Prevention',
    regex: /\+(\d+) to Armour during Soul Gain Prevention/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Dexterity',
    regex: /\+(\d+) to Dexterity/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Dexterity and Intelligence',
    regex: /\+(\d+) to Dexterity and Intelligence/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Evasion Rating',
    regex: /\+(\d+) to Evasion Rating/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Intelligence',
    regex: /\+(\d+) to Intelligence/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Level of Socketed AoE Gems',
    regex: /\+(\d+) to Level of Socketed AoE Gems/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Level of Socketed Melee Gems',
    regex: /\+(\d+) to Level of Socketed Melee Gems/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Level of Socketed Projectile Gems',
    regex: /\+(\d+) to Level of Socketed Projectile Gems/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Level of Socketed Support Gems',
    regex: /\+(\d+) to Level of Socketed Support Gems/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to maximum Energy Shield',
    regex: /\+(\d+) to maximum Energy Shield/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to maximum Life',
    regex: /\+(\d+) to maximum Life/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to maximum Mana',
    regex: /\+(\d+) to maximum Mana/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to maximum number of Raised Zombies',
    regex: /\+(\d+) to maximum number of Raised Zombies/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to maximum number of Skeletons',
    regex: /\+(\d+) to maximum number of Skeletons/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to maximum number of Summoned Totems',
    regex: /\+(\d+) to maximum number of Summoned Totems/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Melee Weapon and Unarmed Attack range',
    regex: /\+(\d+) to Melee Weapon and Unarmed Attack range/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Minimum Endurance Charges',
    regex: /\+(\d+) to Minimum Endurance Charges/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Minimum Frenzy Charges',
    regex: /\+(\d+) to Minimum Frenzy Charges/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Minimum Power Charges',
    regex: /\+(\d+) to Minimum Power Charges/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Strength',
    regex: /\+(\d+) to Strength/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Strength and Dexterity',
    regex: /\+(\d+) to Strength and Dexterity/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Strength and Intelligence',
    regex: /\+(\d+) to Strength and Intelligence/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+# to Weapon range',
    regex: /\+(\d+) to Weapon range/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% Chance to Block',
    regex: /\+(\d+)% Chance to Block/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% Chance to Block Attack Damage',
    regex: /\+(\d+)% Chance to Block Attack Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% Chance to Block Attack Damage while Dual Wielding',
    regex: /\+(\d+)% Chance to Block Attack Damage while Dual Wielding/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% chance to Dodge Attack Hits while Focussed',
    regex: /\+(\d+)% chance to Dodge Attack Hits while Focussed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% Critical Strike Multiplier while a Rare or Unique Enemy is Nearby',
    regex: /\+(\d+)% Critical Strike Multiplier while a Rare or Unique Enemy is Nearby/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% to all Elemental Resistances',
    regex: /\+(\d+)% to all Elemental Resistances/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% to Chaos Damage over Time Multiplier',
    regex: /\+(\d+)% to Chaos Damage over Time Multiplier/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% to Cold and Chaos Resistances',
    regex: /\+(\d+)% to Cold and Chaos Resistances/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% to Cold and Lightning Resistances',
    regex: /\+(\d+)% to Cold and Lightning Resistances/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% to Cold Damage over Time Multiplier',
    regex: /\+(\d+)% to Cold Damage over Time Multiplier/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% to Cold Resistance',
    regex: /\+(\d+)% to Cold Resistance/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% to Critical Strike Multiplier if you\'ve Shattered an Enemy Recently',
    regex: /\+(\d+)% to Critical Strike Multiplier if you've Shattered an Enemy Recently/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% to Fire and Chaos Resistances',
    regex: /\+(\d+)% to Fire and Chaos Resistances/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% to Fire and Cold Resistances',
    regex: /\+(\d+)% to Fire and Cold Resistances/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% to Fire and Lightning Resistances',
    regex: /\+(\d+)% to Fire and Lightning Resistances/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% to Fire Damage over Time Multiplier',
    regex: /\+(\d+)% to Fire Damage over Time Multiplier/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% to Fire Resistance',
    regex: /\+(\d+)% to Fire Resistance/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% to Global Critical Strike Multiplier',
    regex: /\+(\d+)% to Global Critical Strike Multiplier/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% to Lightning and Chaos Resistances',
    regex: /\+(\d+)% to Lightning and Chaos Resistances/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% to Lightning Resistance',
    regex: /\+(\d+)% to Lightning Resistance/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% to Quality',
    regex: /\+(\d+)% to Quality/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '+#% to Quality of Socketed Gems',
    regex: /\+(\d+)% to Quality of Socketed Gems/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: '-# to Total Mana Cost of Skills',
    regex: /-(\d+) to Total Mana Cost of Skills/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Adds # to # Chaos Damage if you\'ve dealt a Critical Strike Recently',
    regex: /Adds (\d+) to (\d+) Chaos Damage if you've dealt a Critical Strike Recently/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Adds # to # Chaos Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Chaos Damage to Attacks/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Adds # to # Cold Damage',
    regex: /Adds (\d+) to (\d+) Cold Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Adds # to # Cold Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Attacks/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Adds # to # Cold Damage to Spells',
    regex: /Adds (\d+) to (\d+) Cold Damage to Spells/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Adds # to # Fire Damage',
    regex: /Adds (\d+) to (\d+) Fire Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Adds # to # Fire Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Fire Damage to Attacks/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Adds # to # Fire Damage to Spells',
    regex: /Adds (\d+) to (\d+) Fire Damage to Spells/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Adds # to # Lightning Damage',
    regex: /Adds (\d+) to (\d+) Lightning Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Adds # to # Lightning Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Attacks/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Adds # to # Lightning Damage to Spells',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Spells/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Adds # to # Physical Damage',
    regex: /Adds (\d+) to (\d+) Physical Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Adds # to # Physical Damage to Attacks',
    regex: /Adds (\d+) to (\d+) Physical Damage to Attacks/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Attack Projectiles Return to you from final Target',
    regex: /Attack Projectiles Return to you from final Target/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Attacks with this Weapon Penetrate #% Chaos Resistance',
    regex: /Attacks with this Weapon Penetrate (\d+)% Chaos Resistance/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Attacks with this Weapon Penetrate #% Elemental Resistances',
    regex: /Attacks with this Weapon Penetrate (\d+)% Elemental Resistances/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Can have multiple Crafted Modifiers',
    regex: /Can have multiple Crafted Modifiers/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Cannot be Chilled',
    regex: /Cannot be Chilled/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Cannot be Frozen',
    regex: /Cannot be Frozen/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Cannot roll Attack Modifiers',
    regex: /Cannot roll Attack Modifiers/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Cannot roll Caster Modifiers',
    regex: /Cannot roll Caster Modifiers/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Cannot roll Modifiers with Required Level above #',
    regex: /Cannot roll Modifiers with Required Level above (\d+)/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Channelling Skills have -# to Total Mana Cost',
    regex: /Channelling Skills have -(\d+) to Total Mana Cost/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Chaos Skills have #% increased Skill Effect Duration',
    regex: /Chaos Skills have (\d+)% increased Skill Effect Duration/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Curse Skills have #% increased Skill Effect Duration',
    regex: /Curse Skills have (\d+)% increased Skill Effect Duration/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Flasks applied to you have #% increased Effect',
    regex: /Flasks applied to you have (\d+)% increased Effect/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Gain #% of Cold Damage as Extra Chaos Damage',
    regex: /Gain (\d+)% of Cold Damage as Extra Chaos Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Gain #% of Fire Damage as Extra Chaos Damage',
    regex: /Gain (\d+)% of Fire Damage as Extra Chaos Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Gain #% of Lightning Damage as Extra Chaos Damage',
    regex: /Gain (\d+)% of Lightning Damage as Extra Chaos Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Gain #% of Maximum Life as Extra Maximum Energy Shield',
    regex: /Gain (\d+)% of Maximum Life as Extra Maximum Energy Shield/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Gain #% of Non-Chaos Damage as extra Chaos Damage',
    regex: /Gain (\d+)% of Non-Chaos Damage as extra Chaos Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Chaos Damage',
    regex: /Gain (\d+)% of Physical Damage as Extra Chaos Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Hits can\'t be Evaded',
    regex: /Hits can't be Evaded/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Item drops on Death if Equipped by an Animated Guardian',
    regex: /Item drops on Death if Equipped by an Animated Guardian/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Minions deal #% increased Damage',
    regex: /Minions deal (\d+)% increased Damage/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Minions have #% increased Attack Speed',
    regex: /Minions have (\d+)% increased Attack Speed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Minions have #% increased Cast Speed',
    regex: /Minions have (\d+)% increased Cast Speed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Minions have #% increased maximum Life',
    regex: /Minions have (\d+)% increased maximum Life/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Minions have #% increased Movement Speed',
    regex: /Minions have (\d+)% increased Movement Speed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Minions have +#% to all Elemental Resistances',
    regex: /Minions have \+(\d+)% to all Elemental Resistances/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Minions Recover #% of their Life when you Focus',
    regex: /Minions Recover (\d+)% of their Life when you Focus/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Non-Channelling Skills have -# to Total Mana Cost',
    regex: /Non-Channelling Skills have -(\d+) to Total Mana Cost/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Non-Vaal Skills deal #% increased Damage during Soul Gain Prevention',
    regex: /Non-Vaal Skills deal (\d+)% increased Damage during Soul Gain Prevention/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Prefixes Cannot Be Changed',
    regex: /Prefixes Cannot Be Changed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Projectiles Pierce an additional Target',
    regex: /Projectiles Pierce an additional Target/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Recover #% of Mana and Energy Shield when you Focus',
    regex: /Recover (\d+)% of Mana and Energy Shield when you Focus/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Reflects # Physical Damage to Melee Attackers',
    regex: /Reflects (\d+) Physical Damage to Melee Attackers/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Reflects # to # Physical Damage to Attackers on Block',
    regex: /Reflects (\d+) to (\d+) Physical Damage to Attackers on Block/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Regenerate # Energy Shield per second while a Rare or Unique Enemy is Nearby',
    regex: /Regenerate (\d+) Energy Shield per second while a Rare or Unique Enemy is Nearby/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Regenerate # Life per second',
    regex: /Regenerate (\d+) Life per second/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Regenerate # Mana per second',
    regex: /Regenerate (\d+) Mana per second/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Regenerate #% of Life per second',
    regex: /Regenerate (\d+)% of Life per second/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Regenerate #% of Life per second during any Flask Effect',
    regex: /Regenerate (\d+)% of Life per second during any Flask Effect/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Regenerate #% of Life per second during Flask Effect',
    regex: /Regenerate (\d+)% of Life per second during Flask Effect/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Shock nearby Enemies for # Seconds when you Focus',
    regex: /Shock nearby Enemies for (\d+) Seconds when you Focus/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Skills Cost no Mana while Focussed',
    regex: /Skills Cost no Mana while Focussed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Socketed Gems are Supported by Level # Blood Magic',
    regex: /Socketed Gems are Supported by Level (\d+) Blood Magic/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Suffixes Cannot Be Changed',
    regex: /Suffixes Cannot Be Changed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Trigger a Socketed Spell when you Use a Skill',
    regex: /Trigger a Socketed Spell when you Use a Skill/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Trigger Socketed Spells when you Focus',
    regex: /Trigger Socketed Spells when you Focus/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'You are Immune to Ailments while Focussed',
    regex: /You are Immune to Ailments while Focussed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'You can apply an additional Curse',
    regex: /You can apply an additional Curse/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'You have Onslaught during Soul Gain Prevention',
    regex: /You have Onslaught during Soul Gain Prevention/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'You have Vaal Pact while Focussed',
    regex: /You have Vaal Pact while Focussed/,
    type: ModFilterType.CRAFTED,
  },
  {
    label: 'Your Critical Strike Chance is Lucky while Focussed',
    regex: /Your Critical Strike Chance is Lucky while Focussed/,
    type: ModFilterType.CRAFTED,
  },
];
