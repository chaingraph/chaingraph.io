# chaingraph.io

ChainGraph landing page bootstrapped with Gatsby.js

## Structure

Chaingraph follows Blockmatic's [Hook Architecture](https://github.com/blockmatic/hooks-architecture) and [Contribution Guidelines](https://developers.blockmatic.io/open-source/contributing-guidelines) as is and as it needs on this repository; it also includes Blockmatic's [dev-configs](https://github.com/blockmatic/dev-configs) implementation.

### What does it have

- **State Management:** Redux style but state is managed with native React `useContext` + `useReducer` with a helper package [unstated-next](https://github.com/jamiebuilds/unstated-next) at [`./src/store`](https://github.com/chaingraph/chaingraph.io/tree/main/src/store) depending the area where the state will be controlled and easy to follow. This state management is divided by 2 custom hooks, `useGlobalStore` and `useSubscriptionStore`, where:

  - [`useGlobalStore.js`](https://github.com/chaingraph/chaingraph.io/blob/main/src/store/hooks/useGlobalStore.js): It represents the most global states on all site, where it controls *user preferred theme*, *user scroll reading*, *user mobile/tablet state* (if we need to do JS changes on render cicles), with `userThemeHandler(active_debug)`, `scrollStateHandler(active_debug)` and `mobileStateHandler(active_debug)` functions respectively, where:
     1. `userThemeHandler(active_debug)`: Controls and reads user theme, by default, it sets user preferred theme from browser and save it on a `session-cookie` with [`universal-cookie`](https://www.npmjs.com/package/universal-cookie) that helps us to maintain user's theme on SSR.
     2. `scrollStateHandler(active_debug)`: It manage 3 different states that, in some way would help us to create animations, interactions on the UI and boost UX, those are:
        - `height`: `NUMBER`, current user position on actual screen.
        - `yOffset`: `NUMBER`, helps to read previous user real position and identify if is scrolling up/down.
        - `scroll`: `BOOL`, it reads if user has scroll down or not.
     3. `mobileStateHandler(active_debug)`: Sets whenever user screen, a.k.a. `innerWidth` is from mobile or not.
  - [`useSubscriptionStore.js`](https://github.com/chaingraph/chaingraph.io/blob/main/src/store/hooks/useSubscriptionStore.js): Manage all subscription logic and UI feedback that is involved, quite simple but useful, since we use [Mailchimp](https://mailchimp.com) for it and a [Mailchimp gatsby plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-mailchimp/) adaptation for the use of the subscription method, with functions `sendSubscriptionRequest(email, options, active_debug)` and `modalConfirm(active_debug)`, where:
     1. `sendSubscriptionRequest(email, options, active_debug)`: Holds the send of subscription request, which within it has a note about how it works under the hood. This updates some values for the end user so they can know if they're subscribed or not, if there is an error or not, kept on the subscription initial state value called `msg` and `error` respectably.
     2. `modalConfirm(active_debug)`: Function controller for the modal notification feedback for the end user, returning only false for the closing of this Modal notification.

- **UI Components:** Created with [emotion](https://emotion.sh/) and [styled-system](https://styled-system.com/), contained at [`./src/components/UI`](https://github.com/chaingraph/chaingraph.io/tree/main/src/components/UI), referencing each one on the index.js file within this folder, so we can call it faster and globally, if someday we add a feature like [Storybook](https://storybook.js.org/) to future projects or with this one too; either way, the components management are split.
  - Others that are *"unique"* are within the folder that represent page components, such as [`blockchain.js`](https://github.com/chaingraph/chaingraph.io/blob/main/src/components/home/blockchain.js) for example; some of them can be used on different repositories that may have same logic, such as [`subscribe.js`](https://github.com/chaingraph/chaingraph.io/blob/main/src/components/home/subscribe.js) as an example too.
  - Every UI Components follow a theme structure, where it is divided most of it by colors, due it is basically the only area where it would change between repositories similar to this one, bootstrapped with Gatsby.js. Here we can define basics theme colors and it has a helper too `getColors(palette, component, key)` where navigates through the theme color structure. This is located at [`src/utils/utility.js`](https://github.com/chaingraph/chaingraph.io/blob/main/src/utils/utility.js).

- **Animation Control:** Actions and styles according the user interaction on the site are integrated with [Framer Motion](https://www.framer.com/motion/) on the majority of UI components, with 2 different ways to manage the mobile styles: `JS = addEventListener` and `CSS-in-JS = emotion` and using them depending our development needs. Also with the control of user's preferred theme, we can read the user preferences at first and user may be able to change the theme and be stored by session cookie for faster read before DOM rendering.
  - Animations has a base transition object, that it can be pass by only adding the attribute `transition`, i.e.:

  ```javascript
    export const component = () => {
      const DURATION = 0.5 // any duration on seconds
      const DELAY = 0 // any delay (if necessary) on seconds

      const transition = {
        repeat: Infinity, // if we have an animation loop
        duration: DURATION,
        repeatType: 'reverse', // if we have an animation loop
        ease: 'linear' || 'easeInOut', // 'easeInOut' is default, 'linear' is defined for animation loops
        type: 'spring',
        stiffness: 144,
        delay: DELAY,
      }
      const animate = {
        x: 0, // transform: translateX(0px)
        opacity: 1
      }
      const initial = {
        x: -100,
        opacity: 0
      }

      return (
        <motion.div
          transition={transition}
          animate={animate}
          initial={initial}
        />
      )
    }
  ```

  This base transition can be used on one time animation, loops or UI feedback, anything. Depending what we want; by default the cubic bezier has like a bounce effect at the end of animate state and that gives a good UI Feedback feeling.

  > But, what if we want to create an animation loop? How do we achieve it without much complexity?

  We can do it by thinking about keyframe or steps, long story short, this could be represented as an `array` on the `motion` attribute called `animate`, passing an object with the value that we want animate, where each value represent a percentage of the keyframe, i.e.:

  ```css
    @keyframes slide-loop {
      0% { transform: translateX(0px); }
      25% { transform: translateX(-100px); }
      50% { transform: translateX(100px); }
      75% { transform: translateX(-50px); }
      100% { transform: translateX(50px); }
    }

    div.slide-loop--animation {
      animate: slide-loop 10s linear infinity reverse;
    }
  ```

  Can be easily translate as:

  ```javascript
    /* INSIDE REACT COMPONENT */
    const transition = {
      repeat: Infinity,
      duration: 10,
      repeatType: 'reverse',
      ease: 'linear', // Depending of the loop, is ideal to use linear cubic-bezier, that depends on our perspective at the end
      type: 'spring',
      stiffness: 144,
    }
    const animate = {
      x: [0, -100, 100, -50, 50], // @keyframe slide-loop
    }
    const initial = {
      x: 0,
    }

    return (
      <motion.div
        transition={transition}
        animate={animate}
        initial={initial}
      />
    )
  ```

  It is important though, that the initial value on the array is the value that we define on the `motion` component with the attribute `initial`, so the loop continue smoothly and, we might be able too, to define the first value as `null` on the array and `framer-motion` takes it as the initial value previously defined.

  Now, we can orchestrate this by passing child animation calls, which is called [motion orchestration](https://www.framer.com/api/motion/animation/#orchestration), adding [motion variants](https://www.framer.com/api/motion/animation/#dynamic-variants) or [motion propagation](https://www.framer.com/api/motion/animation/#propagation) but thats depend by 2 questions:

  - Do we want an animation that needs to transite before/after any children/siblings that are on the parent component and then create a kind of orchestral animation loop? Such as our hands, when we move individually our fingers in order to create a wave and looping this movement over and over (waiting with anxiety hand gesture).
  - Does the animation needs to be created as an individual movement, where we need to create a kind of perspective where show a natural movement? Such as leafs when the wind blows, it doesn't move orchestrally but it follows a pattern, moving individually but pointing on the same direction.


  > Both can be achieve by taking in consideration 2 things: `transform-style: preserve-3d` and `transform-origin`. Both depends on this very often and we need to think in 3D and how things really moves in our environment so we can translate it on 2D, just like `blockchain.js` component, I thought about space and how things moves on space, and as reference, it doesn't move exactly in a direction, but it follows a pattern, some solid state of matter moves sideways, other up/down, and others both, but those depends on solid state of matter inertia and his hypothetical mass and volume.


## Utilities

We may find different function utils at [`./src/utils/utility.js`](https://github.com/chaingraph/chaingraph.io/blob/main/src/utils/utility.js), such as `getColors(palette, component, key)`, and:
  
- `updateObject(oldObject, updatedProperties)`: A very useful function where help us to maintain a lean object mutation, passing as first parameter the object that we want to mutate and the second one (an object) the values that we want to update, i.e.:
  
```javascript
  const object = {
    first: 'value',
    second: 2,
    third: {
      first: 'on third value',
      second: {
        first: false,
      },
    },
    fourth: [1, 2, 3],
  }

  const mutatedObject = updateObject(object, {
    second: 4,
    third: {
      ...object.third,
      second: {
        ...object.third.second,
        first: true,
      },
    },
    fourth: [...object.fourth, 4]
  })
```

Observe that we always need to do spread operators for safe mutations due JS cannot do deep copies of objects, which is OK.
- `checkValidity(value, rules, password, confirm_password)`: userful utility for form input validations, as first parameter, the value that we want to check, second the rules that we want to apply—which are already defined within the function so we may reference them on usage—and third and fourth are pure for password input validation.

> But, how do we process these validations?

We create an object, where we can define the input type, attributes and else so those could be read for `<Input />` component at [`./src/components/UI/input.js`](https://github.com/chaingraph/chaingraph.io/blob/main/src/components/UI/input.js) and object structure as follows:

```javascript
  const input = {
    elementType: 'email',
    elementConfig: {
      type: 'text',
    },
    label: 'Email',
    value: '',
    validation: {
      required: true,
      valid: false,
      touched: false,
      emailFormat: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
  }
```

You may find a specific structure of this at [`./src/components/home/subscribe.js`](https://github.com/chaingraph/chaingraph.io/blob/main/src/components/home/subscribe.js) as an example.
- `debug(type, value)`: debug helper that was designed for store actions functions for every steps of actions that this site does, taking the first parameter the `type` of action called and the `value`, which is an object that contains the affected values, but by debug propose, we must pass an object with the current state value and the new value that we will assign in order to see which part of the action cicle is failing, and this `debug` function can be activated IF, we pass the parameter called `active_debug` as `BOOL true` so console can shout the action and the state.

### WIP: Contributors, File Structure and something else that I might be missing here
