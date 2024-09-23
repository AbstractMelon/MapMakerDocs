# Map Making 101

Here you will learn how to make bopl battle maps just like those you see in the official game!

## The Sidebar

The sidebar is the inventory of the map maker, here are everything you need to build maps. 
It has platforms of every type! (switch types using the buttons on the left)

### Creating Platforms

<video autoplay loop muted playsinline>
  <source src="./gifs/create.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

To create a platform, just drag your platform of choice onto the world and voila!

::: tip
Alternatively, you can hold `ctrl` and drag a platform to clone it into the world
:::

### Removing Platforms

Okay lets say you created a platform which you don't want anymore, there are two simple ways to remove it completely:

* drag it back into the sidebar

* click it, and press `del`

## Platform Handling

### Moving Platforms

<video autoplay loop muted playsinline>
  <source src="./gifs/drag.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

To move your platform, just drag it and plop it wherever you want it to be. That's it!

If you want to you can also just modify the platform's position from the Inspector (more on that later)

## The Marker

Hover over your platform with the mouse, see that box in the middle? that's the marker.

If it's white that means you are in **scaling mode**,
if it's black, you are in **rotating mode**.

Switching between the two is easy, just perss `s` to enter scaling mode and `r` to enter rotating mode.

### Scaling Platforms

<video autoplay loop muted playsinline>
  <source src="./gifs/scale.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

To scale a platform, just hover it and drag the marker to resize.
* Dragging it upwards = increase scale
* Dragging it downwards = decrease scale

::: tip
If you want to scale the platform not arbitrarily, just hold down `shift` while scaling and the scale will increase/decrease by multiples of 0.1
:::

### Rotating Platforms

<video autoplay loop muted playsinline>
  <source src="./gifs/rotate.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

To rotate a platform, just hover it and drag the marker around, the platform will face your cursor as long as the marker is visible.

::: tip
If you want to rotate the platform not arbitrarily, just hold down `shift` while rotating and the rotation will inch by 15 angle multiples while rotating.
:::