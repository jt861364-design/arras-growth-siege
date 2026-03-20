import type { GamemodeConfig } from "./base.js";

const growthSiege: GamemodeConfig = {
  id: "growth_siege",
  name: "Growth Siege",
  description:
    "Two teams. Tanks grow stronger by scoring kills. Destroy the enemy Mothership to win.",

  PLAYER_LIMIT: 50,
  MAP_SIZE: 1.5,

  LEVEL_CAP: 600,
  STARTING_LEVEL: 1,

  TEAMS: 2,
  MOTHERSHIP: true,
  MOTHERSHIP_HP: 7000,
  SIEGE_RESPAWN: true,

  ARENA_CLOSING: false,
  ARENA_CLOSE_MINUTES: 0,

  POLYGON_RATIO: 0.8,
  OBSTACLES: false,

  GROW_RATE: 1.5,
  SCORE_MULTIPLIER: 1.2,
  UPGRADE_COST_MULTIPLIER: 0.9,

  RANDOM_ANGLES: false,
  SPAWN_PROTECTION_SECONDS: 3,

  CUSTOM: {
    KILL_SCORE_BONUS: 2.0,
    MOTHERSHIP_REGEN_PER_SECOND: 0,
    MOTHERSHIP_DAMAGE_MULTIPLIER: 1.0,
 // 🔥 NEW FEATURES
ROGUE_SQUAD: true,
ROGUE_COUNT: 4,
HEALER_ROGUE_COUNT: 2,

DREADNOUGHT_ENABLED: true,
DREAD_LEVEL: 150,
DREAD_DISABLE_GROWTH: true,   
    FORCE_TANK_CLASS: null,
    ALLOW_LEVEL_SHARING: false,
  },
};

export default growthSiege;
