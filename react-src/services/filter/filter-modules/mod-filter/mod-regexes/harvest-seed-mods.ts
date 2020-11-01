import { ModFilterType } from '../ModFilterType';
import { IMod } from './../IModFilterParams';

export const harvestSeedModRegexes: IMod[] = [
  {
    label: 'Reforge a Normal or Magic item as a Rare item with random modifiers, including a Caster modifier',
    regex: /Reforge a Normal or Magic item as a Rare item with random modifiers, including a Caster modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Caster modifier',
    regex: /Reforge a Rare item with new random modifiers, including a Caster modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random non-Caster modifier from an item and add a new Caster modifier',
    regex: /Remove a random non-Caster modifier from an item and add a new Caster modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment a Magic or Rare item with a new Caster modifier',
    regex: /Augment a Magic or Rare item with a new Caster modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Caster modifier from an item',
    regex: /Remove a random Caster modifier from an item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Randomise the numeric values of the random Caster modifiers on a Magic or Rare item',
    regex: /Randomise the numeric values of the random Caster modifiers on a Magic or Rare item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Caster modifier from an item and add a new Caster modifier',
    regex: /Remove a random Caster modifier from an item and add a new Caster modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Caster modifier. Caster modifiers are more common',
    regex: /Reforge a Rare item with new random modifiers, including a Caster modifier\. Caster modifiers are more common/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment a Magic or Rare item with a new Caster modifier with Lucky values',
    regex: /Augment a Magic or Rare item with a new Caster modifier with Lucky values/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Normal or Magic item as a Rare item with random modifiers, including a Physical modifier',
    regex: /Reforge a Normal or Magic item as a Rare item with random modifiers, including a Physical modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Physical modifier',
    regex: /Reforge a Rare item with new random modifiers, including a Physical modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random non-Physical modifier from an item and add a new Physical modifier',
    regex: /Remove a random non-Physical modifier from an item and add a new Physical modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment a Magic or Rare item with a new Physical modifier',
    regex: /Augment a Magic or Rare item with a new Physical modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Physical modifier from an item',
    regex: /Remove a random Physical modifier from an item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Randomise the numeric values of the random Physical modifiers on a Magic or Rare item',
    regex: /Randomise the numeric values of the random Physical modifiers on a Magic or Rare item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Physical modifier from an item and add a new Physical modifier',
    regex: /Remove a random Physical modifier from an item and add a new Physical modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Physical modifier. Physical modifiers are more common',
    regex: /Reforge a Rare item with new random modifiers, including a Physical modifier\. Physical modifiers are more common/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment a Magic or Rare item with a new Physical modifier with Lucky values',
    regex: /Augment a Magic or Rare item with a new Physical modifier with Lucky values/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge the colour of a non-Red socket on an item, turning it Red',
    regex: /Reforge the colour of a non-Red socket on an item, turning it Red/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge the colour of a non-Blue socket on an item, turning it Blue',
    regex: /Reforge the colour of a non-Blue socket on an item, turning it Blue/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge the colour of a non-Green socket on an item, turning it Green',
    regex: /Reforge the colour of a non-Green socket on an item, turning it Green/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge the colour of two random sockets on an item, turning them Red and Blue',
    regex: /Reforge the colour of two random sockets on an item, turning them Red and Blue/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge the colour of two random sockets on an item, turning them Red and Green',
    regex: /Reforge the colour of two random sockets on an item, turning them Red and Green/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge the colour of two random sockets on an item, turning them Blue and Green',
    regex: /Reforge the colour of two random sockets on an item, turning them Blue and Green/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label:
      'Reforge the colour of three random sockets on an item, turning them Red, Blue and Green',
    regex:
      /Reforge the colour of three random sockets on an item, turning them Red, Blue and Green/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge the colour of a random socket on an item, turning it White',
    regex: /Reforge the colour of a random socket on an item, turning it White/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Normal or Magic item as a Rare item with random modifiers, including a Fire modifier',
    regex: /Reforge a Normal or Magic item as a Rare item with random modifiers, including a Fire modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Fire modifier',
    regex: /Reforge a Rare item with new random modifiers, including a Fire modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random non-Fire modifier from an item and add a new Fire modifier',
    regex: /Remove a random non-Fire modifier from an item and add a new Fire modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment a Magic or Rare item with a new Fire modifier',
    regex: /Augment a Magic or Rare item with a new Fire modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Fire modifier from an item',
    regex: /Remove a random Fire modifier from an item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Randomise the numeric values of the random Fire modifiers on a Magic or Rare item',
    regex: /Randomise the numeric values of the random Fire modifiers on a Magic or Rare item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Fire modifier from an item and add a new Fire modifier',
    regex: /Remove a random Fire modifier from an item and add a new Fire modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Fire modifier. Fire modifiers are more common',
    regex: /Reforge a Rare item with new random modifiers, including a Fire modifier\. Fire modifiers are more common/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment a Magic or Rare item with a new Fire modifier with Lucky values',
    regex: /Augment a Magic or Rare item with a new Fire modifier with Lucky values/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge the number of sockets on an item 10 times, using the outcome with the greatest number of sockets',
    regex: /Reforge the number of sockets on an item 10 times, using the outcome with the greatest number of sockets/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge the links between sockets on an item 10 times, using the outcome with the greatest number of linked sockets',
    regex: /Reforge the links between sockets on an item 10 times, using the outcome with the greatest number of linked sockets/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge the colours of sockets on an item 10 times, using the outcome with the greatest number of less-common socket colours',
    regex: /Reforge the colours of sockets on an item 10 times, using the outcome with the greatest number of less-common socket colours/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Improves the Quality of a Flask by at least 10%. Has greater effect on lower rarity flasks. The maximum quality is 20%',
    regex: /Improves the Quality of a Flask by at least 10%\. Has greater effect on lower rarity flasks\. The maximum quality is 20%/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Improves the Quality of a Gem by at least 10%. The maximum quality is 20%',
    regex: /Improves the Quality of a Gem by at least 10%\. The maximum quality is 20%/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Upgrades a Normal Item to a random rarity 10 times, using the outcome with the highest rarity',
    regex: /Upgrades a Normal Item to a random rarity 10 times, using the outcome with the highest rarity/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers 10 times, using the outcome with the highest average modifier level',
    regex: /Reforge a Rare item with new random modifiers 10 times, using the outcome with the highest average modifier level/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Corrupt an item 10 times, or until getting a corrupted implicit modifier',
    regex: /Corrupt an item 10 times, or until getting a corrupted implicit modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a modifier that grants Fire Resistance into a similar-tier modifier that grants Cold Resistance',
    regex: /Change a modifier that grants Fire Resistance into a similar-tier modifier that grants Cold Resistance/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a modifier that grants Cold Resistance into a similar-tier modifier that grants Lightning Resistance',
    regex: /Change a modifier that grants Cold Resistance into a similar-tier modifier that grants Lightning Resistance/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a modifier that grants Lightning Resistance into a similar-tier modifier that grants Fire Resistance',
    regex: /Change a modifier that grants Lightning Resistance into a similar-tier modifier that grants Fire Resistance/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a modifier that grants Fire Resistance into a similar-tier modifier that grants Lightning Resistance',
    regex: /Change a modifier that grants Fire Resistance into a similar-tier modifier that grants Lightning Resistance/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a modifier that grants Cold Resistance into a similar-tier modifier that grants Fire Resistance',
    regex: /Change a modifier that grants Cold Resistance into a similar-tier modifier that grants Fire Resistance/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a modifier that grants Lightning Resistance into a similar-tier modifier that grants Cold Resistance',
    regex: /Change a modifier that grants Lightning Resistance into a similar-tier modifier that grants Cold Resistance/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 3 Chaos Orbs for a Divine Orb',
    regex: /Exchange 3 Chaos Orbs for a Divine Orb/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 3 Orbs of Transmutation for 3 Orbs of Alchemy',
    regex: /Exchange 3 Orbs of Transmutation for 3 Orbs of Alchemy/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 3 Blessed Orbs for 6 Orbs of Alteration',
    regex: /Exchange 3 Blessed Orbs for 6 Orbs of Alteration/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 3 Orbs of Alchemy for 6 Cartographer\'s Chisels',
    regex: /Exchange 3 Orbs of Alchemy for 6 Cartographer's Chisels/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 3 Chromatic Orbs for 6 Gemcutter\'s Prisms',
    regex: /Exchange 3 Chromatic Orbs for 6 Gemcutter's Prisms/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 3 Jeweller\'s Orbs for 6 Orbs of Fusing',
    regex: /Exchange 3 Jeweller's Orbs for 6 Orbs of Fusing/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 3 Scrolls of Wisdom for 6 Orbs of Chance',
    regex: /Exchange 3 Scrolls of Wisdom for 6 Orbs of Chance/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 3 Simple Sextants for 3 Prime Sextants',
    regex: /Exchange 3 Simple Sextants for 3 Prime Sextants/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 3 Prime Sextants for 3 Awakened Sextants',
    regex: /Exchange 3 Prime Sextants for 3 Awakened Sextants/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 3 Orbs of Scouring for 3 Orbs of Annulment',
    regex: /Exchange 3 Orbs of Scouring for 3 Orbs of Annulment/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 3 Orbs of Alteration for 3 Chaos Orbs',
    regex: /Exchange 3 Orbs of Alteration for 3 Chaos Orbs/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 3 Vaal Orbs for 6 Orbs of Regret',
    regex: /Exchange 3 Vaal Orbs for 6 Orbs of Regret/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 3 Cartographer\'s Chisels for 3 Vaal Orbs',
    regex: /Exchange 3 Cartographer's Chisels for 3 Vaal Orbs/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a stack of Fossils into a different type of Fossil. The new Fossil type may have a smaller stack size.',
    regex: /Change a stack of Fossils into a different type of Fossil\. The new Fossil type may have a smaller stack size\./,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a stack of Essences into a different type of the same tier',
    regex: /Change a stack of Essences into a different type of the same tier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a stack of Delirium Orbs into a different type of Delirium Orb',
    regex: /Change a stack of Delirium Orbs into a different type of Delirium Orb/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a stack of Oils into a different colour of Oil',
    regex: /Change a stack of Oils into a different colour of Oil/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a stack of Catalysts into a different type of Catalyst',
    regex: /Change a stack of Catalysts into a different type of Catalyst/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map. Add a free craft to your Map device',
    regex: /Sacrifice a Map\. Add a free craft to your Map device/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map. Add a free Infused Anarchy craft to your Map device',
    regex: /Sacrifice a Map\. Add a free Infused Anarchy craft to your Map device/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map. Add a free Infused Nemesis craft to your Map device',
    regex: /Sacrifice a Map\. Add a free Infused Nemesis craft to your Map device/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map. Add a free Infused Domination craft to your Map device',
    regex: /Sacrifice a Map\. Add a free Infused Domination craft to your Map device/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map. Add a free Infused Bloodlines craft to your Map device',
    regex: /Sacrifice a Map\. Add a free Infused Bloodlines craft to your Map device/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map. Add a free Infused Rampage craft to your Map device',
    regex: /Sacrifice a Map\. Add a free Infused Rampage craft to your Map device/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map. Add a free Infused Ambush craft to your Map device',
    regex: /Sacrifice a Map\. Add a free Infused Ambush craft to your Map device/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map. Add a free Infused Harbinger craft to your Map device',
    regex: /Sacrifice a Map\. Add a free Infused Harbinger craft to your Map device/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map. Add a free Infused Perandus craft to your Map device',
    regex: /Sacrifice a Map\. Add a free Infused Perandus craft to your Map device/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item, keeping all Prefixes',
    regex: /Reforge a Rare item, keeping all Prefixes/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item, keeping all Suffixes',
    regex: /Reforge a Rare item, keeping all Suffixes/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item, being much less likely to receive the same modifier types',
    regex: /Reforge a Rare item, being much less likely to receive the same modifier types/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item, being much more likely to receive the same modifier types',
    regex: /Reforge a Rare item, being much more likely to receive the same modifier types/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map to gain 3 Alva Atlas Missions based on its colour',
    regex: /Sacrifice a Map to gain 3 Alva Atlas Missions based on its colour/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map to gain 3 Niko Atlas Missions based on its colour',
    regex: /Sacrifice a Map to gain 3 Niko Atlas Missions based on its colour/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map to gain 3 Einhar Atlas Missions based on its colour',
    regex: /Sacrifice a Map to gain 3 Einhar Atlas Missions based on its colour/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map to gain 3 Jun Atlas Missions based on its colour',
    regex: /Sacrifice a Map to gain 3 Jun Atlas Missions based on its colour/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map to gain 3 Zana Atlas Missions based on its colour',
    regex: /Sacrifice a Map to gain 3 Zana Atlas Missions based on its colour/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map to gain 1 Atlas Mission for each Master based on its colour',
    regex: /Sacrifice a Map to gain 1 Atlas Mission for each Master based on its colour/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Weapon or Armour to create a Belt with similar modifiers',
    regex: /Sacrifice a Weapon or Armour to create a Belt with similar modifiers/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Weapon or Armour to create a Ring with similar modifiers',
    regex: /Sacrifice a Weapon or Armour to create a Ring with similar modifiers/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Weapon or Armour to create an Amulet with similar modifiers',
    regex: /Sacrifice a Weapon or Armour to create an Amulet with similar modifiers/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Weapon or Armour to create a Jewel with similar modifiers',
    regex: /Sacrifice a Weapon or Armour to create a Jewel with similar modifiers/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a White or Yellow Map to create random Map Fragments based on its tier',
    regex: /Sacrifice a White or Yellow Map to create random Map Fragments based on its tier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a White or Yellow Map to create random Map Fragments based on its tier',
    regex: /Sacrifice a White or Yellow Map to create random Map Fragments based on its tier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Red Map to create random Map Fragments based on its tier',
    regex: /Sacrifice a Red Map to create random Map Fragments based on its tier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map to create random Map currency based on its tier',
    regex: /Sacrifice a Map to create random Map currency based on its tier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map to create a random Scarab based on its colour',
    regex: /Sacrifice a Map to create a random Scarab based on its colour/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Tier 14 Map or higher to create a random Elder Guardian-occupied Map',
    regex: /Sacrifice a Tier 14 Map or higher to create a random Elder Guardian-occupied Map/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Tier 14 Map or higher to create a random Shaper Guardian-occupied Map',
    regex: /Sacrifice a Tier 14 Map or higher to create a random Shaper Guardian-occupied Map/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Tier 14 Map or higher to create a random Unique Synthesis Map',
    regex: /Sacrifice a Tier 14 Map or higher to create a random Unique Synthesis Map/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant a Weapon. Quality does not increase its Physical Damage, has 1% increased Critical Strike Chance per 4% Quality',
    regex: /Enchant a Weapon\. Quality does not increase its Physical Damage, has 1% increased Critical Strike Chance per 4% Quality/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant a Weapon. Quality does not increase its Physical Damage, grants 1% increased Accuracy per 2% Quality',
    regex: /Enchant a Weapon\. Quality does not increase its Physical Damage, grants 1% increased Accuracy per 2% Quality/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant a Weapon. Quality does not increase its Physical Damage, has 1% increased Attack Speed per 8% Quality',
    regex: /Enchant a Weapon\. Quality does not increase its Physical Damage, has 1% increased Attack Speed per 8% Quality/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant a Melee Weapon. Quality does not increase its Physical Damage, has +1 Weapon Range per 10% Quality',
    regex: /Enchant a Melee Weapon\. Quality does not increase its Physical Damage, has +1 Weapon Range per 10% Quality/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant a Weapon. Quality does not increase its Physical Damage, grants 1% increased Elemental Damage per 2% Quality',
    regex: /Enchant a Weapon\. Quality does not increase its Physical Damage, grants 1% increased Elemental Damage per 2% Quality/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant a Weapon. Quality does not increase its Physical Damage, grants 1% increased Area of Effect per 4% Quality',
    regex: /Enchant a Weapon\. Quality does not increase its Physical Damage, grants 1% increased Area of Effect per 4% Quality/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Fracture a random modifier on an item with at least 5 modifiers, locking it in place. This can\'t be used on Influenced, Synthesised, or Fractured items',
    regex: /Fracture a random modifier on an item with at least 5 modifiers, locking it in place\. This can't be used on Influenced, Synthesised, or Fractured items/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Fracture a random Suffix on an item with at least 3 Suffixes. This can\'t be used on Influenced, Synthesised, or Fractured items',
    regex: /Fracture a random Suffix on an item with at least 3 Suffixes\. This can't be used on Influenced, Synthesised, or Fractured items/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Fracture a random Prefix on an item with at least 3 Prefixes. This can\'t be used on Influenced, Synthesised, or Fractured items',
    regex: /Fracture a random Prefix on an item with at least 3 Prefixes\. This can't be used on Influenced, Synthesised, or Fractured items/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Normal or Magic item as a Rare item with random modifiers, including an Attack modifier',
    regex: /Reforge a Normal or Magic item as a Rare item with random modifiers, including an Attack modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including an Attack modifier',
    regex: /Reforge a Rare item with new random modifiers, including an Attack modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random non-Attack modifier from an item and add a new Attack modifier',
    regex: /Remove a random non-Attack modifier from an item and add a new Attack modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Attack modifier',
    regex: /Augment an item with a new Attack modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Attack modifier from an item',
    regex: /Remove a random Attack modifier from an item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Randomise the numeric values of the random Attack modifiers on a Magic or Rare item',
    regex: /Randomise the numeric values of the random Attack modifiers on a Magic or Rare item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Attack modifier from an item and add a new Attack modifier',
    regex: /Remove a random Attack modifier from an item and add a new Attack modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including an Attack modifier. Attack modifiers are more common',
    regex: /Reforge a Rare item with new random modifiers, including an Attack modifier\. Attack modifiers are more common/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Attack modifier with Lucky values',
    regex: /Augment an item with a new Attack modifier with Lucky values/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Normal or Magic item as a Rare item with random modifiers, including a Life modifier',
    regex: /Reforge a Normal or Magic item as a Rare item with random modifiers, including a Life modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Life modifier',
    regex: /Reforge a Rare item with new random modifiers, including a Life modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Life modifier',
    regex: /Augment an item with a new Life modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Life modifier from an item',
    regex: /Remove a random Life modifier from an item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Randomise the numeric values of the random Life modifiers on a Magic or Rare item',
    regex: /Randomise the numeric values of the random Life modifiers on a Magic or Rare item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Life modifier from an item and add a new Life modifier',
    regex: /Remove a random Life modifier from an item and add a new Life modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Life modifier. Life modifiers are more common',
    regex: /Reforge a Rare item with new random modifiers, including a Life modifier\. Life modifiers are more common/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Life modifier with Lucky values',
    regex: /Augment an item with a new Life modifier with Lucky values/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Set an item to three sockets',
    regex: /Set an item to three sockets/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Set an item to four sockets',
    regex: /Set an item to four sockets/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Set an item to five sockets',
    regex: /Set an item to five sockets/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Set an item to six sockets',
    regex: /Set an item to six sockets/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Normal or Magic item as a Rare item with random modifiers, including a Cold modifier',
    regex: /Reforge a Normal or Magic item as a Rare item with random modifiers, including a Cold modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Cold modifier',
    regex: /Reforge a Rare item with new random modifiers, including a Cold modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random non-Cold modifier from an item and add a new Cold modifier',
    regex: /Remove a random non-Cold modifier from an item and add a new Cold modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Cold modifier',
    regex: /Augment an item with a new Cold modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Cold modifier from an item',
    regex: /Remove a random Cold modifier from an item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Randomise the numeric values of the random Cold modifiers on a Magic or Rare item',
    regex: /Randomise the numeric values of the random Cold modifiers on a Magic or Rare item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Cold modifier from an item and add a new Cold modifier',
    regex: /Remove a random Cold modifier from an item and add a new Cold modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Cold modifier. Cold modifiers are more common',
    regex: /Reforge a Rare item with new random modifiers, including a Cold modifier\. Cold modifiers are more common/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Cold modifier with Lucky values',
    regex: /Augment an item with a new Cold modifier with Lucky values/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Normal or Magic item as a Rare item with random modifiers, including a Speed modifier',
    regex: /Reforge a Normal or Magic item as a Rare item with random modifiers, including a Speed modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Speed modifier',
    regex: /Reforge a Rare item with new random modifiers, including a Speed modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random non-Speed modifier from an item and add a new Speed modifier',
    regex: /Remove a random non-Speed modifier from an item and add a new Speed modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Speed modifier',
    regex: /Augment an item with a new Speed modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Speed modifier from an item',
    regex: /Remove a random Speed modifier from an item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Randomise the numeric values of the random Speed modifiers on a Magic or Rare item',
    regex: /Randomise the numeric values of the random Speed modifiers on a Magic or Rare item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Speed modifier from an item and add a new Speed modifier',
    regex: /Remove a random Speed modifier from an item and add a new Speed modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Speed modifier. Speed modifiers are more common',
    regex: /Reforge a Rare item with new random modifiers, including a Speed modifier\. Speed modifiers are more common/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Speed modifier with Lucky values',
    regex: /Augment an item with a new Speed modifier with Lucky values/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Gem into another Gem, carrying over experience and quality if possible',
    regex: /Change a Gem into another Gem, carrying over experience and quality if possible/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Corrupted Gem to gain 20% of the gem\'s quality as Gemcutter\'s Prisms',
    regex: /Sacrifice a Corrupted Gem to gain 20% of the gem's quality as Gemcutter's Prisms/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Corrupted Gem to gain 30% of the gem\'s quality as Gemcutter\'s Prisms',
    regex: /Sacrifice a Corrupted Gem to gain 30% of the gem's quality as Gemcutter's Prisms/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Corrupted Gem to gain 40% of the gem\'s quality as Gemcutter\'s Prisms',
    regex: /Sacrifice a Corrupted Gem to gain 40% of the gem's quality as Gemcutter's Prisms/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Corrupted Gem to gain 50% of the gem\'s quality as Gemcutter\'s Prisms',
    regex: /Sacrifice a Corrupted Gem to gain 50% of the gem's quality as Gemcutter's Prisms/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Corrupted Gem to gain 20% of the gem\'s total experience stored as a Facetor\'s Lens',
    regex: /Sacrifice a Corrupted Gem to gain 20% of the gem's total experience stored as a Facetor's Lens/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Corrupted Gem to gain 30% of the gem\'s total experience stored as a Facetor\'s Lens',
    regex: /Sacrifice a Corrupted Gem to gain 30% of the gem's total experience stored as a Facetor's Lens/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Corrupted Gem to gain 40% of the gem\'s total experience stored as a Facetor\'s Lens',
    regex: /Sacrifice a Corrupted Gem to gain 40% of the gem's total experience stored as a Facetor's Lens/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Corrupted Gem to gain 50% of the gem\'s total experience stored as a Facetor\'s Lens',
    regex: /Sacrifice a Corrupted Gem to gain 50% of the gem's total experience stored as a Facetor's Lens/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Attempt to Awaken a level 20 Support Gem that can be Awakened with a 5% chance. If it does not Awaken, it is destroyed',
    regex: /Attempt to Awaken a level 20 Support Gem that can be Awakened with a 5% chance\. If it does not Awaken, it is destroyed/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Map into another of the same tier, prioritising Maps that you have not yet completed',
    regex: /Change a Map into another of the same tier, prioritising Maps that you have not yet completed/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Map for multiple Maps one tier lower',
    regex: /Sacrifice a Map for multiple Maps one tier lower/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a Corrupted Map. Create a new Corrupted Map of the same tier and rarity',
    regex: /Sacrifice a Corrupted Map\. Create a new Corrupted Map of the same tier and rarity/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Set a new Implicit modifier on a Cobalt, Crimson, Viridian or Prismatic Jewel',
    regex: /Set a new Implicit modifier on a Cobalt, Crimson, Viridian or Prismatic Jewel/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Set a new Implicit modifier on an Abyss Jewel or Timeless Jewel',
    regex: /Set a new Implicit modifier on an Abyss Jewel or Timeless Jewel/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Set a new Implicit modifier on a Cluster Jewel',
    regex: /Set a new Implicit modifier on a Cluster Jewel/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant a Flask with a modifier that grants increased Duration. The magnitude of this effect decreases with each use',
    regex: /Enchant a Flask with a modifier that grants increased Duration\. The magnitude of this effect decreases with each use/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant a Flask with a modifier that grants increased Effect. The magnitude of this effect decreases with each use',
    regex: /Enchant a Flask with a modifier that grants increased Effect\. The magnitude of this effect decreases with each use/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant a Flask with a modifier that grants increased Maximum Charges. The magnitude of this effect decreases with each use',
    regex: /Enchant a Flask with a modifier that grants increased Maximum Charges\. The magnitude of this effect decreases with each use/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant a Flask with a modifier that grants reduced Charges used. The magnitude of this effect decreases with each use',
    regex: /Enchant a Flask with a modifier that grants reduced Charges used\. The magnitude of this effect decreases with each use/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant a non-Unique Map with "Has an additional modifier from Zana\'s crafting bench at random"',
    regex: /Enchant a non-Unique Map with "Has an additional modifier from Zana's crafting bench at random"/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant a non-Unique Map with "Map doesn\'t consume Sextant charges"',
    regex: /Enchant a non-Unique Map with "Map doesn't consume Sextant charges"/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant a non-Unique Map with "Map has a Vaal Side Area"',
    regex: /Enchant a non-Unique Map with "Map has a Vaal Side Area"/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant a non-Unique Map with "Map boss is surrounded by Tormented Spirits"',
    regex: /Enchant a non-Unique Map with "Map boss is surrounded by Tormented Spirits"/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 10 Chaos Orbs for an Exalted Orb',
    regex: /Exchange 10 Chaos Orbs for an Exalted Orb/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 10 Orbs of Transmutation for 10 Orbs of Alchemy',
    regex: /Exchange 10 Orbs of Transmutation for 10 Orbs of Alchemy/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 10 Blessed Orbs for 20 Orbs of Alteration',
    regex: /Exchange 10 Blessed Orbs for 20 Orbs of Alteration/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 10 Orbs of Alchemy for 20 Cartographer\'s Chisels',
    regex: /Exchange 10 Orbs of Alchemy for 20 Cartographer's Chisels/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 10 Chromatic Orbs for 20 Gemcutter\'s Prisms',
    regex: /Exchange 10 Chromatic Orbs for 20 Gemcutter's Prisms/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 10 Jeweller\'s Orbs for 20 Orbs of Fusing',
    regex: /Exchange 10 Jeweller's Orbs for 20 Orbs of Fusing/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 10 Orbs of Augmentation for 10 Regal Orbs',
    regex: /Exchange 10 Orbs of Augmentation for 10 Regal Orbs/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 10 Scrolls of Wisdom for 20 Orbs of Chance',
    regex: /Exchange 10 Scrolls of Wisdom for 20 Orbs of Chance/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 10 Simple Sextants for 10 Prime Sextants',
    regex: /Exchange 10 Simple Sextants for 10 Prime Sextants/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 10 Prime Sextants for 10 Awakened Sextants',
    regex: /Exchange 10 Prime Sextants for 10 Awakened Sextants/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 10 Orbs of Scouring for 10 Orbs of Annulment',
    regex: /Exchange 10 Orbs of Scouring for 10 Orbs of Annulment/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 10 Orbs of Alteration for 10 Chaos Orbs',
    regex: /Exchange 10 Orbs of Alteration for 10 Chaos Orbs/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 10 Vaal Orbs for 20 Orbs of Regret',
    regex: /Exchange 10 Vaal Orbs for 20 Orbs of Regret/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange 10 Cartographer\'s Chisels for 10 Vaal Orbs',
    regex: /Exchange 10 Cartographer's Chisels for 10 Vaal Orbs/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Upgrade the tier of an Essence',
    regex: /Upgrade the tier of an Essence/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Exchange a Resonator for a Fossil or vice versa. Rare outcomes are more likely with rare inputs',
    regex: /Exchange a Resonator for a Fossil or vice versa\. Rare outcomes are more likely with rare inputs/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Upgrade an Oil into an Oil one tier higher',
    regex: /Upgrade an Oil into an Oil one tier higher/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Upgrade an Engineer\'s Orb to an Infused Engineer\'s Orb',
    regex: /Upgrade an Engineer's Orb to an Infused Engineer's Orb/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Scarab to another Scarab of the same rarity',
    regex: /Change a Scarab to another Scarab of the same rarity/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Attempt to upgrade a Scarab, with a chance for it to become Winged',
    regex: /Attempt to upgrade a Scarab, with a chance for it to become Winged/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Split a Scarab into two Scarabs of lower rarity',
    regex: /Split a Scarab into two Scarabs of lower rarity/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change an Offering to the Goddess into a Tribute to the Goddess',
    regex: /Change an Offering to the Goddess into a Tribute to the Goddess/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change an Offering to the Goddess into a Gift to the Goddess',
    regex: /Change an Offering to the Goddess into a Gift to the Goddess/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change an Offering to the Goddess into a Dedication to the Goddess',
    regex: /Change an Offering to the Goddess into a Dedication to the Goddess/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Synthesise an item, giving random Synthesised implicits. Cannot be used on Unique, Influenced, Synthesised or Fractured items',
    regex: /Synthesise an item, giving random Synthesised implicits\. Cannot be used on Unique, Influenced, Synthesised or Fractured items/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Normal or Magic item as a Rare item with random modifiers, including a Defence modifier',
    regex: /Reforge a Normal or Magic item as a Rare item with random modifiers, including a Defence modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Defence modifier',
    regex: /Reforge a Rare item with new random modifiers, including a Defence modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random non-Defence modifier from an item and add a new Defence modifier',
    regex: /Remove a random non-Defence modifier from an item and add a new Defence modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Defence modifier',
    regex: /Augment an item with a new Defence modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Defence modifier from an item',
    regex: /Remove a random Defence modifier from an item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Randomise the numeric values of the random Defence modifiers on a Magic or Rare item',
    regex: /Randomise the numeric values of the random Defence modifiers on a Magic or Rare item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Defence modifier from an item and add a new Defence modifier',
    regex: /Remove a random Defence modifier from an item and add a new Defence modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Defence modifier. Defence modifiers are more common',
    regex: /Reforge a Rare item with new random modifiers, including a Defence modifier\. Defence modifiers are more common/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Defence modifier with Lucky values',
    regex: /Augment an item with a new Defence modifier with Lucky values/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Normal or Magic item as a Rare item with random modifiers, including a Lightning modifier',
    regex: /Reforge a Normal or Magic item as a Rare item with random modifiers, including a Lightning modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Lightning modifier',
    regex: /Reforge a Rare item with new random modifiers, including a Lightning modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random non-Lightning modifier from an item and add a new Lightning modifier',
    regex: /Remove a random non-Lightning modifier from an item and add a new Lightning modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Lightning modifier',
    regex: /Augment an item with a new Lightning modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Lightning modifier from an item',
    regex: /Remove a random Lightning modifier from an item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Randomise the numeric values of the random Lightning modifiers on a Magic or Rare item',
    regex: /Randomise the numeric values of the random Lightning modifiers on a Magic or Rare item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Lightning modifier from an item and add a new Lightning modifier',
    regex: /Remove a random Lightning modifier from an item and add a new Lightning modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Lightning modifier. Lightning modifiers are more common',
    regex: /Reforge a Rare item with new random modifiers, including a Lightning modifier\. Lightning modifiers are more common/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Lightning modifier with Lucky values',
    regex: /Augment an item with a new Lightning modifier with Lucky values/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge the links between sockets on an item, linking three sockets',
    regex: /Reforge the links between sockets on an item, linking three sockets/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge the links between sockets on an item, linking four sockets',
    regex: /Reforge the links between sockets on an item, linking four sockets/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge the links between sockets on an item, linking five sockets',
    regex: /Reforge the links between sockets on an item, linking five sockets/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge the links between sockets on an item, linking six sockets',
    regex: /Reforge the links between sockets on an item, linking six sockets/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Normal or Magic item as a Rare item with random modifiers, including a Chaos modifier',
    regex: /Reforge a Normal or Magic item as a Rare item with random modifiers, including a Chaos modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Chaos modifier',
    regex: /Reforge a Rare item with new random modifiers, including a Chaos modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random non-Chaos modifier from an item and add a new Chaos modifier',
    regex: /Remove a random non-Chaos modifier from an item and add a new Chaos modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Chaos modifier',
    regex: /Augment an item with a new Chaos modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Chaos modifier from an item',
    regex: /Remove a random Chaos modifier from an item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Randomise the numeric values of the random Chaos modifiers on a Magic or Rare item',
    regex: /Randomise the numeric values of the random Chaos modifiers on a Magic or Rare item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Chaos modifier from an item and add a new Chaos modifier',
    regex: /Remove a random Chaos modifier from an item and add a new Chaos modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Chaos modifier. Chaos modifiers are more common',
    regex: /Reforge a Rare item with new random modifiers, including a Chaos modifier\. Chaos modifiers are more common/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Chaos modifier with Lucky values',
    regex: /Augment an item with a new Chaos modifier with Lucky values/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Unique item into another random Unique item',
    regex: /Change a Unique item into another random Unique item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Unique into a random Unique Weapon',
    regex: /Change a Unique into a random Unique Weapon/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Unique into a random Unique Armour',
    regex: /Change a Unique into a random Unique Armour/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Unique into a random Unique Ring, Amulet or Belt',
    regex: /Change a Unique into a random Unique Ring, Amulet or Belt/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Unique Weapon into another Unique Weapon of that weapon type',
    regex: /Change a Unique Weapon into another Unique Weapon of that weapon type/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Unique Armour into another Unique Armour of that type',
    regex: /Change a Unique Armour into another Unique Armour of that type/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Unique Ring, Amulet or Belt into another Unique item of that type',
    regex: /Change a Unique Ring, Amulet or Belt into another Unique item of that type/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Unique Jewel into another Unique Jewel',
    regex: /Change a Unique Jewel into another Unique Jewel/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Divination Card into another random Divination Card',
    regex: /Change a Divination Card into another random Divination Card/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice up to half a stack of Divination Cards to receive between 0 and twice that amount of the same Card',
    regex: /Sacrifice up to half a stack of Divination Cards to receive between 0 and twice that amount of the same Card/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Sacrifice a stack of Divination Cards for that many different Divination Cards',
    regex: /Sacrifice a stack of Divination Cards for that many different Divination Cards/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Sacrifice or Mortal Fragment into another random Fragment of that type',
    regex: /Change a Sacrifice or Mortal Fragment into another random Fragment of that type/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Shaper Fragment into another random Shaper Fragment',
    regex: /Change a Shaper Fragment into another random Shaper Fragment/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change an Elder Fragment into another random Elder Fragment of that type',
    regex: /Change an Elder Fragment into another random Elder Fragment of that type/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Normal or Magic item as a Rare item with random modifiers, including a Critical modifier',
    regex: /Reforge a Normal or Magic item as a Rare item with random modifiers, including a Critical modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Critical modifier',
    regex: /Reforge a Rare item with new random modifiers, including a Critical modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random non-Critical modifier from an item and add a new Critical modifier',
    regex: /Remove a random non-Critical modifier from an item and add a new Critical modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Critical modifier',
    regex: /Augment an item with a new Critical modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Critical modifier from an item',
    regex: /Remove a random Critical modifier from an item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Randomise the numeric values of the random Critical modifiers on a Magic or Rare item',
    regex: /Randomise the numeric values of the random Critical modifiers on a Magic or Rare item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Critical modifier from an item and add a new Critical modifier',
    regex: /Remove a random Critical modifier from an item and add a new Critical modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including a Critical modifier. Critical modifiers are more common',
    regex: /Reforge a Rare item with new random modifiers, including a Critical modifier\. Critical modifiers are more common/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Critical modifier with lucky values',
    regex: /Augment an item with a new Critical modifier with lucky values/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Upgrade a Magic item to a Rare item, adding two random modifiers',
    regex: /Upgrade a Magic item to a Rare item, adding two random modifiers/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Upgrade a Magic item to a Rare item, adding three random modifiers',
    regex: /Upgrade a Magic item to a Rare item, adding three random modifiers/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Upgrade a Magic item to a Rare item, adding four random modifiers',
    regex: /Upgrade a Magic item to a Rare item, adding four random modifiers/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Upgrade a Normal item to a Magic item, adding one random high-tier modifier',
    regex: /Upgrade a Normal item to a Magic item, adding one random high-tier modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Upgrade a Normal item to a Magic item, adding two random high-tier modifiers',
    regex: /Upgrade a Normal item to a Magic item, adding two random high-tier modifiers/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Upgrade a Magic item to a Rare item, adding two random high-tier modifiers',
    regex: /Upgrade a Magic item to a Rare item, adding two random high-tier modifiers/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Upgrade a Magic item to a Rare item, adding three random high-tier modifiers',
    regex: /Upgrade a Magic item to a Rare item, adding three random high-tier modifiers/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Upgrade a Magic item to a Rare item, adding four random high-tier modifiers',
    regex: /Upgrade a Magic item to a Rare item, adding four random high-tier modifiers/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with Lucky modifier values, keeping all Prefixes',
    regex: /Reforge a Rare item with Lucky modifier values, keeping all Prefixes/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with Lucky modifier values, keeping all Suffixes',
    regex: /Reforge a Rare item with Lucky modifier values, keeping all Suffixes/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reroll the values of Prefix, Suffix and Implicit modifiers on a Rare item, with Lucky modifier values',
    regex: /Reroll the values of Prefix, Suffix and Implicit modifiers on a Rare item, with Lucky modifier values/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment a Rare item with a new modifier, with Lucky modifier values',
    regex: /Augment a Rare item with a new modifier, with Lucky modifier values/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reroll the values of Prefix modifiers on a Magic or Rare item, with Lucky modifier values',
    regex: /Reroll the values of Prefix modifiers on a Magic or Rare item, with Lucky modifier values/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reroll the values of Suffix modifiers on a Magic or Rare item, with Lucky modifier values',
    regex: /Reroll the values of Suffix modifiers on a Magic or Rare item, with Lucky modifier values/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Pale Court Key into another random Pale Court Key',
    regex: /Change a Pale Court Key into another random Pale Court Key/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a stack of Breach Splinters or a Breachstone into Splinters or a Breachstone of another type',
    regex: /Change a stack of Breach Splinters or a Breachstone into Splinters or a Breachstone of another type/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a stack of Timeless Splinters or a Timeless Emblem into Splinters or an Emblem of another type',
    regex: /Change a stack of Timeless Splinters or a Timeless Emblem into Splinters or an Emblem of another type/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Unique Item into Perandus Coins. Rarer Unique Items are worth more Perandus Coins',
    regex: /Change a Unique Item into Perandus Coins\. Rarer Unique Items are worth more Perandus Coins/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Unique Bestiary item or item with an Aspect into Lures of the same beast family',
    regex: /Change a Unique Bestiary item or item with an Aspect into Lures of the same beast family/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Change a Harbinger Unique or Unique Piece into a random Beachhead Map',
    regex: /Change a Harbinger Unique or Unique Piece into a random Beachhead Map/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Add a random Influence to a Normal, Magic or Rare Weapon that isn\'t influenced',
    regex: /Add a random Influence to a Normal, Magic or Rare Weapon that isn't influenced/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Add a random Influence to Normal, Magic or Rare Armour that isn\'t influenced',
    regex: /Add a random Influence to Normal, Magic or Rare Armour that isn't influenced/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Add a random Influence to Normal, Magic or Rare Jewellery that isn\'t influenced',
    regex: /Add a random Influence to Normal, Magic or Rare Jewellery that isn't influenced/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant Body Armour. Quality does not increase its Defences, grants +1 Maximum Life per 2% quality',
    regex: /Enchant Body Armour\. Quality does not increase its Defences, grants +1 Maximum Life per 2% quality/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant Body Armour. Quality does not increase its Defences, grants +1 Maximum Mana per 2% quality',
    regex: /Enchant Body Armour\. Quality does not increase its Defences, grants +1 Maximum Mana per 2% quality/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant Body Armour. Quality does not increase its Defences, grants +1 Strength per 2% quality',
    regex: /Enchant Body Armour\. Quality does not increase its Defences, grants +1 Strength per 2% quality/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant Body Armour. Quality does not increase its Defences, grants +1 Dexterity per 2% quality',
    regex: /Enchant Body Armour\. Quality does not increase its Defences, grants +1 Dexterity per 2% quality/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant Body Armour. Quality does not increase its Defences, grants +1 Intelligence per 2% quality',
    regex: /Enchant Body Armour\. Quality does not increase its Defences, grants +1 Intelligence per 2% quality/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant Body Armour. Quality does not increase its Defences, grants 1% Fire Resistance per 2% quality',
    regex: /Enchant Body Armour\. Quality does not increase its Defences, grants 1% Fire Resistance per 2% quality/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant Body Armour. Quality does not increase its Defences, grants 1% Cold Resistance per 2% quality',
    regex: /Enchant Body Armour\. Quality does not increase its Defences, grants 1% Cold Resistance per 2% quality/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Enchant Body Armour. Quality does not increase its Defences, grants 1% Lightning Resistance per 2% quality',
    regex: /Enchant Body Armour\. Quality does not increase its Defences, grants 1% Lightning Resistance per 2% quality/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random non-Influence modifier from an item and add a new Influence modifier',
    regex: /Remove a random non-Influence modifier from an item and add a new Influence modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Influence modifier',
    regex: /Augment an item with a new Influence modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Influence modifier from an item',
    regex: /Remove a random Influence modifier from an item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Randomise the numeric values of the random Influence modifiers on a Magic or Rare item',
    regex: /Randomise the numeric values of the random Influence modifiers on a Magic or Rare item/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Remove a random Influence modifier from an item and add a new Influence modifier',
    regex: /Remove a random Influence modifier from an item and add a new Influence modifier/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Reforge a Rare item with new random modifiers, including an Influence modifier. Influence modifiers are more common',
    regex: /Reforge a Rare item with new random modifiers, including an Influence modifier\. Influence modifiers are more common/,
    type: ModFilterType.HARVEST_SEED,
  },
  {
    label: 'Augment an item with a new Influence modifier with Lucky values',
    regex: /Augment an item with a new Influence modifier with Lucky values/,
    type: ModFilterType.HARVEST_SEED,
  },
];
