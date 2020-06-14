# Waldo Frontend API Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Installation
- clone 
- run `npm install`
- update the `environments/environment.ts` and `environment/environment.prod.ts` and add the values for the `google_key` and `access_key` which I sent in the email.
- run the app either for development server or build the project please refer below


### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.



## Technical Task
- I used Angular 9 to complete this task. I didn't use the Ajax Call as I used Angular HTTP Observable method capability.
- For the  Responsive Framework I used  `mdbootstrap` package
- For the status, gender -> I used icons to represent the value
- For the email and phone number -> I used an anchor link, so I don't need to display them.
- For the address  ->  displayed in the modals, and the longitude & Latitude are displayed as google maps.
- For the pagination, since I don't have definite number of profiles then I only added 'Previous' and 'Next'
- To display the Google Map, I used `AgmCoreModule` package


## Estimated Time To Complete
Overall I spent 4 hours to complete. 


## Screenshots

![Screenshot](https://aralovelace.files.wordpress.com/2020/06/list_profile_nav.png)

![Screenshot 2](https://aralovelace.files.wordpress.com/2020/06/screenshot-2020-06-14-at-10.00.14.png)
