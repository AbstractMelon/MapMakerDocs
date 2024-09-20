# Raycast Functions

Global functions that are used to get/shoot an object/ray from the map based on id/position etc..

## Raycast Functions

### Raycast Rounded Rect
Shoots a ray from a given point, returns the Rounded Rect (a platform) it hit and the distance it traveled,
if doesn't hit, returns a big negative number.

~ angle: 0 = right, 90 = up, 180 = left, 270 = right

```
number, Platform RaycastRoundedRect(number x, number y, number angle, number maxDistance)
```

```lua
_, plat = RaycastRoundedRect(0, 0, 90, 1)
plat.GetBoplBody().Destroy()
```

## General Sequence Functions

### Get All Players
Returns a number: count, and an array of players.

```
number, Player[] GetAllPlayers()
```

Example:
```lua
count, players = GetAllPlayers()
i = 1
while (i <= count) do
    player = players[i]
    player.SetAbility(1, "Dash")
    player.SetAbility(2, "Dash")
    player.SetAbility(3, "Dash")
    i = i + 1
end
```

### Get All Platforms
Returns count and an array of platforms.

```
number, Platforms[] GetAllPlatforms()
```

Example:
```lua
_, platforms = GetAllPlatforms()
s1, s2 = platforms[0], platforms[1]
```

### Get All Bopl Bodys (yes, ik its meant to say bodies)
Returns count and an array of bopl bodies. (most objects on the scene)

```
number, BoplBody[] GetAllBoplBodys()
```

Example:
```lua
c, bodies = GetAllBoplBodys()
i = 1
while (i <= c) do
    body = bodies[i]
    if (body.GetObjectType() == "AbilityPickup") then
        body.Destroy()
    i = i + 1
end
```