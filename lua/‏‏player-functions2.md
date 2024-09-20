# Player Functions

These are the functions related to the `Player` type.

## Base Properties

### Position
The current position of the player
```
Player.GetPosition() -- reutrns a Vec2
```

```
Player.SetPosition(number x, number y)
```

### Mass
The mass of the player
```
Player.GetMass()
```

```
Player.SetMass(number mass)
```

## Speed Related Properties

### Speed
The current speed of the player
```
Player.GetSpeed()
```

```
Player.SetSpeed(number speed)
```

### Grounded Speed
The speed of the player when standing on a platform
```
Player.GetGroundedSpeed()
```

```
Player.SetGroundedSpeed(number speed)
```

### Max Speed
The maximum speed of the player
```
Player.GetMaxSpeed()
```

```
Player.SetMaxSpeed(number maxSpeed)
```

## Acceleration Related Properties

### Acceleration
The acceleration speed of the player
```
Player.GetAccel()
```

```
Player.SetAccel(number accel)
```

### Air Accel
The aerial acceleration speed of the player
```
Player.GetAirAccel()
```

```
Player.SetAirAccel(number airAccel)
```

### Gravity Accel
The gravity affecting the player
```
Player.GetGravityAccel()
```

```
Player.SetGravityAccel(number gravity)
```

### Terminal Velocity
The max speed the player can fall
```
Player.GetGravityMaxFallSpeed()
```

```
Player.SetGravityMaxFallSpeed(number maxFallSpeed)
```

## Jump Related Properties

### Jump Strength
The jump strength of the player
```
Player.GetJumpStrength()
```

```
Player.SetJumpStrength(number jumpStrength)
```

### Jump Extra X Strength
???????? i dont fucking know
```
Player.GetJumpExtraXStrength()
```

```
Player.SetJumpExtraXStrength(number jumpExtraStrength)
```

### Jump kept Momentum
???????? i dont fucking know #2
```
Player.GetJumpKeptMomentum()
```

```
Player.SetJumpKeptMomentum(number jumpKeptMumentum)
```

## Functions

### Get Platform
Gets the platform the player is on, if airborne returns nil.

```
Player.GetPlatform()
```

Example:
```lua
currentPlatform = player.GetPlatform()
```

### Add Force
Launches the player with a given x and y strength

```
Player.AddForce(number x, number y)
```

Example:
```lua
player1.AddForce(0, 10) -- launches the player upwards
```

### Is Disappeared
returns true if the player is currently blinked.

```
Player.IsDisappeared()
```

Example:
```lua
if (player2.IsDissapeared()) then
    print("Bye Player 2")
end
```

## Ability Related Functions

### Get Ability
Returns the ability at `index` of the player as string
index: 1 - left, 2 - up, 3 - right

```
Player.GetAbility(number index)
```

Example:
```lua
ability = player1.GetAbility(2) -- gets the center ability
```

### Set Ability
Sets the ability at `index` of the player to given ability
index: 1 - left, 2 - up, 3 - right
~ if theres less than 3 abilities it just adds one

valid ability names:
[Roll, Dash, Grenade, Bow, Engine, Blink, Gust, Grow, Rock, Missile, Spike, TimeStop, SmokeGrenade, Platform, Revive, Shrink, BlackHole, Invisibility, Meteor, Macho, Push, Tesla, Mine, Teleport, Drill, Grapple, Beam, Duplicator]

```
Player.SetAbility(number index, string ability, bool playPickupSound)
```

Example:
```lua
player3.SetAbility(1, "Grenade", false)
player3.SetAbility(2, "Grenade", false)
player3.SetAbility(3, "Grenade", false)
```

### Get Ability Count
Gets the # of abilities a player has currently

```
Player.GetAbilityCount()
```

Example:
```lua
count = player.GetAbilityCount()
```

### Get Ability Cooldown Remaining
Gets the remaining cooldown of the ability in seconds

```
Player.GetAbilityCooldownRemaining(numbert index)
```

Example:
```lua
wait = player4.GetAbilityCooldownRemaining(1)
```

### Set Ability Cooldown Remaining
Sets the remaining cooldown of the ability in seconds

```
Player.SetAbilityCooldownRemaining(numbert index, number newRemainingCooldown)
```

Example:
```lua
player4.SetAbilityCooldownRemaining(1, 0)
```

### Get Ability Max Cooldown
Gets the cooldown time of an ability
~ returns 1,000,000 if no ability in the slot

```
Player.GetAbilityMaxCooldown(numbert index)
```

Example:
```lua
maxCool = player1.GetAbilityMaxCooldown(2)
```