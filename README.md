# React and Bootstrap Implementation of a Parking Cost Calculator

Standard react npm commands

## ToDo:

    - *BUG* Fractional hours (aka minutes) not translating to price correctly.
    - Improve ReadOut for easier multi-day and mutli-week values.
    - Fix calculate cost function so it doesn't need the hours parked as parameter.
    - Find a better UI/UX for picking a date time. (Maybe something that disallows inverting entry exit and doesn't so much code to convert to and from JS Date).
    - Make it obvious to user when read out values no longer match input (i.e. Calculate hasn't been pressed.)
    - Makefile for build, test, deploy.
    - Find and link to hosted version of original calculator.
    - Dockerize
        - Prod
            - Create actual dependency file for Yarn instead of calling it in Dockerfile.
        - Dev
            - Mount code volume
    - Add tests:
        - integration
        - unit
    - Profit
