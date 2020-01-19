import { IMod } from '../IModFilterParams';
import { ModFilterType } from '../ModFilterType';
/* tslint:disable:max-line-length */

export const uniqueModRegexes: IMod[] = [
  {
    label: '# Chaos Damage taken per second',
    regex: /(\d+) Chaos Damage taken per second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '# Cold Damage taken from Hits',
    regex: /(\d+) Cold Damage taken from Hits/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '# Cold Damage taken per second per Frenzy Charge while moving',
    regex: /(\d+) Cold Damage taken per second per Frenzy Charge while moving/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '# Fire Damage taken from Hits',
    regex: /(\d+) Fire Damage taken from Hits/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '# Fire Damage taken per second per Endurance Charge if you\'ve been Hit Recently',
    regex: /(\d+) Fire Damage taken per second per Endurance Charge if you've been Hit Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '# Intelligence per 1 Intelligence on Allocated Passives in Radius',
    regex: /(\d+) Intelligence per 1 Intelligence on Allocated Passives in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '# Life gained for each Enemy Hit if you have used a Vaal Skill Recently',
    regex: /(\d+) Life gained for each Enemy Hit if you have used a Vaal Skill Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '# Lightning Damage taken from Hits',
    regex: /(\d+) Lightning Damage taken from Hits/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '# Lightning Damage taken per second per Power Charge if your Skills have dealt a Critical Strike Recently',
    regex: /(\d+) Lightning Damage taken per second per Power Charge if your Skills have dealt a Critical Strike Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '# Maximum Void Charges',
    regex: /(\d+) Maximum Void Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '# Physical Damage taken from Hits by Animals',
    regex: /(\d+) Physical Damage taken from Hits by Animals/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '# Physical Damage taken on Minion Death',
    regex: /(\d+) Physical Damage taken on Minion Death/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '# Strength per 1 Strength on Allocated Passives in Radius',
    regex: /(\d+) Strength per 1 Strength on Allocated Passives in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '# to # Fire Damage per Endurance Charge',
    regex: /(\d+) to (\d+) Fire Damage per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '# to # Lightning Damage per Power Charge',
    regex: /(\d+) to (\d+) Lightning Damage per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '# to Total Mana Cost of Skills for each Corrupted Item Equipped',
    regex: /(\d+) to Total Mana Cost of Skills for each Corrupted Item Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% additional chance for Slain monsters to drop Scrolls of Wisdom',
    regex: /(\d+)% additional chance for Slain monsters to drop Scrolls of Wisdom/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% additional Physical Damage Reduction from Hits per Siphoning Charge',
    regex: /(\d+)% additional Physical Damage Reduction from Hits per Siphoning Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% additional Physical Damage Reduction per 10 Strength on Allocated Passives in Radius',
    regex: /(\d+)% additional Physical Damage Reduction per 10 Strength on Allocated Passives in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% additional Physical Damage Reduction per Frenzy Charge',
    regex: /(\d+)% additional Physical Damage Reduction per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% additional Physical Damage Reduction per Keystone',
    regex: /(\d+)% additional Physical Damage Reduction per Keystone/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% additional Physical Damage Reduction per Power Charge',
    regex: /(\d+)% additional Physical Damage Reduction per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% additional Physical Damage Reduction while affected by Determination',
    regex: /(\d+)% additional Physical Damage Reduction while affected by Determination/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% additional Physical Damage Reduction while affected by Herald of Purity',
    regex: /(\d+)% additional Physical Damage Reduction while affected by Herald of Purity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% additional Physical Damage Reduction while Bleeding',
    regex: /(\d+)% additional Physical Damage Reduction while Bleeding/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% additional Physical Damage Reduction while stationary',
    regex: /(\d+)% additional Physical Damage Reduction while stationary/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance for Energy Shield Recharge to start when you Block',
    regex: /(\d+)% chance for Energy Shield Recharge to start when you Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance for Energy Shield Recharge to start when you use a Skill',
    regex: /(\d+)% chance for Energy Shield Recharge to start when you use a Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance for Poisons inflicted with this Weapon to deal 300% more Damage',
    regex: /(\d+)% chance for Poisons inflicted with this Weapon to deal 300% more Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% Chance for Traps to Trigger an additional time',
    regex: /(\d+)% Chance for Traps to Trigger an additional time/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance that if you would gain a Crab Barrier, you instead gain up to your maximum number of Crab Barriers',
    regex: /(\d+)% chance that if you would gain a Crab Barrier, you instead gain up to your maximum number of Crab Barriers/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance that if you would gain Endurance Charges, you instead gain up to your maximum number of Endurance Charges',
    regex: /(\d+)% chance that if you would gain Endurance Charges, you instead gain up to your maximum number of Endurance Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance that if you would gain Frenzy Charges, you instead gain up to your maximum number of Frenzy Charges',
    regex: /(\d+)% chance that if you would gain Frenzy Charges, you instead gain up to your maximum number of Frenzy Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance that if you would gain Power Charges, you instead gain up to your maximum number of Power Charges',
    regex: /(\d+)% chance that if you would gain Power Charges, you instead gain up to your maximum number of Power Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Avoid Elemental Damage from Hits per Frenzy Charge',
    regex: /(\d+)% chance to Avoid Elemental Damage from Hits per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Avoid Projectiles while Phasing',
    regex: /(\d+)% chance to Avoid Projectiles while Phasing/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to be cursed with Level 10 Punishment on Kill',
    regex: /(\d+)% chance to be cursed with Level 10 Punishment on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to be inflicted with Bleeding when Hit by an Attack',
    regex: /(\d+)% chance to be inflicted with Bleeding when Hit by an Attack/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Blind Enemies on Critical Strike',
    regex: /(\d+)% chance to Blind Enemies on Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Blind Enemies on hit',
    regex: /(\d+)% chance to Blind Enemies on hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Blind Enemies which Hit you while affected by Grace',
    regex: /(\d+)% chance to Blind Enemies which Hit you while affected by Grace/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Blind nearby Enemies when gaining Her Blessing',
    regex: /(\d+)% chance to Blind nearby Enemies when gaining Her Blessing/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Block Spell Damage if you have Blocked Attack Damage Recently',
    regex: /(\d+)% chance to Block Spell Damage if you have Blocked Attack Damage Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% Chance to cause Bleeding Enemies to Flee on hit',
    regex: /(\d+)% Chance to cause Bleeding Enemies to Flee on hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Cause Bleeding on Critical Strike',
    regex: /(\d+)% chance to Cause Bleeding on Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% Chance to Cause Monster to Flee on Block',
    regex: /(\d+)% Chance to Cause Monster to Flee on Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Cause Monsters to Flee',
    regex: /(\d+)% chance to Cause Monsters to Flee/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Cause Poison on Critical Strike',
    regex: /(\d+)% chance to Cause Poison on Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to create a Smoke Cloud when Hit',
    regex: /(\d+)% chance to create a Smoke Cloud when Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to create Chilled Ground when Hit with an Attack',
    regex: /(\d+)% chance to create Chilled Ground when Hit with an Attack/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to create Chilled Ground when you Freeze an Enemy',
    regex: /(\d+)% chance to create Chilled Ground when you Freeze an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to create Consecrated Ground when you Block',
    regex: /(\d+)% chance to create Consecrated Ground when you Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to create Desecrated Ground when you Block',
    regex: /(\d+)% chance to create Desecrated Ground when you Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to create Shocked Ground when Hit',
    regex: /(\d+)% chance to create Shocked Ground when Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Curse Enemies with Level 10 Vulnerability on Hit',
    regex: /(\d+)% chance to Curse Enemies with Level 10 Vulnerability on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Curse non-Cursed Enemies with a random Curse on Hit',
    regex: /(\d+)% chance to Curse non-Cursed Enemies with a random Curse on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Curse non-Cursed Enemies with Enfeeble on Hit',
    regex: /(\d+)% chance to Curse non-Cursed Enemies with Enfeeble on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to deal Double Damage per 500 Strength',
    regex: /(\d+)% chance to deal Double Damage per 500 Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to deal Double Damage while using Pride',
    regex: /(\d+)% chance to deal Double Damage while using Pride/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Dodge Attack and Spell Hits per 500 Maximum Mana, up to 20%',
    regex: /(\d+)% chance to Dodge Attack and Spell Hits per 500 Maximum Mana, up to 20%/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Dodge Attack Hits if you\'ve taken Spell Damage Recently',
    regex: /(\d+)% chance to Dodge Attack Hits if you've taken Spell Damage Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Dodge Attack Hits per Endurance Charge',
    regex: /(\d+)% chance to Dodge Attack Hits per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Dodge Attack Hits per Frenzy Charge',
    regex: /(\d+)% chance to Dodge Attack Hits per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Dodge Attack Hits per Power Charge',
    regex: /(\d+)% chance to Dodge Attack Hits per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Dodge Attack Hits while affected by Grace',
    regex: /(\d+)% chance to Dodge Attack Hits while affected by Grace/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Dodge Attack Hits while Phasing',
    regex: /(\d+)% chance to Dodge Attack Hits while Phasing/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Dodge Attack Hits while your Off Hand is empty',
    regex: /(\d+)% chance to Dodge Attack Hits while your Off Hand is empty/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Dodge Spell Hits if you\'ve taken Attack Damage Recently',
    regex: /(\d+)% chance to Dodge Spell Hits if you've taken Attack Damage Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Dodge Spell Hits while affected by Haste',
    regex: /(\d+)% chance to Dodge Spell Hits while affected by Haste/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Dodge Spell Hits while Phasing',
    regex: /(\d+)% chance to Dodge Spell Hits while Phasing/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to double Stun Duration',
    regex: /(\d+)% chance to double Stun Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Fortify on Melee hit',
    regex: /(\d+)% chance to Fortify on Melee hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Freeze during any Flask Effect',
    regex: /(\d+)% chance to Freeze during any Flask Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain a Frenzy Charge on Hit',
    regex: /(\d+)% chance to gain a Frenzy Charge on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain a Frenzy Charge on Killing a Frozen Enemy',
    regex: /(\d+)% chance to gain a Frenzy Charge on Killing a Frozen Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain a Frenzy Charge on Killing an Enemy affected by at least 5 Poisons',
    regex: /(\d+)% chance to gain a Frenzy Charge on Killing an Enemy affected by at least 5 Poisons/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain a Frenzy Charge when you Stun an Enemy',
    regex: /(\d+)% chance to gain a Frenzy Charge when you Stun an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain a Frenzy Charge when your Trap is triggered by an Enemy',
    regex: /(\d+)% chance to gain a Frenzy Charge when your Trap is triggered by an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain a Power Charge if you Knock an Enemy Back with Melee Damage',
    regex: /(\d+)% chance to gain a Power Charge if you Knock an Enemy Back with Melee Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain a Power Charge on Hit',
    regex: /(\d+)% chance to gain a Power Charge on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain a Power Charge on hitting an Enemy affected by a Spider\'s Web',
    regex: /(\d+)% chance to gain a Power Charge on hitting an Enemy affected by a Spider's Web/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain a Power Charge on Killing a Frozen Enemy',
    regex: /(\d+)% chance to gain a Power Charge on Killing a Frozen Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain a Power Charge on Killing an Enemy affected by fewer than 5 Poisons',
    regex: /(\d+)% chance to gain a Power Charge on Killing an Enemy affected by fewer than 5 Poisons/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain a Power Charge when you Stun',
    regex: /(\d+)% chance to gain a Power Charge when you Stun/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain a Power Charge when you Stun with Melee Damage',
    regex: /(\d+)% chance to gain a Power Charge when you Stun with Melee Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain a Power Charge when you Throw a Trap',
    regex: /(\d+)% chance to gain a Power Charge when you Throw a Trap/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain a Siphoning Charge when you use a Skill',
    regex: /(\d+)% chance to gain a Siphoning Charge when you use a Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain a Spirit Charge on Kill',
    regex: /(\d+)% chance to gain a Spirit Charge on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain an additional Vaal Soul per Enemy Shattered',
    regex: /(\d+)% chance to gain an additional Vaal Soul per Enemy Shattered/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain an Endurance, Frenzy or Power Charge when any of your Traps are Triggered by an Enemy',
    regex: /(\d+)% chance to gain an Endurance, Frenzy or Power Charge when any of your Traps are Triggered by an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain Onslaught for 10 seconds on Kill',
    regex: /(\d+)% chance to gain Onslaught for 10 seconds on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain Phasing for # seconds when your Trap is triggered by an Enemy',
    regex: /(\d+)% chance to gain Phasing for (\d+) seconds when your Trap is triggered by an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain Unholy Might for 10 seconds on Kill',
    regex: /(\d+)% chance to gain Unholy Might for 10 seconds on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to gain Unholy Might on block for 3 seconds',
    regex: /(\d+)% chance to gain Unholy Might on block for 3 seconds/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to grant a Frenzy Charge to nearby Allies on Hit',
    regex: /(\d+)% chance to grant a Frenzy Charge to nearby Allies on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to grant a Power Charge to nearby Allies on Kill',
    regex: /(\d+)% chance to grant a Power Charge to nearby Allies on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to grant Onslaught to nearby Enemies on Kill',
    regex: /(\d+)% chance to grant Onslaught to nearby Enemies on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to grant Unholy Might to nearby Enemies on Kill',
    regex: /(\d+)% chance to grant Unholy Might to nearby Enemies on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Ignite during any Flask Effect',
    regex: /(\d+)% chance to Ignite during any Flask Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Ignite when in Main Hand',
    regex: /(\d+)% chance to Ignite when in Main Hand/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Impale Enemies on Hit with Attacks',
    regex: /(\d+)% chance to Impale Enemies on Hit with Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Impale Enemies on Hit with Attacks while using Pride',
    regex: /(\d+)% chance to Impale Enemies on Hit with Attacks while using Pride/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to inflict Bleeding on Critical Strike with Attacks',
    regex: /(\d+)% chance to inflict Bleeding on Critical Strike with Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to inflict Brittle',
    regex: /(\d+)% chance to inflict Brittle/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to knockback on Counterattack',
    regex: /(\d+)% chance to knockback on Counterattack/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to lose a Frenzy Charge when you use a Travel Skill',
    regex: /(\d+)% chance to lose a Frenzy Charge when you use a Travel Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to lose a Power Charge when you gain Elusive',
    regex: /(\d+)% chance to lose a Power Charge when you gain Elusive/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Maim Enemies on Critical Strike with Attacks',
    regex: /(\d+)% chance to Maim Enemies on Critical Strike with Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Poison on Hit against Cursed Enemies',
    regex: /(\d+)% chance to Poison on Hit against Cursed Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Poison on Hit with Attacks',
    regex: /(\d+)% chance to Poison on Hit with Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Poison per Power Charge',
    regex: /(\d+)% chance to Poison per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Recover 10% of Mana when you use a Skill while affected by Clarity',
    regex: /(\d+)% chance to Recover 10% of Mana when you use a Skill while affected by Clarity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Sap Enemies',
    regex: /(\d+)% chance to Sap Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Scorch Enemies',
    regex: /(\d+)% chance to Scorch Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Shock Chilled Enemies',
    regex: /(\d+)% chance to Shock Chilled Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Shock during any Flask Effect',
    regex: /(\d+)% chance to Shock during any Flask Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to spread Tar when Hit',
    regex: /(\d+)% chance to spread Tar when Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Steal Power, Frenzy, and Endurance Charges on Hit',
    regex: /(\d+)% chance to Steal Power, Frenzy, and Endurance Charges on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Trigger a Socketed Spell when you Attack with a Bow',
    regex: /(\d+)% chance to Trigger a Socketed Spell when you Attack with a Bow/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Trigger Level 1 Raise Spiders on Kill',
    regex: /(\d+)% chance to Trigger Level 1 Raise Spiders on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Trigger Level 16 Molten Burst on Melee Hit',
    regex: /(\d+)% chance to Trigger Level 16 Molten Burst on Melee Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Trigger Level 18 Animate Guardian\'s Weapon when Animated Weapon Kills an Enemy',
    regex: /(\d+)% chance to Trigger Level 18 Animate Guardian's Weapon when Animated Weapon Kills an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% Chance to Trigger Level 18 Summon Spectral Wolf on Kill',
    regex: /(\d+)% Chance to Trigger Level 18 Summon Spectral Wolf on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Trigger Level 20 Animate Weapon on Kill',
    regex: /(\d+)% chance to Trigger Level 20 Animate Weapon on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Trigger Level 20 Shade Form when you Use a Socketed Skill',
    regex: /(\d+)% chance to Trigger Level 20 Shade Form when you Use a Socketed Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Trigger Level 20 Summon Volatile Anomaly on Kill',
    regex: /(\d+)% chance to Trigger Level 20 Summon Volatile Anomaly on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Trigger Level 20 Tentacle Whip on Kill',
    regex: /(\d+)% chance to Trigger Level 20 Tentacle Whip on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Trigger Level 20 Tornado when you gain Avian\'s Might or Avian\'s Flight',
    regex: /(\d+)% chance to Trigger Level 20 Tornado when you gain Avian's Might or Avian's Flight/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Trigger Level 8 Summon Raging Spirit on Kill',
    regex: /(\d+)% chance to Trigger Level 8 Summon Raging Spirit on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Trigger Socketed Spells on Killing a Shocked Enemy',
    regex: /(\d+)% chance to Trigger Socketed Spells on Killing a Shocked Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% chance to Trigger Socketed Spells when you Spend at least # Mana to Use a Skill',
    regex: /(\d+)% chance to Trigger Socketed Spells when you Spend at least (\d+) Mana to Use a Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% faster start of Energy Shield Recharge while affected by Discipline',
    regex: /(\d+)% faster start of Energy Shield Recharge while affected by Discipline/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Accuracy Rating when on Low Life',
    regex: /(\d+)% increased Accuracy Rating when on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Accuracy Rating with Axes',
    regex: /(\d+)% increased Accuracy Rating with Axes/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Accuracy Rating with Bows',
    regex: /(\d+)% increased Accuracy Rating with Bows/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Accuracy Rating with Claws',
    regex: /(\d+)% increased Accuracy Rating with Claws/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Accuracy Rating with Daggers',
    regex: /(\d+)% increased Accuracy Rating with Daggers/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Accuracy Rating with Maces and Sceptres',
    regex: /(\d+)% increased Accuracy Rating with Maces and Sceptres/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Accuracy Rating with Staves',
    regex: /(\d+)% increased Accuracy Rating with Staves/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Accuracy Rating with Swords',
    regex: /(\d+)% increased Accuracy Rating with Swords/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Accuracy Rating with Wands',
    regex: /(\d+)% increased Accuracy Rating with Wands/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Arctic Armour Buff Effect',
    regex: /(\d+)% increased Arctic Armour Buff Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Area Damage per 10 Devotion',
    regex: /(\d+)% increased Area Damage per 10 Devotion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Area of Effect for Attacks',
    regex: /(\d+)% increased Area of Effect for Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Area of Effect for Skills used by Totems',
    regex: /(\d+)% increased Area of Effect for Skills used by Totems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Area of Effect per 20 Intelligence',
    regex: /(\d+)% increased Area of Effect per 20 Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Area of Effect per 25 Rampage Kills',
    regex: /(\d+)% increased Area of Effect per 25 Rampage Kills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Area of Effect per Enemy killed recently, up to 50%',
    regex: /(\d+)% increased Area of Effect per Enemy killed recently, up to 50%/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Area of Effect while Unarmed',
    regex: /(\d+)% increased Area of Effect while Unarmed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Area of Effect while you have no Frenzy Charges',
    regex: /(\d+)% increased Area of Effect while you have no Frenzy Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Armour against Projectiles',
    regex: /(\d+)% increased Armour against Projectiles/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Armour and Evasion Rating if you\'ve killed a Taunted Enemy Recently',
    regex: /(\d+)% increased Armour and Evasion Rating if you've killed a Taunted Enemy Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Armour per Endurance Charge',
    regex: /(\d+)% increased Armour per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Armour while Bleeding',
    regex: /(\d+)% increased Armour while Bleeding/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Armour while Chilled or Frozen',
    regex: /(\d+)% increased Armour while Chilled or Frozen/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Armour while not Ignited, Frozen or Shocked',
    regex: /(\d+)% increased Armour while not Ignited, Frozen or Shocked/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Armour while stationary',
    regex: /(\d+)% increased Armour while stationary/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Aspect of the Avian Buff Effect',
    regex: /(\d+)% increased Aspect of the Avian Buff Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Aspect of the Spider Area of Effect',
    regex: /(\d+)% increased Aspect of the Spider Area of Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Aspect of the Spider Debuff Duration',
    regex: /(\d+)% increased Aspect of the Spider Debuff Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack and Cast Speed during Onslaught',
    regex: /(\d+)% increased Attack and Cast Speed during Onslaught/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack and Cast Speed if Corrupted',
    regex: /(\d+)% increased Attack and Cast Speed if Corrupted/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack and Cast Speed if you\'ve used a Movement Skill Recently',
    regex: /(\d+)% increased Attack and Cast Speed if you've used a Movement Skill Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack and Cast Speed per Endurance Charge',
    regex: /(\d+)% increased Attack and Cast Speed per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack and Cast Speed per Power Charge',
    regex: /(\d+)% increased Attack and Cast Speed per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack and Cast Speed per Summoned Raging Spirit',
    regex: /(\d+)% increased Attack and Cast Speed per Summoned Raging Spirit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack and Movement Speed while you have a Bestial Minion',
    regex: /(\d+)% increased Attack and Movement Speed while you have a Bestial Minion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack and Movement Speed with Her Blessing',
    regex: /(\d+)% increased Attack and Movement Speed with Her Blessing/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Critical Strike Chance per 200 Accuracy Rating',
    regex: /(\d+)% increased Attack Critical Strike Chance per 200 Accuracy Rating/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Damage against Bleeding Enemies',
    regex: /(\d+)% increased Attack Damage against Bleeding Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Damage for each Map Item Modifier affecting the Area',
    regex: /(\d+)% increased Attack Damage for each Map Item Modifier affecting the Area/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Damage if Corrupted',
    regex: /(\d+)% increased Attack Damage if Corrupted/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Damage if your other Ring is a Shaper Item',
    regex: /(\d+)% increased Attack Damage if your other Ring is a Shaper Item/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Damage per 450 Evasion Rating',
    regex: /(\d+)% increased Attack Damage per 450 Evasion Rating/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Damage per 500 Maximum Mana',
    regex: /(\d+)% increased Attack Damage per 500 Maximum Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Damage per Level',
    regex: /(\d+)% increased Attack Damage per Level/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Damage while affected by Precision',
    regex: /(\d+)% increased Attack Damage while affected by Precision/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Physical Damage while using Pride',
    regex: /(\d+)% increased Attack Physical Damage while using Pride/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Speed for each Map Item Modifier affecting the Area',
    regex: /(\d+)% increased Attack Speed for each Map Item Modifier affecting the Area/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Speed per 10 Dexterity',
    regex: /(\d+)% increased Attack Speed per 10 Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Speed per 25 Dexterity',
    regex: /(\d+)% increased Attack Speed per 25 Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Speed per Frenzy Charge',
    regex: /(\d+)% increased Attack Speed per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Speed when on Full Life',
    regex: /(\d+)% increased Attack Speed when on Full Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Speed when on Low Life',
    regex: /(\d+)% increased Attack Speed when on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Speed while affected by Precision',
    regex: /(\d+)% increased Attack Speed while affected by Precision/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Speed while Ignited',
    regex: /(\d+)% increased Attack Speed while Ignited/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack Speed with Movement Skills',
    regex: /(\d+)% increased Attack Speed with Movement Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attack, Cast and Movement Speed while you do not have Iron Reflexes',
    regex: /(\d+)% increased Attack, Cast and Movement Speed while you do not have Iron Reflexes/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attribute Requirements',
    regex: /(\d+)% increased Attribute Requirements/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Attributes per allocated Keystone',
    regex: /(\d+)% increased Attributes per allocated Keystone/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Bleeding Duration per 12 Intelligence',
    regex: /(\d+)% increased Bleeding Duration per 12 Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Block Recovery',
    regex: /(\d+)% increased Block Recovery/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Brand Attachment range',
    regex: /(\d+)% increased Brand Attachment range/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Burning Damage for each time you have Shocked a Non-Shocked Enemy Recently',
    regex: /(\d+)% increased Burning Damage for each time you have Shocked a Non-Shocked Enemy Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Burning Damage if you\'ve Ignited an Enemy Recently',
    regex: /(\d+)% increased Burning Damage if you've Ignited an Enemy Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Cast Speed for each corpse Consumed Recently',
    regex: /(\d+)% increased Cast Speed for each corpse Consumed Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Cast Speed per Power Charge',
    regex: /(\d+)% increased Cast Speed per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Cast Speed when on Full Life',
    regex: /(\d+)% increased Cast Speed when on Full Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Cast Speed when on Low Life',
    regex: /(\d+)% increased Cast Speed when on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Cast Speed while affected by Zealotry',
    regex: /(\d+)% increased Cast Speed while affected by Zealotry/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Cast Speed while Ignited',
    regex: /(\d+)% increased Cast Speed while Ignited/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Chaos Damage per 10 Intelligence from Allocated Passives in Radius',
    regex: /(\d+)% increased Chaos Damage per 10 Intelligence from Allocated Passives in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Chaos Damage per Level',
    regex: /(\d+)% increased Chaos Damage per Level/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Chaos Damage while affected by Herald of Agony',
    regex: /(\d+)% increased Chaos Damage while affected by Herald of Agony/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Chaos Damage with Attack Skills',
    regex: /(\d+)% increased Chaos Damage with Attack Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Chaos Damage with Spell Skills',
    regex: /(\d+)% increased Chaos Damage with Spell Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Character Size',
    regex: /(\d+)% increased Character Size/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Chill Duration on Enemies',
    regex: /(\d+)% increased Chill Duration on Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Chill Duration on Enemies when in Off Hand',
    regex: /(\d+)% increased Chill Duration on Enemies when in Off Hand/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Chill Duration on you',
    regex: /(\d+)% increased Chill Duration on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Claw Physical Damage when on Low Life',
    regex: /(\d+)% increased Claw Physical Damage when on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Cold Damage if you have used a Fire Skill Recently',
    regex: /(\d+)% increased Cold Damage if you have used a Fire Skill Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Cold Damage per 1% Chance to Block Attack Damage',
    regex: /(\d+)% increased Cold Damage per 1% Chance to Block Attack Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Cold Damage per 1% Cold Resistance above 75%',
    regex: /(\d+)% increased Cold Damage per 1% Cold Resistance above 75%/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Cold Damage per Frenzy Charge',
    regex: /(\d+)% increased Cold Damage per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Cold Damage while affected by Hatred',
    regex: /(\d+)% increased Cold Damage while affected by Hatred/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Cold Damage while affected by Herald of Ice',
    regex: /(\d+)% increased Cold Damage while affected by Herald of Ice/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Cold Damage while your Off Hand is empty',
    regex: /(\d+)% increased Cold Damage while your Off Hand is empty/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Cold Damage with Attack Skills',
    regex: /(\d+)% increased Cold Damage with Attack Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Cold Damage with Spell Skills',
    regex: /(\d+)% increased Cold Damage with Spell Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Conductivity Curse Effect',
    regex: /(\d+)% increased Conductivity Curse Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Cooldown Recovery of Travel Skills per Frenzy Charge',
    regex: /(\d+)% increased Cooldown Recovery of Travel Skills per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased cooldown recovery speed of Movement Skills used while affected by Haste',
    regex: /(\d+)% increased cooldown recovery speed of Movement Skills used while affected by Haste/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Critical Strike Chance against Chilled Enemies',
    regex: /(\d+)% increased Critical Strike Chance against Chilled Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Critical Strike Chance against Enemies on Consecrated Ground while affected by Zealotry',
    regex: /(\d+)% increased Critical Strike Chance against Enemies on Consecrated Ground while affected by Zealotry/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Critical Strike Chance against Enemies on Full Life',
    regex: /(\d+)% increased Critical Strike Chance against Enemies on Full Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Critical Strike Chance for Spells if you\'ve Killed Recently',
    regex: /(\d+)% increased Critical Strike Chance for Spells if you've Killed Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Critical Strike Chance for Spells per 100 Player Maximum Life',
    regex: /(\d+)% increased Critical Strike Chance for Spells per 100 Player Maximum Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Critical Strike Chance for Spells per Raised Spectre',
    regex: /(\d+)% increased Critical Strike Chance for Spells per Raised Spectre/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Critical Strike Chance for Spells while Dual Wielding',
    regex: /(\d+)% increased Critical Strike Chance for Spells while Dual Wielding/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Critical Strike Chance for Spells while holding a Shield',
    regex: /(\d+)% increased Critical Strike Chance for Spells while holding a Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Critical Strike Chance for Spells while wielding a Staff',
    regex: /(\d+)% increased Critical Strike Chance for Spells while wielding a Staff/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Critical Strike Chance per 8 Strength',
    regex: /(\d+)% increased Critical Strike Chance per 8 Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Critical Strike Chance per Endurance Charge',
    regex: /(\d+)% increased Critical Strike Chance per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Critical Strike Chance per Frenzy Charge',
    regex: /(\d+)% increased Critical Strike Chance per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Critical Strike Chance while affected by Wrath',
    regex: /(\d+)% increased Critical Strike Chance while affected by Wrath/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Critical Strike Chance while you have at least 200 Intelligence',
    regex: /(\d+)% increased Critical Strike Chance while you have at least 200 Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Critical Strike Chance while you have Avatar of Fire',
    regex: /(\d+)% increased Critical Strike Chance while you have Avatar of Fire/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Critical Strike Chance with arrows that Fork',
    regex: /(\d+)% increased Critical Strike Chance with arrows that Fork/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage against Ignited Enemies',
    regex: /(\d+)% increased Damage against Ignited Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage for each Magic Item Equipped',
    regex: /(\d+)% increased Damage for each Magic Item Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage for each type of Abyss Jewel affecting you',
    regex: /(\d+)% increased Damage for each type of Abyss Jewel affecting you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage if Corrupted',
    regex: /(\d+)% increased Damage if Corrupted/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage if you have Shocked an Enemy Recently',
    regex: /(\d+)% increased Damage if you have Shocked an Enemy Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage if you Summoned a Golem in the past 8 seconds',
    regex: /(\d+)% increased Damage if you Summoned a Golem in the past 8 seconds/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage if you\'ve Frozen an Enemy Recently',
    regex: /(\d+)% increased Damage if you've Frozen an Enemy Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage on Burning Ground',
    regex: /(\d+)% increased Damage on Burning Ground/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage per 5 of your lowest Attribute',
    regex: /(\d+)% increased Damage per 5 of your lowest Attribute/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage per Crab Barrier',
    regex: /(\d+)% increased Damage per Crab Barrier/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage per Curse on you',
    regex: /(\d+)% increased Damage per Curse on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage per Endurance Charge',
    regex: /(\d+)% increased Damage per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage per Frenzy Charge',
    regex: /(\d+)% increased Damage per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage per Frenzy Charge with Hits against Enemies on Low Life',
    regex: /(\d+)% increased Damage per Frenzy Charge with Hits against Enemies on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage per Power Charge with Hits against Enemies on Full Life',
    regex: /(\d+)% increased Damage per Power Charge with Hits against Enemies on Full Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage per Power Charge with Hits against Enemies on Low Life',
    regex: /(\d+)% increased Damage per Power Charge with Hits against Enemies on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage per Raised Zombie',
    regex: /(\d+)% increased Damage per Raised Zombie/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage taken',
    regex: /(\d+)% increased Damage taken/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage taken from Ghosts',
    regex: /(\d+)% increased Damage taken from Ghosts/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage taken from Melee Attacks',
    regex: /(\d+)% increased Damage taken from Melee Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage taken from Skeletons',
    regex: /(\d+)% increased Damage taken from Skeletons/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage taken if you\'ve taken a Savage Hit Recently',
    regex: /(\d+)% increased Damage taken if you've taken a Savage Hit Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage taken per Frenzy Charge',
    regex: /(\d+)% increased Damage taken per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage taken while on Full Energy Shield',
    regex: /(\d+)% increased Damage taken while on Full Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage when on Low Life',
    regex: /(\d+)% increased Damage when on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage when you have no Energy Shield',
    regex: /(\d+)% increased Damage when you have no Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage while Ignited',
    regex: /(\d+)% increased Damage while Ignited/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage while Leeching',
    regex: /(\d+)% increased Damage while Leeching/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage while Leeching Life',
    regex: /(\d+)% increased Damage while Leeching Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage while Leeching Mana',
    regex: /(\d+)% increased Damage while Leeching Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage while on Consecrated Ground',
    regex: /(\d+)% increased Damage while on Consecrated Ground/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage while Shocked',
    regex: /(\d+)% increased Damage while Shocked/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage while you have no Frenzy Charges',
    regex: /(\d+)% increased Damage while you have no Frenzy Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Ailments per Elder Item Equipped',
    regex: /(\d+)% increased Damage with Ailments per Elder Item Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Brand Skills per 10 Devotion',
    regex: /(\d+)% increased Damage with Brand Skills per 10 Devotion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Hits against Frozen Enemies',
    regex: /(\d+)% increased Damage with Hits against Frozen Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Hits against Rare monsters',
    regex: /(\d+)% increased Damage with Hits against Rare monsters/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Hits against Shocked Enemies',
    regex: /(\d+)% increased Damage with Hits against Shocked Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Hits and Ailments against Bleeding Enemies',
    regex: /(\d+)% increased Damage with Hits and Ailments against Bleeding Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Hits and Ailments against Blinded Enemies',
    regex: /(\d+)% increased Damage with Hits and Ailments against Blinded Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Hits and Ailments against Chilled Enemies',
    regex: /(\d+)% increased Damage with Hits and Ailments against Chilled Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Hits and Ailments against Enemies affected by 3 Spider\'s Webs',
    regex: /(\d+)% increased Damage with Hits and Ailments against Enemies affected by 3 Spider's Webs/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Hits and Ailments against Hindered Enemies',
    regex: /(\d+)% increased Damage with Hits and Ailments against Hindered Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Hits and Ailments per Freeze, Shock and Ignite on Enemy',
    regex: /(\d+)% increased Damage with Hits and Ailments per Freeze, Shock and Ignite on Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Hits for each Level higher the Enemy is than you',
    regex: /(\d+)% increased Damage with Hits for each Level higher the Enemy is than you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Ignite inflicted on Chilled Enemies',
    regex: /(\d+)% increased Damage with Ignite inflicted on Chilled Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Movement Skills',
    regex: /(\d+)% increased Damage with Movement Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Poison if you have at least 300 Dexterity',
    regex: /(\d+)% increased Damage with Poison if you have at least 300 Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Poison per Frenzy Charge',
    regex: /(\d+)% increased Damage with Poison per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Poison per Power Charge',
    regex: /(\d+)% increased Damage with Poison per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Damage with Unarmed Attacks against Bleeding Enemies',
    regex: /(\d+)% increased Damage with Unarmed Attacks against Bleeding Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Defences from Equipped Shield per 10 Devotion',
    regex: /(\d+)% increased Defences from Equipped Shield per 10 Devotion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Dexterity if Strength is higher than Intelligence',
    regex: /(\d+)% increased Dexterity if Strength is higher than Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Duration of Ailments on Enemies',
    regex: /(\d+)% increased Duration of Ailments on Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Duration of Curses on you',
    regex: /(\d+)% increased Duration of Curses on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Duration of Elemental Ailments on Enemies',
    regex: /(\d+)% increased Duration of Elemental Ailments on Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Duration of Shrine Effects on you',
    regex: /(\d+)% increased Duration of Shrine Effects on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Effect of Auras on your Minions',
    regex: /(\d+)% increased Effect of Auras on your Minions/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Effect of Buffs granted by Socketed Golem Skills',
    regex: /(\d+)% increased Effect of Buffs granted by Socketed Golem Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Effect of Buffs granted by your Golems',
    regex: /(\d+)% increased Effect of Buffs granted by your Golems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Effect of Buffs on you',
    regex: /(\d+)% increased Effect of Buffs on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Effect of Chilled Ground',
    regex: /(\d+)% increased Effect of Chilled Ground/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Effect of Curses on you',
    regex: /(\d+)% increased Effect of Curses on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Effect of Elusive on you per Power Charge',
    regex: /(\d+)% increased Effect of Elusive on you per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased effect of Non-Curse Auras from your Skills',
    regex: /(\d+)% increased effect of Non-Curse Auras from your Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased effect of Non-Curse Auras per 10 Devotion',
    regex: /(\d+)% increased effect of Non-Curse Auras per 10 Devotion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Effect of non-Damaging Ailments on Enemies',
    regex: /(\d+)% increased Effect of non-Damaging Ailments on Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Effect of non-Damaging Ailments on Enemies per 10 Devotion',
    regex: /(\d+)% increased Effect of non-Damaging Ailments on Enemies per 10 Devotion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Effect of non-Damaging Ailments per Elder Item Equipped',
    regex: /(\d+)% increased Effect of non-Damaging Ailments per Elder Item Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Effect of non-Keystone Passive Skills in Radius',
    regex: /(\d+)% increased Effect of non-Keystone Passive Skills in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Effect of Shrine Buffs on you',
    regex: /(\d+)% increased Effect of Shrine Buffs on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Effect of Socketed Jewels',
    regex: /(\d+)% increased Effect of Socketed Jewels/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Elemental Ailment Duration on you',
    regex: /(\d+)% increased Elemental Ailment Duration on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Elemental Damage if you\'ve Killed a Cursed Enemy Recently',
    regex: /(\d+)% increased Elemental Damage if you've Killed a Cursed Enemy Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Elemental Damage if you\'ve used a Warcry Recently',
    regex: /(\d+)% increased Elemental Damage if you've used a Warcry Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Elemental Damage per 10 Devotion',
    regex: /(\d+)% increased Elemental Damage per 10 Devotion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Elemental Damage per 10 Dexterity',
    regex: /(\d+)% increased Elemental Damage per 10 Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Elemental Damage per Frenzy Charge',
    regex: /(\d+)% increased Elemental Damage per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Elemental Damage per Grand Spectrum',
    regex: /(\d+)% increased Elemental Damage per Grand Spectrum/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Elemental Damage per Level',
    regex: /(\d+)% increased Elemental Damage per Level/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Elemental Damage per Sextant affecting the area',
    regex: /(\d+)% increased Elemental Damage per Sextant affecting the area/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Elemental Damage while in an area affected by a Sextant',
    regex: /(\d+)% increased Elemental Damage while in an area affected by a Sextant/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Elemental Damage with Attack Skills during any Flask Effect',
    regex: /(\d+)% increased Elemental Damage with Attack Skills during any Flask Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Elemental Damage with Attack Skills per Power Charge',
    regex: /(\d+)% increased Elemental Damage with Attack Skills per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Elemental Weakness Curse Effect',
    regex: /(\d+)% increased Elemental Weakness Curse Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Endurance, Frenzy and Power Charge Duration',
    regex: /(\d+)% increased Endurance, Frenzy and Power Charge Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Energy Shield per 10 Strength',
    regex: /(\d+)% increased Energy Shield per 10 Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Energy Shield per Power Charge',
    regex: /(\d+)% increased Energy Shield per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Energy Shield Recharge Rate during any Flask Effect',
    regex: /(\d+)% increased Energy Shield Recharge Rate during any Flask Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Energy Shield Recovery Rate while affected by Discipline',
    regex: /(\d+)% increased Energy Shield Recovery Rate while affected by Discipline/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Evasion Rating during Onslaught',
    regex: /(\d+)% increased Evasion Rating during Onslaught/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Evasion Rating if you have been Hit Recently',
    regex: /(\d+)% increased Evasion Rating if you have been Hit Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Evasion Rating per 10 Intelligence',
    regex: /(\d+)% increased Evasion Rating per 10 Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Evasion Rating per Frenzy Charge',
    regex: /(\d+)% increased Evasion Rating per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Experience Gain for Corrupted Gems',
    regex: /(\d+)% increased Experience Gain for Corrupted Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Fire Damage if you have used a Cold Skill Recently',
    regex: /(\d+)% increased Fire Damage if you have used a Cold Skill Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Fire Damage per 20 Strength',
    regex: /(\d+)% increased Fire Damage per 20 Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Fire Damage taken',
    regex: /(\d+)% increased Fire Damage taken/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Fire Damage while affected by Anger',
    regex: /(\d+)% increased Fire Damage while affected by Anger/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Fire Damage while affected by Herald of Ash',
    regex: /(\d+)% increased Fire Damage while affected by Herald of Ash/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Fire Damage with Attack Skills',
    regex: /(\d+)% increased Fire Damage with Attack Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Fire Damage with Hits and Ailments against Bleeding Enemies',
    regex: /(\d+)% increased Fire Damage with Hits and Ailments against Bleeding Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Fire Damage with Hits and Ailments against Blinded Enemies',
    regex: /(\d+)% increased Fire Damage with Hits and Ailments against Blinded Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Fire Damage with Spell Skills',
    regex: /(\d+)% increased Fire Damage with Spell Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Fish Bite Sensitivity',
    regex: /(\d+)% increased Fish Bite Sensitivity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Flammability Curse Effect',
    regex: /(\d+)% increased Flammability Curse Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Flask Charges gained during any Flask Effect',
    regex: /(\d+)% increased Flask Charges gained during any Flask Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Freeze Duration on you',
    regex: /(\d+)% increased Freeze Duration on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Frostbite Curse Effect',
    regex: /(\d+)% increased Frostbite Curse Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Global Armour while you have no Energy Shield',
    regex: /(\d+)% increased Global Armour while you have no Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Global Attack Speed per Green Socket',
    regex: /(\d+)% increased Global Attack Speed per Green Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Global Critical Strike Chance if Corrupted',
    regex: /(\d+)% increased Global Critical Strike Chance if Corrupted/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Global Critical Strike Chance per Level',
    regex: /(\d+)% increased Global Critical Strike Chance per Level/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Global Critical Strike Chance when in Main Hand',
    regex: /(\d+)% increased Global Critical Strike Chance when in Main Hand/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Global Damage',
    regex: /(\d+)% increased Global Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Global Defences per White Socket',
    regex: /(\d+)% increased Global Defences per White Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Global Evasion Rating when on Low Life',
    regex: /(\d+)% increased Global Evasion Rating when on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Global Physical Damage while Frozen',
    regex: /(\d+)% increased Global Physical Damage while Frozen/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Global Physical Damage with Weapons per Red Socket',
    regex: /(\d+)% increased Global Physical Damage with Weapons per Red Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Golem Damage for each Type of Golem you have Summoned',
    regex: /(\d+)% increased Golem Damage for each Type of Golem you have Summoned/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Herald of Ice Damage',
    regex: /(\d+)% increased Herald of Ice Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Ignite Duration on you',
    regex: /(\d+)% increased Ignite Duration on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Intelligence for each Unique Item Equipped',
    regex: /(\d+)% increased Intelligence for each Unique Item Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Intelligence Requirement',
    regex: /(\d+)% increased Intelligence Requirement/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Item Quantity per White Socket',
    regex: /(\d+)% increased Item Quantity per White Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Life Recovery from Flasks while affected by Vitality',
    regex: /(\d+)% increased Life Recovery from Flasks while affected by Vitality/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Life Recovery Rate while affected by Vitality',
    regex: /(\d+)% increased Life Recovery Rate while affected by Vitality/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Lightning Damage per 1% Lightning Resistance above 75%',
    regex: /(\d+)% increased Lightning Damage per 1% Lightning Resistance above 75%/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Lightning Damage per 10 Intelligence',
    regex: /(\d+)% increased Lightning Damage per 10 Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Lightning Damage per Frenzy Charge',
    regex: /(\d+)% increased Lightning Damage per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Lightning Damage taken',
    regex: /(\d+)% increased Lightning Damage taken/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Lightning Damage while affected by Herald of Thunder',
    regex: /(\d+)% increased Lightning Damage while affected by Herald of Thunder/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Lightning Damage while affected by Wrath',
    regex: /(\d+)% increased Lightning Damage while affected by Wrath/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Lightning Damage with Attack Skills',
    regex: /(\d+)% increased Lightning Damage with Attack Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Lightning Damage with Spell Skills',
    regex: /(\d+)% increased Lightning Damage with Spell Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Mana Cost of Skills',
    regex: /(\d+)% increased Mana Cost of Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Mana Cost of Skills for each 200 total Mana you have Spent Recently',
    regex: /(\d+)% increased Mana Cost of Skills for each 200 total Mana you have Spent Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Mana Recovery from Flasks',
    regex: /(\d+)% increased Mana Recovery from Flasks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Mana Recovery Rate while affected by Clarity',
    regex: /(\d+)% increased Mana Recovery Rate while affected by Clarity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Mana Regeneration Rate during any Flask Effect',
    regex: /(\d+)% increased Mana Regeneration Rate during any Flask Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Mana Regeneration Rate per Power Charge',
    regex: /(\d+)% increased Mana Regeneration Rate per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Mana Regeneration Rate per Raised Spectre',
    regex: /(\d+)% increased Mana Regeneration Rate per Raised Spectre/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Mana Regeneration Rate while stationary',
    regex: /(\d+)% increased Mana Regeneration Rate while stationary/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Mana Reserved',
    regex: /(\d+)% increased Mana Reserved/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Maximum Energy Shield for each Corrupted Item Equipped',
    regex: /(\d+)% increased Maximum Energy Shield for each Corrupted Item Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased maximum Energy Shield if Corrupted',
    regex: /(\d+)% increased maximum Energy Shield if Corrupted/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Maximum Life for each Corrupted Item Equipped',
    regex: /(\d+)% increased Maximum Life for each Corrupted Item Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased maximum Life if Corrupted',
    regex: /(\d+)% increased maximum Life if Corrupted/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Maximum Life if no Equipped Items are Corrupted',
    regex: /(\d+)% increased Maximum Life if no Equipped Items are Corrupted/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Maximum Life per Abyss Jewel affecting you',
    regex: /(\d+)% increased Maximum Life per Abyss Jewel affecting you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Maximum Mana per 2% Chance to Block Spell Damage',
    regex: /(\d+)% increased Maximum Mana per 2% Chance to Block Spell Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Maximum Mana per Abyss Jewel affecting you',
    regex: /(\d+)% increased Maximum Mana per Abyss Jewel affecting you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Maximum total Recovery per second from Energy Shield Leech',
    regex: /(\d+)% increased Maximum total Recovery per second from Energy Shield Leech/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Maximum total Recovery per second from Energy Shield Leech while affected by Zealotry',
    regex: /(\d+)% increased Maximum total Recovery per second from Energy Shield Leech while affected by Zealotry/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Maximum total Recovery per second from Mana Leech',
    regex: /(\d+)% increased Maximum total Recovery per second from Mana Leech/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Melee Damage against Bleeding Enemies',
    regex: /(\d+)% increased Melee Damage against Bleeding Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Melee Damage against Frozen Enemies',
    regex: /(\d+)% increased Melee Damage against Frozen Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Melee Damage against Ignited Enemies',
    regex: /(\d+)% increased Melee Damage against Ignited Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Melee Damage against Shocked Enemies',
    regex: /(\d+)% increased Melee Damage against Shocked Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Melee Damage per Endurance Charge',
    regex: /(\d+)% increased Melee Damage per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Melee Damage when on Full Life',
    regex: /(\d+)% increased Melee Damage when on Full Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Melee Physical Damage against Ignited Enemies',
    regex: /(\d+)% increased Melee Physical Damage against Ignited Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Melee Physical Damage per 10 Dexterity',
    regex: /(\d+)% increased Melee Physical Damage per 10 Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Minion Attack and Cast Speed per 10 Devotion',
    regex: /(\d+)% increased Minion Attack and Cast Speed per 10 Devotion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Minion Attack and Cast Speed per Skeleton you own',
    regex: /(\d+)% increased Minion Attack and Cast Speed per Skeleton you own/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Minion Attack Speed per 50 Dexterity',
    regex: /(\d+)% increased Minion Attack Speed per 50 Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Minion Damage per Raised Spectre',
    regex: /(\d+)% increased Minion Damage per Raised Spectre/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Minion Duration per Raised Zombie',
    regex: /(\d+)% increased Minion Duration per Raised Zombie/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Minion Movement Speed per 50 Dexterity',
    regex: /(\d+)% increased Minion Movement Speed per 50 Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Monster Damage',
    regex: /(\d+)% increased Monster Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Skill Mana Cost',
    regex: /(\d+)% increased Movement Skill Mana Cost/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed for # seconds on Throwing a Trap',
    regex: /(\d+)% increased Movement Speed for (\d+) seconds on Throwing a Trap/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed for you and nearby Allies',
    regex: /(\d+)% increased Movement Speed for you and nearby Allies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed if Corrupted',
    regex: /(\d+)% increased Movement Speed if Corrupted/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed if you have used a Vaal Skill Recently',
    regex: /(\d+)% increased Movement Speed if you have used a Vaal Skill Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed if you\'ve used a Warcry Recently',
    regex: /(\d+)% increased Movement Speed if you've used a Warcry Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed on Shocked Ground',
    regex: /(\d+)% increased Movement Speed on Shocked Ground/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed per 10 Dexterity on Allocated Passives in Radius',
    regex: /(\d+)% increased Movement Speed per 10 Dexterity on Allocated Passives in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed per Endurance Charge',
    regex: /(\d+)% increased Movement Speed per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed per Frenzy Charge',
    regex: /(\d+)% increased Movement Speed per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed per Power Charge',
    regex: /(\d+)% increased Movement Speed per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed when on Full Life',
    regex: /(\d+)% increased Movement Speed when on Full Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed when on Low Life',
    regex: /(\d+)% increased Movement Speed when on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed while affected by Grace',
    regex: /(\d+)% increased Movement Speed while affected by Grace/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed while Bleeding',
    regex: /(\d+)% increased Movement Speed while Bleeding/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed while Cursed',
    regex: /(\d+)% increased Movement Speed while Cursed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed while Ignited',
    regex: /(\d+)% increased Movement Speed while Ignited/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed while on Full Energy Shield',
    regex: /(\d+)% increased Movement Speed while on Full Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed while Phasing',
    regex: /(\d+)% increased Movement Speed while Phasing/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed while Shocked',
    regex: /(\d+)% increased Movement Speed while Shocked/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Movement Speed while you have Cat\'s Stealth',
    regex: /(\d+)% increased Movement Speed while you have Cat's Stealth/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Onslaught Effect',
    regex: /(\d+)% increased Onslaught Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage Over Time per 10 Dexterity',
    regex: /(\d+)% increased Physical Damage Over Time per 10 Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage per Endurance Charge',
    regex: /(\d+)% increased Physical Damage per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage taken while moving',
    regex: /(\d+)% increased Physical Damage taken while moving/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage while affected by Herald of Purity',
    regex: /(\d+)% increased Physical Damage while affected by Herald of Purity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage while you have Resolute Technique',
    regex: /(\d+)% increased Physical Damage while you have Resolute Technique/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage while you have Unholy Might',
    regex: /(\d+)% increased Physical Damage while you have Unholy Might/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage with Attack Skills',
    regex: /(\d+)% increased Physical Damage with Attack Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage with Axes',
    regex: /(\d+)% increased Physical Damage with Axes/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage with Bows',
    regex: /(\d+)% increased Physical Damage with Bows/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage with Claws',
    regex: /(\d+)% increased Physical Damage with Claws/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage with Daggers',
    regex: /(\d+)% increased Physical Damage with Daggers/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage with Hits and Ailments against Ignited Enemies',
    regex: /(\d+)% increased Physical Damage with Hits and Ailments against Ignited Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage with Maces and Sceptres',
    regex: /(\d+)% increased Physical Damage with Maces and Sceptres/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage with Ranged Weapons',
    regex: /(\d+)% increased Physical Damage with Ranged Weapons/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage with Spell Skills',
    regex: /(\d+)% increased Physical Damage with Spell Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage with Staves',
    regex: /(\d+)% increased Physical Damage with Staves/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage with Swords',
    regex: /(\d+)% increased Physical Damage with Swords/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Damage with Wands',
    regex: /(\d+)% increased Physical Damage with Wands/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Physical Weapon Damage per 10 Strength',
    regex: /(\d+)% increased Physical Weapon Damage per 10 Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Poison Duration if you have at least 150 Intelligence',
    regex: /(\d+)% increased Poison Duration if you have at least 150 Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Poison Duration per Power Charge',
    regex: /(\d+)% increased Poison Duration per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Projectile Attack Damage while you have at least 200 Dexterity',
    regex: /(\d+)% increased Projectile Attack Damage while you have at least 200 Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Projectile Damage per Power Charge',
    regex: /(\d+)% increased Projectile Damage per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Projectile Speed per Frenzy Charge',
    regex: /(\d+)% increased Projectile Speed per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Quantity of Items Dropped by Slain Frozen Enemies',
    regex: /(\d+)% increased Quantity of Items Dropped by Slain Frozen Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Quantity of Items Dropped by Slain Maimed Enemies',
    regex: /(\d+)% increased Quantity of Items Dropped by Slain Maimed Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Quantity of Items Dropped by Slain Normal Enemies',
    regex: /(\d+)% increased Quantity of Items Dropped by Slain Normal Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Quantity of Items found per Chest opened Recently',
    regex: /(\d+)% increased Quantity of Items found per Chest opened Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Quantity of Items found when on Low Life',
    regex: /(\d+)% increased Quantity of Items found when on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Quantity of Items found with a Magic Item Equipped',
    regex: /(\d+)% increased Quantity of Items found with a Magic Item Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Raised Zombie Size',
    regex: /(\d+)% increased Raised Zombie Size/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Rarity of Items Dropped by Enemies killed with a Critical Strike',
    regex: /(\d+)% increased Rarity of Items Dropped by Enemies killed with a Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Rarity of Items Dropped by Frozen Enemies',
    regex: /(\d+)% increased Rarity of Items Dropped by Frozen Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Rarity of Items Dropped by Slain Magic Enemies',
    regex: /(\d+)% increased Rarity of Items Dropped by Slain Magic Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Rarity of Items Dropped by Slain Maimed Enemies',
    regex: /(\d+)% increased Rarity of Items Dropped by Slain Maimed Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Rarity of Items Dropped by Slain Shocked Enemies',
    regex: /(\d+)% increased Rarity of Items Dropped by Slain Shocked Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Rarity of Items found when on Low Life',
    regex: /(\d+)% increased Rarity of Items found when on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Rarity of Items found with a Normal Item Equipped',
    regex: /(\d+)% increased Rarity of Items found with a Normal Item Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Recovery rate of Life and Energy Shield per Power Charge',
    regex: /(\d+)% increased Recovery rate of Life and Energy Shield per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Recovery rate of Life and Energy Shield while affected by Malevolence',
    regex: /(\d+)% increased Recovery rate of Life and Energy Shield while affected by Malevolence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Scorching Ray beam length',
    regex: /(\d+)% increased Scorching Ray beam length/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Shock Duration on you',
    regex: /(\d+)% increased Shock Duration on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Skeleton Attack Speed',
    regex: /(\d+)% increased Skeleton Attack Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Skeleton Cast Speed',
    regex: /(\d+)% increased Skeleton Cast Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Skeleton Duration',
    regex: /(\d+)% increased Skeleton Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Skeleton Movement Speed',
    regex: /(\d+)% increased Skeleton Movement Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Skill Effect Duration while affected by Malevolence',
    regex: /(\d+)% increased Skill Effect Duration while affected by Malevolence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Spell Damage for each 200 total Mana you have Spent Recently, up to 2000%',
    regex: /(\d+)% increased Spell Damage for each 200 total Mana you have Spent Recently, up to 2000%/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Spell Damage if Corrupted',
    regex: /(\d+)% increased Spell Damage if Corrupted/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Spell Damage if you\'ve dealt a Critical Strike in the past 8 seconds',
    regex: /(\d+)% increased Spell Damage if you've dealt a Critical Strike in the past 8 seconds/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Spell Damage if you\'ve dealt a Critical Strike Recently',
    regex: /(\d+)% increased Spell Damage if you've dealt a Critical Strike Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Spell Damage if your other Ring is an Elder Item',
    regex: /(\d+)% increased Spell Damage if your other Ring is an Elder Item/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Spell Damage per 100 Player Maximum Life',
    regex: /(\d+)% increased Spell Damage per 100 Player Maximum Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Spell Damage per 5% Chance to Block Attack Damage',
    regex: /(\d+)% increased Spell Damage per 5% Chance to Block Attack Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Spell Damage per 500 Maximum Mana',
    regex: /(\d+)% increased Spell Damage per 500 Maximum Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Spell Damage per Level',
    regex: /(\d+)% increased Spell Damage per Level/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Spell Damage per Power Charge',
    regex: /(\d+)% increased Spell Damage per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Spell Damage taken when on Low Mana',
    regex: /(\d+)% increased Spell Damage taken when on Low Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Spell Damage while no Mana is Reserved',
    regex: /(\d+)% increased Spell Damage while no Mana is Reserved/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Spell Damage while Shocked',
    regex: /(\d+)% increased Spell Damage while Shocked/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Strength Requirement',
    regex: /(\d+)% increased Strength Requirement/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Stun Duration on you',
    regex: /(\d+)% increased Stun Duration on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Taunt Duration',
    regex: /(\d+)% increased Taunt Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased total Recovery per second from Mana Leech',
    regex: /(\d+)% increased total Recovery per second from Mana Leech/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Totem Damage per 10 Devotion',
    regex: /(\d+)% increased Totem Damage per 10 Devotion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Totem Life per 10 Strength Allocated in Radius',
    regex: /(\d+)% increased Totem Life per 10 Strength Allocated in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Trap Trigger Area of Effect',
    regex: /(\d+)% increased Trap Trigger Area of Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Vulnerability Curse Effect',
    regex: /(\d+)% increased Vulnerability Curse Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Warcry Buff Effect',
    regex: /(\d+)% increased Warcry Buff Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% increased Warcry Cooldown Recovery Speed',
    regex: /(\d+)% increased Warcry Cooldown Recovery Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% less Animate Weapon Duration',
    regex: /(\d+)% less Animate Weapon Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% less Critical Strike Chance',
    regex: /(\d+)% less Critical Strike Chance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% less Damage',
    regex: /(\d+)% less Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% less Damage taken if you have not been Hit Recently',
    regex: /(\d+)% less Damage taken if you have not been Hit Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% less Elemental Damage taken per Raised Zombie',
    regex: /(\d+)% less Elemental Damage taken per Raised Zombie/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% less Mine Damage',
    regex: /(\d+)% less Mine Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% less Minimum Physical Attack Damage',
    regex: /(\d+)% less Minimum Physical Attack Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% less Poison Duration',
    regex: /(\d+)% less Poison Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% maximum Critical Strike Chance',
    regex: /(\d+)% maximum Critical Strike Chance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% More Damage with Arrow Hits at Close Range',
    regex: /(\d+)% More Damage with Arrow Hits at Close Range/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% more Damage with Arrow Hits at Close Range while you have Iron Reflexes',
    regex: /(\d+)% more Damage with Arrow Hits at Close Range while you have Iron Reflexes/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% more Maximum Physical Attack Damage',
    regex: /(\d+)% more Maximum Physical Attack Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% more Physical Damage with Unarmed Attacks',
    regex: /(\d+)% more Physical Damage with Unarmed Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Attack Damage Leeched as Life against Bleeding Enemies',
    regex: /(\d+)% of Attack Damage Leeched as Life against Bleeding Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Attack Damage Leeched as Life against Chilled Enemies',
    regex: /(\d+)% of Attack Damage Leeched as Life against Chilled Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Attack Damage Leeched as Life against Maimed Enemies',
    regex: /(\d+)% of Attack Damage Leeched as Life against Maimed Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Attack Damage Leeched as Life against Taunted Enemies',
    regex: /(\d+)% of Attack Damage Leeched as Life against Taunted Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Attack Damage Leeched as Life on Critical Strike',
    regex: /(\d+)% of Attack Damage Leeched as Life on Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Attack Damage Leeched as Life per Frenzy Charge',
    regex: /(\d+)% of Attack Damage Leeched as Life per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Attack Damage Leeched as Mana',
    regex: /(\d+)% of Attack Damage Leeched as Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Attack Damage Leeched as Mana against Poisoned Enemies',
    regex: /(\d+)% of Attack Damage Leeched as Mana against Poisoned Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Attack Damage Leeched as Mana per Power Charge',
    regex: /(\d+)% of Attack Damage Leeched as Mana per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Cold Damage Converted to Fire Damage',
    regex: /(\d+)% of Cold Damage Converted to Fire Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Cold Damage from Hits taken as Fire Damage',
    regex: /(\d+)% of Cold Damage from Hits taken as Fire Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Cold Damage from Hits taken as Lightning Damage',
    regex: /(\d+)% of Cold Damage from Hits taken as Lightning Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage against Frozen Enemies Leeched as Life',
    regex: /(\d+)% of Damage against Frozen Enemies Leeched as Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage against Shocked Enemies Leeched as Mana',
    regex: /(\d+)% of Damage against Shocked Enemies Leeched as Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage dealt by your Mines is Leeched to you as Life',
    regex: /(\d+)% of Damage dealt by your Mines is Leeched to you as Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage dealt by your Totems is Leeched to you as Life',
    regex: /(\d+)% of Damage dealt by your Totems is Leeched to you as Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage from Hits is taken from your Spectres\' Life before you',
    regex: /(\d+)% of Damage from Hits is taken from your Spectres' Life before you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage is taken from Mana before Life per Power Charge',
    regex: /(\d+)% of Damage is taken from Mana before Life per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage Leeched as Energy Shield against Frozen Enemies',
    regex: /(\d+)% of Damage Leeched as Energy Shield against Frozen Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage Leeched as Life',
    regex: /(\d+)% of Damage Leeched as Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage Leeched as Life against Cursed Enemies',
    regex: /(\d+)% of Damage Leeched as Life against Cursed Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage Leeched as Life against Shocked Enemies',
    regex: /(\d+)% of Damage Leeched as Life against Shocked Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage Leeched as Life for Skills used by Totems',
    regex: /(\d+)% of Damage Leeched as Life for Skills used by Totems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage Leeched as Life on Critical Strike',
    regex: /(\d+)% of Damage Leeched as Life on Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage Leeched as Life per Siphoning Charge',
    regex: /(\d+)% of Damage Leeched as Life per Siphoning Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage leeched as Life while affected by Vitality',
    regex: /(\d+)% of Damage leeched as Life while affected by Vitality/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage Leeched as Mana against Frozen Enemies',
    regex: /(\d+)% of Damage Leeched as Mana against Frozen Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage taken from Mana before Life while affected by Clarity',
    regex: /(\d+)% of Damage taken from Mana before Life while affected by Clarity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage taken gained as Life over 4 seconds when Hit',
    regex: /(\d+)% of Damage taken gained as Life over 4 seconds when Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage taken gained as Mana over 4 seconds when Hit while affected by Clarity',
    regex: /(\d+)% of Damage taken gained as Mana over 4 seconds when Hit while affected by Clarity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Damage you Reflect to Enemies when Hit is gained as Life',
    regex: /(\d+)% of Damage you Reflect to Enemies when Hit is gained as Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Elemental Damage from Hits taken as Chaos Damage',
    regex: /(\d+)% of Elemental Damage from Hits taken as Chaos Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Elemental Damage Leeched as Life',
    regex: /(\d+)% of Elemental Damage Leeched as Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Fire Damage Converted to Chaos Damage',
    regex: /(\d+)% of Fire Damage Converted to Chaos Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Fire Damage from Hits taken as Cold Damage',
    regex: /(\d+)% of Fire Damage from Hits taken as Cold Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Fire Damage from Hits taken as Lightning Damage',
    regex: /(\d+)% of Fire Damage from Hits taken as Lightning Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Fire Damage from Hits taken as Physical Damage',
    regex: /(\d+)% of Fire Damage from Hits taken as Physical Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Fire Damage Leeched as Life while affected by Anger',
    regex: /(\d+)% of Fire Damage Leeched as Life while affected by Anger/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Fire Damage Leeched as Life while Ignited',
    regex: /(\d+)% of Fire Damage Leeched as Life while Ignited/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Fire Damage taken causes extra Physical Damage',
    regex: /(\d+)% of Fire Damage taken causes extra Physical Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Life Leech applies to Enemies as Chaos Damage',
    regex: /(\d+)% of Life Leech applies to Enemies as Chaos Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Lightning Damage Converted to Chaos Damage',
    regex: /(\d+)% of Lightning Damage Converted to Chaos Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Lightning Damage Converted to Cold Damage',
    regex: /(\d+)% of Lightning Damage Converted to Cold Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Lightning Damage from Hits taken as Cold Damage',
    regex: /(\d+)% of Lightning Damage from Hits taken as Cold Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Lightning Damage from Hits taken as Fire Damage',
    regex: /(\d+)% of Lightning Damage from Hits taken as Fire Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Lightning Damage is Leeched as Energy Shield while affected by Wrath',
    regex: /(\d+)% of Lightning Damage is Leeched as Energy Shield while affected by Wrath/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Lightning Damage is Leeched as Mana while affected by Wrath',
    regex: /(\d+)% of Lightning Damage is Leeched as Mana while affected by Wrath/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Lightning Damage is taken from Mana before Life',
    regex: /(\d+)% of Lightning Damage is taken from Mana before Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Lightning Damage Leeched as Mana',
    regex: /(\d+)% of Lightning Damage Leeched as Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Maximum Energy Shield taken as Physical Damage on Minion Death',
    regex: /(\d+)% of Maximum Energy Shield taken as Physical Damage on Minion Death/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Maximum Life Converted to Energy Shield',
    regex: /(\d+)% of Maximum Life Converted to Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Melee Physical Damage taken reflected to Attacker',
    regex: /(\d+)% of Melee Physical Damage taken reflected to Attacker/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Attack Damage Leeched as Life and Mana',
    regex: /(\d+)% of Physical Attack Damage Leeched as Life and Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Attack Damage Leeched as Life per Red Socket',
    regex: /(\d+)% of Physical Attack Damage Leeched as Life per Red Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Attack Damage Leeched as Mana per Blue Socket',
    regex: /(\d+)% of Physical Attack Damage Leeched as Mana per Blue Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Attack Damage Leeched as Mana per Power Charge',
    regex: /(\d+)% of Physical Attack Damage Leeched as Mana per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Damage Converted to Cold Damage while affected by Hatred',
    regex: /(\d+)% of Physical Damage Converted to Cold Damage while affected by Hatred/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Damage Converted to Fire Damage against Ignited Enemies',
    regex: /(\d+)% of Physical Damage Converted to Fire Damage against Ignited Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Damage Converted to Fire Damage while affected by Anger',
    regex: /(\d+)% of Physical Damage Converted to Fire Damage while affected by Anger/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Damage Converted to Fire while you have Avatar of Fire',
    regex: /(\d+)% of Physical Damage Converted to Fire while you have Avatar of Fire/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Damage Converted to Lightning Damage while affected by Wrath',
    regex: /(\d+)% of Physical Damage Converted to Lightning Damage while affected by Wrath/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Damage from Hits taken as Cold Damage while affected by Purity of Elements',
    regex: /(\d+)% of Physical Damage from Hits taken as Cold Damage while affected by Purity of Elements/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Damage from Hits taken as Cold Damage while affected by Purity of Ice',
    regex: /(\d+)% of Physical Damage from Hits taken as Cold Damage while affected by Purity of Ice/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Damage from Hits taken as Damage of a Random Element',
    regex: /(\d+)% of Physical Damage from Hits taken as Damage of a Random Element/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Damage from Hits taken as Fire Damage while affected by Purity of Elements',
    regex: /(\d+)% of Physical Damage from Hits taken as Fire Damage while affected by Purity of Elements/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Damage from Hits taken as Fire Damage while affected by Purity of Fire',
    regex: /(\d+)% of Physical Damage from Hits taken as Fire Damage while affected by Purity of Fire/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Damage from Hits taken as Lightning Damage while affected by Purity of Elements',
    regex: /(\d+)% of Physical Damage from Hits taken as Lightning Damage while affected by Purity of Elements/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Damage from Hits taken as Lightning Damage while affected by Purity of Lightning',
    regex: /(\d+)% of Physical Damage from Hits taken as Lightning Damage while affected by Purity of Lightning/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Damage from Hits with this Weapon is Converted to a random Element',
    regex: /(\d+)% of Physical Damage from Hits with this Weapon is Converted to a random Element/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Physical Damage is taken from Mana before Life',
    regex: /(\d+)% of Physical Damage is taken from Mana before Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Spell Damage Leeched as Energy Shield for each Curse on Enemy',
    regex: /(\d+)% of Spell Damage Leeched as Energy Shield for each Curse on Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% of Spell Damage Leeched as Life if Equipped Shield has at least 30% Chance to Block',
    regex: /(\d+)% of Spell Damage Leeched as Life if Equipped Shield has at least 30% Chance to Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Area of Effect of Curse Skills',
    regex: /(\d+)% reduced Area of Effect of Curse Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Attack and Cast Speed',
    regex: /(\d+)% reduced Attack and Cast Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Attack and Cast Speed per Frenzy Charge',
    regex: /(\d+)% reduced Attack and Cast Speed per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Attack Speed',
    regex: /(\d+)% reduced Attack Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Bleeding Duration',
    regex: /(\d+)% reduced Bleeding Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Cast Speed',
    regex: /(\d+)% reduced Cast Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Chance to Block Attack and Spell Damage',
    regex: /(\d+)% reduced Chance to Block Attack and Spell Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Character Size',
    regex: /(\d+)% reduced Character Size/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Chill Duration on you',
    regex: /(\d+)% reduced Chill Duration on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Cold Resistance',
    regex: /(\d+)% reduced Cold Resistance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Critical Strike Chance per Power Charge',
    regex: /(\d+)% reduced Critical Strike Chance per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Damage',
    regex: /(\d+)% reduced Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Damage taken',
    regex: /(\d+)% reduced Damage taken/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Damage taken from Damage Over Time',
    regex: /(\d+)% reduced Damage taken from Damage Over Time/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Damage taken from Hits',
    regex: /(\d+)% reduced Damage taken from Hits/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Damage taken from Projectiles',
    regex: /(\d+)% reduced Damage taken from Projectiles/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Damage taken if Corrupted',
    regex: /(\d+)% reduced Damage taken if Corrupted/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Damage taken per 250 Dexterity',
    regex: /(\d+)% reduced Damage taken per 250 Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Damage taken per 250 Intelligence',
    regex: /(\d+)% reduced Damage taken per 250 Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Damage taken per 250 Strength',
    regex: /(\d+)% reduced Damage taken per 250 Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Damage when on Low Life',
    regex: /(\d+)% reduced Damage when on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Dexterity',
    regex: /(\d+)% reduced Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Duration of Ailments on Enemies',
    regex: /(\d+)% reduced Duration of Ailments on Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Duration of Curses on you',
    regex: /(\d+)% reduced Duration of Curses on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Duration of Curses on you per 10 Devotion',
    regex: /(\d+)% reduced Duration of Curses on you per 10 Devotion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Effect of Chill on you',
    regex: /(\d+)% reduced Effect of Chill on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Elemental Ailment Duration on you per 10 Devotion',
    regex: /(\d+)% reduced Elemental Ailment Duration on you per 10 Devotion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Elemental Damage taken from Hits per Endurance Charge',
    regex: /(\d+)% reduced Elemental Damage taken from Hits per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Elemental Damage taken while stationary',
    regex: /(\d+)% reduced Elemental Damage taken while stationary/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Endurance Charge Duration',
    regex: /(\d+)% reduced Endurance Charge Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Enemy Stun Threshold during any Flask Effect',
    regex: /(\d+)% reduced Enemy Stun Threshold during any Flask Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Enemy Stun Threshold with this Weapon',
    regex: /(\d+)% reduced Enemy Stun Threshold with this Weapon/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Energy Shield Recharge Rate',
    regex: /(\d+)% reduced Energy Shield Recharge Rate/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Experience gain',
    regex: /(\d+)% reduced Experience gain/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Fire Resistance',
    regex: /(\d+)% reduced Fire Resistance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Flask Charges gained',
    regex: /(\d+)% reduced Flask Charges gained/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Flask Charges gained during any Flask Effect',
    regex: /(\d+)% reduced Flask Charges gained during any Flask Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Flask Effect Duration',
    regex: /(\d+)% reduced Flask Effect Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Flask Life Recovery rate',
    regex: /(\d+)% reduced Flask Life Recovery rate/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Freeze Duration on you',
    regex: /(\d+)% reduced Freeze Duration on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Frenzy Charge Duration',
    regex: /(\d+)% reduced Frenzy Charge Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Frenzy Charge Duration per Frenzy Charge',
    regex: /(\d+)% reduced Frenzy Charge Duration per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Global Accuracy Rating',
    regex: /(\d+)% reduced Global Accuracy Rating/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Global Physical Damage',
    regex: /(\d+)% reduced Global Physical Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Golem Size',
    regex: /(\d+)% reduced Golem Size/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Ignite Duration on Enemies',
    regex: /(\d+)% reduced Ignite Duration on Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Intelligence',
    regex: /(\d+)% reduced Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Life Regeneration rate',
    regex: /(\d+)% reduced Life Regeneration rate/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Light Radius',
    regex: /(\d+)% reduced Light Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Lightning Resistance',
    regex: /(\d+)% reduced Lightning Resistance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Mana Cost of Minion Skills',
    regex: /(\d+)% reduced Mana Cost of Minion Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Mana Cost of Raise Spectre',
    regex: /(\d+)% reduced Mana Cost of Raise Spectre/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Mana Cost of Skills per 10 Devotion',
    regex: /(\d+)% reduced Mana Cost of Skills per 10 Devotion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Mana Cost of Skills when on Low Life',
    regex: /(\d+)% reduced Mana Cost of Skills when on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Mana Cost of Totem Skills that cast an Aura',
    regex: /(\d+)% reduced Mana Cost of Totem Skills that cast an Aura/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Mana Cost per Endurance Charge',
    regex: /(\d+)% reduced Mana Cost per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Mana Regeneration Rate',
    regex: /(\d+)% reduced Mana Regeneration Rate/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Mana Reserved per 250 total Attributes',
    regex: /(\d+)% reduced Mana Reserved per 250 total Attributes/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced maximum Energy Shield',
    regex: /(\d+)% reduced maximum Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced maximum Life',
    regex: /(\d+)% reduced maximum Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced maximum Mana',
    regex: /(\d+)% reduced maximum Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced maximum number of Raised Zombies',
    regex: /(\d+)% reduced maximum number of Raised Zombies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Maximum number of Summoned Raging Spirits',
    regex: /(\d+)% reduced Maximum number of Summoned Raging Spirits/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Maximum Recovery per Life Leech',
    regex: /(\d+)% reduced Maximum Recovery per Life Leech/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Mine Throwing Speed',
    regex: /(\d+)% reduced Mine Throwing Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Movement Speed',
    regex: /(\d+)% reduced Movement Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Movement Speed per Chest opened Recently',
    regex: /(\d+)% reduced Movement Speed per Chest opened Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Movement Speed when on Low Life',
    regex: /(\d+)% reduced Movement Speed when on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Power Charge Duration',
    regex: /(\d+)% reduced Power Charge Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Projectile Damage',
    regex: /(\d+)% reduced Projectile Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Projectile Speed',
    regex: /(\d+)% reduced Projectile Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Quantity of Fish Caught',
    regex: /(\d+)% reduced Quantity of Fish Caught/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Quantity of Items found',
    regex: /(\d+)% reduced Quantity of Items found/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Rarity of Items found',
    regex: /(\d+)% reduced Rarity of Items found/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Recovery rate of Life and Energy Shield',
    regex: /(\d+)% reduced Recovery rate of Life and Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Reflected Cold Damage taken while affected by Purity of Ice',
    regex: /(\d+)% reduced Reflected Cold Damage taken while affected by Purity of Ice/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Reflected Elemental Damage taken while affected by Purity of Elements',
    regex: /(\d+)% reduced Reflected Elemental Damage taken while affected by Purity of Elements/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Reflected Fire Damage taken while affected by Purity of Fire',
    regex: /(\d+)% reduced Reflected Fire Damage taken while affected by Purity of Fire/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Reflected Lightning Damage taken while affected by Purity of Lightning',
    regex: /(\d+)% reduced Reflected Lightning Damage taken while affected by Purity of Lightning/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Reflected Physical Damage taken while affected by Determination',
    regex: /(\d+)% reduced Reflected Physical Damage taken while affected by Determination/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Skeleton Duration',
    regex: /(\d+)% reduced Skeleton Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Skill Effect Duration',
    regex: /(\d+)% reduced Skill Effect Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Spark Duration',
    regex: /(\d+)% reduced Spark Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Spell Damage',
    regex: /(\d+)% reduced Spell Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Spell Damage taken from Blinded Enemies',
    regex: /(\d+)% reduced Spell Damage taken from Blinded Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Strength',
    regex: /(\d+)% reduced Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Strength Requirement',
    regex: /(\d+)% reduced Strength Requirement/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Stun and Block Recovery',
    regex: /(\d+)% reduced Stun and Block Recovery/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced total Recovery per second from Life Leech',
    regex: /(\d+)% reduced total Recovery per second from Life Leech/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Totem Damage',
    regex: /(\d+)% reduced Totem Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Trap Duration',
    regex: /(\d+)% reduced Trap Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% reduced Trap Throwing Speed',
    regex: /(\d+)% reduced Trap Throwing Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% slower start of Energy Shield Recharge during any Flask Effect',
    regex: /(\d+)% slower start of Energy Shield Recharge during any Flask Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '#% to all Resistances for each Corrupted Item Equipped',
    regex: /(\d+)% to all Resistances for each Corrupted Item Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Accuracy Rating per 2 Intelligence',
    regex: /\+(\d+) Accuracy Rating per 2 Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Armour per active Totem',
    regex: /\+(\d+) Armour per active Totem/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Armour while stationary',
    regex: /\+(\d+) Armour while stationary/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Armour while you do not have Avatar of Fire',
    regex: /\+(\d+) Armour while you do not have Avatar of Fire/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Dexterity Requirement',
    regex: /\+(\d+) Dexterity Requirement/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Energy Shield gained for each Enemy Hit while affected by Discipline',
    regex: /\+(\d+) Energy Shield gained for each Enemy Hit while affected by Discipline/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Energy Shield gained on Kill',
    regex: /\+(\d+) Energy Shield gained on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Energy Shield gained on Kill per Level',
    regex: /\+(\d+) Energy Shield gained on Kill per Level/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Energy Shield gained on Killing a Shocked Enemy',
    regex: /\+(\d+) Energy Shield gained on Killing a Shocked Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Intelligence Requirement',
    regex: /\+(\d+) Intelligence Requirement/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Life and Mana gained for each Enemy hit',
    regex: /\+(\d+) Life and Mana gained for each Enemy hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Life gained for each Elemental Ailment on Enemies hit by your Attacks',
    regex: /\+(\d+) Life gained for each Elemental Ailment on Enemies hit by your Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Life gained for each Elemental Ailment on Enemies hit by your Spells',
    regex: /\+(\d+) Life gained for each Elemental Ailment on Enemies hit by your Spells/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Life gained for each Enemy Hit while affected by Vitality',
    regex: /\+(\d+) Life gained for each Enemy Hit while affected by Vitality/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Life gained for each Ignited Enemy hit by your Attacks',
    regex: /\+(\d+) Life gained for each Ignited Enemy hit by your Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Life gained on Kill per Frenzy Charge',
    regex: /\+(\d+) Life gained on Kill per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Life gained on Kill per Level',
    regex: /\+(\d+) Life gained on Kill per Level/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Life gained on Killing Ignited Enemies',
    regex: /\+(\d+) Life gained on Killing Ignited Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Life per 2% increased Rarity of Items found',
    regex: /\+(\d+) Life per 2% increased Rarity of Items found/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Life per 4 Dexterity',
    regex: /\+(\d+) Life per 4 Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Mana gained for each Enemy hit by Attacks',
    regex: /\+(\d+) Mana gained for each Enemy hit by Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Mana gained on Kill per Level',
    regex: /\+(\d+) Mana gained on Kill per Level/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Mana gained on Killing a Frozen Enemy',
    regex: /\+(\d+) Mana gained on Killing a Frozen Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Mana per 4 Strength',
    regex: /\+(\d+) Mana per 4 Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# maximum Energy Shield per 5 Strength',
    regex: /\+(\d+) maximum Energy Shield per 5 Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Maximum Energy Shield per Level',
    regex: /\+(\d+) Maximum Energy Shield per Level/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Maximum Life per Level',
    regex: /\+(\d+) Maximum Life per Level/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Maximum Mana per Level',
    regex: /\+(\d+) Maximum Mana per Level/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Physical Damage taken from Attack Hits',
    regex: /\+(\d+) Physical Damage taken from Attack Hits/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# second to Summon Skeleton Cooldown',
    regex: /\+(\d+) second to Summon Skeleton Cooldown/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# seconds to Avian\'s Flight Duration',
    regex: /\+(\d+) seconds to Avian's Flight Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# seconds to Avian\'s Might Duration',
    regex: /\+(\d+) seconds to Avian's Might Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# seconds to Cat\'s Stealth Duration',
    regex: /\+(\d+) seconds to Cat's Stealth Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Strength and Intelligence Requirement',
    regex: /\+(\d+) Strength and Intelligence Requirement/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# Strength Requirement',
    regex: /\+(\d+) Strength Requirement/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Accuracy against Bleeding Enemies',
    regex: /\+(\d+) to Accuracy against Bleeding Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Accuracy Rating per 10 Intelligence on Unallocated Passives in Radius',
    regex: /\+(\d+) to Accuracy Rating per 10 Intelligence on Unallocated Passives in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Accuracy Rating while at Maximum Frenzy Charges',
    regex: /\+(\d+) to Accuracy Rating while at Maximum Frenzy Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Armour and Evasion Rating',
    regex: /\+(\d+) to Armour and Evasion Rating/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Armour and Evasion Rating while you have Fortify',
    regex: /\+(\d+) to Armour and Evasion Rating while you have Fortify/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Armour per 5 Evasion Rating on Equipped Shield',
    regex: /\+(\d+) to Armour per 5 Evasion Rating on Equipped Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Armour per Endurance Charge',
    regex: /\+(\d+) to Armour per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Armour while affected by Determination',
    regex: /\+(\d+) to Armour while affected by Determination/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Armour while Frozen',
    regex: /\+(\d+) to Armour while Frozen/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Evasion Rating and Energy Shield',
    regex: /\+(\d+) to Evasion Rating and Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Evasion Rating per 5 Maximum Energy Shield on Equipped Shield',
    regex: /\+(\d+) to Evasion Rating per 5 Maximum Energy Shield on Equipped Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Evasion Rating while on Full Life',
    regex: /\+(\d+) to Evasion Rating while on Full Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Evasion Rating while on Low Life',
    regex: /\+(\d+) to Evasion Rating while on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Level of all Raise Zombie Gems',
    regex: /\+(\d+) to Level of all Raise Zombie Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Level of Socketed AoE Gems',
    regex: /\+(\d+) to Level of Socketed AoE Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Level of Socketed Elemental Gems',
    regex: /\+(\d+) to Level of Socketed Elemental Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Level of Socketed Golem Gems',
    regex: /\+(\d+) to Level of Socketed Golem Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Level of Socketed Herald Gems',
    regex: /\+(\d+) to Level of Socketed Herald Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Level of Socketed Movement Gems',
    regex: /\+(\d+) to Level of Socketed Movement Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Level of Socketed Projectile Gems',
    regex: /\+(\d+) to Level of Socketed Projectile Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Level of Socketed Vaal Gems',
    regex: /\+(\d+) to Level of Socketed Vaal Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Level of Socketed Warcry Gems',
    regex: /\+(\d+) to Level of Socketed Warcry Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to maximum Divine Charges',
    regex: /\+(\d+) to maximum Divine Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Maximum Energy Shield per 5 Armour on Equipped Shield',
    regex: /\+(\d+) to Maximum Energy Shield per 5 Armour on Equipped Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Maximum Energy Shield per Blue Socket',
    regex: /\+(\d+) to Maximum Energy Shield per Blue Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Maximum Life per 10 Dexterity',
    regex: /\+(\d+) to Maximum Life per 10 Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Maximum Life per 10 Intelligence',
    regex: /\+(\d+) to Maximum Life per 10 Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Maximum Life per 2 Intelligence',
    regex: /\+(\d+) to Maximum Life per 2 Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Maximum Life per Elder Item Equipped',
    regex: /\+(\d+) to Maximum Life per Elder Item Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Maximum Life per Red Socket',
    regex: /\+(\d+) to Maximum Life per Red Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Maximum Mana per 10 Dexterity on Unallocated Passives in Radius',
    regex: /\+(\d+) to Maximum Mana per 10 Dexterity on Unallocated Passives in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Maximum Mana per Green Socket',
    regex: /\+(\d+) to Maximum Mana per Green Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Maximum number of Crab Barriers',
    regex: /\+(\d+) to Maximum number of Crab Barriers/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to maximum number of Golems',
    regex: /\+(\d+) to maximum number of Golems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to maximum number of Summoned Golems if you have 3 Primordial Items Socketed or Equipped',
    regex: /\+(\d+) to maximum number of Summoned Golems if you have 3 Primordial Items Socketed or Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to maximum number of Summoned Holy Relics',
    regex: /\+(\d+) to maximum number of Summoned Holy Relics/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Maximum Siphoning Charges per Elder or Shaper Item Equipped',
    regex: /\+(\d+) to Maximum Siphoning Charges per Elder or Shaper Item Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Maximum Spirit Charges per Abyss Jewel affecting you',
    regex: /\+(\d+) to Maximum Spirit Charges per Abyss Jewel affecting you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Melee Weapon Range per White Socket',
    regex: /\+(\d+) to Melee Weapon Range per White Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Minimum Endurance Charges',
    regex: /\+(\d+) to Minimum Endurance Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Minimum Endurance Charges while on Low Life',
    regex: /\+(\d+) to Minimum Endurance Charges while on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Minimum Frenzy Charges',
    regex: /\+(\d+) to Minimum Frenzy Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Minimum Power Charges',
    regex: /\+(\d+) to Minimum Power Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Minimum Power Charges while on Low Life',
    regex: /\+(\d+) to Minimum Power Charges while on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Spectre maximum Life',
    regex: /\+(\d+) to Spectre maximum Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+# to Total Mana Cost of Skills',
    regex: /\+(\d+) to Total Mana Cost of Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% chance to be Ignited',
    regex: /\+(\d+)% chance to be Ignited/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% chance to be Poisoned',
    regex: /\+(\d+)% chance to be Poisoned/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% chance to be Shocked',
    regex: /\+(\d+)% chance to be Shocked/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Attack Damage',
    regex: /\+(\d+)% Chance to Block Attack Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Attack Damage from Taunted Enemies',
    regex: /\+(\d+)% Chance to Block Attack Damage from Taunted Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Attack Damage if you have Blocked Spell Damage Recently',
    regex: /\+(\d+)% Chance to Block Attack Damage if you have Blocked Spell Damage Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Attack Damage per 50 Strength',
    regex: /\+(\d+)% Chance to Block Attack Damage per 50 Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Attack Damage per Frenzy Charge',
    regex: /\+(\d+)% Chance to Block Attack Damage per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Attack Damage per Power Charge',
    regex: /\+(\d+)% Chance to Block Attack Damage per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Attack Damage per Summoned Skeleton',
    regex: /\+(\d+)% Chance to Block Attack Damage per Summoned Skeleton/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Attack Damage when in Off Hand',
    regex: /\+(\d+)% Chance to Block Attack Damage when in Off Hand/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Attack Damage while affected by Determination',
    regex: /\+(\d+)% Chance to Block Attack Damage while affected by Determination/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Attack Damage while Dual Wielding Claws',
    regex: /\+(\d+)% Chance to Block Attack Damage while Dual Wielding Claws/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Attack Damage while not Cursed',
    regex: /\+(\d+)% Chance to Block Attack Damage while not Cursed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Attack Damage while on Consecrated Ground',
    regex: /\+(\d+)% Chance to Block Attack Damage while on Consecrated Ground/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Attack Damage while you have at least 10 Crab Barriers',
    regex: /\+(\d+)% Chance to Block Attack Damage while you have at least 10 Crab Barriers/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Attack Damage while you have at least 5 Crab Barriers',
    regex: /\+(\d+)% Chance to Block Attack Damage while you have at least 5 Crab Barriers/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Spell Damage',
    regex: /\+(\d+)% Chance to Block Spell Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Spell Damage per Power Charge',
    regex: /\+(\d+)% Chance to Block Spell Damage per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Spell Damage while affected by Discipline',
    regex: /\+(\d+)% Chance to Block Spell Damage while affected by Discipline/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Spell Damage while Cursed',
    regex: /\+(\d+)% Chance to Block Spell Damage while Cursed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Chance to Block Spell Damage while on Low Life',
    regex: /\+(\d+)% Chance to Block Spell Damage while on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% chance to Evade Attacks while affected by Grace',
    regex: /\+(\d+)% chance to Evade Attacks while affected by Grace/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Critical Strike Chance per Power Charge',
    regex: /\+(\d+)% Critical Strike Chance per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% Global Critical Strike Multiplier while you have no Frenzy Charges',
    regex: /\+(\d+)% Global Critical Strike Multiplier while you have no Frenzy Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to all Elemental Resistances if Corrupted',
    regex: /\+(\d+)% to all Elemental Resistances if Corrupted/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to all Elemental Resistances per 10 Devotion',
    regex: /\+(\d+)% to all Elemental Resistances per 10 Devotion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to all Elemental Resistances per Endurance Charge',
    regex: /\+(\d+)% to all Elemental Resistances per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to all Elemental Resistances while on Low Life',
    regex: /\+(\d+)% to all Elemental Resistances while on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to all Elemental Resistances while you have at least 200 Strength',
    regex: /\+(\d+)% to all Elemental Resistances while you have at least 200 Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to all maximum Resistances while Poisoned',
    regex: /\+(\d+)% to all maximum Resistances while Poisoned/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to all maximum Resistances while you have no Endurance Charges',
    regex: /\+(\d+)% to all maximum Resistances while you have no Endurance Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Animated Guardian Elemental Resistances',
    regex: /\+(\d+)% to Animated Guardian Elemental Resistances/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Chaos Resistance per Endurance Charge',
    regex: /\+(\d+)% to Chaos Resistance per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Chaos Resistance per Poison on you',
    regex: /\+(\d+)% to Chaos Resistance per Poison on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Chaos Resistance when on Low Life',
    regex: /\+(\d+)% to Chaos Resistance when on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Chaos Resistance while affected by Herald of Agony',
    regex: /\+(\d+)% to Chaos Resistance while affected by Herald of Agony/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Chaos Resistance while affected by Purity of Elements',
    regex: /\+(\d+)% to Chaos Resistance while affected by Purity of Elements/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Cold Resistance when Socketed with a Green Gem',
    regex: /\+(\d+)% to Cold Resistance when Socketed with a Green Gem/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Cold Resistance while affected by Herald of Ice',
    regex: /\+(\d+)% to Cold Resistance while affected by Herald of Ice/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Critical Strike Chance against Enemies on Consecrated Ground during Effect',
    regex: /\+(\d+)% to Critical Strike Chance against Enemies on Consecrated Ground during Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Critical Strike Chance while affected by Aspect of the Cat',
    regex: /\+(\d+)% to Critical Strike Chance while affected by Aspect of the Cat/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Critical Strike Chance while affected by Hatred',
    regex: /\+(\d+)% to Critical Strike Chance while affected by Hatred/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Critical Strike Multiplier for Spells if you haven\'t Killed Recently',
    regex: /\+(\d+)% to Critical Strike Multiplier for Spells if you haven't Killed Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Critical Strike Multiplier for Spells while Dual Wielding',
    regex: /\+(\d+)% to Critical Strike Multiplier for Spells while Dual Wielding/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Critical Strike Multiplier for Spells while holding a Shield',
    regex: /\+(\d+)% to Critical Strike Multiplier for Spells while holding a Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Critical Strike Multiplier for Spells while wielding a Staff',
    regex: /\+(\d+)% to Critical Strike Multiplier for Spells while wielding a Staff/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Critical Strike Multiplier if Dexterity is higher than Intelligence',
    regex: /\+(\d+)% to Critical Strike Multiplier if Dexterity is higher than Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Critical Strike Multiplier if you\'ve dealt a Non-Critical Strike Recently',
    regex: /\+(\d+)% to Critical Strike Multiplier if you've dealt a Non-Critical Strike Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Critical Strike Multiplier per 1% Chance to Block Attack Damage',
    regex: /\+(\d+)% to Critical Strike Multiplier per 1% Chance to Block Attack Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Critical Strike Multiplier per 10 Strength on Unallocated Passives in Radius',
    regex: /\+(\d+)% to Critical Strike Multiplier per 10 Strength on Unallocated Passives in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Critical Strike Multiplier per Power Charge',
    regex: /\+(\d+)% to Critical Strike Multiplier per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Critical Strike Multiplier while affected by Anger',
    regex: /\+(\d+)% to Critical Strike Multiplier while affected by Anger/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Critical Strike Multiplier while affected by Precision',
    regex: /\+(\d+)% to Critical Strike Multiplier while affected by Precision/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Damage over Time Multiplier for Ailments per Elder Item Equipped',
    regex: /\+(\d+)% to Damage over Time Multiplier for Ailments per Elder Item Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Damage over Time Multiplier while affected by Malevolence',
    regex: /\+(\d+)% to Damage over Time Multiplier while affected by Malevolence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Fire Resistance when Socketed with a Red Gem',
    regex: /\+(\d+)% to Fire Resistance when Socketed with a Red Gem/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Fire Resistance while affected by Herald of Ash',
    regex: /\+(\d+)% to Fire Resistance while affected by Herald of Ash/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Fire Resistance while on Low Life',
    regex: /\+(\d+)% to Fire Resistance while on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Global Critical Strike Multiplier per Green Socket',
    regex: /\+(\d+)% to Global Critical Strike Multiplier per Green Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Lightning Resistance when Socketed with a Blue Gem',
    regex: /\+(\d+)% to Lightning Resistance when Socketed with a Blue Gem/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Lightning Resistance while affected by Herald of Thunder',
    regex: /\+(\d+)% to Lightning Resistance while affected by Herald of Thunder/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to maximum Chance to Block Spell Damage',
    regex: /\+(\d+)% to maximum Chance to Block Spell Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to maximum Chance to Dodge Attack Hits',
    regex: /\+(\d+)% to maximum Chance to Dodge Attack Hits/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to maximum Chance to Dodge Spell Hits',
    regex: /\+(\d+)% to maximum Chance to Dodge Spell Hits/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to maximum Cold Resistance while affected by Herald of Ice',
    regex: /\+(\d+)% to maximum Cold Resistance while affected by Herald of Ice/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to maximum Fire Resistance while affected by Herald of Ash',
    regex: /\+(\d+)% to maximum Fire Resistance while affected by Herald of Ash/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to maximum Lightning Resistance while affected by Herald of Thunder',
    regex: /\+(\d+)% to maximum Lightning Resistance while affected by Herald of Thunder/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Quality of Socketed AoE Gems',
    regex: /\+(\d+)% to Quality of Socketed AoE Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Quality of Socketed Aura Gems',
    regex: /\+(\d+)% to Quality of Socketed Aura Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Quality of Socketed Bow Gems',
    regex: /\+(\d+)% to Quality of Socketed Bow Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Quality of Socketed Chaos Gems',
    regex: /\+(\d+)% to Quality of Socketed Chaos Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Quality of Socketed Cold Gems',
    regex: /\+(\d+)% to Quality of Socketed Cold Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Quality of Socketed Dexterity Gems',
    regex: /\+(\d+)% to Quality of Socketed Dexterity Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Quality of Socketed Fire Gems',
    regex: /\+(\d+)% to Quality of Socketed Fire Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Quality of Socketed Gems',
    regex: /\+(\d+)% to Quality of Socketed Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Quality of Socketed Intelligence Gems',
    regex: /\+(\d+)% to Quality of Socketed Intelligence Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Quality of Socketed Lightning Gems',
    regex: /\+(\d+)% to Quality of Socketed Lightning Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Quality of Socketed Melee Gems',
    regex: /\+(\d+)% to Quality of Socketed Melee Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Quality of Socketed Minion Gems',
    regex: /\+(\d+)% to Quality of Socketed Minion Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Quality of Socketed Projectile Gems',
    regex: /\+(\d+)% to Quality of Socketed Projectile Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Quality of Socketed Strength Gems',
    regex: /\+(\d+)% to Quality of Socketed Strength Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Unarmed Attack Critical Strike Chance',
    regex: /\+(\d+)% to Unarmed Attack Critical Strike Chance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+#% to Vaal Skill Critical Strike Multiplier',
    regex: /\+(\d+)% to Vaal Skill Critical Strike Multiplier/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+1 to Level of Socketed Active Skill Gems per # Player Levels',
    regex: /\+1 to Level of Socketed Active Skill Gems per (\d+) Player Levels/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '+1 to maximum number of Raised Zombies per # Strength',
    regex: /\+1 to maximum number of Raised Zombies per (\d+) Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '-# Chaos Damage taken',
    regex: /-(\d+) Chaos Damage taken/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '-# Dexterity per 1 Dexterity on Allocated Passives in Radius',
    regex: /-(\d+) Dexterity per 1 Dexterity on Allocated Passives in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '-# Physical Damage taken from Attacks',
    regex: /-(\d+) Physical Damage taken from Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '-# Physical Damage taken from Projectile Attacks',
    regex: /-(\d+) Physical Damage taken from Projectile Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '-# Physical Damage taken when Hit by Animals',
    regex: /-(\d+) Physical Damage taken when Hit by Animals/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '-# to Maximum Endurance Charges',
    regex: /-(\d+) to Maximum Endurance Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '-# to Maximum Power Charges',
    regex: /-(\d+) to Maximum Power Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '-# to Total Mana Cost of Skills while affected by Clarity',
    regex: /-(\d+) to Total Mana Cost of Skills while affected by Clarity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '-#% to all Elemental Resistances',
    regex: /-(\d+)% to all Elemental Resistances/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '-#% to Chaos Resistance',
    regex: /-(\d+)% to Chaos Resistance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '1% increased Armour per # Strength when in Off Hand',
    regex: /1% increased Armour per (\d+) Strength when in Off Hand/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '1% increased Attack Damage per 300 of the lowest of Armour and Evasion Rating',
    regex: /1% increased Attack Damage per 300 of the lowest of Armour and Evasion Rating/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '1% increased Claw Physical Damage per # Dexterity Allocated in Radius',
    regex: /1% increased Claw Physical Damage per (\d+) Dexterity Allocated in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '1% increased Damage per # Strength when in Main Hand',
    regex: /1% increased Damage per (\d+) Strength when in Main Hand/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '1% increased Evasion Rating per # Dexterity Allocated in Radius',
    regex: /1% increased Evasion Rating per (\d+) Dexterity Allocated in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '1% increased Melee Physical Damage with Unarmed Attacks per # Dexterity Allocated in Radius',
    regex: /1% increased Melee Physical Damage with Unarmed Attacks per (\d+) Dexterity Allocated in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '1% increased Movement Speed per # Evasion Rating, up to 75%',
    regex: /1% increased Movement Speed per (\d+) Evasion Rating, up to 75%/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '1% increased Rarity of Items found per # Rampage Kills',
    regex: /1% increased Rarity of Items found per (\d+) Rampage Kills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '10% Chance to Trigger Level 18 Summon Spectral Wolf on Kill',
    regex: /10% Chance to Trigger Level 18 Summon Spectral Wolf on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '25% chance to cause Bleeding on Hit',
    regex: /25% chance to cause Bleeding on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '30% increased Global Critical Strike Chance',
    regex: /30% increased Global Critical Strike Chance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '30% increased Movement Speed for # seconds on Throwing a Trap',
    regex: /30% increased Movement Speed for (\d+) seconds on Throwing a Trap/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '35% chance to avoid being Stunned for each Herald Skill affecting you',
    regex: /35% chance to avoid being Stunned for each Herald Skill affecting you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '40% increased Global Critical Strike Chance',
    regex: /40% increased Global Critical Strike Chance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '50% chance to cause Bleeding on Critical Strike',
    regex: /50% chance to cause Bleeding on Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '50% chance to cause Bleeding on Hit',
    regex: /50% chance to cause Bleeding on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: '50% increased Global Critical Strike Chance',
    regex: /50% increased Global Critical Strike Chance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Acrobatics',
    regex: /Acrobatics/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Action Speed cannot be modified to below base value',
    regex: /Action Speed cannot be modified to below base value/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Chaos Damage for each Spider\'s Web on the Enemy',
    regex: /Adds (\d+) to (\d+) Chaos Damage for each Spider's Web on the Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Chaos Damage in Off Hand',
    regex: /Adds (\d+) to (\d+) Chaos Damage in Off Hand/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Chaos Damage to Spells and Attacks during any Flask Effect',
    regex: /Adds (\d+) to (\d+) Chaos Damage to Spells and Attacks during any Flask Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Cold Damage against Chilled Enemies',
    regex: /Adds (\d+) to (\d+) Cold Damage against Chilled Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Cold Damage in Off Hand',
    regex: /Adds (\d+) to (\d+) Cold Damage in Off Hand/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Cold Damage to Attacks per 10 Dexterity',
    regex: /Adds (\d+) to (\d+) Cold Damage to Attacks per 10 Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Cold Damage to Counterattacks',
    regex: /Adds (\d+) to (\d+) Cold Damage to Counterattacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Cold Damage to Spells per Power Charge',
    regex: /Adds (\d+) to (\d+) Cold Damage to Spells per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Cold Damage to Spells while no Life is Reserved',
    regex: /Adds (\d+) to (\d+) Cold Damage to Spells while no Life is Reserved/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Cold Damage while affected by Hatred',
    regex: /Adds (\d+) to (\d+) Cold Damage while affected by Hatred/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Cold Damage while you have Avian\'s Might',
    regex: /Adds (\d+) to (\d+) Cold Damage while you have Avian's Might/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Fire Attack Damage per Buff on you',
    regex: /Adds (\d+) to (\d+) Fire Attack Damage per Buff on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Fire Damage in Main Hand',
    regex: /Adds (\d+) to (\d+) Fire Damage in Main Hand/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Fire Damage to Attacks against Ignited Enemies',
    regex: /Adds (\d+) to (\d+) Fire Damage to Attacks against Ignited Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Fire Damage to Attacks per 10 Strength',
    regex: /Adds (\d+) to (\d+) Fire Damage to Attacks per 10 Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Fire Damage to Hits with this Weapon against Blinded Enemies',
    regex: /Adds (\d+) to (\d+) Fire Damage to Hits with this Weapon against Blinded Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Fire Damage to Spells while no Life is Reserved',
    regex: /Adds (\d+) to (\d+) Fire Damage to Spells while no Life is Reserved/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Fire Spell Damage per Buff on you',
    regex: /Adds (\d+) to (\d+) Fire Spell Damage per Buff on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Lightning Damage for each Shocked Enemy you\'ve Killed Recently',
    regex: /Adds (\d+) to (\d+) Lightning Damage for each Shocked Enemy you've Killed Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Lightning Damage to Attacks per 10 Intelligence',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Attacks per 10 Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Lightning Damage to Hits against Ignited Enemies',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Hits against Ignited Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Lightning Damage to Spells per Power Charge',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Spells per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Lightning Damage to Spells while no Life is Reserved',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Spells while no Life is Reserved/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Lightning Damage to Spells while Unarmed',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Spells while Unarmed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Lightning Damage to Unarmed Attacks',
    regex: /Adds (\d+) to (\d+) Lightning Damage to Unarmed Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Lightning Damage while you have Avian\'s Might',
    regex: /Adds (\d+) to (\d+) Lightning Damage while you have Avian's Might/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Physical Damage per Endurance Charge',
    regex: /Adds (\d+) to (\d+) Physical Damage per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Physical Damage to Attacks against Frozen Enemies',
    regex: /Adds (\d+) to (\d+) Physical Damage to Attacks against Frozen Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Physical Damage to Attacks and Spells per Siphoning Charge',
    regex: /Adds (\d+) to (\d+) Physical Damage to Attacks and Spells per Siphoning Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Physical Damage to Attacks per 25 Dexterity',
    regex: /Adds (\d+) to (\d+) Physical Damage to Attacks per 25 Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Physical Damage to Attacks per Level',
    regex: /Adds (\d+) to (\d+) Physical Damage to Attacks per Level/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds # to # Physical Damage to Attacks with this Weapon per 3 Player Levels',
    regex: /Adds (\d+) to (\d+) Physical Damage to Attacks with this Weapon per 3 Player Levels/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds #-# Chaos Damage to Attacks while you have a Bestial Minion',
    regex: /Adds (\d+)-(\d+) Chaos Damage to Attacks while you have a Bestial Minion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds #-# Physical Damage to Attacks while you have a Bestial Minion',
    regex: /Adds (\d+)-(\d+) Physical Damage to Attacks while you have a Bestial Minion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds 1 maximum Lightning Damage to Attacks per # Dexterity Allocated in Radius',
    regex: /Adds 1 maximum Lightning Damage to Attacks per (\d+) Dexterity Allocated in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Adds 1 to Maximum Life per # Intelligence Allocated in Radius',
    regex: /Adds 1 to Maximum Life per (\d+) Intelligence Allocated in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Agony Crawler deals #% increased Damage',
    regex: /Agony Crawler deals (\d+)% increased Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'All Attack Damage Chills when you Stun',
    regex: /All Attack Damage Chills when you Stun/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'All Attacks with this Weapon are Critical Strikes',
    regex: /All Attacks with this Weapon are Critical Strikes/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'All bonuses from an Equipped Shield apply to your Minions instead of you',
    regex: /All bonuses from an Equipped Shield apply to your Minions instead of you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'All Sockets are White',
    regex: /All Sockets are White/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Allies\' Aura Buffs do not affect you',
    regex: /Allies' Aura Buffs do not affect you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Allocated Small Passive Skills in Radius grant nothing',
    regex: /Allocated Small Passive Skills in Radius grant nothing/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Always Critically Strike Shocked Enemies',
    regex: /Always Critically Strike Shocked Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'An additional Curse can be applied to you',
    regex: /An additional Curse can be applied to you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Ancestral Bond',
    regex: /Ancestral Bond/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'and nearby Allies Regenerate 200 Life per second',
    regex: /and nearby Allies Regenerate 200 Life per second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Anger Reserves no Mana',
    regex: /Anger Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Animated Guardian deals #% increased Damage per Animated Weapon',
    regex: /Animated Guardian deals (\d+)% increased Damage per Animated Weapon/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Animated Minions\' Melee Attacks deal #% less Damage to surrounding targets',
    regex: /Animated Minions' Melee Attacks deal (\d+)% less Damage to surrounding targets/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Animated Minions\' Melee Attacks deal Splash Damage to surrounding targets',
    regex: /Animated Minions' Melee Attacks deal Splash Damage to surrounding targets/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Applies Level 15 Elemental Weakness on Blocking a Spell, ignoring Curse Limit',
    regex: /Applies Level 15 Elemental Weakness on Blocking a Spell, ignoring Curse Limit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Applies Level 15 Punishment on Blocking a Melee Attack, ignoring Curse Limit',
    regex: /Applies Level 15 Punishment on Blocking a Melee Attack, ignoring Curse Limit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Applies Level 15 Temporal Chains on Blocking a Projectile Attack, ignoring Curse Limit',
    regex: /Applies Level 15 Temporal Chains on Blocking a Projectile Attack, ignoring Curse Limit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Arctic Armour has #% reduced Mana Reservation',
    regex: /Arctic Armour has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Area contains additional waves of Bone Rhoas',
    regex: /Area contains additional waves of Bone Rhoas/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Area contains additional waves of Ghosts',
    regex: /Area contains additional waves of Ghosts/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Area contains additional waves of Oriathan Zombies',
    regex: /Area contains additional waves of Oriathan Zombies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Area contains additional waves of Phantasms',
    regex: /Area contains additional waves of Phantasms/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Area contains additional waves of Raging Spirits',
    regex: /Area contains additional waves of Raging Spirits/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Area contains additional waves of Ravager Maws',
    regex: /Area contains additional waves of Ravager Maws/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Area contains additional waves of Zombies',
    regex: /Area contains additional waves of Zombies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Area is inhabited by # additional Rogue Exiles',
    regex: /Area is inhabited by (\d+) additional Rogue Exiles/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Areas contain Beasts to hunt',
    regex: /Areas contain Beasts to hunt/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Armour is increased by Uncapped Fire Resistance',
    regex: /Armour is increased by Uncapped Fire Resistance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Arrow Dancing',
    regex: /Arrow Dancing/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Arrows deal #% increased Damage with Hits and Ailments to Targets they Pierce',
    regex: /Arrows deal (\d+)% increased Damage with Hits and Ailments to Targets they Pierce/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Arrows deal 50% increased Damage with Hits and Ailments to Targets they Pierce',
    regex: /Arrows deal 50% increased Damage with Hits and Ailments to Targets they Pierce/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Arrows Pierce # additional Targets',
    regex: /Arrows Pierce (\d+) additional Targets/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Arrows Pierce 1 additional Target',
    regex: /Arrows Pierce 1 additional Target/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Arrows Pierce all Targets',
    regex: /Arrows Pierce all Targets/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Arrows Pierce all Targets after Chaining',
    regex: /Arrows Pierce all Targets after Chaining/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Arrows Pierce all Targets after Forking',
    regex: /Arrows Pierce all Targets after Forking/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Arrows Pierce an additional Target',
    regex: /Arrows Pierce an additional Target/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Arrows that Pierce have +#% to Critical Strike Multiplier',
    regex: /Arrows that Pierce have \+(\d+)% to Critical Strike Multiplier/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Arrows that Pierce have 50% chance to inflict Bleeding',
    regex: /Arrows that Pierce have 50% chance to inflict Bleeding/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Aspect of the Avian also grants Avian\'s Might and Avian\'s Flight to nearby Allies',
    regex: /Aspect of the Avian also grants Avian's Might and Avian's Flight to nearby Allies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Aspect of the Cat Reserves no Mana',
    regex: /Aspect of the Cat Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Aspect of the Spider can inflict Spider\'s Web on Enemies an additional time',
    regex: /Aspect of the Spider can inflict Spider's Web on Enemies an additional time/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Aspect of the Spider inflicts Spider\'s Webs and Hinder every # Seconds instead',
    regex: /Aspect of the Spider inflicts Spider's Webs and Hinder every (\d+) Seconds instead/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attack Skills gain #% of Physical Damage as Extra Fire Damage per Socketed Red Gem',
    regex: /Attack Skills gain (\d+)% of Physical Damage as Extra Fire Damage per Socketed Red Gem/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attack Skills have +# to maximum number of Summoned Totems',
    regex: /Attack Skills have \+(\d+) to maximum number of Summoned Totems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attacks always inflict Bleeding while you have Cat\'s Stealth',
    regex: /Attacks always inflict Bleeding while you have Cat's Stealth/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attacks Chain an additional time when in Main Hand',
    regex: /Attacks Chain an additional time when in Main Hand/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attacks deal no Physical Damage',
    regex: /Attacks deal no Physical Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attacks fire an additional Projectile when in Off Hand',
    regex: /Attacks fire an additional Projectile when in Off Hand/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attacks have #% chance to Poison while at maximum Frenzy Charges',
    regex: /Attacks have (\d+)% chance to Poison while at maximum Frenzy Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attacks have 25% chance to inflict Bleeding when Hitting Cursed Enemies',
    regex: /Attacks have 25% chance to inflict Bleeding when Hitting Cursed Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attacks have Blood Magic',
    regex: /Attacks have Blood Magic/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attacks with this Weapon deal # to # added Fire Damage to Bleeding Enemies',
    regex: /Attacks with this Weapon deal (\d+) to (\d+) added Fire Damage to Bleeding Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attacks with this Weapon deal # to # added Physical Damage to Ignited Enemies',
    regex: /Attacks with this Weapon deal (\d+) to (\d+) added Physical Damage to Ignited Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attacks with this Weapon deal #-# added Chaos Damage against Enemies affected by at least 5 Poisons',
    regex: /Attacks with this Weapon deal (\d+)-(\d+) added Chaos Damage against Enemies affected by at least 5 Poisons/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attacks with this Weapon deal Double Damage',
    regex: /Attacks with this Weapon deal Double Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attacks with this Weapon deal Double Damage to Chilled Enemies',
    regex: /Attacks with this Weapon deal Double Damage to Chilled Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attacks with this Weapon have #% chance to inflict Bleeding against Ignited Enemies',
    regex: /Attacks with this Weapon have (\d+)% chance to inflict Bleeding against Ignited Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attacks with this Weapon have #% chance to inflict Bleeding while you do not have Avatar of Fire',
    regex: /Attacks with this Weapon have (\d+)% chance to inflict Bleeding while you do not have Avatar of Fire/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attacks with this Weapon have #% increased Elemental Damage',
    regex: /Attacks with this Weapon have (\d+)% increased Elemental Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Attacks with this Weapon Maim on hit',
    regex: /Attacks with this Weapon Maim on hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Avatar of Fire',
    regex: /Avatar of Fire/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Bathed in the blood of # sacrificed in the name of Doryani Passives in radius are Conquered by the Vaal',
    regex: /Bathed in the blood of (\d+) sacrificed in the name of Doryani Passives in radius are Conquered by the Vaal/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Bathed in the blood of # sacrificed in the name of Xibaqua Passives in radius are Conquered by the Vaal',
    regex: /Bathed in the blood of (\d+) sacrificed in the name of Xibaqua Passives in radius are Conquered by the Vaal/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Bathed in the blood of # sacrificed in the name of Zerphi Passives in radius are Conquered by the Vaal',
    regex: /Bathed in the blood of (\d+) sacrificed in the name of Zerphi Passives in radius are Conquered by the Vaal/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Bleeding cannot be inflicted on you',
    regex: /Bleeding cannot be inflicted on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Bleeding Enemies you Kill Explode, dealing #% of their Maximum Life as Physical Damage',
    regex: /Bleeding Enemies you Kill Explode, dealing (\d+)% of their Maximum Life as Physical Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Bleeding Enemies you Kill with Hits Shatter',
    regex: /Bleeding Enemies you Kill with Hits Shatter/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Bleeding you inflict deals Damage #% faster',
    regex: /Bleeding you inflict deals Damage (\d+)% faster/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Bleeding you inflict is Reflected to you',
    regex: /Bleeding you inflict is Reflected to you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Blight has #% increased Hinder Duration',
    regex: /Blight has (\d+)% increased Hinder Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Blind Chilled Enemies on Hit',
    regex: /Blind Chilled Enemies on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Blood Magic',
    regex: /Blood Magic/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Bow Attacks fire # additional Arrows',
    regex: /Bow Attacks fire (\d+) additional Arrows/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Bow Attacks fire an additional Arrow while Main Hand Accuracy Rating is at least 3000',
    regex: /Bow Attacks fire an additional Arrow while Main Hand Accuracy Rating is at least 3000/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Bow Knockback at Close Range',
    regex: /Bow Knockback at Close Range/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Burning Hoofprints',
    regex: /Burning Hoofprints/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Can have a second Enchantment Modifier',
    regex: /Can have a second Enchantment Modifier/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Can have up to # additional Trap placed at a time',
    regex: /Can have up to (\d+) additional Trap placed at a time/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Can roll Minion Modifiers',
    regex: /Can roll Minion Modifiers/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Can\'t use Chest armour',
    regex: /Can't use Chest armour/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Can\'t use other Rings',
    regex: /Can't use other Rings/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Blinded',
    regex: /Cannot be Blinded/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Blinded while affected by Precision',
    regex: /Cannot be Blinded while affected by Precision/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Chilled',
    regex: /Cannot be Chilled/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Chilled during Onslaught',
    regex: /Cannot be Chilled during Onslaught/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Chilled or Frozen if you have used a Fire Skill Recently',
    regex: /Cannot be Chilled or Frozen if you have used a Fire Skill Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Frozen if Dexterity is higher than Intelligence',
    regex: /Cannot be Frozen if Dexterity is higher than Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Frozen, Chilled or Ignited with Her Blessing',
    regex: /Cannot be Frozen, Chilled or Ignited with Her Blessing/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Ignited',
    regex: /Cannot be Ignited/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Ignited if Strength is higher than Dexterity',
    regex: /Cannot be Ignited if Strength is higher than Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Ignited while on Low Life',
    regex: /Cannot be Ignited while on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Knocked Back',
    regex: /Cannot be Knocked Back/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Shocked',
    regex: /Cannot be Shocked/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Shocked if Intelligence is higher than Strength',
    regex: /Cannot be Shocked if Intelligence is higher than Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Shocked while Chilled',
    regex: /Cannot be Shocked while Chilled/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Stunned',
    regex: /Cannot be Stunned/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Stunned by Attacks if your other Ring is an Elder Item',
    regex: /Cannot be Stunned by Attacks if your other Ring is an Elder Item/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Stunned by Spells if your other Ring is a Shaper Item',
    regex: /Cannot be Stunned by Spells if your other Ring is a Shaper Item/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Stunned if you have at least 10 Crab Barriers',
    regex: /Cannot be Stunned if you have at least 10 Crab Barriers/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be Stunned when on Low Life',
    regex: /Cannot be Stunned when on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot be used with Chaos Inoculation',
    regex: /Cannot be used with Chaos Inoculation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot Block',
    regex: /Cannot Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot Block Attacks',
    regex: /Cannot Block Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot Block Spells',
    regex: /Cannot Block Spells/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot Cast Spells',
    regex: /Cannot Cast Spells/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot Evade Enemy Attacks',
    regex: /Cannot Evade Enemy Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot gain Endurance Charges',
    regex: /Cannot gain Endurance Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot gain Energy Shield',
    regex: /Cannot gain Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot gain Power Charges',
    regex: /Cannot gain Power Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot inflict Freeze or Chill',
    regex: /Cannot inflict Freeze or Chill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot inflict Ignite',
    regex: /Cannot inflict Ignite/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot inflict Shock',
    regex: /Cannot inflict Shock/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot Knock Enemies Back',
    regex: /Cannot Knock Enemies Back/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot Leech',
    regex: /Cannot Leech/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot Leech Life',
    regex: /Cannot Leech Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot Leech Life from Critical Strikes',
    regex: /Cannot Leech Life from Critical Strikes/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot Leech Mana',
    regex: /Cannot Leech Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot Leech or Regenerate Mana',
    regex: /Cannot Leech or Regenerate Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot Leech when on Low Life',
    regex: /Cannot Leech when on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cannot lose Crab Barriers if you have lost Crab Barriers Recently',
    regex: /Cannot lose Crab Barriers if you have lost Crab Barriers Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Carved to glorify # new faithful converted by High Templar Avarius Passives in radius are Conquered by the Templars',
    regex: /Carved to glorify (\d+) new faithful converted by High Templar Avarius Passives in radius are Conquered by the Templars/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Carved to glorify # new faithful converted by High Templar Dominus Passives in radius are Conquered by the Templars',
    regex: /Carved to glorify (\d+) new faithful converted by High Templar Dominus Passives in radius are Conquered by the Templars/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Carved to glorify # new faithful converted by High Templar Venarius Passives in radius are Conquered by the Templars',
    regex: /Carved to glorify (\d+) new faithful converted by High Templar Venarius Passives in radius are Conquered by the Templars/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Causes Bleeding on Hit',
    regex: /Causes Bleeding on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Causes Bleeding when you Stun',
    regex: /Causes Bleeding when you Stun/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Celestial Footprints',
    regex: /Celestial Footprints/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Chance to Block Spell Damage is Unlucky',
    regex: /Chance to Block Spell Damage is Unlucky/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Channelling Skills deal #% increased Damage',
    regex: /Channelling Skills deal (\d+)% increased Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Channelling Skills deal #% increased Damage per 10 Devotion',
    regex: /Channelling Skills deal (\d+)% increased Damage per 10 Devotion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Chaos Damage can Ignite, Chill and Shock',
    regex: /Chaos Damage can Ignite, Chill and Shock/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Chaos Damage does not bypass Energy Shield',
    regex: /Chaos Damage does not bypass Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Chaos Damage does not bypass Energy Shield while not on Low Life or Low Mana',
    regex: /Chaos Damage does not bypass Energy Shield while not on Low Life or Low Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Chaos Resistance is doubled',
    regex: /Chaos Resistance is doubled/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Chaos Skills have #% increased Skill Effect Duration',
    regex: /Chaos Skills have (\d+)% increased Skill Effect Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Chill Effect and Freeze Duration on you are based on #% of Energy Shield',
    regex: /Chill Effect and Freeze Duration on you are based on (\d+)% of Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Chill Enemies for # second on Hit with this Weapon when in Off Hand',
    regex: /Chill Enemies for (\d+) second on Hit with this Weapon when in Off Hand/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Chill Enemy for # second when Hit, reducing their Action Speed by 30%',
    regex: /Chill Enemy for (\d+) second when Hit, reducing their Action Speed by 30%/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Chill nearby Enemies when you Focus, causing 30% reduced Action Speed',
    regex: /Chill nearby Enemies when you Focus, causing 30% reduced Action Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Clarity Reserves no Mana',
    regex: /Clarity Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cold Damage is increased by 1% per # Intelligence from Allocated Passives in Radius',
    regex: /Cold Damage is increased by 1% per (\d+) Intelligence from Allocated Passives in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cold Resistance is #%',
    regex: /Cold Resistance is (\d+)%/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cold Skills have #% chance to Poison on Hit',
    regex: /Cold Skills have (\d+)% chance to Poison on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Commanded leadership over # warriors under Kaom Passives in radius are Conquered by the Karui',
    regex: /Commanded leadership over (\d+) warriors under Kaom Passives in radius are Conquered by the Karui/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Commanded leadership over # warriors under Kiloava Passives in radius are Conquered by the Karui',
    regex: /Commanded leadership over (\d+) warriors under Kiloava Passives in radius are Conquered by the Karui/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Commanded leadership over # warriors under Rakiata Passives in radius are Conquered by the Karui',
    regex: /Commanded leadership over (\d+) warriors under Rakiata Passives in radius are Conquered by the Karui/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Commissioned # coins to commemorate Cadiro Passives in radius are Conquered by the Eternal Empire',
    regex: /Commissioned (\d+) coins to commemorate Cadiro Passives in radius are Conquered by the Eternal Empire/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Commissioned # coins to commemorate Chitus Passives in radius are Conquered by the Eternal Empire',
    regex: /Commissioned (\d+) coins to commemorate Chitus Passives in radius are Conquered by the Eternal Empire/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Commissioned # coins to commemorate Victario Passives in radius are Conquered by the Eternal Empire',
    regex: /Commissioned (\d+) coins to commemorate Victario Passives in radius are Conquered by the Eternal Empire/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Conductivity has #% reduced Mana Reservation',
    regex: /Conductivity has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Conduit',
    regex: /Conduit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Consecrated Ground created by this Flask has Tripled Radius',
    regex: /Consecrated Ground created by this Flask has Tripled Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Consecrated Ground created during Effect applies #% increased Damage taken to Enemies',
    regex: /Consecrated Ground created during Effect applies (\d+)% increased Damage taken to Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Consecrated Ground you create while affected by Zealotry causes enemies to take #% increased Damage',
    regex: /Consecrated Ground you create while affected by Zealotry causes enemies to take (\d+)% increased Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Consumes a Void Charge to Trigger Level # Void Shot when you fire Arrows',
    regex: /Consumes a Void Charge to Trigger Level (\d+) Void Shot when you fire Arrows/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Consumes Socketed Support Gems when they reach Maximum Level Can Consume # Support Gems Has not Consumed any Gems',
    regex: /Consumes Socketed Support Gems when they reach Maximum Level Can Consume (\d+) Support Gems Has not Consumed any Gems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Contains additional waves of Undead Monsters',
    regex: /Contains additional waves of Undead Monsters/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Contains waves of Monsters',
    regex: /Contains waves of Monsters/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Counts as all One Handed Melee Weapon Types',
    regex: /Counts as all One Handed Melee Weapon Types/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Counts as Dual Wielding',
    regex: /Counts as Dual Wielding/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Cover Enemies in Ash when they Hit you',
    regex: /Cover Enemies in Ash when they Hit you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Create a Blighted Spore when you Kill a Rare Monster',
    regex: /Create a Blighted Spore when you Kill a Rare Monster/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Create Consecrated Ground when you Shatter an Enemy',
    regex: /Create Consecrated Ground when you Shatter an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Creates a Smoke Cloud on Rampage',
    regex: /Creates a Smoke Cloud on Rampage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Creates Consecrated Ground on Critical Strike',
    regex: /Creates Consecrated Ground on Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Crimson Dance',
    regex: /Crimson Dance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Critical Strike Chance is increased by Lightning Resistance',
    regex: /Critical Strike Chance is increased by Lightning Resistance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Critical Strikes deal no Damage',
    regex: /Critical Strikes deal no Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Critical Strikes do not always Freeze',
    regex: /Critical Strikes do not always Freeze/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Critical Strikes have #% chance to Blind Enemies while you have Cat\'s Stealth',
    regex: /Critical Strikes have (\d+)% chance to Blind Enemies while you have Cat's Stealth/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Critical Strikes have Culling Strike',
    regex: /Critical Strikes have Culling Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Critical Strikes Penetrate #% of Enemy Elemental Resistances while affected by Zealotry',
    regex: /Critical Strikes Penetrate (\d+)% of Enemy Elemental Resistances while affected by Zealotry/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Culling Strike against Burning Enemies',
    regex: /Culling Strike against Burning Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Culling Strike against Enemies Cursed with Poacher\'s Mark',
    regex: /Culling Strike against Enemies Cursed with Poacher's Mark/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Curse Enemies with Flammability on Hit',
    regex: /Curse Enemies with Flammability on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Curse Enemies with Level # Elemental Weakness on Hit',
    regex: /Curse Enemies with Level (\d+) Elemental Weakness on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Curse Enemies with Level # Poacher\'s Mark on Hit, which can apply to Hexproof Enemies',
    regex: /Curse Enemies with Level (\d+) Poacher's Mark on Hit, which can apply to Hexproof Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Curse Enemies with Level # Temporal Chains on Hit',
    regex: /Curse Enemies with Level (\d+) Temporal Chains on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Curse Enemies with Level 5 Vulnerability on Block',
    regex: /Curse Enemies with Level 5 Vulnerability on Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Curse Enemies with Socketed Curse Gem on Hit',
    regex: /Curse Enemies with Socketed Curse Gem on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Curse Enemies with Temporal Chains on Hit',
    regex: /Curse Enemies with Temporal Chains on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Curse Reflection',
    regex: /Curse Reflection/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Curses in this item are reflected back to you',
    regex: /Curses in this item are reflected back to you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Curses on Slain Enemies are transferred to a nearby Enemy',
    regex: /Curses on Slain Enemies are transferred to a nearby Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Damage from Enemies Hitting you is Unlucky while you are Cursed with Vulnerability',
    regex: /Damage from Enemies Hitting you is Unlucky while you are Cursed with Vulnerability/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Damage from Enemies Hitting you is Unlucky while you are on Full Life',
    regex: /Damage from Enemies Hitting you is Unlucky while you are on Full Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Damage from Enemies Hitting you is Unlucky while you are on Low Life',
    regex: /Damage from Enemies Hitting you is Unlucky while you are on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Damage Penetrates #% Cold Resistance against Chilled Enemies',
    regex: /Damage Penetrates (\d+)% Cold Resistance against Chilled Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Damage Penetrates #% Cold Resistance while affected by Hatred',
    regex: /Damage Penetrates (\d+)% Cold Resistance while affected by Hatred/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Damage Penetrates #% Fire Resistance against Blinded Enemies',
    regex: /Damage Penetrates (\d+)% Fire Resistance against Blinded Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Damage Penetrates #% Fire Resistance while affected by Anger',
    regex: /Damage Penetrates (\d+)% Fire Resistance while affected by Anger/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Damage Penetrates #% Lightning Resistance while affected by Wrath',
    regex: /Damage Penetrates (\d+)% Lightning Resistance while affected by Wrath/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Damage Penetrates #% of Fire Resistance if you have Blocked Recently',
    regex: /Damage Penetrates (\d+)% of Fire Resistance if you have Blocked Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Damage with Weapons Penetrates #% Cold Resistance',
    regex: /Damage with Weapons Penetrates (\d+)% Cold Resistance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Damage with Weapons Penetrates #% Elemental Resistance',
    regex: /Damage with Weapons Penetrates (\d+)% Elemental Resistance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Damage with Weapons Penetrates #% Fire Resistance',
    regex: /Damage with Weapons Penetrates (\d+)% Fire Resistance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Damage with Weapons Penetrates #% Lightning Resistance',
    regex: /Damage with Weapons Penetrates (\d+)% Lightning Resistance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Damaging Ailments you inflict deal Damage #% faster while affected by Malevolence',
    regex: /Damaging Ailments you inflict deal Damage (\d+)% faster while affected by Malevolence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Deal # to # Lightning Damage to nearby Enemies when you lose a Power, Frenzy, or Endurance Charge',
    regex: /Deal (\d+) to (\d+) Lightning Damage to nearby Enemies when you lose a Power, Frenzy, or Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Deal no Chaos Damage',
    regex: /Deal no Chaos Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Deal no Elemental Damage',
    regex: /Deal no Elemental Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Deal no Non-Elemental Damage',
    regex: /Deal no Non-Elemental Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Deal no Physical Damage',
    regex: /Deal no Physical Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Deals # Chaos Damage per second to nearby Enemies',
    regex: /Deals (\d+) Chaos Damage per second to nearby Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Debuffs on you expire #% faster',
    regex: /Debuffs on you expire (\d+)% faster/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Debuffs on you expire #% faster while affected by Haste',
    regex: /Debuffs on you expire (\d+)% faster while affected by Haste/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Denoted service of # dekhara in the akhara of Asaneth Passives in radius are Conquered by the Maraketh',
    regex: /Denoted service of (\d+) dekhara in the akhara of Asaneth Passives in radius are Conquered by the Maraketh/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Denoted service of # dekhara in the akhara of Deshret Passives in radius are Conquered by the Maraketh',
    regex: /Denoted service of (\d+) dekhara in the akhara of Deshret Passives in radius are Conquered by the Maraketh/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Denoted service of # dekhara in the akhara of Nasima Passives in radius are Conquered by the Maraketh',
    regex: /Denoted service of (\d+) dekhara in the akhara of Nasima Passives in radius are Conquered by the Maraketh/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Despair has #% reduced Mana Reservation',
    regex: /Despair has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Determination has #% increased Aura Effect',
    regex: /Determination has (\d+)% increased Aura Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Determination has #% reduced Mana Reservation',
    regex: /Determination has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Determination Reserves no Mana',
    regex: /Determination Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Dexterity and Intelligence from passives in Radius count towards Strength Melee Damage bonus',
    regex: /Dexterity and Intelligence from passives in Radius count towards Strength Melee Damage bonus/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Dexterity from Passives in Radius is Transformed to Intelligence',
    regex: /Dexterity from Passives in Radius is Transformed to Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Dexterity from Passives in Radius is Transformed to Strength',
    regex: /Dexterity from Passives in Radius is Transformed to Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Discipline has #% increased Aura Effect',
    regex: /Discipline has (\d+)% increased Aura Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Discipline has #% reduced Mana Reservation',
    regex: /Discipline has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Discipline Reserves no Mana',
    regex: /Discipline Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Duplicates your other ring',
    regex: /Duplicates your other ring/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Effects of Consecrated Ground you create while affected by Zealotry Linger for # seconds',
    regex: /Effects of Consecrated Ground you create while affected by Zealotry Linger for (\d+) seconds/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Eldritch Battery',
    regex: /Eldritch Battery/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Elemental Equilibrium',
    regex: /Elemental Equilibrium/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Elemental Overload',
    regex: /Elemental Overload/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Elemental Resistances are Zero',
    regex: /Elemental Resistances are Zero/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Emits a golden glow',
    regex: /Emits a golden glow/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies affected by your Spider\'s Webs deal #% reduced Damage',
    regex: /Enemies affected by your Spider's Webs deal (\d+)% reduced Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies affected by your Spider\'s Webs have #% to All Resistances',
    regex: /Enemies affected by your Spider's Webs have (\d+)% to All Resistances/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies Cannot Leech Life From you',
    regex: /Enemies Cannot Leech Life From you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies Cannot Leech Mana From you',
    regex: /Enemies Cannot Leech Mana From you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies do not block your movement for # seconds on Rampage',
    regex: /Enemies do not block your movement for (\d+) seconds on Rampage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies Frozen by you take 20% increased Damage',
    regex: /Enemies Frozen by you take 20% increased Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies inflict Elemental Ailments on you instead of nearby Allies',
    regex: /Enemies inflict Elemental Ailments on you instead of nearby Allies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies killed by Zombies explode dealing #% of their Maximum Life as Fire Damage',
    regex: /Enemies killed by Zombies explode dealing (\d+)% of their Maximum Life as Fire Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies near corpses affected by your Curses are Blinded Enemies Killed near corpses affected by your Curses explode, dealing #% of their Life as Physical Damage',
    regex: /Enemies near corpses affected by your Curses are Blinded Enemies Killed near corpses affected by your Curses explode, dealing (\d+)% of their Life as Physical Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies on Fungal Ground you Kill Explode, dealing 5% of their Life as Chaos Damage',
    regex: /Enemies on Fungal Ground you Kill Explode, dealing 5% of their Life as Chaos Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies slain by Socketed Gems drop #% increased item quantity',
    regex: /Enemies slain by Socketed Gems drop (\d+)% increased item quantity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies take #% increased Damage for each type of Ailment you have inflicted on them',
    regex: /Enemies take (\d+)% increased Damage for each type of Ailment you have inflicted on them/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies you Attack have #% chance to Reflect # to # Chaos Damage to you',
    regex: /Enemies you Attack have (\d+)% chance to Reflect (\d+) to (\d+) Chaos Damage to you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies you Attack Reflect # Physical Damage to you',
    regex: /Enemies you Attack Reflect (\d+) Physical Damage to you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies you hit are destroyed on Kill',
    regex: /Enemies you hit are destroyed on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies you inflict Bleeding on grant #% increased Flask Charges',
    regex: /Enemies you inflict Bleeding on grant (\d+)% increased Flask Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies you kill are Shocked',
    regex: /Enemies you kill are Shocked/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies you Kill have a #% chance to Explode, dealing a quarter of their maximum Life as Chaos Damage',
    regex: /Enemies you Kill have a (\d+)% chance to Explode, dealing a quarter of their maximum Life as Chaos Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies you Shock have #% reduced Cast Speed',
    regex: /Enemies you Shock have (\d+)% reduced Cast Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemies you Shock have #% reduced Movement Speed',
    regex: /Enemies you Shock have (\d+)% reduced Movement Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemy hits on you roll low Damage',
    regex: /Enemy hits on you roll low Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Enemy Projectiles Pierce you',
    regex: /Enemy Projectiles Pierce you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Energy Shield Recharge starts when you are Stunned',
    regex: /Energy Shield Recharge starts when you are Stunned/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Envy Reserves no Mana',
    regex: /Envy Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Evasion Rating is increased by Uncapped Cold Resistance',
    regex: /Evasion Rating is increased by Uncapped Cold Resistance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Every 16 seconds you gain Elemental Overload for 8 seconds',
    regex: /Every 16 seconds you gain Elemental Overload for 8 seconds/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Every 16 seconds you gain Iron Reflexes for 8 seconds',
    regex: /Every 16 seconds you gain Iron Reflexes for 8 seconds/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Every 8 seconds, gain Avatar of Fire for 4 seconds',
    regex: /Every 8 seconds, gain Avatar of Fire for 4 seconds/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Extra gore',
    regex: /Extra gore/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Far Shot',
    regex: /Far Shot/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Fire Damage is increased by 1% per # Intelligence from Allocated Passives in Radius',
    regex: /Fire Damage is increased by 1% per (\d+) Intelligence from Allocated Passives in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Fire Resistance is #%',
    regex: /Fire Resistance is (\d+)%/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Fire Skills have #% chance to Poison on Hit',
    regex: /Fire Skills have (\d+)% chance to Poison on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Flammability has #% reduced Mana Reservation',
    regex: /Flammability has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Flasks apply to your Raised Zombies and Spectres',
    regex: /Flasks apply to your Raised Zombies and Spectres/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Flasks do not apply to you',
    regex: /Flasks do not apply to you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Focus has #% increased Cooldown Recovery Speed',
    regex: /Focus has (\d+)% increased Cooldown Recovery Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Fortify',
    regex: /Fortify/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Found Magic Items drop Identified',
    regex: /Found Magic Items drop Identified/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Frostbite has #% reduced Mana Reservation',
    regex: /Frostbite has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Frostblink has #% increased Duration',
    regex: /Frostblink has (\d+)% increased Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain # Armour per Grand Spectrum',
    regex: /Gain (\d+) Armour per Grand Spectrum/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain # Energy Shield for each Enemy you Hit which is affected by a Spider\'s Web',
    regex: /Gain (\d+) Energy Shield for each Enemy you Hit which is affected by a Spider's Web/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain # Life when you lose an Endurance Charge',
    regex: /Gain (\d+) Life when you lose an Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain # Life when you Stun an Enemy',
    regex: /Gain (\d+) Life when you Stun an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain # Mana per Grand Spectrum',
    regex: /Gain (\d+) Mana per Grand Spectrum/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain # Power Charges when you Warcry',
    regex: /Gain (\d+) Power Charges when you Warcry/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain #% of Cold Damage as Extra Chaos Damage per Frenzy Charge',
    regex: /Gain (\d+)% of Cold Damage as Extra Chaos Damage per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain #% of Elemental Damage as Extra Chaos Damage per Shaper Item Equipped',
    regex: /Gain (\d+)% of Elemental Damage as Extra Chaos Damage per Shaper Item Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain #% of Fire Damage as Extra Chaos Damage per Endurance Charge',
    regex: /Gain (\d+)% of Fire Damage as Extra Chaos Damage per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain #% of Lightning Damage as Extra Chaos Damage per Power Charge',
    regex: /Gain (\d+)% of Lightning Damage as Extra Chaos Damage per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain #% of Maximum Life as Extra Maximum Energy Shield',
    regex: /Gain (\d+)% of Maximum Life as Extra Maximum Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain #% of Maximum Mana as Extra Maximum Energy Shield',
    regex: /Gain (\d+)% of Maximum Mana as Extra Maximum Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain #% of Maximum Mana as Extra Maximum Energy Shield while affected by Clarity',
    regex: /Gain (\d+)% of Maximum Mana as Extra Maximum Energy Shield while affected by Clarity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain #% of Non-Chaos Damage as extra Chaos Damage per Siphoning Charge',
    regex: /Gain (\d+)% of Non-Chaos Damage as extra Chaos Damage per Siphoning Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain #% of Physical Attack Damage as Extra Fire Damage',
    regex: /Gain (\d+)% of Physical Attack Damage as Extra Fire Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain #% of Physical Attack Damage as Extra Lightning Damage',
    regex: /Gain (\d+)% of Physical Attack Damage as Extra Lightning Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Chaos Damage while at maximum Power Charges',
    regex: /Gain (\d+)% of Physical Damage as Extra Chaos Damage while at maximum Power Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Fire Damage per 1 Rage',
    regex: /Gain (\d+)% of Physical Damage as Extra Fire Damage per 1 Rage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Fire Damage while affected by Anger',
    regex: /Gain (\d+)% of Physical Damage as Extra Fire Damage while affected by Anger/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain #% of Physical Damage as Extra Lightning Damage while affected by Wrath',
    regex: /Gain (\d+)% of Physical Damage as Extra Lightning Damage while affected by Wrath/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain #% of Sword Physical Damage as Extra Fire Damage',
    regex: /Gain (\d+)% of Sword Physical Damage as Extra Fire Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain #% of Weapon Physical Damage as Extra Damage of a random Element',
    regex: /Gain (\d+)% of Weapon Physical Damage as Extra Damage of a random Element/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain #% of Weapon Physical Damage as Extra Damage of each Element',
    regex: /Gain (\d+)% of Weapon Physical Damage as Extra Damage of each Element/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain +# Life when you Hit a Bleeding Enemy',
    regex: /Gain \+(\d+) Life when you Hit a Bleeding Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain +# Life when you Taunt an Enemy',
    regex: /Gain \+(\d+) Life when you Taunt an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain +# Mana when you hit a Taunted Enemy',
    regex: /Gain \+(\d+) Mana when you hit a Taunted Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain +#% to Critical Strike Chance for 2 seconds after Spending a total of 800 Mana',
    regex: /Gain \+(\d+)% to Critical Strike Chance for 2 seconds after Spending a total of 800 Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain 1 Rage on Critical Hit with attacks, no more than once every # seconds',
    regex: /Gain 1 Rage on Critical Hit with attacks, no more than once every (\d+) seconds/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain a Divine Charge on Hit',
    regex: /Gain a Divine Charge on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain a Flask Charge when you deal a Critical Strike',
    regex: /Gain a Flask Charge when you deal a Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain a Flask Charge when you deal a Critical Strike while affected by Precision',
    regex: /Gain a Flask Charge when you deal a Critical Strike while affected by Precision/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain a Flask Charge when you deal a Critical Strike while at maximum Frenzy Charges',
    regex: /Gain a Flask Charge when you deal a Critical Strike while at maximum Frenzy Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain a Frenzy Charge if an Attack Ignites an Enemy',
    regex: /Gain a Frenzy Charge if an Attack Ignites an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain a Frenzy Charge on Critical Strike',
    regex: /Gain a Frenzy Charge on Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain a Frenzy Charge on every 50th Rampage Kill',
    regex: /Gain a Frenzy Charge on every 50th Rampage Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain a Frenzy Charge on Hit while Bleeding',
    regex: /Gain a Frenzy Charge on Hit while Bleeding/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain a Frenzy Charge on reaching Maximum Power Charges',
    regex: /Gain a Frenzy Charge on reaching Maximum Power Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain a Frenzy, Endurance, or Power Charge once per second while you are Stationary',
    regex: /Gain a Frenzy, Endurance, or Power Charge once per second while you are Stationary/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain a Power Charge for each Enemy you hit with a Critical Strike',
    regex: /Gain a Power Charge for each Enemy you hit with a Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain a Power Charge on Non-Critical Strike',
    regex: /Gain a Power Charge on Non-Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain a Power Charge when you use a Vaal Skill',
    regex: /Gain a Power Charge when you use a Vaal Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain a Spirit Charge every second',
    regex: /Gain a Spirit Charge every second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain a Void Charge every # seconds',
    regex: /Gain a Void Charge every (\d+) seconds/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain an Endurance Charge every second if you\'ve been Hit Recently',
    regex: /Gain an Endurance Charge every second if you've been Hit Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain an Endurance Charge when you lose a Power Charge',
    regex: /Gain an Endurance Charge when you lose a Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain an Endurance Charge when you take a Critical Strike',
    regex: /Gain an Endurance Charge when you take a Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Arcane Surge for 4 seconds when you create Consecrated Ground while affected by Zealotry',
    regex: /Gain Arcane Surge for 4 seconds when you create Consecrated Ground while affected by Zealotry/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Arcane Surge on Hit with Spells',
    regex: /Gain Arcane Surge on Hit with Spells/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Arcane Surge on Hit with Spells while at maximum Power Charges',
    regex: /Gain Arcane Surge on Hit with Spells while at maximum Power Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Arcane Surge when you deal a Critical Strike',
    regex: /Gain Arcane Surge when you deal a Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Armour equal to your Reserved Mana',
    regex: /Gain Armour equal to your Reserved Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Her Blessing for 3 seconds when you Ignite an Enemy',
    regex: /Gain Her Blessing for 3 seconds when you Ignite an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Her Embrace for # seconds when you Ignite an Enemy',
    regex: /Gain Her Embrace for (\d+) seconds when you Ignite an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Immunity to Physical Damage for # seconds on Rampage',
    regex: /Gain Immunity to Physical Damage for (\d+) seconds on Rampage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Maddening Presence for 10 seconds when you Kill a Rare or Unique Enemy',
    regex: /Gain Maddening Presence for 10 seconds when you Kill a Rare or Unique Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Onslaught for # seconds when you Cast Socketed Golem Skill',
    regex: /Gain Onslaught for (\d+) seconds when you Cast Socketed Golem Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Onslaught for # seconds when you Warcry',
    regex: /Gain Onslaught for (\d+) seconds when you Warcry/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Onslaught for 4 seconds on Hit while at maximum Frenzy Charges',
    regex: /Gain Onslaught for 4 seconds on Hit while at maximum Frenzy Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Rampage while at Maximum Endurance Charges',
    regex: /Gain Rampage while at Maximum Endurance Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Shaper\'s Presence for 10 seconds when you kill a Rare or Unique Enemy',
    regex: /Gain Shaper's Presence for 10 seconds when you kill a Rare or Unique Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Soul Eater during any Flask Effect',
    regex: /Gain Soul Eater during any Flask Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Soul Eater for # seconds when you use a Vaal Skill',
    regex: /Gain Soul Eater for (\d+) seconds when you use a Vaal Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Unholy Might for # seconds on Rampage',
    regex: /Gain Unholy Might for (\d+) seconds on Rampage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Unholy Might for 2 seconds on Melee Critical Strike',
    regex: /Gain Unholy Might for 2 seconds on Melee Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Unholy Might for 4 seconds on Critical Strike',
    regex: /Gain Unholy Might for 4 seconds on Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain Unholy Might on block for # seconds',
    regex: /Gain Unholy Might on block for (\d+) seconds/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gain up to your maximum number of Frenzy and Power Charges when you gain Cat\'s Stealth',
    regex: /Gain up to your maximum number of Frenzy and Power Charges when you gain Cat's Stealth/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gems can be Socketed in this Item ignoring Socket Colour',
    regex: /Gems can be Socketed in this Item ignoring Socket Colour/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gems Socketed in Blue Sockets gain #% increased Experience',
    regex: /Gems Socketed in Blue Sockets gain (\d+)% increased Experience/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gems Socketed in Green Sockets have +#% to Quality',
    regex: /Gems Socketed in Green Sockets have \+(\d+)% to Quality/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gems Socketed in Red Sockets have +# to Level',
    regex: /Gems Socketed in Red Sockets have \+(\d+) to Level/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Ghost Reaver',
    regex: /Ghost Reaver/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Glacial Cascade gains an additional stage with # Intelligence from Passives in Radius',
    regex: /Glacial Cascade gains an additional stage with (\d+) Intelligence from Passives in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Glows while in an Area containing a Unique Fish',
    regex: /Glows while in an Area containing a Unique Fish/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Golden Radiance',
    regex: /Golden Radiance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Golem Skills have #% increased Cooldown Recovery Speed',
    regex: /Golem Skills have (\d+)% increased Cooldown Recovery Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Golems Deal #% less Damage',
    regex: /Golems Deal (\d+)% less Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Golems have #% increased Attack and Cast Speed',
    regex: /Golems have (\d+)% increased Attack and Cast Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Golems have #% increased Cooldown Recovery Speed',
    regex: /Golems have (\d+)% increased Cooldown Recovery Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Golems have #% increased Maximum Life',
    regex: /Golems have (\d+)% increased Maximum Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Golems have #% increased Movement Speed',
    regex: /Golems have (\d+)% increased Movement Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Golems have #% less Life',
    regex: /Golems have (\d+)% less Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Golems have +# to Armour',
    regex: /Golems have \+(\d+) to Armour/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Golems Summoned in the past 8 seconds deal #% increased Damage',
    regex: /Golems Summoned in the past 8 seconds deal (\d+)% increased Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Gore Footprints',
    regex: /Gore Footprints/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grace has #% increased Aura Effect',
    regex: /Grace has (\d+)% increased Aura Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grace has #% reduced Mana Reservation',
    regex: /Grace has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grace Reserves no Mana',
    regex: /Grace Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants all bonuses of Unallocated Small Passive Skills in Radius',
    regex: /Grants all bonuses of Unallocated Small Passive Skills in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Bear Trap Skill',
    regex: /Grants Level (\d+) Bear Trap Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Blight Skill',
    regex: /Grants Level (\d+) Blight Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Blood Offering Skill',
    regex: /Grants Level (\d+) Blood Offering Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Death Aura Skill',
    regex: /Grants Level (\d+) Death Aura Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Doryani\'s Touch Skill',
    regex: /Grants Level (\d+) Doryani's Touch Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Frostbite Skill',
    regex: /Grants Level (\d+) Frostbite Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Frostblink Skill',
    regex: /Grants Level (\d+) Frostblink Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Gluttony of Elements Skill',
    regex: /Grants Level (\d+) Gluttony of Elements Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Icestorm Skill',
    regex: /Grants Level (\d+) Icestorm Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Illusory Warp Skill',
    regex: /Grants Level (\d+) Illusory Warp Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Intimidating Cry Skill',
    regex: /Grants Level (\d+) Intimidating Cry Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Lightning Warp Skill',
    regex: /Grants Level (\d+) Lightning Warp Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Petrification Statue Skill',
    regex: /Grants Level (\d+) Petrification Statue Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Precision Skill',
    regex: /Grants Level (\d+) Precision Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Purity of Elements Skill',
    regex: /Grants Level (\d+) Purity of Elements Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Purity of Fire Skill',
    regex: /Grants Level (\d+) Purity of Fire Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Purity of Ice Skill',
    regex: /Grants Level (\d+) Purity of Ice Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Purity of Lightning Skill',
    regex: /Grants Level (\d+) Purity of Lightning Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Reckoning Skill',
    regex: /Grants Level (\d+) Reckoning Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Scorching Ray Skill',
    regex: /Grants Level (\d+) Scorching Ray Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Smite Skill',
    regex: /Grants Level (\d+) Smite Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Summon Doedre\'s Effigy Skill Socketed Curses are Triggered by Doedre\'s Effigy when Summoned Socketed Curses ignore Curse Limit',
    regex: /Grants Level (\d+) Summon Doedre's Effigy Skill Socketed Curses are Triggered by Doedre's Effigy when Summoned Socketed Curses ignore Curse Limit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Summon Stone Golem Skill',
    regex: /Grants Level (\d+) Summon Stone Golem Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Vaal Impurity of Fire Skill',
    regex: /Grants Level (\d+) Vaal Impurity of Fire Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Vaal Impurity of Ice Skill',
    regex: /Grants Level (\d+) Vaal Impurity of Ice Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Vaal Impurity of Lightning Skill',
    regex: /Grants Level (\d+) Vaal Impurity of Lightning Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level # Vengeance Skill',
    regex: /Grants Level (\d+) Vengeance Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level 20 Summon Bestial Rhoa Skill',
    regex: /Grants Level 20 Summon Bestial Rhoa Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level 20 Summon Bestial Snake Skill',
    regex: /Grants Level 20 Summon Bestial Snake Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Level 20 Summon Bestial Ursa Skill',
    regex: /Grants Level 20 Summon Bestial Ursa Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Malachai\'s Endurance, Frenzy and Power for 6 seconds each, in sequence',
    regex: /Grants Malachai's Endurance, Frenzy and Power for 6 seconds each, in sequence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Summon Harbinger of Brutality Skill',
    regex: /Grants Summon Harbinger of Brutality Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Summon Harbinger of Directions Skill',
    regex: /Grants Summon Harbinger of Directions Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Summon Harbinger of Focus Skill',
    regex: /Grants Summon Harbinger of Focus Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Summon Harbinger of Storms Skill',
    regex: /Grants Summon Harbinger of Storms Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Summon Harbinger of the Arcane Skill',
    regex: /Grants Summon Harbinger of the Arcane Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Grants Summon Harbinger of Time Skill',
    regex: /Grants Summon Harbinger of Time Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Half of your Strength is added to your Minions',
    regex: /Half of your Strength is added to your Minions/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Has # Abyssal Sockets',
    regex: /Has (\d+) Abyssal Sockets/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Has # Sockets',
    regex: /Has (\d+) Sockets/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Has 1 Socket',
    regex: /Has 1 Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Has an additional Implicit Mod',
    regex: /Has an additional Implicit Mod/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Has Consumed 1 Gem',
    regex: /Has Consumed 1 Gem/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Has no Attribute Requirements',
    regex: /Has no Attribute Requirements/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Has no Sockets',
    regex: /Has no Sockets/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Has one socket of each colour',
    regex: /Has one socket of each colour/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Haste Reserves no Mana',
    regex: /Haste Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Hatred Reserves no Mana',
    regex: /Hatred Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Herald of Agony has #% increased Buff Effect',
    regex: /Herald of Agony has (\d+)% increased Buff Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Herald of Agony has #% reduced Mana Reservation',
    regex: /Herald of Agony has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Herald of Ash has #% increased Buff Effect',
    regex: /Herald of Ash has (\d+)% increased Buff Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Herald of Ash has #% reduced Mana Reservation',
    regex: /Herald of Ash has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Herald of Ice has #% increased Buff Effect',
    regex: /Herald of Ice has (\d+)% increased Buff Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Herald of Ice has #% reduced Mana Reservation',
    regex: /Herald of Ice has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Herald of Purity has #% increased Buff Effect',
    regex: /Herald of Purity has (\d+)% increased Buff Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Herald of Purity has #% reduced Mana Reservation',
    regex: /Herald of Purity has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Herald of Thunder has #% increased Buff Effect',
    regex: /Herald of Thunder has (\d+)% increased Buff Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Herald of Thunder has #% reduced Mana Reservation',
    regex: /Herald of Thunder has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Hindered',
    regex: /Hindered/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Historic',
    regex: /Historic/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Hits against Nearby Enemies have #% increased Critical Strike Chance',
    regex: /Hits against Nearby Enemies have (\d+)% increased Critical Strike Chance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Hits against Nearby Enemies have 50% increased Critical Strike Chance',
    regex: /Hits against Nearby Enemies have 50% increased Critical Strike Chance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Hits have #% increased Critical Strike Chance against you',
    regex: /Hits have (\d+)% increased Critical Strike Chance against you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Hits ignore Enemy Monster Chaos Resistance if all Equipped Items are Shaper Items',
    regex: /Hits ignore Enemy Monster Chaos Resistance if all Equipped Items are Shaper Items/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Hits ignore Enemy Monster Fire Resistance while you are Ignited',
    regex: /Hits ignore Enemy Monster Fire Resistance while you are Ignited/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Hits with this Weapon always Ignite, Freeze, and Shock',
    regex: /Hits with this Weapon always Ignite, Freeze, and Shock/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Hits with this Weapon deal #% increased Damage to Frozen Enemies',
    regex: /Hits with this Weapon deal (\d+)% increased Damage to Frozen Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Hits with this Weapon deal #% increased Damage to Ignited Enemies',
    regex: /Hits with this Weapon deal (\d+)% increased Damage to Ignited Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Hits with this Weapon deal #% increased Damage to Shocked Enemies',
    regex: /Hits with this Weapon deal (\d+)% increased Damage to Shocked Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'If you Consumed a corpse Recently, you and nearby Allies Regenerate #% of Life per second',
    regex: /If you Consumed a corpse Recently, you and nearby Allies Regenerate (\d+)% of Life per second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'If you have Blocked Recently, you and nearby Allies Regenerate #% of Life per second',
    regex: /If you have Blocked Recently, you and nearby Allies Regenerate (\d+)% of Life per second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'If you\'ve Warcried Recently, you and nearby allies have #% increased Attack, Cast and Movement Speed',
    regex: /If you've Warcried Recently, you and nearby allies have (\d+)% increased Attack, Cast and Movement Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Ignited Enemies Burn #% slower',
    regex: /Ignited Enemies Burn (\d+)% slower/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Ignited Enemies you hit are destroyed on Kill',
    regex: /Ignited Enemies you hit are destroyed on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Ignites you inflict deal Damage #% faster',
    regex: /Ignites you inflict deal Damage (\d+)% faster/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Ignites you inflict spread to other Enemies within a Radius of #',
    regex: /Ignites you inflict spread to other Enemies within a Radius of (\d+)/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Ignites you inflict with Attacks deal Damage #% faster',
    regex: /Ignites you inflict with Attacks deal Damage (\d+)% faster/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Immune to Burning Ground, Shocked Ground and Chilled Ground',
    regex: /Immune to Burning Ground, Shocked Ground and Chilled Ground/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Immune to Curses if Corrupted',
    regex: /Immune to Curses if Corrupted/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Immune to Freeze and Chill while Ignited',
    regex: /Immune to Freeze and Chill while Ignited/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Immune to Freeze while affected by Purity of Ice',
    regex: /Immune to Freeze while affected by Purity of Ice/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Immune to Ignite while affected by Purity of Fire',
    regex: /Immune to Ignite while affected by Purity of Fire/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Immune to Shock while affected by Purity of Lightning',
    regex: /Immune to Shock while affected by Purity of Lightning/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Impales you inflict last # additional Hits while using Pride',
    regex: /Impales you inflict last (\d+) additional Hits while using Pride/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Implicit Modifier magnitudes are doubled',
    regex: /Implicit Modifier magnitudes are doubled/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Implicit Modifier magnitudes are tripled',
    regex: /Implicit Modifier magnitudes are tripled/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Increases and Reductions to Cast Speed also Apply to Trap Throwing Speed',
    regex: /Increases and Reductions to Cast Speed also Apply to Trap Throwing Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Increases and Reductions to Cold Damage in Radius are Transformed to apply to Physical Damage',
    regex: /Increases and Reductions to Cold Damage in Radius are Transformed to apply to Physical Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Increases and Reductions to Damage of Vaal Skills also apply to Non-Vaal Skills',
    regex: /Increases and Reductions to Damage of Vaal Skills also apply to Non-Vaal Skills/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Increases and Reductions to Energy Shield in Radius are Transformed to apply to Armour at 200% of their value',
    regex: /Increases and Reductions to Energy Shield in Radius are Transformed to apply to Armour at 200% of their value/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Increases and Reductions to Life in Radius are Transformed to apply to Energy Shield',
    regex: /Increases and Reductions to Life in Radius are Transformed to apply to Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Increases and Reductions to Life in Radius are Transformed to apply to Mana at 200% of their value',
    regex: /Increases and Reductions to Life in Radius are Transformed to apply to Mana at 200% of their value/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Increases and Reductions to Light Radius also apply to Accuracy',
    regex: /Increases and Reductions to Light Radius also apply to Accuracy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Increases and Reductions to Light Radius also apply to Area of Effect at #% of their value',
    regex: /Increases and Reductions to Light Radius also apply to Area of Effect at (\d+)% of their value/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Increases and Reductions to Light Radius also apply to Damage',
    regex: /Increases and Reductions to Light Radius also apply to Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Increases and Reductions to Minion Damage also affect you',
    regex: /Increases and Reductions to Minion Damage also affect you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Increases and Reductions to other Damage Types in Radius are Transformed to apply to Fire Damage',
    regex: /Increases and Reductions to other Damage Types in Radius are Transformed to apply to Fire Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Increases and Reductions to Physical Damage in Radius are Transformed to apply to Cold Damage',
    regex: /Increases and Reductions to Physical Damage in Radius are Transformed to apply to Cold Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Increases and Reductions to Spell Damage also apply to Attacks',
    regex: /Increases and Reductions to Spell Damage also apply to Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Inflicts a random Level # Curse on you when your Totems die',
    regex: /Inflicts a random Level (\d+) Curse on you when your Totems die/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Inner Conviction',
    regex: /Inner Conviction/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Insufficient Mana doesn\'t prevent your Melee Attacks',
    regex: /Insufficient Mana doesn't prevent your Melee Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Intelligence from Passives in Radius is Transformed to Dexterity',
    regex: /Intelligence from Passives in Radius is Transformed to Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Intelligence from Passives in Radius is Transformed to Strength',
    regex: /Intelligence from Passives in Radius is Transformed to Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Intelligence provides no bonus to Maximum Mana',
    regex: /Intelligence provides no bonus to Maximum Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Intimidate Enemies for 4 seconds on Hit with Attacks',
    regex: /Intimidate Enemies for 4 seconds on Hit with Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Intimidate Enemies for 4 seconds on Hit with Attacks while at maximum Endurance Charges',
    regex: /Intimidate Enemies for 4 seconds on Hit with Attacks while at maximum Endurance Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Iron Grip',
    regex: /Iron Grip/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Iron Reflexes',
    regex: /Iron Reflexes/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Iron Reflexes while stationary',
    regex: /Iron Reflexes while stationary/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Iron Will',
    regex: /Iron Will/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Item drops on death',
    regex: /Item drops on death/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Item drops on Death if Equipped by an Animated Guardian',
    regex: /Item drops on Death if Equipped by an Animated Guardian/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Items and Gems have #% increased Attribute Requirements',
    regex: /Items and Gems have (\d+)% increased Attribute Requirements/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Killed Enemies Explode, dealing #% of their Life as Physical Damage',
    regex: /Killed Enemies Explode, dealing (\d+)% of their Life as Physical Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Kills grant an additional Vaal Soul if you have Rampaged Recently',
    regex: /Kills grant an additional Vaal Soul if you have Rampaged Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Knockback direction is reversed',
    regex: /Knockback direction is reversed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Leech Energy Shield instead of Life',
    regex: /Leech Energy Shield instead of Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Left ring slot: #% increased Mana Regeneration Rate',
    regex: /Left ring slot: (\d+)% increased Mana Regeneration Rate/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Left ring slot: #% reduced Reflected Elemental Damage taken',
    regex: /Left ring slot: (\d+)% reduced Reflected Elemental Damage taken/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Left ring slot: +# to maximum Energy Shield',
    regex: /Left ring slot: \+(\d+) to maximum Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Left ring slot: Projectiles from Spells cannot Chain',
    regex: /Left ring slot: Projectiles from Spells cannot Chain/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Left ring slot: Projectiles from Spells Fork',
    regex: /Left ring slot: Projectiles from Spells Fork/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Left ring slot: Regenerate # Mana per Second',
    regex: /Left ring slot: Regenerate (\d+) Mana per Second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Left ring slot: You cannot Recharge or Regenerate Energy Shield',
    regex: /Left ring slot: You cannot Recharge or Regenerate Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Life and Mana Leech from Critical Strikes are instant',
    regex: /Life and Mana Leech from Critical Strikes are instant/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Life Leech effects are not removed at Full Life',
    regex: /Life Leech effects are not removed at Full Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Life Leech effects are not removed at Full Life Life Leech effects Recover Energy Shield instead while on Full Life',
    regex: /Life Leech effects are not removed at Full Life Life Leech effects Recover Energy Shield instead while on Full Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Life Leech from Hits with this Weapon is instant',
    regex: /Life Leech from Hits with this Weapon is instant/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Light Radius is based on Energy Shield instead of Life',
    regex: /Light Radius is based on Energy Shield instead of Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Lightning Damage from Enemies Hitting you is Lucky',
    regex: /Lightning Damage from Enemies Hitting you is Lucky/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Lightning Resistance is #%',
    regex: /Lightning Resistance is (\d+)%/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Lightning Skills have #% chance to Poison on Hit',
    regex: /Lightning Skills have (\d+)% chance to Poison on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Lose # Life for each Enemy hit by your Attacks',
    regex: /Lose (\d+) Life for each Enemy hit by your Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Lose # Life for each Enemy hit by your Spells',
    regex: /Lose (\d+) Life for each Enemy hit by your Spells/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Lose # Mana per Second',
    regex: /Lose (\d+) Mana per Second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Lose #% of Energy Shield on Kill',
    regex: /Lose (\d+)% of Energy Shield on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Lose #% of Life on Kill',
    regex: /Lose (\d+)% of Life on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Lose #% of Mana per Second',
    regex: /Lose (\d+)% of Mana per Second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Lose #% of your Energy Shield when you Block',
    regex: /Lose (\d+)% of your Energy Shield when you Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Lose a Power Charge each second if you have not Detonated Mines Recently',
    regex: /Lose a Power Charge each second if you have not Detonated Mines Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Lose a Power Charge when Hit',
    regex: /Lose a Power Charge when Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Lose all Endurance Charges when Rampage ends',
    regex: /Lose all Endurance Charges when Rampage ends/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Lose all Frenzy, Endurance, and Power Charges when you Move',
    regex: /Lose all Frenzy, Endurance, and Power Charges when you Move/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Lose all Power Charges on Critical Strike',
    regex: /Lose all Power Charges on Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Lose all Power Charges on reaching Maximum Power Charges',
    regex: /Lose all Power Charges on reaching Maximum Power Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Lose Souls gained from Soul Eater when you use a Flask',
    regex: /Lose Souls gained from Soul Eater when you use a Flask/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Malevolence Reserves no Mana',
    regex: /Malevolence Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Mana Reservation of Herald Skills is always 45%',
    regex: /Mana Reservation of Herald Skills is always 45%/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Manifest Dancing Dervish also manifests a copy of Dancing Dervish',
    regex: /Manifest Dancing Dervish also manifests a copy of Dancing Dervish/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Manifested Dancing Dervish dies when Rampage ends',
    regex: /Manifested Dancing Dervish dies when Rampage ends/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Manifested Dancing Dervish disables both weapon slots',
    regex: /Manifested Dancing Dervish disables both weapon slots/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Melee and Melee Weapon Type modifiers in Radius are Transformed to Bow Modifiers',
    regex: /Melee and Melee Weapon Type modifiers in Radius are Transformed to Bow Modifiers/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Melee Attacks have #% chance to cause Bleeding',
    regex: /Melee Attacks have (\d+)% chance to cause Bleeding/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Melee Attacks have #% chance to Poison on Hit',
    regex: /Melee Attacks have (\d+)% chance to Poison on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Melee Critical Strikes Poison the Enemy',
    regex: /Melee Critical Strikes Poison the Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Mercury Footprints',
    regex: /Mercury Footprints/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Mind Over Matter',
    regex: /Mind Over Matter/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Mines can be Detonated an additional time',
    regex: /Mines can be Detonated an additional time/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minion Instability',
    regex: /Minion Instability/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions cannot be Blinded',
    regex: /Minions cannot be Blinded/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions convert #% of Physical Damage to Chaos Damage per White Socket',
    regex: /Minions convert (\d+)% of Physical Damage to Chaos Damage per White Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions convert #% of Physical Damage to Cold Damage per Green Socket',
    regex: /Minions convert (\d+)% of Physical Damage to Cold Damage per Green Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions convert #% of Physical Damage to Fire Damage per Red Socket',
    regex: /Minions convert (\d+)% of Physical Damage to Fire Damage per Red Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions convert #% of Physical Damage to Lightning Damage per Blue Socket',
    regex: /Minions convert (\d+)% of Physical Damage to Lightning Damage per Blue Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions deal #% increased Damage if you\'ve Hit Recently',
    regex: /Minions deal (\d+)% increased Damage if you've Hit Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions deal #% increased Damage per 10 Dexterity',
    regex: /Minions deal (\d+)% increased Damage per 10 Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions gain #% of Elemental Damage as Extra Chaos Damage',
    regex: /Minions gain (\d+)% of Elemental Damage as Extra Chaos Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions gain #% of Physical Damage as Extra Cold Damage',
    regex: /Minions gain (\d+)% of Physical Damage as Extra Cold Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions gain Unholy Might for # seconds on Kill',
    regex: /Minions gain Unholy Might for (\d+) seconds on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions have #% chance to Blind Enemies on hit',
    regex: /Minions have (\d+)% chance to Blind Enemies on hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions have #% chance to Dodge Attack Hits',
    regex: /Minions have (\d+)% chance to Dodge Attack Hits/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions have #% chance to Dodge Spell Hits',
    regex: /Minions have (\d+)% chance to Dodge Spell Hits/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions have #% chance to Freeze, Shock and Ignite',
    regex: /Minions have (\d+)% chance to Freeze, Shock and Ignite/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions have #% chance to Poison Enemies on Hit',
    regex: /Minions have (\d+)% chance to Poison Enemies on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions have #% increased Area of Effect',
    regex: /Minions have (\d+)% increased Area of Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions have #% reduced maximum Life',
    regex: /Minions have (\d+)% reduced maximum Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions have #% reduced Movement Speed',
    regex: /Minions have (\d+)% reduced Movement Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions have +# to Accuracy Rating per 10 Devotion',
    regex: /Minions have \+(\d+) to Accuracy Rating per 10 Devotion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions have +# to Armour',
    regex: /Minions have \+(\d+) to Armour/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions have +#% Chance to Block Spell Damage',
    regex: /Minions have \+(\d+)% Chance to Block Spell Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions have +#% to Cold Resistance',
    regex: /Minions have \+(\d+)% to Cold Resistance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions Leech #% of Damage as Life against Poisoned Enemies',
    regex: /Minions Leech (\d+)% of Damage as Life against Poisoned Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions Recover #% of Life on Killing a Poisoned Enemy',
    regex: /Minions Recover (\d+)% of Life on Killing a Poisoned Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions Recover #% of their Life when they Block',
    regex: /Minions Recover (\d+)% of their Life when they Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions\' Attacks deal # to # additional Physical Damage',
    regex: /Minions' Attacks deal (\d+) to (\d+) additional Physical Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Minions\' Hits can only Kill Ignited Enemies',
    regex: /Minions' Hits can only Kill Ignited Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Modifiers to Claw Attack Speed also apply to Unarmed Attack Speed',
    regex: /Modifiers to Claw Attack Speed also apply to Unarmed Attack Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Modifiers to Claw Critical Strike Chance also apply to Unarmed Attack Critical Strike Chance',
    regex: /Modifiers to Claw Critical Strike Chance also apply to Unarmed Attack Critical Strike Chance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Modifiers to Claw Damage also apply to Unarmed Attack Damage',
    regex: /Modifiers to Claw Damage also apply to Unarmed Attack Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Monsters fire # additional Projectiles',
    regex: /Monsters fire (\d+) additional Projectiles/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Monsters have Onslaught',
    regex: /Monsters have Onslaught/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Mortal Conviction',
    regex: /Mortal Conviction/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Movement Attack Skills have #% reduced Attack Speed',
    regex: /Movement Attack Skills have (\d+)% reduced Attack Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Movement Skills cost no Mana',
    regex: /Movement Skills cost no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Movement Skills deal no Physical Damage',
    regex: /Movement Skills deal no Physical Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Movement Speed cannot be modified to below base value',
    regex: /Movement Speed cannot be modified to below base value/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Moving while Bleeding doesn\'t cause you to take extra Damage',
    regex: /Moving while Bleeding doesn't cause you to take extra Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby allies gain #% increased Damage',
    regex: /Nearby allies gain (\d+)% increased Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Allies gain #% increased Mana Regeneration Rate',
    regex: /Nearby Allies gain (\d+)% increased Mana Regeneration Rate/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Allies gain #% of Life Regenerated per second',
    regex: /Nearby Allies gain (\d+)% of Life Regenerated per second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Allies have #% increased Cast Speed per 100 Intelligence you have',
    regex: /Nearby Allies have (\d+)% increased Cast Speed per 100 Intelligence you have/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Allies have #% increased Defences per 100 Strength you have',
    regex: /Nearby Allies have (\d+)% increased Defences per 100 Strength you have/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Allies have #% increased Item Rarity',
    regex: /Nearby Allies have (\d+)% increased Item Rarity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Allies have +#% to Critical Strike Multiplier',
    regex: /Nearby Allies have \+(\d+)% to Critical Strike Multiplier/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Allies have +#% to Critical Strike Multiplier per 100 Dexterity you have',
    regex: /Nearby Allies have \+(\d+)% to Critical Strike Multiplier per 100 Dexterity you have/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Allies have Culling Strike',
    regex: /Nearby Allies have Culling Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Allies have Fortify',
    regex: /Nearby Allies have Fortify/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby allies Recover #% of your Maximum Life when you Die',
    regex: /Nearby allies Recover (\d+)% of your Maximum Life when you Die/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Allies\' Action Speed cannot be modified to below base value',
    regex: /Nearby Allies' Action Speed cannot be modified to below base value/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Allies\' Damage with Hits is Lucky',
    regex: /Nearby Allies' Damage with Hits is Lucky/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Enemies are Blinded',
    regex: /Nearby Enemies are Blinded/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Enemies are Hindered, with #% reduced Movement Speed',
    regex: /Nearby Enemies are Hindered, with (\d+)% reduced Movement Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Enemies are Intimidated',
    regex: /Nearby Enemies are Intimidated/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Enemies cannot deal Critical Strikes',
    regex: /Nearby Enemies cannot deal Critical Strikes/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Enemies grant #% increased Flask Charges',
    regex: /Nearby Enemies grant (\d+)% increased Flask Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Enemies have #% increased Effect of Curses on them',
    regex: /Nearby Enemies have (\d+)% increased Effect of Curses on them/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Enemies have #% reduced Stun and Block Recovery',
    regex: /Nearby Enemies have (\d+)% reduced Stun and Block Recovery/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Enemies have #% to all Resistances',
    regex: /Nearby Enemies have (\d+)% to all Resistances/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Nearby Enemies take # Lightning Damage per second',
    regex: /Nearby Enemies take (\d+) Lightning Damage per second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Never deal Critical Strikes',
    regex: /Never deal Critical Strikes/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'No Chance to Block',
    regex: /No Chance to Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'No Physical Damage',
    regex: /No Physical Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Non-Aura Curses you inflict are not removed from Dying Enemies',
    regex: /Non-Aura Curses you inflict are not removed from Dying Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Non-Channelling Skills have -# to Total Mana Cost while affected by Clarity',
    regex: /Non-Channelling Skills have -(\d+) to Total Mana Cost while affected by Clarity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Non-Chilled Enemies you inflict Bleeding on are Chilled',
    regex: /Non-Chilled Enemies you inflict Bleeding on are Chilled/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Non-Chilled Enemies you Poison are Chilled',
    regex: /Non-Chilled Enemies you Poison are Chilled/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Non-Critical Strikes deal no Damage',
    regex: /Non-Critical Strikes deal no Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Non-instant Mana Recovery from Flasks is also Recovered as Life',
    regex: /Non-instant Mana Recovery from Flasks is also Recovered as Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Notable Passive Skills in Radius are Transformed to instead grant: Minions have #% reduced Movement Speed',
    regex: /Notable Passive Skills in Radius are Transformed to instead grant: Minions have (\d+)% reduced Movement Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Notable Passive Skills in Radius are Transformed to instead grant: Minions take #% increased Damage',
    regex: /Notable Passive Skills in Radius are Transformed to instead grant: Minions take (\d+)% increased Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Notable Passive Skills in Radius grant nothing',
    regex: /Notable Passive Skills in Radius grant nothing/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'On Killing a Poisoned Enemy, nearby Enemies are Poisoned',
    regex: /On Killing a Poisoned Enemy, nearby Enemies are Poisoned/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Onslaught',
    regex: /Onslaught/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Pain Attunement',
    regex: /Pain Attunement/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Passive Skills in Radius also grant: Traps and Mines deal # to # added Physical Damage',
    regex: /Passive Skills in Radius also grant: Traps and Mines deal (\d+) to (\d+) added Physical Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Passives granting Cold Resistance or all Elemental Resistances in Radius also grant an equal chance to gain a Frenzy Charge on Kill',
    regex: /Passives granting Cold Resistance or all Elemental Resistances in Radius also grant an equal chance to gain a Frenzy Charge on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Passives granting Cold Resistance or all Elemental Resistances in Radius also grant Chance to Dodge Attack Hits at #% of its value',
    regex: /Passives granting Cold Resistance or all Elemental Resistances in Radius also grant Chance to Dodge Attack Hits at (\d+)% of its value/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Passives granting Fire Resistance or all Elemental Resistances in Radius also grant an equal chance to gain an Endurance Charge on Kill',
    regex: /Passives granting Fire Resistance or all Elemental Resistances in Radius also grant an equal chance to gain an Endurance Charge on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Passives granting Fire Resistance or all Elemental Resistances in Radius also grant Chance to Block Attack Damage at #% of its value',
    regex: /Passives granting Fire Resistance or all Elemental Resistances in Radius also grant Chance to Block Attack Damage at (\d+)% of its value/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Passives granting Lightning Resistance or all Elemental Resistances in Radius also grant an equal chance to gain a Power Charge on Kill',
    regex: /Passives granting Lightning Resistance or all Elemental Resistances in Radius also grant an equal chance to gain a Power Charge on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Passives granting Lightning Resistance or all Elemental Resistances in Radius also grant Chance to Block Spell Damage at #% of its value',
    regex: /Passives granting Lightning Resistance or all Elemental Resistances in Radius also grant Chance to Block Spell Damage at (\d+)% of its value/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Passives in Radius apply to Minions instead of you',
    regex: /Passives in Radius apply to Minions instead of you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Passives in Radius can be Allocated without being connected to your tree',
    regex: /Passives in Radius can be Allocated without being connected to your tree/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Penetrate #% Elemental Resistances per Frenzy Charge',
    regex: /Penetrate (\d+)% Elemental Resistances per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Perfect Agony',
    regex: /Perfect Agony/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Permanently Intimidate Enemies on Block',
    regex: /Permanently Intimidate Enemies on Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Phase Acrobatics',
    regex: /Phase Acrobatics/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Phasing',
    regex: /Phasing/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Physical Damage is increased by 1% per # Intelligence from Allocated Passives in Radius',
    regex: /Physical Damage is increased by 1% per (\d+) Intelligence from Allocated Passives in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Point Blank',
    regex: /Point Blank/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Poison Cursed Enemies on hit',
    regex: /Poison Cursed Enemies on hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Poison you inflict is Reflected to you if you have fewer than 100 Poisons on you',
    regex: /Poison you inflict is Reflected to you if you have fewer than 100 Poisons on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Poisoned Enemies you Kill with Hits Shatter',
    regex: /Poisoned Enemies you Kill with Hits Shatter/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Poisonous Hit',
    regex: /Poisonous Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Poisons on you expire #% slower',
    regex: /Poisons on you expire (\d+)% slower/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Poisons you inflict deal Damage #% faster',
    regex: /Poisons you inflict deal Damage (\d+)% faster/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Precision has 50% less Mana Reservation',
    regex: /Precision has 50% less Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Pride Reserves no Mana',
    regex: /Pride Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Primordial',
    regex: /Primordial/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Projectile Attack Skills have #% increased Critical Strike Chance',
    regex: /Projectile Attack Skills have (\d+)% increased Critical Strike Chance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Projectile Damage is increased by 1% per # Dexterity from Allocated Passives in Radius',
    regex: /Projectile Damage is increased by 1% per (\d+) Dexterity from Allocated Passives in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Projectiles Fork',
    regex: /Projectiles Fork/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Projectiles from Attacks have #% chance to inflict Bleeding on Hit while you have a Bestial Minion',
    regex: /Projectiles from Attacks have (\d+)% chance to inflict Bleeding on Hit while you have a Bestial Minion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Projectiles from Attacks have #% chance to Maim on Hit while you have a Bestial Minion',
    regex: /Projectiles from Attacks have (\d+)% chance to Maim on Hit while you have a Bestial Minion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Projectiles from Attacks have #% chance to Poison on Hit while you have a Bestial Minion',
    regex: /Projectiles from Attacks have (\d+)% chance to Poison on Hit while you have a Bestial Minion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Projectiles from Spells cannot Pierce',
    regex: /Projectiles from Spells cannot Pierce/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Projectiles gain #% of Non-Chaos Damage as extra Chaos Damage per Chain',
    regex: /Projectiles gain (\d+)% of Non-Chaos Damage as extra Chaos Damage per Chain/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Projectiles have #% chance to Freeze',
    regex: /Projectiles have (\d+)% chance to Freeze/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Projectiles have #% chance to Ignite',
    regex: /Projectiles have (\d+)% chance to Ignite/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Projectiles have #% chance to Shock',
    regex: /Projectiles have (\d+)% chance to Shock/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Projectiles Pierce # additional Targets while you have Phasing',
    regex: /Projectiles Pierce (\d+) additional Targets while you have Phasing/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Projectiles Pierce all Targets while you have Phasing',
    regex: /Projectiles Pierce all Targets while you have Phasing/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Projectiles Return to you after Hitting targets',
    regex: /Projectiles Return to you after Hitting targets/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Properties are doubled while in a Breach',
    regex: /Properties are doubled while in a Breach/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Purity of Elements Reserves no Mana',
    regex: /Purity of Elements Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Purity of Fire has #% reduced Mana Reservation',
    regex: /Purity of Fire has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Purity of Fire Reserves no Mana',
    regex: /Purity of Fire Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Purity of Ice has #% reduced Mana Reservation',
    regex: /Purity of Ice has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Purity of Ice Reserves no Mana',
    regex: /Purity of Ice Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Purity of Lightning has #% reduced Mana Reservation',
    regex: /Purity of Lightning has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Purity of Lightning Reserves no Mana',
    regex: /Purity of Lightning Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Raise Zombie does not require a corpse',
    regex: /Raise Zombie does not require a corpse/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Raised Zombies deal #% increased Damage',
    regex: /Raised Zombies deal (\d+)% increased Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Raised Zombies deal #% more Physical Damage',
    regex: /Raised Zombies deal (\d+)% more Physical Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Raised Zombies have #% increased maximum Life',
    regex: /Raised Zombies have (\d+)% increased maximum Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Raised Zombies have +# to maximum Life',
    regex: /Raised Zombies have \+(\d+) to maximum Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Raised Zombies have +#% to all Resistances',
    regex: /Raised Zombies have \+(\d+)% to all Resistances/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Rampage',
    regex: /Rampage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Recover # Energy Shield when your Trap is triggered by an Enemy',
    regex: /Recover (\d+) Energy Shield when your Trap is triggered by an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Recover # Life when you Block',
    regex: /Recover (\d+) Life when you Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Recover # Life when you Ignite an Enemy',
    regex: /Recover (\d+) Life when you Ignite an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Recover # Life when your Trap is triggered by an Enemy',
    regex: /Recover (\d+) Life when your Trap is triggered by an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Recover #% of Energy Shield when you lose a Spirit Charge',
    regex: /Recover (\d+)% of Energy Shield when you lose a Spirit Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Recover #% of Life on Rampage',
    regex: /Recover (\d+)% of Life on Rampage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Recover #% of Life when you Consume a corpse',
    regex: /Recover (\d+)% of Life when you Consume a corpse/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Recover #% of Life when you Ignite an Enemy',
    regex: /Recover (\d+)% of Life when you Ignite an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Recover #% of Life when you lose a Spirit Charge',
    regex: /Recover (\d+)% of Life when you lose a Spirit Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Recover #% of Life when you use a Mana Flask',
    regex: /Recover (\d+)% of Life when you use a Mana Flask/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Recover #% of Mana when you Shock an Enemy',
    regex: /Recover (\d+)% of Mana when you Shock an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Recover #% of your maximum Life on use',
    regex: /Recover (\d+)% of your maximum Life on use/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Reflect Shocks applied to you to all Nearby Enemies',
    regex: /Reflect Shocks applied to you to all Nearby Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Reflects # Chaos Damage to Melee Attackers',
    regex: /Reflects (\d+) Chaos Damage to Melee Attackers/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Reflects # Cold Damage to Melee Attackers',
    regex: /Reflects (\d+) Cold Damage to Melee Attackers/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Reflects # Fire Damage to Melee Attackers',
    regex: /Reflects (\d+) Fire Damage to Melee Attackers/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Reflects # Physical Damage to Attackers on Block',
    regex: /Reflects (\d+) Physical Damage to Attackers on Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Reflects # to # Lightning Damage to Attackers on Block',
    regex: /Reflects (\d+) to (\d+) Lightning Damage to Attackers on Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Reflects # to # Lightning Damage to Melee Attackers',
    regex: /Reflects (\d+) to (\d+) Lightning Damage to Melee Attackers/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Reflects # to # Physical Damage to Attackers on Block',
    regex: /Reflects (\d+) to (\d+) Physical Damage to Attackers on Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Reflects # to # Physical Damage to Melee Attackers',
    regex: /Reflects (\d+) to (\d+) Physical Damage to Melee Attackers/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Energy Shield per second if all Equipped items are Corrupted',
    regex: /Regenerate (\d+) Energy Shield per second if all Equipped items are Corrupted/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Energy Shield per Second per Poison on you, up to 250 per second',
    regex: /Regenerate (\d+) Energy Shield per Second per Poison on you, up to 250 per second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Life over 1 second when you Cast a Spell',
    regex: /Regenerate (\d+) Life over 1 second when you Cast a Spell/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Life per second for each Uncorrupted Item Equipped',
    regex: /Regenerate (\d+) Life per second for each Uncorrupted Item Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Life per second if no Equipped Items are Corrupted',
    regex: /Regenerate (\d+) Life per second if no Equipped Items are Corrupted/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Life per second if you have at least 1000 Maximum Energy Shield',
    regex: /Regenerate (\d+) Life per second if you have at least 1000 Maximum Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Life per second if you have at least 1500 Maximum Energy Shield',
    regex: /Regenerate (\d+) Life per second if you have at least 1500 Maximum Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Life per second if you have at least 500 Maximum Energy Shield',
    regex: /Regenerate (\d+) Life per second if you have at least 500 Maximum Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Life per second per Buff on you',
    regex: /Regenerate (\d+) Life per second per Buff on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Life per second per Endurance Charge',
    regex: /Regenerate (\d+) Life per second per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Life per second per Level',
    regex: /Regenerate (\d+) Life per second per Level/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Life per Second while affected by Vitality',
    regex: /Regenerate (\d+) Life per Second while affected by Vitality/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Life per second while Ignited',
    regex: /Regenerate (\d+) Life per second while Ignited/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Life per second while moving',
    regex: /Regenerate (\d+) Life per second while moving/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Life per Second while you have Avian\'s Flight',
    regex: /Regenerate (\d+) Life per Second while you have Avian's Flight/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Mana per second if all Equipped Items are Corrupted',
    regex: /Regenerate (\d+) Mana per second if all Equipped Items are Corrupted/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Mana per Second per 10 Devotion',
    regex: /Regenerate (\d+) Mana per Second per 10 Devotion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Mana per Second per Power Charge',
    regex: /Regenerate (\d+) Mana per Second per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Mana per Second while Dual Wielding',
    regex: /Regenerate (\d+) Mana per Second while Dual Wielding/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Mana per Second while holding a Shield',
    regex: /Regenerate (\d+) Mana per Second while holding a Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Mana per second while wielding a Staff',
    regex: /Regenerate (\d+) Mana per second while wielding a Staff/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate # Mana per Second while you have Avian\'s Flight',
    regex: /Regenerate (\d+) Mana per Second while you have Avian's Flight/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate #% of Energy Shield per Second for every 10 Intelligence on Allocated Passives in Radius',
    regex: /Regenerate (\d+)% of Energy Shield per Second for every 10 Intelligence on Allocated Passives in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate #% of Energy Shield per Second while affected by Discipline',
    regex: /Regenerate (\d+)% of Energy Shield per Second while affected by Discipline/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate #% of Energy Shield per second while on Low Life',
    regex: /Regenerate (\d+)% of Energy Shield per second while on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate #% of Life per second for each Raised Zombie',
    regex: /Regenerate (\d+)% of Life per second for each Raised Zombie/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate #% of Life per second if you have been Hit Recently',
    regex: /Regenerate (\d+)% of Life per second if you have been Hit Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate #% of Life per second if you\'ve taken a Savage Hit in the past 1 second',
    regex: /Regenerate (\d+)% of Life per second if you've taken a Savage Hit in the past 1 second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate #% of Life per second on Chilled Ground',
    regex: /Regenerate (\d+)% of Life per second on Chilled Ground/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate #% of Life per second per 500 Maximum Energy Shield',
    regex: /Regenerate (\d+)% of Life per second per 500 Maximum Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate #% of Life per second per Endurance Charge',
    regex: /Regenerate (\d+)% of Life per second per Endurance Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate #% of Life per second per Frenzy Charge',
    regex: /Regenerate (\d+)% of Life per second per Frenzy Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate #% of Life per second per Power Charge',
    regex: /Regenerate (\d+)% of Life per second per Power Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate #% of Life per second while Frozen',
    regex: /Regenerate (\d+)% of Life per second while Frozen/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate #% of Life per second while on Low Life',
    regex: /Regenerate (\d+)% of Life per second while on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate #% of Life per second with at least 400 Strength',
    regex: /Regenerate (\d+)% of Life per second with at least 400 Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Regenerate #% of your Armour as Life over 1 second when you Block',
    regex: /Regenerate (\d+)% of your Armour as Life over 1 second when you Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Remove an Ailment when you use a Flask if all Equipped Items are Elder Items',
    regex: /Remove an Ailment when you use a Flask if all Equipped Items are Elder Items/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Removes Burning when you use a Flask',
    regex: /Removes Burning when you use a Flask/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Removes Elemental Ailments on Rampage',
    regex: /Removes Elemental Ailments on Rampage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Replenishes Energy Shield by #% of Armour when you Block',
    regex: /Replenishes Energy Shield by (\d+)% of Armour when you Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Reserves #% of Life',
    regex: /Reserves (\d+)% of Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Resolute Technique',
    regex: /Resolute Technique/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Right ring slot: #% reduced Reflected Physical Damage taken',
    regex: /Right ring slot: (\d+)% reduced Reflected Physical Damage taken/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Right ring slot: +# to maximum Mana',
    regex: /Right ring slot: \+(\d+) to maximum Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Right ring slot: Projectiles from Spells cannot Fork',
    regex: /Right ring slot: Projectiles from Spells cannot Fork/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Right ring slot: Projectiles from Spells Chain +# times',
    regex: /Right ring slot: Projectiles from Spells Chain \+(\d+) times/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Right ring slot: Regenerate #% of Energy Shield per second',
    regex: /Right ring slot: Regenerate (\d+)% of Energy Shield per second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Right ring slot: You cannot Regenerate Mana',
    regex: /Right ring slot: You cannot Regenerate Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Runebinder',
    regex: /Runebinder/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Sacrifice #% of Life to gain that much Energy Shield when you Cast a Spell',
    regex: /Sacrifice (\d+)% of Life to gain that much Energy Shield when you Cast a Spell/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Sacrifice #% of your Life when you Use or Trigger a Spell Skill',
    regex: /Sacrifice (\d+)% of your Life when you Use or Trigger a Spell Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Sentinels of Purity deal #% increased Damage',
    regex: /Sentinels of Purity deal (\d+)% increased Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Share Endurance Charges with nearby party members',
    regex: /Share Endurance Charges with nearby party members/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Shared Suffering',
    regex: /Shared Suffering/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Shock Reflection',
    regex: /Shock Reflection/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Shocked Enemies you Kill Explode, dealing #% of their Maximum Life as Lightning Damage which cannot Shock',
    regex: /Shocked Enemies you Kill Explode, dealing (\d+)% of their Maximum Life as Lightning Damage which cannot Shock/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Shocks you cause are reflected back to you',
    regex: /Shocks you cause are reflected back to you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Shocks you inflict spread to other Enemies within a Radius of #',
    regex: /Shocks you inflict spread to other Enemies within a Radius of (\d+)/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Shocks you when you reach Maximum Power Charges',
    regex: /Shocks you when you reach Maximum Power Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Siege Ballista has +# to maximum number of Summoned Totems per 200 Dexterity',
    regex: /Siege Ballista has \+(\d+) to maximum number of Summoned Totems per 200 Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Siren Worm Bait',
    regex: /Siren Worm Bait/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Skeletons deal #% increased Damage',
    regex: /Skeletons deal (\d+)% increased Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Skills Chain +# times',
    regex: /Skills Chain \+(\d+) times/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Skills Chain an additional time while at maximum Frenzy Charges',
    regex: /Skills Chain an additional time while at maximum Frenzy Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Skills fire # additional Projectiles if you\'ve been Hit Recently',
    regex: /Skills fire (\d+) additional Projectiles if you've been Hit Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Skills fire # additional Projectiles if you\'ve used a Movement Skill Recently',
    regex: /Skills fire (\d+) additional Projectiles if you've used a Movement Skill Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Skills which throw Mines throw up to 1 additional Mine if you have at least 800 Dexterity',
    regex: /Skills which throw Mines throw up to 1 additional Mine if you have at least 800 Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Skills which throw Mines throw up to 1 additional Mine if you have at least 800 Intelligence',
    regex: /Skills which throw Mines throw up to 1 additional Mine if you have at least 800 Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Skills which throw Traps have Blood Magic',
    regex: /Skills which throw Traps have Blood Magic/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Curse Gems have #% reduced Mana Reservation',
    regex: /Socketed Curse Gems have (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Added Chaos Damage',
    regex: /Socketed Gems are Supported by Level (\d+) Added Chaos Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Added Cold Damage',
    regex: /Socketed Gems are Supported by Level (\d+) Added Cold Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Added Lightning Damage',
    regex: /Socketed Gems are Supported by Level (\d+) Added Lightning Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Blasphemy',
    regex: /Socketed Gems are Supported by Level (\d+) Blasphemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Blessing',
    regex: /Socketed Gems are Supported by Level (\d+) Blessing/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Block Chance Reduction',
    regex: /Socketed Gems are Supported by Level (\d+) Block Chance Reduction/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Blood Magic',
    regex: /Socketed Gems are Supported by Level (\d+) Blood Magic/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Bloodlust',
    regex: /Socketed Gems are Supported by Level (\d+) Bloodlust/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Bonechill',
    regex: /Socketed Gems are Supported by Level (\d+) Bonechill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Cast on Death',
    regex: /Socketed Gems are Supported by Level (\d+) Cast on Death/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Cast when Stunned',
    regex: /Socketed Gems are Supported by Level (\d+) Cast when Stunned/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Chain',
    regex: /Socketed Gems are Supported by Level (\d+) Chain/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Chance to Flee',
    regex: /Socketed Gems are Supported by Level (\d+) Chance to Flee/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Charged Mines',
    regex: /Socketed Gems are Supported by Level (\d+) Charged Mines/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Charged Traps',
    regex: /Socketed Gems are Supported by Level (\d+) Charged Traps/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Close Combat',
    regex: /Socketed Gems are Supported by Level (\d+) Close Combat/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Cluster Trap',
    regex: /Socketed Gems are Supported by Level (\d+) Cluster Trap/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Cold to Fire',
    regex: /Socketed Gems are Supported by Level (\d+) Cold to Fire/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Combustion',
    regex: /Socketed Gems are Supported by Level (\d+) Combustion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Culling Strike',
    regex: /Socketed Gems are Supported by Level (\d+) Culling Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Curse On Hit',
    regex: /Socketed Gems are Supported by Level (\d+) Curse On Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Damage On Full Life',
    regex: /Socketed Gems are Supported by Level (\d+) Damage On Full Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Deadly Ailments',
    regex: /Socketed Gems are Supported by Level (\d+) Deadly Ailments/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Deathmark',
    regex: /Socketed Gems are Supported by Level (\d+) Deathmark/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Decay',
    regex: /Socketed Gems are Supported by Level (\d+) Decay/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Elemental Army Support',
    regex: /Socketed Gems are Supported by Level (\d+) Elemental Army Support/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Elemental Penetration',
    regex: /Socketed Gems are Supported by Level (\d+) Elemental Penetration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Empower',
    regex: /Socketed Gems are Supported by Level (\d+) Empower/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Energy Leech',
    regex: /Socketed Gems are Supported by Level (\d+) Energy Leech/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Enhance',
    regex: /Socketed Gems are Supported by Level (\d+) Enhance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Enlighten',
    regex: /Socketed Gems are Supported by Level (\d+) Enlighten/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Feeding Frenzy',
    regex: /Socketed Gems are Supported by Level (\d+) Feeding Frenzy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Fork',
    regex: /Socketed Gems are Supported by Level (\d+) Fork/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Generosity',
    regex: /Socketed Gems are Supported by Level (\d+) Generosity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Greater Multiple Projectiles',
    regex: /Socketed Gems are Supported by Level (\d+) Greater Multiple Projectiles/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Greater Spell Echo',
    regex: /Socketed Gems are Supported by Level (\d+) Greater Spell Echo/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Greater Volley',
    regex: /Socketed Gems are Supported by Level (\d+) Greater Volley/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # High-Impact Mine',
    regex: /Socketed Gems are Supported by Level (\d+) High-Impact Mine/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Ice Bite',
    regex: /Socketed Gems are Supported by Level (\d+) Ice Bite/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Ignite Proliferation',
    regex: /Socketed Gems are Supported by Level (\d+) Ignite Proliferation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Impale',
    regex: /Socketed Gems are Supported by Level (\d+) Impale/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Infernal Legion',
    regex: /Socketed Gems are Supported by Level (\d+) Infernal Legion/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Infused Channelling',
    regex: /Socketed Gems are Supported by Level (\d+) Infused Channelling/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Intensify',
    regex: /Socketed Gems are Supported by Level (\d+) Intensify/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Iron Will',
    regex: /Socketed Gems are Supported by Level (\d+) Iron Will/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Item Quantity',
    regex: /Socketed Gems are Supported by Level (\d+) Item Quantity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Knockback',
    regex: /Socketed Gems are Supported by Level (\d+) Knockback/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Life Gain On Hit',
    regex: /Socketed Gems are Supported by Level (\d+) Life Gain On Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Meat Shield',
    regex: /Socketed Gems are Supported by Level (\d+) Meat Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Minefield',
    regex: /Socketed Gems are Supported by Level (\d+) Minefield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Minion Speed',
    regex: /Socketed Gems are Supported by Level (\d+) Minion Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Mirage Archer',
    regex: /Socketed Gems are Supported by Level (\d+) Mirage Archer/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Multiple Totems',
    regex: /Socketed Gems are Supported by Level (\d+) Multiple Totems/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Multiple Traps',
    regex: /Socketed Gems are Supported by Level (\d+) Multiple Traps/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Nightblade',
    regex: /Socketed Gems are Supported by Level (\d+) Nightblade/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Physical To Lightning',
    regex: /Socketed Gems are Supported by Level (\d+) Physical To Lightning/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Pierce',
    regex: /Socketed Gems are Supported by Level (\d+) Pierce/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Point Blank',
    regex: /Socketed Gems are Supported by Level (\d+) Point Blank/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Pulverise',
    regex: /Socketed Gems are Supported by Level (\d+) Pulverise/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Rage',
    regex: /Socketed Gems are Supported by Level (\d+) Rage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Shockwave',
    regex: /Socketed Gems are Supported by Level (\d+) Shockwave/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Stun',
    regex: /Socketed Gems are Supported by Level (\d+) Stun/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Summon Phantasm',
    regex: /Socketed Gems are Supported by Level (\d+) Summon Phantasm/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Swift Affliction',
    regex: /Socketed Gems are Supported by Level (\d+) Swift Affliction/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Swift Assembly',
    regex: /Socketed Gems are Supported by Level (\d+) Swift Assembly/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Unleash',
    regex: /Socketed Gems are Supported by Level (\d+) Unleash/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Vile Toxins',
    regex: /Socketed Gems are Supported by Level (\d+) Vile Toxins/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Void Manipulation',
    regex: /Socketed Gems are Supported by Level (\d+) Void Manipulation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems are Supported by Level # Withering Touch',
    regex: /Socketed Gems are Supported by Level (\d+) Withering Touch/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems fire # additional Projectiles',
    regex: /Socketed Gems fire (\d+) additional Projectiles/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems fire an additional Projectile',
    regex: /Socketed Gems fire an additional Projectile/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems fire Projectiles in a Nova',
    regex: /Socketed Gems fire Projectiles in a Nova/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems have #% chance to cause Enemies to Flee on Hit',
    regex: /Socketed Gems have (\d+)% chance to cause Enemies to Flee on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems have #% increased Mana Reservation',
    regex: /Socketed Gems have (\d+)% increased Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems have #% reduced Mana Cost',
    regex: /Socketed Gems have (\d+)% reduced Mana Cost/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems have #% reduced Skill Effect Duration',
    regex: /Socketed Gems have (\d+)% reduced Skill Effect Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems have Blood Magic',
    regex: /Socketed Gems have Blood Magic/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems have Elemental Equilibrium',
    regex: /Socketed Gems have Elemental Equilibrium/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems have Iron Will',
    regex: /Socketed Gems have Iron Will/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Gems Reserve No Mana',
    regex: /Socketed Gems Reserve No Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Golem Skills gain #% of Maximum Life as Extra Maximum Energy Shield',
    regex: /Socketed Golem Skills gain (\d+)% of Maximum Life as Extra Maximum Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Golem Skills have #% chance to Taunt on Hit',
    regex: /Socketed Golem Skills have (\d+)% chance to Taunt on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Golem Skills have #% increased Attack and Cast Speed',
    regex: /Socketed Golem Skills have (\d+)% increased Attack and Cast Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Golem Skills have Minions Regenerate #% of Life per second',
    regex: /Socketed Golem Skills have Minions Regenerate (\d+)% of Life per second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Melee Gems have #% increased Area of Effect',
    regex: /Socketed Melee Gems have (\d+)% increased Area of Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Minion Gems are Supported by Level # Life Leech',
    regex: /Socketed Minion Gems are Supported by Level (\d+) Life Leech/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Red Gems get #% Physical Damage as Extra Fire Damage',
    regex: /Socketed Red Gems get (\d+)% Physical Damage as Extra Fire Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Skill Gems get a #% Mana Multiplier',
    regex: /Socketed Skill Gems get a (\d+)% Mana Multiplier/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Socketed Skills Summon your maximum number of Totems in formation',
    regex: /Socketed Skills Summon your maximum number of Totems in formation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Sockets cannot be modified',
    regex: /Sockets cannot be modified/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Spectres have #% increased Critical Strike Chance',
    regex: /Spectres have (\d+)% increased Critical Strike Chance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Spectres have #% increased Damage',
    regex: /Spectres have (\d+)% increased Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Spectres have #% increased maximum Life',
    regex: /Spectres have (\d+)% increased maximum Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Spectres have a Base Duration of # seconds Spectres do not travel between Areas',
    regex: /Spectres have a Base Duration of (\d+) seconds Spectres do not travel between Areas/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Spell Skills deal no Damage',
    regex: /Spell Skills deal no Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Spells fire an additional Projectile',
    regex: /Spells fire an additional Projectile/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Spells have a #% chance to deal Double Damage',
    regex: /Spells have a (\d+)% chance to deal Double Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Split Arrow fires an additional arrow with # Dexterity from Passives in Radius',
    regex: /Split Arrow fires an additional arrow with (\d+) Dexterity from Passives in Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Spreads Tar when you Block',
    regex: /Spreads Tar when you Block/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Spreads Tar when you take a Critical Strike',
    regex: /Spreads Tar when you take a Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Strength from Passives in Radius is Transformed to Dexterity',
    regex: /Strength from Passives in Radius is Transformed to Dexterity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Strength from Passives in Radius is Transformed to Intelligence',
    regex: /Strength from Passives in Radius is Transformed to Intelligence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Strength provides no bonus to Maximum Life',
    regex: /Strength provides no bonus to Maximum Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Strength\'s Damage Bonus instead grants 3% increased Melee Physical Damage per 10 Strength',
    regex: /Strength's Damage Bonus instead grants 3% increased Melee Physical Damage per 10 Strength/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Stun Threshold is based on #% of your Mana instead of Life',
    regex: /Stun Threshold is based on (\d+)% of your Mana instead of Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Stun Threshold is based on Energy Shield instead of Life',
    regex: /Stun Threshold is based on Energy Shield instead of Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Summon # additional Skeleton Warriors with Summon Skeleton',
    regex: /Summon (\d+) additional Skeleton Warriors with Summon Skeleton/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Summon Raging Spirit has #% increased Duration',
    regex: /Summon Raging Spirit has (\d+)% increased Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Summoned Golems are Aggressive',
    regex: /Summoned Golems are Aggressive/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Summoned Golems Regenerate #% of their Life per second',
    regex: /Summoned Golems Regenerate (\d+)% of their Life per second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Summoned Holy Relics have #% reduced Cooldown Recovery Speed',
    regex: /Summoned Holy Relics have (\d+)% reduced Cooldown Recovery Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Summoned Raging Spirits deal #% increased Damage',
    regex: /Summoned Raging Spirits deal (\d+)% increased Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Summoned Raging Spirits have #% increased maximum Life',
    regex: /Summoned Raging Spirits have (\d+)% increased maximum Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Summoned Raging Spirits refresh their Duration when they Kill an Ignited Enemy',
    regex: /Summoned Raging Spirits refresh their Duration when they Kill an Ignited Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Summoned Raging Spirits take #% of their Maximum Life per second as Chaos Damage',
    regex: /Summoned Raging Spirits take (\d+)% of their Maximum Life per second as Chaos Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Summoned Raging Spirits\' Hits always Ignite',
    regex: /Summoned Raging Spirits' Hits always Ignite/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Summoned Skeletons Cover Enemies in Ash on Hit',
    regex: /Summoned Skeletons Cover Enemies in Ash on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Summoned Skeletons have Avatar of Fire',
    regex: /Summoned Skeletons have Avatar of Fire/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Summoned Skeletons take #% of their Maximum Life per second as Fire Damage',
    regex: /Summoned Skeletons take (\d+)% of their Maximum Life per second as Fire Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Take # Fire Damage when you Ignite an Enemy',
    regex: /Take (\d+) Fire Damage when you Ignite an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Take # Physical Damage per Second per Siphoning Charge if you\'ve used a Skill Recently',
    regex: /Take (\d+) Physical Damage per Second per Siphoning Charge if you've used a Skill Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Take # Physical Damage when you use a Movement Skill',
    regex: /Take (\d+) Physical Damage when you use a Movement Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Take no Extra Damage from Critical Strikes',
    regex: /Take no Extra Damage from Critical Strikes/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Temporal Chains has #% reduced Effect on you',
    regex: /Temporal Chains has (\d+)% reduced Effect on you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Temporal Chains has #% reduced Mana Reservation',
    regex: /Temporal Chains has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Thaumaturgical Lure',
    regex: /Thaumaturgical Lure/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'The Effect of Chill on you is reversed',
    regex: /The Effect of Chill on you is reversed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Totems cannot be Stunned',
    regex: /Totems cannot be Stunned/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Totems fire # additional Projectiles',
    regex: /Totems fire (\d+) additional Projectiles/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Totems gain #% to all Elemental Resistances per active Totem',
    regex: /Totems gain (\d+)% to all Elemental Resistances per active Totem/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Totems have #% increased Attack Speed per active Totem',
    regex: /Totems have (\d+)% increased Attack Speed per active Totem/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Totems have #% increased Cast Speed per active Totem',
    regex: /Totems have (\d+)% increased Cast Speed per active Totem/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Totems Reflect #% of their maximum Life as Fire Damage to nearby Enemies when Hit',
    regex: /Totems Reflect (\d+)% of their maximum Life as Fire Damage to nearby Enemies when Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Traps and Mines deal # to # additional Physical Damage',
    regex: /Traps and Mines deal (\d+) to (\d+) additional Physical Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Traps and Mines have a #% chance to Poison on Hit',
    regex: /Traps and Mines have a (\d+)% chance to Poison on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Traps from Socketed Skills create a Smoke Cloud when triggered',
    regex: /Traps from Socketed Skills create a Smoke Cloud when triggered/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Travel Skills have #% increased Cooldown Recovery Speed',
    regex: /Travel Skills have (\d+)% increased Cooldown Recovery Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger a Socketed Bow Skill when you Attack with a Bow',
    regex: /Trigger a Socketed Bow Skill when you Attack with a Bow/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger a Socketed Cold Spell on Melee Critical Strike',
    regex: /Trigger a Socketed Cold Spell on Melee Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger a Socketed Lightning Spell on Hit Socketed Lightning Spells deal 100% increased Spell Damage if Triggered',
    regex: /Trigger a Socketed Lightning Spell on Hit Socketed Lightning Spells deal 100% increased Spell Damage if Triggered/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger a Socketed Spell when you Attack with this Weapon',
    regex: /Trigger a Socketed Spell when you Attack with this Weapon/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger a Socketed Warcry Skill when you lose Endurance Charges',
    regex: /Trigger a Socketed Warcry Skill when you lose Endurance Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Commandment of Inferno on Critical Strike',
    regex: /Trigger Commandment of Inferno on Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Abyssal Cry on Hit',
    regex: /Trigger Level (\d+) Abyssal Cry on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Bone Nova when you Kill a Bleeding Enemy',
    regex: /Trigger Level (\d+) Bone Nova when you Kill a Bleeding Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Bone Offering, Flesh Offering or Spirit Offering every 5 seconds Offering Skills Triggered this way also affect you',
    regex: /Trigger Level (\d+) Bone Offering, Flesh Offering or Spirit Offering every 5 seconds Offering Skills Triggered this way also affect you/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Consecrate when you deal a Critical Strike',
    regex: /Trigger Level (\d+) Consecrate when you deal a Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Contaminate when you Kill an Enemy',
    regex: /Trigger Level (\d+) Contaminate when you Kill an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Darktongue\'s Kiss when you Cast a Curse Skill',
    regex: /Trigger Level (\d+) Darktongue's Kiss when you Cast a Curse Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Elemental Warding when you Hit an Enemy while Cursed',
    regex: /Trigger Level (\d+) Elemental Warding when you Hit an Enemy while Cursed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Feast of Flesh every 5 seconds',
    regex: /Trigger Level (\d+) Feast of Flesh every 5 seconds/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Fire Burst on Kill',
    regex: /Trigger Level (\d+) Fire Burst on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Fog of War when your Trap is triggered',
    regex: /Trigger Level (\d+) Fog of War when your Trap is triggered/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Icicle Burst when you Kill a Frozen Enemy',
    regex: /Trigger Level (\d+) Icicle Burst when you Kill a Frozen Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Intimidating Cry when you lose Cat\'s Stealth',
    regex: /Trigger Level (\d+) Intimidating Cry when you lose Cat's Stealth/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Lightning Bolt when you deal a Critical Strike',
    regex: /Trigger Level (\d+) Lightning Bolt when you deal a Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Rain of Arrows when you Attack with a Bow',
    regex: /Trigger Level (\d+) Rain of Arrows when you Attack with a Bow/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Shock Ground when Hit',
    regex: /Trigger Level (\d+) Shock Ground when Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Spirit Burst when you Use a Skill while you have a Spirit Charge',
    regex: /Trigger Level (\d+) Spirit Burst when you Use a Skill while you have a Spirit Charge/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Storm Cascade when you Attack',
    regex: /Trigger Level (\d+) Storm Cascade when you Attack/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Summon Phantasm Skill when you Consume a corpse',
    regex: /Trigger Level (\d+) Summon Phantasm Skill when you Consume a corpse/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level # Void Gaze when you use a Skill',
    regex: /Trigger Level (\d+) Void Gaze when you use a Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level 1 Create Lesser Shrine when you Kill an Enemy',
    regex: /Trigger Level 1 Create Lesser Shrine when you Kill an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level 20 Animate Guardian\'s Weapon when Animated Guardian Kills an Enemy',
    regex: /Trigger Level 20 Animate Guardian's Weapon when Animated Guardian Kills an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level 20 Arcane Wake after Spending a total of 200 Mana',
    regex: /Trigger Level 20 Arcane Wake after Spending a total of 200 Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Level 20 Glimpse of Eternity when Hit',
    regex: /Trigger Level 20 Glimpse of Eternity when Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Socketed Curse Skill when you cast a Curse Skill',
    regex: /Trigger Socketed Curse Skill when you cast a Curse Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Trigger Socketed Minion Spells on Kill with this Weapon',
    regex: /Trigger Socketed Minion Spells on Kill with this Weapon/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Triggered Spells deal #% increased Spell Damage',
    regex: /Triggered Spells deal (\d+)% increased Spell Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Triggers Level # Abberath\'s Fury when Equipped',
    regex: /Triggers Level (\d+) Abberath's Fury when Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Triggers Level # Blinding Aura when Equipped',
    regex: /Triggers Level (\d+) Blinding Aura when Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Triggers Level # Cold Aegis when Equipped',
    regex: /Triggers Level (\d+) Cold Aegis when Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Triggers Level # Death Walk when Equipped',
    regex: /Triggers Level (\d+) Death Walk when Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Triggers Level # Elemental Aegis when Equipped',
    regex: /Triggers Level (\d+) Elemental Aegis when Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Triggers Level # Fire Aegis when Equipped',
    regex: /Triggers Level (\d+) Fire Aegis when Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Triggers Level # Lightning Aegis when Equipped',
    regex: /Triggers Level (\d+) Lightning Aegis when Equipped/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Triggers Level # Manifest Dancing Dervish on Rampage',
    regex: /Triggers Level (\d+) Manifest Dancing Dervish on Rampage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Unaffected by Bleeding while affected by Malevolence',
    regex: /Unaffected by Bleeding while affected by Malevolence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Unaffected by Burning Ground while affected by Purity of Fire',
    regex: /Unaffected by Burning Ground while affected by Purity of Fire/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Unaffected by Chilled Ground while affected by Purity of Ice',
    regex: /Unaffected by Chilled Ground while affected by Purity of Ice/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Unaffected by Conductivity while affected by Purity of Lightning',
    regex: /Unaffected by Conductivity while affected by Purity of Lightning/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Unaffected by Curses',
    regex: /Unaffected by Curses/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Unaffected by Elemental Weakness while affected by Purity of Elements',
    regex: /Unaffected by Elemental Weakness while affected by Purity of Elements/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Unaffected by Enfeeble while affected by Grace',
    regex: /Unaffected by Enfeeble while affected by Grace/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Unaffected by Flammability while affected by Purity of Fire',
    regex: /Unaffected by Flammability while affected by Purity of Fire/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Unaffected by Frostbite while affected by Purity of Ice',
    regex: /Unaffected by Frostbite while affected by Purity of Ice/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Unaffected by Poison',
    regex: /Unaffected by Poison/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Unaffected by Poison while affected by Malevolence',
    regex: /Unaffected by Poison while affected by Malevolence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Unaffected by Shock',
    regex: /Unaffected by Shock/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Unaffected by Shocked Ground while affected by Purity of Lightning',
    regex: /Unaffected by Shocked Ground while affected by Purity of Lightning/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Unaffected by Temporal Chains',
    regex: /Unaffected by Temporal Chains/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Unaffected by Temporal Chains while affected by Haste',
    regex: /Unaffected by Temporal Chains while affected by Haste/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Unaffected by Vulnerability while affected by Determination',
    regex: /Unaffected by Vulnerability while affected by Determination/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Unwavering Stance',
    regex: /Unwavering Stance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Uses both hand slots',
    regex: /Uses both hand slots/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Vaal Pact',
    regex: /Vaal Pact/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Vitality has #% reduced Mana Reservation',
    regex: /Vitality has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Vitality Reserves no Mana',
    regex: /Vitality Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Vulnerability has #% reduced Mana Reservation',
    regex: /Vulnerability has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Warcries Knock Enemies Back in an Area',
    regex: /Warcries Knock Enemies Back in an Area/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Warcry Skills\' Cooldown Time is 2 seconds',
    regex: /Warcry Skills' Cooldown Time is 2 seconds/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Weapons you Animate create an additional copy',
    regex: /Weapons you Animate create an additional copy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'When used in the Synthesiser, the new item will have an additional Herald Modifier',
    regex: /When used in the Synthesiser, the new item will have an additional Herald Modifier/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'When you Kill a Rare monster, you gain its Modifiers for # seconds',
    regex: /When you Kill a Rare monster, you gain its Modifiers for (\d+) seconds/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'When you Kill a Shocked Enemy, inflict an equivalent Shock on each nearby Enemy',
    regex: /When you Kill a Shocked Enemy, inflict an equivalent Shock on each nearby Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'When you Kill an Ignited Enemy, inflict an equivalent Ignite on each nearby Enemy',
    regex: /When you Kill an Ignited Enemy, inflict an equivalent Ignite on each nearby Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'While at maximum Frenzy Charges, Attacks Poison Enemies',
    regex: /While at maximum Frenzy Charges, Attacks Poison Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'While in Her Embrace, take #% of your total Maximum Life and Energy Shield as Fire Damage per second per Level',
    regex: /While in Her Embrace, take (\d+)% of your total Maximum Life and Energy Shield as Fire Damage per second per Level/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'While your Passive Skill Tree connects to the Duelist\'s starting location, you gain: #% of Attack Damage Leeched as Life',
    regex: /While your Passive Skill Tree connects to the Duelist's starting location, you gain: (\d+)% of Attack Damage Leeched as Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'While your Passive Skill Tree connects to the Marauder\'s starting location, you gain: Melee Skills have #% increased Area of Effect',
    regex: /While your Passive Skill Tree connects to the Marauder's starting location, you gain: Melee Skills have (\d+)% increased Area of Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'While your Passive Skill Tree connects to the Ranger\'s starting location, you gain: #% increased Movement Speed',
    regex: /While your Passive Skill Tree connects to the Ranger's starting location, you gain: (\d+)% increased Movement Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'While your Passive Skill Tree connects to the Scion\'s starting location, you gain: +# to All Attributes',
    regex: /While your Passive Skill Tree connects to the Scion's starting location, you gain: \+(\d+) to All Attributes/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'While your Passive Skill Tree connects to the Shadow\'s starting location, you gain: +#% to Critical Strike Chance',
    regex: /While your Passive Skill Tree connects to the Shadow's starting location, you gain: \+(\d+)% to Critical Strike Chance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'While your Passive Skill Tree connects to the Templar\'s starting location, you gain: Damage Penetrates #% Elemental Resistances',
    regex: /While your Passive Skill Tree connects to the Templar's starting location, you gain: Damage Penetrates (\d+)% Elemental Resistances/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'While your Passive Skill Tree connects to the Witch\'s starting location, you gain: #% of Mana Regenerated per second',
    regex: /While your Passive Skill Tree connects to the Witch's starting location, you gain: (\d+)% of Mana Regenerated per second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Wicked Ward',
    regex: /Wicked Ward/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With # Corrupted Items Equipped: 50% of Chaos Damage does not bypass Energy Shield, and 50% of Physical Damage bypasses Energy Shield',
    regex: /With (\d+) Corrupted Items Equipped: 50% of Chaos Damage does not bypass Energy Shield, and 50% of Physical Damage bypasses Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With # Corrupted Items Equipped: Life Leech recovers based on your Chaos Damage instead',
    regex: /With (\d+) Corrupted Items Equipped: Life Leech recovers based on your Chaos Damage instead/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With 4 Notables Allocated in Radius, When you Kill a Rare monster, you gain # of its Modifiers for 20 seconds',
    regex: /With 4 Notables Allocated in Radius, When you Kill a Rare monster, you gain (\d+) of its Modifiers for 20 seconds/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With 40 Intelligence in Radius, #% of Glacial Cascade Physical Damage Converted to Cold Damage',
    regex: /With 40 Intelligence in Radius, (\d+)% of Glacial Cascade Physical Damage Converted to Cold Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With 40 Intelligence in Radius, Glacial Cascade has an additional Burst',
    regex: /With 40 Intelligence in Radius, Glacial Cascade has an additional Burst/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With 40 total Dexterity and Strength in Radius, Elemental Hit and Wild Strike cannot choose Lightning',
    regex: /With 40 total Dexterity and Strength in Radius, Elemental Hit and Wild Strike cannot choose Lightning/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With 40 total Dexterity and Strength in Radius, Elemental Hit and Wild Strike deal 50% less Lightning Damage',
    regex: /With 40 total Dexterity and Strength in Radius, Elemental Hit and Wild Strike deal 50% less Lightning Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With 40 total Dexterity and Strength in Radius, Spectral Shield Throw Chains +# times',
    regex: /With 40 total Dexterity and Strength in Radius, Spectral Shield Throw Chains \+(\d+) times/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With 40 total Dexterity and Strength in Radius, Spectral Shield Throw fires #% less Shard Projectiles',
    regex: /With 40 total Dexterity and Strength in Radius, Spectral Shield Throw fires (\d+)% less Shard Projectiles/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With 40 total Dexterity and Strength in Radius, Spectral Shield Throw fires Shard Projectiles when Chaining',
    regex: /With 40 total Dexterity and Strength in Radius, Spectral Shield Throw fires Shard Projectiles when Chaining/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With 40 total Intelligence and Dexterity in Radius, Elemental Hit and Wild Strike cannot choose Fire',
    regex: /With 40 total Intelligence and Dexterity in Radius, Elemental Hit and Wild Strike cannot choose Fire/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With 40 total Intelligence and Dexterity in Radius, Elemental Hit and Wild Strike deal 50% less Fire Damage',
    regex: /With 40 total Intelligence and Dexterity in Radius, Elemental Hit and Wild Strike deal 50% less Fire Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With 40 total Strength and Intelligence in Radius, Elemental Hit and Wild Strike cannot choose Cold',
    regex: /With 40 total Strength and Intelligence in Radius, Elemental Hit and Wild Strike cannot choose Cold/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With 40 total Strength and Intelligence in Radius, Elemental Hit and Wild Strike deal 50% less Cold Damage',
    regex: /With 40 total Strength and Intelligence in Radius, Elemental Hit and Wild Strike deal 50% less Cold Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With 5 Corrupted Items Equipped: Gain Soul Eater for # seconds on Vaal Skill use',
    regex: /With 5 Corrupted Items Equipped: Gain Soul Eater for (\d+) seconds on Vaal Skill use/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With a Ghastly Eye Jewel Socketed, Minions have +# to Accuracy Rating',
    regex: /With a Ghastly Eye Jewel Socketed, Minions have \+(\d+) to Accuracy Rating/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With a Hypnotic Eye Jewel Socketed, gain Arcane Surge on Hit with Spells',
    regex: /With a Hypnotic Eye Jewel Socketed, gain Arcane Surge on Hit with Spells/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With a Murderous Eye Jewel Socketed, Intimidate Enemies for 4 seconds on Hit with Attacks',
    regex: /With a Murderous Eye Jewel Socketed, Intimidate Enemies for 4 seconds on Hit with Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With a Searching Eye Jewel Socketed, Maim Enemies for 4 seconds on Hit with Attacks',
    regex: /With a Searching Eye Jewel Socketed, Maim Enemies for 4 seconds on Hit with Attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 1000 Strength, #% of Damage dealt by your Raised Zombies is Leeched to you as Life',
    regex: /With at least 1000 Strength, (\d+)% of Damage dealt by your Raised Zombies is Leeched to you as Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Animate Weapon can Animate up to # Ranged Weapons',
    regex: /With at least 40 Dexterity in Radius, Animate Weapon can Animate up to (\d+) Ranged Weapons/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Barrage fires an additional # projectiles simultaneously on the first and final attacks',
    regex: /With at least 40 Dexterity in Radius, Barrage fires an additional (\d+) projectiles simultaneously on the first and final attacks/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Burning Arrow can inflict an additional Ignite on an Enemy',
    regex: /With at least 40 Dexterity in Radius, Burning Arrow can inflict an additional Ignite on an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Burning Arrow has a #% chance to spread Burning Ground if it Ignites an Enemy',
    regex: /With at least 40 Dexterity in Radius, Burning Arrow has a (\d+)% chance to spread Burning Ground if it Ignites an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Burning Arrow has a #% chance to spread Tar if it does not Ignite an Enemy',
    regex: /With at least 40 Dexterity in Radius, Burning Arrow has a (\d+)% chance to spread Tar if it does not Ignite an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Caustic Arrow deals #% increased Damage over Time',
    regex: /With at least 40 Dexterity in Radius, Caustic Arrow deals (\d+)% increased Damage over Time/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Caustic Arrow deals #% reduced Damage with Hits',
    regex: /With at least 40 Dexterity in Radius, Caustic Arrow deals (\d+)% reduced Damage with Hits/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Caustic Arrow has a #% chance on Hit to Poison Enemies on Caustic Ground',
    regex: /With at least 40 Dexterity in Radius, Caustic Arrow has a (\d+)% chance on Hit to Poison Enemies on Caustic Ground/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Dual Strike deals Off-Hand Splash Damage to surrounding targets',
    regex: /With at least 40 Dexterity in Radius, Dual Strike deals Off-Hand Splash Damage to surrounding targets/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Dual Strike has a #% chance to deal Double Damage with the Main-Hand Weapon',
    regex: /With at least 40 Dexterity in Radius, Dual Strike has a (\d+)% chance to deal Double Damage with the Main-Hand Weapon/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, each Spectral Throw Projectile gains #% increased Damage each time it Hits',
    regex: /With at least 40 Dexterity in Radius, each Spectral Throw Projectile gains (\d+)% increased Damage each time it Hits/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Ethereal Knives fires # additional Projectiles',
    regex: /With at least 40 Dexterity in Radius, Ethereal Knives fires (\d+) additional Projectiles/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Ethereal Knives fires Projectiles in a Nova',
    regex: /With at least 40 Dexterity in Radius, Ethereal Knives fires Projectiles in a Nova/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Fire Trap throws up to 1 additional Trap',
    regex: /With at least 40 Dexterity in Radius, Fire Trap throws up to 1 additional Trap/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Frost Blades has #% increased Projectile Speed',
    regex: /With at least 40 Dexterity in Radius, Frost Blades has (\d+)% increased Projectile Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Ice Shot has #% increased Area of Effect',
    regex: /With at least 40 Dexterity in Radius, Ice Shot has (\d+)% increased Area of Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Ice Shot Pierces # additional Targets',
    regex: /With at least 40 Dexterity in Radius, Ice Shot Pierces (\d+) additional Targets/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Melee Damage dealt by Frost Blades Penetrates #% Cold Resistance',
    regex: /With at least 40 Dexterity in Radius, Melee Damage dealt by Frost Blades Penetrates (\d+)% Cold Resistance/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Shrapnel Shot has #% increased Area of Effect',
    regex: /With at least 40 Dexterity in Radius, Shrapnel Shot has (\d+)% increased Area of Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Shrapnel Shot\'s cone has a #% chance to deal Double Damage',
    regex: /With at least 40 Dexterity in Radius, Shrapnel Shot's cone has a (\d+)% chance to deal Double Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Split Arrow fires Projectiles in Parallel',
    regex: /With at least 40 Dexterity in Radius, Split Arrow fires Projectiles in Parallel/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Viper Strike deals #% increased Damage with Hits and Poison for each Poison on the Enemy',
    regex: /With at least 40 Dexterity in Radius, Viper Strike deals (\d+)% increased Damage with Hits and Poison for each Poison on the Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Dexterity in Radius, Viper Strike has a #% chance per Poison on Enemy to grant Unholy Might for 4 seconds on Hit',
    regex: /With at least 40 Dexterity in Radius, Viper Strike has a (\d+)% chance per Poison on Enemy to grant Unholy Might for 4 seconds on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, # additional Spark Projectiles',
    regex: /With at least 40 Intelligence in Radius, (\d+) additional Spark Projectiles/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, #% increased Freezing Pulse Damage if you\'ve Shattered an Enemy Recently',
    regex: /With at least 40 Intelligence in Radius, (\d+)% increased Freezing Pulse Damage if you've Shattered an Enemy Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, #% of Damage taken gained as Mana over 4 seconds when Hit during Rallying Cry for you and Allies',
    regex: /With at least 40 Intelligence in Radius, (\d+)% of Damage taken gained as Mana over 4 seconds when Hit during Rallying Cry for you and Allies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Blight has #% increased Area of Effect after 1 second of Channelling',
    regex: /With at least 40 Intelligence in Radius, Blight has (\d+)% increased Area of Effect after 1 second of Channelling/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Blight has #% increased Hinder Duration',
    regex: /With at least 40 Intelligence in Radius, Blight has (\d+)% increased Hinder Duration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Blight inflicts Withered for # seconds',
    regex: /With at least 40 Intelligence in Radius, Blight inflicts Withered for (\d+) seconds/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Blight inflicts Withered for 2 seconds',
    regex: /With at least 40 Intelligence in Radius, Blight inflicts Withered for 2 seconds/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Cold Snap grants Power Charges instead of Frenzy Charges when Enemies die in its Area With at least 40 Intelligence in Radius, Cold Snap\'s Cooldown can be bypassed by Power Charges instead of Frenzy Charges',
    regex: /With at least 40 Intelligence in Radius, Cold Snap grants Power Charges instead of Frenzy Charges when Enemies die in its Area With at least 40 Intelligence in Radius, Cold Snap's Cooldown can be bypassed by Power Charges instead of Frenzy Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, each Lightning Tendrils Repeat has #% increased Area of Effect per Enemy Hit',
    regex: /With at least 40 Intelligence in Radius, each Lightning Tendrils Repeat has (\d+)% increased Area of Effect per Enemy Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Fireball Projectiles gain Area as they travel farther, up to #% increased Area of Effect',
    regex: /With at least 40 Intelligence in Radius, Fireball Projectiles gain Area as they travel farther, up to (\d+)% increased Area of Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Fireball Projectiles gain Radius as they travel farther, up to +# Radius',
    regex: /With at least 40 Intelligence in Radius, Fireball Projectiles gain Radius as they travel farther, up to \+(\d+) Radius/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Freezing Pulse fires # additional Projectiles',
    regex: /With at least 40 Intelligence in Radius, Freezing Pulse fires (\d+) additional Projectiles/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Frostbolt fires # additional Projectiles',
    regex: /With at least 40 Intelligence in Radius, Frostbolt fires (\d+) additional Projectiles/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Frostbolt Projectiles gain #% increased Projectile Speed per second',
    regex: /With at least 40 Intelligence in Radius, Frostbolt Projectiles gain (\d+)% increased Projectile Speed per second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Magma Orb fires an additional Projectile',
    regex: /With at least 40 Intelligence in Radius, Magma Orb fires an additional Projectile/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Magma Orb has #% increased Area of Effect per Chain',
    regex: /With at least 40 Intelligence in Radius, Magma Orb has (\d+)% increased Area of Effect per Chain/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Raised Spectres have a #% chance to gain Soul Eater for 30 seconds on Kill',
    regex: /With at least 40 Intelligence in Radius, Raised Spectres have a (\d+)% chance to gain Soul Eater for 30 seconds on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Raised Zombies\' Slam Attack deals #% increased Damage',
    regex: /With at least 40 Intelligence in Radius, Raised Zombies' Slam Attack deals (\d+)% increased Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Raised Zombies\' Slam Attack has #% increased Cooldown Recovery Speed',
    regex: /With at least 40 Intelligence in Radius, Raised Zombies' Slam Attack has (\d+)% increased Cooldown Recovery Speed/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Spark fires # additional Projectiles',
    regex: /With at least 40 Intelligence in Radius, Spark fires (\d+) additional Projectiles/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Spark fires Projectiles in a Nova',
    regex: /With at least 40 Intelligence in Radius, Spark fires Projectiles in a Nova/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Intelligence in Radius, Summon Skeletons can Summon up to # Skeleton Mages',
    regex: /With at least 40 Intelligence in Radius, Summon Skeletons can Summon up to (\d+) Skeleton Mages/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Strength in Radius, #% increased Rarity of Items dropped by Enemies Shattered by Glacial Hammer',
    regex: /With at least 40 Strength in Radius, (\d+)% increased Rarity of Items dropped by Enemies Shattered by Glacial Hammer/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Strength in Radius, #% of Glacial Hammer Physical Damage Converted to Cold Damage',
    regex: /With at least 40 Strength in Radius, (\d+)% of Glacial Hammer Physical Damage Converted to Cold Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Strength in Radius, Cleave grants Fortify on Hit',
    regex: /With at least 40 Strength in Radius, Cleave grants Fortify on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Strength in Radius, Cleave has +1 to Radius per Nearby Enemy, up to +10',
    regex: /With at least 40 Strength in Radius, Cleave has \+1 to Radius per Nearby Enemy, up to \+10/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Strength in Radius, Glacial Hammer deals Cold-only Splash Damage to surrounding targets',
    regex: /With at least 40 Strength in Radius, Glacial Hammer deals Cold-only Splash Damage to surrounding targets/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Strength in Radius, Ground Slam has a #% chance to grant an Endurance Charge when you Stun an Enemy',
    regex: /With at least 40 Strength in Radius, Ground Slam has a (\d+)% chance to grant an Endurance Charge when you Stun an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Strength in Radius, Ground Slam has a #% increased angle',
    regex: /With at least 40 Strength in Radius, Ground Slam has a (\d+)% increased angle/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Strength in Radius, Heavy Strike has a #% chance to deal Double Damage',
    regex: /With at least 40 Strength in Radius, Heavy Strike has a (\d+)% chance to deal Double Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Strength in Radius, Molten Strike fires # additional Projectiles',
    regex: /With at least 40 Strength in Radius, Molten Strike fires (\d+) additional Projectiles/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Strength in Radius, Molten Strike has #% increased Area of Effect',
    regex: /With at least 40 Strength in Radius, Molten Strike has (\d+)% increased Area of Effect/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'With at least 40 Strength in Radius, Vigilant Strike Fortifies you and Nearby Allies for # seconds',
    regex: /With at least 40 Strength in Radius, Vigilant Strike Fortifies you and Nearby Allies for (\d+) seconds/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Wrath Reserves no Mana',
    regex: /Wrath Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You always Ignite while Burning',
    regex: /You always Ignite while Burning/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You and Allies affected by Auras from your Skills deal #% increased Damage',
    regex: /You and Allies affected by Auras from your Skills deal (\d+)% increased Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You and nearby allies gain #% increased Damage',
    regex: /You and nearby allies gain (\d+)% increased Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You and Nearby Allies have # to # added Chaos Damage per White Socket',
    regex: /You and Nearby Allies have (\d+) to (\d+) added Chaos Damage per White Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You and Nearby Allies have # to # added Cold Damage per Green Socket',
    regex: /You and Nearby Allies have (\d+) to (\d+) added Cold Damage per Green Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You and Nearby Allies have # to # added Fire Damage per Red Socket',
    regex: /You and Nearby Allies have (\d+) to (\d+) added Fire Damage per Red Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You and Nearby Allies have # to # added Lightning Damage per Blue Socket',
    regex: /You and Nearby Allies have (\d+) to (\d+) added Lightning Damage per Blue Socket/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You are Chilled while you are Bleeding',
    regex: /You are Chilled while you are Bleeding/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You are Chilled while you are Poisoned',
    regex: /You are Chilled while you are Poisoned/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You are Cursed with Level # Vulnerability',
    regex: /You are Cursed with Level (\d+) Vulnerability/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You can apply an additional Curse while at maximum Power Charges',
    regex: /You can apply an additional Curse while at maximum Power Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You can catch Exotic Fish',
    regex: /You can catch Exotic Fish/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You can inflict an additional Ignite on an Enemy',
    regex: /You can inflict an additional Ignite on an Enemy/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You can only deal Damage with this Weapon and Ignite',
    regex: /You can only deal Damage with this Weapon and Ignite/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You can only Socket Corrupted Gems in this item',
    regex: /You can only Socket Corrupted Gems in this item/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You cannot be Chilled for # seconds after being Chilled',
    regex: /You cannot be Chilled for (\d+) seconds after being Chilled/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You cannot be Cursed with Silence',
    regex: /You cannot be Cursed with Silence/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You cannot be Frozen for # seconds after being Frozen',
    regex: /You cannot be Frozen for (\d+) seconds after being Frozen/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You cannot be Hindered',
    regex: /You cannot be Hindered/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You cannot be Ignited for # seconds after being Ignited',
    regex: /You cannot be Ignited for (\d+) seconds after being Ignited/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You cannot be killed by reflected Elemental Damage',
    regex: /You cannot be killed by reflected Elemental Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You cannot be Shocked for # seconds after being Shocked',
    regex: /You cannot be Shocked for (\d+) seconds after being Shocked/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You cannot be Shocked while at maximum Endurance Charges',
    regex: /You cannot be Shocked while at maximum Endurance Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You cannot be Shocked while Frozen',
    regex: /You cannot be Shocked while Frozen/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You cannot be Stunned while at maximum Endurance Charges',
    regex: /You cannot be Stunned while at maximum Endurance Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You cannot deal Critical Strikes against non-Shocked Enemies',
    regex: /You cannot deal Critical Strikes against non-Shocked Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You cannot have non-Animated Minions',
    regex: /You cannot have non-Animated Minions/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You cannot have non-Golem Minions',
    regex: /You cannot have non-Golem Minions/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You cannot increase the Quantity of Items found',
    regex: /You cannot increase the Quantity of Items found/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You cannot increase the Rarity of Items found',
    regex: /You cannot increase the Rarity of Items found/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You cannot Recharge Energy Shield',
    regex: /You cannot Recharge Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You cannot Regenerate Energy Shield',
    regex: /You cannot Regenerate Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You count as on Low Life while not on Full Life',
    regex: /You count as on Low Life while not on Full Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You count as on Low Life while you are Cursed with Vulnerability',
    regex: /You count as on Low Life while you are Cursed with Vulnerability/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You gain an Endurance Charge on Kill',
    regex: /You gain an Endurance Charge on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You gain Divinity for # seconds on reaching maximum Divine Charges Lose all Divine Charges when you gain Divinity',
    regex: /You gain Divinity for (\d+) seconds on reaching maximum Divine Charges Lose all Divine Charges when you gain Divinity/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You gain Onslaught for # seconds on Critical Strike',
    regex: /You gain Onslaught for (\d+) seconds on Critical Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You gain Onslaught for # seconds on Culling Strike',
    regex: /You gain Onslaught for (\d+) seconds on Culling Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You gain Onslaught for # seconds on Hit',
    regex: /You gain Onslaught for (\d+) seconds on Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You gain Onslaught for # seconds on Kill',
    regex: /You gain Onslaught for (\d+) seconds on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You gain Onslaught for # seconds on Kill while affected by Haste',
    regex: /You gain Onslaught for (\d+) seconds on Kill while affected by Haste/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You gain Onslaught for # seconds on Killing Taunted Enemies',
    regex: /You gain Onslaught for (\d+) seconds on Killing Taunted Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You gain Onslaught for # seconds on using a Vaal Skill',
    regex: /You gain Onslaught for (\d+) seconds on using a Vaal Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You gain Onslaught for # seconds per Endurance Charge when Hit',
    regex: /You gain Onslaught for (\d+) seconds per Endurance Charge when Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You gain Phasing for # seconds on using a Vaal Skill',
    regex: /You gain Phasing for (\d+) seconds on using a Vaal Skill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You grant # Frenzy Charges to allies on Death',
    regex: /You grant (\d+) Frenzy Charges to allies on Death/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Crimson Dance if you have dealt a Critical Strike Recently',
    regex: /You have Crimson Dance if you have dealt a Critical Strike Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Crimson Dance while you have Cat\'s Stealth',
    regex: /You have Crimson Dance while you have Cat's Stealth/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Far Shot while you do not have Iron Reflexes',
    regex: /You have Far Shot while you do not have Iron Reflexes/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Fungal Ground around you while stationary',
    regex: /You have Fungal Ground around you while stationary/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Iron Reflexes while at maximum Frenzy Charges',
    regex: /You have Iron Reflexes while at maximum Frenzy Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Mind over Matter while at maximum Power Charges',
    regex: /You have Mind over Matter while at maximum Power Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have no Armour or Maximum Energy Shield',
    regex: /You have no Armour or Maximum Energy Shield/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have no Life Regeneration',
    regex: /You have no Life Regeneration/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Onslaught while at maximum Endurance Charges',
    regex: /You have Onslaught while at maximum Endurance Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Onslaught while not on Low Mana',
    regex: /You have Onslaught while not on Low Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Onslaught while on Low Life',
    regex: /You have Onslaught while on Low Life/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Onslaught while you have Fortify',
    regex: /You have Onslaught while you have Fortify/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Phasing if Energy Shield Recharge has started Recently',
    regex: /You have Phasing if Energy Shield Recharge has started Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Phasing if you\'ve Killed Recently',
    regex: /You have Phasing if you've Killed Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Phasing while affected by Haste',
    regex: /You have Phasing while affected by Haste/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Phasing while you have Cat\'s Stealth',
    regex: /You have Phasing while you have Cat's Stealth/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Resolute Technique while you do not have Elemental Overload',
    regex: /You have Resolute Technique while you do not have Elemental Overload/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Vaal Pact if you\'ve dealt a Critical Strike Recently',
    regex: /You have Vaal Pact if you've dealt a Critical Strike Recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Vaal Pact while all Socketed Gems are Red',
    regex: /You have Vaal Pact while all Socketed Gems are Red/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Vaal Pact while at maximum Endurance Charges',
    regex: /You have Vaal Pact while at maximum Endurance Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You have Zealot\'s Oath if you haven\'t been hit recently',
    regex: /You have Zealot's Oath if you haven't been hit recently/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You lose #% of Energy Shield per second',
    regex: /You lose (\d+)% of Energy Shield per second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You lose all Endurance Charges on reaching maximum Endurance Charges',
    regex: /You lose all Endurance Charges on reaching maximum Endurance Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You lose all Endurance Charges when Hit',
    regex: /You lose all Endurance Charges when Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You lose all Spirit Charges when taking a Savage Hit',
    regex: /You lose all Spirit Charges when taking a Savage Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You only lose # Crab Barriers when you take Physical Damage from a Hit',
    regex: /You only lose (\d+) Crab Barriers when you take Physical Damage from a Hit/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You take # Chaos Damage per second for # seconds on Kill',
    regex: /You take (\d+) Chaos Damage per second for (\d+) seconds on Kill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You take #% reduced Extra Damage from Critical Strikes while affected by Determination',
    regex: /You take (\d+)% reduced Extra Damage from Critical Strikes while affected by Determination/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You take #% reduced Extra Damage from Critical Strikes while you have no Power Charges',
    regex: /You take (\d+)% reduced Extra Damage from Critical Strikes while you have no Power Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'You take Chaos Damage instead of Physical Damage from Bleeding',
    regex: /You take Chaos Damage instead of Physical Damage from Bleeding/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Attacks deal # Physical Damage',
    regex: /Your Attacks deal (\d+) Physical Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Attacks do not cost Mana',
    regex: /Your Attacks do not cost Mana/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Aura Buffs do not affect allies',
    regex: /Your Aura Buffs do not affect allies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Chaos Damage can Shock',
    regex: /Your Chaos Damage can Shock/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Chaos Damage has #% chance to Poison Enemies',
    regex: /Your Chaos Damage has (\d+)% chance to Poison Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Chaos Damage Poisons Enemies',
    regex: /Your Chaos Damage Poisons Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Cold Damage can Ignite',
    regex: /Your Cold Damage can Ignite/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Cold Damage can Ignite but not Freeze or Chill',
    regex: /Your Cold Damage can Ignite but not Freeze or Chill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Cold Damage can Poison',
    regex: /Your Cold Damage can Poison/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Critical Strike Multiplier is 300%',
    regex: /Your Critical Strike Multiplier is 300%/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Critical Strikes do not deal extra Damage',
    regex: /Your Critical Strikes do not deal extra Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Curses can apply to Hexproof Enemies',
    regex: /Your Curses can apply to Hexproof Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Elemental Damage can Shock',
    regex: /Your Elemental Damage can Shock/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Energy Shield starts at zero',
    regex: /Your Energy Shield starts at zero/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Fire Damage can Poison',
    regex: /Your Fire Damage can Poison/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Fire Damage can Shock but not Ignite',
    regex: /Your Fire Damage can Shock but not Ignite/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Hits can only Kill Frozen Enemies',
    regex: /Your Hits can only Kill Frozen Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your hits can\'t be Evaded',
    regex: /Your hits can't be Evaded/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Hits can\'t be Evaded by Blinded Enemies',
    regex: /Your Hits can't be Evaded by Blinded Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Hits Intimidate Enemies for 4 seconds while you are using Pride',
    regex: /Your Hits Intimidate Enemies for 4 seconds while you are using Pride/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Increases and Reductions to Quantity of Items found also apply to Damage',
    regex: /Your Increases and Reductions to Quantity of Items found also apply to Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Lightning Damage can Freeze but not Shock',
    regex: /Your Lightning Damage can Freeze but not Shock/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Lightning Damage can Ignite',
    regex: /Your Lightning Damage can Ignite/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Lightning Damage can Poison',
    regex: /Your Lightning Damage can Poison/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Maximum Frenzy Charges is equal to your Maximum Power Charges',
    regex: /Your Maximum Frenzy Charges is equal to your Maximum Power Charges/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Maximum Resistances are #%',
    regex: /Your Maximum Resistances are (\d+)%/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Minions spread Caustic Ground on Death, dealing #% of their maximum Life as Chaos Damage per second',
    regex: /Your Minions spread Caustic Ground on Death, dealing (\d+)% of their maximum Life as Chaos Damage per second/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Movement Speed is #% of its base value',
    regex: /Your Movement Speed is (\d+)% of its base value/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Physical Damage can Chill',
    regex: /Your Physical Damage can Chill/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Physical Damage can Shock',
    regex: /Your Physical Damage can Shock/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Raised Spectres also gain Arcane Surge when you do',
    regex: /Your Raised Spectres also gain Arcane Surge when you do/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Raised Zombies count as corpses',
    regex: /Your Raised Zombies count as corpses/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Skills deal you #% of Mana Spent on Skill Mana Costs as Physical Damage',
    regex: /Your Skills deal you (\d+)% of Mana Spent on Skill Mana Costs as Physical Damage/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Spells are disabled',
    regex: /Your Spells are disabled/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your spells have #% chance to Shock against Frozen Enemies',
    regex: /Your spells have (\d+)% chance to Shock against Frozen Enemies/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Your Spells have Culling Strike',
    regex: /Your Spells have Culling Strike/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Zealot\'s Oath',
    regex: /Zealot's Oath/,
    type: ModFilterType.UNIQUE,
  },
  {
    label: 'Zealotry Reserves no Mana',
    regex: /Zealotry Reserves no Mana/,
    type: ModFilterType.UNIQUE,
  },
];
