/**
 * Test item data
 *
 * name               pDPS,   eDPS,   cDPS,   DPS,    quality
 * ==========================================================
 * Windripper          95.94  148.42    0     244.36      20
 * Torment Gutter      86.52  253.40    0     339.92       0
 * Chin Sol           263.30   51.75    0     315.05       0
 * Dusk Razor          87.36    9.60    0      96.96       0
 * Hegemony's Era     525.00    0       0     525.00      20
 * Honed Vaal Axe     176.40    0       0     176.40       0
 * Demon Dagger        87.12    0       0      87.12       5
 * Malicious Harb      90.72    0      96.6   187.32       0
 * Edge of Madness     97.44    0      94.8   192.24      20
 * Wrath Razor         99.60    0     107.4   207.00      20
 *
 * Revert to base dps (for items with quality > 0 and < 20)
 * round(min / 1.<quality>) + round(max / 1.<quality>)
 */

test('should return items with a DPS value above a minimum value', () => {});
test('should return items with a DPS value below a maximum value', () => {});
test('should return items with a DPS value between a minimum and maximum value', () => {});

test('should return items with a physical DPS value above a minimum value', () => {});
test('should return items with a physical DPS value below a maximum value', () => {});
test('should return items with a physical DPS value between a minimum and maximum value', () => {});

test('should return items with an elemental DPS value above a minimum value', () => {});
test('should return items with an elemental DPS value below a maximum value', () => {});
test('should return items with an elemental DPS value between a minimum and maximum value', () => {

});

test('should return items with a chaos DPS value above a minimum value', () => {});
test('should return items with a chaos DPS value below a maximum value', () => {});
test('should return items with a chaos DPS value between a minimum and maximum value', () => {});

test('should handle multiple DPS value searches', () => {});
test('should set quality to 20% when checking physical dps', () => {});
