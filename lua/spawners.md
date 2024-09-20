# Spawn functions

Spawn functions deal with anything related to making something appear: from a simple explosion, to an entire platform.

## Explosions:

### Spawn Explosion
Spawns an explosion with a given position + scale.

```
SpawnExplosion(number x, number y, number scale)
```

Example:
```lua
SpawnExplosion(-10, 10, 10) -- Spawns a giant explosion at (-10, 10)
```

## Projectiles:

### Spawn Arrow
Spawns an arrow with a given position, scale, velocity, and color.

```
SpawnArrow(number x, number y, number scale, number xVel, number yVel, number R, number G, number B, number A)
```

Example:
```lua
SpawnArrow(0, 10, 1, 0, -1, 0, 0, 0, 0) -- Spawns a normal size black arrow at (0, 10) with initial velocity (0, -1)
```

### Spawn Grenade
Spawns a grenade with a given position, scale, velocity, and angular velocity.

```
SpawnGrenade(number x, number y, number scale, number xVel, number yVel, number angularVel)
```

Example:
```lua
SpawnGrenade(11, 13, 0.5, 0, -3, 0) -- Spawns a small grenade at (11, 13) with downward velocity and 0 angular verlocity
```

### Spawn Smoke Grenade
Spawns a smoke grenade with a given position, scale, velocity, and angular velocity.

```
SpawnSmokeGrenade(number x, number y, number scale, number xVel, number yVel, number angularVel)
```

Example:
```lua
SpawnSmokeGrenade(0, 10, 1, 0, -3, 1) -- Spawns a smoke grenade at (0, 10) with downward velocity and 1 angular verlocity
```

## Bopl Bodies:

### Spawn Boulder
Spawns a boulder with a given position, scale, velocity, angular velocity, type, and color.

```
SpawnBoulder(number x, number y, number scale, number xVel, number yVel, number angularVel, string type, number R, number G, number B, number A)
```

Example:
```lua
SpawnBoulder(0, 0, 1, 0, 0, 3, "slime", 1, 1, 1, 1) -- Spawns a white boulder at (0, 0) with angular velocity 3
```

### Spawn Platform
Spawns a slime platform (like the platform ability) with a given position, width, height, radius, rotation, and color.

```
SpawnPlatform(number x, number y, number width, number height, number radius, number rotation, number R, number G, number B, number A)
```

Example:
```lua
SpawnPlatform(0, 0, 10, 5, 1, 0, 1, 0, 1, 1) -- Spawns a purple rectangular slime platform at (0, 0) with width 10 and height 5
```