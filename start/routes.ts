/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  const quotes = [
    'Turn the pain into power.',
    'Life may be full of pain but that is not an excuse to give up.',
    'There are no shortcuts - everything is reps, reps reps.',
    'Doing nothing is easy. That is why so many people do it.',
    'Work harder than you did yesterday.',
    'Be passionate. This is the only way to be among the best.',
    'If you dont find the time. If you dont do the work, you dont get the results.',
  ]

  return `Arnold Quote of the Day: ${quotes[Math.floor(Math.random() * quotes.length)]}`
})
