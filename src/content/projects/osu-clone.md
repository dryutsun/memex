---
draft: false
date: 2023-05-10
gh_url: https://github.com/dryutsun/OSU-CLONE
deploy_url: https://dryutsun.github.io/SEI-Project-OSU-Clone/
thumbnail: /projects/osu_clone.gif
project_name: Osu Clone
description: A click training program in Canvas.
stack:
    - Vanilla JS
    - Canvas
tags:
    - Games
    - Testing
---

## SITUATION
In October 2021, a week after my bootcamp began, I was tasked with writing an interactive game utilizing Javascript
and the Canvas API.

## INFORMATION
- At this point, I had been exposed to the fundamental primitives and control flow techniques in Javascript. The challenge
at this time would be to expand my intuition of "Object thinking" and Event Driven programming.
- A fellow peer of mine had been obsessively playing the game 'OSU' which is a point-and-click rhythm game that requires
  incredible hand-eye coordination. This seemed like something I could attempt to make, where features were discrete
  enough to be analyzed.
![OSU GAMEPLAY](/dest_images/128-compressed-osu-rhythm-game.gif)

## ANALYSIS
- Determined that a game-style that already had precedence would provide a better metric of my progress. I could
  spend more time iterating inistead of ideating.
- Estimated that I would struggle with asynchronous functions/events, collision detection math and particle effects.

## DEVELOPMENT CHALLENGES & IMPLEMENTATION
- The development went smoothly enough toward the MVP however many design errors became evident if you initialized the
  game with too many objects. I later learned about Javascript's internal garbage collection mechanism.
- Using `setInterval` introduced jittering in the animation, so I moved to `window.requestAnimationFrame()`
- Misunderstanding of the complexity of filtering, debouncing for beat-detection algorithm lead to a dead end.
  Since development time was limited, I had to abandon this feature. Alternative options included using MIDI files
  whose encodings were definite and could be utilized reliably to read for 'events'.
- In the time that I had, I could not figure out how to draw bezier shapes unto the screen.

## IMPACT AND RESULTS
- I was exposed to the many challenges of software engineering in a short period of time. I encountered garbage
  collection, implementation tradeoffs, user experience considerations.
- I learned the value of modularizing code and developing discrete components. Hard coding things lead to a difficulty
  in development down the road.
- Utilizing objects with a 'lifetime' (expansion/contraction) cycle allowed me to help others who were struggling with
  'object removal' in their projects.

## RECCOMENDATIONS
- These types of games usually have a scripting language and an interpreter to generate 'levels/maps'. Instead of
  randomly generating shapes and events, we can open up the program to some level of customization, predictability and
  control. This solves certain implementation challenges as the relationship between events, display and music are
  pre-determined.
- Investigate alternatives to depending upon V8 garbage collection i.e. utilizing object stores and caches. 
- Be more rigorous with object lifetimes to prevent memory leaks.

## FOLLOWUP
Taking a more game-development approach, the code has been modularized into a set of managers with a core EventManager
class orchestrating the other managers. This allows me to take a more event-centric approach, where I can dispatch
events with more control.

In practice, this allows me to seperate various concerns and decouple rendering and updates into their own modules.


Additionally, I have taken great efforts to integrate the Menu into the dispatch system but am currently figuring out
the best-practices regarding HTML overlays over Canvas Elements.

```javascript
export default class GameManager {
    constructor(globalWindow) {
        this.EventManager = EventManager
        this.RenderManager = new RenderManager(this.EventManager, 600, 600);
        this.ObjectManager = new ObjectManager(this.EventManager, this.RenderManager);
        this.CollisionManager = new CollisionManager(this.EventManager, this.ObjectManager);
        this.InputManager = new InputManager(this.EventManager, globalWindow, this.RenderManager, this.ObjectManager);
        this.isRunning = false;
        this.initialize();
    }
    initialize() {
        this.registerEventListeners();
        this.start()

    }
    registerEventListeners() {
        console.log("....registering...")
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.ObjectManager.createTestObject(20)
        this.GameLoop();
    }
    stop() {
        this.isRunning = false;
    }
    GameLoop() {
        if (!this.isRunning) return;
        this.update();
        this.render();
        requestAnimationFrame(this.GameLoop.bind(this));
    }
    update() {
        this.ObjectManager.updateAll();
    }
    render() {
        const entities = this.ObjectManager.getAllEntities();
        this.RenderManager.render(entities);
    }
    handleGameOver() {
        this.stop();
    }
}



```

## CONCLUSION
- All in all, I had a great time developing this project.





