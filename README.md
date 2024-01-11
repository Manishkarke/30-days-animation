# 30 days of web Animations
Hello there, fellas. <br />
My name is Manish Karki. I am now working as a frontend developer. I like it when a website isn't static, and I'd like to make my websites interactive as well. So I began my journey to master online animation. During this journey, I plan to learn about web animations using just CSS or a javascript library like GSAP.

## Day 1: 2d animation with transition
Today is the first day and I will be doing some 2d animation with the help of transition property of CSS. transition property allow us to create simple animations between two states. for example if we wanna move a box from one place to another we can do that with transition property.
**Syntax**:
```CSS
transition: transition-element | transition-duration | transition-timing-function | transition-delay;
```
> **Transition-element** : our targeted transition element. all | tags | classes
> 
> **transition-duration** : how long the animation gonna last. value are time values.
>
> **transition-timing-function** : how our transition gonna be executed. speed/acceleration of the transition. Values are linear , ease-in, ease-out, ease-in-out and curbic-bezier-function.
>
> **transition-delay** : time after which the transition will be started. value are time values.

----------
----------

## DAY 4 : Learning CSS GRADIENTS
> Today I learned about CSS Gradients. CSS gradients are those values function which allow us to use more than one color as a background. We give css gradients value as a value to background-image property. There are 6 types of gradients. 
> - linear-gradient() : The linear-gradient() CSS function creates an image consisting of a progressive transition between two or more colors along a straight line. <br />
    ```CSS 
    background-image: linear-gradient(direction, color-1 | color-stop, color-2 | color-stop, .....)
    ``` <br />
>
> here direction is the direction of the transition between two or more colors. value are given in angle or to top |      center | bottom  left | center | right <br/>
> color-n means nth color in our transition <br/
>
> color-stop is the distance from which the color start transitioning.
>
> - radial-gradient() : The radial-gradient() css function creates an image consisting of progressive transition between two or more colors that radiate from an origin.<br />
```CSS
background-image: radial-gradient(radial-shape radial-size at position, color-stop-list)
```
> <br /> here radial-shape is the shape of our gradient which is either circle or ellipse. <br />
> here radial-size is the size of our radial-gradient which value is farthest-corner | closest-side | farthest-side | closest-corner <br />
> here position is the position of the center of our radial-gradient <br />
> here color-stop list means list of color for transition and stop for each color which defines where the transition begins <br />
>
> - conic-gradient() : The conic-gradient() css function creates an image consisting of progressive transition between two or more colors that rotate around a center point. <br />
```CSS
background-image: conic-gradient([from angle] [at position], color degree, color degree)
```
> <br />Here from angle means from which angle our transition begin. <br />
> here at position means the position of the center point of our transition <br />
> here color degree means the degree from which the transition begins. <br />