# Suggestion Form

## Description and High Level Plan
We will be building a web form to collect suggestions from users.

1. Static web form
1. Web form that prints out contents when the submit button is pressed
1. Web form that sends contents to Parse when submit button is pressed
1. Web form that sends contents to Parse when submit button is pressed and the information in the form is valid

## Prerequisites
- [What is HTML?](http://www.w3schools.com/html/html_intro.asp)
- [HTML Editors](http://www.w3schools.com/html/html_editors.asp)
- [What is Javascript?](http://www.w3schools.com/js/js_intro.asp)

## Resources
A list of all the resources mentioned in this action plan:
- [Building Forms](http://learn.shayhowe.com/html-css/building-forms/)
- [How to link Javascript to HTML](http://www.w3schools.com/js/js_whereto.asp)
- [Javascript onsubmit](http://www.w3schools.com/jsref/event_onsubmit.asp)
- [Window alert() Method](http://www.w3schools.com/jsref/met_win_alert.asp)
- [What is Parse? (read just the beginning)](http://www.devfright.com/parse-com/)
- [Parse Getting Started](https://parse.com/apps/quickstart#parse_data/web/existing)
- [Parse objects](https://parse.com/docs/js/api/classes/Parse.Object.html)
- [Form `required` attribute](http://www.w3schools.com/tags/att_input_required.asp)

## Plan

### 1. Static Web Form
*We begin by simply laying out the web form using HTML and CSS*.  
Build a static web form using only HTML. Refer to [Building Forms](http://learn.shayhowe.com/html-css/building-forms/).

- [ ] There are fields for name, date, and suggestion.
- [ ] The input elements / text areas have the right type.
- [ ] Each input element / text area has a descriptive label.
- [ ] There is a submit button.

### 2. Web form that prints out contents when the submit button is pressed
*We make the web form interactive using Javascript. We first make sure that the JavaScript is correctly hooked up to the HTML*.  
Add a JavaScript file to the HTML. [How to link Javascript to HTML](http://www.w3schools.com/js/js_whereto.asp).  
Attach an event listener to the form such that when the submit button is pressed, the contents of the form are shown to the user in a new window. [Javascript onsubmit](http://www.w3schools.com/jsref/event_onsubmit.asp), [Window alert() Method](http://www.w3schools.com/jsref/met_win_alert.asp) 

- [ ] My JavaScript is in a separate file from my HTML.
- [ ] When I click submit, the contents of my form are shown to me in a alert box.

### 3. Web form that sends contents to Parse when submit button is pressed
*We want to save all of the form data that users submit. We do this by using a cloud database service named Parse*.   
Create a Parse account and create a new App. [What is Parse? (read just the beginning)](http://www.devfright.com/parse-com/)  
Adapt the "Getting Started" example to send the contents of your form to your Parse database. [Parse Getting Started](https://parse.com/apps/quickstart#parse_data/web/existing), [Parse objects](https://parse.com/docs/js/api/classes/Parse.Object.html)

- [ ] I can see data from submitted forms in the Parse Core.

### 4. Web form that sends contents to Parse when submit button is pressed and the information in the form is valid
*We want to prevent spammers from submitting incomplete forms and cluttering the Parse database*.  
We can prevent users from submitting incomplete forms using the [Form `required` attribute](http://www.w3schools.com/tags/att_input_required.asp).

- [ ] My form does not send data to Parse if the form is not filled out.