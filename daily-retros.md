# Retros

## 12/5/19
- What went well
  - We shared ideas and did a good job saving "rabbit-hole" ideas for later, by marking them on sticky notes so we could proceed with development
  - We mobbed most of the day
  - Our biggest challenge early on was the Auth0 inegration. We had learned that Auth0 would replace any login that we would code ourselves (instead of layering on top of our own login)

## 12/6/19
- What went well
  - React Spring (Abbey and Maeve) works! There is a relationship between the React Spring syntax and the syntax for animation keyframes. Range and output (Spring) are equivalent to value and timing (keyframes).
  - Making Spring responsive to changes in state
    - The animation responds to new values for range and output when a piece of the state inside the useSpring call changes. We used a toggle to change the boolean piece of state in useSpring
  - Everything is deployed!
  - Testing is operational. The auth0 module had to be mocked before enzyme could do the shallow snapshot of App. We used a pattern that Ryan helped to discover. The pattern involves creating a jest mock for the source of the imported module and setting it to an empty object. Any exported functions can be mocked by inserting them into the empty object. It was perfect for our situation.
  - We have more routes - but will need even more since our re-prioritization conversations this afternoon.
- What didn't go well
  - We spent some time trying to track down an error we thought was related to CORS but it was a typo in the backend route
- Weekend goals:
  - hello world tutorials for React Native 
  - more animations if time allows
  - Acheivements component if time allows
- Directions for MindDrift
  - In progress items to be knocked out:
    - Styling 
    - Settings component
  - Primary functionalities to be added:
    1. Save Settings vertical slice
    2. Mobile (second highest priority if we feel confident we can finish it)
    3. Acheivements
  - Deprioritized stretch goals
    - Journaling
    - Using local storage during offline mode
    - Having offline access to the app for users who don't have a stored JWT

    ## 12/9/2019
    — Maeve tackled Auth0 with React Native, and ran into some hurdles that we will debate on crossing later in the week. 
    — Auth0 Social keys need extra validation. 
      — Abbey to work on Facebook key this evening.
    — We are now able to select settings and breathe. 
    — Going Forward:
      1. Additional Styling: icons on Navbar, transitions on page change, settings form/plus sign, make sure size is responsive for tablet
        * Fix log out button sliding to left on wide screens
      2. Make edit button functional/Settings Form
      3. Day/Night Mode
      4. Animation
      5. Code Review/Refactor
    -What Went Well:
      - Got the majority of the styling completed today. Mostly using vanilla CSS.
      — Settings vertical slice completed! A lot of execution happened today, and a lot of redux!
    — What Didn't Go So Well: 
      — Because we worked independently, there are now some holes we have to go back and fill. 
    — Could also go back and refactor some CSS. 

## 12/10/2019
-What Went Well:
  * New animation by Maeve looks beautiful and is completely functional!
  * Finished put and delete routes in settings.
  * New logo on the homepage!
  * The settings form is now fully functional and able to be edited and added to. 
  * Testing is important, but not very fun. We've decided to share the load moving forward and doing a bit of it every day. We did some front-end and back-end testing today including all settings routes. 
  * Dave fully understands redux!
— What Didn't Go So Well: 
  * Put route took a while, despite also testing all the other routes along the way.

## 12/11/2019
- What went well
  - Icons look great!
  - User Experience fixes
  - The way we used the morning time to split our time and tackle many low hanging issues
  - Mobbing is a good way to get hyped about the project (Mid week afternoon lull)
  - Vertical slice for achievements, that also required a new model for Users - we got the help we needed in a timely fashion
- What Didn't go so well
  - mid week afternoon lull
  - no testing, even though we had planned on it
- priorities for tomorrow
  1. Testing
  2. 
- Tech Talk Ideas
  - animation by Maeve - react spring, etc...
  - after the post route, chaining additional actions on that fed information into other Models (cross routes)
  - Auth0 ???
  - Settings - new vs edit (post vs. Put) ... and redux used judiciously

- Narrative flow
  - front end space
    - psychology of the front end space: colors, clicks, minimalist look, gentle-ness
      - fade in animations
      - React Spring
        - learning about the keyframes and the range
        - integration with the settings
    - Breathing page is the most interesting place on the front end
      - It uses a blend of React hooks and Redux. Redux for settings that come from another page (needs global context). React hooks for internal timing of the animation based on the global settings
  - session data and data over time
    - how stats are displayed (impact to user)
    - how we get the information through 2 clear pipelines
      - in one pipeline, the information is growing all the time
      - in the acheivements pipeline, the information is making occasional updates
  - The back end space
    - models and their interconnectedness
      - the hidden users table
    - achievements routes
      - the general route and a route that is specialized to get new info for the toasts
    - back end was pretty straightforward
      - TBD if we want to talk about firebase and the backend security improvments
