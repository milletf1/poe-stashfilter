import { IMod } from '../IModFilterParams';
import { ModFilterType } from '../ModFilterType';
/* tslint:disable:max-line-length */

export const enchantmentModRegexes: IMod[] = [
  {
    label: '#% chance for Discharge to deal Damage without removing Charges',
    regex: /(\d+)% chance for Discharge to deal Damage without removing Charges/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% chance for Phase Run to increase Duration without removing Frenzy Charges',
    regex: /(\d+)% chance for Phase Run to increase Duration without removing Frenzy Charges/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% Chance for Puncture to Maim on hit',
    regex: /(\d+)% Chance for Puncture to Maim on hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% Chance on Frenzy to gain an additional Frenzy Charge',
    regex: /(\d+)% Chance on Frenzy to gain an additional Frenzy Charge/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% chance to Avoid being Stunned if you\'ve Killed Recently',
    regex: /(\d+)% chance to Avoid being Stunned if you've Killed Recently/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% chance to Avoid interruption from Stuns while Casting Storm Burst',
    regex: /(\d+)% chance to Avoid interruption from Stuns while Casting Storm Burst/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% chance to create a Charged Slam',
    regex: /(\d+)% chance to create a Charged Slam/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% chance to create an additional Animate Weapon copy',
    regex: /(\d+)% chance to create an additional Animate Weapon copy/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% chance to Dodge Attack Hits if you have finished Channelling Charged Dash Recently',
    regex: /(\d+)% chance to Dodge Attack Hits if you have finished Channelling Charged Dash Recently/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% Chance to Dodge Attack Hits if you\'ve taken a Critical Strike Recently',
    regex: /(\d+)% Chance to Dodge Attack Hits if you've taken a Critical Strike Recently/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% chance to Dodge Attack Hits while at maximum Blade Flurry stages',
    regex: /(\d+)% chance to Dodge Attack Hits while at maximum Blade Flurry stages/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% chance to Dodge Spell Hits if you\'ve taken Spell Damage Recently',
    regex: /(\d+)% chance to Dodge Spell Hits if you've taken Spell Damage Recently/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% chance to Freeze, Shock and Ignite if you haven\'t Crit Recently',
    regex: /(\d+)% chance to Freeze, Shock and Ignite if you haven't Crit Recently/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% Chance to gain a Power Charge on Critical Strike with Ice Spear',
    regex: /(\d+)% Chance to gain a Power Charge on Critical Strike with Ice Spear/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% Chance to gain an additional Power Charge on Kill with Power Siphon',
    regex: /(\d+)% Chance to gain an additional Power Charge on Kill with Power Siphon/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% chance to Summon an additional Skeleton Warrior with Summon Skeleton',
    regex: /(\d+)% chance to Summon an additional Skeleton Warrior with Summon Skeleton/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Abyssal Cry Damage',
    regex: /(\d+)% increased Abyssal Cry Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Abyssal Cry Duration',
    regex: /(\d+)% increased Abyssal Cry Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ancestral Blademaster Totem Area of Effect',
    regex: /(\d+)% increased Ancestral Blademaster Totem Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ancestral Blademaster Totem Damage',
    regex: /(\d+)% increased Ancestral Blademaster Totem Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ancestral Protector Totem Placement Speed',
    regex: /(\d+)% increased Ancestral Protector Totem Placement Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ancestral Warchief Totem Area of Effect',
    regex: /(\d+)% increased Ancestral Warchief Totem Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ancestral Warchief Totem Damage',
    regex: /(\d+)% increased Ancestral Warchief Totem Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Animate Weapon Duration',
    regex: /(\d+)% increased Animate Weapon Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Arc Damage',
    regex: /(\d+)% increased Arc Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Arctic Armour Buff Effect',
    regex: /(\d+)% increased Arctic Armour Buff Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Arctic Breath Area of Effect',
    regex: /(\d+)% increased Arctic Breath Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Arctic Breath Damage',
    regex: /(\d+)% increased Arctic Breath Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Arctic Breath Duration',
    regex: /(\d+)% increased Arctic Breath Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Assassin\'s Mark Curse Effect',
    regex: /(\d+)% increased Assassin's Mark Curse Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Assassin\'s Mark Duration',
    regex: /(\d+)% increased Assassin's Mark Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Attack and Cast Speed if you\'ve Killed Recently',
    regex: /(\d+)% increased Attack and Cast Speed if you've Killed Recently/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ball Lightning Area of Effect',
    regex: /(\d+)% increased Ball Lightning Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ball Lightning Damage',
    regex: /(\d+)% increased Ball Lightning Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Barrage Attack Speed',
    regex: /(\d+)% increased Barrage Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Barrage Damage',
    regex: /(\d+)% increased Barrage Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Bear Trap Cooldown Recovery Speed',
    regex: /(\d+)% increased Bear Trap Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Bear Trap Damage',
    regex: /(\d+)% increased Bear Trap Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Blade Flurry Area of Effect',
    regex: /(\d+)% increased Blade Flurry Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Blade Flurry Damage',
    regex: /(\d+)% increased Blade Flurry Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Blade Vortex Area of Effect',
    regex: /(\d+)% increased Blade Vortex Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Blade Vortex Duration',
    regex: /(\d+)% increased Blade Vortex Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Blade Vortex Spell Damage',
    regex: /(\d+)% increased Blade Vortex Spell Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Bladefall Area of Effect',
    regex: /(\d+)% increased Bladefall Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Bladefall Critical Strike Chance',
    regex: /(\d+)% increased Bladefall Critical Strike Chance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Bladefall Damage',
    regex: /(\d+)% increased Bladefall Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Blast Rain Area of Effect',
    regex: /(\d+)% increased Blast Rain Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Blast Rain Damage',
    regex: /(\d+)% increased Blast Rain Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Blight Area of Effect',
    regex: /(\d+)% increased Blight Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Blight Damage',
    regex: /(\d+)% increased Blight Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Blink Arrow Cooldown Recovery Speed',
    regex: /(\d+)% increased Blink Arrow Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Bodyswap Cast Speed',
    regex: /(\d+)% increased Bodyswap Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Bodyswap Damage',
    regex: /(\d+)% increased Bodyswap Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Bone Offering Duration',
    regex: /(\d+)% increased Bone Offering Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Burning Arrow Damage',
    regex: /(\d+)% increased Burning Arrow Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Caustic Arrow Area of Effect',
    regex: /(\d+)% increased Caustic Arrow Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Caustic Arrow Damage',
    regex: /(\d+)% increased Caustic Arrow Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Caustic Arrow Duration',
    regex: /(\d+)% increased Caustic Arrow Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Charged Dash Damage',
    regex: /(\d+)% increased Charged Dash Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Cleave Area of Effect',
    regex: /(\d+)% increased Cleave Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Cleave Attack Speed',
    regex: /(\d+)% increased Cleave Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Cleave Damage',
    regex: /(\d+)% increased Cleave Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Cold Snap Area of Effect',
    regex: /(\d+)% increased Cold Snap Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Cold Snap Cooldown Recovery Speed',
    regex: /(\d+)% increased Cold Snap Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Cold Snap Damage',
    regex: /(\d+)% increased Cold Snap Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Conductivity Curse Effect',
    regex: /(\d+)% increased Conductivity Curse Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Conductivity Duration',
    regex: /(\d+)% increased Conductivity Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Contagion Area of Effect',
    regex: /(\d+)% increased Contagion Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Contagion Damage',
    regex: /(\d+)% increased Contagion Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Contagion Duration',
    regex: /(\d+)% increased Contagion Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Conversion Trap Cooldown Recovery Speed',
    regex: /(\d+)% increased Conversion Trap Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Convocation Buff Effect',
    regex: /(\d+)% increased Convocation Buff Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Convocation Cooldown Recovery Speed',
    regex: /(\d+)% increased Convocation Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Cremation Cast Speed',
    regex: /(\d+)% increased Cremation Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Cremation Damage',
    regex: /(\d+)% increased Cremation Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Critical Strike Chance if you haven\'t Crit Recently',
    regex: /(\d+)% increased Critical Strike Chance if you haven't Crit Recently/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Cyclone Attack Speed',
    regex: /(\d+)% increased Cyclone Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Cyclone Damage',
    regex: /(\d+)% increased Cyclone Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Dark Pact Area of Effect',
    regex: /(\d+)% increased Dark Pact Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Dark Pact Cast Speed',
    regex: /(\d+)% increased Dark Pact Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Dark Pact Damage',
    regex: /(\d+)% increased Dark Pact Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Decoy Totem Area of Effect',
    regex: /(\d+)% increased Decoy Totem Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Decoy Totem Life',
    regex: /(\d+)% increased Decoy Totem Life/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Desecrate Duration',
    regex: /(\d+)% increased Desecrate Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Despair Curse Effect',
    regex: /(\d+)% increased Despair Curse Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Despair Duration',
    regex: /(\d+)% increased Despair Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Detonate Dead Area of Effect',
    regex: /(\d+)% increased Detonate Dead Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Detonate Dead Damage',
    regex: /(\d+)% increased Detonate Dead Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Devouring Totem Leech per second',
    regex: /(\d+)% increased Devouring Totem Leech per second/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Discharge Damage',
    regex: /(\d+)% increased Discharge Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Discharge Radius',
    regex: /(\d+)% increased Discharge Radius/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Dominating Blow Damage',
    regex: /(\d+)% increased Dominating Blow Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Double Strike Attack Speed',
    regex: /(\d+)% increased Double Strike Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Double Strike Critical Strike Chance',
    regex: /(\d+)% increased Double Strike Critical Strike Chance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Double Strike Damage',
    regex: /(\d+)% increased Double Strike Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Dual Strike Attack Speed',
    regex: /(\d+)% increased Dual Strike Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Dual Strike Critical Strike Chance',
    regex: /(\d+)% increased Dual Strike Critical Strike Chance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Dual Strike Damage',
    regex: /(\d+)% increased Dual Strike Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Earthquake Area of Effect',
    regex: /(\d+)% increased Earthquake Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Earthquake Damage',
    regex: /(\d+)% increased Earthquake Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Effect of Curses applied by Bane',
    regex: /(\d+)% increased Effect of Curses applied by Bane/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Effect of the Buff granted by your Carrion Golems',
    regex: /(\d+)% increased Effect of the Buff granted by your Carrion Golems/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Effect of the Buff granted by your Chaos Golems',
    regex: /(\d+)% increased Effect of the Buff granted by your Chaos Golems/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Effect of the Buff granted by your Flame Golems',
    regex: /(\d+)% increased Effect of the Buff granted by your Flame Golems/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Effect of the Buff granted by your Ice Golems',
    regex: /(\d+)% increased Effect of the Buff granted by your Ice Golems/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Effect of the Buff granted by your Lightning Golems',
    regex: /(\d+)% increased Effect of the Buff granted by your Lightning Golems/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Effect of the Buff granted by your Stone Golems',
    regex: /(\d+)% increased Effect of the Buff granted by your Stone Golems/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Elemental Hit Attack Speed',
    regex: /(\d+)% increased Elemental Hit Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Elemental Weakness Curse Effect',
    regex: /(\d+)% increased Elemental Weakness Curse Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Elemental Weakness Duration',
    regex: /(\d+)% increased Elemental Weakness Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Enduring Cry Buff Effect',
    regex: /(\d+)% increased Enduring Cry Buff Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Enduring Cry Cooldown Recovery Speed',
    regex: /(\d+)% increased Enduring Cry Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Enfeeble Curse Effect',
    regex: /(\d+)% increased Enfeeble Curse Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Enfeeble Duration',
    regex: /(\d+)% increased Enfeeble Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Essence Drain Damage',
    regex: /(\d+)% increased Essence Drain Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Essence Drain Duration',
    regex: /(\d+)% increased Essence Drain Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ethereal Knives Damage',
    regex: /(\d+)% increased Ethereal Knives Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ethereal Knives Projectile Speed',
    regex: /(\d+)% increased Ethereal Knives Projectile Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Explosive Arrow Area of Effect',
    regex: /(\d+)% increased Explosive Arrow Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Explosive Arrow Attack Speed',
    regex: /(\d+)% increased Explosive Arrow Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Explosive Arrow Damage',
    regex: /(\d+)% increased Explosive Arrow Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Fire Trap Burning Damage',
    regex: /(\d+)% increased Fire Trap Burning Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Fire Trap Burning Ground Duration',
    regex: /(\d+)% increased Fire Trap Burning Ground Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Fire Trap Damage',
    regex: /(\d+)% increased Fire Trap Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Fireball Cast Speed',
    regex: /(\d+)% increased Fireball Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Fireball Damage',
    regex: /(\d+)% increased Fireball Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Firestorm Damage',
    regex: /(\d+)% increased Firestorm Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Firestorm Duration',
    regex: /(\d+)% increased Firestorm Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Firestorm explosion Area of Effect',
    regex: /(\d+)% increased Firestorm explosion Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Flame Dash Cooldown Recovery Speed',
    regex: /(\d+)% increased Flame Dash Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Flame Dash Damage',
    regex: /(\d+)% increased Flame Dash Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Flame Surge Critical Strike Chance',
    regex: /(\d+)% increased Flame Surge Critical Strike Chance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Flame Surge Damage',
    regex: /(\d+)% increased Flame Surge Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Flame Surge Damage against Burning Enemies',
    regex: /(\d+)% increased Flame Surge Damage against Burning Enemies/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Flameblast Area of Effect',
    regex: /(\d+)% increased Flameblast Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Flameblast Critical Strike Chance',
    regex: /(\d+)% increased Flameblast Critical Strike Chance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Flameblast Damage',
    regex: /(\d+)% increased Flameblast Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Flammability Curse Effect',
    regex: /(\d+)% increased Flammability Curse Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Flammability Duration',
    regex: /(\d+)% increased Flammability Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Flesh Offering Duration',
    regex: /(\d+)% increased Flesh Offering Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Flicker Strike Cooldown Recovery Speed',
    regex: /(\d+)% increased Flicker Strike Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Flicker Strike Damage',
    regex: /(\d+)% increased Flicker Strike Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Flicker Strike Damage per Frenzy Charge',
    regex: /(\d+)% increased Flicker Strike Damage per Frenzy Charge/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Freezing Pulse Cast Speed',
    regex: /(\d+)% increased Freezing Pulse Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Freezing Pulse Damage',
    regex: /(\d+)% increased Freezing Pulse Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Freezing Pulse Projectile Speed',
    regex: /(\d+)% increased Freezing Pulse Projectile Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Frenzy Damage',
    regex: /(\d+)% increased Frenzy Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Frenzy Damage per Frenzy Charge',
    regex: /(\d+)% increased Frenzy Damage per Frenzy Charge/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Frost Blades Damage',
    regex: /(\d+)% increased Frost Blades Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Frost Blades Projectile Speed',
    regex: /(\d+)% increased Frost Blades Projectile Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Frost Bomb Area of Effect',
    regex: /(\d+)% increased Frost Bomb Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Frost Bomb Cooldown Recovery Speed',
    regex: /(\d+)% increased Frost Bomb Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Frost Bomb Damage',
    regex: /(\d+)% increased Frost Bomb Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Frost Wall Cooldown Recovery Speed',
    regex: /(\d+)% increased Frost Wall Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Frost Wall Duration',
    regex: /(\d+)% increased Frost Wall Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Frostbite Curse Effect',
    regex: /(\d+)% increased Frostbite Curse Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Frostbite Duration',
    regex: /(\d+)% increased Frostbite Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Frostbolt Cast Speed',
    regex: /(\d+)% increased Frostbolt Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Frostbolt Damage',
    regex: /(\d+)% increased Frostbolt Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Glacial Cascade Area of Effect',
    regex: /(\d+)% increased Glacial Cascade Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Glacial Cascade Damage',
    regex: /(\d+)% increased Glacial Cascade Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Glacial Hammer Damage',
    regex: /(\d+)% increased Glacial Hammer Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ground Slam Area of Effect',
    regex: /(\d+)% increased Ground Slam Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ground Slam Damage',
    regex: /(\d+)% increased Ground Slam Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Heavy Strike Attack Speed',
    regex: /(\d+)% increased Heavy Strike Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Heavy Strike Damage',
    regex: /(\d+)% increased Heavy Strike Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Herald of Ash Damage',
    regex: /(\d+)% increased Herald of Ash Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Herald of Ice Damage',
    regex: /(\d+)% increased Herald of Ice Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Herald of Thunder Damage',
    regex: /(\d+)% increased Herald of Thunder Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ice Crash Area of Effect',
    regex: /(\d+)% increased Ice Crash Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ice Crash Damage',
    regex: /(\d+)% increased Ice Crash Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ice Nova Area of Effect',
    regex: /(\d+)% increased Ice Nova Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ice Nova Damage',
    regex: /(\d+)% increased Ice Nova Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ice Shot Area of Effect',
    regex: /(\d+)% increased Ice Shot Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ice Shot Damage',
    regex: /(\d+)% increased Ice Shot Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ice Shot Duration',
    regex: /(\d+)% increased Ice Shot Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ice Spear Critical Strike Chance in second form',
    regex: /(\d+)% increased Ice Spear Critical Strike Chance in second form/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ice Spear Damage',
    regex: /(\d+)% increased Ice Spear Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ice Trap Area of Effect',
    regex: /(\d+)% increased Ice Trap Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Ice Trap Damage',
    regex: /(\d+)% increased Ice Trap Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Icicle Mine Throwing Speed',
    regex: /(\d+)% increased Icicle Mine Throwing Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Immortal Call Duration',
    regex: /(\d+)% increased Immortal Call Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Incinerate Damage',
    regex: /(\d+)% increased Incinerate Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Incinerate Damage for each stage',
    regex: /(\d+)% increased Incinerate Damage for each stage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Infernal Blow Area of Effect',
    regex: /(\d+)% increased Infernal Blow Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Infernal Blow Damage',
    regex: /(\d+)% increased Infernal Blow Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Kinetic Blast Area of Effect',
    regex: /(\d+)% increased Kinetic Blast Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Kinetic Blast Damage',
    regex: /(\d+)% increased Kinetic Blast Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Lacerate Area of Effect',
    regex: /(\d+)% increased Lacerate Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Lacerate Critical Strike Chance',
    regex: /(\d+)% increased Lacerate Critical Strike Chance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Lacerate Damage',
    regex: /(\d+)% increased Lacerate Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Leap Slam Area of Effect',
    regex: /(\d+)% increased Leap Slam Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Leap Slam Attack Speed',
    regex: /(\d+)% increased Leap Slam Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Leap Slam Damage',
    regex: /(\d+)% increased Leap Slam Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Lightning Arrow Area of Effect',
    regex: /(\d+)% increased Lightning Arrow Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Lightning Arrow Damage',
    regex: /(\d+)% increased Lightning Arrow Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Lightning Strike Damage',
    regex: /(\d+)% increased Lightning Strike Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Lightning Tendrils Area of Effect',
    regex: /(\d+)% increased Lightning Tendrils Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Lightning Tendrils Critical Strike Chance',
    regex: /(\d+)% increased Lightning Tendrils Critical Strike Chance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Lightning Tendrils Damage',
    regex: /(\d+)% increased Lightning Tendrils Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Lightning Trap Damage',
    regex: /(\d+)% increased Lightning Trap Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Lightning Trap Shock Effect',
    regex: /(\d+)% increased Lightning Trap Shock Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Lightning Warp Cast Speed',
    regex: /(\d+)% increased Lightning Warp Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Lightning Warp Damage',
    regex: /(\d+)% increased Lightning Warp Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Magma Orb Area of Effect',
    regex: /(\d+)% increased Magma Orb Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Magma Orb Damage',
    regex: /(\d+)% increased Magma Orb Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Mana Regeneration Rate if you\'ve cast a Spell Recently',
    regex: /(\d+)% increased Mana Regeneration Rate if you've cast a Spell Recently/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Mirror Arrow Cooldown Recovery Speed',
    regex: /(\d+)% increased Mirror Arrow Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Molten Shell Buff Effect',
    regex: /(\d+)% increased Molten Shell Buff Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Molten Strike Area of Effect',
    regex: /(\d+)% increased Molten Strike Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Molten Strike Damage',
    regex: /(\d+)% increased Molten Strike Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Movement Speed if you haven\'t been Hit Recently',
    regex: /(\d+)% increased Movement Speed if you haven't been Hit Recently/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Orb of Storms Area of Effect',
    regex: /(\d+)% increased Orb of Storms Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Orb of Storms Critical Strike Chance',
    regex: /(\d+)% increased Orb of Storms Critical Strike Chance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Orb of Storms Damage',
    regex: /(\d+)% increased Orb of Storms Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Phase Run Duration',
    regex: /(\d+)% increased Phase Run Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Poacher\'s Mark Curse Effect',
    regex: /(\d+)% increased Poacher's Mark Curse Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Poacher\'s Mark Duration',
    regex: /(\d+)% increased Poacher's Mark Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Power Siphon Attack Speed',
    regex: /(\d+)% increased Power Siphon Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Power Siphon Damage',
    regex: /(\d+)% increased Power Siphon Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Projectile Weakness Curse Effect',
    regex: /(\d+)% increased Projectile Weakness Curse Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Projectile Weakness Duration',
    regex: /(\d+)% increased Projectile Weakness Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Puncture Damage',
    regex: /(\d+)% increased Puncture Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Puncture Duration',
    regex: /(\d+)% increased Puncture Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Punishment Curse Effect',
    regex: /(\d+)% increased Punishment Curse Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Punishment Duration',
    regex: /(\d+)% increased Punishment Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Rain of Arrows Area of Effect',
    regex: /(\d+)% increased Rain of Arrows Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Rain of Arrows Attack Speed',
    regex: /(\d+)% increased Rain of Arrows Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Rain of Arrows Damage',
    regex: /(\d+)% increased Rain of Arrows Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Rallying Cry Buff Effect',
    regex: /(\d+)% increased Rallying Cry Buff Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Rallying Cry Duration',
    regex: /(\d+)% increased Rallying Cry Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Reave Damage',
    regex: /(\d+)% increased Reave Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Reave Radius',
    regex: /(\d+)% increased Reave Radius/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Reckoning Cooldown Recovery Speed',
    regex: /(\d+)% increased Reckoning Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Reckoning Damage',
    regex: /(\d+)% increased Reckoning Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Rejuvenation Totem Aura Effect',
    regex: /(\d+)% increased Rejuvenation Totem Aura Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Righteous Fire Area of Effect',
    regex: /(\d+)% increased Righteous Fire Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Righteous Fire Damage',
    regex: /(\d+)% increased Righteous Fire Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Riposte Cooldown Recovery Speed',
    regex: /(\d+)% increased Riposte Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Riposte Damage',
    regex: /(\d+)% increased Riposte Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Scorching Ray beam length',
    regex: /(\d+)% increased Scorching Ray beam length/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Scorching Ray Cast Speed',
    regex: /(\d+)% increased Scorching Ray Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Scorching Ray Damage',
    regex: /(\d+)% increased Scorching Ray Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Searing Bond Damage',
    regex: /(\d+)% increased Searing Bond Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Searing Bond Totem Elemental Resistances',
    regex: /(\d+)% increased Searing Bond Totem Elemental Resistances/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Searing Bond Totem Placement Speed',
    regex: /(\d+)% increased Searing Bond Totem Placement Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Sentinel of Dominance Duration',
    regex: /(\d+)% increased Sentinel of Dominance Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Shield Charge Attack Speed',
    regex: /(\d+)% increased Shield Charge Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Shield Charge Damage',
    regex: /(\d+)% increased Shield Charge Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Shield Charge Damage per Enemy Hit',
    regex: /(\d+)% increased Shield Charge Damage per Enemy Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Shock Nova Area of Effect',
    regex: /(\d+)% increased Shock Nova Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Shock Nova Damage',
    regex: /(\d+)% increased Shock Nova Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Shockwave Totem Area of Effect',
    regex: /(\d+)% increased Shockwave Totem Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Shockwave Totem Cast Speed',
    regex: /(\d+)% increased Shockwave Totem Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Shockwave Totem Damage',
    regex: /(\d+)% increased Shockwave Totem Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Shrapnel Shot Area of Effect',
    regex: /(\d+)% increased Shrapnel Shot Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Shrapnel Shot Damage',
    regex: /(\d+)% increased Shrapnel Shot Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Siege Ballista Attack Speed',
    regex: /(\d+)% increased Siege Ballista Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Siege Ballista Damage',
    regex: /(\d+)% increased Siege Ballista Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Siege Ballista Totem Placement Speed',
    regex: /(\d+)% increased Siege Ballista Totem Placement Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Smoke Mine Duration',
    regex: /(\d+)% increased Smoke Mine Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Spark Damage',
    regex: /(\d+)% increased Spark Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Spark Projectile Speed',
    regex: /(\d+)% increased Spark Projectile Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Spectral Shield Throw Damage',
    regex: /(\d+)% increased Spectral Shield Throw Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Spectral Shield Throw Projectile Speed',
    regex: /(\d+)% increased Spectral Shield Throw Projectile Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Spectral Throw Damage',
    regex: /(\d+)% increased Spectral Throw Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Spectral Throw Projectile Speed',
    regex: /(\d+)% increased Spectral Throw Projectile Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Spirit Offering Duration',
    regex: /(\d+)% increased Spirit Offering Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Split Arrow Critical Strike Chance',
    regex: /(\d+)% increased Split Arrow Critical Strike Chance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Split Arrow Damage',
    regex: /(\d+)% increased Split Arrow Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Static Strike Area of Effect',
    regex: /(\d+)% increased Static Strike Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Static Strike Damage',
    regex: /(\d+)% increased Static Strike Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Static Strike Duration',
    regex: /(\d+)% increased Static Strike Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Storm Burst Area of Effect',
    regex: /(\d+)% increased Storm Burst Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Storm Burst Damage',
    regex: /(\d+)% increased Storm Burst Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Storm Call Area of Effect',
    regex: /(\d+)% increased Storm Call Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Storm Call Damage',
    regex: /(\d+)% increased Storm Call Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Sunder Area of Effect',
    regex: /(\d+)% increased Sunder Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Sunder Attack Speed',
    regex: /(\d+)% increased Sunder Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Sunder Damage',
    regex: /(\d+)% increased Sunder Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Sweep Area of Effect',
    regex: /(\d+)% increased Sweep Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Sweep Damage',
    regex: /(\d+)% increased Sweep Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Tectonic Slam Area of Effect',
    regex: /(\d+)% increased Tectonic Slam Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Tectonic Slam Damage',
    regex: /(\d+)% increased Tectonic Slam Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Tempest Shield Damage',
    regex: /(\d+)% increased Tempest Shield Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Temporal Chains Curse Effect',
    regex: /(\d+)% increased Temporal Chains Curse Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Temporal Chains Duration',
    regex: /(\d+)% increased Temporal Chains Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Tornado Shot Critical Strike Chance',
    regex: /(\d+)% increased Tornado Shot Critical Strike Chance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Tornado Shot Damage',
    regex: /(\d+)% increased Tornado Shot Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Unearth Cast Speed',
    regex: /(\d+)% increased Unearth Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Unearth Damage',
    regex: /(\d+)% increased Unearth Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Vengeance Cooldown Recovery Speed',
    regex: /(\d+)% increased Vengeance Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Vengeance Damage',
    regex: /(\d+)% increased Vengeance Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Vigilant Strike Damage',
    regex: /(\d+)% increased Vigilant Strike Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Vigilant Strike Fortify Duration',
    regex: /(\d+)% increased Vigilant Strike Fortify Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Viper Strike Critical Strike Chance',
    regex: /(\d+)% increased Viper Strike Critical Strike Chance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Viper Strike Damage',
    regex: /(\d+)% increased Viper Strike Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Viper Strike Duration',
    regex: /(\d+)% increased Viper Strike Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Volatile Dead Cast Speed',
    regex: /(\d+)% increased Volatile Dead Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Volatile Dead Damage',
    regex: /(\d+)% increased Volatile Dead Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Vortex Area of Effect',
    regex: /(\d+)% increased Vortex Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Vortex Damage',
    regex: /(\d+)% increased Vortex Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Vortex Duration',
    regex: /(\d+)% increased Vortex Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Vulnerability Curse Effect',
    regex: /(\d+)% increased Vulnerability Curse Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Vulnerability Duration',
    regex: /(\d+)% increased Vulnerability Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Warlord\'s Mark Curse Effect',
    regex: /(\d+)% increased Warlord's Mark Curse Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Warlord\'s Mark Duration',
    regex: /(\d+)% increased Warlord's Mark Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Whirling Blades Attack Speed',
    regex: /(\d+)% increased Whirling Blades Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Whirling Blades Damage',
    regex: /(\d+)% increased Whirling Blades Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Wild Strike Area of Effect',
    regex: /(\d+)% increased Wild Strike Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% increased Wild Strike Damage',
    regex: /(\d+)% increased Wild Strike Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% of Burning Arrow Physical Damage gained as Extra Fire Damage',
    regex: /(\d+)% of Burning Arrow Physical Damage gained as Extra Fire Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% of Damage Leeched as Life if you\'ve Killed Recently',
    regex: /(\d+)% of Damage Leeched as Life if you've Killed Recently/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% of Glacial Cascade Physical Damage Converted to Cold Damage',
    regex: /(\d+)% of Glacial Cascade Physical Damage Converted to Cold Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% of Glacial Hammer Physical Damage gained as Extra Cold Damage',
    regex: /(\d+)% of Glacial Hammer Physical Damage gained as Extra Cold Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% of Ice Crash Physical Damage gained as Extra Cold Damage',
    regex: /(\d+)% of Ice Crash Physical Damage gained as Extra Cold Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% of Infernal Blow Physical Damage gained as Extra Fire Damage',
    regex: /(\d+)% of Infernal Blow Physical Damage gained as Extra Fire Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% of Shrapnel Shot Physical Damage gained as extra Lightning Damage',
    regex: /(\d+)% of Shrapnel Shot Physical Damage gained as extra Lightning Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% reduced Ball Lightning Projectile Speed',
    regex: /(\d+)% reduced Ball Lightning Projectile Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% reduced Earthquake Duration',
    regex: /(\d+)% reduced Earthquake Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% reduced Lightning Warp Duration',
    regex: /(\d+)% reduced Lightning Warp Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% reduced Mana Cost of Skills if you\'ve been Hit Recently',
    regex: /(\d+)% reduced Mana Cost of Skills if you've been Hit Recently/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% reduced Spectral Throw Projectile Deceleration',
    regex: /(\d+)% reduced Spectral Throw Projectile Deceleration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '#% reduced Storm Call Duration',
    regex: /(\d+)% reduced Storm Call Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '+# to maximum number of Bladestorms',
    regex: /\+(\d+) to maximum number of Bladestorms/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '+# to maximum number of Sentinels of Purity',
    regex: /\+(\d+) to maximum number of Sentinels of Purity/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '+#% Sweep Knockback Chance',
    regex: /\+(\d+)% Sweep Knockback Chance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '+#% to Ancestral Protector Totem Elemental Resistances',
    regex: /\+(\d+)% to Ancestral Protector Totem Elemental Resistances/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '+#% to Animated Guardian Elemental Resistances',
    regex: /\+(\d+)% to Animated Guardian Elemental Resistances/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '+#% to Chaos Golem Elemental Resistances',
    regex: /\+(\d+)% to Chaos Golem Elemental Resistances/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '+#% to Ice Golem Elemental Resistances',
    regex: /\+(\d+)% to Ice Golem Elemental Resistances/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '+#% to increased Flame Golem Elemental Resistances',
    regex: /\+(\d+)% to increased Flame Golem Elemental Resistances/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '+#% to Lightning Golem Elemental Resistances',
    regex: /\+(\d+)% to Lightning Golem Elemental Resistances/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '+#% to Raised Spectre Elemental Resistances',
    regex: /\+(\d+)% to Raised Spectre Elemental Resistances/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: '+#% to Stone Golem Elemental Resistances',
    regex: /\+(\d+)% to Stone Golem Elemental Resistances/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Adds # to # Chaos Damage if you\'ve taken a Critical Strike Recently',
    regex: /Adds (\d+) to (\d+) Chaos Damage if you've taken a Critical Strike Recently/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Adds # to # Cold Damage if you\'ve been Hit Recently',
    regex: /Adds (\d+) to (\d+) Cold Damage if you've been Hit Recently/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Adds # to # Fire Damage if you\'ve Killed Recently',
    regex: /Adds (\d+) to (\d+) Fire Damage if you've Killed Recently/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Adds # to # Lightning Damage if you haven\'t Killed Recently',
    regex: /Adds (\d+) to (\d+) Lightning Damage if you haven't Killed Recently/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'All Towers in range of your Empowering Towers have #% chance to deal Double Damage',
    regex: /All Towers in range of your Empowering Towers have (\d+)% chance to deal Double Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Ancestral Blademaster Totem grants #% of Physical Damage as Extra Fire Damage while Active',
    regex: /Ancestral Blademaster Totem grants (\d+)% of Physical Damage as Extra Fire Damage while Active/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Ancestral Protector Totem deals #% increased Damage',
    regex: /Ancestral Protector Totem deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Ancestral Protector Totem grants #% increased Attack Speed while Active',
    regex: /Ancestral Protector Totem grants (\d+)% increased Attack Speed while Active/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Ancestral Warchief Totem grants #% increased Melee Damage while Active',
    regex: /Ancestral Warchief Totem grants (\d+)% increased Melee Damage while Active/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Anger has #% reduced Mana Reservation',
    regex: /Anger has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Animated Guardians deal #% increased Damage',
    regex: /Animated Guardians deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Animated Weapons deal #% increased Damage',
    regex: /Animated Weapons deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Arc Chains an additional # times',
    regex: /Arc Chains an additional (\d+) times/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Arc Chains an additional time',
    regex: /Arc Chains an additional time/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Arc deals #% increased Damage for each time it has Chained',
    regex: /Arc deals (\d+)% increased Damage for each time it has Chained/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Arc has +#% chance to Shock',
    regex: /Arc has \+(\d+)% chance to Shock/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Arctic Armour has #% reduced Mana Reservation',
    regex: /Arctic Armour has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Arctic Breath\'s Chilling Area has #% increased Movement Speed',
    regex: /Arctic Breath's Chilling Area has (\d+)% increased Movement Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Armageddon Brand Damage Penetrates #% of Branded Enemy\'s Fire Resistance',
    regex: /Armageddon Brand Damage Penetrates (\d+)% of Branded Enemy's Fire Resistance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Armageddon Brand deals #% increased Damage',
    regex: /Armageddon Brand deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Armageddon Brand has #% increased Activation Frequency',
    regex: /Armageddon Brand has (\d+)% increased Activation Frequency/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Ball Lightning fires an additional Projectile',
    regex: /Ball Lightning fires an additional Projectile/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Bane deals #% increased Damage',
    regex: /Bane deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Bane has #% increased Area of Effect',
    regex: /Bane has (\d+)% increased Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Barrage fires # additional Projectiles',
    regex: /Barrage fires (\d+) additional Projectiles/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Berserk has #% increased Buff Effect',
    regex: /Berserk has (\d+)% increased Buff Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Berserk has #% reduced Rage loss per second',
    regex: /Berserk has (\d+)% reduced Rage loss per second/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Blade Vortex has +#% to Critical Strike Multiplier for each blade',
    regex: /Blade Vortex has \+(\d+)% to Critical Strike Multiplier for each blade/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Bladefall has an additional Volley',
    regex: /Bladefall has an additional Volley/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Bladestorm deals #% increased Damage',
    regex: /Bladestorm deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Blast Rain has a #% chance for an additional blast',
    regex: /Blast Rain has a (\d+)% chance for an additional blast/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Blight has #% increased Hinder Duration',
    regex: /Blight has (\d+)% increased Hinder Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Blink Arrow and Blink Arrow Clones have #% increased Attack Speed',
    regex: /Blink Arrow and Blink Arrow Clones have (\d+)% increased Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Blink Arrow and Blink Arrow Clones have #% increased Damage',
    regex: /Blink Arrow and Blink Arrow Clones have (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Blood and Sand has #% increased Buff Effect',
    regex: /Blood and Sand has (\d+)% increased Buff Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Blood Rage grants additional #% chance to gain a Frenzy Charge on Kill',
    regex: /Blood Rage grants additional (\d+)% chance to gain a Frenzy Charge on Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Blood Rage grants additional #% increased Attack Speed',
    regex: /Blood Rage grants additional (\d+)% increased Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Bone Offering grants an additional +#% Chance to Block Attack Damage',
    regex: /Bone Offering grants an additional \+(\d+)% Chance to Block Attack Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Burning Arrow has +#% chance to Ignite',
    regex: /Burning Arrow has \+(\d+)% chance to Ignite/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Caustic Arrow has #% chance to inflict Withered on Hit for # seconds base Duration',
    regex: /Caustic Arrow has (\d+)% chance to inflict Withered on Hit for (\d+) seconds base Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Chain Hook deals #% increased Damage',
    regex: /Chain Hook deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Chain Hook has +# Radius per 12 Rage',
    regex: /Chain Hook has \+(\d+) Radius per 12 Rage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Chain Hook has a #% chance to grant +1 Rage if it Hits Enemies',
    regex: /Chain Hook has a (\d+)% chance to grant \+1 Rage if it Hits Enemies/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Chaos Golems deal #% increased Damage',
    regex: /Chaos Golems deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Charged Dash has #% more Movement Speed',
    regex: /Charged Dash has (\d+)% more Movement Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Charged Dash has +# to Radius of each Wave\'s last damage Area',
    regex: /Charged Dash has \+(\d+) to Radius of each Wave's last damage Area/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Chills from Ice Nova Hits always reduce Action Speed by at least #%',
    regex: /Chills from Ice Nova Hits always reduce Action Speed by at least (\d+)%/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Clarity has #% reduced Mana Reservation',
    regex: /Clarity has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Cobra Lash Chains # additional times',
    regex: /Cobra Lash Chains (\d+) additional times/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Cobra Lash deals #% increased Damage',
    regex: /Cobra Lash deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Cobra Lash has #% increased Projectile Speed',
    regex: /Cobra Lash has (\d+)% increased Projectile Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Consecrated Ground from Holy Flame Totem applies #% increased Damage taken to Enemies',
    regex: /Consecrated Ground from Holy Flame Totem applies (\d+)% increased Damage taken to Enemies/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Consecrated Ground from Purifying Flame applies #% increased Damage taken to Enemies',
    regex: /Consecrated Ground from Purifying Flame applies (\d+)% increased Damage taken to Enemies/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Consecrated Path deals #% increased Damage',
    regex: /Consecrated Path deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Consecrated Path has #% increased Area of Effect',
    regex: /Consecrated Path has (\d+)% increased Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Consecrated Path has #% increased teleport range',
    regex: /Consecrated Path has (\d+)% increased teleport range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Converted Enemies have #% increased Damage',
    regex: /Converted Enemies have (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Cremation can have up to # additional Geyser at a time',
    regex: /Cremation can have up to (\d+) additional Geyser at a time/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Damage Penetrates #% of Enemy Elemental Resistances if you haven\'t Killed Recently',
    regex: /Damage Penetrates (\d+)% of Enemy Elemental Resistances if you haven't Killed Recently/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Dash has +# Cooldown',
    regex: /Dash has \+(\d+) Cooldown/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Dash has +# Cooldowns',
    regex: /Dash has \+(\d+) Cooldowns/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Dash travels #% increased distance',
    regex: /Dash travels (\d+)% increased distance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Desecrate Spawns # additional corpses',
    regex: /Desecrate Spawns (\d+) additional corpses/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Determination has #% reduced Mana Reservation',
    regex: /Determination has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Detonate Dead has a #% chance to detonate an additional corpse',
    regex: /Detonate Dead has a (\d+)% chance to detonate an additional corpse/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Devouring Totem has #% Chance to Consume an additional corpse',
    regex: /Devouring Totem has (\d+)% Chance to Consume an additional corpse/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Discipline has #% reduced Mana Reservation',
    regex: /Discipline has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Divine Ire Damages # additional nearby Enemies when gaining Stages',
    regex: /Divine Ire Damages (\d+) additional nearby Enemies when gaining Stages/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Divine Ire Damages an additional nearby Enemy when gaining Stages',
    regex: /Divine Ire Damages an additional nearby Enemy when gaining Stages/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Divine Ire deals #% increased Damage',
    regex: /Divine Ire deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Divine Ire\'s beam has #% increased width',
    regex: /Divine Ire's beam has (\d+)% increased width/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Dominating Blow can summon # additional Magic Sentinels of Dominance',
    regex: /Dominating Blow can summon (\d+) additional Magic Sentinels of Dominance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Dominating Blow can summon an additional Rare Sentinel of Dominance',
    regex: /Dominating Blow can summon an additional Rare Sentinel of Dominance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Double Strike has a #% chance to deal Double Damage to Bleeding Enemies',
    regex: /Double Strike has a (\d+)% chance to deal Double Damage to Bleeding Enemies/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Dread Banner has #% increased Aura Effect',
    regex: /Dread Banner has (\d+)% increased Aura Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Elemental Hit deals #% increased Damage',
    regex: /Elemental Hit deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Elemental Hit has +#% chance to Freeze, Shock and Ignite',
    regex: /Elemental Hit has \+(\d+)% chance to Freeze, Shock and Ignite/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Enemies affected by Bear Trap take #% increased Damage from Trap or Mine Hits',
    regex: /Enemies affected by Bear Trap take (\d+)% increased Damage from Trap or Mine Hits/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Enemies inside Glacial Cage take #% increased Damage',
    regex: /Enemies inside Glacial Cage take (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Ethereal Knives Pierces an additional Target',
    regex: /Ethereal Knives Pierces an additional Target/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Explosive Trap causes # additional smaller explosions',
    regex: /Explosive Trap causes (\d+) additional smaller explosions/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Explosive Trap causes an additional smaller explosion',
    regex: /Explosive Trap causes an additional smaller explosion/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Explosive Trap deals #% increased Damage',
    regex: /Explosive Trap deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Explosive Trap has #% increased Area of Effect',
    regex: /Explosive Trap has (\d+)% increased Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Fireball has +#% chance to Ignite',
    regex: /Fireball has \+(\d+)% chance to Ignite/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Flame Golems have #% increased Damage',
    regex: /Flame Golems have (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Flamethrower Trap deals #% increased Damage',
    regex: /Flamethrower Trap deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Flamethrower Trap has # additional Flames',
    regex: /Flamethrower Trap has (\d+) additional Flames/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Flamethrower Trap has #% increased Cast Speed',
    regex: /Flamethrower Trap has (\d+)% increased Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Flamethrower Trap has #% increased Cooldown Recovery Speed',
    regex: /Flamethrower Trap has (\d+)% increased Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Flamethrower Trap has #% increased Skill Effect Duration',
    regex: /Flamethrower Trap has (\d+)% increased Skill Effect Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Flamethrower Trap has an additional Flame',
    regex: /Flamethrower Trap has an additional Flame/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Flesh and Stone has #% reduced Mana Reservation',
    regex: /Flesh and Stone has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Flesh Offering grants an additional #% increased Attack Speed',
    regex: /Flesh Offering grants an additional (\d+)% increased Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Frost Bomb has #% increased Debuff Duration',
    regex: /Frost Bomb has (\d+)% increased Debuff Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Frostblink has #% increased Cooldown Recovery Speed',
    regex: /Frostblink has (\d+)% increased Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Frostblink has #% increased maximum travel distance',
    regex: /Frostblink has (\d+)% increased maximum travel distance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Frostbolt has +#% chance to Freeze',
    regex: /Frostbolt has \+(\d+)% chance to Freeze/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Gain #% of Rejuvenation Totem Life Regeneration as extra Mana Regeneration',
    regex: /Gain (\d+)% of Rejuvenation Totem Life Regeneration as extra Mana Regeneration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Glacial Hammer has +#% chance to Freeze',
    regex: /Glacial Hammer has \+(\d+)% chance to Freeze/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Grace has #% reduced Mana Reservation',
    regex: /Grace has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Ground Slam has a #% increased angle',
    regex: /Ground Slam has a (\d+)% increased angle/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Haste has #% reduced Mana Reservation',
    regex: /Haste has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Hatred has #% reduced Mana Reservation',
    regex: /Hatred has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Heavy Strike has a #% chance to deal Double Damage',
    regex: /Heavy Strike has a (\d+)% chance to deal Double Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Herald of Agony has #% reduced Mana Reservation',
    regex: /Herald of Agony has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Herald of Ash has #% reduced Mana Reservation',
    regex: /Herald of Ash has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Herald of Ice has #% reduced Mana Reservation',
    regex: /Herald of Ice has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Herald of Purity has #% reduced Mana Reservation',
    regex: /Herald of Purity has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Herald of Thunder has #% reduced Mana Reservation',
    regex: /Herald of Thunder has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Holy Flame Totem deals #% increased Damage',
    regex: /Holy Flame Totem deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Holy Flame Totem fires # additional Projectiles',
    regex: /Holy Flame Totem fires (\d+) additional Projectiles/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Holy Flame Totem fires an additional Projectile',
    regex: /Holy Flame Totem fires an additional Projectile/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Holy Flame Totem has #% increased Projectile Speed',
    regex: /Holy Flame Totem has (\d+)% increased Projectile Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Ice Golems deal #% increased Damage',
    regex: /Ice Golems deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Ice Nova has +#% chance to Freeze',
    regex: /Ice Nova has \+(\d+)% chance to Freeze/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Ice Spear fires an additional Projectile',
    regex: /Ice Spear fires an additional Projectile/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Ice Spear travels #% reduced distance before changing forms',
    regex: /Ice Spear travels (\d+)% reduced distance before changing forms/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Ice Trap Damage Penetrates #% Cold Resistance',
    regex: /Ice Trap Damage Penetrates (\d+)% Cold Resistance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Icicle Mine deals #% increased Damage',
    regex: /Icicle Mine deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Icicle Mine has #% increased Throwing Speed',
    regex: /Icicle Mine has (\d+)% increased Throwing Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Icicle Mine has +#% to Critical Strike Multiplier',
    regex: /Icicle Mine has \+(\d+)% to Critical Strike Multiplier/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Immortal Call has #% increased Buff Duration per Endurance Charge removed',
    regex: /Immortal Call has (\d+)% increased Buff Duration per Endurance Charge removed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Incinerate has #% increased Area of Effect',
    regex: /Incinerate has (\d+)% increased Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Incinerate has +# to maximum stages',
    regex: /Incinerate has \+(\d+) to maximum stages/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Infernal Blow Debuff deals an additional #% of Damage per Charge',
    regex: /Infernal Blow Debuff deals an additional (\d+)% of Damage per Charge/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Kinetic Blast has a #% chance for an additional explosion',
    regex: /Kinetic Blast has a (\d+)% chance for an additional explosion/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Lacerate deals # to # added Physical Damage against Bleeding Enemies',
    regex: /Lacerate deals (\d+) to (\d+) added Physical Damage against Bleeding Enemies/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Lancing Steel deals #% increased Damage',
    regex: /Lancing Steel deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Lancing Steel\'s additional Projectiles have +#% chance to Impale Enemies',
    regex: /Lancing Steel's additional Projectiles have \+(\d+)% chance to Impale Enemies/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Lancing Steel\'s primary Projectile Pierces # additional Targets',
    regex: /Lancing Steel's primary Projectile Pierces (\d+) additional Targets/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Lightning Arrow hits # additional Enemies',
    regex: /Lightning Arrow hits (\d+) additional Enemies/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Lightning Arrow hits an additional Enemy',
    regex: /Lightning Arrow hits an additional Enemy/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Lightning Golems deal #% increased Damage',
    regex: /Lightning Golems deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Lightning Spire Trap deals #% increased Damage',
    regex: /Lightning Spire Trap deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Lightning Spire Trap has #% increased Cast Speed',
    regex: /Lightning Spire Trap has (\d+)% increased Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Lightning Spire Trap has #% increased Cooldown Recovery Speed',
    regex: /Lightning Spire Trap has (\d+)% increased Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Lightning Spire Trap has #% increased Skill Effect Duration',
    regex: /Lightning Spire Trap has (\d+)% increased Skill Effect Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Lightning Spire Trap strikes an additional area',
    regex: /Lightning Spire Trap strikes an additional area/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Lightning Strike fires # additional Projectiles',
    regex: /Lightning Strike fires (\d+) additional Projectiles/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Lightning Strike pierces # additional Targets',
    regex: /Lightning Strike pierces (\d+) additional Targets/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Lightning Trap Damage Penetrates #% Lightning Resistance',
    regex: /Lightning Trap Damage Penetrates (\d+)% Lightning Resistance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Lightning Trap pierces # additional Targets',
    regex: /Lightning Trap pierces (\d+) additional Targets/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Magma Orb Chains an additional # times',
    regex: /Magma Orb Chains an additional (\d+) times/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Magma Orb Chains an additional time',
    regex: /Magma Orb Chains an additional time/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Malevolence has #% reduced Mana Reservation',
    regex: /Malevolence has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Minions summoned by Your Scout Tower have #% increased Damage',
    regex: /Minions summoned by Your Scout Tower have (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Minions summoned by Your Scout Towers have #% increased Life',
    regex: /Minions summoned by Your Scout Towers have (\d+)% increased Life/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Minions summoned by Your Scout Towers have #% increased Movement Speed',
    regex: /Minions summoned by Your Scout Towers have (\d+)% increased Movement Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Minions summoned by Your Sentinel Towers have #% increased Damage',
    regex: /Minions summoned by Your Sentinel Towers have (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Minions summoned by Your Sentinel Towers have #% increased Life',
    regex: /Minions summoned by Your Sentinel Towers have (\d+)% increased Life/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Minions summoned by Your Sentinel Towers have #% increased Movement Speed',
    regex: /Minions summoned by Your Sentinel Towers have (\d+)% increased Movement Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Minions summoned by Your Summoning Towers have #% increased Damage',
    regex: /Minions summoned by Your Summoning Towers have (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Minions summoned by Your Summoning Towers have #% increased Life',
    regex: /Minions summoned by Your Summoning Towers have (\d+)% increased Life/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Minions summoned by Your Summoning Towers have #% increased Movement Speed',
    regex: /Minions summoned by Your Summoning Towers have (\d+)% increased Movement Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Mirror Arrow and Mirror Arrow Clones deal #% increased Damage',
    regex: /Mirror Arrow and Mirror Arrow Clones deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Mirror Arrow and Mirror Arrow Clones have #% increased Attack Speed',
    regex: /Mirror Arrow and Mirror Arrow Clones have (\d+)% increased Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Molten Shell has #% increased Skill Effect Duration',
    regex: /Molten Shell has (\d+)% increased Skill Effect Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Molten Strike fires # additional Projectiles',
    regex: /Molten Strike fires (\d+) additional Projectiles/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Molten Strike fires an additional Projectile',
    regex: /Molten Strike fires an additional Projectile/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Orb of Storms has #% increased Cast Speed',
    regex: /Orb of Storms has (\d+)% increased Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Perforate creates +# Spike',
    regex: /Perforate creates \+(\d+) Spike/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Perforate creates +# Spikes',
    regex: /Perforate creates \+(\d+) Spikes/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Perforate deals #% increased Damage',
    regex: /Perforate deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Perforate has #% increased Area of Effect',
    regex: /Perforate has (\d+)% increased Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Pestilent Strike deals #% increased Damage',
    regex: /Pestilent Strike deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Pestilent Strike has #% increased Area of Effect',
    regex: /Pestilent Strike has (\d+)% increased Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Pestilent Strike has #% increased Duration',
    regex: /Pestilent Strike has (\d+)% increased Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Plague Bearer Buff grants +#% to Poison Damage over Time Multiplier while Infecting',
    regex: /Plague Bearer Buff grants \+(\d+)% to Poison Damage over Time Multiplier while Infecting/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Plague Bearer deals Damage based on an additional #% of Plague Value',
    regex: /Plague Bearer deals Damage based on an additional (\d+)% of Plague Value/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Power Siphon fires # additional Projectiles',
    regex: /Power Siphon fires (\d+) additional Projectiles/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Power Siphon fires an additional Projectile',
    regex: /Power Siphon fires an additional Projectile/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Precision has #% reduced Mana Reservation',
    regex: /Precision has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Pride has #% reduced Mana Reservation',
    regex: /Pride has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Purifying Flame deals #% increased Damage',
    regex: /Purifying Flame deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Purifying Flame has #% increased Area of Effect if targeting Consecrated Ground',
    regex: /Purifying Flame has (\d+)% increased Area of Effect if targeting Consecrated Ground/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Purity of Elements has #% reduced Mana Reservation',
    regex: /Purity of Elements has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Purity of Fire has #% reduced Mana Reservation',
    regex: /Purity of Fire has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Purity of Ice has #% reduced Mana Reservation',
    regex: /Purity of Ice has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Purity of Lightning has #% reduced Mana Reservation',
    regex: /Purity of Lightning has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Pyroclast Mine deals #% increased Damage',
    regex: /Pyroclast Mine deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Pyroclast Mine fires # additional Projectiles',
    regex: /Pyroclast Mine fires (\d+) additional Projectiles/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Pyroclast Mine fires an additional Projectile',
    regex: /Pyroclast Mine fires an additional Projectile/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Pyroclast Mine has #% increased Throwing Speed',
    regex: /Pyroclast Mine has (\d+)% increased Throwing Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Rain of Arrows has #% chance to fire an additional sequence of arrows',
    regex: /Rain of Arrows has (\d+)% chance to fire an additional sequence of arrows/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Raised Zombies deal #% increased Damage',
    regex: /Raised Zombies deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Raised Zombies have #% increased Attack Speed',
    regex: /Raised Zombies have (\d+)% increased Attack Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Raised Zombies have +#% to Elemental Resistances',
    regex: /Raised Zombies have \+(\d+)% to Elemental Resistances/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Regenerate #% of Life per second if you were Hit Recently',
    regex: /Regenerate (\d+)% of Life per second if you were Hit Recently/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Righteous Fire grants #% increased Spell Damage',
    regex: /Righteous Fire grants (\d+)% increased Spell Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Sand Bladestorms move with #% increased speed',
    regex: /Sand Bladestorms move with (\d+)% increased speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Scourge Arrow creates an additional spore pod at Maximum Stages',
    regex: /Scourge Arrow creates an additional spore pod at Maximum Stages/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Scourge Arrow deals #% increased Damage',
    regex: /Scourge Arrow deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Scourge Arrow has #% chance to Poison per Stage',
    regex: /Scourge Arrow has (\d+)% chance to Poison per Stage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Seismic Trap deals #% increased Damage',
    regex: /Seismic Trap deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Seismic Trap has #% increased Cooldown Recovery Speed',
    regex: /Seismic Trap has (\d+)% increased Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Seismic Trap has #% increased Skill Effect Duration',
    regex: /Seismic Trap has (\d+)% increased Skill Effect Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Seismic Trap releases an additional Wave',
    regex: /Seismic Trap releases an additional Wave/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Shattering Steel deals #% increased Damage',
    regex: /Shattering Steel deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Shattering Steel fires an additional Projectile',
    regex: /Shattering Steel fires an additional Projectile/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Shattering Steel grants Fortify on Hitting an Enemy at Close Range',
    regex: /Shattering Steel grants Fortify on Hitting an Enemy at Close Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Shock Nova ring deals #% increased Damage',
    regex: /Shock Nova ring deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Siphoning Trap deals #% increased Damage',
    regex: /Siphoning Trap deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Siphoning Trap has #% increased Chill Effect',
    regex: /Siphoning Trap has (\d+)% increased Chill Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Siphoning Trap has #% increased Skill Effect Duration',
    regex: /Siphoning Trap has (\d+)% increased Skill Effect Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Siphoning Trap\'s beam to you grants #% reduced Damage taken for each other beam',
    regex: /Siphoning Trap's beam to you grants (\d+)% reduced Damage taken for each other beam/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Skeletons deal #% increased Damage',
    regex: /Skeletons deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Smite deals #% increased Damage',
    regex: /Smite deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Smite has #% increased Aura Effect',
    regex: /Smite has (\d+)% increased Aura Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Smite has a #% chance for lightning to strike another target',
    regex: /Smite has a (\d+)% chance for lightning to strike another target/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Smoke Mine grants additional #% increased Movement Speed',
    regex: /Smoke Mine grants additional (\d+)% increased Movement Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Soulrend also Hinders Enemies, with #% reduced Movement Speed',
    regex: /Soulrend also Hinders Enemies, with (\d+)% reduced Movement Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Soulrend deals #% increased Damage',
    regex: /Soulrend deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Soulrend fires an additional Projectile',
    regex: /Soulrend fires an additional Projectile/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Spark fires # additional Projectiles',
    regex: /Spark fires (\d+) additional Projectiles/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Spectral Shield Throw fires # additional Shard Projectiles',
    regex: /Spectral Shield Throw fires (\d+) additional Shard Projectiles/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Spectres have #% increased Attack and Cast Speed',
    regex: /Spectres have (\d+)% increased Attack and Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Spectres have #% increased Damage',
    regex: /Spectres have (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Spirit Offering grants +#% of Physical Damage as Extra Chaos Damage',
    regex: /Spirit Offering grants \+(\d+)% of Physical Damage as Extra Chaos Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Split Arrow fires # additional Projectiles',
    regex: /Split Arrow fires (\d+) additional Projectiles/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Static Strike has +# maximum Beam Targets',
    regex: /Static Strike has \+(\d+) maximum Beam Targets/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Steelskin Buff can take #% increased amount of Damage',
    regex: /Steelskin Buff can take (\d+)% increased amount of Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Steelskin grants #% additional Physical Damage Reduction',
    regex: /Steelskin grants (\d+)% additional Physical Damage Reduction/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Stone Golems deal #% increased Damage',
    regex: /Stone Golems deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Storm Brand Damage Penetrates #% of Branded Enemy\'s Lightning Resistance',
    regex: /Storm Brand Damage Penetrates (\d+)% of Branded Enemy's Lightning Resistance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Storm Brand deals #% increased Damage',
    regex: /Storm Brand deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Storm Brand has a #% chance to Chain an additional time',
    regex: /Storm Brand has a (\d+)% chance to Chain an additional time/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Storm Burst has a #% chance to create an additional Orb',
    regex: /Storm Burst has a (\d+)% chance to create an additional Orb/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Storm Burst has a 15% chance to create an additional Orb',
    regex: /Storm Burst has a 15% chance to create an additional Orb/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Stormblast Mine deals #% increased Damage',
    regex: /Stormblast Mine deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Stormblast Mine has #% increased Aura Effect',
    regex: /Stormblast Mine has (\d+)% increased Aura Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Stormblast Mine has #% increased Throwing Speed',
    regex: /Stormblast Mine has (\d+)% increased Throwing Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Summon Raging Spirit has #% chance to summon an extra Minion',
    regex: /Summon Raging Spirit has (\d+)% chance to summon an extra Minion/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Summon Raging Spirit has #% increased Duration',
    regex: /Summon Raging Spirit has (\d+)% increased Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Summon Skitterbots has #% reduced Mana Reservation',
    regex: /Summon Skitterbots has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Summoned Agony Crawler fires # additional Projectiles',
    regex: /Summoned Agony Crawler fires (\d+) additional Projectiles/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Summoned Carrion Golems deal #% increased Damage',
    regex: /Summoned Carrion Golems deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Summoned Carrion Golems have +#% to all Elemental Resistances',
    regex: /Summoned Carrion Golems have \+(\d+)% to all Elemental Resistances/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Summoned Holy Relics deal #% increased Damage',
    regex: /Summoned Holy Relics deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Summoned Holy Relics have #% increased Area of Effect',
    regex: /Summoned Holy Relics have (\d+)% increased Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Summoned Holy Relics have #% increased Buff Effect',
    regex: /Summoned Holy Relics have (\d+)% increased Buff Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Summoned Raging Spirits deal #% increased Damage',
    regex: /Summoned Raging Spirits deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Summoned Sentinels of Dominance deal #% increased Damage',
    regex: /Summoned Sentinels of Dominance deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Summoned Skitterbots have #% increased Area of Effect',
    regex: /Summoned Skitterbots have (\d+)% increased Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Tectonic Slam has #% chance to create a Charged Slam',
    regex: /Tectonic Slam has (\d+)% chance to create a Charged Slam/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Tempest Shield chains an additional # times',
    regex: /Tempest Shield chains an additional (\d+) times/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Tornado Shot fires # additional secondary Projectiles',
    regex: /Tornado Shot fires (\d+) additional secondary Projectiles/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Toxic Rain deals #% increased Damage',
    regex: /Toxic Rain deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Toxic Rain fires # additional Arrow',
    regex: /Toxic Rain fires (\d+) additional Arrow/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Toxic Rain gains #% of Physical Damage as Extra Chaos Damage',
    regex: /Toxic Rain gains (\d+)% of Physical Damage as Extra Chaos Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Commandment of Blades on Hit',
    regex: /Trigger Commandment of Blades on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Commandment of Flames on Hit',
    regex: /Trigger Commandment of Flames on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Commandment of Force on Hit',
    regex: /Trigger Commandment of Force on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Commandment of Frost on Kill',
    regex: /Trigger Commandment of Frost on Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Commandment of Fury on Hit',
    regex: /Trigger Commandment of Fury on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Commandment of Inferno on Kill',
    regex: /Trigger Commandment of Inferno on Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Commandment of Ire when Hit',
    regex: /Trigger Commandment of Ire when Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Commandment of Light when you take a Critical Strike',
    regex: /Trigger Commandment of Light when you take a Critical Strike/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Commandment of Reflection when Hit',
    regex: /Trigger Commandment of Reflection when Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Commandment of Spite when Hit',
    regex: /Trigger Commandment of Spite when Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Commandment of the Grave when your Skills or Minions Kill',
    regex: /Trigger Commandment of the Grave when your Skills or Minions Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Commandment of the Tempest on Hit',
    regex: /Trigger Commandment of the Tempest on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Commandment of Thunder on Kill',
    regex: /Trigger Commandment of Thunder on Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Commandment of War on Kill',
    regex: /Trigger Commandment of War on Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Commandment of Winter when Hit',
    regex: /Trigger Commandment of Winter when Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Decree of Blades on Hit',
    regex: /Trigger Decree of Blades on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Decree of Flames on Hit',
    regex: /Trigger Decree of Flames on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Decree of Force on Hit',
    regex: /Trigger Decree of Force on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Decree of Frost on Kill',
    regex: /Trigger Decree of Frost on Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Decree of Fury on Hit',
    regex: /Trigger Decree of Fury on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Decree of Inferno on Kill',
    regex: /Trigger Decree of Inferno on Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Decree of Ire when Hit',
    regex: /Trigger Decree of Ire when Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Decree of Light when you take a Critical Strike',
    regex: /Trigger Decree of Light when you take a Critical Strike/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Decree of Reflection when Hit',
    regex: /Trigger Decree of Reflection when Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Decree of Spite when Hit',
    regex: /Trigger Decree of Spite when Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Decree of the Grave when your Skills or Minions Kill',
    regex: /Trigger Decree of the Grave when your Skills or Minions Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Decree of the Tempest on Hit',
    regex: /Trigger Decree of the Tempest on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Decree of Thunder on Kill',
    regex: /Trigger Decree of Thunder on Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Decree of War on Kill',
    regex: /Trigger Decree of War on Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Decree of Winter when Hit',
    regex: /Trigger Decree of Winter when Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Edict of Blades on Hit',
    regex: /Trigger Edict of Blades on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Edict of Flames on Hit',
    regex: /Trigger Edict of Flames on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Edict of Force on Hit',
    regex: /Trigger Edict of Force on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Edict of Frost on Kill',
    regex: /Trigger Edict of Frost on Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Edict of Fury on Hit',
    regex: /Trigger Edict of Fury on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Edict of Inferno on Kill',
    regex: /Trigger Edict of Inferno on Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Edict of Ire when Hit',
    regex: /Trigger Edict of Ire when Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Edict of Light when you take a Critical Strike',
    regex: /Trigger Edict of Light when you take a Critical Strike/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Edict of Reflection when Hit',
    regex: /Trigger Edict of Reflection when Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Edict of Spite when Hit',
    regex: /Trigger Edict of Spite when Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Edict of the Grave when your Skills or Minions Kill',
    regex: /Trigger Edict of the Grave when your Skills or Minions Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Edict of the Tempest on Hit',
    regex: /Trigger Edict of the Tempest on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Edict of Thunder on Kill',
    regex: /Trigger Edict of Thunder on Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Edict of War on Kill',
    regex: /Trigger Edict of War on Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Edict of Winter when Hit',
    regex: /Trigger Edict of Winter when Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Word of Blades on Hit',
    regex: /Trigger Word of Blades on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Word of Flames on Hit',
    regex: /Trigger Word of Flames on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Word of Force on Hit',
    regex: /Trigger Word of Force on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Word of Frost on Kill',
    regex: /Trigger Word of Frost on Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Word of Fury on Hit',
    regex: /Trigger Word of Fury on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Word of Inferno on Kill',
    regex: /Trigger Word of Inferno on Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Word of Ire when Hit',
    regex: /Trigger Word of Ire when Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Word of Light when you take a Critical Strike',
    regex: /Trigger Word of Light when you take a Critical Strike/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Word of Reflection when Hit',
    regex: /Trigger Word of Reflection when Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Word of Spite when Hit',
    regex: /Trigger Word of Spite when Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Word of the Grave when your Skills or Minions Kill',
    regex: /Trigger Word of the Grave when your Skills or Minions Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Word of the Tempest on Hit',
    regex: /Trigger Word of the Tempest on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Word of Thunder on Kill',
    regex: /Trigger Word of Thunder on Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Word of War on Kill',
    regex: /Trigger Word of War on Kill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Trigger Word of Winter when Hit',
    regex: /Trigger Word of Winter when Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Unearth Spawns corpses with +# Level',
    regex: /Unearth Spawns corpses with \+(\d+) Level/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Venom Gyre deals #% increased Damage',
    regex: /Venom Gyre deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Venom Gyre has a #% chance to inflict Withered for 2 seconds on Hit',
    regex: /Venom Gyre has a (\d+)% chance to inflict Withered for 2 seconds on Hit/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Venom Gyre has a #% chance to keep caught Projectiles fired by using Whirling Blades',
    regex: /Venom Gyre has a (\d+)% chance to keep caught Projectiles fired by using Whirling Blades/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Vitality has #% reduced Mana Reservation',
    regex: /Vitality has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Volatile Dead Consumes up to # additional corpses',
    regex: /Volatile Dead Consumes up to (\d+) additional corpses/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Vortex has #% increased Area of Effect when Cast on Frostbolt',
    regex: /Vortex has (\d+)% increased Area of Effect when Cast on Frostbolt/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Vortex has #% increased Cooldown Recovery Speed',
    regex: /Vortex has (\d+)% increased Cooldown Recovery Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'War Banner has #% increased Aura Effect',
    regex: /War Banner has (\d+)% increased Aura Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Wave of Conviction deals #% increased Damage',
    regex: /Wave of Conviction deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Wave of Conviction has #% increased Duration',
    regex: /Wave of Conviction has (\d+)% increased Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Wave of Conviction\'s Exposure applies #% Elemental Resistance',
    regex: /Wave of Conviction's Exposure applies (\d+)% Elemental Resistance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Wild Strike Chains an additional # times',
    regex: /Wild Strike Chains an additional (\d+) times/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Winter Orb deals #% increased Damage',
    regex: /Winter Orb deals (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Winter Orb has #% increased Area of Effect per Stage',
    regex: /Winter Orb has (\d+)% increased Area of Effect per Stage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Winter Orb has +# Maximum Stages',
    regex: /Winter Orb has \+(\d+) Maximum Stages/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Wither has #% increased Area of Effect',
    regex: /Wither has (\d+)% increased Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Wither has #% increased Duration',
    regex: /Wither has (\d+)% increased Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Withering Step has #% increased Elusive Effect',
    regex: /Withering Step has (\d+)% increased Elusive Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Withering Step inflicts # additional Withered Debuffs',
    regex: /Withering Step inflicts (\d+) additional Withered Debuffs/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Wrath has #% reduced Mana Reservation',
    regex: /Wrath has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Arc Towers deal #% increased Damage',
    regex: /Your Arc Towers deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Arc Towers have # additional chains',
    regex: /Your Arc Towers have (\d+) additional chains/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Arc Towers have #% increased Range',
    regex: /Your Arc Towers have (\d+)% increased Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Arc Towers repeats # additional Times',
    regex: /Your Arc Towers repeats (\d+) additional Times/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Chilling Towers deal #% increased Damage',
    regex: /Your Chilling Towers deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Chilling Towers freeze enemies for # seconds while they are affected by chilling beams',
    regex: /Your Chilling Towers freeze enemies for (\d+) seconds while they are affected by chilling beams/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Chilling Towers have #% increased Duration',
    regex: /Your Chilling Towers have (\d+)% increased Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Chilling Towers have #% increased effect of Chill',
    regex: /Your Chilling Towers have (\d+)% increased effect of Chill/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Chilling Towers have #% increased Range',
    regex: /Your Chilling Towers have (\d+)% increased Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Empowering Towers also grant #% increased Cast Speed',
    regex: /Your Empowering Towers also grant (\d+)% increased Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Empowering Towers also grant #% increased Damage',
    regex: /Your Empowering Towers also grant (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Empowering Towers have #% increased Effect',
    regex: /Your Empowering Towers have (\d+)% increased Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Empowering Towers have #% increased Range',
    regex: /Your Empowering Towers have (\d+)% increased Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Fireball Towers deal #% increased Damage',
    regex: /Your Fireball Towers deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Fireball Towers fire an additional # Projectiles',
    regex: /Your Fireball Towers fire an additional (\d+) Projectiles/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Fireball Towers have #% increased Cast Speed',
    regex: /Your Fireball Towers have (\d+)% increased Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Fireball Towers have #% increased Range',
    regex: /Your Fireball Towers have (\d+)% increased Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Fireball Towers Projectiles fire in a Nova',
    regex: /Your Fireball Towers Projectiles fire in a Nova/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Flamethrower Towers deal #% increased Damage',
    regex: /Your Flamethrower Towers deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Flamethrower Towers deal full damage to Fire Enemies',
    regex: /Your Flamethrower Towers deal full damage to Fire Enemies/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Flamethrower Towers have #% increased Cast Speed',
    regex: /Your Flamethrower Towers have (\d+)% increased Cast Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Flamethrower Towers have #% increased Range',
    regex: /Your Flamethrower Towers have (\d+)% increased Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Freezebolt Tower deal full damage to Cold Enemies',
    regex: /Your Freezebolt Tower deal full damage to Cold Enemies/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Freezebolt Towers deal #% increased Damage',
    regex: /Your Freezebolt Towers deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Freezebolt Towers fire # additional Projectiles',
    regex: /Your Freezebolt Towers fire (\d+) additional Projectiles/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Freezebolt Towers have #% increased Range',
    regex: /Your Freezebolt Towers have (\d+)% increased Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Glacial Cage Towers have #% increased Cooldown Recovery',
    regex: /Your Glacial Cage Towers have (\d+)% increased Cooldown Recovery/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Glacial Cage Towers have #% increased Duration',
    regex: /Your Glacial Cage Towers have (\d+)% increased Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Glacial Cage Towers have #% increased Range',
    regex: /Your Glacial Cage Towers have (\d+)% increased Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Imbuing Towers also grant #% increased Critical Strike Chance',
    regex: /Your Imbuing Towers also grant (\d+)% increased Critical Strike Chance/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Imbuing Towers also grant #% increased Damage',
    regex: /Your Imbuing Towers also grant (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Imbuing Towers have #% increased Effect',
    regex: /Your Imbuing Towers have (\d+)% increased Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Imbuing Towers have #% increased Range',
    regex: /Your Imbuing Towers have (\d+)% increased Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Lightning Storm Towers deal #% increased Damage',
    regex: /Your Lightning Storm Towers deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Lightning Storm Towers have #% increased explosion Area of Effect',
    regex: /Your Lightning Storm Towers have (\d+)% increased explosion Area of Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Lightning Storm Towers have #% reduced Impact Delay',
    regex: /Your Lightning Storm Towers have (\d+)% reduced Impact Delay/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Meteor Towers always Stun',
    regex: /Your Meteor Towers always Stun/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Meteor Towers deal #% increased Damage',
    regex: /Your Meteor Towers deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Meteor Towers drop an additional Meteor',
    regex: /Your Meteor Towers drop an additional Meteor/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Meteor Towers have #% increased Range',
    regex: /Your Meteor Towers have (\d+)% increased Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Scout Towers have #% increased Range',
    regex: /Your Scout Towers have (\d+)% increased Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Seismic Towers deal #% increased Damage',
    regex: /Your Seismic Towers deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Seismic Towers has #% increased length and range of Cascades',
    regex: /Your Seismic Towers has (\d+)% increased length and range of Cascades/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Seismic Towers have #% increased Range',
    regex: /Your Seismic Towers have (\d+)% increased Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Seismic Towers have #% increased Stun Duration',
    regex: /Your Seismic Towers have (\d+)% increased Stun Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Seismic Towers have an additional Cascade',
    regex: /Your Seismic Towers have an additional Cascade/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Sentinel Towers have #% increased Range',
    regex: /Your Sentinel Towers have (\d+)% increased Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Shock Nova Towers deal #% increased Damage',
    regex: /Your Shock Nova Towers deal (\d+)% increased Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Shock Nova Towers deal full damage to Lightning Enemies',
    regex: /Your Shock Nova Towers deal full damage to Lightning Enemies/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Shock Nova Towers have #% increased area of effect per repeat',
    regex: /Your Shock Nova Towers have (\d+)% increased area of effect per repeat/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Shock Nova Towers have #% increased effect of Shock',
    regex: /Your Shock Nova Towers have (\d+)% increased effect of Shock/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Shock Nova Towers have #% increased Range',
    regex: /Your Shock Nova Towers have (\d+)% increased Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Shock Nova Towers repeats # additional Times',
    regex: /Your Shock Nova Towers repeats (\d+) additional Times/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Smothering Towers also grant #% reduced Damage',
    regex: /Your Smothering Towers also grant (\d+)% reduced Damage/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Smothering Towers also grant #% reduced Movement Speed',
    regex: /Your Smothering Towers also grant (\d+)% reduced Movement Speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Smothering Towers have #% increased Effect',
    regex: /Your Smothering Towers have (\d+)% increased Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Smothering Towers have #% increased Range',
    regex: /Your Smothering Towers have (\d+)% increased Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Stone Gaze Cage Towers have #% increased Range',
    regex: /Your Stone Gaze Cage Towers have (\d+)% increased Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Stone Gaze Towers have #% increased Cooldown Recovery',
    regex: /Your Stone Gaze Towers have (\d+)% increased Cooldown Recovery/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Stone Gaze Towers have #% increased Duration',
    regex: /Your Stone Gaze Towers have (\d+)% increased Duration/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Stone Gaze Towers have #% reduced Petrification Delay',
    regex: /Your Stone Gaze Towers have (\d+)% reduced Petrification Delay/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Summoning Tower summons # additional Minions',
    regex: /Your Summoning Tower summons (\d+) additional Minions/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Summoning Towers have#% increased Range',
    regex: /Your Summoning Towers have(\d+)% increased Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Temporal Towers also grant you #% increased action speed',
    regex: /Your Temporal Towers also grant you (\d+)% increased action speed/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Temporal Towers effects decay #% slower',
    regex: /Your Temporal Towers effects decay (\d+)% slower/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Temporal Towers have #% increased Effect',
    regex: /Your Temporal Towers have (\d+)% increased Effect/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Your Temporal Towers have #% increased Range',
    regex: /Your Temporal Towers have (\d+)% increased Range/,
    type: ModFilterType.ENCHANTMENT,
  },
  {
    label: 'Zealotry has #% reduced Mana Reservation',
    regex: /Zealotry has (\d+)% reduced Mana Reservation/,
    type: ModFilterType.ENCHANTMENT,
  },
];
